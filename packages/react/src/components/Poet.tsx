"use client";

import Link from "next/link";

const Poet = ({ className }: { className?: string }) => {
  return (
    <div
      className={`min-h-screen bg-[#1a1a1a] flex items-center justify-center p-6 relative overflow-hidden font-serif ${className || ""}`}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap");

        .gothic-font {
          font-family: "Playfair Display", serif;
        }

        .parchment {
          background-color: #f4ecd8;
          background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
          box-shadow:
            inset 0 0 100px rgba(0, 0, 0, 0.1),
            0 20px 50px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        .parchment::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            transparent 30%,
            rgba(0, 0, 0, 0.05) 100%
          );
          pointer-events: none;
        }
      `}</style>

      <style jsx global>{`
        @keyframes floatRotate {
          0% {
            transform: translateY(20%) rotate(-10deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(80%) rotate(0deg);
            opacity: 0;
            left: 120%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gentleFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
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

        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-600 {
          animation-delay: 600ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-800 {
          animation-delay: 800ms;
        }
        .delay-900 {
          animation-delay: 900ms;
        }
        .delay-3000 {
          animation-delay: 3s;
        }
      `}</style>

      <div className="absolute z-0 pointer-events-none scale-[2] left-[-120%] top-[20%] animate-float-bg">
        <svg
          width="200"
          height="100"
          viewBox="0 0 200 100"
          fill="currentColor"
          className="text-black"
        >
          <path d="M100 50 C120 40 150 20 180 20 C160 40 140 50 100 50 C60 50 40 40 20 20 C50 20 80 40 100 50 Z" />
          <path d="M100 50 C110 55 120 65 100 80 C80 65 90 55 100 50 Z" />
        </svg>
      </div>

      <div className="parchment w-full max-w-4xl min-h-[70vh] rounded-sm p-6 xs:p-8 md:p-16 flex flex-col md:flex-row gap-8 md:gap-12 border border-[#d4c5a1] relative z-10 animate-slide-up m-4">
        <div className="flex-1 gothic-font">
          <div className="text-[#2c241a] space-y-2 md:space-y-3">
            <p className="text-sm md:text-base opacity-60 mb-8 tracking-widest uppercase animate-slide-in-left delay-500">
              // Archive: /missing.pdf
            </p>

            <p className="animate-slide-in-left delay-600">
              Once upon a midnight dreary,
            </p>
            <p className="animate-slide-in-left delay-700">
              While I web surfed, weak and weary,
            </p>
            <p className="animate-slide-in-left delay-800">
              For pages long forgotten yore.
            </p>
            <p className="animate-slide-in-left delay-900">
              When I clicked my fav&apos;rite href,
            </p>
            <p
              className="animate-slide-in-left"
              style={{ animationDelay: "1050ms" }}
            >
              Suddenly there came a warning,
            </p>
            <p
              className="animate-slide-in-left"
              style={{ animationDelay: "1200ms" }}
            >
              and my heart was filled with mourning,
            </p>

            <p
              className="pt-2 sm:pt-4 text-lg sm:text-xl md:text-2xl italic font-medium animate-slide-in-left"
              style={{ animationDelay: "1350ms" }}
            >
              Mourning for my dear &quot;/missing.pdf&quot;,
            </p>

            <p
              className="pt-2 sm:pt-4 animate-slide-in-left"
              style={{ animationDelay: "1500ms" }}
            >
              &quot;Tis not possible!&quot; I muttered,
            </p>

            <p
              className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight animate-slide-in-left"
              style={{ animationDelay: "1650ms" }}
            >
              &quot;Give thine pages, I implore!&quot;
            </p>

            <div
              className="pt-8 sm:pt-12 animate-slide-in-left"
              style={{ animationDelay: "1800ms" }}
            >
              <span className="text-4xl sm:text-5xl md:text-7xl font-black text-[#8b0000] drop-shadow-sm">
                404
              </span>
              <p className="text-base sm:text-lg md:text-xl font-bold mt-2 opacity-80 uppercase tracking-tighter">
                Quoth the server, &quot;Nevermore.&quot;
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-6 animate-fade-in delay-3000">
            <Link
              href="/"
              className="px-6 py-2 border-b-2 border-[#8b0000] text-[#8b0000] font-bold hover:bg-[#8b0000]/5 transition-all active:scale-95"
            >
              Back to Light
            </Link>
            <button className="px-6 py-2 text-[#2c241a]/60 font-bold hover:text-[#2c241a] transition-all">
              Mourn Again
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center justify-center grayscale opacity-80 contrast-125">
          <div className="relative animate-gentle-float">
            <svg
              width="200"
              height="280"
              viewBox="0 0 200 280"
              className="text-[#2c241a]"
            >
              <path
                fill="currentColor"
                d="M100 20 C120 20 160 40 160 100 C160 160 120 200 100 220 C80 200 40 160 40 100 C40 40 80 20 100 20 Z"
                opacity="0.1"
              />
              <path
                fill="currentColor"
                d="M100 40 C110 40 130 50 130 80 C130 110 110 140 100 150 C90 140 70 110 70 80 C70 50 90 40 100 40 Z"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M100 150 L100 240 M80 220 L120 220"
              />
              <circle
                cx="100"
                cy="80"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poet;
