const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  externalId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  keywords: [{
    type: String
  }],
  ingredients: [{
    type: String
  }],
  platforms: {
    dummyjson: {
      price: Number,
      originalPrice: Number,
      discount: Number,
      rating: Number,
      available: { type: Boolean, default: true },
      url: String,
      lastUpdated: { type: Date, default: Date.now }
    },
    fakestore: {
      price: Number,
      originalPrice: Number,
      discount: Number,
      rating: Number,
      available: { type: Boolean, default: true },
      url: String,
      lastUpdated: { type: Date, default: Date.now }
    },
    amazon: {
      price: Number,
      originalPrice: Number,
      discount: Number,
      rating: Number,
      available: { type: Boolean, default: true },
      url: String,
      lastUpdated: { type: Date, default: Date.now }
    }
  },
  aiOptimization: {
    bestPlatform: String,
    potentialSavings: Number,
    recommendedAlternatives: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      similarity: Number,
      savings: Number
    }],
    lastOptimized: { type: Date, default: Date.now }
  },
  priceHistory: [{
    platform: String,
    price: Number,
    timestamp: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true
});

// Index for efficient searching
productSchema.index({ name: 'text', description: 'text', keywords: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ 'platforms.dummyjson.price': 1 });
productSchema.index({ 'platforms.fakestore.price': 1 });

module.exports = mongoose.model('Product', productSchema);