"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Product from "../Product";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface ProductsProps {
  title: string;
  products: Array<{
    id: number;
    image: string;
    title: string;
    price: number;
    stars: number;
    discountPercentage?: number;
  }>;
}

export default function Products({ title, products }: ProductsProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col items-center justify-between px-[5%] py-5 bg-background text-foreground gap-10"
    >
      <motion.h2 variants={fadeInUp} className="font-integralCF text-4xl font-bold uppercase max-md:text-3xl">
        {title}
      </motion.h2>
      <motion.div
        className={`grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-10 w-full`}
        variants={staggerContainer}
      >
        <AnimatePresence>
          {products.slice(0, showAll ? products.length : 4).map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <Product {...product} />
            </motion.div>
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