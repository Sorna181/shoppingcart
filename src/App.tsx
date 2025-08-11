import React, { useState, useMemo } from 'react';
import { Zap, Search as SearchIcon } from 'lucide-react';
import { SearchSection } from './components/SearchSection';
import { ProductCard } from './components/ProductCard';
import { ComparisonTable } from './components/ComparisonTable';
import { AlternativeSuggestions } from './components/AlternativeSuggestions';
import { ShoppingCartComponent } from './components/ShoppingCart';
import { SavingsDashboard } from './components/SavingsDashboard';
import { mockProducts, CartItem } from './data/products';
import { getLowestPrice, findSimilarProducts } from './utils/priceUtils';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(mockProducts[0]);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesCategory = selectedCategory === 'All' || 
        product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => [...prev, item]);
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleProductSelect = (product: typeof mockProducts[0]) => {
    setSelectedProduct(product);
  };

  const similarProducts = findSimilarProducts(selectedProduct, mockProducts);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8" />
            <h1 className="text-3xl font-bold">AI-Powered Shopping Cart Price Optimizer</h1>
          </div>
          <p className="text-blue-100">Compare prices across Amazon, Flipkart, and Myntra • Find the best deals • Save money with AI recommendations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">No products found</h2>
            <p className="text-gray-500">Try adjusting your search terms or category filter</p>
          </div>
        ) : (
          <>
            {/* Product Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Select Product to Compare</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductSelect(product)}
                    className={`p-3 border rounded-lg text-left hover:shadow-md transition-all duration-200 ${
                      selectedProduct.id === product.id 
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <h3 className="font-semibold text-sm line-clamp-1">{product.name}</h3>
                    <p className="text-gray-600 text-xs line-clamp-2">{product.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Comparison Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Price Comparison - {selectedProduct.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(['amazon', 'flipkart', 'myntra'] as const).map((platform) => {
                  const lowestPlatform = getLowestPrice(selectedProduct).platform;
                  return (
                    <ProductCard
                      key={platform}
                      product={selectedProduct}
                      platform={platform}
                      onAddToCart={handleAddToCart}
                      isLowestPrice={platform === lowestPlatform}
                    />
                  );
                })}
              </div>
            </div>

            {/* Comparison Table */}
            <ComparisonTable product={selectedProduct} />

            {/* Alternative Suggestions */}
            <AlternativeSuggestions
              alternatives={similarProducts}
              originalProduct={selectedProduct}
              onAddToCart={handleAddToCart}
            />

            {/* Savings Dashboard */}
            <SavingsDashboard cartItems={cartItems} />
          </>
        )}
      </div>

      {/* Shopping Cart */}
      <ShoppingCartComponent
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        isOpen={isCartOpen}
        onToggle={() => setIsCartOpen(!isCartOpen)}
      />
    </div>
  );
}

export default App;