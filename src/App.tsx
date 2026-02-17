import React, { useState, useEffect } from 'react';
import { Zap, Search as SearchIcon } from 'lucide-react';
import { SearchSection } from './components/SearchSection';
import { ProductGrid } from './components/ProductGrid';
import { ProductComparison } from './components/ProductComparison';
import { ShoppingCartComponent } from './components/ShoppingCart';
import { SavingsDashboard } from './components/SavingsDashboard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useProducts, useCategories } from './hooks/useProducts';
import { useCart } from './hooks/useCart';
import apiService from './services/api';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState(1);
  const [syncing, setSyncing] = useState(false);

  const { products, loading: productsLoading, error: productsError, totalPages } = useProducts(searchTerm, selectedCategory, page);
  const { categories, loading: categoriesLoading } = useCategories();
  const { cart, addToCart, updateQuantity, removeItem } = useCart();

  // Sync products on first load
  useEffect(() => {
    const syncInitialProducts = async () => {
      if (products.length === 0 && !productsLoading && !productsError) {
        try {
          setSyncing(true);
          await apiService.syncProducts();
          // Products will be refetched automatically due to the useProducts hook
        } catch (error) {
          console.error('Error syncing products:', error);
        } finally {
          setSyncing(false);
        }
      }
    };

    syncInitialProducts();
  }, [products.length, productsLoading, productsError]);

  const handleAddToCart = async (productId: string, platform: string, quantity: number = 1) => {
    try {
      await addToCart(productId, platform, quantity);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleRemoveFromCart = async (index: number) => {
    try {
      await removeItem(index);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleUpdateQuantity = async (index: number, newQuantity: number) => {
    try {
      await updateQuantity(index, newQuantity);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handleProductSelect = (product: any) => {
    setSelectedProduct(product);
  };

  const handleSyncProducts = async () => {
    try {
      setSyncing(true);
      await apiService.syncProducts();
    } catch (error) {
      console.error('Error syncing products:', error);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8" />
            <h1 className="text-3xl font-bold">AI-Powered Shopping Cart Price Optimizer</h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-blue-100">Real-time price comparison • AI-powered optimization • Smart savings recommendations</p>
            <button
              onClick={handleSyncProducts}
              disabled={syncing}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors duration-200 disabled:opacity-50"
            >
              {syncing ? 'Syncing...' : 'Sync Products'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {categoriesLoading ? (
          <LoadingSpinner />
        ) : (
        <SearchSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
        )}

        {productsLoading || syncing ? (
          <LoadingSpinner message={syncing ? "Syncing products from APIs..." : "Loading products..."} />
        ) : productsError ? (
          <div className="text-center py-12">
            <div className="text-red-500 mb-4">Error loading products: {productsError}</div>
            <button
              onClick={handleSyncProducts}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Retry Sync
            </button>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">No products found</h2>
            <p className="text-gray-500 mb-4">Try adjusting your search terms or category filter</p>
            <button
              onClick={handleSyncProducts}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Load Products
            </button>
          </div>
        ) : (
          <>
            {selectedCategory === 'All' && searchTerm === '' ? (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <SearchIcon className="w-12 h-12 text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Search or Choose a Category</h2>
                  <p className="text-gray-600 mb-6">
                    Search for products by name or select a specific category to discover real-time prices and AI-powered recommendations.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <ProductGrid
                  products={products}
                  selectedProduct={selectedProduct}
                  onProductSelect={handleProductSelect}
                  onAddToCart={handleAddToCart}
                  page={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />

                {selectedProduct && (
                  <ProductComparison
                    product={selectedProduct}
                    onAddToCart={handleAddToCart}
                  />
                )}

                <SavingsDashboard cart={cart} />
              </>
            )}
          </>
        )}
      </div>

      {/* Shopping Cart */}
      <ShoppingCartComponent
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        isOpen={isCartOpen}
        onToggle={() => setIsCartOpen(!isCartOpen)}
      />
    </div>
  );
}

export default App;