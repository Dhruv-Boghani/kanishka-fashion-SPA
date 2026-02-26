import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const text = "KANISHKA".split("");

  // Different animation styles for each letter
  const animations = [
    { initial: { y: -200, opacity: 0 }, animate: { y: 0, opacity: 1 } }, // K drop from top
    { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 } }, // A zoom
    { initial: { x: -200, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // N slide left
    {
      initial: { rotate: -180, opacity: 0 },
      animate: { rotate: 0, opacity: 1 },
    }, // I rotate
    { initial: { y: 200, opacity: 0 }, animate: { y: 0, opacity: 1 } }, // S rise
    { initial: { scale: 2, opacity: 0 }, animate: { scale: 1, opacity: 1 } }, // H shrink
    { initial: { x: 200, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // K slide right
    {
      initial: { rotateY: 90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
    }, // A flip
  ];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden"
        >
          {/* Background Glow */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]"
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex space-x-2 text-6xl md:text-8xl font-black uppercase tracking-tight">
              {text.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={animations[index].initial}
                  animate={animations[index].animate}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-[0_0_25px_rgba(52,211,153,0.5)]"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-6 text-xl tracking-[0.5em] text-slate-400 uppercase"
            >
              Fashion
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
