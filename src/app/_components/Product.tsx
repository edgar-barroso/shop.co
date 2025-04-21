import Image from "next/image";
import { Stars } from "./Stars";

interface ProductProps {
    image: string;
    title: string;
    price: number;
    stars: number;
    discountPercentage?: number;
}

export default function Product({ image, title, price, stars ,discountPercentage}: ProductProps) {

  return (
    <div className="flex flex-col items-start justify-center gap-1.5">
      <Image src={image} alt={title} width={600} height={600} />
      <h2 className="text-sm font-bold">{title}</h2>
      <div className="flex items-center justify-start w-full">

      <Stars stars={stars} size={15} />
      <p className="text-sm">
      {stars}/5
      </p>
      </div>
      {!discountPercentage && (
        <p className="text-md font-bold">${price}</p>
      )}
      {discountPercentage && (
        <div className="flex items-center gap-2 text-md">
        <p className=" font-bold">${(price * (100 - discountPercentage)/100)}</p>
        <p className="text-foreground/50 font-bold line-through">${price}</p>
        <p className="text-[10px] bg-red-500/30 text-red-500 px-2 py-1 rounded-full">-{discountPercentage}%</p>
        </div>
      )}
      
    </div>
  );
}