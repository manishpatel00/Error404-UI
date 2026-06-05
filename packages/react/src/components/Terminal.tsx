"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Terminal = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState("");
  const [isDecrypted, setIsDecrypted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "0123456789ABCDEFHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length),
        );
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const target = "404 // ACCESS DENIED";
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        target
          .split("")
          .map((char, index) => {
            if (index < iterations) return target[index];
            return "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
          })
          .join(""),
      );

      if (iterations >= target.length) {
        clearInterval(interval);
        setIsDecrypted(true);
      }
      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen bg-black flex flex-col items-center justify-center p-8 overflow-hidden font-mono relative ${className || ""}`}
    >
      <style jsx global>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      />

      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" />

      <div className="z-10 w-full max-w-4xl bg-black/40 backdrop-blur-sm border border-[#0f0]/20 p-8 sm:p-12 rounded-lg shadow-[0_0_50px_rgba(0,255,0,0.1)] relative overflow-hidden group animate-fade-in-scale">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0f0]/40 to-transparent" />

        <div className="flex items-center gap-2 mb-8 text-[#0f0]/60 text-xs sm:text-sm tracking-widest uppercase">
          <div className="w-2 h-2 bg-[#0f0] rounded-full animate-pulse" />
          System Status: Breach Detected
        </div>

        <h1 className="text-2xl xs:text-3xl sm:text-6xl font-bold text-[#0f0] mb-4 sm:mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(0,255,0,0.5)] min-h-[1.2em] break-all">
          {displayText}
        </h1>

        <p className="text-[#0f0]/80 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-2xl leading-relaxed">
          The node you are attempting to ping is non-responsive. The packets
          have been lost in the digital aether.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/"
            className="px-8 py-4 bg-[#0f0] text-black font-black uppercase tracking-tighter hover:bg-[#00cc00] transition-colors flex items-center justify-center gap-2 group/btn active:scale-95"
          >
            Terminal Home
            <span className="group-hover/btn:translate-x-1 transition-transform">
              _
            </span>
          </Link>
          <button className="px-8 py-4 border border-[#0f0]/40 text-[#0f0] font-bold uppercase tracking-widest hover:bg-[#0f0]/5 transition-colors">
            Brute Force Recovery
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-[#0f0]/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] text-[#0f0]/40 font-bold uppercase tracking-wider">
          <div>IP: 127.0.0.1</div>
          <div>Port: 404</div>
          <div>Hash: MD5(VOID)</div>
          <div>Sig: 0xDEADBEEF</div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0f0]/20 to-transparent" />
      </div>

      <div className="absolute bottom-6 right-6 text-[#0f0]/20 text-sm italic pointer-events-none">
        root@void:/# _
      </div>
    </div>
  );
};

export default Terminal;
