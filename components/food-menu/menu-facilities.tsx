"use client";
import React, { useState } from "react";
import { Utensils, Waves, Wifi, Sparkles, Car, Dumbbell } from "lucide-react";
import { FacilityCard } from "../shared/FacilityCard";
import FeatureBar from "../shared/FeatureBar";

export const MenuFacilities = () => {
  // Default 0 index active rahega
  const [activeIndex, setActiveIndex] = useState(0);

  const facilitiesData = [
    {
      icon: Utensils,
      title: "Breakfast Included",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      icon: Wifi,
      title: "High Speed Wifi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      icon: Sparkles,
      title: "Spa & Wellness",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      icon: Car,
      title: "Pick Up & Drop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      icon: Dumbbell,
      title: "Fitness Hub",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ];

  return (
    <>
      <section className="py-10 relative overflow-hidden">
        <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03]">
          <h1 className="text-[3rem] md:text-[10rem] font-bold text-slate-900 uppercase tracking-tighter leading-none">
            FACILITIES
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          <div className="mb-16 space-y-3">
            <div className="flex items-center gap-2">
              <div className="text-[#2C4A42]">
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
              <span className="text-orange-500 uppercase tracking-[0.3em] font-bold text-sm">
                Menu Facilities
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Relax with Premium Facilities
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
      {/* <FeatureBar
        features={[
          "Breakfast Included",
          "Swimming Pool",
          "High Speed Wifi",
          "Spa & Wellness",
        ]}
        duration={10}
      /> */}
    </>
  );
};
