const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

class APIService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // Product API methods
  async getProducts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/products?${queryString}`);
  }

  async getProduct(id) {
    return this.request(`/products/${id}`);
  }

  async getCategories() {
    return this.request('/products/meta/categories');
  }

  async syncProducts() {
    return this.request('/products/sync', { method: 'POST' });
  }

  async getProductPriceHistory(id) {
    return this.request(`/products/${id}/price-history`);
  }

  // Cart API methods
  async getCart(sessionId) {
    return this.request(`/cart/${sessionId}`);
  }

  async addToCart(sessionId, item) {
    return this.request(`/cart/${sessionId}/items`, {
      method: 'POST',
      body: JSON.stringify(item),
    });
  }

  async updateCartItem(sessionId, itemIndex, updates) {
    return this.request(`/cart/${sessionId}/items/${itemIndex}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async removeFromCart(sessionId, itemIndex) {
    return this.request(`/cart/${sessionId}/items/${itemIndex}`, {
      method: 'DELETE',
    });
  }

  async clearCart(sessionId) {
    return this.request(`/cart/${sessionId}`, {
      method: 'DELETE',
    });
  }

  async getCartRecommendations(sessionId) {
    return this.request(`/cart/${sessionId}/recommendations`);
  }

  // Optimizer API methods
  async optimizeProduct(id) {
    return this.request(`/optimizer/product/${id}`);
  }

  async compareProducts(productIds) {
    return this.request('/optimizer/compare', {
      method: 'POST',
      body: JSON.stringify({ productIds }),
    });
  }

  async getRecommendations(category, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/optimizer/recommendations/${category}?${queryString}`);
  }

  async getMarketInsights() {
    return this.request('/optimizer/insights');
  }

  // Analytics API methods
  async getDailyAnalytics(date) {
    const endpoint = date ? `/analytics/daily/${date}` : '/analytics/daily';
    return this.request(endpoint);
  }

  async getAnalyticsSummary(startDate, endDate) {
    const params = new URLSearchParams();
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);
    return this.request(`/analytics/summary?${params.toString()}`);
  }

  async getRealtimeMetrics() {
    return this.request('/analytics/realtime');
  }

  // Utility methods
  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getSessionId() {
    let sessionId = localStorage.getItem('shopping_session_id');
    if (!sessionId) {
      sessionId = this.generateSessionId();
      localStorage.setItem('shopping_session_id', sessionId);
    }
    return sessionId;
  }
}

export default new APIService();