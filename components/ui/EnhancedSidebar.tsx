"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/components/ui/cn";

interface SidebarItemProps {
  key: string;
  name: string;
  slug: string;
  isSelected: boolean;
  onClick: () => void;
}

interface EnhancedSidebarProps {
  items: SidebarItemProps[];
  query: string;
  onQueryChange: (value: string) => void;
  children?: React.ReactNode;
}

export function EnhancedSidebar({
  items,
  query,
  onQueryChange,
  children,
}: EnhancedSidebarProps) {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  return (
    <aside className="lg:sticky lg:top-8">
      <div className="space-y-8">
        <div className="space-y-3 pb-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Components
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed tracking-wide">
            Premium 404 page templates ready to customize and integrate.
          </p>
        </div>

        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-xs text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>

        <div className="space-y-2 flex-1">
          <div className="px-3 py-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Library ({items.length})
            </span>
          </div>
          <nav className="space-y-1 overflow-y-auto scrollbar-hide">
            {items.map((item) => (
              <SidebarItem
                key={item.key}
                item={item}
                isHovered={hoveredItem === item.key}
                onMouseEnter={() => setHoveredItem(item.key)}
                onMouseLeave={() => setHoveredItem(null)}
              />
            ))}
          </nav>
        </div>

        {children}
      </div>
    </aside>
  );
}

function SidebarItem({
  item,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  item: SidebarItemProps;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <Link
      href={`/components?active=${item.key}`}
      onClick={item.onClick}
      scroll={false}
      className="group relative flex items-center gap-3 w-full rounded-md px-3 py-2.5 text-left transition-all duration-200"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Vertical line and active indicator */}
      <div className="absolute left-0 inset-y-0 w-px bg-border ml-2" />

      {/* Active indicator */}
      <AnimatePresence initial={false} mode="wait">
        {item.isSelected && (
          <motion.span
            layoutId="sidebar-active"
            className="pointer-events-none absolute z-20 left-0 top-1/2 h-[60%] w-[3px] -translate-y-1/2 rounded-full bg-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 35,
            }}
          />
        )}
      </AnimatePresence>

      {/* Hover indicator */}
      <AnimatePresence initial={false} mode="wait">
        {isHovered && !item.isSelected && (
          <motion.span
            layoutId="sidebar-hover"
            className="pointer-events-none absolute z-10 left-0 top-1/2 h-[60%] w-[3px] -translate-y-1/2 rounded-full bg-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 35,
            }}
          />
        )}
      </AnimatePresence>

      {/* Badge */}
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold transition-all duration-200",
            item.isSelected
              ? "bg-foreground text-background"
              : "bg-muted/10 text-muted-foreground group-hover:bg-muted/20",
        )}
      >
        404
      </span>

      {/* Text with animation */}
      <motion.div
        className="min-w-0 flex-1"
        animate={{
          x: isHovered || item.isSelected ? 3 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <div
          className={cn(
            "text-xs font-semibold truncate leading-normal transition-colors",
            item.isSelected
              ? "text-foreground"
              : "text-muted-foreground group-hover:text-foreground",
          )}
        >
          {item.name}
        </div>
        <div className="text-xs text-muted-foreground truncate leading-normal tracking-wide">
          /{item.key}
        </div>
      </motion.div>
    </Link>
  );
}
