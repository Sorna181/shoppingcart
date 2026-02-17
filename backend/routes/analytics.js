const express = require('express');
const router = express.Router();
const Analytics = require('../models/Analytics');
const Product = require('../models/Product');
const Cart = require('../models/Cart');

// Get daily analytics
router.get('/daily/:date?', async (req, res) => {
  try {
    const date = req.params.date ? new Date(req.params.date) : new Date();
    date.setHours(0, 0, 0, 0);

    let analytics = await Analytics.findOne({ date }).populate('popularProducts.productId');
    
    if (!analytics) {
      // Generate analytics for the date
      analytics = await generateDailyAnalytics(date);
    }

    res.json(analytics);
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

// Get analytics summary for date range
router.get('/summary', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    const start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const end = endDate ? new Date(endDate) : new Date();

    const analytics = await Analytics.find({
      date: { $gte: start, $lte: end }
    }).sort({ date: -1 });

    const summary = {
      totalUsers: analytics.reduce((sum, day) => sum + day.totalUsers, 0),
      totalSavings: analytics.reduce((sum, day) => sum + day.totalSavings, 0),
      averageSavingsPerUser: 0,
      topCategories: {},
      platformPerformance: {
        dummyjson: { totalProducts: 0, averagePrice: 0, totalSales: 0 },
        fakestore: { totalProducts: 0, averagePrice: 0, totalSales: 0 },
        amazon: { totalProducts: 0, averagePrice: 0, totalSales: 0 }
      },
      dailyTrends: analytics.map(day => ({
        date: day.date,
        users: day.totalUsers,
        savings: day.totalSavings
      }))
    };

    // Calculate averages
    if (summary.totalUsers > 0) {
      summary.averageSavingsPerUser = summary.totalSavings / summary.totalUsers;
    }

    // Aggregate platform performance
    analytics.forEach(day => {
      Object.keys(summary.platformPerformance).forEach(platform => {
        if (day.platformPerformance[platform]) {
          summary.platformPerformance[platform].totalProducts += day.platformPerformance[platform].totalProducts || 0;
          summary.platformPerformance[platform].totalSales += day.platformPerformance[platform].totalSales || 0;
        }
      });
    });

    // Calculate average prices
    Object.keys(summary.platformPerformance).forEach(platform => {
      const platformData = summary.platformPerformance[platform];
      if (platformData.totalProducts > 0) {
        platformData.averagePrice = platformData.totalSales / platformData.totalProducts;
      }
    });

    res.json(summary);
  } catch (error) {
    console.error('Error fetching analytics summary:', error);
    res.status(500).json({ error: 'Failed to fetch analytics summary' });
  }
});

// Get real-time metrics
router.get('/realtime', async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Active carts today
    const activeCarts = await Cart.countDocuments({
      updatedAt: { $gte: today },
      'items.0': { $exists: true }
    });

    // Total products
    const totalProducts = await Product.countDocuments();

    // Products updated in last hour
    const recentlyUpdated = await Product.countDocuments({
      $or: [
        { 'platforms.dummyjson.lastUpdated': { $gte: new Date(Date.now() - 60 * 60 * 1000) } },
        { 'platforms.fakestore.lastUpdated': { $gte: new Date(Date.now() - 60 * 60 * 1000) } },
        { 'platforms.amazon.lastUpdated': { $gte: new Date(Date.now() - 60 * 60 * 1000) } }
      ]
    });

    // Average cart value today
    const cartStats = await Cart.aggregate([
      { $match: { updatedAt: { $gte: today }, 'items.0': { $exists: true } } },
      { $group: { _id: null, avgValue: { $avg: '$totalOptimizedPrice' }, totalSavings: { $sum: '$totalSavings' } } }
    ]);

    res.json({
      activeCarts,
      totalProducts,
      recentlyUpdatedProducts: recentlyUpdated,
      averageCartValue: cartStats[0]?.avgValue || 0,
      totalSavingsToday: cartStats[0]?.totalSavings || 0,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Error fetching real-time metrics:', error);
    res.status(500).json({ error: 'Failed to fetch real-time metrics' });
  }
});

// Generate daily analytics
async function generateDailyAnalytics(date) {
  try {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);

    // Count unique users (carts) for the day
    const totalUsers = await Cart.countDocuments({
      updatedAt: { $gte: date, $lt: nextDay }
    });

    // Calculate total savings
    const savingsResult = await Cart.aggregate([
      { $match: { updatedAt: { $gte: date, $lt: nextDay } } },
      { $group: { _id: null, totalSavings: { $sum: '$totalSavings' } } }
    ]);
    const totalSavings = savingsResult[0]?.totalSavings || 0;

    // Get popular products (most added to cart)
    const popularProducts = await Cart.aggregate([
      { $match: { updatedAt: { $gte: date, $lt: nextDay } } },
      { $unwind: '$items' },
      { $group: { _id: '$items.productId', addedToCart: { $sum: '$items.quantity' } } },
      { $sort: { addedToCart: -1 } },
      { $limit: 10 },
      { $lookup: { from: 'products', localField: '_id', foreignField: '_id', as: 'product' } },
      { $project: { productId: '$_id', addedToCart: 1, views: '$addedToCart' } }
    ]);

    // Platform performance
    const platformPerformance = {
      dummyjson: await calculatePlatformStats('dummyjson'),
      fakestore: await calculatePlatformStats('fakestore'),
      amazon: await calculatePlatformStats('amazon')
    };

    // Category insights
    const categoryInsights = await Product.aggregate([
      { $group: { 
          _id: '$category', 
          totalProducts: { $sum: 1 },
          avgDummyJsonDiscount: { $avg: '$platforms.dummyjson.discount' },
          avgFakeStoreDiscount: { $avg: '$platforms.fakestore.discount' },
          avgAmazonDiscount: { $avg: '$platforms.amazon.discount' }
        }
      },
      { $project: {
          category: '$_id',
          totalProducts: 1,
          averageDiscount: { 
            $avg: ['$avgDummyJsonDiscount', '$avgFakeStoreDiscount', '$avgAmazonDiscount'] 
          },
          popularityScore: { $multiply: ['$totalProducts', 10] }
        }
      }
    ]);

    const analytics = new Analytics({
      date,
      totalUsers,
      totalSavings,
      popularProducts,
      platformPerformance,
      categoryInsights
    });

    await analytics.save();
    return analytics;
  } catch (error) {
    console.error('Error generating daily analytics:', error);
    throw error;
  }
}

// Calculate platform statistics
async function calculatePlatformStats(platform) {
  const stats = await Product.aggregate([
    { $match: { [`platforms.${platform}.available`]: true } },
    { $group: {
        _id: null,
        totalProducts: { $sum: 1 },
        averagePrice: { $avg: `$platforms.${platform}.price` },
        totalSales: { $sum: `$platforms.${platform}.price` }
      }
    }
  ]);

  return stats[0] || { totalProducts: 0, averagePrice: 0, totalSales: 0 };
}

module.exports = router;