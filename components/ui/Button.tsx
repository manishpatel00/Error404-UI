import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "destructive";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all select-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80 shadow-sm hover:shadow focus-visible:ring-foreground",
  secondary:
    "border border-border bg-background text-foreground hover:border-gray-300 dark:hover:border-zinc-600 hover:bg-muted/5 active:bg-muted/10 focus-visible:ring-muted",
  ghost:
    "text-muted-2 hover:text-foreground hover:bg-muted/5 active:bg-muted/10 focus-visible:ring-muted",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted/5 active:bg-muted/10 focus-visible:ring-muted",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-9 px-4 text-sm",
  lg: "h-10 px-5 text-base",
};

export function Button({
  className,
  variant = "secondary",
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "secondary",
  size = "md",
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
}) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
