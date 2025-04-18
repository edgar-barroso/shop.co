"use client";
import Image from "next/image";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  stars: number;
  discountPercentage: number;
  description: string;
}

export default function ProductCard({
  image,
  title,
  price,
  stars,
  discountPercentage,
  description,
}: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0].name);
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0].size);
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="flex flex-col items-start justify-start py-5 mx-[10%]">
      <p className="text-sm text-foreground/60 py-5">Home / {title}</p>
      <div className="flex items-start justify-center gap-8">
        <Image src={image} alt={title} width={500} height={500} />
        <div className="flex flex-col items-start gap-2 ">
          <h1 className="font-integralCF text-4xl font-bold">{title}</h1>
          <div className="flex items-center justify-start w-full">
            <div className="flex items-center relative h-4 w-[120px]">
              <div
                className={`absolute z-20 right-0 bottom-0  h-full gap-1 w-full bg-background`}
                style={{ width: `${100 - (stars / 5) * 100}%` }}
              />
              <div
                className={`absolute z-10 left-0 bottom-0 flex items-center justify-between h-full w-full`}
              >
                <Image
                  className="w-auto h-full"
                  src="/svg/star-2.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
                <Image
                  className="w-auto h-full"
                  src="/svg/star-2.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
                <Image
                  className="w-auto h-full"
                  src="/svg/star-2.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
                <Image
                  className="w-auto h-full"
                  src="/svg/star-2.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
                <Image
                  className="w-auto h-full"
                  src="/svg/star-2.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="text-sm">{stars}/5</p>
          </div>
          {!discountPercentage && (
            <p className="text-2xl font-bold">${price}</p>
          )}
          {discountPercentage && (
            <div className="flex items-center gap-2 text-md">
              <p className="text-2xl font-bold">
                ${(price * (100 - discountPercentage)) / 100}
              </p>
              <p className="text-foreground/50 text-xl font-bold line-through">
                ${price}
              </p>
              <p className="text-[10px] bg-red-500/30 text-red-500 px-2 py-1 rounded-full">
                -{discountPercentage}%
              </p>
            </div>
          )}
          <p className="text-sm text-foreground/60 ">{description}</p>
          <div className="flex flex-col gap-2 border-t border-foreground/20 pt-2 mt-2 w-full">
            <p>Select Color</p>
            <div className="flex gap-2">
              {colors.map((color) => (
                <div
                  key={color.id}
                  style={{ backgroundColor: color.hex }}
                  className={` text-xl w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedColor === color.name
                      ? "border-2 border-foreground/50"
                      : ""
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                >
                  {selectedColor === color.name && (
                    <BiCheck className="text-white" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-foreground/20 pt-2 mt-2 w-full">
            <p>Choose Size</p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <div
                  key={size.id}
                  className={`cursor-pointer text-xl bg-foreground/10 rounded-full flex items-center justify-center px-4 py-2 ${
                    selectedSize === size.size
                      ? "bg-foreground/100 text-background"
                      : ""
                  }`}
                  onClick={() => setSelectedSize(size.size)}
                >
                  <p className="text-sm">{size.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 border-t border-foreground/20 pt-2 mt-2 w-full">
            <div className="flex p-3 bg-foreground/10 rounded-full gap-5 items-center justify-between w-52 text-foreground">
              <CgMathMinus
                size={20}
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              />
              {quantity}
              <CgMathPlus
                size={20}
                onClick={() => setQuantity(quantity + 1)}
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              />
            </div>
            <button className="bg-foreground text-background rounded-full px-4 py-2 w-full cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const colors = [
  {
    id: 1,
    name: "Red",
    hex: "#FF0000",
  },
  {
    id: 2,
    name: "Blue",
    hex: "#0000FF",
  },
  {
    id: 3,
    name: "Green",
    hex: "#00FF00",
  },
];

const sizes = [
  {
    id: 1,
    name: "Small",
    size: "S",
  },
  {
    id: 2,
    name: "Medium",
    size: "M",
  },
  {
    id: 3,
    name: "Large",
    size: "L",
  },
];

const reviews = [
  {
    id: 1,
    name: "John Doe",
    stars: 5,
    createdAt: "2021-01-01",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    id: 2,
    name: "John Doe",
    stars: 5,
    createdAt: "2021-01-01",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    id: 3,
    name: "John Doe",
    stars: 5,
    createdAt: "2021-01-01",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    id: 4,
    name: "John Doe",
    stars: 5,
    createdAt: "2021-01-01",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    id: 5,
    name: "John Doe",
    stars: 5,
    createdAt: "2021-01-01",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    id: 6,
    name: "John Doe",
    stars: 5,
    createdAt: "2021-01-01",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
];
