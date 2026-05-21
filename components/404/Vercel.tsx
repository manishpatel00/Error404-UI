"use client";


import Link from "next/link";
import { useEffect, useState } from "react";

const allLogs = [
  "Compiling page /404...",
  "Analyzing dependencies...",
  "Error: Module not found",
  "Deployment failed [404]"
];

const Vercel = ({ className }: { className?: string }) => {
  const [logs, setLogs] = useState<{ text: string; time: string }[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i < allLogs.length) {
        const now = new Date();
        const time = now.getHours().toString().padStart(2, '0') + ':' + 
                     now.getMinutes().toString().padStart(2, '0') + ':' + 
                     now.getSeconds().toString().padStart(2, '0');
        setLogs((prev) => [...prev, { text: allLogs[i], time }]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden font-sans relative ${className || ""}`}
    >
      <style jsx global>{`
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
      `}</style>
      
      <div className="absolute inset-0 z-0 opacity-20 [background-image:radial-gradient(#333_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        <div
          className="mb-16 animate-scale-in"
        >
          <svg width="80" height="80" viewBox="0 0 75 65" fill="none">
            <path d="M37.5 0L75 65H0L37.5 0Z" fill="white" />
          </svg>
        </div>

        <div className="text-center mb-8 sm:mb-16">
          <h1 
            className="text-7xl sm:text-9xl font-bold tracking-tighter mb-4 animate-fade-in-up"
          >
            404
          </h1>
          <p 
            className="text-gray-400 text-base sm:text-xl font-medium animate-fade-in delay-200 px-4"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            This deployment could not be found.
          </p>
        </div>

        <div className="w-full bg-[#111] border border-white/10 rounded-lg p-6 font-mono text-sm mb-12 shadow-2xl">
          <div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-[#333]" />
            <div className="w-3 h-3 rounded-full bg-[#333]" />
          </div>
          <div className="space-y-2">
            {logs.map((log, i) => (
              <div 
                key={i}
                className={`flex gap-4 animate-fade-in-right ${log.text.includes("Error") || log.text.includes("failed") ? "text-red-400" : "text-gray-400"}`}
              >
                <span className="text-gray-600">[{log.time}]</span>
                <span>{log.text}</span>
              </div>
            ))}
            <span 
              className="inline-block w-2 h-4 bg-white/40 ml-1 animate-blink"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Link
            href="/"
            className="flex-1 bg-white text-black font-bold py-4 rounded-md text-center hover:bg-gray-200 transition-colors active:scale-95 shadow-lg shadow-white/5"
          >
            View Documentation
          </Link>
          <button className="flex-1 border border-white/10 text-white font-bold py-4 rounded-md hover:bg-white/5 transition-colors active:scale-95">
            Check Status
          </button>
        </div>

        <div className="mt-20 flex gap-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Vercel System
          </div>
          <div>Region: SFO1</div>
          <div>ID: 404-VOID</div>
        </div>
      </div>
    </div>
  );
};

export default Vercel;
