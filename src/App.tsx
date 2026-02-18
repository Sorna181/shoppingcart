import React, { useState, useEffect } from 'react';
import ProductGrid from './components/ProductGrid';
import ShoppingCart from './components/ShoppingCart';
import SearchSection from './components/SearchSection';
import SavingsDashboard from './components/SavingsDashboard';
import ProductComparison from './components/ProductComparison';
import AlternativeSuggestions from './components/AlternativeSuggestions';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  
  const { products, loading, error, syncProducts } = useProducts();
  const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            AI Shopping Cart Optimizer
          </h1>
          <p className="text-gray-600">
            Smart price comparison and savings optimization
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SearchSection
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
              onSyncProducts={syncProducts}
              loading={loading}
            />

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                Error: {error}
              </div>
            )}

            <ProductGrid
              products={filteredProducts}
              onAddToCart={addToCart}
              onProductSelect={setSelectedProduct}
              loading={loading}
            />

            {selectedProduct && (
              <div className="mt-8">
                <ProductComparison
                  product={selectedProduct}
                  onClose={() => setSelectedProduct(null)}
                />
                <AlternativeSuggestions
                  currentProduct={selectedProduct}
                  allProducts={products}
                  onAddToCart={addToCart}
                />
              </div>
            )}
          </div>

          <div className="space-y-6">
            <ShoppingCart
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
              onClearCart={clearCart}
            />
            
            <SavingsDashboard cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;