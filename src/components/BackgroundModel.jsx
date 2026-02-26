import React, { useEffect, useRef, useState } from "react";
import { ShoppingBag } from "lucide-react";

export default function BackgroundModel() {
  const iframeRef = useRef(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    // 1. Load Sketchfab API script dynamically
    let script = document.getElementById("sketchfab-api-script");
    if (!script) {
      script = document.createElement("script");
      script.id = "sketchfab-api-script";
      script.src =
        "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const initSketchfab = () => {
      if (!window.Sketchfab || !iframeRef.current) return;

      const client = new window.Sketchfab("1.12.1", iframeRef.current);
      // const uid = "82d8abf4572549dfaa4ad8fadfa1b1eb"; // The user-provided Sketchfab model UID
      const uid = "05bb044712cb4b56b05e042e37d3fba3"; // The new user-provided Sketchfab model UID

      client.init(uid, {
        success: function onSuccess(api) {
          api.start();

          api.addEventListener("viewerready", function () {
            setIsModelLoaded(true);

            // Get animations
            api.getAnimations(function (err, animations) {
              if (!err && animations && animations.length > 0) {
                // Assuming anim 0 is walk and anim 1 is idle/fix
                const walkAnim = animations[0] ? animations[0][0] : null;
                const idleAnim =
                  animations.length > 1 ? animations[1][0] : animations[0][0];

                if (walkAnim) {
                  // Play the walk animation first
                  api.setCurrentAnimationByUID(walkAnim, () => {
                    api.play();
                  });

                  // Listen for when it ends (works best if the walk anim is not looping on sketchfab side)
                  // If it loops infinitely on sketchfab, this event may not fire. We will also add a hard timeout.
                  api.addEventListener("animationEnded", () => {
                    if (idleAnim) {
                      api.setCurrentAnimationByUID(idleAnim, () => {
                        api.play();
                      });
                    }
                  });

                  // Force switch to the "fix" (idle) animation after exactly 1 cycle (approx 1.5 - 2 seconds for a standard walk cycle).
                  // Setting to 2.5 seconds to be safe before enforcing the switch.
                  setTimeout(() => {
                    if (idleAnim) {
                      api.setCurrentAnimationByUID(idleAnim, () => {
                        api.play();
                      });
                    }
                  }, 2500);
                }
              }
            });

            // Camera setup and Scroll interaction
            const target = [0, 0, 0.8]; // Look higher on the model to naturally push it down
            const radius = 6; // Increased distance to make the model smaller

            // Initial camera set: Pan slightly down and zoom in
            // Set the initial camera slightly higher (Z=2) to look down at the target
            api.setCameraLookAt([0, -radius, 2], target, 0.5);

            // Integrate with Lenis
            const handleScroll = () => {
              if (!window.lenis) return;

              const maxScroll = Math.max(
                document.body.scrollHeight - window.innerHeight,
                1,
              );
              const progress = window.lenis.scroll / maxScroll;

              // Calculate angle based on progress (e.g. 1.5 rotations over the whole page)
              const rotations = 1.5;
              const angle = progress * Math.PI * 2 * rotations;

              // Orbiting camera
              const camX = Math.sin(angle) * radius;
              const camY = -Math.cos(angle) * radius;
              // Slightly raise the camera as we scroll so the model appears lower on screen
              // Start Z higher so we look at an angle slightly more from above
              const camZ = 2 + progress * 2;

              api.setCameraLookAt([camX, camY, camZ], target, 0);
            };

            window.addEventListener("scroll", handleScroll);
            if (window.lenis) {
              window.lenis.on("scroll", handleScroll);
            }

            // Cleanup listener on unmount
            iframeRef.current.cleanupScroll = () => {
              window.removeEventListener("scroll", handleScroll);
              if (window.lenis) {
                window.lenis.off("scroll", handleScroll);
              }
            };
          });
        },
        error: function onError() {
          console.error("Sketchfab API initialization error");
        },
        // Initialization parameters
        autostart: 1,
        transparent: 1, // Crucial for background blending
        ui_animations: 0,
        ui_infos: 0,
        ui_stop: 0,
        ui_inspector: 0,
        ui_watermark_link: 0,
        ui_watermark: 0,
        ui_hint: 0,
        ui_theme: document.documentElement.classList.contains("dark")
          ? "dark"
          : "light",
      });
    };

    const currentIframe = iframeRef.current;

    script.addEventListener("load", initSketchfab);
    if (window.Sketchfab) {
      initSketchfab();
    }

    return () => {
      script.removeEventListener("load", initSketchfab);
      if (currentIframe && currentIframe.cleanupScroll) {
        currentIframe.cleanupScroll();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[0] pointer-events-none flex items-center justify-center overflow-hidden opacity-90 transition-opacity duration-1000">
      {!isModelLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10 transition-opacity duration-500">
          <span className="p-4 rounded-full bg-slate-100/30 dark:bg-slate-800/30 shadow-inner animate-pulse backdrop-blur-sm">
            <ShoppingBag className="w-10 h-10 text-emerald-500/50" />
          </span>
        </div>
      )}
      <iframe
        ref={iframeRef}
        title="Catwalk Walk Forward"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        // We scale it up so it feels like a large background element centered on the screen
        className={`w-[150vw] h-[150vh] md:w-[120vw] md:h-[120vh] max-w-none border-none object-cover transform translate-y-[20vh] md:translate-y-[15vh] transition-opacity duration-1000 ${isModelLoaded ? "opacity-100" : "opacity-0"}`}
      ></iframe>
    </div>
  );
}
