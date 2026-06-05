import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { VT323, Arvo } from 'next/font/google';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Code2, GraduationCap, Terminal, BookOpen, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// src/components/AmongUs.tsx
var vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});
var AmongUs = ({ className }) => {
  const containerRef = useRef(null);
  const [stars, setStars] = useState([]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const initialStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.3
    }));
    setStars(initialStars);
  }, []);
  const text = "THERE IS 1 IMPOSTOR AMONG US";
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: `relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#000000] text-white ${vt323.className} ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `

        .star-field {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: moveStars linear infinite;
        }

        @keyframes moveStars {
          from { left: 100%; }
          to { left: -10%; }
        }

        .crt-overlay::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          z-index: 30;
          background-size: 100% 3px, 3px 100%;
          pointer-events: none;
        }

        .crt-scanline {
          width: 100%;
          height: 100px;
          z-index: 31;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.05) 10%, rgba(0, 0, 0, 0.1) 100%);
          opacity: 0.1;
          position: absolute;
          bottom: 100%;
          animation: scanline 8s linear infinite;
        }

        @keyframes scanline {
          0% { bottom: 100%; }
          100% { bottom: -100px; }
        }

        @keyframes floatRed {
          0% { left: -25%; top: 40%; transform: rotate(0deg); }
          25% { top: 45%; }
          50% { top: 35%; }
          75% { top: 40%; }
          100% { left: 125%; top: 40%; transform: rotate(360deg); }
        }

        @keyframes floatBlue {
          0% { left: -25%; top: 70%; transform: rotate(0deg); }
          25% { top: 55%; }
          50% { top: 65%; }
          75% { top: 70%; }
          100% { left: 125%; top: 70%; transform: rotate(-360deg); }
        }

        .animate-float-red {
          animation: floatRed 20s linear infinite;
        }

        .animate-float-blue {
          animation: floatBlue 28s linear infinite;
          animation-delay: 12s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .fade-in-delayed {
          opacity: 0;
          animation: fadeIn 1s ease-out 3.5s forwards;
        }

        .fade-in-delayed-2 {
          opacity: 0;
          animation: fadeIn 1s ease-out 5s forwards;
        }
        
        .fade-in-delayed-3 {
          opacity: 0;
          animation: fadeIn 1s ease-out 6.5s forwards;
        }
      ` }),
        /* @__PURE__ */ jsx("div", { className: "star-field", children: stars.map((star) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "star",
            style: {
              width: star.size,
              height: star.size,
              top: `${star.y}%`,
              left: `${star.x}%`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
              animationDuration: `${25 / star.speed}s`,
              animationDelay: `${Math.random() * -25}s`
            }
          },
          star.id
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "z-10 flex flex-col items-center text-center px-4 select-none", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-7xl sm:text-9xl md:text-[12rem] font-bold tracking-[0.1em] text-white mb-2 sm:mb-4 leading-none fade-in", children: "404" }),
          /* @__PURE__ */ jsx("div", { className: "mb-6 sm:mb-8 h-8 sm:h-12 fade-in", children: /* @__PURE__ */ jsx("h2", { className: "text-lg xs:text-xl sm:text-3xl md:text-5xl text-red-500 uppercase font-black tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap", children: text }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 sm:space-y-6 fade-in-delayed", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-2xl md:text-4xl text-gray-400 max-w-xl md:max-w-2xl mx-auto tracking-wide leading-relaxed", children: "This page was ejected into space." }),
            /* @__PURE__ */ jsxs("p", { className: "text-base sm:text-xl md:text-3xl text-white tracking-widest fade-in-delayed-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-red-600 font-bold px-1 sm:px-2", children: "404-Page" }),
              " was not An Impostor."
            ] }),
            /* @__PURE__ */ jsx("div", { className: "pt-8 sm:pt-12 fade-in-delayed-3", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: "/",
                className: "group relative inline-flex items-center justify-center px-8 sm:px-12 py-3 sm:py-4 font-bold text-white transition-all duration-300 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white hover:text-black rounded-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-lg sm:text-xl",
                children: "Return to Ship"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute w-32 md:w-56 h-auto animate-float-red", style: { left: "-25%" }, children: /* @__PURE__ */ jsx(
            Image,
            {
              src: "https://cdn.iconscout.com/icon/free/png-256/free-red-among-us-icon-svg-download-png-2691060.png",
              alt: "Ejected Red",
              width: 250,
              height: 250,
              unoptimized: true,
              className: "drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "absolute w-24 md:w-40 h-auto animate-float-blue", style: { left: "-25%" }, children: /* @__PURE__ */ jsx(
            Image,
            {
              src: "https://cdn.iconscout.com/icon/free/png-256/free-blue-among-us-icon-svg-download-png-2691064.png",
              alt: "Ejected Blue",
              width: 200,
              height: 200,
              unoptimized: true,
              className: "drop-shadow-[0_0_20px_rgba(0,0,255,0.5)] opacity-60"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "crt-overlay pointer-events-none absolute inset-0 z-40" }),
        /* @__PURE__ */ jsx("div", { className: "crt-scanline z-50" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)] z-20" })
      ]
    }
  );
};
var AmongUs_default = AmongUs;
var BlueGlitch = ({
  fullScreen = true,
  className
}) => {
  const [bootStep, setBootStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setBootStep((prev) => prev < 8 ? prev + 1 : prev);
    }, 400);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxs(
    "main",
    {
      className: `relative flex items-center justify-center bg-[#000084] overflow-hidden select-none font-mono ${fullScreen ? "min-h-screen" : "h-full"} ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        @font-face {
          font-family: 'DOS-VGA';
          src: url('https://fonts.cdnfonts.com/s/17263/Perfect%20DOS%20VGA%20437.woff') format('woff');
        }

        .crt-container {
          position: relative;
          width: 100%;
          height: 100%;
          background: #000084;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          box-shadow: inset 0 0 100px rgba(0,0,0,0.5);
        }

        .crt-container::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          z-index: 10;
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
        }

        .crt-container::after {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: rgba(18, 16, 16, 0.1);
          opacity: 0;
          z-index: 10;
          pointer-events: none;
          animation: flicker 0.15s infinite;
        }

        @keyframes flicker {
          0% { opacity: 0.27861; }
          5% { opacity: 0.34769; }
          10% { opacity: 0.23604; }
          15% { opacity: 0.90626; }
          20% { opacity: 0.18128; }
          25% { opacity: 0.83891; }
          30% { opacity: 0.65583; }
          35% { opacity: 0.57807; }
          40% { opacity: 0.26559; }
          45% { opacity: 0.84693; }
          50% { opacity: 0.96019; }
          55% { opacity: 0.08523; }
          60% { opacity: 0.71056; }
          65% { opacity: 0.73437; }
          70% { opacity: 0.28557; }
          75% { opacity: 0.96303; }
          80% { opacity: 0.2268; }
          85% { opacity: 0.20415; }
          90% { opacity: 0.85617; }
          95% { opacity: 0.41032; }
          100% { opacity: 0.9576; }
        }

        .dos-font {
          font-family: 'DOS-VGA', monospace;
          color: #bbb;
          text-shadow: 2px 2px 0px #000;
        }

        .inverted-box {
          background-color: #bbb;
          color: #000084;
          padding: 0 10px;
          display: inline-block;
          text-shadow: none;
        }

        .scanline {
          width: 100%;
          height: 100px;
          z-index: 11;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.05) 10%, rgba(0, 0, 0, 0.1) 100%);
          opacity: 0.1;
          position: absolute;
          bottom: 100%;
          animation: scanline 10s linear infinite;
        }

        @keyframes scanline {
          0% { bottom: 100%; }
          100% { bottom: -100px; }
        }

        @keyframes appear {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-appear {
          animation: appear 0.5s ease-out forwards;
        }
      ` }),
        /* @__PURE__ */ jsxs("div", { className: "crt-container w-full max-w-5xl h-[85vh] sm:h-[80vh] border-4 sm:border-8 border-double border-[#bbb]/20 rounded-lg overflow-hidden flex flex-col items-center justify-center m-4", children: [
          /* @__PURE__ */ jsx("div", { className: "scanline" }),
          /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[90%] sm:max-w-3xl dos-font text-[10px] xs:text-xs sm:text-lg lg:text-xl space-y-3 sm:space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-center mb-6 sm:mb-8", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "inline-block animate-appear",
                children: /* @__PURE__ */ jsx("div", { className: "inverted-box text-xl xs:text-2xl sm:text-5xl font-bold py-1.5 xs:py-2 px-4 xs:px-6", children: "WINDOWS" })
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              bootStep >= 1 && /* @__PURE__ */ jsx("div", { className: "animate-appear", children: "A fatal exception 404 has occurred at C0DE:ABAD1DEA." }),
              bootStep >= 2 && /* @__PURE__ */ jsx("div", { className: "animate-appear", children: "* The system could not find the file you requested." }),
              bootStep >= 3 && /* @__PURE__ */ jsx("div", { className: "animate-appear", children: "* Press ANY BUTTON to try finding it again in the void." }),
              bootStep >= 4 && /* @__PURE__ */ jsx("div", { className: "animate-appear", children: "* Contact your network administrator if this continues." }),
              bootStep >= 5 && /* @__PURE__ */ jsxs("div", { className: "pt-8 animate-appear", children: [
                "Current State: ",
                /* @__PURE__ */ jsx("span", { className: "text-red-500 underline", children: "ERROR_PAGE_NOT_FOUND" })
              ] }),
              bootStep >= 6 && /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "text-center pt-12 animate-appear",
                  children: [
                    "Press any button to return home",
                    /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-6 bg-[#bbb] ml-2 animate-pulse align-middle" })
                  ]
                }
              ),
              bootStep >= 7 && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex justify-center pt-8 animate-appear",
                  children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: "/",
                      className: "inverted-box hover:bg-white hover:text-[#000084] transition-colors duration-200 px-8 py-2 font-bold uppercase tracking-widest text-sm sm:text-base border-2 border-transparent",
                      children: "Return to Safety"
                    }
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 opacity-30 text-[10px] dos-font uppercase tracking-tighter", children: "Kernel Memory: 0x4041337 | IRQ: 07 | DMA: 02" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-20" })
      ]
    }
  );
};
var BlueGlitch_default = BlueGlitch;
function BugGame404() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const stateRef = useRef("start");
  const scoreRef = useRef(0);
  const speedRef = useRef(3);
  const obstaclesRef = useRef([]);
  const particlesRef = useRef([]);
  const bgParticlesRef = useRef([]);
  const playerRef = useRef({
    x: 100,
    y: 300,
    w: 34,
    h: 24,
    vy: 0,
    rotation: 0,
    wingAngle: 0
  });
  const animationFrameRef = useRef(0);
  const scaleRef = useRef(1);
  const GRAVITY = 0.25;
  const JUMP_FORCE = -5.5;
  const MAX_SPEED = 4;
  const OBSTACLE_SPACING = 300;
  const OBSTACLE_WIDTH = 60;
  const ERROR_TEXTS = [
    "404",
    "NULL",
    "NaN",
    "VOID",
    "ERR",
    "FAIL",
    "LOST",
    "BUG",
    "GONE",
    "???",
    "END",
    "NIL",
    "STOP",
    "NOPE",
    "ZERO"
  ];
  useEffect(() => {
    const saved = localStorage.getItem("bugHigh");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);
  const initBackground = useCallback((width, height) => {
    bgParticlesRef.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.2 + 0.05,
      opacity: Math.random() * 0.4 + 0.1
    }));
  }, []);
  const spawnObstacle = (x, height) => {
    const minGap = 180;
    const maxGap = 260;
    const gapHeight = Math.random() * (maxGap - minGap) + minGap;
    const minGapY = 100 + gapHeight / 2;
    const maxGapY = height - 100 - gapHeight / 2;
    const gapY = Math.random() * (maxGapY - minGapY) + minGapY;
    obstaclesRef.current.push({
      x,
      gapY,
      gapHeight,
      label: ERROR_TEXTS[Math.floor(Math.random() * ERROR_TEXTS.length)],
      passed: false
    });
  };
  const initGame = useCallback(() => {
    if (!canvasRef.current) return;
    const { width, height } = canvasRef.current;
    obstaclesRef.current = [];
    particlesRef.current = [];
    scoreRef.current = 0;
    speedRef.current = 2.5;
    setScore(0);
    initBackground(width, height);
    playerRef.current = {
      x: width * 0.2,
      y: height / 2,
      w: 34,
      h: 24,
      vy: 0,
      rotation: 0,
      wingAngle: 0
    };
    for (let i = 0; i < 3; i++) {
      spawnObstacle(width + 500 + i * OBSTACLE_SPACING, height);
    }
  }, [initBackground]);
  const createBurst = (x, y, color, count = 8) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        size: Math.random() * 3 + 1,
        color,
        decay: Math.random() * 0.04 + 0.02
      });
    }
  };
  const jump = () => {
    if (stateRef.current !== "play") return;
    const p = playerRef.current;
    p.vy = JUMP_FORCE;
    createBurst(p.x, p.y + p.h / 2, "rgba(255,255,255,0.4)", 4);
  };
  const update = () => {
    if (stateRef.current !== "play" || !canvasRef.current) return;
    const { width, height } = canvasRef.current;
    const p = playerRef.current;
    p.vy += GRAVITY;
    p.y += p.vy;
    if (p.vy < 0) {
      p.rotation = Math.max(-0.5, p.rotation - 0.1);
    } else {
      p.rotation = Math.min(Math.PI / 2, p.rotation + 0.08);
    }
    p.wingAngle += 0.8;
    if (p.y + p.h > height || p.y < 0) {
      handleGameOver();
      return;
    }
    obstaclesRef.current.forEach((obs) => {
      obs.x -= speedRef.current;
      const pInset = 4;
      const pl = p.x + pInset;
      const pr = p.x + p.w - pInset;
      const pt = p.y + pInset;
      const pb = p.y + p.h - pInset;
      const gapTop = obs.gapY - obs.gapHeight / 2;
      const gapBottom = obs.gapY + obs.gapHeight / 2;
      if (pr > obs.x && pl < obs.x + OBSTACLE_WIDTH) {
        if (pt < gapTop || pb > gapBottom) {
          handleGameOver();
        }
      }
      if (!obs.passed && pl > obs.x + OBSTACLE_WIDTH) {
        obs.passed = true;
        scoreRef.current += 1;
        setScore(scoreRef.current);
        if (speedRef.current < MAX_SPEED) speedRef.current += 0.05;
        if (scoreRef.current >= 404) {
          stateRef.current = "victory";
          setGameState("victory");
        }
      }
    });
    if (obstaclesRef.current[0] && obstaclesRef.current[0].x < -100) {
      obstaclesRef.current.shift();
    }
    const lastObs = obstaclesRef.current[obstaclesRef.current.length - 1];
    if (lastObs && lastObs.x < width - 100) {
      spawnObstacle(lastObs.x + OBSTACLE_SPACING, height);
    }
    particlesRef.current.forEach((pt) => {
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.life -= pt.decay;
    });
    particlesRef.current = particlesRef.current.filter((pt) => pt.life > 0);
    bgParticlesRef.current.forEach((bg) => {
      bg.x -= bg.speed * (speedRef.current * 0.2);
      if (bg.x < 0) bg.x = width;
    });
  };
  const draw = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    const { width, height } = canvasRef.current;
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, "#020617");
    bgGrad.addColorStop(1, "#1e1b4b");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = "#94a3b8";
    bgParticlesRef.current.forEach((bg) => {
      ctx.globalAlpha = bg.opacity;
      ctx.beginPath();
      const sz = bg.size;
      ctx.rect(bg.x, bg.y, sz, sz);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    obstaclesRef.current.forEach((obs) => {
      const gapTop = obs.gapY - obs.gapHeight / 2;
      const gapBottom = obs.gapY + obs.gapHeight / 2;
      const pipeGrad = ctx.createLinearGradient(obs.x, 0, obs.x + OBSTACLE_WIDTH, 0);
      pipeGrad.addColorStop(0, "#334155");
      pipeGrad.addColorStop(0.5, "#475569");
      pipeGrad.addColorStop(1, "#1e293b");
      ctx.fillStyle = pipeGrad;
      ctx.fillRect(obs.x, 0, OBSTACLE_WIDTH, gapTop);
      ctx.fillRect(obs.x, gapBottom, OBSTACLE_WIDTH, height - gapBottom);
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#f43f5e";
      ctx.strokeStyle = "#e11d48";
      ctx.lineWidth = 2;
      ctx.strokeRect(obs.x, 0, OBSTACLE_WIDTH, gapTop);
      ctx.strokeRect(obs.x, gapBottom, OBSTACLE_WIDTH, height - gapBottom);
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.font = "bold 16px monospace";
      ctx.textAlign = "center";
      if (gapTop > 50) {
        ctx.fillText(obs.label, obs.x + OBSTACLE_WIDTH / 2, gapTop - 20);
      }
      if (height - gapBottom > 50) {
        ctx.fillText(obs.label, obs.x + OBSTACLE_WIDTH / 2, gapBottom + 30);
      }
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(obs.x - 2, gapTop - 20, OBSTACLE_WIDTH + 4, 20);
      ctx.fillRect(obs.x - 2, gapBottom, OBSTACLE_WIDTH + 4, 20);
    });
    const p = playerRef.current;
    ctx.save();
    ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
    ctx.rotate(p.rotation);
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#a855f7";
    ctx.fillStyle = "#9333ea";
    ctx.beginPath();
    ctx.roundRect(-p.w / 2, -p.h / 2, p.w, p.h, 6);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(6, -4, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(8, -4, 3, 0, Math.PI * 2);
    ctx.fill();
    const wingY = Math.sin(p.wingAngle) * 6;
    ctx.fillStyle = "#f3e8ff";
    ctx.beginPath();
    ctx.ellipse(-8, -2 + wingY, 8, 5, -0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.shadowBlur = 0;
    particlesRef.current.forEach((pt) => {
      ctx.globalAlpha = pt.life;
      ctx.fillStyle = pt.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    if (stateRef.current === "play") {
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.font = "900 48px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(scoreRef.current.toString(), width / 2, 80);
    }
  };
  const loop = () => {
    update();
    draw();
    animationFrameRef.current = requestAnimationFrame(loop);
  };
  const handleResize = useCallback(() => {
    if (!containerRef.current || !canvasRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    scaleRef.current = window.devicePixelRatio || 1;
    canvasRef.current.width = clientWidth * scaleRef.current;
    canvasRef.current.height = clientHeight * scaleRef.current;
    canvasRef.current.style.width = `${clientWidth}px`;
    canvasRef.current.style.height = `${clientHeight}px`;
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) ctx.scale(scaleRef.current, scaleRef.current);
    initBackground(clientWidth, clientHeight);
  }, [initBackground]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    initGame();
    loop();
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [handleResize, initGame]);
  const handleInput = (e) => {
    if (stateRef.current === "start" || stateRef.current === "gameover" || stateRef.current === "victory") {
      if (e.type === "keydown" && e.code !== "Space" && e.code !== "Enter") return;
      if (stateRef.current === "start") {
        stateRef.current = "play";
        setGameState("play");
        jump();
      }
      return;
    }
    jump();
  };
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        handleInput(e);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  const handleGameOver = () => {
    stateRef.current = "gameover";
    setGameState("gameover");
    if (scoreRef.current > highScore) {
      setHighScore(scoreRef.current);
      localStorage.setItem("bugHigh", scoreRef.current.toString());
    }
  };
  const resetGame = () => {
    initGame();
    stateRef.current = "start";
    setGameState("start");
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: "relative w-full h-screen overflow-hidden bg-slate-950 select-none font-sans",
      onMouseDown: handleInput,
      onTouchStart: (e) => {
        handleInput(e);
      },
      children: [
        /* @__PURE__ */ jsx(
          "canvas",
          {
            ref: canvasRef,
            className: "block w-full h-full touch-none"
          }
        ),
        gameState === "start" && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20 animate-in fade-in bg-black/40 backdrop-blur-sm px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative mb-6 sm:mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-purple-500/30 blur-xl rounded-full animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "relative text-5xl sm:text-7xl select-none", children: "\u{1F47E}" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-5xl font-black text-white tracking-tighter mb-2 drop-shadow-xl text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: "404" }),
            " GLITCH JUMP"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-400 mb-6 sm:mb-8 font-mono text-xs sm:text-sm tracking-widest text-center max-w-xs", children: [
            "PROTOCOL: AVOID_THE_VOID",
            /* @__PURE__ */ jsx("br", {}),
            "TARGET: SCORE_404"
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                setGameState("play");
                stateRef.current = "play";
              },
              className: "px-8 sm:px-10 py-3 sm:py-4 bg-white text-black font-black text-base sm:text-lg rounded-full hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.4)]",
              children: "START DEBUGGING"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 sm:bottom-10 text-slate-500 text-[10px] sm:text-xs uppercase animate-pulse", children: "Tap / Space / Click to Fly" })
        ] }),
        (gameState === "gameover" || gameState === "victory") && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/70 backdrop-blur-md animate-in zoom-in-95", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 border border-slate-700 p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-6 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" }),
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: gameState === "victory" ? /* @__PURE__ */ jsx("span", { className: "text-6xl", children: "\u{1F389}" }) : /* @__PURE__ */ jsx("span", { className: "text-6xl", children: "\u{1F480}" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black text-white mb-1", children: gameState === "victory" ? "ERROR RESOLVED" : "CONNECTION LOST" }),
          /* @__PURE__ */ jsx("div", { className: "text-slate-400 text-xs font-mono mb-6 uppercase tracking-widest", children: gameState === "victory" ? "System Restored Successfully" : "The Bug Was Squashed" }),
          /* @__PURE__ */ jsxs("div", { className: "w-full bg-slate-800 rounded-xl p-4 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-xs uppercase font-bold", children: "Score" }),
              /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-white leading-none", children: score })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-slate-700 my-2" }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-500 text-xs uppercase font-bold", children: "Best" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-slate-300 leading-none", children: highScore })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  resetGame();
                },
                className: "flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-purple-900/20",
                children: "RETRY"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/",
                onClick: (e) => e.stopPropagation(),
                className: "flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors",
                children: "HOME"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 text-[10px] text-slate-600 font-mono", children: "ERROR_CODE_404_PAGE_NOT_FOUND" })
        ] }) })
      ]
    }
  );
}
var GeeksforGeeks = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa] relative overflow-hidden px-4 py-12 ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
      ` }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 z-0 opacity-[0.03] pointer-events-none",
            style: { backgroundImage: "radial-gradient(#2f8d46 1px, transparent 1px)", backgroundSize: "30px 30px" }
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "z-10 w-full max-w-5xl flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsx("div", { className: "mb-8 animate-fade-in", children: /* @__PURE__ */ jsx(
                Image,
                {
                  src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Illustration.svg",
                  alt: "404 Illustration",
                  width: 400,
                  height: 300,
                  priority: true,
                  className: "w-full max-w-[380px] h-auto drop-shadow-2xl"
                }
              ) }),
              /* @__PURE__ */ jsx(
                "h1",
                {
                  className: "text-3xl md:text-5xl font-bold text-[#2f8d46] mb-4 text-center animate-fade-in delay-100 px-4",
                  children: "Data Structure Not Found"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-gray-600 text-center max-w-xl mb-8 sm:mb-12 text-base sm:text-lg animate-fade-in delay-200 px-4",
                  children: "Even the most efficient algorithms occasionally hit a null pointer. While we garbage collect this error, why not explore these popular topics?"
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 animate-fade-in delay-300",
                  children: [
                    /* @__PURE__ */ jsx(
                      Card,
                      {
                        title: "DSA Self Paced",
                        icon: /* @__PURE__ */ jsx(Code2, { className: "w-6 h-6" }),
                        color: "bg-blue-50 text-blue-600 border-blue-100",
                        description: "Master Data Structures"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Card,
                      {
                        title: "Complete Interview",
                        icon: /* @__PURE__ */ jsx(GraduationCap, { className: "w-6 h-6" }),
                        color: "bg-purple-50 text-purple-600 border-purple-100",
                        description: "A-Z Preparation"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Card,
                      {
                        title: "System Design",
                        icon: /* @__PURE__ */ jsx(Terminal, { className: "w-6 h-6" }),
                        color: "bg-amber-50 text-amber-600 border-amber-100",
                        description: "Scalable Architectures"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Card,
                      {
                        title: "Python Master",
                        icon: /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6" }),
                        color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                        description: "For Data Science"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-center animate-fade-in delay-400 p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative group w-full sm:w-auto", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-gray-400" }) }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Search for tutorials...",
                      className: "pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-full w-full sm:w-64 md:w-80 focus:outline-none focus:ring-2 focus:ring-[#2f8d46]/20 focus:border-[#2f8d46] transition-all shadow-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/",
                    className: "w-full sm:w-auto px-8 py-3 bg-[#2f8d46] text-white font-semibold rounded-full hover:bg-[#267339] transition-all shadow-md hover:shadow-lg active:scale-95 text-center",
                    children: "Back to Dashboard"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2f8d46]/20 to-transparent" })
      ]
    }
  );
};
var Card = ({ title, icon, color, description }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "p-6 rounded-2xl border bg-white flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 hover:scale-[1.02]",
      children: [
        /* @__PURE__ */ jsx("div", { className: `p-4 rounded-xl mb-4 transition-colors group-hover:scale-110 ${color}`, children: icon }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-1", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: description })
      ]
    }
  );
};
var GeeksforGeeks_default = GeeksforGeeks;
var Google = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-screen bg-white flex flex-col items-center justify-center font-sans relative overflow-hidden ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-6 sm:top-10 left-6 sm:left-10 md:left-20", children: /* @__PURE__ */ jsx(
          Image,
          {
            src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
            alt: "Google",
            width: 92,
            height: 30,
            className: "opacity-80 scale-90 sm:scale-100"
          }
        ) }),
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes floatRotate {
          0% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(-2deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8) rotate(10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .animate-fade-in {
          animation: fadeInSlide 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pop-in {
          animation: popIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          opacity: 0;
          animation-delay: 200ms;
        }

        .animate-float {
          animation: floatRotate 6s ease-in-out infinite;
        }
      ` }),
        /* @__PURE__ */ jsxs("div", { className: "w-full max-w-5xl px-8 flex flex-col md:flex-row items-center justify-between gap-16 text-center md:text-left z-10", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "max-w-md animate-fade-in px-4",
              children: [
                /* @__PURE__ */ jsxs("h1", { className: "text-xl sm:text-2xl md:text-3xl font-medium text-[#3c4043] mb-4", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-3xl sm:text-4xl block mb-2", children: "404." }),
                  "That's an error."
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-[#70757a] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10", children: [
                  "The requested URL was not found on this server.",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-[#3c4043] font-medium italic", children: "That's all we know." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start", children: [
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: "/",
                      className: "px-8 py-3 bg-[#1a73e8] text-white font-medium rounded-md hover:bg-[#185abc] hover:shadow-md transition-all active:scale-95 text-center",
                      children: "Back to Safety"
                    }
                  ),
                  /* @__PURE__ */ jsx("button", { className: "px-8 py-3 text-[#1a73e8] font-medium rounded-md hover:bg-[#f1f3f4] transition-all text-center", children: "Try a search" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group animate-pop-in",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "animate-float",
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "https://www.google.com/images/errors/robot.png",
                        alt: "Broken robot",
                        className: "w-[280px] md:w-[350px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute -z-10 bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black opacity-[0.05] rounded-full blur-xl scale-x-150 animate-pulse" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-24 w-64 h-64 bg-[#4285F4] opacity-[0.03] rounded-full blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 -right-24 w-80 h-80 bg-[#EA4335] opacity-[0.03] rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-40 w-48 h-48 bg-[#FBBC05] opacity-[0.03] rounded-full blur-3xl animate-bounce duration-[10s]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-40 left-1/3 w-32 h-32 bg-[#34A853] opacity-[0.03] rounded-full blur-3xl" })
      ]
    }
  );
};
var Google_default = Google;
var MacOs = ({ className }) => {
  const router = useRouter();
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const [bootDone, setBootDone] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { type: "system", text: "Last login: " + (/* @__PURE__ */ new Date()).toUTCString().split(" ").slice(0, 4).join(" ") + " on ttys001" },
    { type: "system", text: "Restoring session... " },
    { type: "error", text: "zsh: error 404: route not found" },
    { type: "warning", text: "Available commands: help, clear, exit, date, whoami, ls, sudo" }
  ]);
  useEffect(() => {
    const timer = setTimeout(() => setBootDone(true), 1200);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (bootDone && inputRef.current) {
      const isIframe = typeof window !== "undefined" && window.self !== window.top;
      if (!isIframe) {
        inputRef.current.focus({ preventScroll: true });
      }
    }
  }, [bootDone]);
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);
  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    setOutput((o) => [...o, { type: "command", text: cmd }]);
    const commands = {
      help: () => setOutput((o) => [...o, { type: "output", text: "Available commands: help, clear, exit, date, whoami, ls, sudo" }]),
      clear: () => setOutput([]),
      exit: () => router.push("/"),
      date: () => setOutput((o) => [...o, { type: "output", text: (/* @__PURE__ */ new Date()).toString() }]),
      whoami: () => setOutput((o) => [...o, { type: "output", text: "guest@macbook-pro" }]),
      ls: () => setOutput((o) => [...o, { type: "output", text: "Applications  Documents  Downloads  Public  Desktop  .hidden_404_key" }]),
      sudo: () => setOutput((o) => [...o, { type: "error", text: "Nice try, but you don't have root access to this void." }])
    };
    if (commands[trimmed]) {
      commands[trimmed]();
    } else {
      setOutput((o) => [...o, { type: "error", text: `zsh: command not found: ${trimmed}` }]);
    }
    setInput("");
  };
  return /* @__PURE__ */ jsxs("main", { className: `min-h-screen flex items-center justify-center bg-[#0d1117] relative overflow-hidden font-mono ${className || ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-full max-w-4xl mx-auto px-4 z-10 animate-fade-in-scale",
        children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.6)] border border-white/10 backdrop-blur-3xl bg-[#1c1c1e]/80", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-2 sm:py-3 bg-white/5 border-b border-white/5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f57] shadow-inner" }),
              /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#febc2e] shadow-inner" }),
              /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#28c840] shadow-inner" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-[11px] sm:text-[13px] text-white/40 font-medium tracking-wide truncate px-2", children: "guest \u2014 zsh \u2014 80\xD724" }),
            /* @__PURE__ */ jsx("div", { className: "w-8 sm:w-12" })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref: terminalRef,
              onClick: () => inputRef.current?.focus(),
              className: "p-4 sm:p-6 h-[400px] sm:h-[500px] overflow-y-auto custom-scrollbar text-[12px] sm:text-[14px] leading-relaxed selection:bg-blue-500/30",
              children: [
                /* @__PURE__ */ jsx("div", { children: output.map((line, i) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "mb-1 animate-fade-in-left",
                    children: [
                      line.type === "command" && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-[#32d74b] font-bold", children: "\u279C" }),
                        /* @__PURE__ */ jsx("span", { className: "text-[#64d2ff] font-bold", children: "~" }),
                        /* @__PURE__ */ jsx("span", { className: "text-white break-all", children: line.text })
                      ] }),
                      line.type === "output" && /* @__PURE__ */ jsx("div", { className: "text-white/80 pl-5 sm:pl-6 break-words", children: line.text }),
                      line.type === "system" && /* @__PURE__ */ jsx("div", { className: "text-white/40 italic break-words", children: line.text }),
                      line.type === "error" && /* @__PURE__ */ jsx("div", { className: "text-[#ff453a] pl-5 sm:pl-6 font-medium break-words", children: line.text }),
                      line.type === "warning" && /* @__PURE__ */ jsx("div", { className: "text-[#febc2e] pl-5 sm:pl-6 break-words", children: line.text })
                    ]
                  },
                  i
                )) }),
                bootDone && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#32d74b] font-bold", children: "\u279C" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[#64d2ff] font-bold", children: "~" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      ref: inputRef,
                      value: input,
                      onChange: (e) => setInput(e.target.value),
                      onKeyDown: (e) => e.key === "Enter" && runCommand(input),
                      className: "bg-transparent border-none outline-none flex-1 text-white caret-[#32d74b] min-w-0",
                      spellCheck: false
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-5px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.2s ease-out forwards;
        }
      ` })
  ] });
};
var MacOs_default = MacOs;
var ModernPage = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-screen bg-[#050505] flex items-center justify-center p-6 overflow-hidden relative font-sans ${className || ""}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" })
        ] }),
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-slide-up {
          animation: fadeSlideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
          animation-delay: 200ms;
        }

        .animate-fade-slide-up-delayed {
          animation: fadeSlideUp 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 400ms;
        }
      ` }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative z-10 w-full max-w-2xl animate-fade-slide-up",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[1.5rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center shadow-2xl overflow-hidden group", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "relative inline-block mb-6 sm:mb-8 animate-scale-in",
                    children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-[6rem] sm:text-[10rem] md:text-[12rem] font-black leading-none tracking-tighter bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent select-none", children: "404" }),
                      /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-white/5 blur-3xl rounded-full z-[-1] group-hover:bg-white/10 transition-colors" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "animate-fade-slide-up-delayed",
                    children: [
                      /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight", children: "Lost in the Digital Ether." }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-md mx-auto leading-relaxed", children: "The page you are seeking has drifted beyond our reach. Let's navigate you back to solid ground." }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
                        /* @__PURE__ */ jsx(
                          Link,
                          {
                            href: "/",
                            className: "w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-black font-bold rounded-xl sm:rounded-2xl hover:bg-gray-200 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-white/5",
                            children: "Go Home"
                          }
                        ),
                        /* @__PURE__ */ jsx("button", { className: "w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border border-white/10 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white/5 transition-all active:scale-95", children: "Take a Tour" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-12 flex justify-center gap-8 text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]", children: [
                /* @__PURE__ */ jsx("span", { children: "Security Verified" }),
                /* @__PURE__ */ jsx("span", { children: "\u2022" }),
                /* @__PURE__ */ jsx("span", { children: "Node 404_X" }),
                /* @__PURE__ */ jsx("span", { children: "\u2022" }),
                /* @__PURE__ */ jsx("span", { children: "Stable Connection" })
              ] })
            ]
          }
        )
      ]
    }
  );
};
var ModernPage_default = ModernPage;
var Custom404Clean = ({
  fullScreen = true,
  className
}) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = async (container) => {
  };
  const options = {
    background: {
      color: "#050505"
    },
    fullScreen: {
      enable: fullScreen,
      zIndex: 0
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          width: 800,
          height: 800
        }
      },
      color: {
        value: "#ffd700"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5
        },
        animation: {
          enable: true,
          speed: 1,
          sync: false
        }
      },
      size: {
        value: {
          min: 0.1,
          max: 3
        },
        animation: {
          enable: true,
          speed: 2,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffd700",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        },
        attract: {
          enable: true,
          rotate: {
            x: 600,
            y: 1200
          }
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: {
          enable: true,
          delay: 0.5
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative flex items-center justify-center bg-black text-white overflow-hidden select-none ${fullScreen ? "h-screen w-full" : "h-full w-full"} ${className || ""}`,
      children: [
        init && /* @__PURE__ */ jsx(
          Particles,
          {
            id: "tsparticles",
            particlesLoaded,
            options,
            className: "absolute inset-0 z-0"
          }
        ),
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
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
      ` }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative z-10 text-center px-6 animate-fade-in-scale",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative inline-block mb-8 sm:mb-12", children: [
                /* @__PURE__ */ jsx("h1", { className: "text-[8rem] sm:text-[12rem] md:text-[18rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#ffd700] to-transparent opacity-80", children: "404" }),
                /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 sm:-inset-8 bg-[#ffd700]/10 blur-[60px] sm:blur-[100px] rounded-full z-[-1]" })
              ] }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "animate-slide-up-fade",
                  children: [
                    /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tracking-tight text-white/90", children: "Lost in the Golden Void" }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/40 text-base sm:text-lg mb-8 sm:mb-12 max-w-xs sm:max-w-lg mx-auto leading-relaxed", children: "The coordinates you provided lead to a region of space that remains uncharted." }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: /* @__PURE__ */ jsx(
                      Link,
                      {
                        href: "/",
                        className: "px-10 py-4 bg-[#ffd700] text-black font-bold rounded-full hover:bg-[#ffed4a] transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-[#ffd700]/20",
                        children: "Return to Base"
                      }
                    ) })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-[8px] sm:text-[10px] text-white/20 font-bold uppercase tracking-widest vertical-text hidden xs:block", children: "Stellar Navigation System // Active" })
      ]
    }
  );
};
var Particles_default = Custom404Clean;
var Poet = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-screen bg-[#1a1a1a] flex items-center justify-center p-6 relative overflow-hidden font-serif ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');
        
        .gothic-font {
          font-family: 'Playfair Display', serif;
        }

        .parchment {
          background-color: #f4ecd8;
          background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
          box-shadow: 
            inset 0 0 100px rgba(0,0,0,0.1),
            0 20px 50px rgba(0,0,0,0.5);
          position: relative;
        }

        .parchment::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.05) 100%);
          pointer-events: none;
        }
      ` }),
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        @keyframes floatRotate {
          0% { transform: translateY(20%) rotate(-10deg); opacity: 0; }
          10% { opacity: 0.1; }
          90% { opacity: 0.1; }
          100% { transform: translateY(80%) rotate(0deg); opacity: 0; left: 120%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        .animate-float-bg {
          animation: floatRotate 15s linear infinite;
          animation-delay: 2s;
        }

        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gentle-float {
          animation: gentleFloat 5s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-3000 { animation-delay: 3s; }
      ` }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute z-0 pointer-events-none scale-[2] left-[-120%] top-[20%] animate-float-bg",
            children: /* @__PURE__ */ jsxs("svg", { width: "200", height: "100", viewBox: "0 0 200 100", fill: "currentColor", className: "text-black", children: [
              /* @__PURE__ */ jsx("path", { d: "M100 50 C120 40 150 20 180 20 C160 40 140 50 100 50 C60 50 40 40 20 20 C50 20 80 40 100 50 Z" }),
              /* @__PURE__ */ jsx("path", { d: "M100 50 C110 55 120 65 100 80 C80 65 90 55 100 50 Z" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "parchment w-full max-w-4xl min-h-[70vh] rounded-sm p-6 xs:p-8 md:p-16 flex flex-col md:flex-row gap-8 md:gap-12 border border-[#d4c5a1] relative z-10 animate-slide-up m-4",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 gothic-font", children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "text-[#2c241a] space-y-2 md:space-y-3",
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base opacity-60 mb-8 tracking-widest uppercase animate-slide-in-left delay-500", children: "// Archive: /missing.pdf" }),
                      /* @__PURE__ */ jsx("p", { className: "animate-slide-in-left delay-600", children: "Once upon a midnight dreary," }),
                      /* @__PURE__ */ jsx("p", { className: "animate-slide-in-left delay-700", children: "While I web surfed, weak and weary," }),
                      /* @__PURE__ */ jsx("p", { className: "animate-slide-in-left delay-800", children: "For pages long forgotten yore." }),
                      /* @__PURE__ */ jsx("p", { className: "animate-slide-in-left delay-900", children: "When I clicked my fav'rite href," }),
                      /* @__PURE__ */ jsx("p", { className: "animate-slide-in-left", style: { animationDelay: "1050ms" }, children: "Suddenly there came a warning," }),
                      /* @__PURE__ */ jsx("p", { className: "animate-slide-in-left", style: { animationDelay: "1200ms" }, children: "and my heart was filled with mourning," }),
                      /* @__PURE__ */ jsx("p", { className: "pt-2 sm:pt-4 text-lg sm:text-xl md:text-2xl italic font-medium animate-slide-in-left", style: { animationDelay: "1350ms" }, children: 'Mourning for my dear "/missing.pdf",' }),
                      /* @__PURE__ */ jsx("p", { className: "pt-2 sm:pt-4 animate-slide-in-left", style: { animationDelay: "1500ms" }, children: '"Tis not possible!" I muttered,' }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl sm:text-2xl md:text-3xl font-bold leading-tight animate-slide-in-left", style: { animationDelay: "1650ms" }, children: '"Give thine pages, I implore!"' }),
                      /* @__PURE__ */ jsxs("div", { className: "pt-8 sm:pt-12 animate-slide-in-left", style: { animationDelay: "1800ms" }, children: [
                        /* @__PURE__ */ jsx("span", { className: "text-4xl sm:text-5xl md:text-7xl font-black text-[#8b0000] drop-shadow-sm", children: "404" }),
                        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl font-bold mt-2 opacity-80 uppercase tracking-tighter", children: 'Quoth the server, "Nevermore."' })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "mt-12 flex gap-6 animate-fade-in delay-3000",
                    children: [
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: "/",
                          className: "px-6 py-2 border-b-2 border-[#8b0000] text-[#8b0000] font-bold hover:bg-[#8b0000]/5 transition-all active:scale-95",
                          children: "Back to Light"
                        }
                      ),
                      /* @__PURE__ */ jsx("button", { className: "px-6 py-2 text-[#2c241a]/60 font-bold hover:text-[#2c241a] transition-all", children: "Mourn Again" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/3 flex flex-col items-center justify-center grayscale opacity-80 contrast-125", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "relative animate-gentle-float",
                  children: /* @__PURE__ */ jsxs("svg", { width: "200", height: "280", viewBox: "0 0 200 280", className: "text-[#2c241a]", children: [
                    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M100 20 C120 20 160 40 160 100 C160 160 120 200 100 220 C80 200 40 160 40 100 C40 40 80 20 100 20 Z", opacity: "0.1" }),
                    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M100 40 C110 40 130 50 130 80 C130 110 110 140 100 150 C90 140 70 110 70 80 C70 50 90 40 100 40 Z" }),
                    /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeWidth: "2", d: "M100 150 L100 240 M80 220 L120 220" }),
                    /* @__PURE__ */ jsx("circle", { cx: "100", cy: "80", r: "40", fill: "none", stroke: "currentColor", strokeWidth: "1", opacity: "0.2" })
                  ] })
                }
              ) })
            ]
          }
        )
      ]
    }
  );
};
var Poet_default = Poet;
var RetroTv = ({ className }) => {
  const canvasRef = useRef(null);
  const [isOn, setIsOn] = useState(false);
  const [noiseIntensity, setNoiseIntensity] = useState(0.8);
  const [channel, setChannel] = useState(404);
  useEffect(() => {
    const timer = setTimeout(() => setIsOn(true), 500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isOn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrame;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() * 255 * noiseIntensity;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
      animationFrame = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [isOn, noiseIntensity]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4 sm:p-8 font-mono overflow-hidden select-none ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        .crt-curve {
          position: relative;
          overflow: hidden;
          background: #000;
        }
        
        .crt-curve::after {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0.1) 50%, rgba(0, 0, 0, 0.2) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.04));
          z-index: 2;
          background-size: 100% 4px, 6px 100%;
          pointer-events: none;
        }

        .crt-curve::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: radial-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(to bottom, rgba(18, 16, 16, 0) 0%, rgba(18, 16, 16, 0.1) 50%, rgba(18, 16, 16, 0) 100%);
          z-index: 2;
          pointer-events: none;
        }

        .tv-frame {
          box-shadow: 
            inset 0 0 40px rgba(0,0,0,0.8),
            0 0 100px rgba(0,0,0,0.5),
            0 20px 50px rgba(0,0,0,0.4);
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .scanline-overlay {
          width: 100%;
          height: 100px;
          background: linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%);
          position: absolute;
          top: 0;
          left: 0;
          animation: scanline 8s linear infinite;
          z-index: 3;
        }

        @keyframes tvOn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .animate-tv-on {
          animation: tvOn 0.3s ease-out forwards;
        }
      ` }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-4xl flex flex-col items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full bg-[#2a2a2a] p-4 sm:p-8 rounded-[3rem] border-8 border-[#333] tv-frame", children: [
            /* @__PURE__ */ jsxs("div", { className: "aspect-[4/3] w-full bg-black rounded-[2rem] overflow-hidden crt-curve border-4 border-black box-content relative", children: [
              !isOn && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 bg-black z-[100] flex items-center justify-center transition-all duration-100 origin-center",
                  style: { transform: isOn ? "scaleY(0)" : "scaleY(1)", opacity: isOn ? 0 : 1 }
                }
              ),
              isOn && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "absolute inset-0 w-full h-full opacity-30" }),
                /* @__PURE__ */ jsx("div", { className: "scanline-overlay" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-10", children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "text-white text-center animate-tv-on px-4",
                    children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-[4rem] xs:text-[6rem] sm:text-[10rem] font-bold tracking-tighter mix-blend-difference", children: "404" }),
                      /* @__PURE__ */ jsx("div", { className: "px-3 sm:px-4 py-1 sm:py-2 bg-white text-black font-bold text-sm xs:text-base sm:text-xl uppercase skew-x-[-12deg] inline-block", children: "No Signal" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "absolute top-6 left-6 z-20 bg-green-500/80 text-black px-3 py-1 text-sm font-bold rounded-sm animate-pulse", children: [
                  "CH ",
                  channel
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 px-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] uppercase text-white/40 tracking-widest", children: "Intensity" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "range",
                    min: "0",
                    max: "1",
                    step: "0.01",
                    value: noiseIntensity,
                    onChange: (e) => setNoiseIntensity(parseFloat(e.target.value)),
                    className: "w-full h-1 bg-white/10 appearance-none rounded-full accent-white"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setChannel((prev) => prev === 404 ? 13 : 404),
                  className: "px-4 py-2 bg-[#333] hover:bg-[#444] text-white/60 text-xs rounded-md transition-colors border-b-2 border-black",
                  children: "CHANNEL"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsOn(!isOn),
                  className: `px-4 py-2 text-xs rounded-md transition-all border-b-2 border-black font-bold ${isOn ? "bg-red-900 text-red-100" : "bg-green-900 text-green-100"}`,
                  children: isOn ? "POWER OFF" : "POWER ON"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/",
                  className: "px-4 py-2 bg-white text-black text-xs rounded-md font-bold text-center hover:bg-gray-200 transition-colors",
                  children: "HOME"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-1/2 h-4 sm:h-8 bg-[#222] rounded-b-[2rem] mx-auto mt-[-4px] z-[-1]" }),
          /* @__PURE__ */ jsx("div", { className: "mt-12 text-white/10 text-xs tracking-[0.5em] uppercase pointer-events-none", children: "Solid State Electronics // Model 404-X" })
        ] })
      ]
    }
  );
};
var RetroTv_default = RetroTv;
var SimplePage = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center p-6 font-sans relative ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      ` }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.02)_100%)] pointer-events-none" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative z-10 w-full max-w-[480px] text-center animate-fade-in-up",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-8 sm:mb-12", children: [
                /* @__PURE__ */ jsx(
                  "h1",
                  {
                    className: "text-[100px] xs:text-[120px] md:text-[160px] font-black tracking-tighter text-black dark:text-white leading-none select-none animate-scale-in",
                    children: "404"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "h-px w-16 sm:w-24 bg-black/5 dark:bg-white/5 mx-auto mt-4" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 sm:space-y-6 px-4", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-semibold text-black dark:text-white tracking-tight", children: "Something went sideways." }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-sm mx-auto font-medium", children: "The page you requested is currently unavailable. It may have been moved or doesn't exist." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-col gap-4", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/",
                    className: "w-full bg-black dark:bg-white text-white dark:text-black font-bold py-5 rounded-2xl hover:opacity-90 transition-all active:scale-[0.98] shadow-2xl shadow-black/10 text-lg",
                    children: "Return to Safety"
                  }
                ),
                /* @__PURE__ */ jsx("button", { className: "w-full text-gray-400 dark:text-gray-500 font-bold py-4 hover:text-black dark:hover:text-white transition-colors", children: "Contact Support" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-24 pt-12 border-t border-black/[0.03] dark:border-white/[0.03] flex justify-between items-center text-[10px] text-gray-300 dark:text-gray-600 font-bold uppercase tracking-[0.2em]", children: [
                /* @__PURE__ */ jsx("span", { children: "\xA9 2024 NOTFOUND" }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("span", { children: "Status 404" }),
                  /* @__PURE__ */ jsx("span", { children: "Uptime 99.9%" })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
};
var SimplePage_default = SimplePage;
var Snow = ({ className }) => {
  const canvasRef = useRef(null);
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
    let animationFrame;
    let particles = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    const init = () => {
      particles = [];
      const count = Math.floor(canvas.width * canvas.height / 8e3);
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
      particles.forEach((p) => {
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#b7d1e5] via-[#e8f2f6] to-white relative ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "absolute inset-0 z-10 pointer-events-none opacity-60" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.4)_100%)]" }),
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
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
      ` }),
        /* @__PURE__ */ jsxs(
          "main",
          {
            className: "z-20 text-center px-4 animate-fade-in-up",
            children: [
              /* @__PURE__ */ jsx("h1", { className: "text-3xl xs:text-4xl md:text-7xl font-bold text-[#5d7399] mb-4 tracking-tight", children: "Frozen in Time." }),
              /* @__PURE__ */ jsx("p", { className: "text-[#5d7399]/70 text-base xs:text-lg md:text-2xl mb-8 sm:mb-12 max-w-xs xs:max-w-lg md:max-w-2xl mx-auto font-medium px-4", children: "The page you are looking for has been buried under a heavy snowfall. Let's get you somewhere warmer." }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/",
                  className: "inline-flex items-center px-8 py-4 bg-white text-[#5d7399] font-bold rounded-full shadow-lg shadow-blue-200/50 hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-lg border border-blue-50",
                  children: "Hitch a ride back home"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 w-full h-[30vh] z-10", children: [
          /* @__PURE__ */ jsx("svg", { viewBox: "0 0 1440 320", className: "absolute bottom-0 w-full h-full drop-shadow-[-20px_-20px_40px_rgba(255,255,255,0.5)]", children: /* @__PURE__ */ jsx("path", { fill: "#f8f9fa", d: "M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20 hover-404",
              onMouseEnter: () => setIsHovered(true),
              onMouseLeave: () => setIsHovered(false),
              children: /* @__PURE__ */ jsxs("div", { className: "relative group cursor-pointer", children: [
                /* @__PURE__ */ jsx(
                  "h2",
                  {
                    className: "text-7xl xs:text-8xl md:text-[12rem] font-black text-[#6b85b2] opacity-20 select-none tracking-tighter text-404",
                    children: "404"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "absolute -right-12 -top-12 w-16 h-16 pointer-events-none decoration-404",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "w-1 h-20 bg-[#dd4040]/20 absolute left-1/2 -translate-x-1/2 top-0" }),
                      /* @__PURE__ */ jsx("div", { className: "w-10 h-8 bg-[#dd4040] absolute bottom-0 left-0 rounded-sm" })
                    ]
                  }
                )
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-10 right-10 flex gap-4 opacity-20", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-[#5d7399] rounded-full" }, i)) })
      ]
    }
  );
};
var Snow_default = Snow;
var arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap"
});
var StoneAge = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-screen w-full bg-[#fcf8f0] flex flex-col items-center justify-center p-8 overflow-hidden relative ${arvo.className} ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        .paper-texture {
          background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
        }

        .rock-shadow {
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.1));
        }
      ` }),
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes floatUpLarge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes rock {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float-up {
          animation: floatUp 6s ease-in-out infinite;
        }

        .animate-float-up-large {
          animation: floatUpLarge 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-rock {
          animation: rock 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      ` }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 paper-texture opacity-40 pointer-events-none" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-20 right-[15%] opacity-10 select-none animate-float-up",
            children: /* @__PURE__ */ jsx("svg", { width: "200", height: "200", viewBox: "0 0 200 200", children: /* @__PURE__ */ jsx("path", { d: "M40 160 L80 40 L120 180 L160 80 L180 160 Z", fill: "#4a3b2a" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-20 left-[10%] opacity-10 select-none animate-float-up-large",
            children: /* @__PURE__ */ jsx("svg", { width: "250", height: "250", viewBox: "0 0 200 200", children: /* @__PURE__ */ jsx("path", { d: "M50 180 L100 20 L150 160 Z", fill: "#4a3b2a" }) })
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative z-10 w-full max-w-4xl flex flex-col items-center text-center animate-fade-in-up",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative mb-8", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "relative z-20 animate-rock",
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif",
                        alt: "Stone Age Illustration",
                        className: "w-full max-w-[320px] sm:max-w-[450px] h-auto rock-shadow rounded-3xl"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black opacity-[0.05] blur-xl rounded-full" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
                /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl md:text-6xl font-black text-[#4a3b2a] mb-4 uppercase tracking-tighter", children: "Prehistoric 404" }),
                /* @__PURE__ */ jsx("p", { className: "text-[#6b5844] text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-xl mx-auto font-medium", children: "This endpoint hasn't been discovered yet. It's still in the early Jurassic." }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 items-center justify-center", children: [
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: "/",
                      className: "px-10 py-4 bg-[#4a3b2a] text-[#fcf8f0] font-bold rounded-xl hover:bg-[#5c4a36] transition-all transform hover:-translate-y-1 hover:shadow-xl active:scale-95 text-lg",
                      children: "Back to Future"
                    }
                  ),
                  /* @__PURE__ */ jsx("button", { className: "px-10 py-4 border-2 border-[#4a3b2a]/20 text-[#4a3b2a] font-bold rounded-xl hover:bg-[#4a3b2a]/5 transition-all text-lg", children: "Explore History" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-10 w-full px-8 flex justify-between items-center text-[#4a3b2a]/20 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs", children: [
          /* @__PURE__ */ jsx("span", { children: "Pleistocene Era" }),
          /* @__PURE__ */ jsx("div", { className: "h-px flex-1 mx-8 bg-[#4a3b2a]/10" }),
          /* @__PURE__ */ jsx("span", { children: "No Connection Found" })
        ] })
      ]
    }
  );
};
var StoneAge_default = StoneAge;
var StrangerThings = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-[500px] flex flex-col items-center justify-center p-6 overflow-hidden transition-colors duration-500 bg-background ${className || ""}`,
      style: { perspective: "1200px" },
      children: [
        /* @__PURE__ */ jsx("style", { jsx: true, children: `
        @keyframes slideDown {
          0% { transform: translateY(-30%); opacity: 0; }
          100% { transform: none; opacity: 1; }
        }
        @keyframes slideUp {
          0% { transform: translateY(30%); opacity: 0; }
          100% { transform: none; opacity: 1; }
        }
        @keyframes slideRight {
          0% { transform: translateX(-60%); opacity: 0; }
          100% { transform: none; opacity: 1; }
        }
        @keyframes slideLeft {
          0% { transform: translateX(60%); opacity: 0; }
          100% { transform: none; opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUpFadeIn {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: none; opacity: 1; }
        }
        @keyframes scaleXIn {
          0% { transform: scaleX(0); }
          100% { transform: none; }
        }
        @keyframes zoomFadeIn {
          0% { opacity: 0; transform: translateZ(800px) scale(1.2); }
          100% { opacity: 1; transform: translateZ(0) scale(1); }
        }
        @keyframes jitter {
          0%, 100% { transform: translate(0, 0); opacity: 1; }
          25% { transform: translate(2px, -1px); opacity: 0.8; }
          50% { transform: translate(-1px, 2px); opacity: 0.9; }
          75% { transform: translate(1px, 1px); opacity: 0.7; }
        }

        .main-svg-container {
          animation: zoomFadeIn 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: center center;
          filter: drop-shadow(0 0 20px rgba(242, 13, 47, 0.2));
        }

        .error-1-e { animation: slideRight 3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .error-2-r { animation: slideDown 4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .error-4-o { animation: slideLeft 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .error-5-r { animation: slideLeft 3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .error-2-0 { animation: slideUp 4.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        .error-top, .error-left, .error-right {
          animation: scaleXIn 4s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
          transform: scaleX(0);
        }
        .error-top { transform-origin: center; }
        .error-left { transform-origin: left; }
        .error-right { transform-origin: right; }

        .quote-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: #f20d2f;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 0.4em;
          font-family: "Cinzel", serif;
          text-shadow: 0 0 12px rgba(242, 13, 47, 0.4);
          opacity: 0;
          animation: slideUpFadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 2.5s forwards;
        }

        .quote-top { font-size: 0.75rem; font-weight: 500; }
        .quote-bottom { 
          font-size: 1.125rem; 
          font-weight: 700;
          opacity: 0;
          animation: slideUpFadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 3s forwards;
        }

        @media (min-width: 640px) {
          .quote-top { font-size: 0.875rem; }
          .quote-bottom { font-size: 1.5rem; }
        }

        .cta {
          margin-top: 32px;
          padding: 12px 32px;
          border: 1px solid rgba(242, 13, 47, 0.3);
          color: #f20d2f;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.875rem;
          font-weight: 600;
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
          opacity: 0;
          animation: fadeIn 1s ease 4s forwards;
          cursor: pointer;
        }

        .cta:hover {
          background: rgba(242, 13, 47, 0.05);
          border-color: #f20d2f;
          box-shadow: 0 0 20px rgba(242, 13, 47, 0.2);
          transform: translateY(-2px);
        }

        .jitter-link:hover {
          animation: jitter 0.3s infinite;
        }
      ` }),
        /* @__PURE__ */ jsxs("main", { className: "w-full h-full flex flex-col items-center justify-center space-y-8", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "main-svg-container opacity-0 w-full flex justify-center",
              style: { transform: "translateZ(250px)" },
              children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  className: "w-[90%] sm:w-[500px] md:w-[636px] h-auto",
                  viewBox: "-110 0 556 190",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    /* @__PURE__ */ jsxs("defs", { children: [
                      /* @__PURE__ */ jsxs(
                        "filter",
                        {
                          x: "-50%",
                          y: "-50%",
                          width: "200%",
                          height: "200%",
                          filterUnits: "objectBoundingBox",
                          id: "stroke-glow",
                          children: [
                            /* @__PURE__ */ jsx(
                              "feMorphology",
                              {
                                radius: "1",
                                operator: "dilate",
                                in: "SourceAlpha",
                                result: "shadowSpreadOuter1"
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "feOffset",
                              {
                                dx: "0",
                                dy: "0",
                                in: "shadowSpreadOuter1",
                                result: "shadowOffsetOuter1"
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "feMorphology",
                              {
                                radius: "1",
                                operator: "erode",
                                in: "SourceAlpha",
                                result: "shadowInner"
                              }
                            ),
                            /* @__PURE__ */ jsx("feOffset", { dx: "0", dy: "0", in: "shadowInner", result: "shadowInner" }),
                            /* @__PURE__ */ jsx(
                              "feComposite",
                              {
                                in: "shadowOffsetOuter1",
                                in2: "shadowInner",
                                operator: "out",
                                result: "shadowOffsetOuter1"
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "feGaussianBlur",
                              {
                                stdDeviation: "4",
                                in: "shadowOffsetOuter1",
                                result: "shadowBlurOuter1"
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "feColorMatrix",
                              {
                                values: "0 0 0 0 0.793633078 0 0 0 0 0.184316773 0 0 0 0 0.184316773 0 0 0 0.5 0",
                                type: "matrix",
                                in: "shadowBlurOuter1"
                              }
                            ),
                            /* @__PURE__ */ jsxs("feMerge", { children: [
                              /* @__PURE__ */ jsx("feMergeNode", {}),
                              /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M213.248,144.368 L193.952,144.368 C196.544,138.992 201.248,133.712 205.472,126.8 C211.136,117.584 213.92,109.904 213.92,103.856 C213.92,102.8 213.824,101.552 213.632,100.112 L200.48,110.096 C200.96,110.48 201.344,110.864 201.536,111.344 C201.824,111.92 201.92,112.592 201.92,113.264 C201.92,117.872 199.136,123.728 194.528,131.312 C189.92,139.088 185.792,144.944 185.792,151.472 L185.792,152.144 C186.464,150.992 187.712,150.608 189.632,150.608 L213.248,150.608 L213.248,158.096 C213.248,162.704 212.096,164.816 208.064,165.776 L208.064,167.696 L233.312,167.696 L233.312,165.776 C229.28,164.816 228.128,162.704 228.128,158.096 L228.128,150.608 L232.352,150.608 C234.08,150.608 234.944,151.376 235.424,153.008 L238.016,140.528 C236,143.12 234.08,144.368 231.584,144.368 L228.128,144.368 L228.128,115.184 C228.128,110.96 228.704,105.392 229.856,98.384 L227.84,98 C225.92,109.04 220.832,115.856 213.248,118.064 L213.248,144.368 Z",
                          id: "error-3-4"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M159.816,103.088 C173.544,103.088 183.816,115.664 183.816,135.92 C183.816,156.176 173.544,168.848 159.816,168.848 C146.088,168.848 135.816,156.272 135.816,135.92 C135.816,115.568 146.088,103.088 159.816,103.088 Z M159.816,109.04 C154.056,109.04 152.04,117.776 152.04,135.92 C152.04,154.064 154.056,162.8 159.816,162.8 C165.576,162.8 167.592,154.064 167.592,135.92 C167.592,117.776 165.576,109.04 159.816,109.04 Z",
                          id: "error-2-0"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M107.456,144.368 L88.16,144.368 C90.752,138.992 95.456,133.712 99.68,126.8 C105.344,117.584 108.128,109.904 108.128,103.856 C108.128,102.8 108.032,101.552 107.84,100.112 L94.688,110.096 C95.168,110.48 95.552,110.864 95.744,111.344 C96.032,111.92 96.128,112.592 96.128,113.264 C96.128,117.872 93.344,123.728 88.736,131.312 C84.128,139.088 80,144.944 80,151.472 L80,152.144 C80.672,150.992 81.92,150.608 83.84,150.608 L107.456,150.608 L107.456,158.096 C107.456,162.704 106.304,164.816 102.272,165.776 L102.272,167.696 L127.52,167.696 L127.52,165.776 C123.488,164.816 122.336,162.704 122.336,158.096 L122.336,150.608 L126.56,150.608 C128.288,150.608 129.152,151.376 129.632,153.008 L132.224,140.528 C130.208,143.12 128.288,144.368 125.792,144.368 L122.336,144.368 L122.336,115.184 C122.336,110.96 122.912,105.392 124.064,98.384 L122.048,98 C120.128,109.04 115.04,115.856 107.456,118.064 L107.456,144.368 Z",
                          id: "error-1-4"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M37.4817931,46.5 L37.4817931,39.6206897 C37.4817931,33.5862069 37.9645517,30.8103448 44.9645517,30.8103448 C55.705931,30.8103448 63.5507586,37.3275862 66.6886897,48.9137931 L68.2576552,48.6724138 L64.2748966,22 C62.8266207,23.5689655 60.7748966,24.0517241 57.7576552,24.0517241 L10.568,24.0517241 L10.568,27.4310345 C14.3093793,27.6724138 16.2404138,30.2068966 16.2404138,34.9137931 L16.2404138,92.9655172 C16.2404138,97.6724138 14.3093793,100.327586 10.568,100.568966 L10.568,103.948276 L55.3438621,103.948276 C60.6542069,103.948276 63.9128276,104.068966 65.4817931,106 L73.568,76.0689655 L72.3611034,75.7068966 C65.6024828,90.0689655 56.6714483,97.3103448 45.8093793,97.3103448 C37.6024828,97.3103448 37.4817931,93.5689655 37.4817931,85.6034483 L37.4817931,53.5 L40.6197241,53.5 C49.1886897,53.5 53.6542069,57.1206897 55.3438621,65.8103448 L56.7921379,65.8103448 L54.0162759,37.6896552 L52.568,37.6896552 C51.9645517,43.9655172 49.068,46.5 42.6714483,46.5 L37.4817931,46.5 Z",
                          id: "error-1-e"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M77.384,24 L114.248,24 C124.232,24 129.224,27.072 129.224,33.792 C129.224,40.032 125.384,44.64 117.512,48.672 C124.616,58.176 127.976,69.12 131.912,80.256 C132.488,81.792 133.064,82.848 133.448,83.424 C134.216,84.384 135.176,84.768 136.52,84.864 L136.52,87.552 L111.848,87.552 L111.848,84.864 C113.672,84.768 114.536,83.712 114.536,81.696 C114.536,78.528 111.848,68.352 103.688,54.816 C102.152,55.488 100.616,55.872 98.792,56.256 L98.792,78.816 C98.792,82.656 100.232,84.672 103.208,84.864 L103.208,87.552 L77.384,87.552 L77.384,84.864 C80.36,84.672 81.896,82.56 81.896,78.816 L81.896,32.64 C81.896,28.896 80.36,26.88 77.384,26.688 L77.384,24 Z M98.792,49.92 C107.432,47.616 112.136,42.624 112.136,36.576 C112.136,32.256 109.64,29.856 105.128,29.856 C100.424,29.856 98.792,31.584 98.792,36 L98.792,49.92 Z",
                          id: "error-2-r"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M140.072,24 L176.936,24 C186.92,24 191.912,27.072 191.912,33.792 C191.912,40.032 188.072,44.64 180.2,48.672 C187.304,58.176 190.664,69.12 194.6,80.256 C195.176,81.792 195.752,82.848 196.136,83.424 C196.904,84.384 197.864,84.768 199.208,84.864 L199.208,87.552 L174.536,87.552 L174.536,84.864 C176.36,84.768 177.224,83.712 177.224,81.696 C177.224,78.528 174.536,68.352 166.376,54.816 C164.84,55.488 163.304,55.872 161.48,56.256 L161.48,78.816 C161.48,82.656 162.92,84.672 165.896,84.864 L165.896,87.552 L140.072,87.552 L140.072,84.864 C143.048,84.672 144.584,82.56 144.584,78.816 L144.584,32.64 C144.584,28.896 143.048,26.88 140.072,26.688 L140.072,24 Z M161.48,49.92 C170.12,47.616 174.824,42.624 174.824,36.576 C174.824,32.256 172.328,29.856 167.816,29.856 C163.112,29.856 161.48,31.584 161.48,36 L161.48,49.92 Z",
                          id: "error-3-r"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M192.744,56.6360024 C192.744,36.1880024 205.416,22.9400024 223.08,22.9400024 C240.456,22.9400024 251.976,35.1320024 251.976,55.7720024 C251.976,65.1800024 248.808,73.5320024 243.336,79.4840024 C237.96,85.3400024 230.28,88.7000024 222.408,88.7000024 C204.264,88.7000024 192.744,76.4120024 192.744,56.6360024 Z M221.544,28.8920024 C213.96,28.8920024 210.408,35.7080024 210.408,49.4360024 C210.408,71.5160024 214.44,82.4600024 222.984,82.4600024 C230.568,82.4600024 234.12,75.6440024 234.12,61.7240024 C234.12,39.7400024 230.088,28.8920024 221.544,28.8920024 Z",
                          id: "error-4-o"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M252,24 L298.12987,24 C310.623377,24 316.87013,27.8187311 316.87013,36.1722054 C316.87013,43.929003 312.064935,49.6570997 302.214286,54.6691843 C311.103896,66.4833837 315.308442,80.0876133 320.233766,93.9305136 C320.954545,95.8398792 321.675325,97.152568 322.155844,97.8685801 C323.116883,99.0619335 324.318182,99.5392749 326,99.6586103 L326,103 L295.126623,103 L295.126623,99.6586103 C297.409091,99.5392749 298.49026,98.2265861 298.49026,95.7205438 C298.49026,91.7824773 295.126623,79.1329305 284.915584,62.3066465 C282.993506,63.141994 281.071429,63.6193353 278.788961,64.0966767 L278.788961,92.1404834 C278.788961,96.9138973 280.590909,99.4199396 284.314935,99.6586103 L284.314935,103 L252,103 L252,99.6586103 C255.724026,99.4199396 257.646104,96.7945619 257.646104,92.1404834 L257.646104,34.7401813 C257.646104,30.0861027 255.724026,27.5800604 252,27.3413897 L252,24 Z M278.788961,56.2205438 C289.600649,53.3564955 295.487013,47.1510574 295.487013,39.6329305 C295.487013,34.2628399 292.363636,31.2794562 286.717532,31.2794562 C280.831169,31.2794562 278.788961,33.4274924 278.788961,38.9169184 L278.788961,56.2205438 Z",
                          id: "error-5-r"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "rect",
                        {
                          id: "error-right",
                          x: "252",
                          y: "113",
                          width: "74",
                          height: "4"
                        }
                      ),
                      /* @__PURE__ */ jsx("rect", { id: "error-left", x: "10", y: "113", width: "63", height: "4" }),
                      /* @__PURE__ */ jsx("rect", { id: "error-top", x: "10", y: "10", width: "307", height: "4" })
                    ] }),
                    /* @__PURE__ */ jsxs("g", { fillRule: "evenodd", children: [
                      /* @__PURE__ */ jsxs("g", { className: "glow fill-black", children: [
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-3-4",
                            filter: "url(#stroke-glow)",
                            href: "#error-3-4"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-2-0",
                            filter: "url(#stroke-glow)",
                            href: "#error-2-0"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-1-4",
                            filter: "url(#stroke-glow)",
                            href: "#error-1-4"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-1-e",
                            filter: "url(#stroke-glow)",
                            href: "#error-1-e"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-2-r",
                            filter: "url(#stroke-glow)",
                            href: "#error-2-r"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-3-r",
                            filter: "url(#stroke-glow)",
                            href: "#error-3-r"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-4-o",
                            filter: "url(#stroke-glow)",
                            href: "#error-4-o"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-5-r",
                            filter: "url(#stroke-glow)",
                            href: "#error-5-r"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-right",
                            filter: "url(#stroke-glow)",
                            href: "#error-right"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-left",
                            filter: "url(#stroke-glow)",
                            href: "#error-left"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "use",
                          {
                            className: "error-top",
                            filter: "url(#stroke-glow)",
                            href: "#error-top"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("g", { className: "top fill-none stroke-red-600 stroke-[2px] stroke-round stroke-linejoin-round", children: [
                        /* @__PURE__ */ jsx("use", { className: "error-3-4", href: "#error-3-4" }),
                        /* @__PURE__ */ jsx("use", { className: "error-2-0", href: "#error-2-0" }),
                        /* @__PURE__ */ jsx("use", { className: "error-1-4", href: "#error-1-4" }),
                        /* @__PURE__ */ jsx("use", { className: "error-1-e", href: "#error-1-e" }),
                        /* @__PURE__ */ jsx("use", { className: "error-2-r", href: "#error-2-r" }),
                        /* @__PURE__ */ jsx("use", { className: "error-3-r", href: "#error-3-r" }),
                        /* @__PURE__ */ jsx("use", { className: "error-4-o", href: "#error-4-o" }),
                        /* @__PURE__ */ jsx("use", { className: "error-5-r", href: "#error-5-r" }),
                        /* @__PURE__ */ jsx("use", { className: "error-right", href: "#error-right" }),
                        /* @__PURE__ */ jsx("use", { className: "error-left", href: "#error-left" }),
                        /* @__PURE__ */ jsx("use", { className: "error-top", href: "#error-top" })
                      ] })
                    ] })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center text-center", children: /* @__PURE__ */ jsxs("div", { className: "quote-wrapper", children: [
            /* @__PURE__ */ jsx("span", { className: "quote-top", children: "Lost in the " }),
            /* @__PURE__ */ jsx("span", { className: "quote-bottom", children: "Upside Down..?" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/", className: "cta", "aria-label": "Go to right side up", children: "Go to right side up" }) })
        ] })
      ]
    }
  );
};
var StrangerThings_default = StrangerThings;
var Terminal2 = ({ className }) => {
  const canvasRef = useRef(null);
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
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
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
      setDisplayText(
        (prev) => target.split("").map((char, index) => {
          if (index < iterations) return target[index];
          return "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
        }).join("")
      );
      if (iterations >= target.length) {
        clearInterval(interval);
        setIsDecrypted(true);
      }
      iterations += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-screen bg-black flex flex-col items-center justify-center p-8 overflow-hidden font-mono relative ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
          opacity: 0;
        }
      ` }),
        /* @__PURE__ */ jsx(
          "canvas",
          {
            ref: canvasRef,
            className: "absolute inset-0 z-0 opacity-20 pointer-events-none"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "z-10 w-full max-w-4xl bg-black/40 backdrop-blur-sm border border-[#0f0]/20 p-8 sm:p-12 rounded-lg shadow-[0_0_50px_rgba(0,255,0,0.1)] relative overflow-hidden group animate-fade-in-scale",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0f0]/40 to-transparent" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-8 text-[#0f0]/60 text-xs sm:text-sm tracking-widest uppercase", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[#0f0] rounded-full animate-pulse" }),
                "System Status: Breach Detected"
              ] }),
              /* @__PURE__ */ jsx("h1", { className: "text-2xl xs:text-3xl sm:text-6xl font-bold text-[#0f0] mb-4 sm:mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(0,255,0,0.5)] min-h-[1.2em] break-all", children: displayText }),
              /* @__PURE__ */ jsx("p", { className: "text-[#0f0]/80 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-2xl leading-relaxed", children: "The node you are attempting to ping is non-responsive. The packets have been lost in the digital aether." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6", children: [
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: "/",
                    className: "px-8 py-4 bg-[#0f0] text-black font-black uppercase tracking-tighter hover:bg-[#00cc00] transition-colors flex items-center justify-center gap-2 group/btn active:scale-95",
                    children: [
                      "Terminal Home",
                      /* @__PURE__ */ jsx("span", { className: "group-hover/btn:translate-x-1 transition-transform", children: "_" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("button", { className: "px-8 py-4 border border-[#0f0]/40 text-[#0f0] font-bold uppercase tracking-widest hover:bg-[#0f0]/5 transition-colors", children: "Brute Force Recovery" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t border-[#0f0]/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] text-[#0f0]/40 font-bold uppercase tracking-wider", children: [
                /* @__PURE__ */ jsx("div", { children: "IP: 127.0.0.1" }),
                /* @__PURE__ */ jsx("div", { children: "Port: 404" }),
                /* @__PURE__ */ jsx("div", { children: "Hash: MD5(VOID)" }),
                /* @__PURE__ */ jsx("div", { children: "Sig: 0xDEADBEEF" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0f0]/20 to-transparent" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 right-6 text-[#0f0]/20 text-sm italic pointer-events-none", children: "root@void:/# _" })
      ]
    }
  );
};
var Terminal_default = Terminal2;
var allLogs = [
  "Compiling page /404...",
  "Analyzing dependencies...",
  "Error: Module not found",
  "Deployment failed [404]"
];
var Vercel = ({ className }) => {
  const [logs, setLogs] = useState([]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i < allLogs.length) {
        const now = /* @__PURE__ */ new Date();
        const time = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0") + ":" + now.getSeconds().toString().padStart(2, "0");
        setLogs((prev) => [...prev, { text: allLogs[i], time }]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden font-sans relative ${className || ""}`,
      children: [
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-5px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.3s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-blink {
          animation: blink 0.8s infinite;
        }
        
        .delay-200 { animation-delay: 200ms; }
      ` }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 opacity-20 [background-image:radial-gradient(#333_1px,transparent_1px)] [background-size:40px_40px]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-2xl flex flex-col items-center", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "mb-16 animate-scale-in",
              children: /* @__PURE__ */ jsx("svg", { width: "80", height: "80", viewBox: "0 0 75 65", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M37.5 0L75 65H0L37.5 0Z", fill: "white" }) })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 sm:mb-16", children: [
            /* @__PURE__ */ jsx(
              "h1",
              {
                className: "text-7xl sm:text-9xl font-bold tracking-tighter mb-4 animate-fade-in-up",
                children: "404"
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-gray-400 text-base sm:text-xl font-medium animate-fade-in delay-200 px-4",
                style: { opacity: 0, animationFillMode: "forwards" },
                children: "This deployment could not be found."
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full bg-[#111] border border-white/10 rounded-lg p-6 font-mono text-sm mb-12 shadow-2xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-4 border-b border-white/5 pb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500" }),
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-[#333]" }),
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-[#333]" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              logs.map((log, i) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `flex gap-4 animate-fade-in-right ${log.text.includes("Error") || log.text.includes("failed") ? "text-red-400" : "text-gray-400"}`,
                  children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-gray-600", children: [
                      "[",
                      log.time,
                      "]"
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: log.text })
                  ]
                },
                i
              )),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "inline-block w-2 h-4 bg-white/40 ml-1 animate-blink"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 w-full", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/",
                className: "flex-1 bg-white text-black font-bold py-4 rounded-md text-center hover:bg-gray-200 transition-colors active:scale-95 shadow-lg shadow-white/5",
                children: "View Documentation"
              }
            ),
            /* @__PURE__ */ jsx("button", { className: "flex-1 border border-white/10 text-white font-bold py-4 rounded-md hover:bg-white/5 transition-colors active:scale-95", children: "Check Status" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-20 flex gap-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" }),
              "Vercel System"
            ] }),
            /* @__PURE__ */ jsx("div", { children: "Region: SFO1" }),
            /* @__PURE__ */ jsx("div", { children: "ID: 404-VOID" })
          ] })
        ] })
      ]
    }
  );
};
var Vercel_default = Vercel;
function Void({ className }) {
  const canvasRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [titleIdx, setTitleIdx] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const messages = [
    {
      title: ["You've drifted beyond", "the known routes"],
      subtitle: "The page you're seeking doesn't exist\u2014or it's been swallowed by the void. Return to safety below."
    },
    {
      title: ["Signal lost.", "Reestablishing connection..."],
      subtitle: "This route has evaporated into the void. Use the links below to find your way back."
    },
    {
      title: ["Coordinates unknown.", "Destination not found."],
      subtitle: "You've reached the edge of the map. Turn back before the void consumes you."
    },
    {
      title: ["404.", "We have a problem."],
      subtitle: "Houston, this page doesn't exist. Abort and return to base."
    }
  ];
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const move = (e) => {
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
      const digits = document.querySelectorAll(".void-digit");
      let lerpX = 0;
      let lerpY = 0;
      let active = false;
      setTimeout(() => active = true, 1200);
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
    let handleResize;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let width = window.innerWidth;
      let height = window.innerHeight;
      let particles = [];
      const maxDistance = 150;
      const mouseRadius = 200;
      const particleCount = Math.min(120, Math.floor(width * height / 1e4));
      class Particle {
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
    }, 6e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: `relative min-h-screen flex flex-col items-center justify-center bg-[#05050a] text-[#f0f0f3] overflow-hidden font-sans ${className || ""}`, children: [
    /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
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
      ` }),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(0,229,199,0.1)_0%,transparent_50%),radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(138,43,226,0.08)_0%,transparent_50%),radial-gradient(ellipse_50%_30%_at_50%_80%,rgba(0,150,255,0.07)_0%,transparent_50%)] animate-[pulse_10s_ease-in-out_infinite_alternate]" }),
    /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "fixed inset-0 w-full h-full opacity-60" }),
    /* @__PURE__ */ jsxs("main", { className: "relative z-10 w-full max-w-[900px] px-6 py-12 md:py-16 flex flex-col items-center gap-8 md:gap-12 text-center", children: [
      /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-3 animate-fade-in opacity-0", style: { animationDelay: "200ms" }, children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[#00e5c7] shadow-[0_0_12px_#00e5c7] animate-pulse" }),
        /* @__PURE__ */ jsx("code", { className: "text-[10px] md:text-xs text-[#6b6b7a] tracking-widest font-mono uppercase", children: "// ERROR: SYSTEM_VOID_0x19A" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "flex flex-col items-center gap-6 md:gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 md:gap-2 perspective-[1000px] select-none", children: ["4", "0", "4"].map((digit, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "void-digit text-[clamp(6rem,20vw,14.5rem)] font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 drop-shadow-[0_10px_40px_rgba(255,255,255,0.1)] transition-transform duration-200",
            style: { transitionDelay: `${i * 100}ms` },
            children: digit
          },
          i
        )) }),
        /* @__PURE__ */ jsxs("div", { className: `transition-all duration-500 transform ${isChanging ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`, children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-2xl md:text-5xl font-bold tracking-tight mb-4 flex flex-col items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white/80", children: messages[titleIdx].title[0] }),
            /* @__PURE__ */ jsx("span", { className: "text-[#00e5c7] drop-shadow-[0_0_15px_rgba(0,229,199,0.3)]", children: messages[titleIdx].title[1] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-base md:text-xl max-w-lg mx-auto leading-relaxed", children: messages[titleIdx].subtitle })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4 mt-4 w-full sm:w-auto px-4", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/",
              className: "px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 group",
              children: [
                "Return Home",
                /* @__PURE__ */ jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "\u2192" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => history.back(),
              className: "px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2",
              children: "Back Track"
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setOpen(true),
              className: "px-8 py-4 rounded-2xl text-gray-500 font-bold hover:text-white transition-all flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
                  /* @__PURE__ */ jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
                ] }),
                "Search"
              ]
            }
          )
        ] })
      ] })
    ] }),
    open && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in",
        onClick: () => setOpen(false),
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#10101a]/90 p-8 shadow-2xl overflow-hidden relative",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00e5c7] to-transparent" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#00e5c7", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
                  /* @__PURE__ */ jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
                ] }),
                /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Search the Void" })
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  onKeyDown: (e) => {
                    if (e.key === "Escape") setOpen(false);
                    if (e.key === "Enter") {
                      const v = e.currentTarget.value.trim();
                      if (v) window.location.href = `https://www.google.com/search?q=${encodeURIComponent(v)}`;
                    }
                  },
                  placeholder: "Type your coordinates...",
                  className: "w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none font-mono text-lg text-white focus:border-[#00e5c7]/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-between text-xs text-gray-500 font-mono", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("kbd", { className: "px-2 py-1 bg-white/5 rounded border border-white/10", children: "ENTER" }),
                  "to search"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("kbd", { className: "px-2 py-1 bg-white/5 rounded border border-white/10", children: "ESC" }),
                  "to exit"
                ] })
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-8 text-[8px] md:text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em] hidden sm:block", children: "Void Protocol Active // Stable" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 right-8 text-[8px] md:text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em] hidden sm:block text-right", children: "Coordinates: UNKNOWN" })
  ] });
}

export { AmongUs_default as AmongUs, BlueGlitch_default as BlueGlitch, BugGame404 as BugGame, GeeksforGeeks_default as GeeksforGeeks, Google_default as Google, MacOs_default as MacOs, ModernPage_default as ModernPage, Particles_default as Particles, Poet_default as Poet, RetroTv_default as RetroTv, SimplePage_default as SimplePage, Snow_default as Snow, StoneAge_default as StoneAge, StrangerThings_default as StrangerThings, Terminal_default as Terminal, Vercel_default as Vercel, Void };
