"use client";
import React, { useState } from "react";
import { Utensils, Waves, Wifi, Sparkles, Car, Dumbbell } from "lucide-react";
import { FacilityCard } from "../shared/FacilityCard";
import FeatureBar from "../shared/FeatureBar";

export const Facilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const facilitiesData = [
  {
    icon: Utensils,
    title: "Healthy Daily Meals",
    description:
      "Enjoy fresh, hygienic and home-style meals prepared daily to keep you energized and focused.",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description:
      "Stay connected with fast and reliable internet, perfect for online classes, study and entertainment.",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description:
      "Regular cleaning and maintenance to ensure a neat, comfortable and hassle-free living space.",
  },
  {
    icon: Car,
    title: "Easy Transport Access",
    description:
      "Convenient location with quick access to colleges, coaching centers and public transport.",
  },
  {
    icon: Dumbbell,
    title: "Study-Friendly Environment",
    description:
      "Peaceful and distraction-free atmosphere designed to help you focus and perform your best.",
  },
  {
    icon: Waves,
    title: "Safe & Secure Living",
    description:
      "24/7 security with controlled access, ensuring a safe and worry-free stay for students.",
  },
];

  return (
    <>
      <section className="py-10 relative overflow-hidden">
        <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03]">
          <h1 className="text-[3rem] md:text-[10rem] font-bold text-slate-900 uppercase tracking-tighter leading-none">
               Facilities
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          <div className="mb-16 space-y-3">
            <div className="flex items-center gap-2">
              <div className="text-[#1B5E20]">
                <svg
                  width="40"
                  height="18"
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
              <span className="text-[#1B5E20] uppercase tracking-[0.3em] font-bold text-sm">
                 Our Facilities
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Comfortable Living for Students
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesData.map((item, index) => (
              <FacilityCard
                key={index}
                {...item}
                isActive={activeIndex === index}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}
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
