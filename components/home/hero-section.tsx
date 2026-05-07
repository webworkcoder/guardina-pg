// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   ShieldCheck,
//   Volume2,
//   VolumeX,
// } from "lucide-react";
// import Link from "next/link";
// import { useState, useEffect, useCallback, useRef } from "react";

// const slides = [
//   {
//     id: 1,
//     video: "/video/pgVideo1.mp4",
//     tagline: "Secure • Premium • Comfortable",
//     title: "Redefining Elite Guardian Living",
//     subtitle:
//       "Experience a sanctuary of comfort designed for the modern professional.",
//   },

//   {
//     id: 2,
//     video: "/video/pgVideo1.mp4",
//     tagline: "Thrive In Luxury",
//     title: "More Than A Stay, It's Growth",
//     subtitle:
//       "Join a vibrant community that fosters success in a high-end environment.",
//   },

//   {
//     id: 3,
//     video: "/video/pgVideo1.mp4",
//     tagline: "Safety First Excellence",
//     title: "Your Safety, Our Ultimate Priority",
//     subtitle:
//       "Premium spaces secured with 24/7 care and world-class amenities.",
//   },
// ];

// export const HeroSection = () => {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [muted, setMuted] = useState(true);

//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   // Auto Slide
//   const nextSlide = useCallback(() => {
//     setDirection(1);
//     setIndex((prev) => (prev + 1) % slides.length);
//   }, []);

//   const prevSlide = () => {
//     setDirection(-1);
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Auto Change
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 7000);

//     return () => clearInterval(timer);
//   }, [nextSlide]);

//   const slide = slides[index];
//   const splitTitle = slide.title.split(" ");

//   const variants = {
//     enter: (dir: number) => ({
//       opacity: 0,
//       scale: 1.08,
//       x: dir > 0 ? "8%" : "-8%",
//     }),

//     center: {
//       opacity: 1,
//       scale: 1,
//       x: 0,
//       transition: {
//         duration: 1,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     },

//     exit: (dir: number) => ({
//       opacity: 0,
//       scale: 1.08,
//       x: dir > 0 ? "-8%" : "8%",
//       transition: {
//         duration: 0.8,
//       },
//     }),
//   };

//   return (
//     <section className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-black/80">
//       {/* VIDEO SLIDER */}
//       <AnimatePresence mode="wait" custom={direction}>
//         <motion.div
//           key={slide.id}
//           custom={direction}
//           variants={variants as any}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           className="absolute inset-0"
//         >
//           {/* Video */}
//           <video
//             ref={videoRef}
//             autoPlay
//             muted={muted}
//             loop
//             playsInline
//             preload="metadata"
//             className="w-full h-full object-cover"
//           >
//             <source src={slide.video} type="video/mp4" />
//           </video>

//           {/* Premium Overlay */}
//           <div className="absolute inset-0 bg-black/50" />

//           <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20" />

//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
//         </motion.div>
//       </AnimatePresence>

//       {/* CONTENT */}
//       <div className="relative z-20 h-full flex items-center">
//         <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slide.id}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={{
//                 visible: {
//                   transition: {
//                     staggerChildren: 0.12,
//                   },
//                 },
//               }}
//               className="max-w-4xl"
//             >
//               {/* Tagline */}
//               <motion.div
//                 variants={{
//                   hidden: {
//                     opacity: 0,
//                     y: 20,
//                   },

//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                   },
//                 }}
//                 className="flex items-center gap-3 mb-5"
//               >
//                 <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#1B5E20] font-semibold">
//                   {slide.tagline}
//                 </span>
//               </motion.div>

//               {/* Heading */}
//               <motion.h1
//                 variants={{
//                   hidden: {
//                     opacity: 0,
//                     y: 40,
//                   },

//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                   },
//                 }}
//                 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] text-white mb-6"
//               >
//                 {splitTitle.slice(0, -1).join(" ")}{" "}
//                 <span className="text-[#1B5E20]">{splitTitle.slice(-1)}</span>
//               </motion.h1>

//               {/* Subtitle */}
//               <motion.p
//                 variants={{
//                   hidden: {
//                     opacity: 0,
//                     y: 20,
//                   },

//                   visible: {
//                     opacity: 0.85,
//                     y: 0,
//                   },
//                 }}
//                 className="text-gray-300 text-base md:text-xl leading-relaxed max-w-2xl border-l-2 border-[#22EB11]/40 pl-5 mb-10"
//               >
//                 {slide.subtitle}
//               </motion.p>

//               {/* Buttons */}
//               <motion.div
//                 variants={{
//                   hidden: {
//                     opacity: 0,
//                     y: 30,
//                   },

//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                   },
//                 }}
//                 className="flex flex-col sm:flex-row gap-4"
//               >
//                 <Link href={"/contact"}>
//                   <button className="px-8 md:px-10 py-4 rounded-full bg-[#1B5E20] text-white font-bold uppercase tracking-[0.2em] text-xs  transition-all duration-300 w-full">
//                     Book Your Stay
//                   </button>
//                 </Link>

//                 <Link href={"/rooms"}>
//                   <button className="px-8 md:px-10 py-4 rounded-full border border-[#1B5E20] text-white font-semibold uppercase tracking-[0.2em] text-xs  transition-all duration-300 w-full">
//                     Explore Rooms
//                   </button>
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Progress Bars */}
//       <div className="absolute bottom-8 left-4 md:left-8 flex gap-3 z-30">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             className="w-14 md:w-16 h-[3px] bg-white/20 rounded-full overflow-hidden"
//           >
//             {i === index && (
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{
//                   duration: 7,
//                   ease: "linear",
//                 }}
//                 className="h-full bg-[#1B5E20]"
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Navigation */}
//       <div className="absolute bottom-8 right-4 md:right-8 flex items-center gap-3 z-30">
//         {/* Sound Toggle */}
//         <button
//           onClick={() => setMuted(!muted)}
//           className="w-11 h-11 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
//         >
//           {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
//         </button>

//         {/* Prev */}
//         <button
//           onClick={prevSlide}
//           className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
//         >
//           <ArrowLeft size={20} />
//         </button>

//         {/* Next */}
//         <button
//           onClick={nextSlide}
//           className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#1B5E20] text-white flex items-center justify-center hover:bg-white transition-all duration-300"
//         >
//           <ArrowRight size={20} />
//         </button>
//       </div>
//     </section>
//   );
// };

/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Phone, Star, Home } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import FeatureBar from "../shared/FeatureBar";

export const HeroSection = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBookNow = () => {
    if (pathname === "/") {
      const section = document.getElementById("contact");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push("/#contact");
    }
  };

  return (
    <>
      <section className="relative w-full h-[85vh] md:h-screen overflow-hidden pt-28 md:pt-0">
        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="px-4 md:px-8 w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="max-w-4xl"
            >
              {/* Tagline */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center gap-3 mb-6"
              >
                <Home className="w-4 h-4 text-[#1B5E20]" />

                <div className="uppercase tracking-[0.35em] text-[10px] md:text-xs text-[#1B5E20] font-semibold">
                  Safe • Premium • Comfortable
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-4xl sm:text-6xl font-bold leading-[1.05] text-black mb-6"
              >
                Guardian Boy&rsquo;s{" "}
                <span className="text-[#1B5E20]">Hostel & PG</span>{" "}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 0.85, y: 0 },
                }}
                className="text-slate-500 text-base md:text-xl leading-relaxed max-w-2xl border-l-2 border-[#1B5E20] pl-5 mb-10"
              >
                Experience premium student living with fully furnished rooms,
                nutritious meals, high-speed WiFi, peaceful study spaces,
                housekeeping, and 24/7 security.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={handleBookNow}
                  className="px-8 md:px-10 py-4 rounded-full bg-[#1B5E20] text-white font-bold uppercase tracking-[0.2em] text-xs  transition-all duration-300  cursor-pointer"
                >
                  Book Your Stay
                </button>

                <a
                  href="tel:+911234567890"
                  className="px-8 md:px-10 py-4 rounded-full border border-[#1B5E20] text-[#1B5E20] font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-wrap gap-8 mt-14"
              >
                {[
                  {
                    number: "100+",
                    label: "Happy Residents",
                  },
                  {
                    number: "24/7",
                    label: "Security",
                  },
                 
                ].map((item) => (
                  <div key={item.label}>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1B5E20] flex items-center gap-1">
                      {item.number}

                      {item.label === "Ratings" && (
                        <Star
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      )}
                    </h3>

                    <p className="text-[#1B5E20] text-sm uppercase tracking-[0.2em] mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <FeatureBar
        features={[
          "Nutritious Home-Style Meals",
          "24/7 Safety & Care",
          "High-Speed Wi-Fi for Study & Streaming",
          "Comfortable Study & Living Spaces",
          "Biometric Access",
          "Regular Cleaning & Maintenance",
        ]}
        duration={12}
      />
    </>
  );
};
