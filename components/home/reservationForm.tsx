"use client";
import React from "react";
import Image from "next/image";
import { Calendar, ChevronDown } from "lucide-react";
import FeatureBar from "../shared/FeatureBar";

export const ReservationForm = () => {
  return (
    <>
      <section className="py-10 relative overflow-hidden">
        {/* Background Ghost Text - Hidden on mobile for cleaner look */}
        <div className="absolute top-10 left-0 w-full hidden md:flex justify-center pointer-events-none select-none opacity-[0.03] z-0">
          <h1 className="text-[3rem] lg:text-[10rem] font-bold text-slate-900 uppercase tracking-tighter leading-none whitespace-nowrap">
            Contact US
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-6 flex justify-center items-center opacity-60">
                <svg viewBox="0 0 100 20" className="w-full h-full">
                  <path
                    d="M0 10 Q 25 0 50 10 T 100 10"
                    fill="none"
                    stroke="#E6AC6F"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="text-[#E6AC6F] uppercase tracking-[0.4em] font-bold text-xs md:text-sm">
                Make a Reservation
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] max-w-3xl mx-auto leading-tight">
              Book Your Stay and Enjoy Exceptional Comfort
            </h2>
          </div>

          {/* Main Card */}
          <div className="rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Form Fields Side */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 md:gap-y-7 order-2 lg:order-1">
                {/* Field Wrapper for consistent spacing */}
                {[
                  {
                    label: "Your Name *",
                    placeholder: "Ex. John Doe",
                    type: "text",
                  },
                  {
                    label: "Phone Number *",
                    placeholder: "Enter Phone Number",
                    type: "tel",
                  },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-2.5">
                    <label className="text-[13px] font-bold text-[#1A1A1A] ml-1 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-6 py-4.5 rounded-2xl bg-[#F8FAFC] border border-slate-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2C4A42]/10 focus:border-[#2C4A42]/30 transition-all text-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                ))}

                {/* Date Fields */}
                {[
                  { label: "Check-in Date *", placeholder: "23/01/2026" },
                  { label: "Check-out Date *", placeholder: "26/01/2026" },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-2.5">
                    <label className="text-[13px] font-bold text-[#1A1A1A] ml-1 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        className="w-full px-6 py-4.5 rounded-2xl bg-[#F8FAFC] border border-slate-100 focus:outline-none focus:bg-white focus:border-[#2C4A42]/30 transition-all text-slate-700 cursor-pointer"
                      />
                      <Calendar
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2C4A42] transition-colors"
                        size={20}
                      />
                    </div>
                  </div>
                ))}

                {/* Select Fields */}
                {[
                  {
                    label: "Adult *",
                    options: ["1 Adult", "2 Adults", "3 Adults"],
                  },
                  {
                    label: "Children *",
                    options: ["None", "1 Child", "2 Children"],
                  },
                  {
                    label: "Room Type *",
                    options: ["Deluxe Room", "Suite", "Family Room"],
                  },
                  {
                    label: "Number of Rooms *",
                    options: ["1 Room", "2 Rooms", "3 Rooms"],
                  },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-2.5">
                    <label className="text-[13px] font-bold text-[#1A1A1A] ml-1 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <div className="relative group">
                      <select className="w-full px-6 py-4.5 rounded-2xl bg-[#F8FAFC] border border-slate-100 appearance-none focus:outline-none focus:bg-white focus:border-[#2C4A42]/30 transition-all text-slate-600 cursor-pointer">
                        <option value="">Select</option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-[#2C4A42]"
                        size={20}
                      />
                    </div>
                  </div>
                ))}

                <div className="md:col-span-2 pt-4">
                  <button className="bg-[#2C4A42] text-white px-8 py-3  rounded-full  hover:bg-[#1f352f] transition-all shadow-xl text-sm md:text-base uppercase tracking-widest w-full">
                    Book Now
                  </button>
                </div>
              </form>

              {/* Image Side - Order 1 on mobile to stay on top */}
              <div className="relative h-[400px] md:h-[550px] lg:h-full min-h-[450px] rounded-[2rem] overflow-hidden group order-1 lg:order-2">
                <Image
                  src="/pg2.jpg"
                  alt="Hospitality Staff"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Badges Layout - Optimized for mobile wrap */}
                <div className="absolute bottom-8 left-6 right-6 flex flex-wrap gap-2.5">
                  {[
                    "Breakfast Included",
                    "Swimming Pool",
                    "WiFi",
                    "Spa & Wellness",
                    "Pick Up & Drop",
                    "Fitness Hub",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 backdrop-blur-xl text-white text-[11px] font-medium px-4 py-2 rounded-full border border-white/20 whitespace-nowrap hover:bg-white hover:text-[#1A1A1A] transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Decorative Sparkle */}
                <div className="absolute top-8 right-8 animate-pulse">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 40 40"
                    fill="#E6AC6F"
                    className="drop-shadow-lg"
                  >
                    <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .py-4.5 {
            padding-top: 1.125rem;
            padding-bottom: 1.125rem;
          }
        `}</style>
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
