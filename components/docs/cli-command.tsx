"use client";

import TabbedCodeBlock from "@/components/docs/TabbedCodeBlock";

export function CLICommand({
  componentName,
}: {
  componentName: string;
}) {
  return (
    <div>
      <TabbedCodeBlock componentName={componentName} />
    </div>
  );
}