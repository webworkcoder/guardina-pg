"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import FeatureBar from "../shared/FeatureBar";

export const WhyChooseUs: React.FC = () => {
  const stats = [
    { label: "Staff Members", value: "125+" },
    { label: "Amenities", value: "20+" },
    { label: "Booking Availability", value: "24/7" },
  ];

  const features = [
    "Luxurious & Comfortable Accommodations",
    "Exceptional Service & Hospitality",
    "Delicious Dining Options",
  ];

  return (
    <>
      <section className="py-10 relative overflow-hidden">
        <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03] z-0">
          <h1 className="text-[3rem] md:text-[10rem] font-bold text-slate-900 uppercase tracking-tighter leading-none whitespace-nowrap">
            WHY CHOOSE US
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <div className="flex flex-col items-center gap-2">
              <div className="text-[#1B5E20]">
                <svg
                  width="60"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="currentColor"
                >
                  <path
                    d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-[#1B5E20] uppercase tracking-[0.4em] font-bold text-xs md:text-sm">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-serif text-[#1A1A1A] max-w-3xl mx-auto leading-tight">
              Discover Comfort Like Never Before
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div className="relative grid grid-cols-12 gap-4 items-end">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative col-span-8 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/pg1.jpg"
                  alt="Luxury Interior"
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-[#1B5E20] p-3 md:p-5 rounded-2xl flex items-center gap-3 md:gap-5 text-white shadow-xl z-20">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-[#1B5E20] bg-slate-200 overflow-hidden relative"
                      >
                        <Image
                          src={`/pg.png`}
                          alt="user"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                 
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-xl leading-none">
                      4.9 Star
                    </p>
                    <p className="text-[10px] md:text-xs text-white/70">
                      Reviews
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative col-span-4 aspect-[2/3] rounded-[1.5rem] overflow-hidden mb-10 shadow-xl"
              >
                <Image
                  src="/pg2.jpg"
                  alt="Service Staff"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="flex flex-col justify-center h-full space-y-8 md:space-y-10">
              <div className="space-y-4">
                <p className="text-slate-500 leading-relaxed text-base md:text-xl">
                  Experience a new standard of living with our handpicked
                  facilities and dedicated support. We don&#39;t just provide a
                  room; we provide a lifestyle.
                </p>
                <div className="h-[1px] w-full bg-slate-100" />
              </div>

              {/* Stats Grid - Using flex for better spacing on mobile */}
              <div className="flex justify-between items-center py-2">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 text-center border-r last:border-0 border-slate-100 px-2"
                  >
                    <h4 className="text-2xl md:text-4xl font-serif font-bold text-[#1B5E20]">
                      {stat.value}
                    </h4>
                    <p className="text-slate-500 text-[10px] md:text-sm uppercase tracking-wider uppercase font-semibold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="h-[1px] w-full bg-slate-100" />

              {/* Features List */}
              <div className="space-y-5">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6AC6F]/10 flex items-center justify-center text-[#E6AC6F] group-hover:bg-[#E6AC6F] group-hover:text-white transition-all duration-300">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-slate-700 font-medium md:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#1B5E20] text-white px-8 py-3  rounded-full font-bold hover:bg-[#1f352f] transition-all shadow-xl text-sm md:text-base uppercase tracking-widest"
                >
                  Known More
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeatureBar
        features={[
          "Breakfast Included",
          "Swimming Pool",
          "High Speed Wifi",
          "Spa & Wellness",
        ]}
        duration={10}
      />
    </>
  );
};
