import Image from "next/image";
interface StarsProps {
  stars: number;
  size?: number;
}

export const Stars = ({ stars, size = 20 }: StarsProps) => {
  return (
    <div className="flex items-center relative">
      <div
        className={`absolute z-20 right-0 bottom-0 h-full w-full bg-background`}
        style={{ width: `${100 - (stars / 5) * 100}%` }}
      />
      <div className={`flex items-center justify-between gap-0.5`}>
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            className=""
            src="/svg/star-2.svg"
            alt="star"
            width={size}
            height={size}
          />
        ))}
      </div>
    </div>
  );
};
