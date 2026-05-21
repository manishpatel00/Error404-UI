import type { HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

export function ScrollArea({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative overflow-hidden", className)} {...props} />
  );
}

export function ScrollAreaViewport({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "h-full w-full rounded-[inherit] overflow-y-auto overflow-x-hidden",
        "[&>div]:block!",
        className,
      )}
      {...props}
    />
  );
}
