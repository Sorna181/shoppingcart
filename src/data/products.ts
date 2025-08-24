export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  keywords: string[];
  prices: {
    amazon: number;
    flipkart: number;
    meesho: number;
  };
  availability: {
    amazon: boolean;
    flipkart: boolean;
    meesho: boolean;
  };
  ratings: {
    amazon: number;
    flipkart: number;
    meesho: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
  selectedPlatform: 'amazon' | 'flipkart' | 'meesho';
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
    prices: { amazon: 2999, flipkart: 3199, meesho: 2799 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.5, flipkart: 4.3, meesho: 4.2 }
  },
  {
    id: '2',
    name: 'Smartphone 128GB',
    description: '6.5-inch display, dual camera, fast charging smartphone',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    category: 'Electronics',
    keywords: ['smartphone', 'mobile', 'phone', 'android'],
    prices: { amazon: 15999, flipkart: 16499, meesho: 15499 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.2, flipkart: 4.1, meesho: 4.0 }
  },
  {
    id: '3',
    name: 'Laptop 15.6 inch',
    description: 'Intel i5 processor, 8GB RAM, 512GB SSD, Windows 11',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
    category: 'Electronics',
    keywords: ['laptop', 'computer', 'intel', 'windows'],
    prices: { amazon: 45999, flipkart: 47999, meesho: 44999 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.4, flipkart: 4.2, meesho: 4.1 }
  },
  {
    id: '4',
    name: 'Smart Watch Fitness Tracker',
    description: 'Heart rate monitor, GPS, waterproof fitness smartwatch',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'Electronics',
    keywords: ['smartwatch', 'fitness', 'tracker', 'health'],
    prices: { amazon: 8999, flipkart: 9499, meesho: 8499 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.3, flipkart: 4.1, meesho: 4.0 }
  },

  // Fashion
  {
    id: '5',
    name: 'Cotton T-Shirt',
    description: '100% cotton comfortable casual t-shirt, available in multiple colors',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    category: 'Fashion',
    keywords: ['tshirt', 'cotton', 'casual', 'clothing'],
    prices: { amazon: 599, flipkart: 649, meesho: 499 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.1, flipkart: 4.0, meesho: 3.9 }
  },
  {
    id: '6',
    name: 'Denim Jeans',
    description: 'Classic fit denim jeans, comfortable and durable',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
    category: 'Fashion',
    keywords: ['jeans', 'denim', 'pants', 'casual'],
    prices: { amazon: 1299, flipkart: 1399, meesho: 1199 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.2, flipkart: 4.1, meesho: 4.0 }
  },
  {
    id: '7',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole and breathable mesh',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    category: 'Fashion',
    keywords: ['shoes', 'running', 'sports', 'footwear'],
    prices: { amazon: 2499, flipkart: 2699, meesho: 2299 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.4, flipkart: 4.2, meesho: 4.1 }
  },
  {
    id: '8',
    name: 'Leather Handbag',
    description: 'Genuine leather handbag with multiple compartments',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    category: 'Fashion',
    keywords: ['handbag', 'leather', 'bag', 'accessories'],
    prices: { amazon: 3999, flipkart: 4299, meesho: 3699 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.3, flipkart: 4.1, meesho: 4.0 }
  },

  // Home & Kitchen
  {
    id: '9',
    name: 'Non-Stick Cookware Set',
    description: '5-piece non-stick cookware set with glass lids',
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg',
    category: 'Home & Kitchen',
    keywords: ['cookware', 'kitchen', 'non-stick', 'cooking'],
    prices: { amazon: 3499, flipkart: 3799, meesho: 3199 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.2, flipkart: 4.0, meesho: 3.9 }
  },
  {
    id: '10',
    name: 'Coffee Maker Machine',
    description: 'Automatic drip coffee maker with programmable timer',
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg',
    category: 'Home & Kitchen',
    keywords: ['coffee', 'maker', 'machine', 'kitchen'],
    prices: { amazon: 5999, flipkart: 6299, meesho: 5699 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.3, flipkart: 4.1, meesho: 4.0 }
  },
  {
    id: '11',
    name: 'Bed Sheet Set Cotton',
    description: 'Premium cotton bed sheet set with pillow covers',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
    category: 'Home & Kitchen',
    keywords: ['bedsheet', 'cotton', 'bedroom', 'home'],
    prices: { amazon: 1999, flipkart: 2199, meesho: 1799 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.1, flipkart: 3.9, meesho: 3.8 }
  },
  {
    id: '12',
    name: 'LED Table Lamp',
    description: 'Adjustable LED desk lamp with USB charging port',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
    category: 'Home & Kitchen',
    keywords: ['lamp', 'led', 'desk', 'lighting'],
    prices: { amazon: 1499, flipkart: 1599, meesho: 1399 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.2, flipkart: 4.0, meesho: 3.9 }
  },

  // Sports
  {
    id: '13',
    name: 'Yoga Mat Premium',
    description: '6mm thick anti-slip yoga mat with carrying strap',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
    category: 'Sports',
    keywords: ['yoga', 'mat', 'exercise', 'fitness'],
    prices: { amazon: 1299, flipkart: 1399, meesho: 1199 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.3, flipkart: 4.1, meesho: 4.0 }
  },
  {
    id: '14',
    name: 'Dumbbell Set Adjustable',
    description: 'Adjustable dumbbell set 10-50kg with secure locking',
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg',
    category: 'Sports',
    keywords: ['dumbbell', 'weights', 'fitness', 'gym'],
    prices: { amazon: 8999, flipkart: 9499, meesho: 8499 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.4, flipkart: 4.2, meesho: 4.1 }
  },
  {
    id: '15',
    name: 'Cricket Bat Professional',
    description: 'Professional grade cricket bat made from English willow',
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg',
    category: 'Sports',
    keywords: ['cricket', 'bat', 'sports', 'willow'],
    prices: { amazon: 4999, flipkart: 5299, meesho: 4699 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.2, flipkart: 4.0, meesho: 3.9 }
  },
  {
    id: '16',
    name: 'Football Official Size',
    description: 'FIFA approved official size 5 football with pump',
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg',
    category: 'Sports',
    keywords: ['football', 'soccer', 'ball', 'sports'],
    prices: { amazon: 1299, flipkart: 1399, meesho: 1199 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.1, flipkart: 3.9, meesho: 3.8 }
  },

  // Books
  {
    id: '17',
    name: 'Harry Potter Complete Book Series',
    description: 'Complete collection of all 7 Harry Potter books by J.K. Rowling',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    category: 'Books',
    keywords: ['harry potter', 'books', 'series', 'fiction'],
    prices: { amazon: 2499, flipkart: 2699, meesho: 2199 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.8, flipkart: 4.7, meesho: 4.6 }
  },
  {
    id: '18',
    name: 'The Alchemist by Paulo Coelho',
    description: 'International bestseller, inspirational fiction novel',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    category: 'Books',
    keywords: ['alchemist', 'paulo coelho', 'fiction', 'bestseller'],
    prices: { amazon: 299, flipkart: 319, meesho: 259 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.6, flipkart: 4.5, meesho: 4.4 }
  },

  // Toys & Games
  {
    id: '19',
    name: 'LEGO Classic Creative Bricks Set',
    description: '1500 pieces LEGO set to enhance creativity for kids 4-12 years',
    image: 'https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg',
    category: 'Toys & Games',
    keywords: ['lego', 'toys', 'creative', 'kids'],
    prices: { amazon: 4999, flipkart: 5199, meesho: 4599 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.7, flipkart: 4.6, meesho: 4.5 }
  },
  {
    id: '20',
    name: 'Monopoly Board Game Classic Edition',
    description: 'Classic family board game for 2-8 players, ages 8+',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    category: 'Toys & Games',
    keywords: ['monopoly', 'board game', 'family', 'classic'],
    prices: { amazon: 1999, flipkart: 2099, meesho: 1799 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.4, flipkart: 4.3, meesho: 4.2 }
  },

  // Automotive
  {
    id: '21',
    name: 'Car Dashboard Camera HD 1080p',
    description: 'Full HD recording dash cam with night vision and G-sensor',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
    category: 'Automotive',
    keywords: ['dashcam', 'car', 'camera', 'recording'],
    prices: { amazon: 3999, flipkart: 4199, meesho: 3599 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.2, flipkart: 4.0, meesho: 3.9 }
  },
  {
    id: '22',
    name: 'Car Phone Holder Magnetic Mount',
    description: 'Universal magnetic car mount with 360° rotation',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
    category: 'Automotive',
    keywords: ['phone holder', 'car mount', 'magnetic', 'universal'],
    prices: { amazon: 899, flipkart: 949, meesho: 699 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.1, flipkart: 3.9, meesho: 3.8 }
  },

  // Health & Wellness
  {
    id: '23',
    name: 'Yoga Mat Anti-Slip Exercise Mat',
    description: '6mm thick eco-friendly TPE material yoga mat',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
    category: 'Health & Wellness',
    keywords: ['yoga mat', 'exercise', 'fitness', 'wellness'],
    prices: { amazon: 1499, flipkart: 1599, meesho: 1299 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.3, flipkart: 4.1, meesho: 4.0 }
  },
  {
    id: '24',
    name: 'Whey Protein Powder 2kg',
    description: 'Premium whey protein isolate, chocolate flavor',
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg',
    category: 'Health & Wellness',
    keywords: ['protein', 'whey', 'supplement', 'fitness'],
    prices: { amazon: 3999, flipkart: 4199, meesho: 3599 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.4, flipkart: 4.2, meesho: 4.1 }
  },

  // Jewelry
  {
    id: '25',
    name: 'Gold Plated Chain Necklace',
    description: '18K gold plated necklace, 20 inch length, hypoallergenic',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
    category: 'Jewelry',
    keywords: ['necklace', 'gold plated', 'jewelry', 'chain'],
    prices: { amazon: 2999, flipkart: 3199, meesho: 2599 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.2, flipkart: 4.0, meesho: 3.9 }
  },
  {
    id: '26',
    name: 'Silver Stud Earrings Set',
    description: 'Sterling silver earring set of 6 pairs with gift box',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
    category: 'Jewelry',
    keywords: ['earrings', 'silver', 'jewelry', 'set'],
    prices: { amazon: 1499, flipkart: 1599, meesho: 1299 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.1, flipkart: 3.9, meesho: 3.8 }
  },

  // Pet Supplies
  {
    id: '27',
    name: 'Dog Food Premium Adult Formula',
    description: '10kg pack high protein dog food with real chicken',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    category: 'Pet Supplies',
    keywords: ['dog food', 'pet food', 'premium', 'chicken'],
    prices: { amazon: 2999, flipkart: 3199, meesho: 2699 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.3, flipkart: 4.1, meesho: 4.0 }
  },
  {
    id: '28',
    name: 'Cat Litter Box Self-Cleaning',
    description: 'Automatic self-cleaning litter box with odor control',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    category: 'Pet Supplies',
    keywords: ['cat litter', 'self cleaning', 'pet supplies', 'automatic'],
    prices: { amazon: 4999, flipkart: 5199, meesho: 4599 },
    availability: { amazon: true, flipkart: true, meesho: true },
    ratings: { amazon: 4.2, flipkart: 4.0, meesho: 3.9 }
  }
];