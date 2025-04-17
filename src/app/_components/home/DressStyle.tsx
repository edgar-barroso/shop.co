"use client";
import { motion } from "framer-motion";

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

export default function DressStyle() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col items-center justify-between px-[5%] py-5 bg-background text-foreground gap-10"
    >
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center justify-between gap-10 max-md:gap-5 bg-foreground/10 p-10 max-md:p-5 rounded-2xl w-full"
      >
        <h2 className="font-integralCF text-4xl font-bold uppercase max-md:text-3xl max-md:text-center">
          BROWSE BY dress STYLE
        </h2>
        <motion.div
          variants={staggerContainer}
          className="flex w-full gap-5 max-md:hidden"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="bg-[url('/images/casual-banner.png')] bg-cover bg-center flex-1/3 h-[280px] rounded-2xl"
          >
            <p className="p-6 text-foreground font-bold text-2xl">Casual</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="bg-[url('/images/formal-banner.png')] bg-cover bg-center flex-2/3 h-[280px] rounded-2xl"
          >
            <p className="p-6 text-foreground font-bold text-2xl">Formal</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="flex w-full gap-5 max-md:hidden"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="bg-[url('/images/party-banner.png')] bg-cover bg-center flex-2/3 h-[280px] rounded-2xl"
          >
            <p className="p-6 text-foreground font-bold text-2xl">Party</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="bg-[url('/images/gym-banner.png')] bg-cover bg-center flex-1/3 h-[280px] rounded-2xl"
          >
            <p className="p-6 text-foreground font-bold text-2xl">Formal</p>
          </motion.div>
        </motion.div>



        <motion.div
          variants={staggerContainer}
          className="flex w-full gap-5 md:hidden flex-wrap"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="bg-[url('/images/casual-banner.png')] bg-cover bg-center h-[280px] w-full rounded-2xl"
          > 
            <p className="p-6 text-foreground font-bold text-2xl">Casual</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="bg-[url('/images/formal-banner.png')] bg-cover bg-center  h-[280px] w-full rounded-2xl"
          >
            <p className="p-6 text-foreground font-bold text-2xl">Formal</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="bg-[url('/images/party-banner.png')] bg-cover bg-center h-[280px] w-full rounded-2xl"
          >
            <p className="p-6 text-foreground font-bold text-2xl">Party</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="bg-[url('/images/gym-banner.png')] bg-cover bg-center h-[280px] w-full rounded-2xl"
          >
            <p className="p-6 text-foreground font-bold text-2xl">Formal</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
