import ProductCard from "@/app/_components/product/ProductCard";
import ProductDetails from "@/app/_components/product/ProductDetails";
import RelatedProducts from "@/app/_components/product/RelatedProducts";
import InMemoryDataBase from "@/app/api/inMemoryDataBase";

interface ProductParams {
  params: Promise<{ id: string }>;
}

export default async function Product({ params }: ProductParams) {
  const id = (await params).id;
  const product = InMemoryDataBase.getProduct(Number(id));
  if(!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center ">
      <ProductCard {...product} />
      <ProductDetails />
      <RelatedProducts/>
    </main>
  );
}

