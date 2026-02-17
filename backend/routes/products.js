const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const apiService = require('../services/apiService');
const optimizerService = require('../services/optimizerService');

// Get all products with filtering and pagination
router.get('/', async (req, res) => {
  try {
    const { 
      category, 
      search, 
      page = 1, 
      limit = 20, 
      sortBy = 'name',
      sortOrder = 'asc' 
    } = req.query;

    const query = {};
    
    // Category filter
    if (category && category !== 'All') {
      query.category = category;
    }
    
    // Search filter
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { keywords: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const products = await Product.find(query)
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Product.countDocuments(query);

    // Add AI optimization data to each product
    const optimizedProducts = products.map(product => {
      const bestPrice = optimizerService.findBestPrice(product);
      const savings = optimizerService.calculateSavings(product);
      
      return {
        ...product.toObject(),
        bestPrice,
        potentialSavings: savings
      };
    });

    res.json({
      products: optimizedProducts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get single product with AI recommendations
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Get AI optimization data
    const bestPrice = optimizerService.findBestPrice(product);
    const savings = optimizerService.calculateSavings(product);
    const similarProducts = await optimizerService.findSimilarProducts(product._id);

    res.json({
      ...product.toObject(),
      bestPrice,
      potentialSavings: savings,
      similarProducts
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Get product categories
router.get('/meta/categories', async (req, res) => {
  try {
    const categories = await Product.distinct('category');
    res.json(['All', ...categories.sort()]);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Sync products from external APIs
router.post('/sync', async (req, res) => {
  try {
    console.log('Starting product sync...');
    
    // Fetch from DummyJSON
    const dummyJsonProducts = await apiService.fetchDummyJsonProducts(50);
    
    // Fetch from FakeStore
    const fakeStoreProducts = await apiService.fetchFakeStoreProducts(20);
    
    let syncedCount = 0;
    
    // Process DummyJSON products
    for (const productData of dummyJsonProducts) {
      try {
        const existingProduct = await Product.findOne({ externalId: productData.externalId });
        
        if (existingProduct) {
          // Update existing product
          existingProduct.platforms.dummyjson = productData.platforms.dummyjson;
          await existingProduct.save();
        } else {
          // Create new product with simulated Amazon data
          productData.platforms.amazon = apiService.simulateAmazonData(productData);
          await Product.create(productData);
        }
        syncedCount++;
      } catch (error) {
        console.error(`Error syncing product ${productData.externalId}:`, error.message);
      }
    }
    
    // Process FakeStore products
    for (const productData of fakeStoreProducts) {
      try {
        const existingProduct = await Product.findOne({ externalId: productData.externalId });
        
        if (existingProduct) {
          // Update existing product
          existingProduct.platforms.fakestore = productData.platforms.fakestore;
          await existingProduct.save();
        } else {
          // Create new product with simulated Amazon data
          productData.platforms.amazon = apiService.simulateAmazonData(productData);
          await Product.create(productData);
        }
        syncedCount++;
      } catch (error) {
        console.error(`Error syncing product ${productData.externalId}:`, error.message);
      }
    }

    console.log(`Product sync completed. Synced ${syncedCount} products.`);
    res.json({ 
      success: true, 
      message: `Successfully synced ${syncedCount} products`,
      syncedCount 
    });
  } catch (error) {
    console.error('Error syncing products:', error);
    res.status(500).json({ error: 'Failed to sync products' });
  }
});

// Get price history for a product
router.get('/:id/price-history', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({
      productId: product._id,
      productName: product.name,
      priceHistory: product.priceHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    });
  } catch (error) {
    console.error('Error fetching price history:', error);
    res.status(500).json({ error: 'Failed to fetch price history' });
  }
});

module.exports = router;