import { Product, CartItem } from '../data/products';

export const getPlatformColor = (platform: string) => {
  switch (platform) {
    case 'amazon':
      return 'from-orange-400 to-orange-600';
    case 'flipkart':
      return 'from-blue-400 to-blue-600';
    case 'meesho':
      return 'from-purple-400 to-purple-600';
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
    case 'meesho':
      return 'MEESHO';
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
  const searchCategory = searchProduct.category;
  const searchIngredients = searchProduct.ingredients || [];
  
  return allProducts
    .filter(product => product.id !== searchProduct.id)
    .filter(product => product.category === searchCategory) // Only show products from same category
    .map(product => {
      // Calculate keyword similarity
      const matchingKeywords = product.keywords.filter(keyword => 
        searchKeywords.some(searchKeyword => 
          keyword.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          searchKeyword.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      
      // Calculate ingredient similarity if both products have ingredients
      let ingredientSimilarity = 0;
      if (searchIngredients.length > 0 && product.ingredients && product.ingredients.length > 0) {
        const matchingIngredients = product.ingredients.filter(ingredient =>
          searchIngredients.some(searchIngredient =>
            ingredient.toLowerCase().includes(searchIngredient.toLowerCase()) ||
            searchIngredient.toLowerCase().includes(ingredient.toLowerCase())
          )
        );
        ingredientSimilarity = matchingIngredients.length / Math.max(searchIngredients.length, product.ingredients.length);
      }
      
      // Combine keyword and ingredient similarity (give more weight to ingredients if available)
      const keywordSimilarity = matchingKeywords.length / Math.max(searchKeywords.length, product.keywords.length);
      const totalSimilarity = searchIngredients.length > 0 && product.ingredients 
        ? (keywordSimilarity * 0.3 + ingredientSimilarity * 0.7) // 70% weight to ingredients
        : keywordSimilarity; // 100% weight to keywords if no ingredients
      
      return {
        product,
        similarity: totalSimilarity,
        hasIngredients: !!(searchIngredients.length > 0 && product.ingredients)
      };
    })
    .filter(({ similarity }) => similarity > 0)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, maxResults)
    .map(({ product }) => product);
};

export const getCartSummary = (cartItems: CartItem[]) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const platformCounts = cartItems.reduce((counts, item) => {
    counts[item.platform] = (counts[item.platform] || 0) + item.quantity;
    return counts;
  }, {} as Record<string, number>);

  return {
    totalItems,
    totalPrice,
    platformCounts
  };
};