"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Pulse Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full blur-xl bg-green-400/40" />

      {/* Main Button */}
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Link
          href="https://wa.me/919473434263"
          target="_blank"
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 shadow-[0_10px_40px_rgba(34,197,94,0.45)] border border-white/20 backdrop-blur-xl overflow-hidden group"
        >
          {/* Shine */}
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute -left-10 top-0 h-full w-8 rotate-12 bg-white/30 blur-md transition-all duration-1000 group-hover:left-20" />
          </span>

          {/* Icon */}
          <MessageCircle
            size={30}
            className="relative z-10 text-white drop-shadow-lg"
          />
        </Link>
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute right-20 bottom-3 hidden md:flex items-center"
      >
        <div className="px-4 py-2 rounded-xl bg-white shadow-2xl border border-gray-200 text-sm font-medium text-gray-700 whitespace-nowrap">
          Chat with us 👋
        </div>
      </motion.div>
    </div>
  );
}
