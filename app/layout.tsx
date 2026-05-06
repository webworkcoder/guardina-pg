import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { Footer } from "./layout/footer";
import { IntroLogo } from "./layout/IntroLogo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Guardian P.G Service",
  description: "Created By Axvionel Digital Private Limited.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${poppins.variable} h-full antialiased`}>
      <SmoothScroll>
        <IntroLogo />
        <body className="min-h-full flex flex-col font-poppins  bg-gradient-to-r from-white via-yellow-50 to-orange-50">
          <Navbar />
          {children}
          <Footer />
        </body>
      </SmoothScroll>
    </html>
  );
}
