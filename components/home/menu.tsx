"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";
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
        {/* Background Decorative Text */}
        <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.04] z-0">
          <h1 className="text-[5rem] md:text-[12rem] font-bold text-[#1B4332] uppercase tracking-tighter leading-none whitespace-nowrap">
            PREMIUM DINING
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#1B5E20] p-3 rounded-full text-white shadow-lg">
                <UtensilsCrossed size={24} />
              </div>
              <span className="text-[#1B5E20] uppercase tracking-[0.4em] font-bold text-xs md:text-sm">
                Guardian Kitchen
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight max-w-3xl mx-auto">
              Nourishing Excellence, <br />
              <span className="text-[#1B5E20]">Every Single Day.</span>
            </h2>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
            {menuData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-row items-center gap-4 md:gap-8 group rounded-2xl transition-colors"
              >
                {/* Image Container with Border Accent */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border-2 border-transparent transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg md:text-2xl font-bold text-[#1B5E20] truncate">
                      {item.title}
                    </h3>
                    <div className="hidden sm:block flex-1 border-b border-dashed border-slate-200 mx-3 min-w-[20px]" />
                    <span className="text-[#1B5E20] font-bold text-sm md:text-xl whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>

                  <p className="text-slate-500 text-sm md:text-base mb-3 line-clamp-1">
                    {item.description}
                  </p>

                  {item.tag && (
                    <span className="inline-block px-3 py-1 rounded-full bg-[#1B4332]/5 border border-[#1B4332]/10 text-[#1B5E20] text-[10px] font-bold uppercase tracking-widest">
                      {item.tag}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Matching Feature Bar */}
      <FeatureBar
        features={[
          "Hygenic Kitchen",
          "Zero Preservatives",
          "Chef Curated",
          "Seasonal Specials",
          "Nutrition Focused",
          "Timely Service",
        ]}
        duration={12}
      />
    </>
  );
};
