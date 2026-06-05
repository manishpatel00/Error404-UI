"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
const BlueGlitch = ({
  fullScreen = true,
  className,
}: {
  fullScreen?: boolean;
  className?: string;
}) => {
  const [bootStep, setBootStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBootStep((prev) => (prev < 8 ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <main
      className={`relative flex items-center justify-center bg-[#000084] overflow-hidden select-none font-mono ${fullScreen ? "min-h-screen" : "h-full"} ${className || ""}`}
    >
      <style jsx global>{`
        @font-face {
          font-family: "DOS-VGA";
          src: url("https://fonts.cdnfonts.com/s/17263/Perfect%20DOS%20VGA%20437.woff")
            format("woff");
        }

        .crt-container {
          position: relative;
          width: 100%;
          height: 100%;
          background: #000084;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);
        }

        .crt-container::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background:
            linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
            linear-gradient(
              90deg,
              rgba(255, 0, 0, 0.06),
              rgba(0, 255, 0, 0.02),
              rgba(0, 0, 255, 0.06)
            );
          z-index: 10;
          background-size:
            100% 2px,
            3px 100%;
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
          0% {
            opacity: 0.27861;
          }
          5% {
            opacity: 0.34769;
          }
          10% {
            opacity: 0.23604;
          }
          15% {
            opacity: 0.90626;
          }
          20% {
            opacity: 0.18128;
          }
          25% {
            opacity: 0.83891;
          }
          30% {
            opacity: 0.65583;
          }
          35% {
            opacity: 0.57807;
          }
          40% {
            opacity: 0.26559;
          }
          45% {
            opacity: 0.84693;
          }
          50% {
            opacity: 0.96019;
          }
          55% {
            opacity: 0.08523;
          }
          60% {
            opacity: 0.71056;
          }
          65% {
            opacity: 0.73437;
          }
          70% {
            opacity: 0.28557;
          }
          75% {
            opacity: 0.96303;
          }
          80% {
            opacity: 0.2268;
          }
          85% {
            opacity: 0.20415;
          }
          90% {
            opacity: 0.85617;
          }
          95% {
            opacity: 0.41032;
          }
          100% {
            opacity: 0.9576;
          }
        }

        .dos-font {
          font-family: "DOS-VGA", monospace;
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
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(255, 255, 255, 0.05) 10%,
            rgba(0, 0, 0, 0.1) 100%
          );
          opacity: 0.1;
          position: absolute;
          bottom: 100%;
          animation: scanline 10s linear infinite;
        }

        @keyframes scanline {
          0% {
            bottom: 100%;
          }
          100% {
            bottom: -100px;
          }
        }

        @keyframes appear {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-appear {
          animation: appear 0.5s ease-out forwards;
        }
      `}</style>

      <div className="crt-container w-full max-w-5xl h-[85vh] sm:h-[80vh] border-4 sm:border-8 border-double border-[#bbb]/20 rounded-lg overflow-hidden flex flex-col items-center justify-center m-4">
        <div className="scanline" />

        <div className="w-full max-w-[90%] sm:max-w-3xl dos-font text-[10px] xs:text-xs sm:text-lg lg:text-xl space-y-3 sm:space-y-4">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block animate-appear">
              <div className="inverted-box text-xl xs:text-2xl sm:text-5xl font-bold py-1.5 xs:py-2 px-4 xs:px-6">
                WINDOWS
              </div>
            </div>
          </div>

          <div>
            {bootStep >= 1 && (
              <div className="animate-appear">
                A fatal exception 404 has occurred at C0DE:ABAD1DEA.
              </div>
            )}

            {bootStep >= 2 && (
              <div className="animate-appear">
                * The system could not find the file you requested.
              </div>
            )}

            {bootStep >= 3 && (
              <div className="animate-appear">
                * Press ANY BUTTON to try finding it again in the void.
              </div>
            )}

            {bootStep >= 4 && (
              <div className="animate-appear">
                * Contact your network administrator if this continues.
              </div>
            )}

            {bootStep >= 5 && (
              <div className="pt-8 animate-appear">
                Current State:{" "}
                <span className="text-red-500 underline">
                  ERROR_PAGE_NOT_FOUND
                </span>
              </div>
            )}

            {bootStep >= 6 && (
              <div className="text-center pt-12 animate-appear">
                Press any button to return home
                <span className="inline-block w-3 h-6 bg-[#bbb] ml-2 animate-pulse align-middle" />
              </div>
            )}

            {bootStep >= 7 && (
              <div className="flex justify-center pt-8 animate-appear">
                <Link
                  href="/"
                  className="inverted-box hover:bg-white hover:text-[#000084] transition-colors duration-200 px-8 py-2 font-bold uppercase tracking-widest text-sm sm:text-base border-2 border-transparent"
                >
                  Return to Safety
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-4 left-4 opacity-30 text-[10px] dos-font uppercase tracking-tighter">
          Kernel Memory: 0x4041337 | IRQ: 07 | DMA: 02
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-20" />
    </main>
  );
};

export default BlueGlitch;
