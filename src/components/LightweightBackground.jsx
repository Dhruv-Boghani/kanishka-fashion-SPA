import React, { useEffect, useRef } from "react";

export default function LightweightBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      let scrollY = window.scrollY;
      if (window.lenis) {
        scrollY = window.lenis.scroll;
      }

      // Apply parallax translation to wrappers
      const shapes = containerRef.current.querySelectorAll(".parallax-shape");
      shapes.forEach((shape) => {
        const speed = parseFloat(shape.getAttribute("data-speed") || "0.1");
        const direction = parseFloat(shape.getAttribute("data-dir") || "1");
        const yOffset = scrollY * speed * direction;

        // Only apply translateY here, so inner CSS animations (rotation/floating) are not overridden
        shape.style.transform = `translateY(${-yOffset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    if (window.lenis) {
      window.lenis.on("scroll", handleScroll);
    }

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (window.lenis) {
        window.lenis.off("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-1000">
      {/* Decorative background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-emerald-400/20 dark:bg-emerald-900/20 blur-[100px] md:blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full bg-teal-400/20 dark:bg-teal-900/20 blur-[100px] md:blur-[120px]" />

      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        {/* 1. 3D Sphere */}
        <div
          className="parallax-shape absolute top-[20%] left-[10%] drop-shadow-2xl"
          data-speed="0.15"
          data-dir="1"
        >
          <div
            className="w-24 h-24 md:w-32 md:h-32 rounded-full animate-float-slow"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, rgba(52, 211, 153, 0.9), rgba(6, 78, 59, 0.4))",
              boxShadow:
                "inset -8px -8px 16px rgba(0,0,0,0.3), inset 8px 8px 16px rgba(255,255,255,0.4)",
            }}
          />
        </div>

        {/* 2. 3D Cube / Box */}
        <div
          className="parallax-shape absolute top-[60%] right-[15%] drop-shadow-xl"
          data-speed="0.25"
          data-dir="-0.5"
        >
          <div
            className="w-20 h-20 md:w-28 md:h-28 rounded-2xl rotate-12 animate-float-medium flex items-center justify-center relative backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(45, 212, 191, 0.8), rgba(15, 118, 110, 0.5))",
              boxShadow:
                "inset -6px -6px 12px rgba(0,0,0,0.4), inset 6px 6px 12px rgba(255,255,255,0.4)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Inner detail to make it look more 3D */}
            <div className="absolute inset-2 rounded-xl border border-white/20" />
          </div>
        </div>

        {/* 3. 3D Pyramid / Triangle */}
        <div
          className="parallax-shape absolute top-[15%] right-[25%] drop-shadow-md"
          data-speed="0.1"
          data-dir="1.5"
        >
          <div
            className="w-16 h-16 md:w-24 md:h-24 animate-spin-slow"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              background:
                "linear-gradient(to bottom right, rgba(16, 185, 129, 0.9), rgba(4, 120, 87, 0.6))",
              boxShadow: "inset -5px -5px 10px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        {/* 4. 3D Torus / Donut */}
        <div
          className="parallax-shape absolute bottom-[15%] left-[25%] opacity-80"
          data-speed="0.2"
          data-dir="0.8"
        >
          <div
            className="w-28 h-28 md:w-40 md:h-40 rounded-full border-[16px] md:border-[24px] border-emerald-400/50 dark:border-emerald-600/50 animate-float-fast"
            style={{
              boxShadow:
                "inset 4px 4px 10px rgba(0,0,0,0.2), inset -4px -4px 10px rgba(255,255,255,0.1), 8px 8px 20px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* 5. Minimal Pill Shape */}
        <div
          className="parallax-shape absolute top-[75%] left-[45%] drop-shadow-lg"
          data-speed="0.3"
          data-dir="-1"
        >
          <div
            className="w-12 h-24 md:w-16 md:h-32 rounded-full rotate-45 animate-float-slow flex items-center justify-center p-2"
            style={{
              background:
                "linear-gradient(to bottom, rgba(20, 184, 166, 0.7), rgba(15, 118, 110, 0.3))",
              boxShadow: "inset -4px -4px 8px rgba(0,0,0,0.3)",
            }}
          >
            <div className="w-full h-full rounded-full border-r-2 border-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
