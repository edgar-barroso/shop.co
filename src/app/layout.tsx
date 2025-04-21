import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import { CartProvider } from "@/app/contexts/CartContext";

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "SHOP.CO",
};

const integralCF = localFont({
  src: "./../../public/fonts/IntegralCF-Heavy.woff2",
  variable: "--font-integralCF",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased ${integralCF.variable} `}>
      <CartProvider>

        <Header />
        {children}
        <Footer />
      </CartProvider>
      </body>
    </html>
  );
}
