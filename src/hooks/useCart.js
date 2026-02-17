import { useState, useEffect, useCallback } from 'react';
import apiService from '../services/api';

export const useCart = () => {
  const [cart, setCart] = useState({
    items: [],
    totalOriginalPrice: 0,
    totalOptimizedPrice: 0,
    totalSavings: 0,
    aiRecommendations: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sessionId = apiService.getSessionId();

  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiService.getCart(sessionId);
      setCart(response);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching cart:', err);
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (productId, platform, quantity = 1) => {
    try {
      setError(null);
      const response = await apiService.addToCart(sessionId, {
        productId,
        platform,
        quantity
      });
      setCart(response);
      return response;
    } catch (err) {
      setError(err.message);
      console.error('Error adding to cart:', err);
      throw err;
    }
  };

  const updateQuantity = async (itemIndex, quantity) => {
    try {
      setError(null);
      const response = await apiService.updateCartItem(sessionId, itemIndex, { quantity });
      setCart(response);
      return response;
    } catch (err) {
      setError(err.message);
      console.error('Error updating cart item:', err);
      throw err;
    }
  };

  const removeItem = async (itemIndex) => {
    try {
      setError(null);
      const response = await apiService.removeFromCart(sessionId, itemIndex);
      setCart(response);
      return response;
    } catch (err) {
      setError(err.message);
      console.error('Error removing cart item:', err);
      throw err;
    }
  };

  const clearCart = async () => {
    try {
      setError(null);
      await apiService.clearCart(sessionId);
      setCart({
        items: [],
        totalOriginalPrice: 0,
        totalOptimizedPrice: 0,
        totalSavings: 0,
        aiRecommendations: []
      });
    } catch (err) {
      setError(err.message);
      console.error('Error clearing cart:', err);
      throw err;
    }
  };

  const getRecommendations = async () => {
    try {
      const response = await apiService.getCartRecommendations(sessionId);
      return response.recommendations;
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      return [];
    }
  };

  return {
    cart,
    loading,
    error,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    getRecommendations,
    refetch: fetchCart
  };
};