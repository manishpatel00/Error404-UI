"use client";

import { useState } from "react";
import { cn } from "@/components/ui/cn";

interface CopyButtonProps {
  code: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  code,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-border bg-muted/5 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-muted-foreground/20 hover:bg-muted/10",
        copied && "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
        className,
      )}
    >
      {copied ? "Copied" : "Copy code"}
    </button>
  );
};
