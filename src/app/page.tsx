"use client";
import Hero from "./_components/home/Hero";
import DressStyle from "./_components/home/DressStyle";
import Brands from "./_components/home/Brands";
import Products, { ProductCategory } from "./_components/home/Products";
import Reviews from "./_components/home/Reviews";



export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brands/>
      <Products title={"New Arrivals"} category={ProductCategory.NEW_ARRIVALS}/>
      <Products title={"Top Sellers"} category={ProductCategory.TOP_SELLERS}/>
      <DressStyle />
      <Reviews/>
    </main>
  );
}


