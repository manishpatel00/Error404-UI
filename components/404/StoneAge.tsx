"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Arvo } from "next/font/google";


const arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const StoneAge = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen w-full bg-[#fcf8f0] flex flex-col items-center justify-center p-8 overflow-hidden relative ${arvo.className} ${className || ""}`}
    >
      <style jsx global>{`
        .paper-texture {
          background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
        }

        .rock-shadow {
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.1));
        }
      `}</style>

      <style jsx global>{`
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
      `}</style>
      
      <div className="absolute inset-0 paper-texture opacity-40 pointer-events-none" />

      <div 
        className="absolute top-20 right-[15%] opacity-10 select-none animate-float-up"
      >
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path d="M40 160 L80 40 L120 180 L160 80 L180 160 Z" fill="#4a3b2a" />
        </svg>
      </div>

      <div 
        className="absolute bottom-20 left-[10%] opacity-10 select-none animate-float-up-large"
      >
        <svg width="250" height="250" viewBox="0 0 200 200">
          <path d="M50 180 L100 20 L150 160 Z" fill="#4a3b2a" />
        </svg>
      </div>

      <div 
        className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center animate-fade-in-up"
      >
        <div className="relative mb-8">
          <div
            className="relative z-20 animate-rock"
          >
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt="Stone Age Illustration"
              className="w-full max-w-[320px] sm:max-w-[450px] h-auto rock-shadow rounded-3xl"
            />
          </div>
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black opacity-[0.05] blur-xl rounded-full" />
        </div>

        <div className="px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#4a3b2a] mb-4 uppercase tracking-tighter">
            Prehistoric 404
          </h1>
          <p className="text-[#6b5844] text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-xl mx-auto font-medium">
            This endpoint hasn&apos;t been discovered yet. It&apos;s still in the early Jurassic.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Link
              href="/"
              className="px-10 py-4 bg-[#4a3b2a] text-[#fcf8f0] font-bold rounded-xl hover:bg-[#5c4a36] transition-all transform hover:-translate-y-1 hover:shadow-xl active:scale-95 text-lg"
            >
              Back to Future
            </Link>
            <button className="px-10 py-4 border-2 border-[#4a3b2a]/20 text-[#4a3b2a] font-bold rounded-xl hover:bg-[#4a3b2a]/5 transition-all text-lg">
              Explore History
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full px-8 flex justify-between items-center text-[#4a3b2a]/20 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
        <span>Pleistocene Era</span>
        <div className="h-px flex-1 mx-8 bg-[#4a3b2a]/10" />
        <span>No Connection Found</span>
      </div>
    </div>
  );
};

export default StoneAge;

