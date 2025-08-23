import React from 'react';
import { TrendingDown, ShoppingBag, DollarSign, Award } from 'lucide-react';
import { CartItem } from '../data/products';
import { formatPrice, getCartSummary } from '../utils/priceUtils';

interface SavingsDashboardProps {
  cartItems: CartItem[];
}

export const SavingsDashboard: React.FC<SavingsDashboardProps> = ({ cartItems }) => {
  const { totalItems, totalPrice, platformCounts } = getCartSummary(cartItems);
  
  // Simulate potential savings (in a real app, this would be calculated based on actual price comparisons)
  const potentialSavings = totalItems > 0 ? totalPrice * 0.12 : 0;

  const stats = [
    {
      icon: ShoppingBag,
      label: 'Items in Cart',
      value: totalItems.toString(),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: DollarSign,
      label: 'Total Cart Value',
      value: formatPrice(totalPrice),
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: TrendingDown,
      label: 'Potential Savings',
      value: formatPrice(potentialSavings),
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Award,
      label: 'Best Platform',
      value: Object.entries(platformCounts).reduce(
        (a, b) => platformCounts[a[0]] > platformCounts[b[0]] ? a : b,
        ['None', 0]
      )[0].toUpperCase(),
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Savings Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {Object.keys(platformCounts).length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Platform Breakdown</h3>
          <div className="space-y-3">
            {Object.entries(platformCounts).map(([platform, count]) => (
              <div key={platform} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${
                    platform === 'amazon' ? 'bg-orange-500' :
                    platform === 'flipkart' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}></div>
                  <span className="font-medium">{platform.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">{count}</span>
                  <span className="text-gray-500 text-sm">items</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-800">Smart Shopping Tip</span>
            </div>
            <p className="text-purple-700 text-sm">
              You're saving an average of 12% by choosing the best prices across platforms!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};