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
    meesho?: {
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
  platform: 'amazon' | 'flipkart' | 'meesho';
  price: number;
  url: string;
  image: string;
  quantity: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Samsung Galaxy S24 Ultra',
    description: '512GB Storage, Titanium Black, 200MP Camera, Snapdragon 8 Gen 3, 12GB RAM, 5000mAh Battery, S Pen Included',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['samsung', 'galaxy', 'smartphone', 'android', 'camera'],
    platforms: {
      amazon: { price: 124999, url: 'https://amazon.in/samsung-s24-ultra', available: true },
      flipkart: { price: 119999, url: 'https://flipkart.com/samsung-s24-ultra', available: true },
      meesho: { price: 122999, url: 'https://meesho.com/samsung-s24-ultra', available: true }
    }
  },
  {
    id: '2',
    name: 'Apple iPhone 15 Pro Max',
    description: '256GB Storage, Natural Titanium, A17 Pro Chip, 48MP Camera System, 6.7" Super Retina XDR Display, iOS 17',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['iphone', 'apple', 'smartphone', 'ios', 'premium'],
    platforms: {
      amazon: { price: 159900, url: 'https://amazon.in/iphone-15-pro-max', available: true },
      flipkart: { price: 154900, url: 'https://flipkart.com/iphone-15-pro-max', available: true },
      meesho: { price: 157900, url: 'https://meesho.com/iphone-15-pro-max', available: true }
    }
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Wireless Noise Cancelling, 30hr Battery Life, Hi-Res Audio, Touch Controls, Quick Charge, Multipoint Connection',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['sony', 'headphones', 'wireless', 'noise cancelling', 'audio', 'bluetooth'],
    platforms: {
      amazon: { price: 29990, url: 'https://amazon.in/sony-wh1000xm5', available: true },
      flipkart: { price: 28499, url: 'https://flipkart.com/sony-wh1000xm5', available: true },
      meesho: { price: 27999, url: 'https://meesho.com/sony-wh1000xm5', available: true }
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
      meesho: { price: 11495, url: 'https://meesho.com/nike-air-max-270', available: true }
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
      meesho: { price: 15499, url: 'https://meesho.com/adidas-ultraboost-22', available: true }
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
      meesho: { price: 2999, url: 'https://meesho.com/levis-511-jeans', available: true }
    }
  },
  {
    id: '7',
    name: 'MacBook Air M3',
    description: '13-inch Liquid Retina Display, Apple M3 Chip, 8GB Unified Memory, 256GB SSD, macOS Sonoma, All-day Battery',
    image: 'https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['macbook', 'apple', 'laptop', 'm3', 'ultrabook', 'computer'],
    platforms: {
      amazon: { price: 114900, url: 'https://amazon.in/macbook-air-m3', available: true },
      flipkart: { price: 112900, url: 'https://flipkart.com/macbook-air-m3', available: true },
      meesho: { price: 109900, url: 'https://meesho.com/macbook-air-m3', available: true }
    }
  },
  {
    id: '8',
    name: 'Dell XPS 13',
    description: '11th Gen Intel Core i7, 16GB LPDDR4x RAM, 512GB PCIe SSD, 13.4" FHD+ Display, Windows 11, Premium Build',
    image: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['dell', 'xps', 'laptop', 'intel', 'premium', 'computer'],
    platforms: {
      amazon: { price: 89999, url: 'https://amazon.in/dell-xps-13', available: true },
      flipkart: { price: 87999, url: 'https://flipkart.com/dell-xps-13', available: true },
      meesho: { price: 85999, url: 'https://meesho.com/dell-xps-13', available: true }
    }
  },
  {
    id: '9',
    name: 'L\'Oreal Paris Revitalift Serum',
    description: 'Anti-Aging Serum with 1.5% Pure Hyaluronic Acid, Vitamin B5, Plumps & Hydrates Skin, Reduces Fine Lines, 30ml',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['loreal', 'serum', 'anti-aging', 'skincare', 'hyaluronic'],
    platforms: {
      amazon: { price: 1299, url: 'https://amazon.in/loreal-revitalift-serum', available: true },
      flipkart: { price: 1199, url: 'https://flipkart.com/loreal-revitalift-serum', available: true },
      meesho: { price: 1099, url: 'https://meesho.com/loreal-revitalift-serum', available: true }
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
      meesho: { price: 749, url: 'https://meesho.com/lakme-absolute-foundation', available: true }
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
      meesho: { price: 7999, url: 'https://meesho.com/ikea-hemnes-bookshelf', available: true }
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
      meesho: { price: 11499, url: 'https://meesho.com/philips-air-fryer', available: true }
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
      meesho: { price: 17499, url: 'https://meesho.com/yonex-arcsaber-11', available: true }
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
      meesho: { price: 4299, url: 'https://meesho.com/decathlon-hiking-backpack', available: true }
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
      meesho: { price: 6999, url: 'https://meesho.com/zara-oversized-blazer', available: true }
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
      meesho: { price: 1599, url: 'https://meesho.com/hm-cotton-tshirt-pack', available: true }
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
      meesho: { price: 529, url: 'https://meesho.com/maybelline-fit-me-concealer', available: true }
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
      meesho: { price: 949, url: 'https://meesho.com/body-shop-tea-tree-wash', available: true }
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
      meesho: { price: 22999, url: 'https://meesho.com/urban-ladder-dining-table', available: true }
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
      meesho: { price: 14499, url: 'https://meesho.com/godrej-office-chair', available: true }
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
      meesho: { price: 21499, url: 'https://meesho.com/wilson-tennis-racket', available: true }
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
      meesho: { price: 6299, url: 'https://meesho.com/puma-running-shoes', available: true }
    }
  },
  {
    id: '23',
    name: 'Canon EOS R6 Mark II',
    description: '24.2MP Full-Frame CMOS Sensor, DIGIC X Processor, 4K 60p Video, In-Body Image Stabilization, Dual Pixel CMOS AF',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Electronics',
    keywords: ['canon', 'camera', 'dslr', 'photography', 'video', 'mirrorless'],
    platforms: {
      amazon: { price: 249999, url: 'https://amazon.in/canon-eos-r6-mark2', available: true },
      flipkart: { price: 244999, url: 'https://flipkart.com/canon-eos-r6-mark2', available: true },
      meesho: { price: 239999, url: 'https://meesho.com/canon-eos-r6-mark2', available: true }
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
      meesho: { price: 10499, url: 'https://meesho.com/jbl-flip-6-speaker', available: true }
    }
  },
  {
    id: '25',
    name: 'Head & Shoulders Anti-Dandruff Shampoo',
    description: 'Zinc Pyrithione Formula, 650ml, Clinically Proven Dandruff Protection, Fresh Scent, Suitable for Daily Use',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['head shoulders', 'shampoo', 'anti-dandruff', 'hair care', 'zinc pyrithione'],
    platforms: {
      amazon: { price: 399, url: 'https://amazon.in/head-shoulders-shampoo', available: true },
      flipkart: { price: 379, url: 'https://flipkart.com/head-shoulders-shampoo', available: true },
      meesho: { price: 359, url: 'https://meesho.com/head-shoulders-shampoo', available: true }
    }
  },
  {
    id: '26',
    name: 'Dove Beauty Bar Soap',
    description: 'Original Formula, Pack of 4 x 100g, 1/4 Moisturizing Cream, Gentle Cleansing, Suitable for Sensitive Skin',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['dove', 'soap', 'beauty bar', 'moisturizing', 'gentle'],
    platforms: {
      amazon: { price: 299, url: 'https://amazon.in/dove-beauty-bar', available: true },
      flipkart: { price: 289, url: 'https://flipkart.com/dove-beauty-bar', available: true },
      meesho: { price: 279, url: 'https://meesho.com/dove-beauty-bar', available: true }
    }
  },
  {
    id: '27',
    name: 'Neutrogena Ultra Sheer Sunscreen SPF 50+',
    description: 'Broad Spectrum UVA/UVB Protection, 88ml, Water Resistant, Non-Greasy Formula, Helioplex Technology',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['neutrogena', 'sunscreen', 'spf 50', 'uv protection', 'water resistant'],
    platforms: {
      amazon: { price: 849, url: 'https://amazon.in/neutrogena-sunscreen', available: true },
      flipkart: { price: 799, url: 'https://flipkart.com/neutrogena-sunscreen', available: true },
      meesho: { price: 779, url: 'https://meesho.com/neutrogena-sunscreen', available: true }
    }
  },
  {
    id: '28',
    name: 'Pantene Pro-V Hair Conditioner',
    description: 'Smooth & Silky Formula, 340ml, Vitamin Pro-V Complex, Reduces Frizz, Adds Shine and Softness',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['pantene', 'conditioner', 'hair care', 'pro-v', 'smooth silky'],
    platforms: {
      amazon: { price: 299, url: 'https://amazon.in/pantene-conditioner', available: true },
      flipkart: { price: 279, url: 'https://flipkart.com/pantene-conditioner', available: true },
      meesho: { price: 259, url: 'https://meesho.com/pantene-conditioner', available: true }
    }
  },
  {
    id: '29',
    name: 'Himalaya Neem Face Wash',
    description: 'Natural Neem & Turmeric Extract, 150ml, Purifies & Prevents Pimples, Oil Control, Ayurvedic Formula',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['himalaya', 'neem', 'face wash', 'turmeric', 'ayurvedic', 'pimples'],
    platforms: {
      amazon: { price: 149, url: 'https://amazon.in/himalaya-neem-face-wash', available: true },
      flipkart: { price: 139, url: 'https://flipkart.com/himalaya-neem-face-wash', available: true },
      meesho: { price: 129, url: 'https://meesho.com/himalaya-neem-face-wash', available: true }
    }
  },
  {
    id: '30',
    name: 'Garnier Micellar Cleansing Water',
    description: 'All-in-1 Makeup Remover, 400ml, Suitable for Sensitive Skin, No Rinse Required, Removes Waterproof Makeup',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['garnier', 'micellar water', 'makeup remover', 'cleansing', 'sensitive skin'],
    platforms: {
      amazon: { price: 599, url: 'https://amazon.in/garnier-micellar-water', available: true },
      flipkart: { price: 569, url: 'https://flipkart.com/garnier-micellar-water', available: true },
      meesho: { price: 549, url: 'https://meesho.com/garnier-micellar-water', available: true }
    }
  },
  {
    id: '31',
    name: 'Johnson\'s Baby Shampoo',
    description: 'No More Tears Formula, 500ml, Gentle & Mild, pH Balanced, Hypoallergenic, Suitable for Daily Use',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['johnsons', 'baby shampoo', 'no tears', 'gentle', 'hypoallergenic'],
    platforms: {
      amazon: { price: 249, url: 'https://amazon.in/johnsons-baby-shampoo', available: true },
      flipkart: { price: 229, url: 'https://flipkart.com/johnsons-baby-shampoo', available: true },
      meesho: { price: 219, url: 'https://meesho.com/johnsons-baby-shampoo', available: true }
    }
  },
  {
    id: '32',
    name: 'Nivea Soft Light Moisturizing Cream',
    description: 'Jojoba Oil & Vitamin E, 200ml, Quick Absorbing, Non-Greasy, 48hr Moisturization, All Skin Types',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Beauty',
    keywords: ['nivea', 'moisturizer', 'jojoba oil', 'vitamin e', 'soft light'],
    platforms: {
      amazon: { price: 199, url: 'https://amazon.in/nivea-soft-cream', available: true },
      flipkart: { price: 189, url: 'https://flipkart.com/nivea-soft-cream', available: true },
      meesho: { price: 179, url: 'https://meesho.com/nivea-soft-cream', available: true }
    }
  }
  },
  {
    id: '33',
    name: 'Harry Potter Complete Book Series',
    description: 'Complete 7-book collection by J.K. Rowling, Paperback Edition, Fantasy Adventure Series, Perfect for Young Adults and Adults',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Books',
    keywords: ['harry potter', 'books', 'fantasy', 'jk rowling', 'series', 'reading'],
    platforms: {
      amazon: { price: 2499, url: 'https://amazon.in/harry-potter-complete-series', available: true },
      flipkart: { price: 2299, url: 'https://flipkart.com/harry-potter-complete-series', available: true },
      meesho: { price: 2199, url: 'https://meesho.com/harry-potter-complete-series', available: true }
    }
  },
  {
    id: '34',
    name: 'The Alchemist by Paulo Coelho',
    description: 'International Bestseller, Inspirational Fiction, Life-changing Philosophy, Paperback, Perfect for Personal Growth and Motivation',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Books',
    keywords: ['alchemist', 'paulo coelho', 'philosophy', 'inspiration', 'bestseller', 'fiction'],
    platforms: {
      amazon: { price: 299, url: 'https://amazon.in/alchemist-paulo-coelho', available: true },
      flipkart: { price: 279, url: 'https://flipkart.com/alchemist-paulo-coelho', available: true },
      meesho: { price: 259, url: 'https://meesho.com/alchemist-paulo-coelho', available: true }
    }
  },
  {
    id: '35',
    name: 'LEGO Classic Creative Bricks Set',
    description: '1500 Pieces, Multiple Colors, Building Blocks for Kids 4-12 Years, Enhances Creativity and Problem-solving Skills',
    image: 'https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Toys & Games',
    keywords: ['lego', 'building blocks', 'creative', 'kids', 'toys', 'educational'],
    platforms: {
      amazon: { price: 4999, url: 'https://amazon.in/lego-classic-creative-bricks', available: true },
      flipkart: { price: 4799, url: 'https://flipkart.com/lego-classic-creative-bricks', available: true },
      meesho: { price: 4599, url: 'https://meesho.com/lego-classic-creative-bricks', available: true }
    }
  },
  {
    id: '36',
    name: 'Monopoly Board Game Classic Edition',
    description: 'Family Board Game, 2-8 Players, Ages 8+, Classic Property Trading Game, Perfect for Family Game Nights',
    image: 'https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Toys & Games',
    keywords: ['monopoly', 'board game', 'family', 'classic', 'strategy', 'entertainment'],
    platforms: {
      amazon: { price: 1999, url: 'https://amazon.in/monopoly-board-game-classic', available: true },
      flipkart: { price: 1899, url: 'https://flipkart.com/monopoly-board-game-classic', available: true },
      meesho: { price: 1799, url: 'https://meesho.com/monopoly-board-game-classic', available: true }
    }
  },
  {
    id: '37',
    name: 'Car Dashboard Camera HD 1080p',
    description: 'Full HD Recording, Night Vision, Loop Recording, G-Sensor, 32GB Memory Card Included, Easy Installation',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Automotive',
    keywords: ['dash cam', 'car camera', 'hd recording', 'automotive', 'safety', 'surveillance'],
    platforms: {
      amazon: { price: 3999, url: 'https://amazon.in/car-dashboard-camera-hd', available: true },
      flipkart: { price: 3799, url: 'https://flipkart.com/car-dashboard-camera-hd', available: true },
      meesho: { price: 3599, url: 'https://meesho.com/car-dashboard-camera-hd', available: true }
    }
  },
  {
    id: '38',
    name: 'Car Phone Holder Magnetic Mount',
    description: 'Universal Magnetic Car Mount, 360° Rotation, Strong Magnet, Compatible with All Smartphones, Dashboard & Windshield Mount',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Automotive',
    keywords: ['phone holder', 'car mount', 'magnetic', 'universal', 'automotive', 'accessories'],
    platforms: {
      amazon: { price: 899, url: 'https://amazon.in/car-phone-holder-magnetic', available: true },
      flipkart: { price: 799, url: 'https://flipkart.com/car-phone-holder-magnetic', available: true },
      meesho: { price: 699, url: 'https://meesho.com/car-phone-holder-magnetic', available: true }
    }
  },
  {
    id: '39',
    name: 'Yoga Mat Anti-Slip Exercise Mat',
    description: '6mm Thick, Non-Slip Surface, Eco-Friendly TPE Material, 183cm x 61cm, Perfect for Yoga, Pilates, and Home Workouts',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Health & Wellness',
    keywords: ['yoga mat', 'exercise', 'fitness', 'anti-slip', 'workout', 'health'],
    platforms: {
      amazon: { price: 1499, url: 'https://amazon.in/yoga-mat-anti-slip', available: true },
      flipkart: { price: 1399, url: 'https://flipkart.com/yoga-mat-anti-slip', available: true },
      meesho: { price: 1299, url: 'https://meesho.com/yoga-mat-anti-slip', available: true }
    }
  },
  {
    id: '40',
    name: 'Whey Protein Powder 2kg',
    description: 'Premium Whey Protein Isolate, 25g Protein per Serving, Chocolate Flavor, Muscle Building, Post-Workout Recovery',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Health & Wellness',
    keywords: ['whey protein', 'protein powder', 'muscle building', 'fitness', 'supplement', 'chocolate'],
    platforms: {
      amazon: { price: 3999, url: 'https://amazon.in/whey-protein-powder-2kg', available: true },
      flipkart: { price: 3799, url: 'https://flipkart.com/whey-protein-powder-2kg', available: true },
      meesho: { price: 3599, url: 'https://meesho.com/whey-protein-powder-2kg', available: true }
    }
  },
  {
    id: '41',
    name: 'Gold Plated Chain Necklace',
    description: '18K Gold Plated, 20 inch Length, Elegant Design, Hypoallergenic, Perfect for Daily Wear and Special Occasions',
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Jewelry',
    keywords: ['gold necklace', 'chain', 'jewelry', 'gold plated', 'elegant', 'accessories'],
    platforms: {
      amazon: { price: 2999, url: 'https://amazon.in/gold-plated-chain-necklace', available: true },
      flipkart: { price: 2799, url: 'https://flipkart.com/gold-plated-chain-necklace', available: true },
      meesho: { price: 2599, url: 'https://meesho.com/gold-plated-chain-necklace', available: true }
    }
  },
  {
    id: '42',
    name: 'Silver Stud Earrings Set',
    description: 'Sterling Silver, Set of 6 Pairs, Different Designs, Hypoallergenic, Perfect Gift for Women, Comes with Gift Box',
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Jewelry',
    keywords: ['silver earrings', 'stud earrings', 'jewelry set', 'sterling silver', 'gift', 'women'],
    platforms: {
      amazon: { price: 1499, url: 'https://amazon.in/silver-stud-earrings-set', available: true },
      flipkart: { price: 1399, url: 'https://flipkart.com/silver-stud-earrings-set', available: true },
      meesho: { price: 1299, url: 'https://meesho.com/silver-stud-earrings-set', available: true }
    }
  },
  {
    id: '43',
    name: 'Dog Food Premium Adult Formula',
    description: '10kg Pack, High Protein, Real Chicken, Complete Nutrition for Adult Dogs, Supports Healthy Digestion and Shiny Coat',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Pet Supplies',
    keywords: ['dog food', 'pet food', 'premium', 'chicken', 'adult dogs', 'nutrition'],
    platforms: {
      amazon: { price: 2999, url: 'https://amazon.in/dog-food-premium-adult', available: true },
      flipkart: { price: 2799, url: 'https://flipkart.com/dog-food-premium-adult', available: true },
      meesho: { price: 2699, url: 'https://meesho.com/dog-food-premium-adult', available: true }
    }
  },
  {
    id: '44',
    name: 'Cat Litter Box Self-Cleaning',
    description: 'Automatic Self-Cleaning, Odor Control, Large Size, Easy to Clean, Suitable for Multiple Cats, Includes Waste Bags',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Pet Supplies',
    keywords: ['cat litter box', 'self-cleaning', 'automatic', 'odor control', 'pet supplies', 'cats'],
    platforms: {
      amazon: { price: 4999, url: 'https://amazon.in/cat-litter-box-self-cleaning', available: true },
      flipkart: { price: 4799, url: 'https://flipkart.com/cat-litter-box-self-cleaning', available: true },
      meesho: { price: 4599, url: 'https://meesho.com/cat-litter-box-self-cleaning', available: true }
    }
];
