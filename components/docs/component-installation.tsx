"use client";

import CodeBlock from "@/components/ui/CodeBlock";
import { cn } from "@/components/ui/cn";

export { CodeBlock };

export function Dependencies({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
          {step}
        </div>
        <h3 className="text-sm font-semibold tracking-tight text-foreground">
          {title}
        </h3>
      </div>
      <div className="ml-11 space-y-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
