import React from 'react';
import { ShoppingCart, X, TrendingDown, Plus, Minus } from 'lucide-react';
import { CartItem } from '../data/products';
import { formatPrice, getPlatformLogo, getCartSummary } from '../utils/priceUtils';

interface ShoppingCartProps {
  cartItems: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateQuantity: (index: number, newQuantity: number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const ShoppingCartComponent: React.FC<ShoppingCartProps> = ({
  cartItems,
  onRemoveItem,
  onUpdateQuantity,
  isOpen,
  onToggle,
}) => {
  const { totalItems, totalPrice } = getCartSummary(cartItems);

  const handleQuantityChange = (index: number, change: number) => {
    const newQuantity = Math.max(1, cartItems[index].quantity + change);
    onUpdateQuantity(index, newQuantity);
  };

  return (
    <>
      {/* Cart Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-50"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button
              onClick={onToggle}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                        {item.productName}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded text-white ${
                          item.platform === 'amazon' ? 'bg-orange-500' :
                          item.platform === 'flipkart' ? 'bg-blue-500' : 'bg-pink-500'
                        }`}>
                          {getPlatformLogo(item.platform)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-green-600">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                          <div className="text-xs text-gray-500">
                            {formatPrice(item.price)} each
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center bg-gray-100 rounded">
                            <button
                              onClick={() => handleQuantityChange(index, -1)}
                              className="p-1 hover:bg-gray-200 rounded-l"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className={`w-3 h-3 ${item.quantity <= 1 ? 'text-gray-300' : 'text-gray-600'}`} />
                            </button>
                            <span className="px-2 text-sm font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(index, 1)}
                              className="p-1 hover:bg-gray-200 rounded-r"
                            >
                              <Plus className="w-3 h-3 text-gray-600" />
                            </button>
                          </div>
                          <button
                            onClick={() => onRemoveItem(index)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Total ({totalItems} items)</span>
              <span className="text-2xl font-bold text-green-600">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onToggle}
        />
      )}
    </>
  );
};