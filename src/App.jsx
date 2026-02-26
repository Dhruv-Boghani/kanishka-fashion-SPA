import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ReviewSection from "./components/ReviewSection";
import ContactSection from "./components/ContactSection";
import AppLoader from "./components/AppLoader";

function App() {
  return (
    <ThemeProvider>
      <AppLoader />
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ReviewSection />
          <ContactSection />
        </main>

        {/* Simple Footer */}
        <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800 text-center transition-colors duration-300">
          <p className="text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Kanishka Fashion. All rights
            reserved.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
