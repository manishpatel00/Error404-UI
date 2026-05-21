"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import Link from "next/link";

const Custom404Clean = ({
  fullScreen = true,
  className,
}: {
  fullScreen?: boolean;
  className?: string;
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  const options: ISourceOptions = {
    background: {
      color: "#050505",
    },
    fullScreen: {
      enable: fullScreen,
      zIndex: 0,
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          width: 800,
          height: 800,
        },
      },
      color: {
        value: "#ffd700",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: {
          min: 0.1,
          max: 3,
        },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffd700",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
        attract: {
          enable: true,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div
      className={`relative flex items-center justify-center bg-black text-white overflow-hidden select-none ${fullScreen ? "h-screen w-full" : "h-full w-full"} ${className || ""}`}
    >
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0 z-0"
        />
      )}

      <style jsx global>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-scale {
          animation: fadeInScale 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up-fade {
          animation: slideUpFade 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 500ms;
        }
      `}</style>

      <div 
        className="relative z-10 text-center px-6 animate-fade-in-scale"
      >
        <div className="relative inline-block mb-8 sm:mb-12">
          <h1 className="text-[8rem] sm:text-[12rem] md:text-[18rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#ffd700] to-transparent opacity-80">
            404
          </h1>
          <div className="absolute -inset-4 sm:-inset-8 bg-[#ffd700]/10 blur-[60px] sm:blur-[100px] rounded-full z-[-1]" />
        </div>

        <div
          className="animate-slide-up-fade"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tracking-tight text-white/90">
            Lost in the Golden Void
          </h2>
          <p className="text-white/40 text-base sm:text-lg mb-8 sm:mb-12 max-w-xs sm:max-w-lg mx-auto leading-relaxed">
            The coordinates you provided lead to a region of space that remains uncharted.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/"
              className="px-10 py-4 bg-[#ffd700] text-black font-bold rounded-full hover:bg-[#ffed4a] transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-[#ffd700]/20"
            >
              Return to Base
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-[8px] sm:text-[10px] text-white/20 font-bold uppercase tracking-widest vertical-text hidden xs:block">
        Stellar Navigation System // Active
      </div>
    </div>
  );
};

export default Custom404Clean;

