"use client";

import { useState } from "react";
import CodeBlock from "@/components/ui/CodeBlock";
import { cn } from "@/components/ui/cn";
import { motion, AnimatePresence } from "framer-motion";

import NpmIcon from "@/components/package-managers/NpmIcon";
import PnpmIcon from "@/components/package-managers/PnpmIcon";
import BunIcon from "@/components/package-managers/BunIcon";
import YarnIcon from "@/components/package-managers/YarnIcon";

const TABS = [
  {
    label: "npm",
    icon: <div className="w-3.5 h-3.5"><NpmIcon /></div>,
    command: (name: string) => `npx error404@latest add ${name}`,
    color: "#ef4444",
  },
  {
    label: "pnpm",
    icon: <div className="w-3.5 h-3.5"><PnpmIcon /></div>,
    command: (name: string) => `pnpm dlx error404@latest add ${name}`,
    color: "#facc15",
  },
  {
    label: "bun",
    icon: <div className="w-3.5 h-3.5"><BunIcon /></div>,
    command: (name: string) => `bunx error404@latest add ${name}`,
    color: "#fbf0df",
  },
  {
    label: "yarn",
    icon: <div className="w-3.5 h-3.5"><YarnIcon /></div>,
    command: (name: string) => `yarn dlx error404@latest add ${name}`,
    color: "#3b82f6",
  },
];

export default function TabbedCodeBlock({
  componentName,
}: {
  componentName: string;
}) {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <div className="w-full space-y-3">
      <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 w-fit">
        {TABS.map((t, i) => (
          <button
            key={t.label}
            className={cn(
              "relative flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all text-xs font-semibold",
              i === active
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300",
            )}
            onClick={() => setActive(i)}
            type="button"
          >
            {i === active && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700/50 shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {t.icon}
              {t.label}
            </span>
          </button>
        ))}
      </div>

      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 via-primary/2 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <CodeBlock
              code={tab.command(componentName)}
              filename={`${tab.label} terminal`}
              color={tab.color}
              className="border-zinc-200 dark:border-zinc-800 shadow-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
