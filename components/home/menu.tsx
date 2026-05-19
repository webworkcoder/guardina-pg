/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, Clock, Info, CalendarDays } from "lucide-react";
import FeatureBar from "../shared/FeatureBar";

export const Menu = () => {
  const [activeDay, setActiveDay] = useState("Monday");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const weeklyMenu: any = {
    Monday: {
      breakfast: "Pudi, Sabji",
      lunch: "Egg Curry, Chawal",
      dinner: "Tadka, Roti",
    },
    Tuesday: {
      breakfast: "Sada Roti, Sabji",
      lunch: "Chawal, Dal, Bhunjia",
      dinner: "Sattu, Puri, Chutney",
    },
    Wednesday: {
      breakfast: "Plain Paratha, Chana Masala",
      lunch: "Chicken, Chawal",
      dinner: "Sabji (Seasonal), Plain Roti",
    },
    Thursday: {
      breakfast: "Puri Sabji",
      lunch: "Chawal, Curry, Bhunjia, Pickle",
      dinner: "Kheer, Pudi, Sabji",
    },
    Friday: {
      breakfast: "Sada Roti, Sabji",
      lunch: "Chhole, Chawal, Pickle",
      dinner: "Egg Curry, Roti",
    },
    Saturday: {
      breakfast: "Puri, Sabji",
      lunch: "Kheechri, Chokha, Papad, Pickle",
      dinner: "Matar Paneer, Roti",
    },
    Sunday: {
      breakfast: "Aaloo Paratha, Chutney",
      lunch: "Jeera Rice, Chana Dal Tadka, Dum (Seasonal)",
      dinner: "Sabji, Roti",
    },
  };

  const mealImages: any = {
    Monday: {
      breakfast:
        "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHVyaSUyMFNhYmppfGVufDB8fDB8fHww",
      lunch:
        "https://images.unsplash.com/photo-1764315197254-94385571df22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWdnJTIwQ3VycnklMkMlMjBDaGF3YWx8ZW58MHx8MHx8fDA%3D",
      dinner:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600", // Dal Tadka Roti
    },
    Tuesday: {
      breakfast:
        "https://images.unsplash.com/photo-1601387434127-20979856e76e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fFNhZGElMjBSb3RpJTJDJTIwU2Fiaml8ZW58MHx8MHx8fDA%3D",
      lunch:
        "https://images.unsplash.com/photo-1575526854473-e85fdba07b7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZvb2QlMjBEYWwlMjBDaGF3YWwlMjB0aGFsaXxlbnwwfHwwfHx8MA",
      dinner:
        "https://images.unsplash.com/photo-1643892467625-65df6a500524?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2F0dHUlMkMlMjBQdXJpJTJDJTIwQ2h1dG5leXxlbnwwfHwwfHx8MA%3D%3D",
    },
    Wednesday: {
      breakfast:
        "https://images.unsplash.com/photo-1722239312666-84328fce4c6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBsYWluJTIwUGFyYXRoYSUyQyUyMENoYW5hJTIwTWFzYWxhfGVufDB8fDB8fHww",
      lunch:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpY2tlbiUyQyUyMENoYXdhbHxlbnwwfHwwfHx8MA%3D%3D",
      dinner:
        "https://images.unsplash.com/photo-1591266123515-46149ea0b0a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBsYWluJTIwUm90aXxlbnwwfHwwfHx8MA%3D%3D",
    },
    Thursday: {
      breakfast:
        "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHVyaSUyMFNhYmppfGVufDB8fDB8fHww",
      lunch:
        "https://images.unsplash.com/photo-1737266320454-01473449e4f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fENoYXdhbCUyQyUyMEN1cnJ5JTJDfGVufDB8fDB8fHww",
      dinner:
        "https://images.unsplash.com/photo-1588461123433-6e389a38b54a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1pbGslMjByaWNlfGVufDB8fDB8fHww",
    },
    Friday: {
      breakfast:
        "https://images.unsplash.com/photo-1599232288126-7dbd2127db14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2FkYSUyMFJvdGl8ZW58MHx8MHx8fDA%3D",
      lunch:
        "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      dinner:
        "https://images.unsplash.com/photo-1661588669110-81142a5b9e57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWdnJTIwQ3VycnklMkMlMjBSb3RpfGVufDB8fDB8fHww",
    },
    Saturday: {
      breakfast:
        "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHVyaSUyMFNhYmppfGVufDB8fDB8fHww",
      lunch:
        "https://images.unsplash.com/photo-1609570324378-ec0c4c9b6ba8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWl4ZWQlMjBmcmllZCUyMHJpY2UlMjBmb29kfGVufDB8fDB8fHww",
      dinner:
        "https://images.unsplash.com/photo-1551881192-002e02ad3d87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhbmVlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    Sunday: {
      breakfast:
        "https://images.unsplash.com/photo-1708782343717-be4ea260249a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWFsb28lMjBQYXJhdGhhJTJDJTIwQ2h1dG5leXxlbnwwfHwwfHx8MA%3D%3D",
      lunch:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600", // Jeera Rice Dal Tadka
      dinner:
        "https://images.unsplash.com/photo-1600935926387-12d9b03066f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNhYmppJTJDJTIwUm90aXxlbnwwfHwwfHx8MA%3D%3D",
    },
  };

  return (
    <>
      <section className="py-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03] z-0">
          <h1 className="text-[3rem] md:text-[10rem] font-bold text-[#1B5E20] uppercase tracking-tighter leading-none whitespace-nowrap">
            WEEKLY MENU
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12 space-y-4">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#1B5E20] p-3 rounded-full text-white shadow-xl">
                <UtensilsCrossed size={28} />
              </div>
              <span className="text-[#1B5E20] uppercase tracking-[0.4em] font-bold text-xs md:text-sm">
                Guardian Kitchen Schedule
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Fresh Meals <span className="text-[#1B5E20]">Every Day</span>
            </h2>
          </div>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-2 cursor-pointer rounded-full font-bold transition-all duration-300 text-sm md:text-base border ${
                  activeDay === day
                    ? "bg-[#1B5E20] text-white border-[#1B5E20] shadow-lg scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#1B5E20] hover:text-[#1B5E20]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            >
              <MealCard
                type="Breakfast"
                menu={weeklyMenu[activeDay].breakfast}
                time="07:00 AM - 09:00 AM"
                image={mealImages[activeDay].breakfast}
                quantity={
                  activeDay === "Sunday"
                    ? "2 pics."
                    : activeDay === "Monday" || activeDay === "Saturday"
                      ? "6 pics."
                      : "4 pics."
                }
              />
              <MealCard
                type="Lunch"
                menu={weeklyMenu[activeDay].lunch}
                time="01:00 PM - 03:00 PM"
                image={mealImages[activeDay].lunch}
                quantity={
                  activeDay === "Wednesday" || activeDay === "Monday"
                    ? "2 pics. (Chicken/Egg)"
                    : "Full Plate"
                }
              />
              <MealCard
                type="Dinner"
                menu={weeklyMenu[activeDay].dinner}
                time="07:30 PM - 09:30 PM"
                image={mealImages[activeDay].dinner}
                quantity={
                  activeDay === "Tuesday"
                    ? "8 pics. (Sattoo Puri)"
                    : "Full Plate"
                }
              />
            </motion.div>
          </AnimatePresence>

          {/* Bottom Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-slate-100">
            <div className="flex gap-5 items-start">
              <div className="bg-white p-4 rounded-full text-[#1B5E20] shadow-sm flex-shrink-0">
                <CalendarDays size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900 mb-3 font-serif">
                  Detailed Quantity
                </h4>
                <div className="text-slate-600 text-sm space-y-2">
                  <p>
                    <strong>Breakfast:</strong> Plain Roti (4), Pudi (6), or
                    Aaloo Pratha (2)
                  </p>
                  <p>
                    <strong>Lunch & Dinner:</strong> Chicken/Egg (2 pcs), Sattoo
                    Puri (8), or Puri (10)
                  </p>
                </div>
              </div>
            </div>

            <div className="  flex gap-5 items-start">
              <div className="bg-white p-4 rounded-full text-[#2C4A42] shadow-sm flex-shrink-0">
                <Info size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900 mb-3 font-serif">
                  Note
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Vegetarian residents have separate arrangements on non-veg
                  days. All meals are prepared using hygienic methods and fresh
                  produce.
                </p>
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

const MealCard = ({ type, menu, time, image, quantity }: any) => (
  <div className="group border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
    <div className="relative h-48 overflow-hidden">
      <Image
        src={image}
        alt={type}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#2C4A42]">
        {type}
      </div>
    </div>
    <div className="px-6 py-6 flex flex-col flex-grow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-[#1B5E20] font-bold text-xs">
          <Clock size={16} />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-1 bg-[#1B5E20] text-white px-3 py-1 rounded-lg text-[10px] font-bold">
          Quantity
          <span>{quantity}</span>
        </div>
      </div>
      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
        {menu}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mt-auto border-t border-slate-50 pt-4">
        Freshly prepared and served hot in our common dining area.
      </p>
    </div>
  </div>
);
