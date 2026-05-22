/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Phone, Star, Home } from "lucide-react";
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
      <section className="relative w-full h-[85vh] md:h-screen overflow-hidden pt-16 md:pt-0 flex items-center">
        <div className="absolute inset-0 block md:hidden z-0">
          <video
            src="/hero/heroImg.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Ambient Background Art */}
        <div className="absolute inset-0 hidden md:block z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,94,32,0.03),transparent_50%)] pointer-events-none" />
        </div>

        <div className="w-full px-8 relative z-20">
          <div className="md:grid hidden grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="w-full px-2 sm:px-4 md:px-0">
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
                className="max-w-xl mx-auto md:mx-0 text-center md:text-left"
              >
                {/* Tagline */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-3 mb-5 justify-center md:justify-start"
                >
                  <Home className="w-4 h-4 text-[#1B5E20]" />
                  <div className="uppercase tracking-[0.35em] text-[10px] md:text-xs text-[#1B5E20] font-black">
                    Safe • Premium • Comfortable
                  </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] text-neutral-900 mb-5 drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)] md:drop-shadow-none"
                >
                  Guardian Boy&rsquo;s{" "}
                  <span className="text-[#1B5E20] block sm:inline">
                    Hostel & PG
                  </span>{" "}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 0.9, y: 0 },
                  }}
                  className="text-neutral-700 md:text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed border-l-4 md:border-l-2 border-[#1B5E20] pl-4 md:pl-5 mb-8 md:mb-10 text-left"
                >
                  Experience premium student living with fully furnished rooms,
                  nutritious meals, high-speed WiFi, peaceful study spaces,
                  housekeeping, and 24/7 security.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-xs sm:max-w-none mx-auto md:mx-0"
                >
                  <button
                    onClick={handleBookNow}
                    className="px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-[#1B5E20] text-white font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-lg shadow-green-900/20 active:scale-98 cursor-pointer text-center whitespace-nowrap"
                  >
                    Book Your Stay
                  </button>

                  <a
                    href="tel:+911234567890"
                    className="px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-[#1B5E20] bg-white text-[#1B5E20] font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#1B5E20] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 whitespace-nowrap"
                  >
                    <Phone size={14} strokeWidth={2.5} />
                    Call Now
                  </a>
                </motion.div>

                {/* Metrics Banner */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex justify-center md:justify-start gap-8 md:gap-12 mt-10 md:mt-14 border-t border-neutral-900/10 md:border-t-0 pt-6 md:pt-0"
                >
                  {[
                    { number: "100+", label: "Happy Residents" },
                    { number: "24/7", label: "Security" },
                  ].map((item) => (
                    <div key={item.label} className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-black text-[#1B5E20] flex items-center justify-center md:justify-start gap-1">
                        {item.number}
                      </h3>
                      <p className="text-[#1B5E20]/80 md:text-[#1B5E20] text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div className="hidden md:flex w-full h-[560px] items-center justify-center">
              <div className="relative w-2/3 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.12)]  bg-neutral-900 ring-1 ring-black/5">
                <video
                  src="/hero/heroImg.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full object-cover relative z-0 h-[560px]"
                />
              </div>
            </div>
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
