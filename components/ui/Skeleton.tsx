import { cn } from "@/components/ui/cn";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "pulse" | "shimmer" | "none";
}

export function Skeleton({ className, variant = "pulse", ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-md bg-zinc-200 dark:bg-zinc-800",
        variant === "pulse" && "animate-pulse",
        variant === "shimmer" && "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/5 dark:before:via-white/5 before:to-transparent",
        className
      )}
      {...props}
    />
  );
}
