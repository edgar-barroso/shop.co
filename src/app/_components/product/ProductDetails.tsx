
"use client";
import ReviewCard from "@/app/_components/ReviewCard";
import { useState } from "react";

export default function ProductDetails() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col w-full px-[5%] py-10">
      <h1 className="text-2xl font-bold ">Product Reviews</h1>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 justify-between items-center pt-5">
        {ratingReviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      <div className="flex justify-center pt-5">

      {ratingReviews.length > 6 && (
        <button
        onClick={() => setShowAll(!showAll)}
        className="text-foreground hover:text-foreground transition-colors border rounded-full px-12 py-2"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      )}
      </div>
    </div>
  );
}

const ratingReviews = [
    {
      id: 1,
      rating: 5,
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 2,
      rating: 5,
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 3,
      rating: 5,
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 4,
      rating: 5,
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 5,
      rating: 5,
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 6,
      rating: 5,
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      author: "John Doe",
      date: "2021-01-01",
    },

  ];

