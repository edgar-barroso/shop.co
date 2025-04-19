import ProductCard from "@/app/_components/product/ProductCard";
import ProductDetails from "@/app/_components/product/ProductDetails";
import RelatedProducts from "@/app/_components/product/RelatedProducts";

interface ProductParams {
  params: Promise<{ id: string }>;
}

export default async function Product({ params }: ProductParams) {
  const id = (await params).id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/getProduct/${id}`,
    {
      cache: "no-store",
    }
  );

  const { product } = await response.json();

  return (
    <main className="flex flex-col items-center justify-center ">
      <ProductCard {...product} />
      <ProductDetails />
      <RelatedProducts/>
    </main>
  );
}

