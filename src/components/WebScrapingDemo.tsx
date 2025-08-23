import React, { useState } from 'react';
import { Search, Loader, AlertCircle, CheckCircle } from 'lucide-react';
import { scrapeProductPrices, ScrapingResult } from '../services/webScraper';
import { formatPrice } from '../utils/priceUtils';

export const WebScrapingDemo: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [scrapingResult, setScrapingResult] = useState<ScrapingResult | null>(null);

  const handleScrape = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setScrapingResult(null);
    
    try {
      const result = await scrapeProductPrices(searchQuery);
      setScrapingResult(result);
    } catch (error) {
      setScrapingResult({
        success: false,
        products: [],
        error: 'Scraping failed'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Search className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Live Price Scraping Demo</h2>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-5 h-5 text-yellow-600" />
          <span className="font-semibold text-yellow-800">Demo Mode</span>
        </div>
        <p className="text-yellow-700 text-sm">
          This is a simulation of web scraping. In production, this would require a backend service 
          to handle CORS restrictions and anti-bot measures.
        </p>
      </div>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter product name to scrape prices..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onKeyPress={(e) => e.key === 'Enter' && handleScrape()}
        />
        <button
          onClick={handleScrape}
          disabled={isLoading || !searchQuery.trim()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Scraping...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Scrape Prices
            </>
          )}
        </button>
      </div>

      {scrapingResult && (
        <div className="border-t border-gray-200 pt-6">
          {scrapingResult.success ? (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-green-700">Scraping Completed</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scrapingResult.products.map((product, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-3 ${
                      product.platform === 'amazon' ? 'bg-orange-500' :
                      product.platform === 'flipkart' ? 'bg-blue-500' : 'bg-pink-500'
                    }`}>
                      {product.platform.toUpperCase()}
                    </div>
                    
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                    
                    <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-bold text-green-600">
                        {formatPrice(product.price)}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        product.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.available ? 'Available' : 'Out of Stock'}
                      </span>
                    </div>
                    
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-center block"
                    >
                      View on {product.platform.charAt(0).toUpperCase() + product.platform.slice(1)}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              <span>Scraping failed: {scrapingResult.error}</span>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold mb-2">Real Implementation Notes:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Requires backend service to bypass CORS restrictions</li>
          <li>• Use Puppeteer/Playwright for dynamic content</li>
          <li>• Implement rate limiting and proxy rotation</li>
          <li>• Handle anti-bot measures and captchas</li>
          <li>• Respect robots.txt and platform terms of service</li>
        </ul>
      </div>
    </div>
  );
};