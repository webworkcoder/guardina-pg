/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/slider2.jpg",
    title: "The Ultimate Luxury PG Experience",
    subtitle: "Where Comfort Meets Premium Living",
  },
  {
    id: 2,
    image: "/slider2.jpg",
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

  const splitTitle = slide.title.split(" ");

  return (
    <>
      <section className="relative w-full h-[50vh] md:min-h-[calc(100vh-172px)] overflow-hidden">
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
        <div className="relative z-10 flex items-center justify-center text-center px-6 h-full md:min-h-[calc(100vh-120px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="max-w-2xl"
            >
              {/* Tagline */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 0.8, y: 0 },
                }}
                className="text-[10px] md:text-xs tracking-[4px] md:tracking-[5px] text-gray-400 uppercase mb-4 md:mb-6"
              >
                Premium Living Experience
              </motion.p>

              {/* Heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-2xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.2]"
              >
                {splitTitle.slice(0, -2).join(" ")}
                <br />
                <span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                  {splitTitle.slice(-2).join(" ")}
                </span>
              </motion.h1>

              {/* Divider */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scaleX: 0 },
                  visible: { opacity: 1, scaleX: 1 },
                }}
                className="w-12 md:w-16 h-[2px] bg-green-400 mx-auto my-4 md:my-6 origin-left"
              />

              {/* Subtitle */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 0.9, y: 0 },
                }}
                className="text-gray-300 text-sm md:text-lg leading-relaxed px-2"
              >
                {slide.subtitle}
              </motion.p>

              {/* Button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex justify-center mt-6 md:mt-10"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-10 py-2.5 md:py-3 rounded-full
                bg-gradient-to-r from-green-300 to-green-500
                text-black text-sm md:text-base font-medium tracking-wide
                shadow-lg hover:shadow-green-400/40
                transition-all duration-300"
                >
                  Book Your Stay
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}

        {/* Dots */}
        <div className="absolute md:hidden bottom-3 md:bottom-7 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300
            ${
              i === index
                ? "w-5 md:w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
            />
          ))}
        </div>
      </section>

      <div className="px-4 md:px-8 flex gap-4 my-3">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="pointer-events-auto p-2  bg-black backdrop-blur-md text-white  cursor-pointer transition"
        >
          <ArrowLeft size={18} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto p-2  bg-black backdrop-blur-md text-white  cursor-pointer transition"
        >
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </>
  );
};
