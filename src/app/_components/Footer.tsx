import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="flex max-md:flex-col items-center justify-between  mx-[10%] max-md:mx-[5%] bg-foreground text-background rounded-2xl p-5 md:h-28 max-md:gap-2">
        <h1 className="text-4xl font-bold uppercase font-integralCF max-md:text-2xl max-lg:text-xl">
          STAY UPTO DATE ABOUT <br />
          OUR LATEST OFFERS
        </h1>
        <form className="flex flex-col items-center justify-center gap-2 text-foreground">
          <div className="flex items-center justify-center gap-2 bg-background rounded-2xl py-2 px-4">
            <FaEnvelope className="text-foreground/20" />
            <input
              type="email"
              className="outline-none"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="bg-background text-foreground rounded-2xl p-2 text-sm w-full cursor-pointer"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
      <div className="flex max-md:grid max-md:grid-cols-2 max-md:gap-10 items-start justify-between -mt-14 bg-foreground/10 text-foreground/50 px-[10%] pt-20 pb-5">
        <div className="flex flex-col gap-2 justify-between">
          <h3 className="text-xl font-integralCF uppercase text-foreground">
            SHOP.CO
          </h3>
          <h4 className="text-sm font-light">
            We have clothes that suits your style and <br />
            which you’re proud to wear. From
            <br /> women to men.
          </h4>
          <div className="flex gap-2 items-start">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-lg uppercase text-foreground">COMPANY</h3>
          <Link href={"#"} className="">
            About Us
          </Link>
          <Link href={"#"} className="">
            Contact Us
          </Link>
          <Link href={"#"} className="">
            Terms of Service
          </Link>
          <Link href={"#"} className="">
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-lg uppercase text-foreground ">HELP</h3>
          <Link href={"#"} className="">
            Consumer support
          </Link>
          <Link href={"#"} className="">
            Shipping & Delivery
          </Link>
          <Link href={"#"} className="">
            Return & Exchange
          </Link>
          <Link href={"#"} className="">
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-lg uppercase text-foreground">FAQ</h3>
          <Link href={"#"} className="">
            How to order
          </Link>
          <Link href={"#"} className="">
            Payment Methods
          </Link>
          <Link href={"#"} className="">
            Return & Exchange
          </Link>
          <Link href={"#"} className="">
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-lg uppercase text-foreground">RESOURCES</h3>
          <Link href={"#"} className="">
            Blog
          </Link>
          <Link href={"#"} className="">
            About Us
          </Link>
          <Link href={"#"} className="">
            Terms of Service
          </Link>
          <Link href={"#"} className="">
            Privacy Policy
          </Link>
        </div>

      </div>
      <div className="flex flex-col gap-2 bg-foreground/10">
        <div className="flex max-md:flex-col max-md:items-center mx-[10%] gap-2 border-t border-foreground/20 pt-2 justify-between items-start">
          <p className="text-sm text-foreground font-light">
            © 2000-2021, All rights reserved
          </p>
          <div className="flex items-start">
            <Image src={"/svg/Badge.svg"} className="w-16 max-md:w-10" alt="payment-methods1" width={100} height={100} />
            <Image src={"/svg/Badge-1.svg"} className="w-16 max-md:w-10" alt="payment-methods2" width={100} height={100} />
            <Image src={"/svg/Badge-2.svg"} className="w-16 max-md:w-10" alt="payment-methods3" width={100} height={100} />
            <Image src={"/svg/Badge-3.svg"} className="w-16 max-md:w-10" alt="payment-methods4" width={100} height={100} />
            <Image src={"/svg/Badge-4.svg"} className="w-16 max-md:w-10" alt="payment-methods5" width={100} height={100} />
          </div>
        </div>
      </div>
    </footer>
  );
}
