"use client";


import Link from "next/link";

const ModernPage = ({ className }: { className?: string }) => {
  return (
    <div
      className={`min-h-screen bg-[#050505] flex items-center justify-center p-6 overflow-hidden relative font-sans ${className || ""}`}
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
      </div>

      <style jsx global>{`
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
      `}</style>
      
      <div 
        className="relative z-10 w-full max-w-2xl animate-fade-slide-up"
      >
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[1.5rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
          
          <div
            className="relative inline-block mb-6 sm:mb-8 animate-scale-in"
          >
            <h1 className="text-[6rem] sm:text-[10rem] md:text-[12rem] font-black leading-none tracking-tighter bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent select-none">
              404
            </h1>
            <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full z-[-1] group-hover:bg-white/10 transition-colors" />
          </div>

          <div
            className="animate-fade-slide-up-delayed"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
              Lost in the Digital Ether.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-md mx-auto leading-relaxed">
              The page you are seeking has drifted beyond our reach. 
              Let&apos;s navigate you back to solid ground.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-black font-bold rounded-xl sm:rounded-2xl hover:bg-gray-200 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-white/5"
              >
                Go Home
              </Link>
              <button className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border border-white/10 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white/5 transition-all active:scale-95">
                Take a Tour
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center gap-8 text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">
          <span>Security Verified</span>
          <span>•</span>
          <span>Node 404_X</span>
          <span>•</span>
          <span>Stable Connection</span>
        </div>
      </div>
    </div>
  );
};

export default ModernPage;

