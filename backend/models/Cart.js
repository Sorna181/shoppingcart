const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  platform: {
    type: String,
    enum: ['dummyjson', 'fakestore', 'amazon'],
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  priceAtTime: {
    type: Number,
    required: true
  },
  optimizedPrice: {
    type: Number
  },
  savings: {
    type: Number,
    default: 0
  }
});

const cartSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  items: [cartItemSchema],
  totalOriginalPrice: {
    type: Number,
    default: 0
  },
  totalOptimizedPrice: {
    type: Number,
    default: 0
  },
  totalSavings: {
    type: Number,
    default: 0
  },
  aiRecommendations: [{
    type: {
      type: String,
      enum: ['substitute', 'bundle', 'timing', 'platform']
    },
    message: String,
    potentialSavings: Number,
    productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
  }],
  lastOptimized: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Cart', cartSchema);