"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rooms } from "../home/rooms";
import FeatureBar from "../shared/FeatureBar";
import { ReservationForm } from "../home/reservationForm";
import { Testimonials } from "../home/testimonials";

interface BannerProps {
  title?: string;
  currentPage?: string;
  bgImage?: string;
}

export const Banner = ({
  title = "Rooms & Suites",
  currentPage = "Rooms & Suites",
  bgImage = "/pg2.jpg",
}: BannerProps) => {
  return (
    <>
      <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] min-h-[350px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center gap-3 text-white/90 text-sm md:text-base font-medium tracking-wide"
          >
            <Link href="/" className="hover:text-[#E6AC6F] transition-colors">
              Home
            </Link>
            <span className="opacity-50 text-xl font-light">|</span>
            <span className="text-white">{currentPage}</span>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </section>
      <Rooms />
      <ReservationForm />
      <Testimonials />
    </>
  );
};
