const Product = require('../models/Product');
const apiService = require('./apiService');
const cron = require('node-cron');

class PriceUpdateService {
  // Update all product prices from APIs
  async updateAllProductPrices() {
    try {
      console.log('Starting price update process...');
      
      const products = await Product.find({});
      let updatedCount = 0;

      for (const product of products) {
        try {
          await this.updateProductPrice(product);
          updatedCount++;
        } catch (error) {
          console.error(`Error updating product ${product._id}:`, error.message);
        }
      }

      console.log(`Price update completed. Updated ${updatedCount} products.`);
      return { success: true, updatedCount };
    } catch (error) {
      console.error('Error in price update process:', error);
      throw error;
    }
  }

  // Update individual product price
  async updateProductPrice(product) {
    try {
      let updated = false;

      // Update DummyJSON price if available
      if (product.externalId.startsWith('dummyjson_')) {
        const id = product.externalId.replace('dummyjson_', '');
        try {
          const response = await apiService.dummyJsonAPI.get(`/products/${id}`);
          const apiProduct = response.data;
          
          const newPrice = Math.round(apiProduct.price * (1 - apiProduct.discountPercentage / 100));
          
          if (product.platforms.dummyjson.price !== newPrice) {
            // Store price history
            product.priceHistory.push({
              platform: 'dummyjson',
              price: product.platforms.dummyjson.price,
              timestamp: new Date()
            });

            // Update current price
            product.platforms.dummyjson.price = newPrice;
            product.platforms.dummyjson.originalPrice = apiProduct.price;
            product.platforms.dummyjson.discount = apiProduct.discountPercentage;
            product.platforms.dummyjson.rating = apiProduct.rating;
            product.platforms.dummyjson.lastUpdated = new Date();
            updated = true;
          }
        } catch (apiError) {
          console.log(`API error for DummyJSON product ${id}:`, apiError.message);
        }
      }

      // Update FakeStore price if available
      if (product.externalId.startsWith('fakestore_')) {
        const id = product.externalId.replace('fakestore_', '');
        try {
          const response = await apiService.fakeStoreAPI.get(`/products/${id}`);
          const apiProduct = response.data;
          
          const newPrice = Math.round(apiProduct.price * 0.9); // Simulate 10% discount
          
          if (product.platforms.fakestore.price !== newPrice) {
            // Store price history
            product.priceHistory.push({
              platform: 'fakestore',
              price: product.platforms.fakestore.price,
              timestamp: new Date()
            });

            // Update current price
            product.platforms.fakestore.price = newPrice;
            product.platforms.fakestore.originalPrice = apiProduct.price;
            product.platforms.fakestore.rating = apiProduct.rating?.rate || 4.0;
            product.platforms.fakestore.lastUpdated = new Date();
            updated = true;
          }
        } catch (apiError) {
          console.log(`API error for FakeStore product ${id}:`, apiError.message);
        }
      }

      // Simulate Amazon price updates (random fluctuation)
      if (product.platforms.amazon) {
        const variation = 0.95 + Math.random() * 0.1; // ±5% price variation
        const newPrice = Math.round(product.platforms.amazon.price * variation);
        
        if (Math.abs(product.platforms.amazon.price - newPrice) > 1) {
          // Store price history
          product.priceHistory.push({
            platform: 'amazon',
            price: product.platforms.amazon.price,
            timestamp: new Date()
          });

          product.platforms.amazon.price = newPrice;
          product.platforms.amazon.lastUpdated = new Date();
          updated = true;
        }
      }

      // Limit price history to last 30 entries
      if (product.priceHistory.length > 30) {
        product.priceHistory = product.priceHistory.slice(-30);
      }

      if (updated) {
        await product.save();
      }

      return updated;
    } catch (error) {
      console.error(`Error updating product ${product._id}:`, error);
      throw error;
    }
  }

  // Add price volatility simulation
  simulatePriceVolatility() {
    // This could be enhanced with ML models for realistic price patterns
    const volatilityFactors = {
      seasonal: Math.sin(Date.now() / (1000 * 60 * 60 * 24 * 30)) * 0.1, // Monthly cycle
      random: (Math.random() - 0.5) * 0.05, // Random ±2.5%
      trend: Math.sin(Date.now() / (1000 * 60 * 60 * 24 * 7)) * 0.03 // Weekly trend
    };

    return 1 + volatilityFactors.seasonal + volatilityFactors.random + volatilityFactors.trend;
  }
}

module.exports = new PriceUpdateService();