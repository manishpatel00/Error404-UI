import type { InputHTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-9 w-full rounded-lg border border-input bg-background/50 px-3 py-1 text-sm text-foreground placeholder:text-muted-foreground shadow-sm",
        "transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-border",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
