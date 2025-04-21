"use client";
import Product from "@/app/_components/Product";
import { useCart } from "@/app/contexts/CartContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TbTrash } from "react-icons/tb";
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
interface Product {
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

export default function Cart() {
  const { cart, clearCart, removeItem } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = [];
      const requests = cart.map((item) => {
        return fetch(`/api/getProduct/${item.id}`).then((res) => res.json());
      });
      const responses = await Promise.all(requests);
      responses.forEach((response) => {
        products.push(response.product);
      });
      setProducts(products);
    };
    fetchProducts();
  }, [cart]);

  return (
    <div className="flex flex-col items-start justify-start py-5 mx-[5%] gap-6">
      <p className="text-sm text-foreground/60 py-2">Home / Cart</p>
      <h1 className="text-4xl uppercase font-integralCF">Your Cart</h1>
      <div className="flex justify-between items-start gap-4 w-full">
        <div className="flex flex-col flex-1 items-start justify-start border border-foreground/20 rounded-xl divide-y divide-foreground/20 px-4">
          {cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            if (!product) return null;
            const variant = product.variants.find(
              (variant) => variant.id === item.variantId
            );
            if (!variant) return null;
            const size = variant.sizes.find((size) => size.id === item.sizeId);
            if (!size) return null;
            return (
              <div
                key={
                  String(item.id) + String(item.variantId) + String(item.sizeId)
                }
                className="w-full py-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start justify-start gap-4">
                    <Image
                      src={variant.images[0]}
                      alt={product.title}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="font-light ">
                        <p className="text-md font-bold">{product.title}</p>
                        <p className="text-sm ">{variant.name}</p>
                        <p className="text-sm ">{size.name}</p>
                      </div>
                      {product.discountPercentage ? (
                        <div className="flex items-center gap-2 text-md">
                          <p className="text-xl font-bold">
                            $
                            {(product.price *
                              (100 - product.discountPercentage)) /
                              100}
                          </p>
                          <p className="text-foreground/50 font-bold line-through">
                            ${product.price}
                          </p>
                          <p className="text-[10px] bg-red-500/30 text-red-500 px-2 py-1 rounded-full">
                            -{product.discountPercentage}%
                          </p>
                        </div>
                      ) : (
                        <p className=" font-bold text-xl">${product.price}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between h-[100px]">
                    <button
                      onClick={() =>
                        removeItem(item.id, item.variantId, item.sizeId)
                      }
                      className="text-sm font-bold cursor-pointer"
                    >
                      <TbTrash className="text-red-500 w-4 h-4" />
                    </button>
                    <div className="flex p-3 bg-foreground/10 rounded-full gap-5 items-center justify-between  text-foreground">
                      <CgMathMinus
                        size={15}
                        className={`cursor-pointer hover:scale-110 transition-all duration-300 ${
                          item.quantity === 1
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      />
                      {item.quantity}
                      <CgMathPlus
                        size={15}
                        className={`cursor-pointer hover:scale-110 transition-all duration-300 ${
                          item.quantity >= size.stock
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex flex-col items-start justify-start gap-4 border border-foreground/20 rounded-xl p-4">
            <h2 className="text-2xl font-bold uppercase font-integralCF">
              Order Summary
            </h2>
            <div className="flex items-start justify-start gap-2">
              <p className="text-sm text-foreground/60">Subtotal</p>
              <p className="text-sm text-foreground/60">$0</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <p className="text-sm text-foreground/60">Shipping</p>
              <p className="text-sm text-foreground/60">Free</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <p className="text-sm text-foreground/60">Total</p>
              <p className="text-sm text-foreground/60">$0</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={clearCart}
        className="bg-foreground text-background px-4 py-2 rounded-md"
      >
        Clear Cart
      </button>
    </div>
  );
}
