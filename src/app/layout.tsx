import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import localFont from "next/font/local";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
