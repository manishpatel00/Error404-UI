"use client";

import { useState, useCallback } from "react";
import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

interface TooltipProviderProps {
  children: ReactNode;
}

export function TooltipProvider({ children }: TooltipProviderProps) {
  return <>{children}</>;
}

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  delayMs?: number;
  className?: string;
}

export function Tooltip({
  children,
  content,
  side = "top",
  delayMs = 200,
  className,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    const id = setTimeout(() => setIsOpen(true), delayMs);
    setTimeoutId(id);
  }, [delayMs]);

  const handleMouseLeave = useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(false);
  }, [timeoutId]);

  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isOpen && (
        <div
          className={cn(
           "absolute z-50 whitespace-nowrap rounded-lg bg-popover px-2 py-1 text-xs text-popover-foreground pointer-events-none border border-border shadow-sm",
            sideClasses[side],
            className,
          )}
        >
          {content}
          <div
            className={cn(
              "absolute h-1 w-1 bg-popover border-border",
              side === "top" &&
                "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45",
              side === "bottom" &&
                "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45",
              side === "left" &&
                "right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45",
              side === "right" &&
                "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45",
            )}
          />
        </div>
      )}
    </div>
  );
}
