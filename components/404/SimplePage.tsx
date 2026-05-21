"use client";


import Link from "next/link";

const SimplePage = ({ className }: { className?: string }) => {
  return (
    <div
      className={`min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center p-6 font-sans relative ${className || ""}`}
    >
      <style jsx global>{`
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
      `}</style>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.02)_100%)] pointer-events-none" />

      <div 
        className="relative z-10 w-full max-w-[480px] text-center animate-fade-in-up"
      >
        <div className="mb-8 sm:mb-12">
          <h1 
            className="text-[100px] xs:text-[120px] md:text-[160px] font-black tracking-tighter text-black dark:text-white leading-none select-none animate-scale-in"
          >
            404
          </h1>
          <div className="h-px w-16 sm:w-24 bg-black/5 dark:bg-white/5 mx-auto mt-4" />
        </div>

        <div className="space-y-4 sm:space-y-6 px-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white tracking-tight">
            Something went sideways.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-sm mx-auto font-medium">
            The page you requested is currently unavailable. 
            It may have been moved or doesn&apos;t exist.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-4">
          <Link
            href="/"
            className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-5 rounded-2xl hover:opacity-90 transition-all active:scale-[0.98] shadow-2xl shadow-black/10 text-lg"
          >
            Return to Safety
          </Link>
          <button className="w-full text-gray-400 dark:text-gray-500 font-bold py-4 hover:text-black dark:hover:text-white transition-colors">
            Contact Support
          </button>
        </div>

        <div className="mt-24 pt-12 border-t border-black/[0.03] dark:border-white/[0.03] flex justify-between items-center text-[10px] text-gray-300 dark:text-gray-600 font-bold uppercase tracking-[0.2em]">
          <span>© 2024 NOTFOUND</span>
          <div className="flex gap-4">
            <span>Status 404</span>
            <span>Uptime 99.9%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;

