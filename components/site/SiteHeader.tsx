"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Layers,
  Menu,
  X,
  LogIn,
  UserPlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClerkLoaded,
  ClerkLoading,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const AuthSkeleton = () => (
  <div className="flex items-center gap-3 animate-pulse">
    <div className="w-16 h-8 bg-foreground/5 rounded-lg" />
    <div className="w-20 h-8 bg-foreground/10 rounded-xl" />
  </div>
);



interface NavLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const NavLink = ({ href, icon: Icon, label }: NavLinkProps) => (
  <Link
    href={href}
    className="group flex items-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
  >
    <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
    <span>{label}</span>
  </Link>
);

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const items = [
    { label: "Home", href: "/", icon: Home },
    { label: "Components", href: "/components", icon: Layers },
    // { label: "AI (Soon)", href: "/ai", icon: Sparkles }, // Premium feature incoming
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-16 flex backdrop-blur-md">
        <div className="flex-1 h-10 bg-background relative">
          <svg className="absolute inset-0 w-full h-full">
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="currentColor"
              className="text-white/10"
              strokeWidth={0.5}
            />
            <line
              x1="0"
              y1="36.5"
              x2="100%"
              y2="36.5"
              stroke="currentColor"
              className="text-white/10"
              strokeWidth={0.5}
            />
          </svg>
        </div>

        <div className="flex h-16 relative shrink-0 -ml-px">
          <div className="w-16 h-full relative shrink-0 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-background"
              style={{ clipPath: "path('M0 0 H64 V64 C32 64 32 40 0 40 Z')" }}
            />
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 64 64">
              <path
                d="M0 39.5 C32 39.5 32 63.5 64 63.5"
                fill="none"
                stroke="currentColor"
                className="text-white/10"
                strokeWidth={0.5}
              />
              <path
                d="M0 36.5 C32 36.5 32 60.5 64 60.5"
                fill="none"
                stroke="currentColor"
                className="text-white/10"
                strokeWidth={0.5}
              />
            </svg>
          </div>

          <div className="flex-1 h-full relative min-w-0 -ml-px">
            <div className="absolute inset-0 bg-background">
              <svg className="absolute inset-0 w-full h-full">
                <line
                  x1="0"
                  y1="63.5"
                  x2="100%"
                  y2="63.5"
                  stroke="currentColor"
              className="text-white/10"
                  strokeWidth={0.5}
                />
                <line
                  x1="0"
                  y1="60.5"
                  x2="100%"
                  y2="60.5"
                  stroke="currentColor"
              className="text-white/10"
                  strokeWidth={0.5}
                />
              </svg>
            </div>

            <div className="relative w-full h-full flex items-center px-4 md:px-6">
              
              <div className="flex md:hidden items-center">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <img
                    src="/favicon.svg"
                    alt="Error404 Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    style={{ width: 32, height: 32 }}
                  />
                </Link>
              </div>

              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <img
                    src="/favicon.svg"
                    alt="Error404 Logo"
                    width={36}
                    height={36}
                    className="object-contain"
                    style={{ width: 36, height: 36 }}
                  />
                </Link>
              </div>

              <div className="hidden md:flex flex-1 items-center justify-start gap-6">
                <div className="flex items-center gap-6 pr-16">
                  <NavLink {...items[0]} />
                  <NavLink {...items[1]} />
                </div>
              </div>

              <div className="flex md:hidden items-center gap-2 ml-auto">

                <button
                  className="p-1 text-foreground/60 hover:text-foreground"
                  onClick={() => setOpen(!open)}
                >
                  {open ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="hidden md:flex flex-1 items-center justify-end">
                <div className="flex items-center gap-3 pl-16 min-w-[200px] justify-end">
                  <ClerkLoading>
                    <AuthSkeleton />
                  </ClerkLoading>
                  <ClerkLoaded>
                    <Show when="signed-out">
                      <SignInButton mode="redirect">
                        <button
                          type="button"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5 whitespace-nowrap"
                      >
                        <LogIn className="w-4 h-4" />
                        Sign In
                        </button>
                      </SignInButton>
                      <SignUpButton mode="redirect">
                        <button
                          type="button"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all rounded-xl whitespace-nowrap shadow-sm active:scale-95"
                      >
                        <UserPlus className="w-4 h-4" />
                        Sign Up
                        </button>
                      </SignUpButton>
                    </Show>
                    <Show when="signed-in">
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: "h-8 w-8",
                          },
                        }}
                      />
                    </Show>
                  </ClerkLoaded>

                </div>
              </div>
            </div>
          </div>

          <div className="w-16 h-full relative shrink-0 -ml-px">
            <div
              className="absolute inset-0 bg-background"
              style={{ clipPath: "path('M0 0 H64 V40 C32 40 32 64 0 64 Z')" }}
            />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
              <path
                d="M0 63.5 C32 63.5 32 39.5 64 39.5"
                fill="none"
                stroke="currentColor"
              className="text-white/10"
                strokeWidth={0.5}
              />
              <path
                d="M0 60.5 C32 60.5 32 36.5 64 36.5"
                fill="none"
                stroke="currentColor"
              className="text-white/10"
                strokeWidth={0.5}
              />
            </svg>
          </div>
        </div>

        <div className="flex-1 h-10 bg-background relative -ml-px">
          <svg className="absolute inset-0 w-full h-full">
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="currentColor"
              className="text-white/10"
              strokeWidth={0.5}
            />
            <line
              x1="0"
              y1="36.5"
              x2="100%"
              y2="36.5"
              stroke="currentColor"
              className="text-white/10"
              strokeWidth={0.5}
            />
          </svg>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 bg-background border-b border-border p-4 md:hidden z-40 backdrop-blur-md"
          >
            <nav className="flex flex-col gap-2">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 text-foreground/60 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              <Show when="signed-out">
                <SignInButton mode="redirect">
                  <button
                    type="button"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 text-foreground/60 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  <LogIn className="w-5 h-5" />
                  Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="redirect">
                  <button
                    type="button"
                  className="flex items-center gap-3 p-3 rounded-lg bg-foreground text-background hover:bg-foreground/90"
                  onClick={() => setOpen(false)}
                >
                  <UserPlus className="w-5 h-5" />
                  Sign Up
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <span className="text-sm text-foreground/70">Account</span>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "h-8 w-8",
                      },
                    }}
                  />
                </div>
              </Show>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
