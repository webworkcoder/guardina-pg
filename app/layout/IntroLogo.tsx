"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function IntroLogo() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1800); // thoda slow = smoother feel

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
         
          <motion.div
            className="absolute w-[280px] h-[280px] rounded-full bg-orange-200 opacity-30 blur-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

         
          <motion.div
            layoutId="logo"
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.5,
              x: "-35vw",
              y: "-35vh",
              opacity: 0.95,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1], 
            }}
            className="relative z-10 will-change-transform"
          >
            <Image src="/pg.png" width={180} height={180} alt="logo" priority />
          </motion.div>

      
          <motion.p
            className="absolute bottom-20 text-gray-500 tracking-widest text-xs"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            WELCOME STUDENTS
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
