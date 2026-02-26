import React, { useEffect } from "react";
import Lenis from "lenis";
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ReviewSection from "./components/ReviewSection";
import ContactSection from "./components/ContactSection";
import AppLoader from "./components/AppLoader";
import BackgroundModel from "./components/BackgroundModel";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Make lenis accessible globally for the hero section camera rotation
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return (
    <ThemeProvider>
      <AppLoader />
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 relative">
        <BackgroundModel />
        <Navbar />
        <main className="grow relative z-10">
          <HeroSection />
          <AboutSection />
          <ReviewSection />
          <ContactSection />
        </main>

        {/* Simple Footer */}
        <footer className="bg-white/15 dark:bg-slate-950/15 py-12 border-t border-slate-200/50 dark:border-slate-800/50 text-center transition-colors duration-300 backdrop-blur-sm relative z-10">
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
