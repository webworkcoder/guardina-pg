"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import FeatureBar from "../shared/FeatureBar";

export const HeroExperience = () => {
  return (
    <>
      <section className="px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/pg1.jpg"
                alt="Guardian Premium Living"
                width={600}
                height={700}
                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="absolute -top-6 -left-4 bg-[#1B5E20] text-white p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg border-b-4 border-white z-10">
              <div className="text-4xl font-bold">12</div>
              <div className="text-xs uppercase tracking-widest leading-tight">
                Years <br />{" "}
                <span className="text-black font-bold">of Trust</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-2 text-[#1B5E20] text-4xl drop-shadow-md">
              <Sparkles />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#1B5E20] uppercase tracking-[0.2em] font-bold text-sm">
                About Guardian
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Where Safety Meets <br />
                <span className="text-[#1B5E20]">Grandeur Living.</span>
              </h2>
            </div>

            <p className="text-slate-500 leading-relaxed max-w-md font-light">
              At Guardian P.G Services, we don&apos;t just provide a room; we
              provide a sanctuary. Our spaces are curated to offer a blend of
              high-end modernity and the warmth of a home, secured by 24/7 elite
              protection.
            </p>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100">
              <div>
                <p className="text-2xl font-bold text-slate-800">85+</p>
                <p className="text-[10px] text-[#1B4332] font-bold uppercase">
                  Luxury Suites
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">10k+</p>
                <p className="text-[10px] text-[#1B4332] font-bold uppercase">
                  Happy Tenants
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">100%</p>
                <p className="text-[10px] text-[#1B4332] font-bold uppercase">
                  Secure Zone
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-12 w-12 rounded-full bg-[#1B4332] flex items-center justify-center text-white font-bold border-2 border-black">
                GS
              </div>
              <div>
                <p className="font-bold text-xl text-slate-800">
                  Guardian Signature
                </p>
                <p className="text-sm text-slate-400 font-medium">
                  Direct Care •{" "}
                  <span className="text-[#1B5E20] font-bold uppercase text-xs">
                    Premium Management
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureBar
        features={[
          "Gourmet Dining",
          "Elite Security 24/7",
          "High-Speed Fiber",
          "Wellness Lounge",
          "Biometric Access",
          "Housekeeping Plus",
        ]}
        duration={15}
      />
    </>
  );
};
