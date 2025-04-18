"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Product from "../Product";
import Link from "next/link";

export enum ProductCategory {
  NEW_ARRIVALS = "NEW_ARRIVALS",
  TOP_SELLERS = "TOP_SELLERS",
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  stars: number;
  category: ProductCategory;
}

interface ProductsProps {
  title: string;
  category: ProductCategory;
}

export default function Products({ title, category }: ProductsProps) {
  const [showAll, setShowAll] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/fetchProducts?category=${category}`);
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
      setIsLoading(false);
    };
    fetchProducts();
  }, [category]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col items-center justify-between px-[5%] py-5 bg-background text-foreground gap-10"
    >
      <motion.h2
        variants={fadeInUp}
        className="font-integralCF text-4xl font-bold uppercase max-md:text-3xl"
      >
        {title}
      </motion.h2>
      <motion.div
        className={`grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-10 w-full`}
        variants={staggerContainer}
      >
        <AnimatePresence>
          {products.slice(0, showAll ? products.length : 4).map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Product {...product} />
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </motion.div>
      {products.length > 4 && (
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="text-foreground hover:text-foreground transition-colors border rounded-full px-12 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "Show Less" : "View All"}
        </motion.button>
      )}
    </motion.section>
  );
}
