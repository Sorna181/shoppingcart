const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const optimizerService = require('../services/optimizerService');

// Get cart by session ID
router.get('/:sessionId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ sessionId: req.params.sessionId })
      .populate('items.productId');
    
    if (!cart) {
      return res.json({ 
        sessionId: req.params.sessionId,
        items: [],
        totalOriginalPrice: 0,
        totalOptimizedPrice: 0,
        totalSavings: 0,
        aiRecommendations: []
      });
    }

    res.json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

// Add item to cart
router.post('/:sessionId/items', async (req, res) => {
  try {
    const { productId, platform, quantity = 1 } = req.body;
    
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const platformData = product.platforms[platform];
    if (!platformData || !platformData.available) {
      return res.status(400).json({ error: 'Product not available on selected platform' });
    }

    let cart = await Cart.findOne({ sessionId: req.params.sessionId });
    
    if (!cart) {
      cart = new Cart({ 
        sessionId: req.params.sessionId,
        items: []
      });
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId && item.platform === platform
    );

    if (existingItemIndex > -1) {
      // Update quantity
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.items.push({
        productId,
        platform,
        quantity,
        priceAtTime: platformData.price
      });
    }

    await cart.save();
    
    // Optimize cart after adding item
    const optimizedCart = await optimizerService.optimizeCart(cart._id);
    
    res.json(optimizedCart);
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// Update item quantity
router.put('/:sessionId/items/:itemIndex', async (req, res) => {
  try {
    const { quantity } = req.body;
    const itemIndex = parseInt(req.params.itemIndex);
    
    const cart = await Cart.findOne({ sessionId: req.params.sessionId });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    if (itemIndex < 0 || itemIndex >= cart.items.length) {
      return res.status(400).json({ error: 'Invalid item index' });
    }

    if (quantity <= 0) {
      // Remove item
      cart.items.splice(itemIndex, 1);
    } else {
      // Update quantity
      cart.items[itemIndex].quantity = quantity;
    }

    await cart.save();
    
    // Re-optimize cart
    const optimizedCart = await optimizerService.optimizeCart(cart._id);
    
    res.json(optimizedCart);
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ error: 'Failed to update cart item' });
  }
});

// Remove item from cart
router.delete('/:sessionId/items/:itemIndex', async (req, res) => {
  try {
    const itemIndex = parseInt(req.params.itemIndex);
    
    const cart = await Cart.findOne({ sessionId: req.params.sessionId });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    if (itemIndex < 0 || itemIndex >= cart.items.length) {
      return res.status(400).json({ error: 'Invalid item index' });
    }

    cart.items.splice(itemIndex, 1);
    await cart.save();
    
    // Re-optimize cart if items remain
    if (cart.items.length > 0) {
      const optimizedCart = await optimizerService.optimizeCart(cart._id);
      res.json(optimizedCart);
    } else {
      res.json(cart);
    }
  } catch (error) {
    console.error('Error removing cart item:', error);
    res.status(500).json({ error: 'Failed to remove cart item' });
  }
});

// Clear cart
router.delete('/:sessionId', async (req, res) => {
  try {
    await Cart.findOneAndDelete({ sessionId: req.params.sessionId });
    res.json({ success: true, message: 'Cart cleared' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ error: 'Failed to clear cart' });
  }
});

// Get AI recommendations for cart
router.get('/:sessionId/recommendations', async (req, res) => {
  try {
    const cart = await Cart.findOne({ sessionId: req.params.sessionId })
      .populate('items.productId');
    
    if (!cart || cart.items.length === 0) {
      return res.json({ recommendations: [] });
    }

    const productIds = cart.items.map(item => item.productId._id);
    const bundleRecommendations = await optimizerService.generateBundleRecommendations(productIds);
    
    res.json({ 
      recommendations: [...cart.aiRecommendations, ...bundleRecommendations]
    });
  } catch (error) {
    console.error('Error fetching cart recommendations:', error);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

module.exports = router;