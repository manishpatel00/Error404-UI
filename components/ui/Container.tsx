import type { HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow";
};

export default function Container({ className, size = "default", ...props }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "default" && "max-w-6xl",
        size === "wide" && "max-w-7xl",
        size === "narrow" && "max-w-3xl",
        className,
      )}
      {...props}
    />
  );
}

