const Product = require('../models/Product');
const Cart = require('../models/Cart');

class OptimizerService {
  // Find the best price across all platforms for a product
  findBestPrice(product) {
    const platforms = ['dummyjson', 'fakestore', 'amazon'];
    let bestPlatform = null;
    let bestPrice = Infinity;
    
    platforms.forEach(platform => {
      const platformData = product.platforms[platform];
      if (platformData && platformData.available && platformData.price < bestPrice) {
        bestPrice = platformData.price;
        bestPlatform = platform;
      }
    });
    
    return { platform: bestPlatform, price: bestPrice };
  }

  // Calculate potential savings for a product
  calculateSavings(product) {
    const platforms = ['dummyjson', 'fakestore', 'amazon'];
    const prices = platforms
      .map(platform => product.platforms[platform])
      .filter(data => data && data.available)
      .map(data => data.price);
    
    if (prices.length < 2) return 0;
    
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    
    return maxPrice - minPrice;
  }

  // Find similar products based on category and keywords
  async findSimilarProducts(productId, limit = 5) {
    try {
      const product = await Product.findById(productId);
      if (!product) return [];

      const similarProducts = await Product.find({
        _id: { $ne: productId },
        category: product.category,
        $or: [
          { keywords: { $in: product.keywords } },
          { name: { $regex: product.keywords.join('|'), $options: 'i' } }
        ]
      }).limit(limit);

      return similarProducts.map(similar => {
        const bestPrice = this.findBestPrice(similar);
        const originalBestPrice = this.findBestPrice(product);
        const savings = originalBestPrice.price - bestPrice.price;
        
        return {
          productId: similar._id,
          similarity: this.calculateSimilarity(product, similar),
          savings: Math.max(0, savings)
        };
      }).sort((a, b) => b.similarity - a.similarity);
    } catch (error) {
      console.error('Error finding similar products:', error);
      return [];
    }
  }

  // Calculate similarity score between two products
  calculateSimilarity(product1, product2) {
    const keywords1 = new Set(product1.keywords.map(k => k.toLowerCase()));
    const keywords2 = new Set(product2.keywords.map(k => k.toLowerCase()));
    
    const intersection = new Set([...keywords1].filter(k => keywords2.has(k)));
    const union = new Set([...keywords1, ...keywords2]);
    
    return intersection.size / union.size;
  }

  // Optimize cart pricing
  async optimizeCart(cartId) {
    try {
      const cart = await Cart.findById(cartId).populate('items.productId');
      if (!cart) throw new Error('Cart not found');

      let totalOriginalPrice = 0;
      let totalOptimizedPrice = 0;
      const recommendations = [];

      // Optimize each item
      for (let item of cart.items) {
        const product = item.productId;
        const bestPrice = this.findBestPrice(product);
        
        const originalPrice = item.priceAtTime * item.quantity;
        const optimizedPrice = bestPrice.price * item.quantity;
        const savings = originalPrice - optimizedPrice;

        totalOriginalPrice += originalPrice;
        totalOptimizedPrice += optimizedPrice;

        // Update item with optimized pricing
        item.optimizedPrice = bestPrice.price;
        item.savings = Math.max(0, savings);

        // Generate recommendations
        if (savings > 0) {
          recommendations.push({
            type: 'platform',
            message: `Switch to ${bestPrice.platform} to save ₹${savings.toFixed(2)} on ${product.name}`,
            potentialSavings: savings,
            productIds: [product._id]
          });
        }

        // Find alternative products
        const alternatives = await this.findSimilarProducts(product._id, 2);
        alternatives.forEach(alt => {
          if (alt.savings > 0) {
            recommendations.push({
              type: 'substitute',
              message: `Consider similar product with ₹${alt.savings.toFixed(2)} savings`,
              potentialSavings: alt.savings,
              productIds: [alt.productId]
            });
          }
        });
      }

      // Update cart with optimization results
      cart.totalOriginalPrice = totalOriginalPrice;
      cart.totalOptimizedPrice = totalOptimizedPrice;
      cart.totalSavings = totalOriginalPrice - totalOptimizedPrice;
      cart.aiRecommendations = recommendations.slice(0, 5); // Top 5 recommendations
      cart.lastOptimized = new Date();

      await cart.save();
      return cart;
    } catch (error) {
      console.error('Error optimizing cart:', error);
      throw error;
    }
  }

  // Generate bundle recommendations
  async generateBundleRecommendations(productIds) {
    try {
      const products = await Product.find({ _id: { $in: productIds } });
      const bundles = [];

      // Simple bundle logic: find products in same category
      const categoryGroups = {};
      products.forEach(product => {
        if (!categoryGroups[product.category]) {
          categoryGroups[product.category] = [];
        }
        categoryGroups[product.category].push(product);
      });

      Object.entries(categoryGroups).forEach(([category, categoryProducts]) => {
        if (categoryProducts.length >= 2) {
          const bundleDiscount = 0.1; // 10% bundle discount
          const totalPrice = categoryProducts.reduce((sum, product) => {
            const bestPrice = this.findBestPrice(product);
            return sum + bestPrice.price;
          }, 0);
          
          bundles.push({
            type: 'bundle',
            message: `Bundle ${categoryProducts.length} ${category} items for 10% off`,
            potentialSavings: totalPrice * bundleDiscount,
            productIds: categoryProducts.map(p => p._id)
          });
        }
      });

      return bundles;
    } catch (error) {
      console.error('Error generating bundle recommendations:', error);
      return [];
    }
  }
}

module.exports = new OptimizerService();