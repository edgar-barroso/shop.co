"use client";
import Image from "next/image";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { Stars } from "../Stars";
import { useCart } from "@/app/contexts/CartContext";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  stars: number;
  reviews?: number;
  discountPercentage?: number;
  description: string;
  variants: Variant[];
  materials?: string;
  careInstructions?: string;
  shippingInfo?: string;
}

interface Variant {
  id: number;
  name: string;
  hex: string;
  images: string[];
  sizes: {
    id: number;
    name: string;
    size: string;
    stock: number;
  }[];
}

export default function ProductCard({
  image,
  title,
  price,
  stars,
  reviews,
  discountPercentage,
  description,
  variants,
  materials,
  careInstructions,
  shippingInfo,
}: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(variants[0]);
  const [selectedSize, setSelectedSize] = useState(selectedVariant.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImage, setCurrentImage] = useState(image);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const { addItem} = useCart();


  const handleVariantChange = (variant: Variant) => {
    setSelectedVariant(variant);
    setSelectedSize(variant.sizes[0]);
    setCurrentImage(variant.images[0]);
  };

  return (
    <div className="flex flex-col items-start justify-start py-5 mx-[5%]">
      <p className="text-sm text-foreground/60 py-5">Home / {title}</p>
      <div className="flex items-start justify-center gap-8 max-md:flex-col">
        <div className="flex flex-col gap-4">
          <div className="relative w-[500px] h-[500px] max-md:w-full max-md:h-auto">
            <Image 
              src={currentImage} 
              alt={title} 
              width={500} 
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex gap-2">
            {selectedVariant.images.map((img, index) => (
              <div 
                key={index} 
                className="relative w-16 h-16 cursor-pointer border hover:border-foreground/50"
                onClick={() => setCurrentImage(img)}
              >
                <Image
                  src={img}
                  alt={`${title} variant ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-start gap-2 max-w-lg">
          <h1 className="font-integralCF text-4xl font-bold">{title}</h1>
          
          <div className="flex items-center gap-2">
            <Stars stars={stars} />
            <p className="text-sm">{stars}/5 ({reviews} reviews)</p>
          </div>
          
          {!discountPercentage ? (
            <p className="text-2xl font-bold">${price}</p>
          ) : (
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
          
          <p className="text-sm text-foreground/60">{description}</p>
          
          {materials && (
            <p className="text-sm">
              <span className="font-medium">Materials:</span> {materials}
            </p>
          )}
          
          <div className="flex flex-col gap-2 border-t border-foreground/20 pt-2 mt-2 w-full">
            <p>Select Color</p>
            <div className="flex gap-2">
              {variants.map((variant) => (
                <div
                  key={variant.id}
                  style={{ backgroundColor: variant.hex }}
                  className={`text-xl w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                    selectedVariant.id === variant.id
                      ? "ring-2 ring-offset-2 ring-foreground/50"
                      : ""
                  }`}
                  onClick={() => handleVariantChange(variant)}
                  title={variant.name}
                >
                  {selectedVariant.id === variant.id && (
                    <BiCheck className="text-white" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-2 border-t border-foreground/20 pt-2 mt-2 w-full">
            <div className="flex justify-between items-center">
              <p>Choose Size</p>
              {selectedSize.stock < 10 && (
                <p className="text-xs text-foreground/60">
                  Only {selectedSize.stock} left in stock!
                </p>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {selectedVariant.sizes.map((size) => (
                <div
                  key={size.id}
                  className={`cursor-pointer text-xl rounded-full flex items-center justify-center px-4 py-2 ${
                    selectedSize.id === size.id
                      ? "bg-foreground text-background"
                      : size.stock > 0
                      ? "bg-foreground/10 hover:bg-foreground/20"
                      : "bg-foreground/5 text-foreground/30 cursor-not-allowed"
                  }`}
                  onClick={() => size.stock > 0 && setSelectedSize(size)}
                >
                  <p className="text-sm">{size.size}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 border-t border-foreground/20 pt-2 mt-2 w-full">
            <div className="flex p-3 bg-foreground/10 rounded-full gap-5 items-center justify-between w-52 text-foreground">
              <CgMathMinus
                size={20}
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className={`cursor-pointer hover:scale-110 transition-all duration-300 ${
                  quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              />
              {quantity}
              <CgMathPlus
                size={20}
                onClick={() => quantity < selectedSize.stock && setQuantity(quantity + 1)}
                className={`cursor-pointer hover:scale-110 transition-all duration-300 ${
                  quantity >= selectedSize.stock ? "opacity-50 cursor-not-allowed" : ""
                }`}
              />
            </div>
            <button 
              className="bg-foreground text-background rounded-full px-4 py-2 w-full cursor-pointer hover:bg-foreground/90 transition-colors"
              disabled={selectedSize.stock === 0}
              onClick={() => addItem({
                id: selectedVariant.id,
                variantId: selectedSize.id,
                quantity: quantity,
              })}
            >
              {selectedSize.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
          
          <div className="w-full border-t border-foreground/20 pt-2 mt-2">
            <button 
              onClick={() => setShowMoreDetails(!showMoreDetails)}
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              {showMoreDetails ? "Hide details" : "Show more details"}
            </button>
            
            {showMoreDetails && (
              <div className="mt-2 text-sm space-y-2">
                {careInstructions && (
                  <p>
                    <span className="font-medium">Care Instructions:</span> {careInstructions}
                  </p>
                )}
                {shippingInfo && (
                  <p>
                    <span className="font-medium">Shipping:</span> {shippingInfo}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}