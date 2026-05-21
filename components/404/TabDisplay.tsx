"use client";

import { useState } from "react";
import { CopyButton } from "@/components/ui/CopyButton";

interface TabDisplayProps {
  componentPreview: React.ReactNode;
  componentCode: string;
  componentName: string;
}

export const TabDisplay: React.FC<TabDisplayProps> = ({
  componentPreview,
  componentCode,
  componentName,
}) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="w-full bg-[#0a0a0a] rounded-[1.5rem] border border-white/5 overflow-hidden shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-4 border-b border-white/5 bg-white/[0.02] gap-4">
        <div className="flex gap-1 p-1 bg-white/5 rounded-xl border border-white/5 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 text-xs font-bold rounded-lg transition-all relative z-10 ${activeTab === "preview" ? "text-zinc-900 bg-zinc-100" : "text-zinc-500 hover:text-white"}`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 text-xs font-bold rounded-lg transition-all relative z-10 ${activeTab === "code" ? "text-zinc-900 bg-zinc-100" : "text-zinc-500 hover:text-white"}`}
          >
            Code
          </button>
        </div>

        {activeTab === "code" && (
           <div className="animate-in fade-in zoom-in-95 duration-200">
            <CopyButton code={componentCode} />
           </div>
        )}
      </div>

      <div className="relative">
        <div className={`transition-opacity duration-300 ${activeTab === "preview" ? "opacity-100 block" : "opacity-0 hidden"}`}>
            <div className="bg-[#050505] min-h-[400px] sm:min-h-[600px] w-full">
              {componentPreview}
            </div>
        </div>

        <div className={`transition-opacity duration-300 ${activeTab === "code" ? "opacity-100 block" : "opacity-0 hidden"}`}>
             <div className="p-4 sm:p-8">
              <pre className="font-mono text-[10px] sm:text-sm text-zinc-400 overflow-auto max-h-[400px] sm:max-h-[600px] scrollbar-thin scrollbar-thumb-white/10 p-4 bg-zinc-900/50 rounded-xl">
                <code>{componentCode}</code>
              </pre>
            </div>
        </div>
      </div>
    </div>
  );
};

