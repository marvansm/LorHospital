"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const InitialLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#009EE2]"
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="relative w-[240px] h-[80px]"
            >
              <Image
                src="/images/whiteLogo.png"
                alt="Lor Hospital Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            <div className="w-[200px] h-[3px] bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-white"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/80 font-inter text-[14px] tracking-widest uppercase"
            >
              Yüklənir...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
