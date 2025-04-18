import ProductCard from "@/app/_components/product/ProductCard";

interface ProductPageProps {
  params: { id: string };
}

export default async function Product({ params }: ProductPageProps) {
  const { id } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/getProduct/${id}`,
    {
      cache: "no-store",
    }
  );

  const { product } = await response.json();

  return (
    <main className="flex flex-col items-center justify-center">
      <ProductCard {...product} />
    </main>
  );
}
