"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

export default function BugGame404() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [gameState, setGameState] = useState<
    "start" | "play" | "gameover" | "victory"
  >("start");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const stateRef = useRef<"start" | "play" | "gameover" | "victory">("start");
  const scoreRef = useRef(0);
  const speedRef = useRef(3);

  const obstaclesRef = useRef<
    Array<{
      x: number;
      gapY: number;
      gapHeight: number;
      label: string;
      passed: boolean;
    }>
  >([]);

  const particlesRef = useRef<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
      color: string;
      decay: number;
    }>
  >([]);
  const bgParticlesRef = useRef<
    Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    }>
  >([]);

  const playerRef = useRef({
    x: 100,
    y: 300,
    w: 34,
    h: 24,
    vy: 0,
    rotation: 0,
    wingAngle: 0,
  });

  const animationFrameRef = useRef<number>(0);
  const scaleRef = useRef(1);

  const GRAVITY = 0.25;
  const JUMP_FORCE = -5.5;
  const MAX_SPEED = 4;
  const OBSTACLE_SPACING = 300;
  const OBSTACLE_WIDTH = 60;
  const MAX_SCORE = 404;

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
    "ZERO",
  ];

  useEffect(() => {
    const saved = localStorage.getItem("bugHigh");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  const initBackground = useCallback((width: number, height: number) => {
    bgParticlesRef.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.2 + 0.05,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  const spawnObstacle = (x: number, height: number) => {
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
      passed: false,
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
      wingAngle: 0,
    };

    for (let i = 0; i < 3; i++) {
      spawnObstacle(width + 500 + i * OBSTACLE_SPACING, height);
    }
  }, [initBackground]);

  const createBurst = (x: number, y: number, color: string, count = 8) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        size: Math.random() * 3 + 1,
        color,
        decay: Math.random() * 0.04 + 0.02,
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

      const pipeGrad = ctx.createLinearGradient(
        obs.x,
        0,
        obs.x + OBSTACLE_WIDTH,
        0,
      );
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

  const handleInput = (
    e: React.MouseEvent | React.TouchEvent | KeyboardEvent,
  ) => {
    if (
      stateRef.current === "start" ||
      stateRef.current === "gameover" ||
      stateRef.current === "victory"
    ) {
      if (
        e.type === "keydown" &&
        (e as KeyboardEvent).code !== "Space" &&
        (e as KeyboardEvent).code !== "Enter"
      )
        return;
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
    const handleKey = (e: KeyboardEvent) => {
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

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-slate-950 select-none font-sans"
      onMouseDown={handleInput}
      onTouchStart={(e) => {
        handleInput(e);
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full touch-none" />

      {gameState === "start" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 animate-in fade-in bg-black/40 backdrop-blur-sm px-4">
          <div className="relative mb-6 sm:mb-8">
            <div className="absolute -inset-4 bg-purple-500/30 blur-xl rounded-full animate-pulse" />
            <span className="relative text-5xl sm:text-7xl select-none">
              👾
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tighter mb-2 drop-shadow-xl text-center">
            <span className="text-purple-400">404</span> GLITCH JUMP
          </h1>
          <p className="text-slate-400 mb-6 sm:mb-8 font-mono text-xs sm:text-sm tracking-widest text-center max-w-xs">
            PROTOCOL: AVOID_THE_VOID
            <br />
            TARGET: SCORE_404
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setGameState("play");
              stateRef.current = "play";
            }}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black font-black text-base sm:text-lg rounded-full hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            START DEBUGGING
          </button>
          <div className="absolute bottom-6 sm:bottom-10 text-slate-500 text-[10px] sm:text-xs uppercase animate-pulse">
            Tap / Space / Click to Fly
          </div>
        </div>
      )}

      {(gameState === "gameover" || gameState === "victory") && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/70 backdrop-blur-md animate-in zoom-in-95">
          <div className="bg-slate-900/90 border border-slate-700 p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />

            <div className="mb-4">
              {gameState === "victory" ? (
                <span className="text-6xl">🎉</span>
              ) : (
                <span className="text-6xl">💀</span>
              )}
            </div>

            <h2 className="text-3xl font-black text-white mb-1">
              {gameState === "victory" ? "ERROR RESOLVED" : "CONNECTION LOST"}
            </h2>
            <div className="text-slate-400 text-xs font-mono mb-6 uppercase tracking-widest">
              {gameState === "victory"
                ? "System Restored Successfully"
                : "The Bug Was Squashed"}
            </div>

            <div className="w-full bg-slate-800 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-slate-400 text-xs uppercase font-bold">
                  Score
                </span>
                <span className="text-4xl font-black text-white leading-none">
                  {score}
                </span>
              </div>
              <div className="w-full h-px bg-slate-700 my-2" />
              <div className="flex justify-between items-end">
                <span className="text-slate-500 text-xs uppercase font-bold">
                  Best
                </span>
                <span className="text-xl font-bold text-slate-300 leading-none">
                  {highScore}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  resetGame();
                }}
                className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-purple-900/20"
              >
                RETRY
              </button>
              <Link
                href="/"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors"
              >
                HOME
              </Link>
            </div>

            <div className="mt-6 text-[10px] text-slate-600 font-mono">
              ERROR_CODE_404_PAGE_NOT_FOUND
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
