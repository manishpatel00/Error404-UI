"use client";

import Link from "next/link";
import Image from "next/image";
const Google = ({ className }: { className?: string }) => {
  return (
    <div
      className={`min-h-screen bg-white flex flex-col items-center justify-center font-sans relative overflow-hidden ${className || ""}`}
    >
      <div className="absolute top-6 sm:top-10 left-6 sm:left-10 md:left-20">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Google"
          width={92}
          height={30}
          className="opacity-80 scale-90 sm:scale-100"
        />
      </div>

      <style jsx global>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatRotate {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(-2deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(-15px) rotate(2deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8) rotate(10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
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
      `}</style>
      <div className="w-full max-w-5xl px-8 flex flex-col md:flex-row items-center justify-between gap-16 text-center md:text-left z-10">
        <div className="max-w-md animate-fade-in px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#3c4043] mb-4">
            <span className="font-bold text-3xl sm:text-4xl block mb-2">
              404.
            </span>
            That&apos;s an error.
          </h1>
          <p className="text-[#70757a] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            The requested URL was not found on this server.{" "}
            <span className="text-[#3c4043] font-medium italic">
              That&apos;s all we know.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              href="/"
              className="px-8 py-3 bg-[#1a73e8] text-white font-medium rounded-md hover:bg-[#185abc] hover:shadow-md transition-all active:scale-95 text-center"
            >
              Back to Safety
            </Link>
            <button className="px-8 py-3 text-[#1a73e8] font-medium rounded-md hover:bg-[#f1f3f4] transition-all text-center">
              Try a search
            </button>
          </div>
        </div>

        <div className="relative group animate-pop-in">
          <div className="animate-float">
            <img
              src="https://www.google.com/images/errors/robot.png"
              alt="Broken robot"
              className="w-[280px] md:w-[350px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all"
            />
          </div>

          <div className="absolute -z-10 bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black opacity-[0.05] rounded-full blur-xl scale-x-150 animate-pulse" />
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#4285F4] opacity-[0.03] rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-20 -right-24 w-80 h-80 bg-[#EA4335] opacity-[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-40 w-48 h-48 bg-[#FBBC05] opacity-[0.03] rounded-full blur-3xl animate-bounce duration-[10s]" />
      <div className="absolute top-40 left-1/3 w-32 h-32 bg-[#34A853] opacity-[0.03] rounded-full blur-3xl" />
    </div>
  );
};

export default Google;
