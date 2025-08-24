export interface PlatformData {
  price: number;
  available: boolean;
  url: string;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  keywords: string[];
  platforms: {
    amazon?: PlatformData;
    flipkart?: PlatformData;
    meesho?: PlatformData;
  };
}

export interface CartItem {
  productId: string;
  productName: string;
  platform: 'amazon' | 'flipkart' | 'meesho';
  price: number;
  url: string;
  image: string;
  quantity: number;
}

export const categories = [
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Sports',
  'Books',
  'Toys & Games',
  'Automotive',
  'Health & Wellness',
  'Jewelry',
  'Pet Supplies'
];

export const mockProducts: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    category: 'Electronics',
    keywords: ['headphones', 'wireless', 'bluetooth', 'audio'],
    platforms: {
      amazon: { price: 2999, available: true, url: 'https://amazon.in/headphones', rating: 4.5 },
      flipkart: { price: 3199, available: true, url: 'https://flipkart.com/headphones', rating: 4.3 },
      meesho: { price: 2799, available: true, url: 'https://meesho.com/headphones', rating: 4.2 }
    }
  },
  {
    id: '2',
    name: 'Smartphone 128GB',
    description: '6.5-inch display, dual camera, fast charging smartphone',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    category: 'Electronics',
    keywords: ['smartphone', 'mobile', 'phone', 'android'],
    platforms: {
      amazon: { price: 15999, available: true, url: 'https://amazon.in/smartphone', rating: 4.2 },
      flipkart: { price: 16499, available: true, url: 'https://flipkart.com/smartphone', rating: 4.1 },
      meesho: { price: 15499, available: true, url: 'https://meesho.com/smartphone', rating: 4.0 }
    }
  },
  {
    id: '3',
    name: 'Laptop 15.6 inch',
    description: 'Intel i5 processor, 8GB RAM, 512GB SSD, Windows 11',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
    category: 'Electronics',
    keywords: ['laptop', 'computer', 'intel', 'windows'],
    platforms: {
      amazon: { price: 45999, available: true, url: 'https://amazon.in/laptop', rating: 4.4 },
      flipkart: { price: 47999, available: true, url: 'https://flipkart.com/laptop', rating: 4.2 },
      meesho: { price: 44999, available: true, url: 'https://meesho.com/laptop', rating: 4.1 }
    }
  },
  {
    id: '4',
    name: 'Smart Watch Fitness Tracker',
    description: 'Heart rate monitor, GPS, waterproof fitness smartwatch',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'Electronics',
    keywords: ['smartwatch', 'fitness', 'tracker', 'health'],
    platforms: {
      amazon: { price: 8999, available: true, url: 'https://amazon.in/smartwatch', rating: 4.3 },
      flipkart: { price: 9499, available: true, url: 'https://flipkart.com/smartwatch', rating: 4.1 },
      meesho: { price: 8499, available: true, url: 'https://meesho.com/smartwatch', rating: 4.0 }
    }
  },

  // Fashion
  {
    id: '5',
    name: 'Cotton T-Shirt',
    description: '100% cotton comfortable casual t-shirt, available in multiple colors',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    category: 'Fashion',
    keywords: ['tshirt', 'cotton', 'casual', 'clothing'],
    platforms: {
      amazon: { price: 599, available: true, url: 'https://amazon.in/tshirt', rating: 4.1 },
      flipkart: { price: 649, available: true, url: 'https://flipkart.com/tshirt', rating: 4.0 },
      meesho: { price: 499, available: true, url: 'https://meesho.com/tshirt', rating: 3.9 }
    }
  },
  {
    id: '6',
    name: 'Denim Jeans',
    description: 'Classic fit denim jeans, comfortable and durable',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
    category: 'Fashion',
    keywords: ['jeans', 'denim', 'pants', 'casual'],
    platforms: {
      amazon: { price: 1299, available: true, url: 'https://amazon.in/jeans', rating: 4.2 },
      flipkart: { price: 1399, available: true, url: 'https://flipkart.com/jeans', rating: 4.1 },
      meesho: { price: 1199, available: true, url: 'https://meesho.com/jeans', rating: 4.0 }
    }
  },
  {
    id: '7',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole and breathable mesh',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    category: 'Fashion',
    keywords: ['shoes', 'running', 'sports', 'footwear'],
    platforms: {
      amazon: { price: 2499, available: true, url: 'https://amazon.in/shoes', rating: 4.4 },
      flipkart: { price: 2699, available: true, url: 'https://flipkart.com/shoes', rating: 4.2 },
      meesho: { price: 2299, available: true, url: 'https://meesho.com/shoes', rating: 4.1 }
    }
  },
  {
    id: '8',
    name: 'Leather Handbag',
    description: 'Genuine leather handbag with multiple compartments',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    category: 'Fashion',
    keywords: ['handbag', 'leather', 'bag', 'accessories'],
    platforms: {
      amazon: { price: 3999, available: true, url: 'https://amazon.in/handbag', rating: 4.3 },
      flipkart: { price: 4299, available: true, url: 'https://flipkart.com/handbag', rating: 4.1 },
      meesho: { price: 3699, available: true, url: 'https://meesho.com/handbag', rating: 4.0 }
    }
  },

  // Home & Kitchen
  {
    id: '9',
    name: 'Non-Stick Cookware Set',
    description: '5-piece non-stick cookware set with glass lids',
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg',
    category: 'Home & Kitchen',
    keywords: ['cookware', 'kitchen', 'non-stick', 'cooking'],
    platforms: {
      amazon: { price: 3499, available: true, url: 'https://amazon.in/cookware', rating: 4.2 },
      flipkart: { price: 3799, available: true, url: 'https://flipkart.com/cookware', rating: 4.0 },
      meesho: { price: 3199, available: true, url: 'https://meesho.com/cookware', rating: 3.9 }
    }
  },
  {
    id: '10',
    name: 'Coffee Maker Machine',
    description: 'Automatic drip coffee maker with programmable timer',
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg',
    category: 'Home & Kitchen',
    keywords: ['coffee', 'maker', 'machine', 'kitchen'],
    platforms: {
      amazon: { price: 5999, available: true, url: 'https://amazon.in/coffee-maker', rating: 4.3 },
      flipkart: { price: 6299, available: true, url: 'https://flipkart.com/coffee-maker', rating: 4.1 },
      meesho: { price: 5699, available: true, url: 'https://meesho.com/coffee-maker', rating: 4.0 }
    }
  },
  {
    id: '11',
    name: 'Bed Sheet Set Cotton',
    description: 'Premium cotton bed sheet set with pillow covers',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
    category: 'Home & Kitchen',
    keywords: ['bedsheet', 'cotton', 'bedroom', 'home'],
    platforms: {
      amazon: { price: 1999, available: true, url: 'https://amazon.in/bedsheet', rating: 4.1 },
      flipkart: { price: 2199, available: true, url: 'https://flipkart.com/bedsheet', rating: 3.9 },
      meesho: { price: 1799, available: true, url: 'https://meesho.com/bedsheet', rating: 3.8 }
    }
  },
  {
    id: '12',
    name: 'LED Table Lamp',
    description: 'Adjustable LED desk lamp with USB charging port',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
    category: 'Home & Kitchen',
    keywords: ['lamp', 'led', 'desk', 'lighting'],
    platforms: {
      amazon: { price: 1499, available: true, url: 'https://amazon.in/lamp', rating: 4.2 },
      flipkart: { price: 1599, available: true, url: 'https://flipkart.com/lamp', rating: 4.0 },
      meesho: { price: 1399, available: true, url: 'https://meesho.com/lamp', rating: 3.9 }
    }
  },

  // Sports
  {
    id: '13',
    name: 'Yoga Mat Premium',
    description: '6mm thick anti-slip yoga mat with carrying strap',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
    category: 'Sports',
    keywords: ['yoga', 'mat', 'exercise', 'fitness'],
    platforms: {
      amazon: { price: 1299, available: true, url: 'https://amazon.in/yoga-mat', rating: 4.3 },
      flipkart: { price: 1399, available: true, url: 'https://flipkart.com/yoga-mat', rating: 4.1 },
      meesho: { price: 1199, available: true, url: 'https://meesho.com/yoga-mat', rating: 4.0 }
    }
  },
  {
    id: '14',
    name: 'Dumbbell Set Adjustable',
    description: 'Adjustable dumbbell set 10-50kg with secure locking',
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg',
    category: 'Sports',
    keywords: ['dumbbell', 'weights', 'fitness', 'gym'],
    platforms: {
      amazon: { price: 8999, available: true, url: 'https://amazon.in/dumbbell', rating: 4.4 },
      flipkart: { price: 9499, available: true, url: 'https://flipkart.com/dumbbell', rating: 4.2 },
      meesho: { price: 8499, available: true, url: 'https://meesho.com/dumbbell', rating: 4.1 }
    }
  },
  {
    id: '15',
    name: 'Cricket Bat Professional',
    description: 'Professional grade cricket bat made from English willow',
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg',
    category: 'Sports',
    keywords: ['cricket', 'bat', 'sports', 'willow'],
    platforms: {
      amazon: { price: 4999, available: true, url: 'https://amazon.in/cricket-bat', rating: 4.2 },
      flipkart: { price: 5299, available: true, url: 'https://flipkart.com/cricket-bat', rating: 4.0 },
      meesho: { price: 4699, available: true, url: 'https://meesho.com/cricket-bat', rating: 3.9 }
    }
  },
  {
    id: '16',
    name: 'Football Official Size',
    description: 'FIFA approved official size 5 football with pump',
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg',
    category: 'Sports',
    keywords: ['football', 'soccer', 'ball', 'sports'],
    platforms: {
      amazon: { price: 1299, available: true, url: 'https://amazon.in/football', rating: 4.1 },
      flipkart: { price: 1399, available: true, url: 'https://flipkart.com/football', rating: 3.9 },
      meesho: { price: 1199, available: true, url: 'https://meesho.com/football', rating: 3.8 }
    }
  },

  // Books
  {
    id: '17',
    name: 'Harry Potter Complete Book Series',
    description: 'Complete collection of all 7 Harry Potter books by J.K. Rowling',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    category: 'Books',
    keywords: ['harry potter', 'books', 'series', 'fiction'],
    platforms: {
      amazon: { price: 2499, available: true, url: 'https://amazon.in/harry-potter', rating: 4.8 },
      flipkart: { price: 2699, available: true, url: 'https://flipkart.com/harry-potter', rating: 4.7 },
      meesho: { price: 2199, available: true, url: 'https://meesho.com/harry-potter', rating: 4.6 }
    }
  },
  {
    id: '18',
    name: 'The Alchemist by Paulo Coelho',
    description: 'International bestseller, inspirational fiction novel',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    category: 'Books',
    keywords: ['alchemist', 'paulo coelho', 'fiction', 'bestseller'],
    platforms: {
      amazon: { price: 299, available: true, url: 'https://amazon.in/alchemist', rating: 4.6 },
      flipkart: { price: 319, available: true, url: 'https://flipkart.com/alchemist', rating: 4.5 },
      meesho: { price: 259, available: true, url: 'https://meesho.com/alchemist', rating: 4.4 }
    }
  },

  // Toys & Games
  {
    id: '19',
    name: 'LEGO Classic Creative Bricks Set',
    description: '1500 pieces LEGO set to enhance creativity for kids 4-12 years',
    image: 'https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg',
    category: 'Toys & Games',
    keywords: ['lego', 'toys', 'creative', 'kids'],
    platforms: {
      amazon: { price: 4999, available: true, url: 'https://amazon.in/lego', rating: 4.7 },
      flipkart: { price: 5199, available: true, url: 'https://flipkart.com/lego', rating: 4.6 },
      meesho: { price: 4599, available: true, url: 'https://meesho.com/lego', rating: 4.5 }
    }
  },
  {
    id: '20',
    name: 'Monopoly Board Game Classic Edition',
    description: 'Classic family board game for 2-8 players, ages 8+',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    category: 'Toys & Games',
    keywords: ['monopoly', 'board game', 'family', 'classic'],
    platforms: {
      amazon: { price: 1999, available: true, url: 'https://amazon.in/monopoly', rating: 4.4 },
      flipkart: { price: 2099, available: true, url: 'https://flipkart.com/monopoly', rating: 4.3 },
      meesho: { price: 1799, available: true, url: 'https://meesho.com/monopoly', rating: 4.2 }
    }
  },

  // Automotive
  {
    id: '21',
    name: 'Car Dashboard Camera HD 1080p',
    description: 'Full HD recording dash cam with night vision and G-sensor',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
    category: 'Automotive',
    keywords: ['dashcam', 'car', 'camera', 'recording'],
    platforms: {
      amazon: { price: 3999, available: true, url: 'https://amazon.in/dashcam', rating: 4.2 },
      flipkart: { price: 4199, available: true, url: 'https://flipkart.com/dashcam', rating: 4.0 },
      meesho: { price: 3599, available: true, url: 'https://meesho.com/dashcam', rating: 3.9 }
    }
  },
  {
    id: '22',
    name: 'Car Phone Holder Magnetic Mount',
    description: 'Universal magnetic car mount with 360° rotation',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
    category: 'Automotive',
    keywords: ['phone holder', 'car mount', 'magnetic', 'universal'],
    platforms: {
      amazon: { price: 899, available: true, url: 'https://amazon.in/phone-holder', rating: 4.1 },
      flipkart: { price: 949, available: true, url: 'https://flipkart.com/phone-holder', rating: 3.9 },
      meesho: { price: 699, available: true, url: 'https://meesho.com/phone-holder', rating: 3.8 }
    }
  },

  // Health & Wellness
  {
    id: '23',
    name: 'Yoga Mat Anti-Slip Exercise Mat',
    description: '6mm thick eco-friendly TPE material yoga mat',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
    category: 'Health & Wellness',
    keywords: ['yoga mat', 'exercise', 'fitness', 'wellness'],
    platforms: {
      amazon: { price: 1499, available: true, url: 'https://amazon.in/exercise-mat', rating: 4.3 },
      flipkart: { price: 1599, available: true, url: 'https://flipkart.com/exercise-mat', rating: 4.1 },
      meesho: { price: 1299, available: true, url: 'https://meesho.com/exercise-mat', rating: 4.0 }
    }
  },
  {
    id: '24',
    name: 'Whey Protein Powder 2kg',
    description: 'Premium whey protein isolate, chocolate flavor',
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg',
    category: 'Health & Wellness',
    keywords: ['protein', 'whey', 'supplement', 'fitness'],
    platforms: {
      amazon: { price: 3999, available: true, url: 'https://amazon.in/protein', rating: 4.4 },
      flipkart: { price: 4199, available: true, url: 'https://flipkart.com/protein', rating: 4.2 },
      meesho: { price: 3599, available: true, url: 'https://meesho.com/protein', rating: 4.1 }
    }
  },

  // Jewelry
  {
    id: '25',
    name: 'Gold Plated Chain Necklace',
    description: '18K gold plated necklace, 20 inch length, hypoallergenic',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
    category: 'Jewelry',
    keywords: ['necklace', 'gold plated', 'jewelry', 'chain'],
    platforms: {
      amazon: { price: 2999, available: true, url: 'https://amazon.in/necklace', rating: 4.2 },
      flipkart: { price: 3199, available: true, url: 'https://flipkart.com/necklace', rating: 4.0 },
      meesho: { price: 2599, available: true, url: 'https://meesho.com/necklace', rating: 3.9 }
    }
  },
  {
    id: '26',
    name: 'Silver Stud Earrings Set',
    description: 'Sterling silver earring set of 6 pairs with gift box',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
    category: 'Jewelry',
    keywords: ['earrings', 'silver', 'jewelry', 'set'],
    platforms: {
      amazon: { price: 1499, available: true, url: 'https://amazon.in/earrings', rating: 4.1 },
      flipkart: { price: 1599, available: true, url: 'https://flipkart.com/earrings', rating: 3.9 },
      meesho: { price: 1299, available: true, url: 'https://meesho.com/earrings', rating: 3.8 }
    }
  },

  // Pet Supplies
  {
    id: '27',
    name: 'Dog Food Premium Adult Formula',
    description: '10kg pack high protein dog food with real chicken',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    category: 'Pet Supplies',
    keywords: ['dog food', 'pet food', 'premium', 'chicken'],
    platforms: {
      amazon: { price: 2999, available: true, url: 'https://amazon.in/dog-food', rating: 4.3 },
      flipkart: { price: 3199, available: true, url: 'https://flipkart.com/dog-food', rating: 4.1 },
      meesho: { price: 2699, available: true, url: 'https://meesho.com/dog-food', rating: 4.0 }
    }
  },
  {
    id: '28',
    name: 'Cat Litter Box Self-Cleaning',
    description: 'Automatic self-cleaning litter box with odor control',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    category: 'Pet Supplies',
    keywords: ['cat litter', 'self cleaning', 'pet supplies', 'automatic'],
    platforms: {
      amazon: { price: 4999, available: true, url: 'https://amazon.in/cat-litter', rating: 4.2 },
      flipkart: { price: 5199, available: true, url: 'https://flipkart.com/cat-litter', rating: 4.0 },
      meesho: { price: 4599, available: true, url: 'https://meesho.com/cat-litter', rating: 3.9 }
    }
  }
];