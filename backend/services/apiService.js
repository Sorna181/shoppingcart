const axios = require('axios');

class APIService {
  constructor() {
    this.dummyJsonAPI = axios.create({
      baseURL: process.env.DUMMYJSON_API_URL,
      timeout: 10000
    });
    
    this.fakeStoreAPI = axios.create({
      baseURL: process.env.FAKESTORE_API_URL,
      timeout: 10000
    });
  }

  // Fetch products from DummyJSON
  async fetchDummyJsonProducts(limit = 100, skip = 0) {
    try {
      const response = await this.dummyJsonAPI.get(`/products?limit=${limit}&skip=${skip}`);
      return this.transformDummyJsonProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching DummyJSON products:', error.message);
      throw error;
    }
  }

  // Fetch products from Fake Store API
  async fetchFakeStoreProducts(limit = 20) {
    try {
      const response = await this.fakeStoreAPI.get(`/products?limit=${limit}`);
      return this.transformFakeStoreProducts(response.data);
    } catch (error) {
      console.error('Error fetching Fake Store products:', error.message);
      throw error;
    }
  }

  // Transform DummyJSON product data to unified schema
  transformDummyJsonProducts(products) {
    return products.map(product => ({
      externalId: `dummyjson_${product.id}`,
      name: product.title,
      description: product.description,
      category: this.mapCategory(product.category),
      image: product.thumbnail,
      keywords: [product.brand, product.category, ...product.tags || []].filter(Boolean),
      ingredients: this.extractIngredients(product.category, product.title),
      platforms: {
        dummyjson: {
          price: Math.round(product.price * (1 - product.discountPercentage / 100)),
          originalPrice: product.price,
          discount: product.discountPercentage,
          rating: product.rating,
          available: product.stock > 0,
          url: `https://dummyjson.com/products/${product.id}`,
          lastUpdated: new Date()
        }
      }
    }));
  }

  // Transform Fake Store API product data to unified schema
  transformFakeStoreProducts(products) {
    return products.map(product => ({
      externalId: `fakestore_${product.id}`,
      name: product.title,
      description: product.description,
      category: this.mapCategory(product.category),
      image: product.image,
      keywords: [product.category, ...product.title.split(' ').slice(0, 3)],
      ingredients: this.extractIngredients(product.category, product.title),
      platforms: {
        fakestore: {
          price: Math.round(product.price * 0.9), // Simulate 10% discount
          originalPrice: product.price,
          discount: 10,
          rating: product.rating?.rate || 4.0,
          available: true,
          url: `https://fakestoreapi.com/products/${product.id}`,
          lastUpdated: new Date()
        }
      }
    }));
  }

  // Map categories to standardized format
  mapCategory(category) {
    const categoryMap = {
      'smartphones': 'Electronics',
      'laptops': 'Electronics',
      'fragrances': 'Personal Care',
      'skincare': 'Personal Care',
      'groceries': 'Home & Kitchen',
      'home-decoration': 'Home & Kitchen',
      'furniture': 'Home & Kitchen',
      'tops': 'Fashion',
      'womens-dresses': 'Fashion',
      'womens-shoes': 'Fashion',
      'mens-shirts': 'Fashion',
      'mens-shoes': 'Fashion',
      'mens-watches': 'Fashion',
      'womens-watches': 'Fashion',
      'womens-bags': 'Fashion',
      'womens-jewellery': 'Fashion',
      'sunglasses': 'Fashion',
      'automotive': 'Sports',
      'motorcycle': 'Sports',
      'lighting': 'Home & Kitchen',
      "men's clothing": 'Fashion',
      "women's clothing": 'Fashion',
      'jewelery': 'Fashion',
      'electronics': 'Electronics'
    };
    
    return categoryMap[category?.toLowerCase()] || 'Other';
  }

  // Extract ingredients based on category and product name
  extractIngredients(category, productName) {
    const name = productName.toLowerCase();
    const cat = category.toLowerCase();
    
    if (cat.includes('skincare') || cat.includes('fragrance')) {
      if (name.includes('vitamin c')) {
        return ['Vitamin C', 'Niacinamide', 'Hyaluronic Acid', 'Glycerin'];
      }
      if (name.includes('serum')) {
        return ['Hyaluronic Acid', 'Vitamin E', 'Glycerin', 'Peptides'];
      }
      if (name.includes('moisturizer') || name.includes('cream')) {
        return ['Glycerin', 'Ceramides', 'Shea Butter', 'Vitamin E'];
      }
      return ['Glycerin', 'Vitamin E', 'Natural Extracts'];
    }
    
    return [];
  }

  // Simulate Amazon data by modifying existing product data
  simulateAmazonData(product) {
    const basePrice = product.platforms.dummyjson?.originalPrice || product.platforms.fakestore?.originalPrice || 100;
    const variation = 0.8 + Math.random() * 0.4; // 80% to 120% of base price
    
    return {
      price: Math.round(basePrice * variation),
      originalPrice: Math.round(basePrice * variation * 1.1),
      discount: Math.round(Math.random() * 20),
      rating: 3.5 + Math.random() * 1.5,
      available: Math.random() > 0.1, // 90% availability
      url: `https://amazon.com/dp/${Math.random().toString(36).substr(2, 10)}`,
      lastUpdated: new Date()
    };
  }
}

module.exports = new APIService();