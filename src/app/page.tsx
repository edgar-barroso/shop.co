"use client";
import Hero from "./_components/home/Hero";
import DressStyle from "./_components/home/DressStyle";
import Brands from "./_components/home/Brands";
import Products from "./_components/home/Products";
import Reviews from "./_components/home/Reviews";

export default function Home() {


  return (
    <main className="">
      <Hero />
      <Brands/>
      <Products title={"New Arrivals"} products={newArrivalsProducts}/>
      <Products title={"Top Sellers"} products={topSellersProducts}/>
      <DressStyle />
      <Reviews/>
    </main>
  );
}

const newArrivalsProducts = [
  {
    id: 1,
    image: "/images/shirt-1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
    stars: 4.5,
  },
  {
    id: 2,
    image: "/images/jeans-1.png",
    title: "SKINNY FIT JEANS",
    price: 260,
    stars: 3.5,
    discountPercentage: 20,
  },
  {
    id: 3,
    image: "/images/shirt-2.png",
    title: "CHECKERED SHIRT",
    price: 180,
    stars: 4.5,
  },
  {
    id: 4,
    image: "/images/shirt-3.png",
    title: "SLEEVE STRIPED T-SHIRT",
    price: 160,
    stars: 4.5,
    discountPercentage: 30,
  },
];

const topSellersProducts = [
  {
    id: 1,
    image: "/images/shirt-4.png",
    title: "VERTICAL STRIPED SHIRT",
    price: 212,
    stars: 5.0,
    discountPercentage: 30,
  },
  {
    id: 2,
    image: "/images/shirt-5.png",
    title: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    stars: 4.0,
  },
  {
    id: 3,
    image: "/images/short.png",
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    stars: 3.0,
  },
  {
    id: 4,
    image: "/images/jeans-2.png",
    title: "FADED SKINNY JEANS",
    price: 210,
    stars: 4.5,
  },
];


