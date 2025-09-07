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
      flipkart: { price: 1699, available: true, url: 'https://www.flipkart.com/boat-rockerz-480-w-beast-mode-rgb-leds-6-light-modes-60hrs-playback-enx-tech-bluetooth/p/itm7362b8da6ff74?pid=ACCH44E526JMXHZN&lid=LSTACCH44E526JMXHZN5SOCIA&marketplace=FLIPKART&q=boAt+Rockerz+480+W%2FRGB+LEDs%2C+6+Light+Modes%2C+40Mm+Drivers%2C+Beast+Mode%2C+60Hrs+Playback%2C+Enx+Tech%2C+BT+V5.3%2C+Adaptive+Fit+%26+Easy+Access+Controls%2C+Bluetooth+Over+Ear+Headphones%28Black+Sabre%29&store=0pm%2Ffcn%2F821&spotlightTagId=default_BestsellerId_0pm%2Ffcn%2F821&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=c30448a0-ebae-438f-a386-d0145497d959.ACCH44E526JMXHZN.SEARCH&ppt=sp&ppn=sp&ssid=c6vesgwzwg0000001757136457655&qH=b8ef5c033205f099', rating: 4.1 }
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
      flipkart: { price: 9348, available: true, url: 'https://www.flipkart.com/redmi-a4-sparkle-purple-128-gb/p/itm195b57bdc2f83?pid=MOBH6YHDGD57AVHX&lid=LSTMOBH6YHDGD57AVHXS7TM33&marketplace=FLIPKART&q=Redmi+A4+5G+%28Sparkle+Purple%2C+4GB+RAM%2C+128GB+Storage%29+%7C+Global+Debut+SD+4s+Gen+2+%7C+Segment+Largest+6.88in+120Hz+%7C+50MP+Dual+Camera+%7C+18W+Fast+Charging&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=f1c4a1fc-1a96-4dd5-b2ca-a3635eb4fbd8.MOBH6YHDGD57AVHX.SEARCH&ppt=pp&ppn=pp&ssid=q2ezfgz3v40000001757138184513&qH=1ed3099a55ca19d2', rating: 4.3 }
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
      flipkart: { price: 31299, available: true, url: 'https://www.flipkart.com/hp-15s-backlit-keyboard-amd-ryzen-3-quad-core-7320u-8-gb-512-gb-ssd-windows-11-home-15-fc0026au-thin-light-laptop/p/itm4e6d85f618393?pid=COMGZNSBMUR7S8WY&lid=LSTCOMGZNSBMUR7S8WYDJAIHL&marketplace=FLIPKART&q=HP+15%2C+AMD+Ryzen+3+7320U+%288GB+LPDDR5%2C+512GB+SSD%29+FHD%2C+Anti-Glare%2C+Micro-Edge%2C+15.6%2F39.6cm%2C+Win+11%2C+Office+21%2C+Silver%2C+1.59kg%2C+fc0154AU%2C+AMD+Radeon+Graphics%2C+1080p+FHD+Camera+Laptop&store=6bo%2Fb5g&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=84e26705-1441-4678-a2b9-74a72626490a.COMGZNSBMUR7S8WY.SEARCH&ppt=pp&ppn=pp&ssid=wilqxlc2a80000001757138736445&qH=fcd7f000930bf35e', rating: 4.2 }
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
      flipkart: { price: 1399, available: true, url: 'https://www.flipkart.com/noise-colorfit-icon-2-1-8-display-bluetooth-calling-ai-voice-assistant-smartwatch/p/itmd4cd819eadb9f?pid=SMWGEH7VGYMGCP3V&lid=LSTSMWGEH7VGYMGCP3VXIJHDY&marketplace=FLIPKART&q=smartwatch&store=ajy%2Fbuh&spotlightTagId=default_BestsellerId_ajy%2Fbuh&srno=s_1_9&otracker=search&otracker1=search&fm=Search&iid=1cfc3223-2be9-4710-960a-03f8a5c5a08e.SMWGEH7VGYMGCP3V.SEARCH&ppt=sp&ppn=sp&qH=adc5bc5b72db9fa3', rating: 4.1 }
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
    name: 'Yoga Mat',
    description: '6mm thick anti-slip yoga mat with carrying strap',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
    category: 'Sports',
    keywords: ['yoga', 'mat', 'exercise', 'fitness'],
    platforms: {
      amazon: { price: 1299, available: true, url: 'https://www.amazon.in/s?k=yoga+mat&crid=15P3G5GK0V6QY&sprefix=yoga+mat+%2Caps%2C345&ref=nb_sb_noss_2', rating: 4.3 },
      flipkart: { price: 1399, available: true, url: 'https://www.flipkart.com/search?q=yoga%20mat%20&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', rating: 4.1 },
      meesho: { price: 1199, available: true, url: 'https://www.meesho.com/search?q=yoga%20mat%20&searchType=manual&searchIdentifier=text_search', rating: 4.0 }
    }
  },
  {
    id: '14',
    name: 'Dumbbell Set',
    description: 'Adjustable dumbbell set 10-50kg with secure locking',
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg',
    category: 'Sports',
    keywords: ['dumbbell', 'weights', 'fitness', 'gym'],
    platforms: {
      amazon: { price: 8999, available: true, url: 'https://www.amazon.in/s?k=Dumbbell+Set&crid=2HWGPDF1UD3KX&sprefix=dumbbell+set%2Caps%2C339&ref=nb_sb_noss_2', rating: 4.4 },
      flipkart: { price: 9499, available: true, url: 'https://www.flipkart.com/search?q=Dumbbell%20Set&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', rating: 4.2 },
      meesho: { price: 8499, available: true, url: 'https://www.meesho.com/search?q=Dumbbell%20Set&searchType=manual&searchIdentifier=text_search', rating: 4.1 }
    }
  },
  {
    id: '15',
    name: 'Cricket Bat',
    description: 'Professional grade cricket bat made from English willow',
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg',
    category: 'Sports',
    keywords: ['cricket', 'bat', 'sports', 'willow'],
    platforms: {
      amazon: { price: 4999, available: true, url: 'https://www.amazon.in/s?k=Cricket+Bat&crid=2X175D5JVN29G&sprefix=cricket+bat%2Caps%2C334&ref=nb_sb_noss_2', rating: 4.2 },
      flipkart: { price: 5299, available: true, url: 'https://www.flipkart.com/search?q=Cricket%20Bat&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', rating: 4.0 },
      meesho: { price: 4699, available: true, url: 'https://www.meesho.com/search?q=Cricket%20Bat&searchType=manual&searchIdentifier=text_search', rating: 3.9 }
    }
  },
  {
    id: '16',
    name: 'Football',
    description: 'Rubber Professional Football [Size-5] | Hard Ground Foot-Ball | Ideal for Grass Ground & Artificial Turf | Training Foot Ball | Soccer Ball',
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg',
    category: 'Sports',
    keywords: ['football', 'soccer', 'ball', 'sports'],
    platforms: {
      amazon: { price: 1299, available: true, url: 'https://www.amazon.in/s?k=football&crid=1E1P0EHVNBWHP&sprefix=football%2Caps%2C335&ref=nb_sb_noss_2', rating: 4.1 },
      flipkart: { price: 1399, available: true, url: 'https://www.flipkart.com/search?q=football&sid=abc%2Cgxg%2Ceha&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&as-pos=1&as-type=RECENT&suggestionId=football%7CFootballs&requestId=da1376fd-17fe-4193-bde5-f65172bbb4b6&as-backfill=on', rating: 3.9 },
      meesho: { price: 1199, available: true, url: 'https://www.meesho.com/search?q=football&searchType=manual&searchIdentifier=text_search', rating: 3.8 }
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
      amazon: { price: 2499, available: true, url: 'https://www.amazon.in/s?k=Harry+Potter+Complete+Book+Series&crid=2B68JYWLNVL5O&sprefix=harry+potter+complete+book+series%2Caps%2C319&ref=nb_sb_noss_2', rating: 4.8 },
      flipkart: { price: 2699, available: true, url: 'https://www.flipkart.com/search?q=Harry%20Potter%20Complete%20Book%20Series&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', rating: 4.7 },
      meesho: { price: 2199, available: true, url: 'https://www.meesho.com/search?q=Harry%20Potter%20Complete%20Book%20Series&searchType=manual&searchIdentifier=text_search', rating: 4.6 }
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
      amazon: { price: 299, available: true, url: 'https://www.amazon.in/s?k=The+Alchemist+by+Paulo+Coelho&ref=nb_sb_noss', rating: 4.6 },
      flipkart: { price: 319, available: true, url: 'https://www.flipkart.com/search?q=The%20Alchemist%20by%20Paulo%20Coelho&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', rating: 4.5 },
      meesho: { price: 259, available: true, url: 'https://www.meesho.com/search?q=The%20Alchemist%20by%20Paulo%20Coelho&searchType=manual&searchIdentifier=text_search', rating: 4.4 }
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
      amazon: { price: 4999, available: true, url: 'https://www.amazon.in/s?k=LEGO+Classic+Creative+Bricks+Set&crid=3LK6LLFU3QMJF&sprefix=lego+classic+creative+bricks+set%2Caps%2C371&ref=nb_sb_noss_1', rating: 4.7 },
      flipkart: { price: 5199, available: true, url: 'https://www.flipkart.com/search?q=LEGO%20Classic%20Creative%20Bricks%20Set&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', rating: 4.6 },
      meesho: { price: 4599, available: true, url: 'https://www.meesho.com/search?q=LEGO%20Classic%20Creative%20Bricks%20Set&searchType=manual&searchIdentifier=text_search', rating: 4.5 }
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
      amazon: { price: 1999, available: true, url: 'https://www.amazon.in/s?k=Monopoly+Board+Game+Classic+Edition&crid=2URDDEUHSL079&sprefix=monopoly+board+game+classic+edition%2Caps%2C347&ref=nb_sb_noss', rating: 4.4 },
      flipkart: { price: 2099, available: true, url: 'https://www.flipkart.com/search?q=Monopoly%20Board%20Game%20Classic%20Edition&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', rating: 4.3 },
      meesho: { price: 1799, available: true, url: 'https://www.meesho.com/search?q=Monopoly%20Board%20Game%20Classic%20Edition&searchType=manual&searchIdentifier=text_search', rating: 4.2 }
    }
  },
  // Personal Care
  {
    id: '21',
    name: 'Bare Anatomy Anti Dandruff Shampoo',
    description: 'Reduces Up to 100% Dandruff and Strengthens Hair | Derma Approved Shampoo with Salicylic Acid & Biotin | Helps Remove Flakes and Itching | Shampoo For All Hair types | For Women And Men',
    image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg',
    category: 'Personal Care',
    keywords: ['shampoo', 'anti-dandruff', 'hair care', 'zinc pyrithione'],
    platforms: {
      amazon: { price: 219, available: true, url: 'https://www.amazon.in/Bare-Anatomy-Dandruff-Strengthens-Salicylic/dp/B0F5BLYYCN/ref=sr_1_1_sspa?crid=AQVLXT5DMN33&dib=eyJ2IjoiMSJ9.mk11LMOH4jHbkPAQ5JIN1AUSXaq1-UsayRkSuN-kiybMDhUIXFpIlpEBOKD0-l-0zBVSXYQNEzcF8k2JFwDZyQqACFVBXmt3H0FqjNg0_eZ8WKY4wd7ZgvcfuJJDNy9tv3fZHFZrBzsifT1Fk16MZ0bIa4RMNAZP6LnIEdMrlMPrVWWdvSvs1dBYVS1pn94MvvKIE_cgpIX-NPCK8nHNnUfEGGCOx5gkA-SQnbU6amB-XOKwXQvMISrrYV7zh5lmShf6W8PZtjsUi-OToq60yBs-bD1JMeKXzAJM3ms4r2M.cHzV9YpdawJ-2ZO6Q5184s8iqk_-5frQ-bOsGryRtpA&dib_tag=se&keywords=Anti-Dandruff%2BShampoo&qid=1757250398&sprefix=anti-dandruff%2Bshampoo%2Caps%2C318&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1', rating: 4.1 },
      flipkart: { price: 219, available: true, url: 'https://www.flipkart.com/bare-anatomy-anti-dandruff-shampoo-upto-100-dandruff-reduction-salicylic-acid-biotin/p/itmac8e1aac3e78f?pid=SMPGWU5ZTRVGZ4PC&lid=LSTSMPGWU5ZTRVGZ4PCPHSWOG&marketplace=FLIPKART&q=Anti-Dandruff%20Shampoo&sattr[]=quantity&st=quantity', rating: 4.2 },
      meesho: { price: 139, available: true, url: 'https://www.meesho.com/anti-dandruff-shampoo-add-to-cart-buy-now-1-similar-products-anti-dandruff-shampoo-anti-dandruff-shampoo/p/9n66om', rating: 3.9 }
    }
  },
  {
    id: '22',
    name: 'Dove Moisturizing Body Soap',
    description: 'Nourished Skin with ¼ Moisturising Cream and Nutrient Serum',
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg',
    category: 'Personal Care',
    keywords: ['soap', 'moisturizing', 'glycerin', 'aloe vera', 'body care'],
    platforms: {
      amazon: { price: 310, available: true, url: 'https://www.amazon.in/Dove-Cream-Beauty-Bar-Moisturised/dp/B08S56PYDJ/ref=sr_1_6?crid=16GBAT7TNQNPY&dib=eyJ2IjoiMSJ9.X1pODJGLrRJ_dUdKh2PwAQxf0Py1_RsExwr2-PWieQUY13FOKWoDeithM7unjuv32BbtY1IqDzi6ctgiUl6R-Y9pC7ezt5cAhF867P3rJRIZiLsehyAD3JkNdnhrWgkNw04u8VqGcupENqcAtIwfZyHW3wbmu0i9YrS8TG8KwRI8LJgFYIZsqrGS38q-QAhiycXEvWs1awccA4BDYyNJ_a5x17ekNrl-b0w0G_OHIRRnYoh1RkE4sLdLcknf8uPPgqJf1dWQnPdS8wyjP7kSRbymlfLtzoCVWY0j_bpgw4A.v6Id3Pu-EG2n3MPdPMHaW2SRRSUgickq3wDWbgB1B-o&dib_tag=se&keywords=Moisturizing+Body+Soap&qid=1757250691&sprefix=moisturizing+body+soap%2Caps%2C390&sr=8-6', rating: 4.5 },
      flipkart: { price: 381, available: true, url: 'https://www.flipkart.com/dove-serum-beauty-bar-b4g1/p/itmebb55e604af0d?pid=SOPFZ2G8XGGH8JFF&lid=LSTSOPFZ2G8XGGH8JFFTZJQYT&marketplace=FLIPKART&q=dove+Moisturizing+Body+Soap&store=g9b%2F5nz%2Fb1b%2Fyug&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=en_BGqbgAyYTFlutHFZ8RRsXF9Bfyzo8jXhvZLBnMgxC60CC2en0MusOP-H9jNQchkHad2shRc-1OuVR1-tFsp--EKsf8s6I2Oz2HOgbXTo_9U%3D&ppt=sp&ppn=sp&ssid=4twdgoovbk0000001757250789716&qH=5a4b60a2d68a9f7f', rating: 4.5 },
      meesho: { price: 309, available: true, url: 'https://www.meesho.com/dove-care-protect-bar-removes-99-germs-moisturises-skin-4x100-g/p/7qtpsj', rating: 4.3 }
    }
  },
  {
    id: '23',
    name: 'Deconstruct Vitamin C Face Serum',
    description: '10% Non-irritating Vitamin C Face Serum For Glowing Skin | Highly Stable Vitamin C Face Serum For Women and Men | Beginner Friendly ',
    image: 'https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg',
    category: 'Personal Care',
    keywords: ['face serum', 'vitamin c', 'niacinamide', 'brightening', 'skincare'],
    platforms: {
      amazon: { price: 278, available: true, url: 'https://www.amazon.in/Deconstruct-Non-Irritating-Non-Sticky-Sensitive-Beginner-Friendly/dp/B0DWT2XL34/ref=sr_1_3_sspa?crid=Z6FB91G4X06P&dib=eyJ2IjoiMSJ9.pUBS0T_PHbz3wEuz702tXpwBkHRHxL-Ko1Gxye96RiCaaWASwrbNVZa9j6fI8BkTLeOq1bgvoHE8LxG7q2uwrvLqX2RUsQVCaC3LPYeweqTdHweySCKCRZaDgf7ndtx9Z_JQZJ7IoegRY4XY6a4FklnmeWP0K5qww_I4I5jvKN2aQTk2S_gMn-nGlbG0w3w6kxPXpv3EpG4YhzsJlm7-dIiNR8-Qf6Q1bsEtYUcDZuOlUM4BppTM1A4w-dFVEC2MNQchzbfC4mfQALK5yP0QJxPeENWhSrJk5xIXgxjJyE8.7qaMFM3Heuzb0qDSSNnqfMjqeujxMkT22LDNJJpJ9-w&dib_tag=se&keywords=Vitamin%2BC%2BFace%2BSerum&qid=1757251340&sprefix=%2Caps%2C410&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1', rating: 4.0 },
      flipkart: { price: 279, available: true, url: 'https://www.flipkart.com/deconstruct-vitamin-c-face-serum-10-non-irritating-non-sticky-sensitive-beginner-friendly/p/itm123456789', rating: 4.1 }
    }
  },
  {
    id: '24',
    name: 'The Derma Co Sunscreen',
    description: 'Broad spectrum sunscreen with SPF 50+, water-resistant and non-greasy formula',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
    category: 'Personal Care',
    keywords: ['sunscreen', 'spf 50', 'broad spectrum', 'water resistant', 'sun protection'],
    platforms: {
      amazon: { price: 263, available: true, url: 'https://www.amazon.in/Derma-Co-Hyaluronic-Lightweight-white-cast/dp/B0C6M3KHXV/ref=sr_1_6?crid=1Y8P5QJNA1VYP&dib=eyJ2IjoiMSJ9.xofoKlPza_6CcRrPLGJloR7c9MaUz9NWSZh4FXtdhC1WWFhGmKBxUAahYPgY4oaU-TzBbLcGRQZOUOmDnz3BUaTU1d9StWKa7wCYtzJ2vKtVxbtiJ7hMcDtPTSS8rD83tJGmc715atxIGFgX7IfSqLiJxd4k46lWsYEUPPdcxQZJ3gKUhf_f5mHHaHuJZdYN1CrJOrD9JZ7WiplhzW4Rql7ATOlwlAL4CIKaqNxJ9A-MoDxK5jVwMb57tsYkEYOt6L_gZwDgmdYQnEhAub40_yXNCjegSGnUa4KXKPM6YoE.3RJ4KCxeI0Dk2sRKCW8PRXSqJH1FobosrDBnpIcveIY&dib_tag=se&keywords=sunscreen%2Bspf50&qid=1757251564&sprefix=suns%2Caps%2C342&sr=8-6&th=1', rating: 4.2 },
      flipkart: { price: 245, available: true, url: 'https://www.flipkart.com/derma-co-sunscreen-spf-50-pa-1-hyaluronic-aqua-gel-lightweight-no-white-cast-broad-spectrum/p/itmf8528fbeb0ee7?pid=SNRGQFP2SH37HH58&lid=LSTSNRGQFP2SH37HH58KRJHCT&marketplace=FLIPKART&q=sunscreen+spf50&store=g9b%2Fema%2F5la%2Fxrh&spotlightTagId=default_BestsellerId_g9b%2Fema%2F5la%2Fxrh&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=d7b0b73a-77bc-4e4a-8eb9-17a6390f46f3.SNRGQFP2SH37HH58.SEARCH&ppt=sp&ppn=sp&ssid=utjoe2rre80000001757251577018&qH=b4c27c4dd026a527', rating: 4.2 },
      meesho: { price: 282, available: true, url: 'https://www.meesho.com/the-derma-co1-hyaluronic-sunscreen-spf-50-aqua-gel-pa-lightweight-no-white-cast-for-broad-spectrum-blue-light-protection-for-oily-dry-acne-prone-skin-30g/p/60vjak', rating: 4.0 }
    }
  }
];