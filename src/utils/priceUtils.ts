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
  const searchName = searchProduct.name.toLowerCase();
  
  return allProducts
    .filter(product => product.id !== searchProduct.id)
    .filter(product => product.category === searchCategory) // Only show products from same category
    .filter(product => {
      // For ingredient-based alternatives, ensure products are of similar type
      if (searchIngredients.length > 0 && product.ingredients && product.ingredients.length > 0) {
        // Check if products are of similar type (e.g., both serums, both shampoos, etc.)
        const searchType = getProductType(searchName);
        const productType = getProductType(product.name.toLowerCase());
        
        // Only show products of the same type for ingredient-based comparison
        return searchType === productType;
      }
      return true;
    })
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

const getProductType = (productName: string): string => {
  const name = productName.toLowerCase();
  
  if (name.includes('serum')) return 'serum';
  if (name.includes('shampoo')) return 'shampoo';
  if (name.includes('soap') || name.includes('bar')) return 'soap';
  if (name.includes('sunscreen') || name.includes('spf')) return 'sunscreen';
  if (name.includes('moisturizer') || name.includes('lotion')) return 'moisturizer';
  if (name.includes('cream')) return 'cream';
  if (name.includes('cleanser')) return 'cleanser';
  if (name.includes('toner')) return 'toner';
  if (name.includes('oil')) return 'oil';
  if (name.includes('mask')) return 'mask';
  
  return 'other';
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

export const getIngredientBenefit = (ingredient: string): string => {
  const benefits: Record<string, string> = {
    // Anti-Dandruff & Hair Care
    'Salicylic Acid': 'Exfoliates scalp, removes dead skin cells, reduces dandruff',
    'Biotin': 'Strengthens hair follicles, promotes hair growth, prevents breakage',
    'Zinc Pyrithione': 'Anti-fungal agent, controls dandruff-causing microbes',
    'Sodium Laureth Sulfate': 'Primary cleansing agent, removes dirt and oil',
    'Cocamidopropyl Betaine': 'Mild surfactant, gentle cleansing, reduces irritation',
    'Dimethiconol': 'Smooths hair cuticles, adds shine, reduces frizz',
    
    // Skincare & Serums
    'Vitamin C': 'Powerful antioxidant, brightens skin, stimulates collagen production',
    'Niacinamide': 'Reduces pore size, controls oil production, improves skin texture',
    'Hyaluronic Acid': 'Intense hydration, plumps skin, reduces fine lines',
    'Glycerin': 'Intense moisturizer, prevents skin dryness, softens skin',
    '3-O-Ethyl Ascorbic Acid': 'Stable form of Vitamin C, brightening, anti-aging',
    'Butylene Glycol': 'Humectant, improves product texture, enhances absorption',
    'Propanediol': 'Natural moisturizer, enhances ingredient penetration',
    
    // Sunscreen Protection
    'Zinc Oxide': 'Physical UV blocker, broad spectrum protection, gentle on sensitive skin',
    'Titanium Dioxide': 'Physical sunscreen, reflects UV rays, suitable for sensitive skin',
    'Octinoxate': 'Chemical sunscreen, UVB protection, lightweight formula',
    'Avobenzone': 'Chemical sunscreen, UVA protection, prevents skin aging',
    'Methylene Bis-Benzotriazolyl Tetramethylbutylphenol': 'Advanced UV filter, broad spectrum protection',
    'Ethylhexyl Methoxycinnamate': 'UVB filter, prevents sunburn, lightweight',
    'Butyl Methoxydibenzoylmethane': 'UVA filter, prevents premature aging',
    
    // Body Care & Soaps
    'Sodium Palmate': 'Natural soap base from palm oil, gentle cleansing',
    'Sodium Palm Kernelate': 'Soap base, creates rich lather, moisturizing properties',
    'Sodium Chloride': 'Natural salt, thickening agent, mild exfoliant',
    'Parfum': 'Fragrance, provides pleasant scent',
    'Mustard Butter': 'Natural moisturizer, nourishes skin, anti-inflammatory',
    'Glycerine': 'Intense moisturizer, prevents skin dryness, softens skin'
  };
  
  return benefits[ingredient] || 'Beneficial ingredient for skin/hair care';
};