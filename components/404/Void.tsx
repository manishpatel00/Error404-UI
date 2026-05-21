"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Void({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [open, setOpen] = useState(false);
  const [titleIdx, setTitleIdx] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const messages = [
    {
      title: ["You've drifted beyond", "the known routes"],
      subtitle:
        "The page you're seeking doesn't exist—or it's been swallowed by the void. Return to safety below.",
    },
    {
      title: ["Signal lost.", "Reestablishing connection..."],
      subtitle:
        "This route has evaporated into the void. Use the links below to find your way back.",
    },
    {
      title: ["Coordinates unknown.", "Destination not found."],
      subtitle: "You've reached the edge of the map. Turn back before the void consumes you.",
    },
    {
      title: ["404.", "We have a problem."],
      subtitle: "Houston, this page doesn't exist. Abort and return to base.",
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const move = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const leave = () => {
      targetX = 0;
      targetY = 0;
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    if (!prefersReducedMotion) {
      const digits = document.querySelectorAll(".void-digit") as NodeListOf<HTMLSpanElement>;
      let lerpX = 0;
      let lerpY = 0;
      let active = false;
      setTimeout(() => (active = true), 1200);

      const update = () => {
        if (!active) {
          requestAnimationFrame(update);
          return;
        }
        lerpX += (targetX - lerpX) * 0.08;
        lerpY += (targetY - lerpY) * 0.08;
        digits.forEach((d, i) => {
          const factor = (i - 1) * 0.5;
          const tx = lerpX * 20 * (1 + factor * 0.5);
          const ty = lerpY * 20 * (1 + factor * 0.5);
          d.style.transform = `translate3d(${tx}px,${ty}px,0) rotateY(${lerpX * 5}deg) rotateX(${-lerpY * 5}deg)`;
        });
        requestAnimationFrame(update);
      };
      update();
    }

    const canvas = canvasRef.current;
    let handleResize: () => void;

    if (canvas) {
      const ctx = canvas.getContext("2d")!;
      let width = window.innerWidth;
      let height = window.innerHeight;
      let particles: any[] = [];
      const maxDistance = 150;
      const mouseRadius = 200;

      const particleCount = Math.min(120, Math.floor((width * height) / 10000));

      class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        radius: number;
        baseOpacity: number;
        opacity: number;

        constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.radius = Math.random() * 2 + 0.5;
          this.baseOpacity = Math.random() * 0.4 + 0.1;
          this.opacity = this.baseOpacity;
        }

        update() {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseRadius && !prefersReducedMotion) {
            const force = (1 - dist / mouseRadius) * 0.2;
            const angle = Math.atan2(dy, dx);
            this.vx -= Math.cos(angle) * force;
            this.vy -= Math.sin(angle) * force;
            this.opacity = Math.min(1, this.baseOpacity * 4);
          } else {
            this.opacity += (this.baseOpacity - this.opacity) * 0.05;
          }

          this.vx *= 0.98;
          this.vy *= 0.98;
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0) this.x = width;
          if (this.x > width) this.x = 0;
          if (this.y < 0) this.y = height;
          if (this.y > height) this.y = 0;
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,229,199,${this.opacity})`;
          ctx.fill();
        }
      }

      const init = () => {
        particles = [];
        for (let i = 0; i < particleCount; i++) particles.push(new Particle());
      };

      const drawConnections = () => {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < maxDistance) {
              const op = (1 - dist / maxDistance) * 0.15;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(0,229,199,${op})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      };

      handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        init();
      };

      const animate = () => {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
        drawConnections();
        requestAnimationFrame(animate);
      };

      handleResize();
      animate();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      if (handleResize) window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setTitleIdx((p) => (p + 1) % messages.length);
        setIsChanging(false);
      }, 500);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center bg-[#05050a] text-[#f0f0f3] overflow-hidden font-sans ${className || ""}`}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-out {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        .animate-fade-in-content {
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(0,229,199,0.1)_0%,transparent_50%),radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(138,43,226,0.08)_0%,transparent_50%),radial-gradient(ellipse_50%_30%_at_50%_80%,rgba(0,150,255,0.07)_0%,transparent_50%)] animate-[pulse_10s_ease-in-out_infinite_alternate]" />
      
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full opacity-60" />

      <main className="relative z-10 w-full max-w-[900px] px-6 py-12 md:py-16 flex flex-col items-center gap-8 md:gap-12 text-center">
        <header className="flex items-center gap-3 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
          <span className="w-2 h-2 rounded-full bg-[#00e5c7] shadow-[0_0_12px_#00e5c7] animate-pulse" />
          <code className="text-[10px] md:text-xs text-[#6b6b7a] tracking-widest font-mono uppercase">// ERROR: SYSTEM_VOID_0x19A</code>
        </header>

        <section className="flex flex-col items-center gap-6 md:gap-8">
          <div className="flex gap-1 md:gap-2 perspective-[1000px] select-none">
            {["4", "0", "4"].map((digit, i) => (
              <span 
                key={i} 
                className="void-digit text-[clamp(6rem,20vw,14.5rem)] font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 drop-shadow-[0_10px_40px_rgba(255,255,255,0.1)] transition-transform duration-200"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {digit}
              </span>
            ))}
          </div>

          <div className={`transition-all duration-500 transform ${isChanging ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-4 flex flex-col items-center">
              <span className="text-white/80">{messages[titleIdx].title[0]}</span>
              <span className="text-[#00e5c7] drop-shadow-[0_0_15px_rgba(0,229,199,0.3)]">
                {messages[titleIdx].title[1]}
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl max-w-lg mx-auto leading-relaxed">
              {messages[titleIdx].subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 w-full sm:w-auto px-4">
            <Link 
              href="/" 
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 group"
            >
              Return Home
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <button
              onClick={() => history.back()}
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Back Track
            </button>
            <button
              onClick={() => setOpen(true)}
              className="px-8 py-4 rounded-2xl text-gray-500 font-bold hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              Search
            </button>
          </div>
        </section>
      </main>

      {open && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <div 
            className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#10101a]/90 p-8 shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00e5c7] to-transparent" />
            <div className="flex items-center gap-4 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e5c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <h2 className="text-xl font-bold">Search the Void</h2>
            </div>
            <input
              onKeyDown={(e) => {
                if (e.key === "Escape") setOpen(false);
                if (e.key === "Enter") {
                  const v = (e.currentTarget as HTMLInputElement).value.trim();
                  if (v) window.location.href = `https://www.google.com/search?q=${encodeURIComponent(v)}`;
                }
              }}
              placeholder="Type your coordinates..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none font-mono text-lg text-white focus:border-[#00e5c7]/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
            />
            <div className="mt-6 flex items-center justify-between text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10">ENTER</kbd>
                to search
              </span>
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10">ESC</kbd>
                to exit
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-8 left-8 text-[8px] md:text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em] hidden sm:block">
        Void Protocol Active // Stable
      </div>
      <div className="absolute bottom-8 right-8 text-[8px] md:text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em] hidden sm:block text-right">
        Coordinates: UNKNOWN
      </div>
    </div>
  );
}

