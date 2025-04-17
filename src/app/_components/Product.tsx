import Image from "next/image";

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
      <Image src={image} alt={title} width={500} height={500} />
      <h2 className="text-sm font-bold">{title}</h2>
      <div className="flex items-center justify-start w-full">

      <div className="flex items-center relative h-2 w-[60px]">
      <div className={`absolute z-20 right-0 bottom-0  h-full gap-1 w-full bg-background`} style={{width: `${100-(stars/5*100)}%`}}/>
        <div className={`absolute z-10 left-0 bottom-0 flex items-center justify-between h-full w-full`} >
        <Image src="/svg/star-2.svg" alt="star" width={10} height={10}/>
        <Image src="/svg/star-2.svg" alt="star" width={10} height={10}/>
        <Image src="/svg/star-2.svg" alt="star" width={10} height={10}/>
        <Image src="/svg/star-2.svg" alt="star" width={10} height={10}/>
        <Image src="/svg/star-2.svg" alt="star" width={10} height={10}/>
        </div>
      </div>
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