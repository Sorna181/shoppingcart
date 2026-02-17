const express = require('express');
const router = express.Router();
const optimizerService = require('../services/optimizerService');
const Product = require('../models/Product');

// Optimize single product pricing
router.get('/product/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const bestPrice = optimizerService.findBestPrice(product);
    const savings = optimizerService.calculateSavings(product);
    const similarProducts = await optimizerService.findSimilarProducts(product._id);

    res.json({
      productId: product._id,
      bestPrice,
      potentialSavings: savings,
      similarProducts,
      optimization: {
        recommendedPlatform: bestPrice.platform,
        savingsPercentage: savings > 0 ? (savings / bestPrice.price) * 100 : 0,
        lastOptimized: new Date()
      }
    });
  } catch (error) {
    console.error('Error optimizing product:', error);
    res.status(500).json({ error: 'Failed to optimize product' });
  }
});

// Get price comparison for multiple products
router.post('/compare', async (req, res) => {
  try {
    const { productIds } = req.body;
    
    if (!Array.isArray(productIds) || productIds.length === 0) {
      return res.status(400).json({ error: 'Product IDs array is required' });
    }

    const products = await Product.find({ _id: { $in: productIds } });
    
    const comparisons = products.map(product => {
      const bestPrice = optimizerService.findBestPrice(product);
      const savings = optimizerService.calculateSavings(product);
      
      return {
        productId: product._id,
        productName: product.name,
        category: product.category,
        platforms: Object.entries(product.platforms)
          .filter(([, data]) => data && data.available)
          .map(([platform, data]) => ({
            platform,
            price: data.price,
            originalPrice: data.originalPrice,
            discount: data.discount,
            rating: data.rating
          })),
        bestPrice,
        potentialSavings: savings
      };
    });

    res.json({ comparisons });
  } catch (error) {
    console.error('Error comparing products:', error);
    res.status(500).json({ error: 'Failed to compare products' });
  }
});

// Get AI-powered shopping recommendations
router.get('/recommendations/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { budget, preferences } = req.query;

    let query = {};
    if (category !== 'all') {
      query.category = category;
    }

    const products = await Product.find(query).limit(50);
    
    const recommendations = products
      .map(product => {
        const bestPrice = optimizerService.findBestPrice(product);
        const savings = optimizerService.calculateSavings(product);
        
        return {
          product: {
            _id: product._id,
            name: product.name,
            category: product.category,
            image: product.image
          },
          bestPrice,
          potentialSavings: savings,
          score: this.calculateRecommendationScore(product, bestPrice, savings, budget, preferences)
        };
      })
      .filter(rec => !budget || rec.bestPrice.price <= parseFloat(budget))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    res.json({ recommendations });
  } catch (error) {
    console.error('Error generating recommendations:', error);
    res.status(500).json({ error: 'Failed to generate recommendations' });
  }
});

// Calculate recommendation score (simple algorithm)
function calculateRecommendationScore(product, bestPrice, savings, budget, preferences) {
  let score = 0;
  
  // Price factor (lower price = higher score)
  score += (1000 - bestPrice.price) / 10;
  
  // Savings factor
  score += savings * 2;
  
  // Rating factor
  const avgRating = Object.values(product.platforms)
    .filter(p => p && p.available)
    .reduce((sum, p) => sum + p.rating, 0) / 
    Object.values(product.platforms).filter(p => p && p.available).length;
  score += avgRating * 20;
  
  // Budget factor
  if (budget) {
    const budgetRatio = bestPrice.price / parseFloat(budget);
    if (budgetRatio <= 0.8) score += 50; // Well within budget
    else if (budgetRatio <= 1) score += 20; // Within budget
  }
  
  return score;
}

// Get market insights
router.get('/insights', async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    
    // Category distribution
    const categoryStats = await Product.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    // Average prices by platform
    const platformStats = await Product.aggregate([
      {
        $project: {
          dummyjsonPrice: '$platforms.dummyjson.price',
          fakestorePrice: '$platforms.fakestore.price',
          amazonPrice: '$platforms.amazon.price'
        }
      },
      {
        $group: {
          _id: null,
          avgDummyJson: { $avg: '$dummyjsonPrice' },
          avgFakeStore: { $avg: '$fakestorePrice' },
          avgAmazon: { $avg: '$amazonPrice' }
        }
      }
    ]);

    // Top savings opportunities
    const products = await Product.find({}).limit(100);
    const topSavings = products
      .map(product => ({
        productId: product._id,
        productName: product.name,
        savings: optimizerService.calculateSavings(product)
      }))
      .filter(item => item.savings > 0)
      .sort((a, b) => b.savings - a.savings)
      .slice(0, 10);

    res.json({
      totalProducts,
      categoryDistribution: categoryStats,
      platformAverages: platformStats[0] || {},
      topSavingsOpportunities: topSavings,
      lastUpdated: new Date()
    });
  } catch (error) {
    console.error('Error generating insights:', error);
    res.status(500).json({ error: 'Failed to generate insights' });
  }
});

module.exports = router;