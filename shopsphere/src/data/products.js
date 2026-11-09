const products = [
  // FASHION
  {
    id: 1,
    name: "Classic Everyday Sneakers",
    price: 2499,
    category: "Fashion",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description:
      "Comfortable everyday sneakers with a stylish design, lightweight feel and durable sole.",
  },
  {
    id: 5,
    name: "Men's Casual T-Shirt",
    price: 799,
    category: "Fashion",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description:
      "A comfortable and stylish t-shirt for everyday wear.",
  },
  {
    id: 6,
    name: "Women's Handbag",
    price: 1499,
    category: "Fashion",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description:
      "A stylish and practical handbag for everyday use.",
  },
  {
    id: 7,
    name: "Slim Fit Jeans",
    price: 1299,
    category: "Fashion",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    description:
      "Comfortable and stylish slim fit jeans for everyday wear.",
  },
  {
    id: 8,
    name: "Women's Casual Dress",
    price: 1899,
    category: "Fashion",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    description:
      "A comfortable and stylish dress for everyday wear.",
  },
  {
    id: 9,
    name: "Analog Wrist Watch",
    price: 1999,
    category: "Fashion",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    description:
      "A classic analog wrist watch for everyday use.",
  },
  {
    id: 10,
    name: "Sports Running Shoes",
    price: 2799,
    category: "Fashion",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&w=800&q=80",
    description:
      "Comfortable and stylish running shoes for sports activities.",
  },
  {
    id: 11,
    name: "Cotton Hoodie",
    price: 1499,
    category: "Fashion",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    description:
      "A comfortable and stylish hoodie for everyday wear.",
  },
  {
    id: 12,
    name: "Stylish Sunglasses",
    price: 999,
    category: "Fashion",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    description:
      "A stylish pair of sunglasses for everyday use.",
  },
  {
    id: 13,
    name: "Casual Backpack",
    price: 1299,
    category: "Fashion",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description:
      "A comfortable and stylish backpack for everyday use.",
  },

  // ELECTRONICS
  {
    id: 2,
    name: "Wireless Headphones",
    price: 3299,
    category: "Electronics",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description:
      "High-quality wireless headphones for an immersive audio experience.",
  },

  {
    id: 14,
    name: "Bluetooth Portable Speaker",
    price: 1999,
    category: "Electronics",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    description:
      "A compact and powerful portable speaker for music on the go.",
  },
  {
    id: 15,
    name: "Smart Watch",
    price: 2499,
    category: "Electronics",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description:
      "A sleek and feature-rich smartwatch for everyday use.",
  },
  {
    id: 16,
    name: "Wireless Keyboard",
    price: 1499,
    category: "Electronics",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    description:
      "A comfortable and responsive wireless keyboard for everyday use.",
  },
  {
    id: 17,
    name: "Gaming Mouse",
    price: 999,
    category: "Electronics",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    description:
      "A high-performance gaming mouse for an immersive gaming experience.",
  },
  {
    id: 18,
    name: "Digital Camera",
    price: 24999,
    category: "Electronics",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    description:
      "A high-quality digital camera for capturing stunning photos.",
  },
  {
    id: 19,
    name: "Smartphone",
    price: 15999,
    category: "Electronics",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    description:
      "A powerful and feature-rich smartphone for everyday use.",
  },
  {
    id: 20,
    name: "Laptop",
    price: 54999,
    category: "Electronics",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    description:
      "A high-performance laptop for work and entertainment.",
  },
  {
    id: 21,
    name: "Tablet",
    price: 18999,
    category: "Electronics",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    description:
      "A versatile tablet for work and entertainment.",
  },
  {
    id: 22,
    name: "Wireless Earbuds",
    price: 1799,
    category: "Electronics",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
    description:
      "High-quality wireless earbuds for an immersive audio experience.",
  },

  // HOME & LIVING
  {
    id: 3,
    name: "Minimal Table Lamp",
    price: 1499,
    category: "Home & Living",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description:
      "A sleek and modern table lamp to brighten up your living space.",
  },

  {
    id: 23,
    name: "Decorative Flower Vase",
    price: 699,
    category: "Home & Living",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80",
    description:
      "A stylish flower vase to add a touch of elegance to your home decor.",
  },
  {
    id: 24,
    name: "Modern Wall Clock",
    price: 899,
    category: "Home & Living",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
    description:
      "A contemporary wall clock to enhance the aesthetics of your living space.",
  },
  {
    id: 25,
    name: "Soft Cushion Set",
    price: 799,
    category: "Home & Living",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    description:
      "A set of soft and comfortable cushions to add coziness to your home.",
  },
  {
    id: 26,
    name: "Modern Sofa",
    price: 24999,
    category: "Home & Living",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    description:
      "A stylish and comfortable sofa to elevate the look of your living room.",
  },
  {
    id: 27,
    name: "Wooden Dining Table",
    price: 12999,
    category: "Home & Living",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    description:
      "A sturdy and elegant wooden dining table for your home.",
  },
  {
    id: 28,
    name: "Ceramic Coffee Mug",
    price: 399,
    category: "Home & Living",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    description:
      "A beautiful ceramic coffee mug for your morning brew.",
  },
  {
    id: 29,
    name: "Indoor Green Plant",
    price: 599,
    category: "Home & Living",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    description:
      "A vibrant indoor plant to bring life to your living space.", 
  },
  {
    id: 30,
    name: "Decorative Table Mirror",
    price: 1199,
    category: "Home & Living",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 31,
    name: "Modern Floor Lamp",
    price: 2999,
    category: "Home & Living",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description:
      "A sleek and modern floor lamp to provide ambient lighting for your home.",
  },

  // BEAUTY
  {
    id: 4,
    name: "Daily Glow Skincare Set",
    price: 999,
    category: "Beauty",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    description:
      "A complete skincare set to keep your skin healthy and glowing.",
  },

  {
    id: 32,
    name: "Hydrating Face Moisturizer",
    price: 499,
    category: "Beauty",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    description:
      "A lightweight and hydrating face moisturizer for daily use.",
  },
  {
    id: 33,
    name: "Vitamin C Face Serum",
    price: 699,
    category: "Beauty",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    description:
      "A potent vitamin C serum to brighten and rejuvenate your skin.",
  },
  {
    id: 34,
    name: "Gentle Face Cleanser",
    price: 349,
    category: "Beauty",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
    description:
      "A gentle face cleanser to remove impurities and keep your skin fresh.",
  },
  {
    id: 35,
    name: "Daily Sunscreen SPF 50",
    price: 599,
    category: "Beauty",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    description:
      "A broad-spectrum sunscreen to protect your skin from harmful UV rays.",
  },
  {
    id: 36,
    name: "Rose Face Toner",
    price: 399,
    category: "Beauty",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    description:
      "A soothing face toner to refresh and balance your skin.",
  },
  {
    id: 37,
    name: "Lipstick Collection",
    price: 899,
    category: "Beauty",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    description:
      "A vibrant collection of lipsticks to suit every occasion.",
  },
  {
    id: 38,
    name: "Makeup Brush Set",
    price: 799,
    category: "Beauty",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    description:
      "A comprehensive set of makeup brushes for all your beauty needs.",
  },
  {
    id: 39,
    name: "Beauty Face Mask",
    price: 299,
    category: "Beauty",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    description:
      "A nourishing face mask to deeply hydrate and revitalize your skin.",
  },
  {
    id: 40,
    name: "Perfume for Women",
    price: 1499,
    category: "Beauty",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    description:
      "A luxurious perfume for women to captivate and enchant.",
  },
];

export default products;
