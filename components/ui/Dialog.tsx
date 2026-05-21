"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

interface DialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

function useDialogContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog component must be used within Dialog");
  }
  return context;
}

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export function Dialog({
  open: controlledOpen,
  onOpenChange,
  children,
}: DialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleOpenChange = (newOpen: boolean) => {
    setInternalOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return (
    <DialogContext.Provider
      value={{ open: isOpen, onOpenChange: handleOpenChange }}
    >
      {children}
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: ReactNode;
}

export function DialogTrigger({
  className,
  children,
  asChild,
  ...props
}: DialogTriggerProps) {
  const { onOpenChange } = useDialogContext();

  if (
    asChild &&
    typeof children === "object" &&
    children !== null &&
    "type" in children
  ) {
    return children;
  }

  return (
    <button
      className={cn("", className)}
      onClick={() => onOpenChange(true)}
      {...props}
    >
      {children}
    </button>
  );
}

interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function DialogContent({
  className,
  children,
  ...props
}: DialogContentProps) {
  const { open, onOpenChange } = useDialogContext();

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          "fixed left-[50%] top-[50%] z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
          "rounded-lg border border-border bg-background p-6 shadow-lg sm:rounded-xl",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

export function DialogHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className,
      )}
      {...props}
    />
  );
}

export function DialogFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className,
      )}
      {...props}
    />
  );
}

export function DialogTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-lg font-semibold leading-none tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export function DialogClose({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = useDialogContext();

  return (
    <button
      className={cn("", className)}
      onClick={() => onOpenChange(false)}
      {...props}
    />
  );
}
