"use client";

import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

type OutputLine = {
  type: "command" | "output" | "error" | "system" | "warning";
  text: string;
};
const MacOs = ({ className }: { className?: string }) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const [bootDone, setBootDone] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<OutputLine[]>([
    {
      type: "system",
      text:
        "Last login: " +
        new Date().toUTCString().split(" ").slice(0, 4).join(" ") +
        " on ttys001",
    },
    { type: "system", text: "Restoring session... " },
    { type: "error", text: "zsh: error 404: route not found" },
    {
      type: "warning",
      text: "Available commands: help, clear, exit, date, whoami, ls, sudo",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setBootDone(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (bootDone && inputRef.current) {
      const isIframe =
        typeof window !== "undefined" && window.self !== window.top;
      if (!isIframe) {
        inputRef.current.focus({ preventScroll: true });
      }
    }
  }, [bootDone]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setOutput((o) => [...o, { type: "command", text: cmd }]);

    const commands: Record<string, () => void> = {
      help: () =>
        setOutput((o) => [
          ...o,
          {
            type: "output",
            text: "Available commands: help, clear, exit, date, whoami, ls, sudo",
          },
        ]),
      clear: () => setOutput([]),
      exit: () => router.push("/"),
      date: () =>
        setOutput((o) => [
          ...o,
          { type: "output", text: new Date().toString() },
        ]),
      whoami: () =>
        setOutput((o) => [...o, { type: "output", text: "guest@macbook-pro" }]),
      ls: () =>
        setOutput((o) => [
          ...o,
          {
            type: "output",
            text: "Applications  Documents  Downloads  Public  Desktop  .hidden_404_key",
          },
        ]),
      sudo: () =>
        setOutput((o) => [
          ...o,
          {
            type: "error",
            text: "Nice try, but you don't have root access to this void.",
          },
        ]),
    };

    if (commands[trimmed]) {
      commands[trimmed]();
    } else {
      setOutput((o) => [
        ...o,
        { type: "error", text: `zsh: command not found: ${trimmed}` },
      ]);
    }
    setInput("");
  };

  return (
    <main
      className={`min-h-screen flex items-center justify-center bg-[#0d1117] relative overflow-hidden font-mono ${className || ""}`}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 z-10 animate-fade-in-scale">
        <div className="rounded-xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.6)] border border-white/10 backdrop-blur-3xl bg-[#1c1c1e]/80">
          <div className="flex items-center justify-between px-4 py-2 sm:py-3 bg-white/5 border-b border-white/5">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f57] shadow-inner" />
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#febc2e] shadow-inner" />
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#28c840] shadow-inner" />
            </div>
            <div className="text-[11px] sm:text-[13px] text-white/40 font-medium tracking-wide truncate px-2">
              guest — zsh — 80×24
            </div>
            <div className="w-8 sm:w-12" />
          </div>

          <div
            ref={terminalRef}
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-6 h-[400px] sm:h-[500px] overflow-y-auto custom-scrollbar text-[12px] sm:text-[14px] leading-relaxed selection:bg-blue-500/30"
          >
            <div>
              {output.map((line, i) => (
                <div key={i} className="mb-1 animate-fade-in-left">
                  {line.type === "command" && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#32d74b] font-bold">➜</span>
                      <span className="text-[#64d2ff] font-bold">~</span>
                      <span className="text-white break-all">{line.text}</span>
                    </div>
                  )}
                  {line.type === "output" && (
                    <div className="text-white/80 pl-5 sm:pl-6 break-words">
                      {line.text}
                    </div>
                  )}
                  {line.type === "system" && (
                    <div className="text-white/40 italic break-words">
                      {line.text}
                    </div>
                  )}
                  {line.type === "error" && (
                    <div className="text-[#ff453a] pl-5 sm:pl-6 font-medium break-words">
                      {line.text}
                    </div>
                  )}
                  {line.type === "warning" && (
                    <div className="text-[#febc2e] pl-5 sm:pl-6 break-words">
                      {line.text}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {bootDone && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#32d74b] font-bold">➜</span>
                <span className="text-[#64d2ff] font-bold">~</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && runCommand(input)}
                  className="bg-transparent border-none outline-none flex-1 text-white caret-[#32d74b] min-w-0"
                  spellCheck={false}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.2s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default MacOs;
