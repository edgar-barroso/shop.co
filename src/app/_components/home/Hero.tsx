"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function Hero() {
  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative bg-[#f6f6f6] text-[#121212] flex items-end justify-between px-[5%] flex-wrap"
    >
      <motion.div 
        variants={fadeInUp}
        className="flex flex-col items-start justify-center gap-6 md:py-20 pt-10"
      >
        <h1 className="font-integralCF text-5xl max-lg:text-4xl max-md:text-3xl font-bold ">
          FIND CLOTHES
          <br /> THAT MATCHES
          <br /> YOUR STYLE
        </h1>
        <p className="font-light">
          Browse through our diverse range of meticulously crafted garments,
          designed
          <br /> to bring out your individuality and cater to your sense of
          style.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-3 rounded-full px-16 cursor-pointer text-[#f6f6f6] bg-[#121212] max-md:w-full"
        >
          Shop Now
        </motion.button>
        <motion.div 
          variants={staggerContainer}
          className="flex flex-wrap items-center max-md:justify-center"
        >
          <motion.div variants={fadeInUp} className="flex flex-col items-start gap-2 border-r border-background/10">
            <p className="text-4xl font-bold max-md:text-3xl">200+</p>
            <p className="text-sm max-md:text-xs">International Brands</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col items-start gap-2 px-6 border-r border-background/10">
            <p className="text-4xl font-bold max-md:text-3xl">2,000+</p>
            <p className="text-sm max-md:text-xs">High-Quality Products</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col items-start gap-2 p-6">
            <p className="text-4xl font-bold max-md:text-3xl">30,000+</p>
            <p className="text-sm max-md:text-xs">Happy Customers</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          className="z-20"
          src="/images/hero-image.png"
          alt="hero-image"
          width={500}
          height={500}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Image
          className="absolute right-[35%] top-1/4 max-lg:hidden z-10"
          src="/svg/star.svg"
          alt="star"
          width={50}
          height={50}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Image
          className="absolute right-[5%] top-1/4 max-lg:hidden z-10"
          src="/svg/star.svg"
          alt="star"
          width={80}
          height={80}
        />
      </motion.div>
    </motion.section>
  );
} 