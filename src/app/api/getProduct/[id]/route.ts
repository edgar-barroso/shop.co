import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import InMemoryDataBase from "../../inMemoryDataBase";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id; 

    const product = InMemoryDataBase.getProduct(parseInt(id));

    return NextResponse.json({ product });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}