"use client";

import { useState, useEffect } from "react";
import { CopyButton } from "@/components/ui/CopyButton";
import { get404Content } from "@/app/actions/get-404-content";


interface TabDisplayDynamicProps {
  componentPreview: React.ComponentType<any>;
  componentSlug: string;
  componentName: string;
  initialCode?: string;
}

export const TabDisplayDynamic: React.FC<TabDisplayDynamicProps> = ({
  componentPreview: ComponentPreview,
  componentSlug,
  componentName,
  initialCode,
}) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [code, setCode] = useState<string>(initialCode || "");
  const [loading, setLoading] = useState(!initialCode);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (initialCode) return;

    const fetchCode = async () => {
      try {
        setLoading(true);
        const result = await get404Content(componentSlug);

        if (result.success) {
          setCode(result.code);
          setError("");
        } else {
          setError(result.error);
          setCode("");
        }
      } catch (err) {
        setError("Failed to load component code");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCode();
  }, [componentSlug, initialCode]);

  return (
    <div className="w-full bg-[#0a0a0a] rounded-[1.5rem] border border-white/5 overflow-hidden shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-4 border-b border-white/5 bg-white/[0.02] gap-4">
        <div className="flex gap-1 p-1 bg-white/5 rounded-xl border border-white/5 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 text-xs font-bold rounded-lg transition-all relative z-10 ${
              activeTab === "preview"
                ? "text-zinc-900 bg-zinc-100"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 text-xs font-bold rounded-lg transition-all relative z-10 flex items-center justify-center gap-2 ${
              activeTab === "code"
                ? "text-zinc-900 bg-zinc-100"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Code
            {loading && (
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            )}
          </button>
        </div>

        {activeTab === "code" && code && (
           <div className="animate-in fade-in zoom-in-95 duration-200">
            <CopyButton code={code} />
           </div>
        )}
      </div>

      <div className="relative">
        <div className={`transition-opacity duration-300 ${activeTab === "preview" ? "opacity-100 block" : "opacity-0 hidden"}`}>
            <div className="bg-[#050505] min-h-[400px] sm:min-h-[600px] w-full">
              <ComponentPreview />
            </div>
        </div>

        <div className={`transition-opacity duration-300 ${activeTab === "code" ? "opacity-100 block" : "opacity-0 hidden"}`}>
            <div className="p-4 sm:p-8">
              {error ? (
                <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-xl text-red-400 font-mono text-xs sm:text-sm">
                  {error}
                </div>
              ) : loading && !code ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-white/5 rounded w-3/4" />
                  <div className="h-4 bg-white/5 rounded w-1/2" />
                  <div className="h-4 bg-white/5 rounded w-2/3" />
                </div>
              ) : (
                <pre className="font-mono text-[10px] sm:text-sm text-zinc-400 overflow-auto max-h-[400px] sm:max-h-[600px] scrollbar-thin scrollbar-thumb-white/10 p-4 bg-zinc-900/50 rounded-xl">
                  <code>{code}</code>
                </pre>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

