import React from 'react';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import { Product, CartItem } from '../data/products';
import { formatPrice, getPlatformColor, getPlatformLogo } from '../utils/priceUtils';

interface ProductCardProps {
  product: Product;
  platform: 'amazon' | 'flipkart' | 'myntra';
  onAddToCart: (item: CartItem) => void;
  isLowestPrice?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  platform,
  onAddToCart,
  isLowestPrice = false,
}) => {
  const platformData = product.platforms[platform];

  if (!platformData || !platformData.available) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 opacity-50">
        <div className="text-center text-gray-500">
          <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${getPlatformColor(platform)} mb-4`}>
            {getPlatformLogo(platform)}
          </div>
          <p>Not Available</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      productId: product.id,
      productName: product.name,
      platform,
      price: platformData.price,
      url: platformData.url,
      image: product.image,
    };
    onAddToCart(cartItem);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isLowestPrice ? 'ring-2 ring-green-500' : ''}`}>
      <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${getPlatformColor(platform)} mb-3`}>
        {getPlatformLogo(platform)}
        {isLowestPrice && (
          <span className="ml-2 bg-green-500 px-2 py-1 rounded text-xs">BEST PRICE</span>
        )}
      </div>
      
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      
      <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-green-600">
          {formatPrice(platformData.price)}
        </span>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
        <a
          href={platformData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <ExternalLink className="w-5 h-5 text-gray-600" />
        </a>
      </div>
    </div>
  );
};