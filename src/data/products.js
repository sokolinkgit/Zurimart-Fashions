export const PRODUCTS = [
  // --- LADIES COLLECTION (PRIMARY STORE FOCUS) ---
  {
    id: 'l-01',
    name: 'The Nairobi Luxe Ankara Blazer Dress',
    gender: 'ladies',
    category: 'Ankara & African Prints',
    occasion: 'Office / Corporate',
    price: 3200,
    originalPrice: 3800,
    image: '/images/ladies/hero-kenyan-lady.jpg',
    tag: 'Best Seller 🔥',
    rating: 4.9,
    reviewsCount: 42,
    description: 'Bespoke double-breasted Ankara print blazer dress cut with a tailored silhouette and gold crest buttons. Perfectly balanced between modern corporate polish and bold African heritage. Styled and tailored in Kenya.',
    details: [
      '100% Authentic High-Grade Cotton Ankara Print',
      'Structured double-breasted closure with gold metal buttons',
      'Fully lined interior with soft satin finish',
      'Wear as a standalone dress or open over trousers'
    ],
    sizes: ['S (8)', 'M (10)', 'L (12)', 'XL (14)', 'XXL (16)'],
    colors: [
      { name: 'Royal Indigo & Gold', hex: '#1e3a8a' },
      { name: 'Sunset Terracotta', hex: '#c2410c' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'l-02',
    name: 'Emerald Satin Wrap Goddess Gown',
    gender: 'ladies',
    category: 'Dresses & Gowns',
    occasion: 'Events & Weddings',
    price: 3500,
    originalPrice: 4200,
    image: '/images/ladies/dress-emerald.jpg',
    tag: 'Trending ✨',
    rating: 5.0,
    reviewsCount: 38,
    description: 'An ethereal rich emerald green stretch-satin wrap maxi dress featuring an adjustable waist belt, billowing bishop sleeves, and a sensual high leg slit. The showstopper for weddings, evening galas, and dinner dates.',
    details: [
      'Silky stretch duchess satin with brilliant light sheen',
      'True wrap construction for an adjustable silhouette',
      'Tasteful front leg slit and deep V-neckline',
      'Floor-sweeping elegant drape'
    ],
    sizes: ['S (8)', 'M (10)', 'L (12)', 'XL (14)'],
    colors: [
      { name: 'Emerald Green', hex: '#047857' },
      { name: 'Midnight Wine', hex: '#831843' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'l-03',
    name: 'Kikuyu Road Ankara Palazzo Two-Piece Set',
    gender: 'ladies',
    category: 'Two-Piece Sets & Jumpsuits',
    occasion: 'Everyday Casual',
    price: 2800,
    originalPrice: 3400,
    image: '/images/ladies/ankara-two-piece.jpg',
    tag: 'Hot Drop 🌟',
    rating: 4.8,
    reviewsCount: 29,
    description: 'Vibrant matching Ankara crop top with flutter shoulders and high-waisted wide-leg palazzo pants with deep side pockets. A versatile coord set that exudes confidence, elegance, and African beauty.',
    details: [
      'Authentic wax print cotton, pre-shrunk & colorfast',
      'High-waisted palazzo pants with elastic back comfort waist',
      'Top can be paired with high-waist denim or plain skirts',
      'Includes two generous functional pockets'
    ],
    sizes: ['S (8)', 'M (10)', 'L (12)', 'XL (14)', 'XXL (16)'],
    colors: [
      { name: 'Sunburst Indigo & Gold', hex: '#1e40af' },
      { name: 'Earthy Amber & Ruby', hex: '#991b1b' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'l-04',
    name: 'Upper Hill Executive Pastel Power Suit',
    gender: 'ladies',
    category: 'Official & Workwear',
    occasion: 'Office / Corporate',
    price: 4500,
    originalPrice: 5200,
    image: '/images/ladies/office-power-suit.jpg',
    tag: 'Executive Pick 💼',
    rating: 4.9,
    reviewsCount: 31,
    description: 'Sharp, tailored double-breasted power blazer suit in blush rose with ankle-grazer cigarette trousers. Designed for the high-flying Kenyan career woman making bold moves in Nairobi CBD, Upper Hill, or Westlands.',
    details: [
      'Premium poly-viscose blend with 3% spandex for stretch',
      'Padded structured shoulders & horn-finish buttons',
      'Mid-rise trousers with hook-and-bar closure & belt loops',
      'Wrinkle-resistant for full workday comfort'
    ],
    sizes: ['8 (UK)', '10 (UK)', '12 (UK)', '14 (UK)', '16 (UK)', '18 (UK)'],
    colors: [
      { name: 'Blush Rose Pink', hex: '#f472b6' },
      { name: 'Executive Black', hex: '#18181b' },
      { name: 'Ivory Cream', hex: '#fef3c7' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: false
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'l-05',
    name: 'Karen Garden Botanical Floral Maxi Dress',
    gender: 'ladies',
    category: 'Dresses & Gowns',
    occasion: 'Sunday Best & Church',
    price: 2400,
    originalPrice: 2900,
    image: '/images/ladies/floral-maxi-dress.jpg',
    tag: 'Customer Favorite 🌸',
    rating: 5.0,
    reviewsCount: 56,
    description: 'A radiant sunshine yellow floral maxi sundress featuring a flattering crossover V-neckline, soft flutter sleeves, and a tiered flowy hem. Perfect for Sunday church service, garden brunches, and outdoor celebrations.',
    details: [
      'Lightweight breathable chiffon fabric with inner lining',
      'Smocked elastic back waist ensures flattering contour',
      'Vibrant tropical floral botanical print',
      'Ankle-length with graceful movement'
    ],
    sizes: ['S (8)', 'M (10)', 'L (12)', 'XL (14)', 'XXL (16)'],
    colors: [
      { name: 'Sunshine Yellow', hex: '#eab308' },
      { name: 'Garden Sage Green', hex: '#15803d' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'l-06',
    name: 'Murang’a Sunset Terracotta Linen Jumpsuit',
    gender: 'ladies',
    category: 'Two-Piece Sets & Jumpsuits',
    occasion: 'Everyday Casual',
    price: 2900,
    originalPrice: 3500,
    image: '/images/ladies/jumpsuit-terracotta.jpg',
    tag: 'Versatile Chic ✨',
    rating: 4.8,
    reviewsCount: 24,
    description: 'Earthy terracotta orange textured linen-cotton jumpsuit with a split Mandarin collar, cap sleeves, self-tie round buckle belt, and relaxed wide-leg trousers. Effortlessly chic for warm Kenyan afternoons.',
    details: [
      'Breathable linen-cotton blend that keeps you cool',
      'Fabric-covered buckle belt to cinch the waist',
      'Deep functional side pockets',
      'Wide palazzo leg silhouette pairs with sandals or heels'
    ],
    sizes: ['S (8)', 'M (10)', 'L (12)', 'XL (14)'],
    colors: [
      { name: 'Terracotta Rust', hex: '#c2410c' },
      { name: 'Olive Green', hex: '#4d7c0f' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'l-07',
    name: 'Westlands Velvet Bodycon Cocktail Dress',
    gender: 'ladies',
    category: 'Dresses & Gowns',
    occasion: 'Night Out',
    price: 3200,
    originalPrice: 3900,
    image: '/images/ladies/bodycon-cocktail.jpg',
    tag: 'Glamour Night 🍷',
    rating: 4.9,
    reviewsCount: 37,
    description: 'Rich wine-red plush velvet midi bodycon dress crafted with an alluring sweetheart V-neck, long sleeves, and a tailored front vent slit. Flattering ruched seams contour every curve with comfort and luxury.',
    details: [
      'High-elastic stretch royal velvet fabric',
      'Plunging shaped neckline with modesty wire',
      'Centre-front walk slit for easy movement',
      'Concealed back zip closure'
    ],
    sizes: ['S (8)', 'M (10)', 'L (12)', 'XL (14)'],
    colors: [
      { name: 'Burgundy Wine', hex: '#701a75' },
      { name: 'Midnight Onyx', hex: '#09090b' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'l-08',
    name: 'Nairobi Street High-Waist Denim & Corset Top Set',
    gender: 'ladies',
    category: 'Casual Chic & Denim',
    occasion: 'Everyday Casual',
    price: 2600,
    originalPrice: 3100,
    image: '/images/ladies/casual-denim-chic.jpg',
    tag: 'Urban Trend ⚡',
    rating: 4.7,
    reviewsCount: 45,
    description: 'Chic urban ensemble featuring high-waisted boyfriend fit blue jeans paired with an ivory structured boned corset top. Perfect for weekend vibes in Kawangware, Westlands, Kilimani, or road trips to Murang’a.',
    details: [
      'Premium heavy non-stretch washed blue denim',
      'Structured bustier corset top with adjustable straps',
      'Ankle crop hem looks great with boots or heels',
      'Can be styled separately for multi-day versatility'
    ],
    sizes: ['26 (XS)', '28 (S)', '30 (M)', '32 (L)', '34 (XL)'],
    colors: [
      { name: 'Medium Wash & Ivory', hex: '#2563eb' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'l-09',
    name: 'Kawangware Luxe Pleated Metallic Midi Skirt & Silk Blouse',
    gender: 'ladies',
    category: 'Skirts & Tops',
    occasion: 'Sunday Best & Church',
    price: 3100,
    originalPrice: 3700,
    image: '/images/ladies/pleated-skirt-blouse.jpg',
    tag: 'Timeless Classic 👑',
    rating: 4.9,
    reviewsCount: 33,
    description: 'An accordion-pleated metallic champagne gold midi skirt paired with a classic ivory silk button-down blouse. An opulent yet modest ensemble cherished for church, family events, and formal dinners.',
    details: [
      'Permanent sharp accordion knife pleats in metallic sheen',
      'Pure liquid-touch ivory silk-blend button shirt',
      'High-elastic waist band for supreme comfort',
      'Calf-length cut that flatters every silhouette'
    ],
    sizes: ['S (8)', 'M (10)', 'L (12)', 'XL (14)', 'XXL (16)'],
    colors: [
      { name: 'Champagne Gold & Cream', hex: '#d97706' },
      { name: 'Silver Shimmer & White', hex: '#94a3b8' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },

  // --- MEN'S COLLECTION (SCALABLE & GROWING SECTION) ---
  {
    id: 'm-01',
    name: 'The Savannah Heritage Men’s Floral Resort Shirt',
    gender: 'men',
    category: 'Men’s Casual Shirts',
    occasion: 'Everyday Casual',
    price: 2200,
    originalPrice: 2700,
    image: '/images/men/floral-casual-shirt.jpg',
    tag: 'Men’s New Drop 🌿',
    rating: 4.8,
    reviewsCount: 19,
    description: 'Relaxed-fit Cuban collar floral resort shirt crafted from ultra-soft breathable rayon. Features tropical botanical motifs against dark navy, made for stylish men in Nairobi, Mombasa, and beyond.',
    details: [
      '100% Breathable Rayon with silk-soft feel',
      'Camp open collar and coconut shell buttons',
      'Relaxed vacation drape fit',
      'Scalable line - more patterns arriving monthly'
    ],
    sizes: ['M (38-40)', 'L (42-44)', 'XL (46)', 'XXL (48)'],
    colors: [
      { name: 'Midnight Botanical Print', hex: '#0f172a' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'm-02',
    name: 'Nairobi Executive Smart-Casual Suit & Blazer',
    gender: 'men',
    category: 'Smart Casual Blazers & Suits',
    occasion: 'Office / Corporate',
    price: 5800,
    originalPrice: 6900,
    image: '/images/men/smart-casual-suit.jpg',
    tag: 'Scalable Line 👔',
    rating: 4.9,
    reviewsCount: 22,
    description: 'Modern slim-cut black single-breasted blazer paired with flat-front tailored trousers. Style with a crisp white shirt and clean sneakers for modern boardroom power, or dress down with a tee.',
    details: [
      'Crease-resistant wool-blend fabric with satin lapel trim',
      'Single button front and dual back vents for comfort',
      'Trousers tailored with extra hem for custom adjustments',
      'Includes jacket and matching trousers'
    ],
    sizes: ['38 Regular', '40 Regular', '42 Regular', '44 Regular', '46 Regular'],
    colors: [
      { name: 'Onyx Black', hex: '#18181b' },
      { name: 'Midnight Navy', hex: '#1e3a8a' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: false
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'm-03',
    name: 'The Gentleman’s Gold-Embroidered Pinstripe Shirt',
    gender: 'men',
    category: 'Traditional & African Wear',
    occasion: 'Events & Weddings',
    price: 2900,
    originalPrice: 3400,
    image: '/images/men/african-craft-shirt.jpg',
    tag: 'African Heritage ✨',
    rating: 5.0,
    reviewsCount: 16,
    description: 'Dignified chocolate brown pinstriped African dress shirt with intricately embroidered gold-thread geometric chest placket and cuff detailing. Ideal for traditional weddings, ruracio ceremonies, and Sunday services.',
    details: [
      'Heavyweight cotton-linen blend fabric',
      'Mandarin collar with gold thread embroidery',
      'Concealed button placket with chest patch pocket',
      'Scalable African print design available in custom sizes'
    ],
    sizes: ['M (38-40)', 'L (42-44)', 'XL (46)', 'XXL (48)'],
    colors: [
      { name: 'Mocha Pinstripe & Gold', hex: '#78350f' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  },
  {
    id: 'm-04',
    name: 'Modern Afro-Urban Embroidered Tunic Shirt',
    gender: 'men',
    category: 'Traditional & African Wear',
    occasion: 'Everyday Casual',
    price: 2600,
    originalPrice: 3100,
    image: '/images/men/embroidered-tunic.jpg',
    tag: 'Modern Cut 🌟',
    rating: 4.8,
    reviewsCount: 14,
    description: 'Contemporary Afrocentric short-sleeved tunic featuring subtle contrast tonal stitching along the neck and chest. Made for the modern African man who values culture, minimalism, and ease.',
    details: [
      '100% Breathable cotton twill',
      'Split crewneck design with neat topstitching',
      'Side slits for effortless movement',
      'Machine washable and colorfast'
    ],
    sizes: ['M (38-40)', 'L (42-44)', 'XL (46)', 'XXL (48)'],
    colors: [
      { name: 'Pitch Black', hex: '#0a0a0a' },
      { name: 'Deep Indigo', hex: '#1e3a8a' }
    ],
    inStock: true,
    stores: {
      kawangware: true,
      muranga: true
    },
    delivery: 'Same Day Nairobi & Murang’a | Next Day Countrywide'
  }
];

export const LADIES_CATEGORIES = [
  'All Ladies',
  'Dresses & Gowns',
  'Ankara & African Prints',
  'Official & Workwear',
  'Two-Piece Sets & Jumpsuits',
  'Casual Chic & Denim',
  'Skirts & Tops'
];

export const MENS_CATEGORIES = [
  'All Men’s',
  'Men’s Casual Shirts',
  'Smart Casual Blazers & Suits',
  'Traditional & African Wear'
];

export const OCCASIONS = [
  'All Occasions',
  'Office / Corporate',
  'Events & Weddings',
  'Sunday Best & Church',
  'Everyday Casual',
  'Night Out'
];
