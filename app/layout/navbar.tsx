/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { id: "1", label: "Home", path: "/" },
  { id: "2", label: "About", path: "/about" },
  { id: "3", label: "Rooms", path: "/rooms" },
  { id: "4", label: "Booking", path: "/booking" },
  { id: "5", label: "Food Menu", path: "/food-menu" },
  { id: "6", label: "Contact", path: "/contact" },
];

// Drawer animation
const menuVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.3 },
  },
};

// Overlay fade
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Menu item animation
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between p-3 px-4 md:px-8 bg-gradient-to-r from-white via-yellow-50 to-orange-50 sticky top-0 z-30">
      {/* Logo */}
      <Link href={"/"}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image src="/pg.png" height={160} width={120} alt="logo" />
        </motion.div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        {data.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={item.path}
              className={`transition ${
                pathname === item.path
                  ? "text-[#13540c] font-semibold"
                  : "text-gray-800 hover:text-[#13540c]"
              }`}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Desktop CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-2 rounded-full hidden lg:block
        bg-gradient-to-r from-green-300 to-green-500
        text-black font-semibold shadow-sm"
      >
        Book Now
      </motion.button>

      {/* Mobile Icon */}
      <Menu
        size={26}
        className="lg:hidden cursor-pointer"
        onClick={() => setOpen(true)}
      />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50">
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              variants={menuVariants as any}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 top-0 h-full w-[100%] 
              bg-gradient-to-br from-white via-yellow-50 to-orange-50
              shadow-2xl border-r border-gray-200 z-50"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <Image src="/pg.png" height={160} width={120} alt="logo" />
                <X
                  size={26}
                  className="cursor-pointer bg-[#13540C] text-white rounded-full p-1"
                  onClick={() => setOpen(false)}
                />
              </div>

              {/* Menu Items */}
              <div className="flex flex-col items-center justify-center h-[70%] gap-8 text-3xl italic">
                {data.map((item, i) => (
                  <motion.div
                    key={item.id}
                    custom={i}
                    variants={itemVariants as any}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={`${
                        pathname === item.path
                          ? "text-[#13540c] font-semibold"
                          : "text-gray-700 hover:text-[#13540c]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex justify-center px-4 pb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full w-full
                  bg-gradient-to-r from-green-300 to-green-500
                  text-black font-semibold shadow-md"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
