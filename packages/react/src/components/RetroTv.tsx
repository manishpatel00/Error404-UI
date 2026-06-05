"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const RetroTv = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

    let animationFrame: number;

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

  return (
    <div
      className={`min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4 sm:p-8 font-mono overflow-hidden select-none ${className || ""}`}
    >
      <style jsx global>{`
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
          background:
            linear-gradient(rgba(18, 16, 16, 0.1) 50%, rgba(0, 0, 0, 0.2) 50%),
            linear-gradient(
              90deg,
              rgba(255, 0, 0, 0.04),
              rgba(0, 255, 0, 0.01),
              rgba(0, 0, 255, 0.04)
            );
          z-index: 2;
          background-size:
            100% 4px,
            6px 100%;
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
          background:
            radial-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 100%),
            linear-gradient(
              to bottom,
              rgba(18, 16, 16, 0) 0%,
              rgba(18, 16, 16, 0.1) 50%,
              rgba(18, 16, 16, 0) 100%
            );
          z-index: 2;
          pointer-events: none;
        }

        .tv-frame {
          box-shadow:
            inset 0 0 40px rgba(0, 0, 0, 0.8),
            0 0 100px rgba(0, 0, 0, 0.5),
            0 20px 50px rgba(0, 0, 0, 0.4);
        }

        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .scanline-overlay {
          width: 100%;
          height: 100px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255, 255, 255, 0.03) 50%,
            transparent 100%
          );
          position: absolute;
          top: 0;
          left: 0;
          animation: scanline 8s linear infinite;
          z-index: 3;
        }

        @keyframes tvOn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-tv-on {
          animation: tvOn 0.3s ease-out forwards;
        }
      `}</style>

      <div className="relative w-full max-w-4xl flex flex-col items-center">
        <div className="w-full bg-[#2a2a2a] p-4 sm:p-8 rounded-[3rem] border-8 border-[#333] tv-frame">
          <div className="aspect-[4/3] w-full bg-black rounded-[2rem] overflow-hidden crt-curve border-4 border-black box-content relative">
            {/* <AnimatePresence> was here, replaced with conditional rendering and CSS based transitions */}
            {!isOn && (
              <div
                className="absolute inset-0 bg-black z-[100] flex items-center justify-center transition-all duration-100 origin-center"
                style={{
                  transform: isOn ? "scaleY(0)" : "scaleY(1)",
                  opacity: isOn ? 0 : 1,
                }}
              />
            )}

            {isOn && (
              <>
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full opacity-30"
                />
                <div className="scanline-overlay" />

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <div className="text-white text-center animate-tv-on px-4">
                    <h1 className="text-[4rem] xs:text-[6rem] sm:text-[10rem] font-bold tracking-tighter mix-blend-difference">
                      404
                    </h1>
                    <div className="px-3 sm:px-4 py-1 sm:py-2 bg-white text-black font-bold text-sm xs:text-base sm:text-xl uppercase skew-x-[-12deg] inline-block">
                      No Signal
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 left-6 z-20 bg-green-500/80 text-black px-3 py-1 text-sm font-bold rounded-sm animate-pulse">
                  CH {channel}
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 px-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase text-white/40 tracking-widest">
                Intensity
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={noiseIntensity}
                onChange={(e) => setNoiseIntensity(parseFloat(e.target.value))}
                className="w-full h-1 bg-white/10 appearance-none rounded-full accent-white"
              />
            </div>

            <button
              onClick={() => setChannel((prev) => (prev === 404 ? 13 : 404))}
              className="px-4 py-2 bg-[#333] hover:bg-[#444] text-white/60 text-xs rounded-md transition-colors border-b-2 border-black"
            >
              CHANNEL
            </button>

            <button
              onClick={() => setIsOn(!isOn)}
              className={`px-4 py-2 text-xs rounded-md transition-all border-b-2 border-black font-bold ${isOn ? "bg-red-900 text-red-100" : "bg-green-900 text-green-100"}`}
            >
              {isOn ? "POWER OFF" : "POWER ON"}
            </button>

            <Link
              href="/"
              className="px-4 py-2 bg-white text-black text-xs rounded-md font-bold text-center hover:bg-gray-200 transition-colors"
            >
              HOME
            </Link>
          </div>
        </div>

        <div className="w-1/2 h-4 sm:h-8 bg-[#222] rounded-b-[2rem] mx-auto mt-[-4px] z-[-1]" />

        <div className="mt-12 text-white/10 text-xs tracking-[0.5em] uppercase pointer-events-none">
          Solid State Electronics // Model 404-X
        </div>
      </div>
    </div>
  );
};

export default RetroTv;
