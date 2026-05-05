"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

interface LocationInfoProps {
  address?: string;
  phone?: string;
  email?: string;
  timing?: string;
  mapUrl?: string;
  variant?: "simple" | "card";
}

export const LocationInfo = ({
  address = "Building name- Big Daddy, A-1, Rd Number 5C, Boring Rd, Block - A, North Sri Krishna Puri, Patna, Bihar 800013",
  phone = "+91 98765 43210",
  email = "info@guardianpg.in",
  timing = "Open 24/7",
  mapUrl = "https://www.google.com/maps?q=Building+name-+Big+Daddy,+A-1,+Rd+Number+5C,+Boring+Rd,+Patna",
  variant = "simple",
}: LocationInfoProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const items = [
    { icon: MapPin, label: "Address", value: address, link: mapUrl },
    { icon: Phone, label: "Phone", value: phone, link: `tel:${phone}` },
    { icon: Mail, label: "Email", value: email, link: `mailto:${email}` },
    { icon: Clock, label: "Timing", value: timing, link: null },
  ];

  if (variant === "card") {
    return (
      <div className="w-full space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                whileHover={{ y: -8 }}
                className={`relative p-8 rounded-[2rem] border transition-all duration-700 cursor-default overflow-hidden flex flex-col items-center text-center justify-center ${
                  isActive
                    ? "bg-[#1B5E20] border-[#1B5E20] text-white shadow-2xl"
                    : "bg-white border-slate-100 text-slate-900 shadow-sm"
                }`}
              >
                <div
                  className={`absolute -top-6 -right-6 opacity-10 transition-all duration-700 pointer-events-none ${
                    isActive
                      ? "opacity-20 scale-125 text-white"
                      : "text-slate-200"
                  }`}
                >
                  <Icon size={160} strokeWidth={1} />
                </div>

                <div className="relative z-10 flex flex-col items-center space-y-6">
                  <div
                    className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-700 ${
                      isActive ? "bg-white/10" : "bg-slate-50"
                    }`}
                  >
                    <Icon
                      className={`w-10 h-10 transition-all duration-700 ${
                        isActive
                          ? "text-white rotate-[15deg]"
                          : "text-[#2C4A42]"
                      }`}
                    />
                  </div>

                  <div className="space-y-3">
                    <h3
                      className={`text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-700 ${
                        isActive ? "text-white/60" : "text-slate-400"
                      }`}
                    >
                      {item.label}
                    </h3>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xl font-serif font-bold leading-relaxed transition-colors duration-700 block hover:underline flex items-center justify-center gap-2 ${
                          isActive ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.value}
                        <ExternalLink
                          size={18}
                          className="opacity-50 flex-shrink-0"
                        />
                      </a>
                    ) : (
                      <p
                        className={`text-xl font-serif font-bold transition-colors duration-700 ${
                          isActive ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full Width Clickable Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[450px] overflow-hidden relative shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5146824838634!2d85.10938167539556!3d25.621795077434947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed582e98ff8241%3A0x5c75a28155adbd93!2sGuardian%20Boy&#39;s%20Hostel%20%26%20PG%20%7C%20Best%20Hostel%20%26%20PG%20in%20Boring%20Road%20Patna!5e0!3m2!1sen!2sin!4v1714850000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>

          {/* Floating "Open in Maps" Button */}
          <div className="absolute bottom-6 right-6 z-20">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1B5E20] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-xl hover:bg-black transition-all font-bold text-sm"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-4 text-slate-600 group"
          >
            <div className="text-[#2C4A42] p-2 bg-slate-50 rounded-lg group-hover:bg-[#2C4A42] group-hover:text-white transition-all">
              <Icon size={18} />
            </div>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base hover:text-[#2C4A42] transition-colors font-medium"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-sm md:text-base font-medium">
                {item.value}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
