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
  }
];

export const categories = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports'];