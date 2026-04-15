import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group transition-transform hover:scale-105 active:scale-95"
            onClick={scrollToTop}
          >
            <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white uppercase leading-none group-hover:text-emerald-500 transition-colors">
              Kanishka <br />
              <span className="text-emerald-500 text-lg font-light tracking-widest lowercase">
                Fashion
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#reviews"
                className="text-slate-600 hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400 font-medium transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400 font-medium transition-colors"
              >
                Connect Us
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
