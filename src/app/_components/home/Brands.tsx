"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

export default function Brands() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex items-center justify-between gap-10 px-[5%] py-5 bg-[#121212]"
    >
      {[1, 2, 3, 4, 5].map((index) => (
        <motion.div key={index} variants={scaleIn}>
          <Image
            className=""
            src={`/svg/${['versage', 'zara', 'gucci', 'prada', 'calvin-klein'][index-1]}-logo.svg`}
            alt={`${['versage', 'zara', 'gucci', 'prada', 'calvin-klein'][index-1]}-logo`}
            width={120}
            height={120}
          />
        </motion.div>
      ))}
    </motion.div>
  );
} 