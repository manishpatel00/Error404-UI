"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, GraduationCap, Code2, Terminal, BookOpen } from "lucide-react";

const GeeksforGeeks = ({ className }: { className?: string }) => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa] relative overflow-hidden px-4 py-12 ${className || ""}`}
    >
      <style jsx global>{`
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
      `}</style>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#2f8d46 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div 
        className="z-10 w-full max-w-5xl flex flex-col items-center"
      >
        <div className="mb-8 animate-fade-in">
          <Image
            src="https://media.geeksforgeeks.org/auth-dashboard-uploads/Illustration.svg"
            alt="404 Illustration"
            width={400}
            height={300}
            priority
            className="w-full max-w-[380px] h-auto drop-shadow-2xl"
          />
        </div>

        <h1 
          className="text-3xl md:text-5xl font-bold text-[#2f8d46] mb-4 text-center animate-fade-in delay-100 px-4"
        >
          Data Structure Not Found
        </h1>

        <p 
          className="text-gray-600 text-center max-w-xl mb-8 sm:mb-12 text-base sm:text-lg animate-fade-in delay-200 px-4"
        >
          Even the most efficient algorithms occasionally hit a null pointer. 
          While we garbage collect this error, why not explore these popular topics?
        </p>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 animate-fade-in delay-300"
        >
          <Card 
            title="DSA Self Paced" 
            icon={<Code2 className="w-6 h-6" />}
            color="bg-blue-50 text-blue-600 border-blue-100"
            description="Master Data Structures"
          />
          <Card 
            title="Complete Interview" 
            icon={<GraduationCap className="w-6 h-6" />}
            color="bg-purple-50 text-purple-600 border-purple-100"
            description="A-Z Preparation"
          />
          <Card 
            title="System Design" 
            icon={<Terminal className="w-6 h-6" />}
            color="bg-amber-50 text-amber-600 border-amber-100"
            description="Scalable Architectures"
          />
          <Card 
            title="Python Master" 
            icon={<BookOpen className="w-6 h-6" />}
            color="bg-emerald-50 text-emerald-600 border-emerald-100"
            description="For Data Science"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in delay-400 p-4">
          <div className="relative group w-full sm:w-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search for tutorials..."
              className="pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-full w-full sm:w-64 md:w-80 focus:outline-none focus:ring-2 focus:ring-[#2f8d46]/20 focus:border-[#2f8d46] transition-all shadow-sm"
            />
          </div>
          
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 bg-[#2f8d46] text-white font-semibold rounded-full hover:bg-[#267339] transition-all shadow-md hover:shadow-lg active:scale-95 text-center"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2f8d46]/20 to-transparent" />
    </div>
  );
};

const Card = ({ title, icon, color, description }: { title: string; icon: React.ReactNode; color: string; description: string }) => {
  return (
    <div
      className="p-6 rounded-2xl border bg-white flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 hover:scale-[1.02]"
    >
      <div className={`p-4 rounded-xl mb-4 transition-colors group-hover:scale-110 ${color}`}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default GeeksforGeeks;

