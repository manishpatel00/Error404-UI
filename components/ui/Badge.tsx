import type { HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

type Variant = "default" | "secondary" | "destructive" | "success" | "outline";

type Props = HTMLAttributes<HTMLSpanElement> & {
  dot?: boolean;
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  default: "border border-border bg-muted/10 text-foreground",
  secondary: "border border-amber-500/20 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200",
  destructive: "border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 text-red-900 dark:text-red-200",
  success: "border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200",
  outline: "border border-border bg-transparent text-muted-2",
};

export default function Badge({
  className,
  dot,
  variant = "default",
  children,
  ...props
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    >
      {dot && (
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      )}
      {children}
    </span>
  );
}
