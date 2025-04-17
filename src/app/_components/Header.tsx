"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { IoChevronDownOutline, IoMenu, IoClose } from "react-icons/io5";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="bg-foreground text-background h-9 flex items-center justify-center text-sm gap-1">
        <p className="text-sm text-center">
          Sign up and get 20% off to your first order.{" "}
        </p>
        <Link href={"#"} className="font-semibold underline">
          Sign Up Now
        </Link>
      </div>
      <div className="flex items-center justify-between px-4 md:px-[5%] py-4 gap-4 md:gap-10">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
          <Link href={"#"} className="font-extrabold font-integralCF text-2xl">
            SHOP.CO
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 font-light ">
          <button className="flex items-center gap-1 cursor-pointer ">
            Shop
            <IoChevronDownOutline />
          </button>
          <Link href={"#"}>On Sale</Link>
          <Link href={"#"}>New Arrivals</Link>
          <Link href={"#"}>Brands</Link>
        </div>

        <SearchBar className="hidden md:flex flex-1" placeholder="Search for products..." />
        
        <div className="flex items-center gap-4 text-xl">
          <Link href={"#"}><FaShoppingCart /></Link>
          <Link href={"#"}><FaRegUserCircle /></Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden z-20">
          <div className="p-4 flex flex-col gap-4">
            <SearchBar className="w-full" placeholder="Search for products..." />
            <div className="flex flex-col gap-4 font-light">
              <button className="flex items-center gap-1 cursor-pointer">
                Shop
                <IoChevronDownOutline />
              </button>
              <Link href={"#"}>On Sale</Link>
              <Link href={"#"}>New Arrivals</Link>
              <Link href={"#"}>Brands</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
