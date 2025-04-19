import Product from "../Product";

export default function RelatedProducts() {
  return (
    <div className="flex flex-col items-center justify-center px-[5%] py-10 gap-4">
      <h2
        className="font-integralCF text-4xl font-bold uppercase max-md:text-2xl"
      >
       You might also like
      </h2>
      <div className="flex gap-4 max-md:flex-col">
        {relatedProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
const relatedProducts = [
    {
        id: 5,
        image: "/images/shirt-1.png",
        title: "COURAGE GRAPHIC T-SHIRT",
        price: 145,
        stars: 4.0,
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        discountPercentage: 20,
      },
    {
        id: 6,
        image: "/images/shirt-5.png",
        title: "COURAGE GRAPHIC T-SHIRT",
        price: 145,
        stars: 4.0,
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      },
      {
        id: 7,
        image: "/images/short.png",
        title: "LOOSE FIT BERMUDA SHORTS",
        price: 80,
        stars: 3.0,
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      },
      {
        id: 8,
        image: "/images/jeans-2.png",
        title: "FADED SKINNY JEANS",
        price: 210,
        stars: 4.5,
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      },
  
];
