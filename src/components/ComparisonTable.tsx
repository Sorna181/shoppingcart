import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Product } from '../data/products';
import { formatPrice, getPlatformLogo, calculateSavings, getHighestPrice } from '../utils/priceUtils';

interface ComparisonTableProps {
  product: Product;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ product }) => {
  const highestPriceData = getHighestPrice(product);
  
  const platforms = Object.entries(product.platforms)
    .filter(([, data]) => data?.available)
    .map(([platform, data]) => ({
      platform,
      price: data!.price,
      url: data!.url,
      savings: calculateSavings(data!.price, highestPriceData.price)
    }))
    .sort((a, b) => a.price - b.price);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Price Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4">Platform</th>
              <th className="text-left py-3 px-4">Price</th>
              <th className="text-left py-3 px-4">Link</th>
              <th className="text-left py-3 px-4">Savings</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map(({ platform, price, url, savings }, index) => (
              <tr key={platform} className={`border-b border-gray-100 hover:bg-gray-50 ${index === 0 ? 'bg-green-50' : ''}`}>
                <td className="py-4 px-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold ${
                    platform === 'amazon' ? 'bg-orange-500' : 
                    platform === 'flipkart' ? 'bg-blue-500' : 'bg-pink-500'
                  }`}>
                    {getPlatformLogo(platform)}
                  </span>
                </td>
                <td className={`py-4 px-4 font-bold text-lg ${index === 0 ? 'text-green-600' : ''}`}>
                  {formatPrice(price)}
                  {index === 0 && (
                    <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded text-xs">LOWEST</span>
                  )}
                </td>
                <td className="py-4 px-4">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    View Deal <ExternalLink className="w-4 h-4" />
                  </a>
                </td>
                <td className="py-4 px-4">
                  {savings > 0 ? (
                    <span className="text-green-600 font-semibold">
                      Save {formatPrice(savings)}
                    </span>
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};