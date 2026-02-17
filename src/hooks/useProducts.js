import { useState, useEffect } from 'react';
import apiService from '../services/api';

export const useProducts = (searchTerm = '', selectedCategory = 'All', page = 1) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const params = {
          page,
          limit: 20,
          ...(searchTerm && { search: searchTerm }),
          ...(selectedCategory !== 'All' && { category: selectedCategory })
        };

        const response = await apiService.getProducts(params);
        
        setProducts(response.products || []);
        setTotalPages(response.totalPages || 1);
        setTotal(response.total || 0);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm, selectedCategory, page]);

  return { products, loading, error, totalPages, total };
};

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await apiService.getProduct(productId);
        setProduct(response);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

export const useCategories = () => {
  const [categories, setCategories] = useState(['All']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await apiService.getCategories();
        setCategories(response);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching categories:', err);
        // Fallback to default categories
        setCategories(['All', 'Electronics', 'Fashion', 'Home & Kitchen', 'Personal Care', 'Sports']);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};