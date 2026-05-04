/* eslint-disable @next/next/no-img-element */
"use client";
import FeatureBar from "../shared/FeatureBar";

export const DiningSection = () => {
  return (
    <>
      <section className="py-10 relative overflow-hidden">
        <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none">
          <h1 className="text-[3rem] md:text-[10rem] font-bold text-slate-200/40 uppercase tracking-tighter leading-none whitespace-nowrap">
            Dining
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          {/* Header Content */}
          <div className="text-center mb-16 space-y-4">
            <div className="flex justify-center mb-4">
              <div className="text-[#2C4A42] opacity-80">
                {/* Your Star SVG Icon */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <span className="text-orange-500 uppercase tracking-[0.4em] font-bold text-xs">
              Fine Dining Experience
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 font-medium max-w-3xl mx-auto leading-tight">
              An Enchanting Blend of Taste and Elegance Awaits
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Experience culinary excellence where every dish tells a story of
              tradition, passion, and the finest local ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {/* Main Large Image */}
            <div className="h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src="/pg2.jpg"
                alt="Dining Service"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-6 h-full">
              <div className="h-[290px] rounded-[2rem] overflow-hidden shadow-xl">
                <img
                  src={"/pg1.jpg"}
                  alt="Couple Dining"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[290px] rounded-[2rem] overflow-hidden shadow-xl">
                <img
                  src={"/pg2.jpg"}
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
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
