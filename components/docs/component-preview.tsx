"use client";

import { useState } from "react";
import CodeBlock from "@/components/ui/CodeBlock";
import { cn } from "@/components/ui/cn";
// import { getAIResponse } from "@/server/ai";

import { ExternalLink } from "lucide-react";

export function ComponentPreview({
  component,
  code,
  className,
  slug,
}: {
  component?: React.ReactNode;
  code: string;
  className?: string;
  slug?: string;
}) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div id="preview" className="my-10 space-y-4 scroll-mt-28">
      <div className="rounded-xl border border-border overflow-hidden bg-card/30 backdrop-blur-sm shadow-2xl shadow-black/20">
        <div className="px-5 py-3 border-b border-border bg-muted/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400/30" />
            </div>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">Preview</span>
          </div>
          
          {slug && (
            <a 
              href={`/preview/${slug}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em] flex items-center gap-1.5 group"
            >
              Live Preview
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
        
        <div className={cn("relative bg-[#050505] overflow-hidden aspect-[16/10] w-full shadow-2xl shadow-black/20 flex flex-col", className)}>
          {slug ? (
            <div className="relative flex-1 w-full overflow-hidden bg-muted/5">
                <iframe
                 src={`/preview/${slug}`}
                 className="absolute top-0 left-0 w-[125%] h-[125%] scale-[0.8] origin-top-left pointer-events-none"
                 title="Component Preview"
                 loading="lazy"
               />
            </div>
          ) : (
            <div className="relative flex-1 w-full overflow-hidden">
               <div className="absolute inset-0 w-[125%] h-[125%] scale-[0.8] origin-top-left">
                {component}
               </div>
            </div>
          )}
        </div>
      </div>

      {showCode && (
        <div className="grid gap-4">
          <div className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="px-5 py-4 border-b border-border bg-muted/20 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Source code
                </div>
                <div className="text-xs text-muted-foreground">
                  Expand to view the full implementation
                </div>
              </div>
              <span className="text-xs text-muted-foreground">component.tsx</span>
            </div>
            <div className="p-4">
              <CodeBlock
                code={code}
                filename="component.tsx"
              />
            </div>
          </div>

          {/* TODO: AI section - will add later */}
          {/* <div className="rounded-xl border border-white/10 overflow-hidden bg-[#0f0f0f]">
            <div className="px-5 py-4 border-b border-white/10 bg-[#0a0a0a]">
              <div className="text-sm font-semibold text-white">
                Remix with AI
              </div>
              <div className="text-xs text-zinc-400">
                Want this in another framework or style? Pick a vibe and
                generate.
              </div>
            </div>
            <div className="p-4 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                {aiOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleAI(option.instruction)}
                    className={cn(
                      "text-xs px-3 py-1.5 rounded-md border border-white/10 text-zinc-200 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors",
                      aiLoading && "opacity-60 cursor-not-allowed",
                    )}
                    disabled={aiLoading}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4">
              {aiCode ? (
                <CodeBlock
                  code={aiCode}
                  filename="ai-output.tsx"
                  expandable={true}
                />
              ) : (
                <div className="text-xs text-zinc-500">
                  {aiLoading
                    ? "Generating..."
                    : aiError || "Choose a preset to generate."}
                </div>
              )}
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}
