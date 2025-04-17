import { CgSearch } from "react-icons/cg";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}


export default function SearchBar({ className, placeholder }: SearchBarProps) {
  return (
    <div className={`flex items-center gap-2 p-3 rounded-full bg-foreground/10 ${className}`}>
        <CgSearch className="text-2xl"/>
      <input className="outline-none" type="text" placeholder={placeholder} />
    </div>
  );
}
