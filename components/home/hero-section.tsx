/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/pg1.jpg",
    title: "The Ultimate Luxury PG Experience",
    subtitle: "Where Comfort Meets Premium Living",
  },
  {
    id: 2,
    image: "/pg2.jpg",
    title: "Feel Like Home",
    subtitle: "Modern Rooms with Top-Class Facilities",
  },
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[index];

  // 🎬 Background animation
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.6 },
    }),
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants as any}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center text-center px-6 min-h-[calc(100vh-72px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="max-w-3xl"
          >
            {/* Tagline */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-sm tracking-[3px] text-gray-300 uppercase mb-4"
            >
              Where Luxury Meets Excellence
            </motion.p>

            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-4 text-gray-300 text-lg"
            >
              {slide.subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full md:w-1/3
                bg-gradient-to-r from-green-300 to-green-500
                text-black font-semibold
                shadow-lg hover:shadow-green-400/40
                transition-all duration-300"
              >
                Book Now
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-end md:items-center pb-3 justify-between px-6 z-20 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="pointer-events-auto p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition"
        >
          <ArrowLeft />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition"
        >
          <ArrowRight />
        </motion.button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-2 rounded-full transition-all duration-300
            ${i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
};
