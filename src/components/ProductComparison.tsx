import React, { useState, useEffect } from 'react';
import { ComparisonTable } from './ComparisonTable';
import { AlternativeSuggestions } from './AlternativeSuggestions';
import apiService from '../services/api';

interface ProductComparisonProps {
  product: any;
  onAddToCart: (productId: string, platform: string, quantity: number) => void;
}

export const ProductComparison: React.FC<ProductComparisonProps> = ({
  product,
  onAddToCart,
}) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      if (!product?._id) return;
      
      try {
        setLoading(true);
        const optimization = await apiService.optimizeProduct(product._id);
        setSimilarProducts(optimization.similarProducts || []);
      } catch (error) {
        console.error('Error fetching similar products:', error);
        setSimilarProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarProducts();
  }, [product?._id]);

  if (!product) return null;

  return (
    <>
      <ComparisonTable product={product} />
      
      <AlternativeSuggestions
        alternatives={similarProducts}
        originalProduct={product}
        onAddToCart={onAddToCart}
        loading={loading}
      />
    </>
  );
};