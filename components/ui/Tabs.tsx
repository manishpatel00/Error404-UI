"use client";

import { createContext, useContext, useState } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within Tabs");
  }
  return context;
}

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const handleValueChange = (newValue: string) => {
    setInternalValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider
      value={{ value: currentValue, onValueChange: handleValueChange }}
    >
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-lg border border-border bg-muted/30 p-1",
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  value,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { value: string }) {
  const { value: selectedValue, onValueChange } = useTabsContext();
  const isSelected = selectedValue === value;

  return (
    <button
      type="button"
      data-state={isSelected ? "active" : "inactive"}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isSelected
          ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
          : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200",
        className,
      )}
      onClick={() => onValueChange(value)}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  value,
  ...props
}: HTMLAttributes<HTMLDivElement> & { value: string }) {
  const { value: selectedValue } = useTabsContext();

  if (selectedValue !== value) return null;

  return (
    <div
      className={cn(
        "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    />
  );
}
