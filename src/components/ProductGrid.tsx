import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: any[];
  selectedProduct: any;
  onProductSelect: (product: any) => void;
  onAddToCart: (productId: string, platform: string, quantity: number) => void;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedProduct,
  onProductSelect,
  onAddToCart,
  page,
  totalPages,
  onPageChange,
}) => {
  return (
    <>
      {/* Product Selection */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Select Product to Compare</h2>
          <div className="text-sm text-gray-600">
            Page {page} of {totalPages} • {products.length} products
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          {products.map((product) => (
            <button
              key={product._id}
              onClick={() => onProductSelect(product)}
              className={`p-3 border rounded-lg text-left hover:shadow-md transition-all duration-200 ${
                selectedProduct?._id === product._id 
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded mb-2"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg';
                }}
              />
              <h3 className="font-semibold text-sm line-clamp-1">{product.name}</h3>
              <p className="text-gray-600 text-xs line-clamp-2">{product.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-green-600 font-bold text-sm">
                  ₹{product.bestPrice?.price || 'N/A'}
                </span>
                {product.potentialSavings > 0 && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    Save ₹{product.potentialSavings}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => onPageChange(Math.max(1, page - 1))}
              disabled={page === 1}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = Math.max(1, Math.min(totalPages, page - 2 + i));
                return (
                  <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`px-3 py-1 rounded ${
                      page === pageNum
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => onPageChange(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Price Comparison Cards */}
      {selectedProduct && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Price Comparison - {selectedProduct.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['dummyjson', 'fakestore', 'amazon'] as const).map((platform) => {
              const platformData = selectedProduct.platforms[platform];
              if (!platformData || !platformData.available) return null;
              
              const isLowestPrice = selectedProduct.bestPrice?.platform === platform;
              
              return (
                <ProductCard
                  key={platform}
                  product={selectedProduct}
                  platform={platform}
                  onAddToCart={onAddToCart}
                  isLowestPrice={isLowestPrice}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};