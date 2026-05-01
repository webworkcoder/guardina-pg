"use client";
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FacilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
  onMouseEnter: () => void;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({
  icon: Icon,
  title,
  description,
  isActive,
  onMouseEnter,
}) => {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-2xl border transition-all duration-700 cursor-default overflow-hidden ${
        isActive
          ? "bg-[#2C4A42] border-[#2C4A42] text-white shadow-2xl"
          : "bg-white border-slate-100 text-slate-900 shadow-sm"
      }`}
    >
      <div
        className={`absolute -top-4 -right-4 opacity-10 transition-all duration-700 ${
          isActive ? "opacity-20 scale-125 text-white" : "text-slate-900"
        }`}
      >
        <Icon size={120} strokeWidth={1} />
      </div>

      <div className="relative z-10 space-y-4">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700 ${
            isActive ? "bg-white/10" : "bg-orange-50"
          }`}
        >
          <Icon
            className={`w-8 h-8 transition-all duration-700 ${
              isActive ? "text-white rotate-[15deg]" : "text-orange-500"
            }`}
          />
        </div>

        <h3
          className={`text-xl font-serif font-bold tracking-tight transition-colors duration-700 ${
            isActive ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm leading-relaxed transition-colors duration-700 ${
            isActive ? "text-white/70" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};
