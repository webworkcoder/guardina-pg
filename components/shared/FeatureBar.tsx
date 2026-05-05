/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";

const StarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-8"
  >
    <path
      d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z"
      fill="#E6AC6F"
    />
  </svg>
);

const FeatureBar = ({ features, duration = 20, className = "" }: any) => {
  if (!features || features.length === 0) return null;

  const content = [...features, ...features, ...features];

  return (
    <div
      className={`w-full bg-[#1B5E20] overflow-hidden py-5 my-10 border-y border-white/10 ${className}`}
    >
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
        }}
      >
        {content.map((feature, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-white text-base md:text-lg font-serif font-medium uppercase tracking-[0.2em]">
              {feature}
            </span>
            <StarIcon />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureBar;
