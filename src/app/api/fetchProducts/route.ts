import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get("category");
    const productsFiltered = products.filter((product) => product.category === category);

    return NextResponse.json({ products: productsFiltered });
  } catch (error) {
    console.error("Error fetching groups:", error);
    return NextResponse.json(
      { error: "Failed to fetch groups" },
      { status: 500 }
    );
  }
}

enum ProductCategory {
  NEW_ARRIVALS = "NEW_ARRIVALS",
  TOP_SELLERS = "TOP_SELLERS",
}

const products = [
  {
    id: 1,
    image: "/images/shirt-1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
    stars: 4.5,
    category: ProductCategory.NEW_ARRIVALS,
  },
  {
    id: 2,
    image: "/images/jeans-1.png",
    title: "SKINNY FIT JEANS",
    price: 260,
    stars: 3.5,
    discountPercentage: 20,
    category: ProductCategory.NEW_ARRIVALS,
  },
  {
    id: 3,
    image: "/images/shirt-2.png",
    title: "CHECKERED SHIRT",
    price: 180,
    stars: 4.5,
    category: ProductCategory.NEW_ARRIVALS,

  },
  {
    id: 4,
    image: "/images/shirt-3.png",
    title: "SLEEVE STRIPED T-SHIRT",
    price: 160,
    stars: 4.5,
    discountPercentage: 30,
    category: ProductCategory.NEW_ARRIVALS,

  },
  {
    id: 5,
    image: "/images/shirt-4.png",
    title: "VERTICAL STRIPED SHIRT",
    price: 212,
    stars: 5.0,
    discountPercentage: 30,
    category: ProductCategory.TOP_SELLERS
  },
  {
    id: 6,
    image: "/images/shirt-5.png",
    title: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    stars: 4.0,
    category: ProductCategory.TOP_SELLERS

  },
  {
    id: 7,
    image: "/images/short.png",
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    stars: 3.0,
    category: ProductCategory.TOP_SELLERS

  },
  {
    id: 8,
    image: "/images/jeans-2.png",
    title: "FADED SKINNY JEANS",
    price: 210,
    stars: 4.5,
    category: ProductCategory.TOP_SELLERS

  },
];
