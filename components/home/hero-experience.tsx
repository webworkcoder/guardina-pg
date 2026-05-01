"use client";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import FeatureBar from "../shared/FeatureBar";

export const HeroExperience = () => {
  return (
    <>
      <section className="container mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image with Badge */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/pg1.jpg"
                alt="Hotel Receptionist"
                width={600}
                height={700}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="absolute -top-6 -left-4 bg-[#1B4332] text-white p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg">
              <div className="text-4xl font-bold">16</div>
              <div className="text-xs uppercase tracking-widest leading-tight">
                Years <br /> <span className="opacity-70">of Services</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-2 text-orange-400 text-4xl">
              <SparklesIcon />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-orange-500 uppercase tracking-[0.2em] font-semibold text-sm">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                Luxurious Comfort, <br /> Timeless Elegance Awaits
              </h2>
            </div>

            <p className="text-slate-500 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100">
              <div>
                <div className="text-2xl font-bold text-slate-800">50+</div>
                <div className="text-xs text-slate-400 uppercase">
                  Luxury Rooms
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">60,000+</div>
                <div className="text-xs text-slate-400 uppercase">
                  Happy Guests
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">99%</div>
                <div className="text-xs text-slate-400 uppercase">
                  Guest Satisfaction
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="pt-4">
              <div className="font-serif text-2xl text-slate-800">
                Jenny Alexander
              </div>
              <p className="text-sm text-slate-400">
                Jenny Alexander • <span className="text-orange-500">Owner</span>
              </p>
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
