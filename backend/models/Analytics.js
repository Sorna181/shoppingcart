const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true
  },
  totalUsers: {
    type: Number,
    default: 0
  },
  totalSavings: {
    type: Number,
    default: 0
  },
  popularProducts: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    views: Number,
    addedToCart: Number
  }],
  platformPerformance: {
    dummyjson: {
      totalProducts: Number,
      averagePrice: Number,
      totalSales: Number
    },
    fakestore: {
      totalProducts: Number,
      averagePrice: Number,
      totalSales: Number
    },
    amazon: {
      totalProducts: Number,
      averagePrice: Number,
      totalSales: Number
    }
  },
  categoryInsights: [{
    category: String,
    totalProducts: Number,
    averageDiscount: Number,
    popularityScore: Number
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Analytics', analyticsSchema);