import { Product, CartItem } from '../data/products';

export const getPlatformColor = (platform: string) => {
  switch (platform) {
    case 'amazon':
      return 'from-orange-400 to-orange-600';
    case 'flipkart':
      return 'from-blue-400 to-blue-600';
    case 'myntra':
      return 'from-pink-400 to-pink-600';
    default:
      return 'from-gray-400 to-gray-600';
  }
};

export const getPlatformLogo = (platform: string) => {
  // Using simple text logos since we can't use SVG images
  switch (platform) {
    case 'amazon':
      return 'AMAZON';
    case 'flipkart':
      return 'FLIPKART';
    case 'myntra':
      return 'MYNTRA';
    default:
      return platform.toUpperCase();
  }
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const getLowestPrice = (product: Product) => {
  const prices = Object.entries(product.platforms)
    .filter(([, data]) => data?.available)
    .map(([platform, data]) => ({ platform, price: data!.price }));
  
  return prices.reduce((min, current) => 
    current.price < min.price ? current : min
  );
};

export const getHighestPrice = (product: Product) => {
  const prices = Object.entries(product.platforms)
    .filter(([, data]) => data?.available)
    .map(([platform, data]) => ({ platform, price: data!.price }));
  
  return prices.reduce((max, current) => 
    current.price > max.price ? current : max
  );
};

export const calculateSavings = (currentPrice: number, highestPrice: number) => {
  return highestPrice - currentPrice;
};

export const calculateSavingsPercentage = (currentPrice: number, highestPrice: number) => {
  return ((highestPrice - currentPrice) / highestPrice) * 100;
};

export const findSimilarProducts = (searchProduct: Product, allProducts: Product[], maxResults = 3) => {
  const searchKeywords = searchProduct.keywords;
  
  return allProducts
    .filter(product => product.id !== searchProduct.id)
    .map(product => {
      const matchingKeywords = product.keywords.filter(keyword => 
        searchKeywords.some(searchKeyword => 
          keyword.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          searchKeyword.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      
      return {
        product,
        similarity: matchingKeywords.length / Math.max(searchKeywords.length, product.keywords.length)
      };
    })
    .filter(({ similarity }) => similarity > 0)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, maxResults)
    .map(({ product }) => product);
};

export const getCartSummary = (cartItems: CartItem[]) => {
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  
  const platformCounts = cartItems.reduce((counts, item) => {
    counts[item.platform] = (counts[item.platform] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);

  return {
    totalItems,
    totalPrice,
    platformCounts
  };
};