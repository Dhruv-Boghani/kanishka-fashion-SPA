import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time (e.g., waiting for assets, network requests)
    // We'll hide the loader after 2.5 seconds to let the animation play out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1], // Custom refined easing curve (like Lenis)
            },
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
        >
          {/* Subtle Background Glow Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

          {/* Logo Container */}
          <div className="overflow-hidden relative z-10 flex flex-col items-center">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1], // Deceleration curve
                delay: 0.2,
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-500 tracking-tighter uppercase drop-shadow-[0_0_25px_rgba(52,211,153,0.3)]"
            >
              Kanishka
            </motion.h1>

            <div className="overflow-hidden mt-2 relative">
              {/* Animated line behind the text */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="absolute top-1/2 left-0 h-px bg-slate-700 w-full -z-10"
              />
              <motion.p
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.4,
                }}
                className="text-xl md:text-2xl font-light tracking-[0.4em] text-slate-400 bg-slate-950 px-4 uppercase"
              >
                Fashion
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
