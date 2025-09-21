import React from 'react';
import { ExternalLink, ShoppingCart, Lightbulb, Beaker, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Product, CartItem } from '../data/products';
import { formatPrice, getLowestPrice, calculateSavingsPercentage, getPlatformLogo, getIngredientBenefit } from '../utils/priceUtils';

interface AlternativeSuggestionsProps {
  alternatives: Product[];
  originalProduct: Product;
  onAddToCart: (item: CartItem) => void;
}

export const AlternativeSuggestions: React.FC<AlternativeSuggestionsProps> = ({
  alternatives,
  originalProduct,
  onAddToCart,
}) => {
  const [expandedIngredients, setExpandedIngredients] = React.useState<Record<string, boolean>>({});
  const originalLowest = getLowestPrice(originalProduct);

  const toggleIngredients = (productId: string) => {
    setExpandedIngredients(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-xs text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  if (alternatives.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Lightbulb className="w-6 h-6 text-yellow-500" />
        <h2 className="text-2xl font-bold">
          {originalProduct.ingredients ? 'Ingredient-Based' : 'AI-Powered'} Alternatives
        </h2>
        {originalProduct.ingredients && (
          <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
            <Beaker className="w-4 h-4" />
            Smart Match
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alternatives.map((product) => {
          const lowest = getLowestPrice(product);
          const savings = originalLowest.price - lowest.price;
          const savingsPercentage = calculateSavingsPercentage(lowest.price, originalLowest.price);
          const platformData = product.platforms[lowest.platform as 'amazon' | 'flipkart' | 'meesho'];

          const handleAddToCart = () => {
            if (platformData) {
              const cartItem: CartItem = {
                productId: product.id,
                productName: product.name,
                platform: lowest.platform as 'amazon' | 'flipkart' | 'meesho',
                price: platformData.price,
                url: platformData.url,
                image: product.image,
                quantity: 1,
              };
              onAddToCart(cartItem);
            }
          };

          return (
            <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{product.description}</p>
              
              {product.ingredients && (
                <div className="mb-3">
                  <div className="text-xs text-gray-500 mb-2">Key Ingredients & Benefits:</div>
                  <div className="space-y-1">
                    {(expandedIngredients[product.id] ? product.ingredients : product.ingredients.slice(0, 3)).map((ingredient, index) => (
                      <div key={index} className="bg-gray-50 p-2 rounded text-xs">
                        <div className="font-semibold text-gray-800 mb-1">{ingredient}</div>
                        <div className="text-gray-600">{getIngredientBenefit(ingredient)}</div>
                      </div>
                    ))}
                    {product.ingredients.length > 3 && (
                      <button
                        onClick={() => toggleIngredients(product.id)}
                        className="w-full text-blue-600 hover:text-blue-800 text-xs text-center py-2 flex items-center justify-center gap-1 hover:bg-blue-50 rounded transition-colors"
                      >
                        {expandedIngredients[product.id] ? (
                          <>
                            <ChevronUp className="w-3 h-3" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3 h-3" />
                            +{product.ingredients.length - 3} more ingredient{product.ingredients.length - 3 > 1 ? 's' : ''}
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
              
              {/* Product Rating */}
              <div className="mb-3">
                <div className="text-xs text-gray-500 mb-1">Platform Ratings:</div>
                <div className="space-y-1">
                  {Object.entries(product.platforms)
                    .filter(([, data]) => data?.available)
                    .map(([platform, data]) => (
                      <div key={platform} className="flex items-center justify-between text-xs">
                        <span className={`px-2 py-1 rounded text-white text-xs ${
                          platform === 'amazon' ? 'bg-orange-500' :
                          platform === 'flipkart' ? 'bg-blue-500' : 'bg-purple-500'
                        }`}>
                          {getPlatformLogo(platform)}
                        </span>
                        {renderStars(data!.rating)}
                      </div>
                    ))}
                  </div>
                </div>
              
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-xl font-bold text-green-600">
                    {formatPrice(lowest.price)}
                  </span>
                  <div className="text-sm text-gray-500">
                    on {getPlatformLogo(lowest.platform)}
                  </div>
                </div>
                {savings > 0 && (
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                      Save {formatPrice(savings)}
                    </div>
                    <div className="text-xs text-green-600">
                      {savingsPercentage.toFixed(0)}% off
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add Alternative
                </button>
                <a
                  href={platformData?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};