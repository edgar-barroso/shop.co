"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "../ReviewCard";

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
    review: "I absolutely love the quality of these clothes! The fabric is so comfortable and the fit is perfect.",
    author: "Sarah Johnson",
    rating: 5
  },
  {
    id: 2,
    review: "The shipping was super fast and the clothes exceeded my expectations. Will definitely shop here again!",
    author: "Michael Chen",
    rating: 5
  },
  {
    id: 3,
    review: "Great selection of styles and the customer service is excellent. Highly recommend!",
    author: "Emma Davis",
    rating: 5
  },
  {
    id: 4,
    review: "The quality is amazing for the price. I've already ordered multiple times!",
    author: "David Wilson",
    rating: 5
  },
  {
    id: 5,
    review: "Love the unique designs and the attention to detail. My new favorite store!",
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
            <ReviewCard className="md:mx-4" key={review.id} {...review} />
          ))}
        </Carousel>
      </div>
    </motion.section>
  );
} 