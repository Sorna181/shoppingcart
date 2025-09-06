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
  'All',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Sports',
  'Books',
  'Toys & Games',
  'Automotive',
  'Health & Wellness',
  'Jewelry',
  'Pet Supplies',
  'Personal Care'
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
      amazon: { price: 1699, available: true, url: 'https://www.amazon.in/boAt-Rockerz-480-Bluetooth-Headphones/dp/B0DGTTKCJX/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%3Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07&crid=19F8ZJF2QVW86&cv_ct_cx=headphones%2Bbluetooth%2Bwireless&keywords=headphones%2Bbluetooth%2Bwireless&pd_rd_i=B0DGTSRX3R&pd_rd_r=3442a7c8-4653-4542-b236-fc0be748b739&pd_rd_w=gYd1G&pd_rd_wg=6vesW&pf_rd_p=739e670d-dfb3-4be0-9815-d8c5c0372e07&pf_rd_r=532C36ZWVS7EQCDNZNZD&qid=1757136289&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=head%2Caps%2C403&sr=1-1-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1', rating: 4.1 },
      flipkart: { price: 1699, available: true, url: 'https://www.flipkart.com/boat-rockerz-480-w-beast-mode-rgb-leds-6-light-modes-60hrs-playback-enx-tech-bluetooth/p/itm7362b8da6ff74?pid=ACCH44E526JMXHZN&lid=LSTACCH44E526JMXHZN5SOCIA&marketplace=FLIPKART&q=boAt+Rockerz+480+W%2FRGB+LEDs%2C+6+Light+Modes%2C+40Mm+Drivers%2C+Beast+Mode%2C+60Hrs+Playback%2C+Enx+Tech%2C+BT+V5.3%2C+Adaptive+Fit+%26+Easy+Access+Controls%2C+Bluetooth+Over+Ear+Headphones%28Black+Sabre%29&store=0pm%2Ffcn%2F821&spotlightTagId=default_BestsellerId_0pm%2Ffcn%2F821&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=c30448a0-ebae-438f-a386-d0145497d959.ACCH44E526JMXHZN.SEARCH&ppt=sp&ppn=sp&ssid=c6vesgwzwg0000001757136457655&qH=b8ef5c033205f099', rating: 4.1 },
      meesho: { available: false, message: 'Product not available on Meesho' }
    }
  },
  {
    id: '2',
    name: 'Redmi Smartphone',
    description: 'Redmi A4 5G Starry Black 4GB RAM 128GB Storage, Global Debut SD 4s Gen 2, Segment Largest 6.88in 120Hz, 50MP Dual Camera, 18W Fast Charging',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    category: 'Electronics',
    keywords: ['smartphone', 'mobile', 'phone', 'android'],
    platforms: {
      amazon: { price: 9299, available: true, url: 'https://www.amazon.in/Redmi-A4-5G-Storage-Charging/dp/B0DLW4QD72/ref=sr_1_2_sspa?crid=145PZFQBQMFH7&dib=eyJ2IjoiMSJ9.sSLntKEKo9_cOUAOfJk81KVw5p9N3_-o3VZ00qIZYUvfMrCvNH23sm8sxa2Fr4s12b8UY0yzIEShAxFCRMsKg9jbpL1vuNz9Yg85Nyc_hmTDIJcNEAUqLZtQZi81gzb9qq11F2CByN3ydeNl70dfQ2V6y5dNP2V_GQZyR6D_KCqUZhVcUt1RGLGMQO4ME8jV0W3WgFL7El8bBtExsMFdYlEIRNuWn4PH1xkNlE_WTax621-ErJ1fFGEPHQLEOSBE3Btt4u67jwab2p4hqN8Go-FMhZGMt5e0kp8omY86vG4.G1HAJm_UKFccX9CjE2QPb66rsKzDene7OLLeacVYTaI&dib_tag=se&keywords=REDMI%2BA4&qid=1757138485&s=electronics&sprefix=redmi%2Ba4%2Celectronics%2C359&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1', rating: 3.9 },
      flipkart: { price: 9348, available: true, url: 'https://www.flipkart.com/redmi-a4-sparkle-purple-128-gb/p/itm195b57bdc2f83?pid=MOBH6YHDGD57AVHX&lid=LSTMOBH6YHDGD57AVHXS7TM33&marketplace=FLIPKART&q=Redmi+A4+5G+%28Sparkle+Purple%2C+4GB+RAM%2C+128GB+Storage%29+%7C+Global+Debut+SD+4s+Gen+2+%7C+Segment+Largest+6.88in+120Hz+%7C+50MP+Dual+Camera+%7C+18W+Fast+Charging&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=f1c4a1fc-1a96-4dd5-b2ca-a3635eb4fbd8.MOBH6YHDGD57AVHX.SEARCH&ppt=pp&ppn=pp&ssid=q2ezfgz3v40000001757138184513&qH=1ed3099a55ca19d2', rating: 4.3 },
      meesho: { available: false, message: 'Product not available on Meesho' }
    }
  },
  {
    id: '3',
    name: 'HP Laptop',
    description: 'HP 15, AMD Ryzen 3 7320U (8GB LPDDR5, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6"/39.6cm, Win 11, Office 21, Silver, 1.59kg, fc0154AU, AMD Radeon Graphics, 1080p FHD Camera Laptop',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
    category: 'Electronics',
    keywords: ['laptop', 'computer', 'intel', 'windows'],
    platforms: {
      amazon: { price: 30880, available: true, url: 'https://www.amazon.in/HP-Laptop-15-6-inch-Graphics-fc0154AU/dp/B0D3HG5CMG/ref=sr_1_3?crid=1OA8L34TBIASN&dib=eyJ2IjoiMSJ9.vTT5ocH1UNCusAvvlNprLt6exRyfR8SNYkJYwELnozA8yvKjb7F2dBSgwLUd_xm2-mCy1Q6hsTT7UCOEMhcUb-YknfRD7lSazhzR60ralxsWT3aZsm21BkhW2KUXPnXg3Qt859yATh3pCWuAno6lPPNYLK8_WaJmkCcK_kp7B2lS_DZy5GIuCuDyECDV_NJw-ZIUkOfvv4yJhGhtd_LVlQWBlirj_L9APjRagvA0Hr1AZ2j1Wu18s1cVnM7NYAVzfwqEq4sDgv238KExhGPz9aaOS9pRsDbvcsF6xfr7neU.8d62e8YlpMEzVa3sZIVpUMjH_hUj4mXxnp8OQk0zPco&dib_tag=se&keywords=laptop&qid=1757138690&s=electronics&sprefix=laptop%2Celectronics%2C403&sr=1-3&th=1', rating: 4.0 },
      flipkart: { price: 31299, available: true, url: 'https://www.flipkart.com/hp-15s-backlit-keyboard-amd-ryzen-3-quad-core-7320u-8-gb-512-gb-ssd-windows-11-home-15-fc0026au-thin-light-laptop/p/itm4e6d85f618393?pid=COMGZNSBMUR7S8WY&lid=LSTCOMGZNSBMUR7S8WYDJAIHL&marketplace=FLIPKART&q=HP+15%2C+AMD+Ryzen+3+7320U+%288GB+LPDDR5%2C+512GB+SSD%29+FHD%2C+Anti-Glare%2C+Micro-Edge%2C+15.6%2F39.6cm%2C+Win+11%2C+Office+21%2C+Silver%2C+1.59kg%2C+fc0154AU%2C+AMD+Radeon+Graphics%2C+1080p+FHD+Camera+Laptop&store=6bo%2Fb5g&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=84e26705-1441-4678-a2b9-74a72626490a.COMGZNSBMUR7S8WY.SEARCH&ppt=pp&ppn=pp&ssid=wilqxlc2a80000001757138736445&qH=fcd7f000930bf35e', rating: 4.2 },
      meesho: { available: false, message: 'Product not available on Meesho' }
    }
  },
  {
    id: '4',
    name: 'Smart Watch ',
    description: 'Noise Icon 3 1.91" Display, Bluetooth Calling, Metallic Finish Smart Watch, Voice Assistant, 7 Days Battery, 100 Sports Modes, Smartwatch for Men and Women',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'Electronics',
    keywords: ['smartwatch', 'fitness', 'tracker', 'health'],
    platforms: {
      amazon: { price: 1399, available: true, url: 'https://www.amazon.in/Noise-ColorFit-Icon-3/dp/B0C2F9VGZ5/ref=sr_1_5?crid=188HKWJV5NC3N&dib=eyJ2IjoiMSJ9.Njd4nXciNiC8Fa1LzRiv_SEy-Dv7HfEZsDeVBqkWyPjwYFDJR2K-LxmSB7q23Shnzi-DOISWhj8xW8Ff9GNO3GscZIc22FykPLvRjZlFCo-_oSFcPjwfRFrPXMZ51PtSIMiaxFWWOB6GAcGhDi9Kz5Nag4c1xBYVD_zlxm68YzaG7RJrSpV4C2yvDrhwIpHDw5IH6Y-rSTL2je3TGTqtajB0Cpl_J-fdRhWAoMYRBHyD9PFd6CdsNKJRaK9dUgpeu1X--Jqc5leisnLNdQ1Hw7lLbJhulhmmQOHzO2lJM4w.FkZv4XABlHMwdOHdC8XTotx5Du0CZNCECAD5cljHp4I&dib_tag=se&keywords=Noise%2BColorfit%2BIcon%2B2%2B1.8%27%27%2BDisplay%2Bwith%2BBluetooth%2BCalling%2C%2BAI%2BVoice%2BAssistant%2BSmartwatch%2B(Jet%2BBlack%2BStrap%2C%2BRegular)&nsdOptOutParam=true&qid=1757139034&s=electronics&sprefix=noise%2Bcolorfit%2Bicon%2B2%2B1.8%27%27%2Bdisplay%2Bwith%2Bbluetooth%2Bcalling%2C%2Bai%2Bvoice%2Bassistant%2Bsmartwatch%2Bjet%2Bblack%2Bstrap%2C%2Bregular%2B%2Celectronics%2C395&sr=1-5&th=1', rating: 3.2 },
      flipkart: { price: 1399, available: true, url: 'https://www.flipkart.com/noise-colorfit-icon-2-1-8-display-bluetooth-calling-ai-voice-assistant-smartwatch/p/itmd4cd819eadb9f?pid=SMWGEH7VGYMGCP3V&lid=LSTSMWGEH7VGYMGCP3VXIJHDY&marketplace=FLIPKART&q=smartwatch&store=ajy%2Fbuh&spotlightTagId=default_BestsellerId_ajy%2Fbuh&srno=s_1_9&otracker=search&otracker1=search&fm=Search&iid=1cfc3223-2be9-4710-960a-03f8a5c5a08e.SMWGEH7VGYMGCP3V.SEARCH&ppt=sp&ppn=sp&qH=adc5bc5b72db9fa3', rating: 4.1 },
      meesho: { available: false, message: 'Product not available on Meesho' }
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
      amazon: { price: 599, available: true, url: 'https://www.amazon.in/s?k=cotton+t+shirt+men', rating: 4.1 },
      flipkart: { price: 649, available: true, url: 'https://www.flipkart.com/search?q=cotton%20t%20shirt%20men&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=offt', rating: 4.0 },
      meesho: { price: 499, available: true, url: 'https://www.meesho.com/search?q=cotton%20t%20shirt%20men&searchType=manual&searchIdentifier=text_search', rating: 3.9 }
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
      amazon: { price: 1299, available: true, url: 'https://www.amazon.in/s?k=denim+jeans+for+men&crid=2NJ780KUSBPKX&sprefix=%2Caps%2C434&ref=nb_sb_noss_2', rating: 4.2 },
      flipkart: { price: 1399, available: true, url: 'https://www.flipkart.com/search?q=denim+jeans+for+men&sid=clo%2Cvua%2Ck58%2Ci51&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_15_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_15_na_na_na&as-pos=1&as-type=RECENT&suggestionId=denim+jeans+for+men%7CMen%27s+Jeans&requestId=8bd9bdd6-aca3-47cf-8ad1-782e69a642ff&as-searchtext=denim%20jeans%20men', rating: 4.1 },
      meesho: { price: 1199, available: true, url: 'https://www.meesho.com/search?q=denim%20jeans%20for%20men&searchType=manual&searchIdentifier=text_search', rating: 4.0 }
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
      amazon: { price: 2499, available: true, url: 'https://www.amazon.in/s?k=running+shoes+for+man&crid=B7M0V20XSQEO&sprefix=runni%2Caps%2C391&ref=nb_sb_ss_mvt-t11-ranker_1_5', rating: 4.4 },
      flipkart: { price: 2699, available: true, url: 'https://www.flipkart.com/search?q=running%20shoes%20for%20man&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', rating: 4.2 },
      meesho: { price: 2299, available: true, url: 'https://www.meesho.com/search?q=running%20shoes%20for%20man&searchType=manual&searchIdentifier=text_search', rating: 4.1 }
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
      amazon: { price: 3999, available: true, url: 'https://www.amazon.in/s?k=leather+handbags+for+men&crid=3ZSP6WS8MJYE&sprefix=leather+handbags+for+women%2Caps%2C427&ref=nb_sb_ss_saint-en-refocus-candidate_1_26', rating: 4.3 },
      flipkart: { price: 4299, available: true, url: 'https://www.flipkart.com/search?q=leather%20handbags%20for%20men&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', rating: 4.1 },
      meesho: { price: 3699, available: true, url: 'https://www.meesho.com/search?q=leather%20handbags%20for%20men&searchType=manual&searchIdentifier=text_search', rating: 4.0 }
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
  },

  // Personal Care
  {
    id: '29',
    name: 'Anti-Dandruff Shampoo 400ml',
    description: 'Clinically proven anti-dandruff shampoo with zinc pyrithione, suitable for all hair types',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
    category: 'Personal Care',
    keywords: ['shampoo', 'anti-dandruff', 'hair care', 'zinc pyrithione'],
    platforms: {
      amazon: { price: 299, available: true, url: 'https://amazon.in/anti-dandruff-shampoo', rating: 4.2 },
      flipkart: { price: 319, available: true, url: 'https://flipkart.com/anti-dandruff-shampoo', rating: 4.1 },
      meesho: { price: 279, available: true, url: 'https://meesho.com/anti-dandruff-shampoo', rating: 4.0 }
    }
  },
  {
    id: '30',
    name: 'Moisturizing Body Soap Pack of 4',
    description: 'Natural glycerin soap bars with aloe vera and vitamin E, gentle on skin',
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg',
    category: 'Personal Care',
    keywords: ['soap', 'moisturizing', 'glycerin', 'aloe vera', 'body care'],
    platforms: {
      amazon: { price: 199, available: true, url: 'https://amazon.in/moisturizing-soap', rating: 4.3 },
      flipkart: { price: 219, available: true, url: 'https://flipkart.com/moisturizing-soap', rating: 4.2 },
      meesho: { price: 179, available: true, url: 'https://meesho.com/moisturizing-soap', rating: 4.1 }
    }
  },
  {
    id: '31',
    name: 'Anti-Aging Night Cream 50g',
    description: 'Advanced anti-aging night cream with retinol and hyaluronic acid for younger-looking skin',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg',
    category: 'Personal Care',
    keywords: ['night cream', 'anti-aging', 'retinol', 'hyaluronic acid', 'skincare'],
    platforms: {
      amazon: { price: 899, available: true, url: 'https://amazon.in/anti-aging-cream', rating: 4.4 },
      flipkart: { price: 949, available: true, url: 'https://flipkart.com/anti-aging-cream', rating: 4.3 },
      meesho: { price: 799, available: true, url: 'https://meesho.com/anti-aging-cream', rating: 4.2 }
    }
  },
  {
    id: '32',
    name: 'Vitamin C Face Serum 30ml',
    description: '20% Vitamin C serum with niacinamide for brightening and reducing dark spots',
    image: 'https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg',
    category: 'Personal Care',
    keywords: ['face serum', 'vitamin c', 'niacinamide', 'brightening', 'skincare'],
    platforms: {
      amazon: { price: 599, available: true, url: 'https://amazon.in/vitamin-c-serum', rating: 4.5 },
      flipkart: { price: 629, available: true, url: 'https://flipkart.com/vitamin-c-serum', rating: 4.4 },
      meesho: { price: 549, available: true, url: 'https://meesho.com/vitamin-c-serum', rating: 4.3 }
    }
  },
  {
    id: '33',
    name: 'Herbal Face Wash 150ml',
    description: 'Natural herbal face wash with neem and turmeric, suitable for oily and acne-prone skin',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
    category: 'Personal Care',
    keywords: ['face wash', 'herbal', 'neem', 'turmeric', 'acne', 'oily skin'],
    platforms: {
      amazon: { price: 149, available: true, url: 'https://amazon.in/herbal-face-wash', rating: 4.1 },
      flipkart: { price: 159, available: true, url: 'https://flipkart.com/herbal-face-wash', rating: 4.0 },
      meesho: { price: 129, available: true, url: 'https://meesho.com/herbal-face-wash', rating: 3.9 }
    }
  },
  {
    id: '34',
    name: 'Sunscreen SPF 50+ 100ml',
    description: 'Broad spectrum sunscreen with SPF 50+, water-resistant and non-greasy formula',
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg',
    category: 'Personal Care',
    keywords: ['sunscreen', 'spf 50', 'broad spectrum', 'water resistant', 'sun protection'],
    platforms: {
      amazon: { price: 399, available: true, url: 'https://amazon.in/sunscreen-spf50', rating: 4.3 },
      flipkart: { price: 419, available: true, url: 'https://flipkart.com/sunscreen-spf50', rating: 4.2 },
      meesho: { price: 359, available: true, url: 'https://meesho.com/sunscreen-spf50', rating: 4.1 }
    }
  }
];
