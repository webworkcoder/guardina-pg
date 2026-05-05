/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const RoomGallery = ({ gallery }: any) => {
  const [activeImage, setActiveImage] = useState("");

  // Gallery initialize logic
  useEffect(() => {
    if (gallery && gallery.length > 0) {
      setActiveImage(gallery[0]);
    }
  }, [gallery]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-h-none md:max-h-[600px]">
      <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto pr-2 custom-scrollbar order-2 md:order-1 h-32 md:h-[600px]">
        {gallery.map((img: string, i: number) => {
          const isActive = activeImage === img;

          return (
            <div
              key={i}
              onClick={() => setActiveImage(img)}
              className={`relative min-w-[140px] md:min-w-full h-full md:h-40 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 border-2 ${
                isActive
                  ? "border-[#1B5E20] z-10 scale-[0.98] shadow-lg shadow-[#1B5E20]/20"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`Room thumbnail ${i}`}
                className="object-cover w-full h-full"
              />

              {/* Active State Indicator */}
              {isActive && (
                <div className="absolute inset-0 bg-[#2C4A42]/5 pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT SIDE: Main Large Display Area */}
      <div className="relative w-full md:w-3/4 aspect-video md:aspect-auto rounded-[1rem] overflow-hidden bg-slate-100 order-1 md:order-2 shadow-2xl shadow-black/5 h-[350px] md:h-[600px]">
        <img
          src={activeImage}
          alt="Main Room View"
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          key={activeImage}
        />
      </div>
    </div>
  );
};
