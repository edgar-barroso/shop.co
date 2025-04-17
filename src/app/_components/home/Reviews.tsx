"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const reviews = [
  {
    id: 1,
    text: "I absolutely love the quality of these clothes! The fabric is so comfortable and the fit is perfect.",
    author: "Sarah Johnson",
    rating: 5
  },
  {
    id: 2,
    text: "The shipping was super fast and the clothes exceeded my expectations. Will definitely shop here again!",
    author: "Michael Chen",
    rating: 5
  },
  {
    id: 3,
    text: "Great selection of styles and the customer service is excellent. Highly recommend!",
    author: "Emma Davis",
    rating: 5
  },
  {
    id: 4,
    text: "The quality is amazing for the price. I've already ordered multiple times!",
    author: "David Wilson",
    rating: 5
  },
  {
    id: 5,
    text: "Love the unique designs and the attention to detail. My new favorite store!",
    author: "Lisa Thompson",
    rating: 5
  }
];

export default function Reviews() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="flex flex-col items-center justify-between py-5 bg-background text-foreground gap-10"
    >
      <h2 className="font-integralCF text-4xl font-bold uppercase max-md:text-3xl max-md:text-center">
        OUR HAPPY CUSTOMERS
      </h2>
      
      <div className="w-full">
        <style jsx global>{`
          .react-multi-carousel-item {
            transition: all 0.3s ease;
          }
          .react-multi-carousel-item:not(.react-multi-carousel-item--active) {
            filter: blur(2px);
            opacity: 0.5;
            transform: scale(0.9);
          }
          .react-multi-carousel-item--active {
            filter: blur(0);
            opacity: 1;
            transform: scale(1);
          }
        `}</style>
        
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={300}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          centerMode={!isMobile}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="border border-foreground/10 p-6 gap-2 rounded-2xl mx-4 flex flex-col items-start justify-start h-[180px]"
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold">{review.author}</p>
                <Image src="/svg/checked.svg" alt="checked" width={18} height={18} />
              </div>
              <p className="text-foreground/80 mb-4">{`"${review.text}"`}</p>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </motion.section>
  );
} 