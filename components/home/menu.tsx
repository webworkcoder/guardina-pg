"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FeatureBar from "../shared/FeatureBar";

interface MenuItem {
  title: string;
  description: string;
  time: string;
  image: string;
  tag?: string;
}

export const Menu: React.FC = () => {
  const menuData: MenuItem[] = [
    {
      title: "Desi Breakfast",
      description: "Aloo Paratha, Curd, Pickle and Seasonal Fruits.",
      time: "08:00 AM",
      image: "/menu.avif",
      tag: "MORNING",
    },
    {
      title: "Chocolate Vanilla Cake",
      description: "Available as a weekend special treat for residents.",
      time: "04:00 PM",
      image: "/menu.avif",
      tag: "DESSERT SPECIAL",
    },
    {
      title: "North Indian Lunch",
      description: "Paneer Butter Masala, Dal Makhani, Rice & Roti.",
      time: "01:30 PM",
      image: "/menu.avif",
      tag: "POPULAR",
    },
    {
      title: "Evening Snacks",
      description: "Hot Tea/Coffee with Crispy Pakoras or Samosas.",
      time: "05:30 PM",
      image: "/menu.avif",
      tag: "TRENDING",
    },
    {
      title: "Healthy Salad Bowl",
      description: "Fresh sprouts, veggies, and lemon dressing.",
      time: "02:00 PM",
      image: "/menu.avif",
      tag: "DIET",
    },
    {
      title: "Special Dinner",
      description: "Hyderabadi Veg Biryani with Raita and Gulab Jamun.",
      time: "08:30 PM",
      image: "/menu.avif",
      tag: "NEW",
    },
  ];

  return (
    <>
      <section className="py-10 relative overflow-hidden">
        <div className="absolute top-5 md:top-10 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03] z-0">
          <h1 className="text-[3rem] md:text-[10rem] font-bold text-slate-900 uppercase tracking-tighter leading-none whitespace-nowrap">
            DINING MENU
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <div className="flex flex-col items-center gap-2">
              <div className="text-[#2C4A42]">
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
              <span className="text-[#E6AC6F] uppercase tracking-[0.4em] font-bold text-xs md:text-sm">
                PG Dining Hall
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] leading-tight max-w-4xl mx-auto">
              Discover Our Delightful Menu
            </h2>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-12">
            {menuData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-row items-start sm:items-center gap-4 md:gap-6 group"
              >
                {/* Image Container - Responsive sizing */}
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0 space-y-1 md:space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base sm:text-lg md:text-2xl font-serif font-bold text-[#1A1A1A] truncate">
                      {item.title}
                    </h3>

                    {/* Dotted Line - Hidden on very small screens to save space */}
                    <div className="hidden sm:block flex-1 border-b-2 border-dotted border-slate-200 mx-2 min-w-[10px]" />

                    <span className="text-[#2C4A42] font-serif font-bold text-sm sm:text-lg md:text-2xl whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <p className="text-slate-500 text-xs md:text-base leading-relaxed line-clamp-2 sm:line-clamp-1 flex-1">
                      {item.description}
                    </p>

                    {item.tag && (
                      <span className="inline-block self-start sm:self-center px-2 py-0.5 md:px-3 md:py-1 rounded-md border border-[#E6AC6F] text-[#E6AC6F] text-[9px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
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
