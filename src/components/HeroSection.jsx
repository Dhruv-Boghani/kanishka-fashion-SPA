import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

// Antigravity Animation Config
const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatingAnimationDelayed = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 4,
      delay: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-10 overflow-hidden flex items-center justify-center bg-transparent transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Abstract Elements */}
      <motion.div
        {...floatingAnimation}
        className="hidden lg:block absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl opacity-60 backdrop-blur-md"
      />
      <motion.div
        {...floatingAnimationDelayed}
        className="hidden lg:block absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-full opacity-60 backdrop-blur-md"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6 lg:space-y-8"
          >
            <div className="space-y-4 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wide uppercase">
                Always New Collection
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Redefine Your <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
                  Elegance
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg font-light leading-relaxed mx-auto lg:mx-0">
                Discover the perfect blend of modern fashion and timeless style.
                Step into complete comfort crafted specifically for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20 dark:shadow-emerald-500/20">
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </button>
            </div>
          </motion.div>

          {/* 3D Model Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            {...floatingAnimation}
            className="hidden lg:flex w-full h-[350px] sm:h-[450px] lg:h-[700px] relative items-center justify-center group perspective mt-4 lg:mt-0"
          >
            {/* The actual placeholder container */}
            <div className="w-full h-full relative rounded-[2.5rem] bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700 shadow-2xl shadow-slate-300/50 dark:shadow-slate-900/50 overflow-hidden flex flex-col items-center justify-center">
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent pointer-events-none" />

              <span className="text-slate-400 dark:text-slate-500 font-medium text-base lg:text-lg flex flex-col items-center gap-3 lg:gap-4">
                <span className="p-3 lg:p-4 rounded-full bg-slate-100 dark:bg-slate-800 shadow-inner">
                  <ShoppingBag className="w-8 h-8 lg:w-10 lg:h-10 text-emerald-500 opacity-50" />
                </span>
                3D Model Canvas Placeholder
              </span>

              <p className="text-xs lg:text-sm text-slate-400 dark:text-slate-500 absolute bottom-6 lg:bottom-10 max-w-[80%] text-center">
                React Three Fiber component will be rendered here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
