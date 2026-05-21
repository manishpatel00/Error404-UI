"use client";

import Link from "next/link";
import { Sparkles, ArrowLeft, Coins } from "lucide-react";

export default function AIPage() {
  return (
    <main className="min-h-screen flex items-center justify-center text-zinc-100 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-lg relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">AI Page Builder</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            "I gotta pay API credit bills bruh" — The Developer
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm space-y-4 text-left">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-zinc-200">Coming Soon (with pricing!)</h3>
              <p className="text-sm text-zinc-500 mt-1">
                We're building a state-of-the-art AI that generates 404 pages from a single prompt. 
                But since GPUs don't grow on trees, this will be a premium feature.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to safety
          </Link>
        </div>
      </div>
    </main>
  );
}
