export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  platforms: {
    amazon?: {
      price: number;
      url: string;
      available: boolean;
    };
    flipkart?: {
      price: number;
      url: string;
      available: boolean;
    };
    myntra?: {
      price: number;
      url: string;
      available: boolean;
    };
  };
  keywords: string[];
}

export interface CartItem {
  productId: string;
  productName: string;
  platform: 'amazon' | 'flipkart' | 'myntra';
  price: number;
  url: string;
  image: string;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Samsung Galaxy S24 Ultra',
    description: '512GB, Titanium Black, 200MP Camera',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['samsung', 'galaxy', 'smartphone', 'android', 'camera'],
    platforms: {
      amazon: { price: 124999, url: 'https://amazon.in/samsung-s24-ultra', available: true },
      flipkart: { price: 119999, url: 'https://flipkart.com/samsung-s24-ultra', available: true },
      myntra: { price: 127999, url: 'https://myntra.com/samsung-s24-ultra', available: false }
    }
  },
  {
    id: '2',
    name: 'Apple iPhone 15 Pro Max',
    description: '256GB, Natural Titanium, A17 Pro Chip',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['iphone', 'apple', 'smartphone', 'ios', 'premium'],
    platforms: {
      amazon: { price: 159900, url: 'https://amazon.in/iphone-15-pro-max', available: true },
      flipkart: { price: 154900, url: 'https://flipkart.com/iphone-15-pro-max', available: true },
      myntra: { price: 162900, url: 'https://myntra.com/iphone-15-pro-max', available: true }
    }
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Wireless Noise Cancelling, 30hr Battery',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['sony', 'headphones', 'wireless', 'noise cancelling', 'audio'],
    platforms: {
      amazon: { price: 29990, url: 'https://amazon.in/sony-wh1000xm5', available: true },
      flipkart: { price: 28499, url: 'https://flipkart.com/sony-wh1000xm5', available: true },
      myntra: { price: 31990, url: 'https://myntra.com/sony-wh1000xm5', available: true }
    }
  },
  {
    id: '4',
    name: 'Nike Air Max 270',
    description: 'Running Shoes, Black/White, Comfortable Fit',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Fashion',
    keywords: ['nike', 'shoes', 'running', 'sports', 'comfort'],
    platforms: {
      amazon: { price: 12995, url: 'https://amazon.in/nike-air-max-270', available: true },
      flipkart: { price: 11999, url: 'https://flipkart.com/nike-air-max-270', available: false },
      myntra: { price: 12495, url: 'https://myntra.com/nike-air-max-270', available: true }
    }
  },
  {
    id: '5',
    name: 'Adidas Ultraboost 22',
    description: 'Premium Running Shoes, Energy Return',
    image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Fashion',
    keywords: ['adidas', 'ultraboost', 'running', 'premium', 'energy'],
    platforms: {
      amazon: { price: 16999, url: 'https://amazon.in/adidas-ultraboost-22', available: true },
      flipkart: { price: 15999, url: 'https://flipkart.com/adidas-ultraboost-22', available: true },
      myntra: { price: 16499, url: 'https://myntra.com/adidas-ultraboost-22', available: true }
    }
  },
  {
    id: '6',
    name: 'Levi\'s 511 Slim Jeans',
    description: 'Dark Wash, Slim Fit, Premium Denim',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Fashion',
    keywords: ['levis', 'jeans', 'denim', 'slim fit', 'casual'],
    platforms: {
      amazon: { price: 3499, url: 'https://amazon.in/levis-511-jeans', available: true },
      flipkart: { price: 3299, url: 'https://flipkart.com/levis-511-jeans', available: true },
      myntra: { price: 3199, url: 'https://myntra.com/levis-511-jeans', available: true }
    }
  },
  {
    id: '7',
    name: 'MacBook Air M3',
    description: '13-inch, 8GB RAM, 256GB SSD, Space Grey',
    image: 'https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['macbook', 'apple', 'laptop', 'm3', 'ultrabook'],
    platforms: {
      amazon: { price: 114900, url: 'https://amazon.in/macbook-air-m3', available: true },
      flipkart: { price: 112900, url: 'https://flipkart.com/macbook-air-m3', available: true },
      myntra: { price: 117900, url: 'https://myntra.com/macbook-air-m3', available: false }
    }
  },
  {
    id: '8',
    name: 'Dell XPS 13',
    description: '11th Gen Intel i7, 16GB RAM, 512GB SSD',
    image: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['dell', 'xps', 'laptop', 'intel', 'premium'],
    platforms: {
      amazon: { price: 89999, url: 'https://amazon.in/dell-xps-13', available: true },
      flipkart: { price: 87999, url: 'https://flipkart.com/dell-xps-13', available: true },
      myntra: { price: 92999, url: 'https://myntra.com/dell-xps-13', available: false }
    }
  },
  {
    id: '9',
    name: 'L\'Oreal Paris Revitalift Serum',
    description: 'Anti-Aging Hyaluronic Acid Serum, 30ml',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['loreal', 'serum', 'anti-aging', 'skincare', 'hyaluronic'],
    platforms: {
      amazon: { price: 1299, url: 'https://amazon.in/loreal-revitalift-serum', available: true },
      flipkart: { price: 1199, url: 'https://flipkart.com/loreal-revitalift-serum', available: true },
      myntra: { price: 1399, url: 'https://myntra.com/loreal-revitalift-serum', available: true }
    }
  },
  {
    id: '10',
    name: 'Lakme Absolute Foundation',
    description: 'Matte Finish, SPF 16, Natural Ivory',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['lakme', 'foundation', 'makeup', 'matte', 'spf'],
    platforms: {
      amazon: { price: 899, url: 'https://amazon.in/lakme-absolute-foundation', available: true },
      flipkart: { price: 849, url: 'https://flipkart.com/lakme-absolute-foundation', available: false },
      myntra: { price: 799, url: 'https://myntra.com/lakme-absolute-foundation', available: true }
    }
  },
  {
    id: '11',
    name: 'IKEA Hemnes Bookshelf',
    description: 'White Stain, 5 Shelves, Solid Wood',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Home & Living',
    keywords: ['ikea', 'bookshelf', 'furniture', 'storage', 'wood'],
    platforms: {
      amazon: { price: 8999, url: 'https://amazon.in/ikea-hemnes-bookshelf', available: true },
      flipkart: { price: 8499, url: 'https://flipkart.com/ikea-hemnes-bookshelf', available: true },
      myntra: { price: 9299, url: 'https://myntra.com/ikea-hemnes-bookshelf', available: false }
    }
  },
  {
    id: '12',
    name: 'Philips Air Fryer HD9252',
    description: '4.1L Capacity, Rapid Air Technology, Black',
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Home & Living',
    keywords: ['philips', 'air fryer', 'kitchen', 'cooking', 'healthy'],
    platforms: {
      amazon: { price: 12999, url: 'https://amazon.in/philips-air-fryer', available: true },
      flipkart: { price: 11999, url: 'https://flipkart.com/philips-air-fryer', available: true },
      myntra: { price: 13499, url: 'https://myntra.com/philips-air-fryer', available: false }
    }
  },
  {
    id: '13',
    name: 'Yonex Arcsaber 11 Badminton Racket',
    description: 'Professional Grade, 83g, Strung',
    image: 'https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Sports',
    keywords: ['yonex', 'badminton', 'racket', 'sports', 'professional'],
    platforms: {
      amazon: { price: 18999, url: 'https://amazon.in/yonex-arcsaber-11', available: true },
      flipkart: { price: 17999, url: 'https://flipkart.com/yonex-arcsaber-11', available: true },
      myntra: { price: 19499, url: 'https://myntra.com/yonex-arcsaber-11', available: true }
    }
  },
  {
    id: '14',
    name: 'Decathlon Quechua Hiking Backpack',
    description: '50L Capacity, Waterproof, Multiple Compartments',
    image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Sports',
    keywords: ['decathlon', 'backpack', 'hiking', 'outdoor', 'waterproof'],
    platforms: {
      amazon: { price: 4999, url: 'https://amazon.in/decathlon-hiking-backpack', available: true },
      flipkart: { price: 4599, url: 'https://flipkart.com/decathlon-hiking-backpack', available: true },
      myntra: { price: 5199, url: 'https://myntra.com/decathlon-hiking-backpack', available: false }
    }
  },
  {
    id: '15',
    name: 'Zara Oversized Blazer',
    description: 'Navy Blue, Double Breasted, Premium Fabric',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Fashion',
    keywords: ['zara', 'blazer', 'formal', 'navy', 'oversized'],
    platforms: {
      amazon: { price: 7999, url: 'https://amazon.in/zara-oversized-blazer', available: false },
      flipkart: { price: 7599, url: 'https://flipkart.com/zara-oversized-blazer', available: true },
      myntra: { price: 7299, url: 'https://myntra.com/zara-oversized-blazer', available: true }
    }
  },
  {
    id: '16',
    name: 'H&M Cotton T-Shirt Pack',
    description: 'Pack of 3, Basic Colors, 100% Cotton',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Fashion',
    keywords: ['hm', 'tshirt', 'cotton', 'basic', 'pack'],
    platforms: {
      amazon: { price: 1999, url: 'https://amazon.in/hm-cotton-tshirt-pack', available: true },
      flipkart: { price: 1799, url: 'https://flipkart.com/hm-cotton-tshirt-pack', available: true },
      myntra: { price: 1699, url: 'https://myntra.com/hm-cotton-tshirt-pack', available: true }
    }
  },
  {
    id: '17',
    name: 'Maybelline Fit Me Concealer',
    description: 'Medium Coverage, 6.8ml, Shade 20',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['maybelline', 'concealer', 'makeup', 'coverage', 'shade'],
    platforms: {
      amazon: { price: 599, url: 'https://amazon.in/maybelline-fit-me-concealer', available: true },
      flipkart: { price: 549, url: 'https://flipkart.com/maybelline-fit-me-concealer', available: true },
      myntra: { price: 579, url: 'https://myntra.com/maybelline-fit-me-concealer', available: true }
    }
  },
  {
    id: '18',
    name: 'The Body Shop Tea Tree Face Wash',
    description: 'Oil Control, 250ml, Natural Ingredients',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['body shop', 'face wash', 'tea tree', 'oil control', 'natural'],
    platforms: {
      amazon: { price: 1095, url: 'https://amazon.in/body-shop-tea-tree-wash', available: true },
      flipkart: { price: 999, url: 'https://flipkart.com/body-shop-tea-tree-wash', available: false },
      myntra: { price: 1050, url: 'https://myntra.com/body-shop-tea-tree-wash', available: true }
    }
  },
  {
    id: '19',
    name: 'Urban Ladder Dining Table',
    description: '4 Seater, Sheesham Wood, Natural Finish',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Home & Living',
    keywords: ['urban ladder', 'dining table', 'furniture', 'wood', 'seater'],
    platforms: {
      amazon: { price: 24999, url: 'https://amazon.in/urban-ladder-dining-table', available: true },
      flipkart: { price: 23499, url: 'https://flipkart.com/urban-ladder-dining-table', available: true },
      myntra: { price: 25999, url: 'https://myntra.com/urban-ladder-dining-table', available: false }
    }
  },
  {
    id: '20',
    name: 'Godrej Interio Office Chair',
    description: 'Ergonomic, High Back, Mesh Design',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Home & Living',
    keywords: ['godrej', 'office chair', 'ergonomic', 'mesh', 'furniture'],
    platforms: {
      amazon: { price: 15999, url: 'https://amazon.in/godrej-office-chair', available: true },
      flipkart: { price: 14999, url: 'https://flipkart.com/godrej-office-chair', available: true },
      myntra: { price: 16499, url: 'https://myntra.com/godrej-office-chair', available: false }
    }
  },
  {
    id: '21',
    name: 'Wilson Tennis Racket Pro Staff',
    description: 'Professional Grade, 315g, Strung',
    image: 'https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Sports',
    keywords: ['wilson', 'tennis', 'racket', 'professional', 'sports'],
    platforms: {
      amazon: { price: 22999, url: 'https://amazon.in/wilson-tennis-racket', available: true },
      flipkart: { price: 21999, url: 'https://flipkart.com/wilson-tennis-racket', available: true },
      myntra: { price: 23499, url: 'https://myntra.com/wilson-tennis-racket', available: true }
    }
  },
  {
    id: '22',
    name: 'Puma Running Shoes Velocity',
    description: 'Lightweight, Breathable Mesh, Blue/White',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Sports',
    keywords: ['puma', 'running shoes', 'lightweight', 'breathable', 'sports'],
    platforms: {
      amazon: { price: 6999, url: 'https://amazon.in/puma-running-shoes', available: true },
      flipkart: { price: 6499, url: 'https://flipkart.com/puma-running-shoes', available: true },
      myntra: { price: 6799, url: 'https://myntra.com/puma-running-shoes', available: true }
    }
  },
  {
    id: '23',
    name: 'Canon EOS R6 Mark II',
    description: '24.2MP Full Frame, 4K Video, Image Stabilization',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['canon', 'camera', 'dslr', 'photography', 'video'],
    platforms: {
      amazon: { price: 249999, url: 'https://amazon.in/canon-eos-r6-mark2', available: true },
      flipkart: { price: 244999, url: 'https://flipkart.com/canon-eos-r6-mark2', available: true },
      myntra: { price: 254999, url: 'https://myntra.com/canon-eos-r6-mark2', available: false }
    }
  },
  {
    id: '24',
    name: 'JBL Flip 6 Bluetooth Speaker',
    description: 'Waterproof, 12hr Battery, Powerful Bass',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['jbl', 'speaker', 'bluetooth', 'waterproof', 'bass'],
    platforms: {
      amazon: { price: 11999, url: 'https://amazon.in/jbl-flip-6-speaker', available: true },
      flipkart: { price: 10999, url: 'https://flipkart.com/jbl-flip-6-speaker', available: true },
      myntra: { price: 12499, url: 'https://myntra.com/jbl-flip-6-speaker', available: true }
    }
  }
];

export const categories = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports'];