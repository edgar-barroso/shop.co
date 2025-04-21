export enum ProductCategory {
  NEW_ARRIVALS = "NEW_ARRIVALS",
  TOP_SELLERS = "TOP_SELLERS",
  SUMMER_COLLECTION = "SUMMER_COLLECTION",
  WINTER_COLLECTION = "WINTER_COLLECTION",
  ACCESSORIES = "ACCESSORIES",
}
const products = [
  {
    id: 1,
    image: "/images/shirt-1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
    stars: 4.5,
    reviews: 128,
    category: ProductCategory.NEW_ARRIVALS,
    description:
      "Modern t-shirt with distinctive tape details for a contemporary look. Made from premium cotton for all-day comfort.",
    variants: [
      {
        id: 1,
        name: "Red",
        hex: "#FF0001",
        images: [
          "/images/shirt-1.png",
          "/images/shirt-1.png",
          "/images/shirt-1.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 15 },
          { id: 2, name: "Medium", size: "M", stock: 20 },
          { id: 3, name: "Large", size: "L", stock: 18 },
          { id: 4, name: "X-Large", size: "XL", stock: 10 },
        ],
      },
      {
        id: 2,
        name: "Navy Blue",
        hex: "#000080",
        images: ["/images/shirt-1.png", "/images/shirt-1.png"],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 8 },
          { id: 2, name: "Medium", size: "M", stock: 12 },
          { id: 3, name: "Large", size: "L", stock: 15 },
        ],
      },
      {
        id: 3,
        name: "Black",
        hex: "#000000",
        images: ["/images/shirt-1.png", "/images/shirt-1.png"],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 5 },
          { id: 2, name: "Medium", size: "M", stock: 10 },
          { id: 4, name: "X-Large", size: "XL", stock: 7 },
        ],
      },
    ],
    materials: "100% Organic Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
    shippingInfo: "Usually ships in 1-2 business days",
  },
  {
    id: 2,
    image: "/images/jeans-1.png",
    title: "SKINNY FIT JEANS",
    price: 260,
    stars: 3.5,
    reviews: 86,
    discountPercentage: 20,
    category: ProductCategory.NEW_ARRIVALS,
    description:
      "Classic skinny fit jeans with stretch technology for comfort and mobility. Perfect for casual and dressy occasions.",
    variants: [
      {
        id: 1,
        name: "Dark Wash",
        hex: "#191970",
        images: [
          "/images/jeans-1.png",
          "/images/jeans-1.png",
          "/images/jeans-1.png",
        ],
        sizes: [
          { id: 1, name: "28/30", size: "28", stock: 6 },
          { id: 2, name: "30/30", size: "30", stock: 10 },
          { id: 3, name: "32/30", size: "32", stock: 8 },
          { id: 4, name: "34/30", size: "34", stock: 5 },
        ],
      },
      {
        id: 2,
        name: "Light Wash",
        hex: "#5F9EA0",
        images: ["/images/jeans-1.png", "/images/jeans-1.png"],
        sizes: [
          { id: 1, name: "28/30", size: "28", stock: 3 },
          { id: 2, name: "30/30", size: "30", stock: 7 },
          { id: 3, name: "32/30", size: "32", stock: 4 },
        ],
      },
      {
        id: 3,
        name: "Black",
        hex: "#000000",
        images: ["/images/jeans-1.png", "/images/jeans-1.png"],
        sizes: [
          { id: 2, name: "30/30", size: "30", stock: 9 },
          { id: 3, name: "32/30", size: "32", stock: 6 },
          { id: 4, name: "34/30", size: "34", stock: 4 },
        ],
      },
    ],
    materials: "98% Cotton, 2% Elastane",
    careInstructions: "Wash inside out in cold water, hang to dry",
    shippingInfo: "Usually ships in 1-3 business days",
  },
  {
    id: 3,
    image: "/images/shirt-2.png",
    title: "CHECKERED SHIRT",
    price: 180,
    stars: 4.5,
    reviews: 94,
    category: ProductCategory.NEW_ARRIVALS,
    description:
      "Classic checkered button-down shirt with a modern fit. Perfect for layering or wearing on its own.",
    variants: [
      {
        id: 1,
        name: "Red/Black",
        hex: "#FF0000",
        images: ["/images/shirt-2.png", "/images/shirt-2.png"],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 12 },
          { id: 2, name: "Medium", size: "M", stock: 15 },
          { id: 3, name: "Large", size: "L", stock: 10 },
        ],
      },
      {
        id: 2,
        name: "Blue/White",
        hex: "#1E90FF",
        images: [
          "/images/shirt-2.png",
          "/images/shirt-2.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 8 },
          { id: 2, name: "Medium", size: "M", stock: 11 },
          { id: 3, name: "Large", size: "L", stock: 9 },
          { id: 4, name: "X-Large", size: "XL", stock: 5 },
        ],
      },
    ],
    materials: "100% Cotton Flannel",
    careInstructions: "Machine wash warm, tumble dry medium",
    shippingInfo: "In stock, ships next business day",
  },
  {
    id: 4,
    image: "/images/shirt-3.png",
    title: "SLEEVE STRIPED T-SHIRT",
    price: 160,
    stars: 4.5,
    reviews: 112,
    discountPercentage: 30,
    category: ProductCategory.NEW_ARRIVALS,
    description:
      "Casual striped t-shirt with contrast sleeve detailing. Soft fabric with a comfortable relaxed fit.",
    variants: [
      {
        id: 1,
        name: "Navy/White",
        hex: "#000080",
        images: [
          "/images/shirt-3.png",
          "/images/shirt-3.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 7 },
          { id: 2, name: "Medium", size: "M", stock: 10 },
          { id: 3, name: "Large", size: "L", stock: 8 },
        ],
      },
      {
        id: 2,
        name: "Black/White",
        hex: "#000000",
        images: [
          "/images/shirt-3.png",
          "/images/shirt-3.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 5 },
          { id: 2, name: "Medium", size: "M", stock: 12 },
          { id: 3, name: "Large", size: "L", stock: 15 },
          { id: 4, name: "X-Large", size: "XL", stock: 6 },
        ],
      },
      {
        id: 3,
        name: "Red/White",
        hex: "#FF0000",
        images: ["/images/shirt-3.png", "/images/shirt-3.png"],
        sizes: [
          { id: 2, name: "Medium", size: "M", stock: 9 },
          { id: 3, name: "Large", size: "L", stock: 7 },
        ],
      },
    ],
    materials: "100% Combed Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
    shippingInfo: "Usually ships in 1-2 business days",
  },
  {
    id: 5,
    image: "/images/shirt-4.png",
    title: "VERTICAL STRIPED SHIRT",
    price: 212,
    stars: 5.0,
    reviews: 215,
    discountPercentage: 30,
    category: ProductCategory.TOP_SELLERS,
    description:
      "Slim-fit vertical striped dress shirt with French cuffs. Perfect for business casual or formal occasions.",
    variants: [
      {
        id: 1,
        name: "Blue/White",
        hex: "#4169E1",
        images: [
          "/images/shirt-4.png",
          "/images/shirt-4.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 4 },
          { id: 2, name: "Medium", size: "M", stock: 8 },
          { id: 3, name: "Large", size: "L", stock: 6 },
          { id: 4, name: "X-Large", size: "XL", stock: 3 },
        ],
      },
      {
        id: 2,
        name: "Pink/White",
        hex: "#FFC0CB",
        images: [
          "/images/shirt-4.png",
          "/images/shirt-4.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 2 },
          { id: 2, name: "Medium", size: "M", stock: 5 },
          { id: 3, name: "Large", size: "L", stock: 4 },
        ],
      },
      {
        id: 3,
        name: "Lavender/White",
        hex: "#E6E6FA",
        images: [
          "/images/shirt-4.png",
          "/images/shirt-4.png",
        ],
        sizes: [
          { id: 2, name: "Medium", size: "M", stock: 7 },
          { id: 3, name: "Large", size: "L", stock: 5 },
        ],
      },
    ],
    materials: "100% Egyptian Cotton",
    careInstructions: "Dry clean recommended",
    shippingInfo: "In stock, ships next business day",
  },
  {
    id: 6,
    image: "/images/shirt-5.png",
    title: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    stars: 4.0,
    reviews: 178,
    category: ProductCategory.TOP_SELLERS,
    description:
      "Graphic tee with inspirational courage design. Soft vintage wash for a broken-in feel.",
    variants: [
      {
        id: 1,
        name: "Black",
        hex: "#000000",
        images: [
          "/images/shirt-5.png",
          "/images/shirt-5.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 10 },
          { id: 2, name: "Medium", size: "M", stock: 15 },
          { id: 3, name: "Large", size: "L", stock: 12 },
          { id: 4, name: "X-Large", size: "XL", stock: 8 },
        ],
      },
      {
        id: 2,
        name: "White",
        hex: "#FFFFFF",
        images: [
          "/images/shirt-5.png",
          "/images/shirt-5.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 8 },
          { id: 2, name: "Medium", size: "M", stock: 10 },
          { id: 3, name: "Large", size: "L", stock: 9 },
        ],
      },
      {
        id: 3,
        name: "Heather Grey",
        hex: "#808080",
        images: [
          "/images/shirt-5.png",
          "/images/shirt-5.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 6 },
          { id: 2, name: "Medium", size: "M", stock: 8 },
          { id: 3, name: "Large", size: "L", stock: 7 },
        ],
      },
    ],
    materials: "100% Ring-Spun Cotton",
    careInstructions: "Machine wash cold, inside out, tumble dry low",
    shippingInfo: "Usually ships in 1-2 business days",
  },
  {
    id: 7,
    image: "/images/short.png",
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    stars: 3.0,
    reviews: 64,
    category: ProductCategory.TOP_SELLERS,
    description:
      "Comfortable loose-fit Bermuda shorts with multiple pockets. Ideal for summer activities and casual wear.",
    variants: [
      {
        id: 1,
        name: "Khaki",
        hex: "#F0E68C",
        images: [
          "/images/short.png",
          "/images/short.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 5 },
          { id: 2, name: "Medium", size: "M", stock: 8 },
          { id: 3, name: "Large", size: "L", stock: 6 },
        ],
      },
      {
        id: 2,
        name: "Navy Blue",
        hex: "#000080",
        images: ["/images/short.png", "/images/short.png"],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 3 },
          { id: 2, name: "Medium", size: "M", stock: 7 },
          { id: 3, name: "Large", size: "L", stock: 5 },
          { id: 4, name: "X-Large", size: "XL", stock: 2 },
        ],
      },
      {
        id: 3,
        name: "Olive Green",
        hex: "#556B2F",
        images: [
          "/images/short.png",
          "/images/short.png",
        ],
        sizes: [
          { id: 2, name: "Medium", size: "M", stock: 6 },
          { id: 3, name: "Large", size: "L", stock: 4 },
        ],
      },
    ],
    materials: "100% Cotton Twill",
    careInstructions: "Machine wash cold, tumble dry low",
    shippingInfo: "Usually ships in 1-3 business days",
  },
  {
    id: 8,
    image: "/images/jeans-2.png",
    title: "FADED SKINNY JEANS",
    price: 210,
    stars: 4.5,
    reviews: 142,
    category: ProductCategory.TOP_SELLERS,
    description:
      "Distressed skinny jeans with authentic fade patterns. Stretch denim for comfort and mobility.",
    variants: [
      {
        id: 1,
        name: "Medium Wash",
        hex: "#4682B4",
        images: [
          "/images/jeans-2.png",
          "/images/jeans-2.png",
        ],
        sizes: [
          { id: 1, name: "28/30", size: "28", stock: 4 },
          { id: 2, name: "30/30", size: "30", stock: 7 },
          { id: 3, name: "32/30", size: "32", stock: 5 },
          { id: 4, name: "34/30", size: "34", stock: 3 },
        ],
      },
      {
        id: 2,
        name: "Light Wash",
        hex: "#87CEFA",
        images: [
          "/images/jeans-2.png",
          "/images/jeans-2.png",
        ],
        sizes: [
          { id: 1, name: "28/30", size: "28", stock: 2 },
          { id: 2, name: "30/30", size: "30", stock: 5 },
          { id: 3, name: "32/30", size: "32", stock: 4 },
        ],
      },
    ],
    materials: "98% Cotton, 2% Elastane",
    careInstructions: "Wash inside out in cold water, hang to dry",
    shippingInfo: "Usually ships in 2-4 business days",
  },
  {
    id: 9,
    image: "/images/hoodie.png",
    title: "OVERSIZED HOODIE",
    price: 150,
    stars: 4.8,
    reviews: 231,
    category: ProductCategory.WINTER_COLLECTION,
    description:
      "Cozy oversized hoodie with kangaroo pocket and adjustable drawstring hood. Perfect for chilly days.",
    variants: [
      {
        id: 1,
        name: "Charcoal Grey",
        hex: "#36454F",
        images: [
          "/images/hoodie.png",
          "/images/hoodie.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 8 },
          { id: 2, name: "Medium", size: "M", stock: 12 },
          { id: 3, name: "Large", size: "L", stock: 10 },
          { id: 4, name: "X-Large", size: "XL", stock: 7 },
        ],
      },
      {
        id: 2,
        name: "Forest Green",
        hex: "#228B22",
        images: [
          "/images/hoodie.png",
          "/images/hoodie.png",
        ],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 5 },
          { id: 2, name: "Medium", size: "M", stock: 9 },
          { id: 3, name: "Large", size: "L", stock: 7 },
        ],
      },
    ],
    materials: "80% Cotton, 20% Polyester",
    careInstructions: "Machine wash cold, tumble dry low",
    shippingInfo: "In stock, ships next business day",
  },
  {
    id: 10,
    image: "/images/swimwear.png",
    title: "SWIM SHORTS",
    price: 75,
    stars: 4.2,
    reviews: 97,
    category: ProductCategory.SUMMER_COLLECTION,
    description:
      "Quick-dry swim shorts with mesh lining and secure zip pocket. Perfect for beach or pool.",
    variants: [
      {
        id: 1,
        name: "Navy Blue",
        hex: "#000080",
        images: ["/images/swimwear.png", "/images/swimwear.png"],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 6 },
          { id: 2, name: "Medium", size: "M", stock: 10 },
          { id: 3, name: "Large", size: "L", stock: 8 },
        ],
      },
      {
        id: 2,
        name: "Coral",
        hex: "#FF7F50",
        images: ["/images/swimwear.png", "/images/swimwear.png"],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 4 },
          { id: 2, name: "Medium", size: "M", stock: 7 },
          { id: 3, name: "Large", size: "L", stock: 5 },
        ],
      },
      {
        id: 3,
        name: "Black",
        hex: "#000000",
        images: ["/images/swimwear.png", "/images/swimwear.png"],
        sizes: [
          { id: 1, name: "Small", size: "S", stock: 3 },
          { id: 2, name: "Medium", size: "M", stock: 8 },
          { id: 3, name: "Large", size: "L", stock: 6 },
          { id: 4, name: "X-Large", size: "XL", stock: 2 },
        ],
      },
    ],
    materials: "100% Quick-Dry Polyester",
    careInstructions: "Machine wash cold, line dry",
    shippingInfo: "Usually ships in 1-2 business days",
  },
  {
    id: 11,
    image: "/images/watch.png",
    title: "CLASSIC LEATHER WATCH",
    price: 299,
    stars: 4.9,
    reviews: 312,
    category: ProductCategory.ACCESSORIES,
    description:
      "Elegant classic watch with genuine leather strap and stainless steel case. Water resistant to 50m.",
    variants: [
      {
        id: 1,
        name: "Brown Leather",
        hex: "#8B4513",
        images: [
          "/images/watch.png",
          "/images/watch.png",
        ],
        sizes: [{ id: 1, name: "Standard", size: "One Size", stock: 15 }],
      },
      {
        id: 2,
        name: "Black Leather",
        hex: "#000000",
        images: [
          "/images/watch.png",
          "/images/watch.png",
        ],
        sizes: [{ id: 1, name: "Standard", size: "One Size", stock: 12 }],
      },
    ],
    materials: "Genuine Leather, Stainless Steel",
    careInstructions: "Avoid contact with water, clean with dry cloth",
    shippingInfo: "In stock, ships next business day",
  },
  {
    id: 12,
    image: "/images/sneakers.png",
    title: "RETRO SNEAKERS",
    price: 220,
    stars: 4.7,
    reviews: 189,
    category: ProductCategory.TOP_SELLERS,
    description:
      "Vintage-inspired sneakers with cushioned insole and rubber outsole. Comfortable for all-day wear.",
    variants: [
      {
        id: 1,
        name: "White/Red",
        hex: "#FFFFFF",
        images: [
          "/images/sneakers.png",
          "/images/sneakers.png",
        ],
        sizes: [
          { id: 1, name: "US 7", size: "7", stock: 4 },
          { id: 2, name: "US 8", size: "8", stock: 6 },
          { id: 3, name: "US 9", size: "9", stock: 5 },
          { id: 4, name: "US 10", size: "10", stock: 3 },
        ],
      },
      {
        id: 2,
        name: "Black/White",
        hex: "#000000",
        images: [
          "/images/sneakers.png",
          "/images/sneakers.png",
        ],
        sizes: [
          { id: 1, name: "US 7", size: "7", stock: 3 },
          { id: 2, name: "US 8", size: "8", stock: 5 },
          { id: 3, name: "US 9", size: "9", stock: 7 },
          { id: 4, name: "US 10", size: "10", stock: 4 },
          { id: 5, name: "US 11", size: "11", stock: 2 },
        ],
      },
    ],
    materials: "Leather Upper, Rubber Sole",
    careInstructions: "Wipe clean with damp cloth",
    shippingInfo: "Usually ships in 2-5 business days",
  },
];
export default class InMemoryDataBase {
  static products = products;
  static getProducts(category?: ProductCategory) {
    if (!category) {
      return this.products;
    }
    return this.products.filter((product) => product.category === category);
  }
  static getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
