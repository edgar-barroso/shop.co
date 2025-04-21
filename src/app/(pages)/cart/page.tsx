"use client"
import { useCart } from "@/app/contexts/CartContext";

export default function Cart() {
  const { cart } = useCart();
  
  return <>{JSON.stringify(cart)}</>;
}
