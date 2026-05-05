/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    image: "https://serenityhostels.in/wp-content/uploads/2025/03/Best-Luxury-PG-in-Bangalore.jpg",
    tagline: "Secure • Premium • Comfortable",
    title: "Redefining Elite Guardian Living",
    subtitle: "Experience a sanctuary of comfort designed for the modern professional.",
  },
  {
    id: 2,
    image: "https://www.multihousingnews.com/wp-content/uploads/sites/57/2021/07/BKV-Group-Clubroom_Orlando.jpg",
    tagline: "Thrive In Luxury",
    title: "More Than A Stay, It's Growth",
    subtitle: "Join a vibrant community that fosters success in a high-end environment.",
  },
  {
    id: 3,
    image: "https://www.frontsigns.com/wp-content/uploads/2022/02/modern-hotel-lobby-design.jpg",
    tagline: "Safety First Excellence",
    title: "Your Safety, Our Ultimate Priority",
    subtitle: "Premium spaces secured with 24/7 care and world-class amenities.",
  },
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-scroll logic
  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[index];
  const splitTitle = slide.title.split(" ");

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "10%" : "-10%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-10%" : "10%",
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.8 },
    }),
  };

  return (
    <section className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden bg-black">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt="Guardian Luxury PG"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-20 h-full max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-3xl"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#22EB11]" />
              <ShieldCheck className="text-[#22EB11] w-4 h-4" />
              <span className="text-[10px] md:text-xs tracking-[4px] text-green-400/80 uppercase font-bold">
                {slide.tagline}
              </span>
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              {splitTitle.slice(0, -1).join(" ")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22EB11] to-[#155111] block md:inline">
                {splitTitle.slice(-1)}
              </span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.8 } }}
              className="text-gray-300 text-lg md:text-2xl mb-10 font-light leading-relaxed border-l-2 border-[#22EB11]/30 pl-6"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex gap-5"
            >
              <button className="px-10 py-4 rounded-sm bg-[#22EB11] text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-all duration-500 shadow-xl">
                Book Your Suite
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bars for Auto-scroll Visibility */}
      <div className="absolute bottom-10 left-8 md:left-20 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div key={i} className="h-1 w-16 bg-white/20 overflow-hidden rounded-full">
            {i === index && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-[#22EB11]"
              />
            )}
          </div>
        ))}
      </div>

      {/* Modern Minimal Navigation */}
      <div className="absolute bottom-10 right-8 md:right-20 flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#22EB11] hover:text-black hover:border-[#22EB11] transition-all"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};