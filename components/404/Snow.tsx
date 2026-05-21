"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Snow = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      particles.forEach(p => {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.speed;
        p.x += Math.sin(p.y / 50) * 0.5;

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#b7d1e5] via-[#e8f2f6] to-white relative ${className || ""}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none opacity-60" />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.4)_100%)]" />

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .hover-404:hover .text-404 {
          transform: scale(1.05);
          opacity: 0.3;
        }
        
        .hover-404:hover .decoration-404 {
          transform: translate(5px, -5px) rotate(10deg);
        }

        .text-404 {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .decoration-404 {
          transition: transform 0.3s ease;
        }
      `}</style>

      <main 
        className="z-20 text-center px-4 animate-fade-in-up"
      >
        <h1 className="text-3xl xs:text-4xl md:text-7xl font-bold text-[#5d7399] mb-4 tracking-tight">
          Frozen in Time.
        </h1>
        <p className="text-[#5d7399]/70 text-base xs:text-lg md:text-2xl mb-8 sm:mb-12 max-w-xs xs:max-w-lg md:max-w-2xl mx-auto font-medium px-4">
          The page you are looking for has been buried under a heavy snowfall.
          Let&apos;s get you somewhere warmer.
        </p>
        
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-white text-[#5d7399] font-bold rounded-full shadow-lg shadow-blue-200/50 hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-lg border border-blue-50"
        >
          Hitch a ride back home
        </Link>
      </main>

      <div className="absolute bottom-0 w-full h-[30vh] z-10">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full drop-shadow-[-20px_-20px_40px_rgba(255,255,255,0.5)]">
          <path fill="#f8f9fa" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <div 
          className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20 hover-404"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative group cursor-pointer">
            <h2 
              className="text-7xl xs:text-8xl md:text-[12rem] font-black text-[#6b85b2] opacity-20 select-none tracking-tighter text-404"
            >
              404
            </h2>
            
            <div 
              className="absolute -right-12 -top-12 w-16 h-16 pointer-events-none decoration-404"
            >
              <div className="w-1 h-20 bg-[#dd4040]/20 absolute left-1/2 -translate-x-1/2 top-0" />
              <div className="w-10 h-8 bg-[#dd4040] absolute bottom-0 left-0 rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 flex gap-4 opacity-20">
        {[1,2,3].map(i => (
          <div key={i} className="w-12 h-1 bg-[#5d7399] rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default Snow;

