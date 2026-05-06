"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function IntroLogo() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-orange-200 blur-3xl opacity-40"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <motion.div
            layoutId="logo"
            initial={{
              scale: 0.5,
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{
              scale: 0.35,
              x: -320,
              y: -220,
              opacity: 0.9,
              filter: "blur(2px)",
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="relative z-10"
          >
            <Image src="/pg.png" width={220} height={220} alt="logo" />
          </motion.div>

          <motion.p
            className="absolute bottom-24 text-gray-500 tracking-widest text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            WELCOME STUDENTS
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
