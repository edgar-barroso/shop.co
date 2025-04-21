import Image from "next/image";
import { Stars } from "./Stars";
interface ReviewCardProps {
  className?: string;
  id: number;
  rating: number;
  author: string;
  review: string;
}


export default function ReviewCard({
  rating,
  author,
  review,
  className,
}: ReviewCardProps) {
  return (
    <div
      className={`border border-foreground/10 px-6 py-4 gap-2 rounded-2xl flex flex-col items-start justify-start min-h-[180px] ${className}`}
    >
      <Stars stars={rating} />
      <div className="flex items-center gap-2">
        <p className="font-bold">{author}</p>
        <Image src="/svg/checked.svg" alt="checked" width={18} height={18} />
      </div>
      <p className="text-foreground/80 mb-4">{`"${review}"`}</p>
    </div>
  );
}
