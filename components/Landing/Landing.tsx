"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { pages404 } from "@/components/content/404";
import {
  ArrowRight,
  Paintbrush,
  Zap,
  Copy,
  Check,
  Terminal,
  Layout,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/components/ui/cn";
import NpmIcon from "@/components/package-managers/NpmIcon";
import PnpmIcon from "@/components/package-managers/PnpmIcon";
import BunIcon from "@/components/package-managers/BunIcon";
import YarnIcon from "@/components/package-managers/YarnIcon";

const PACKAGE_MANAGERS = [
  {
    id: "npm",
    name: "npm",
    icon: <NpmIcon />,
    command: "npx error404@latest add",
    global: "npm install -g error404",
    color: "#ef4444",
    bgGlow: "from-red-500/20",
  },
  {
    id: "pnpm",
    name: "pnpm",
    icon: <PnpmIcon />,
    command: "pnpm dlx error404@latest add",
    global: "pnpm add -g error404",
    color: "#f9ad00",
    bgGlow: "from-amber-500/20",
  },
  {
    id: "bun",
    name: "bun",
    icon: <BunIcon />,
    command: "bunx error404@latest add",
    global: "bun add -g error404",
    color: "#fbf0df",
    bgGlow: "from-orange-200/20",
  },
  {
    id: "yarn",
    name: "yarn",
    icon: <YarnIcon />,
    command: "yarn dlx error404@latest add",
    global: "yarn global add error404",
    color: "#3b82f6",
    bgGlow: "from-blue-500/20",
  },
];

function HeroTerminal() {
  const [activeManager, setActiveManager] = useState(0);
  const [method, setMethod] = useState<"npx" | "global">("npx");
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const manager = PACKAGE_MANAGERS[activeManager];

    useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveManager((prev) => (prev + 1) % PACKAGE_MANAGERS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleCopy = async () => {
    const textToCopy = method === "npx" 
      ? `${manager.command} <component>` 
      : `${manager.global}`;
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative max-w-2xl mx-auto"
    >
      <div 
        className={cn(
          "absolute -inset-4 rounded-3xl blur-2xl opacity-40 transition-all duration-700",
          `bg-gradient-to-r ${manager.bgGlow} via-transparent to-transparent`
        )}
        style={{ background: `radial-gradient(ellipse at center, ${manager.color}15 0%, transparent 70%)` }}
      />

      {/* Method Switcher */}
      <div className="flex justify-center mb-6 relative z-10">
        <div className="inline-flex p-1 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
          <button
            onClick={() => setMethod("npx")}
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300",
              method === "npx" 
                ? "bg-zinc-100 text-zinc-900 shadow-lg shadow-white/5" 
                : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            npx (one-off)
          </button>
          <button
            onClick={() => setMethod("global")}
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300",
              method === "global" 
                ? "bg-zinc-100 text-zinc-900 shadow-lg shadow-white/5" 
                : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            npm install -g
          </button>
        </div>
      </div>
      
      <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl shadow-2xl overflow-hidden">
        <motion.div 
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${manager.color}, transparent)` }}
          layoutId="terminal-accent"
        />
        
        <div className="flex items-center gap-1 p-2 bg-zinc-900/80 border-b border-zinc-800">
          <div className="flex gap-1.5 mr-4 pl-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          
          <div className="flex-1 flex items-center gap-1">
            {PACKAGE_MANAGERS.map((pm, i) => (
              <button
                key={pm.id}
                onClick={() => setActiveManager(i)}
                className={cn(
                  "relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300",
                  i === activeManager
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                {i === activeManager && (
                  <motion.div
                    layoutId="active-pm-bg"
                    className="absolute inset-0 rounded-lg"
                    style={{ backgroundColor: `${pm.color}20`, border: `1px solid ${pm.color}40` }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-4 h-4">{pm.icon}</span>
                  <span className="hidden sm:inline">{pm.name}</span>
                </span>
              </button>
            ))}
          </div>
          
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
              copied
                ? "text-emerald-400 bg-emerald-500/10"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
            )}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>
        
        <div className="p-6 font-mono text-sm sm:text-base">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${manager.id}-${method}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {method === "npx" ? (
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">$</span>
                  <span className="text-zinc-300">
                    <span style={{ color: manager.color }} className="font-bold">
                      {manager.command.split(" ")[0]}
                    </span>
                    <span className="text-zinc-500"> {manager.command.slice(manager.command.indexOf(" ") + 1)}</span>
                    <span className="text-amber-400 ml-1">&lt;component&gt;</span>
                  </span>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400">$</span>
                    <span className="text-zinc-300">
                      <span style={{ color: manager.color }} className="font-bold">
                        {manager.global.split(" ")[0]}
                      </span>
                      {manager.global.includes("global") ? (
                        <>
                          <span className="text-zinc-500"> global add </span>
                          <span className="text-white">error404</span>
                        </>
                      ) : (
                        <>
                          <span className="text-zinc-500"> {manager.global.split(" ")[1]} </span>
                          <span className="text-zinc-500">{manager.global.split(" ")[2]} </span>
                          <span className="text-white">error404</span>
                        </>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50">
                    <span className="text-emerald-400">$</span>
                    <span className="text-zinc-300">
                      <span className="text-white font-bold">error404</span>
                      <span className="text-zinc-500"> add </span>
                      <span className="text-amber-400">&lt;component&gt;</span>
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-4 space-y-1 text-xs text-zinc-600">
            <p className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                ◐
              </motion.span>
              <span>{method === "global" ? "Installing globally..." : "Installing component..."}</span>
            </p>
          </div>
        </div>
        
        <div 
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none opacity-30"
          style={{ background: `linear-gradient(to top, ${manager.color}10, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Landing = () => {
  const bestSlugs = [
    "amongus",
    "buggame",
    "macos",
    "strangerthings",
    "terminal",
    "void",
  ];
  const featured = Object.entries(pages404)
    .filter(([key]) => bestSlugs.includes(key))
    .sort(([a], [b]) => bestSlugs.indexOf(a) - bestSlugs.indexOf(b))
    .slice(0, 6);

  return (
    <main className="relative overflow-visible">
      <section className="relative pt-20 pb-8 sm:pt-32 sm:pb-16 overflow-visible">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-6"
            >
              <Badge variant="default" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 transition-colors gap-1.5">
                <Copy className="w-3 h-3" />
                Available via CLI
              </Badge>
            </motion.div>
    
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance"
            >
              Beautiful 404 pages.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-800 dark:from-zinc-200 dark:via-zinc-500 dark:to-zinc-200 bg-[length:200%_auto] animate-gradient">
                One command away.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-2 max-w-xl mx-auto mb-10 leading-relaxed px-4"
            >
              Install stunning error pages directly into your project. 
              Works with npm, pnpm, bun, and yarn.
            </motion.p>
          </div>
          
          <HeroTerminal />
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
          >
            <ButtonLink href="/components" variant="primary" size="lg" className="w-full sm:w-auto h-12 px-8 text-base font-semibold">
              Browse Components
              <ArrowRight className="h-4 w-4 ml-2" />
            </ButtonLink>
            <ButtonLink href="https://github.com/manishpatel00" variant="secondary" size="lg" className="w-full sm:w-auto h-12 px-8 text-base font-semibold">
              View on GitHub
            </ButtonLink>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-16 sm:py-24">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-muted-2 max-w-lg mx-auto">Get up and running in 3 simple steps</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Choose a template",
                description: "Browse our collection of beautiful 404 pages and find the perfect one for your project.",
                icon: <Sparkles className="w-5 h-5" />,
              },
              {
                step: "02",
                title: "Run the command",
                description: "Use your favorite package manager to install the component directly into your codebase.",
                icon: <Terminal className="w-5 h-5" />,
              },
              {
                step: "03",
                title: "Customize & ship",
                description: "Tweak the styles and content to match your brand, then deploy to production.",
                icon: <Zap className="w-5 h-5" />,
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm h-full group hover:border-zinc-500/50 transition-all duration-300">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-zinc-200 dark:text-zinc-800 group-hover:text-zinc-300 dark:group-hover:text-zinc-700 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="h-10 w-10 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-foreground mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-2">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-12 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            
            <FadeIn className="md:col-span-2 row-span-2 rounded-[2rem] sm:rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-foreground mb-4 sm:mb-6">
                  <Terminal className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Copy. Paste. Ship.</h3>
                <p className="text-muted-2 max-w-md text-base sm:text-lg">
                  Every component is self-contained. No heavy npm packages, no complex config files. Just pure React & Tailwind code that you own.
                </p>
              </div>
              
              <div className="mt-6 sm:mt-8 rounded-xl bg-black border border-white/10 p-5 font-mono text-[11px] sm:text-[13px] text-zinc-300 shadow-2xl relative translate-y-2 group-hover:translate-y-1 transition-transform duration-500">
                 <div className="flex gap-2 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                 </div>
                 <div className="space-y-1.5 font-medium">
                    <p>
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-zinc-400">{"{"}</span>{" "}
                      <span className="text-blue-400">Error404</span>{" "}
                      <span className="text-zinc-400">{"}"}</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-emerald-400">&quot;@/components/404/Error.tsx&quot;</span>
                      <span className="text-zinc-500">;</span>
                    </p>
                    <p className="text-zinc-500 italic">
                    </p>
                    <p>
                      <span className="text-red-500">return</span>
                      <span className="text-zinc-500"> </span>
                      <span className="text-zinc-500">&lt;</span>
                      <span className="text-blue-400">Error404</span>
                      <span className="text-zinc-500"> /&gt;</span>
                    </p>
                 </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="rounded-[2rem] sm:rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8 flex flex-col relative overflow-hidden group">
               <div className="h-10 w-10 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-foreground mb-4">
                  <Paintbrush className="h-5 w-5" />
               </div>
               <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Designed for Aesthetics</h3>
               <p className="text-sm text-muted-2">
                 Built with a focus on typography, spacing, and micro-interactions.
               </p>
               <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-gradient-to-br from-zinc-500/10 dark:from-zinc-500/20 to-transparent blur-2xl rounded-full" />
            </FadeIn>

            <FadeIn delay={0.2} className="rounded-[2rem] sm:rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8 flex flex-col relative overflow-hidden group">
               <div className="h-10 w-10 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-foreground mb-4">
                  <Layout className="h-5 w-5" />
               </div>
               <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Responsive Ready</h3>
               <p className="text-sm text-muted-2">
                 Looks perfect on mobile, tablet, and desktop out of the box.
               </p>
            </FadeIn>

            <FadeIn delay={0.3} className="md:col-span-3 rounded-[2rem] sm:rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
               <div className="flex flex-col gap-2 z-10">
                  <div className="flex items-center gap-3 mb-1">
                      <div className="h-8 w-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-foreground">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">Zero Dependencies</h3>
                  </div>
                  <p className="text-sm text-muted-2 max-w-xl">
                    We don&apos;t force you to install heavy animations libraries or UI kits. Everything is built with standard Tailwind CSS and lightweight Framer Motion (optional).
                  </p>
               </div>
               <ButtonLink href="/components" variant="secondary" size="sm" className="w-full sm:w-auto shrink-0">
                  Browse Components <ArrowRight className="h-3 w-3 ml-1.5" />
               </ButtonLink>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full max-w-[400px] bg-zinc-500/5 blur-3xl rounded-full -z-0" />
            </FadeIn>

          </div>
        </Container>
      </section>

      <section className="relative py-16 sm:py-24">
        <Container size="wide">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
              <div className="max-w-xl">
                 <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 px-4 sm:px-0">Curated Collection</h2>
                 <p className="text-muted-2 text-base sm:text-lg px-4 sm:px-0">Explore our hand-picked templates designed to handle errors with grace.</p>
              </div>
              <ButtonLink href="/components" variant="ghost" className="hidden md:inline-flex">
                View all templates <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
            {featured.map(([key, value], i) => (
              <FadeIn key={key} delay={i * 0.1}>
                <a
                  href={`/components/${value.slug}`}
                  className="group block relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-zinc-500 hover:shadow-2xl"
                >
                  <div className="h-8 bg-muted/20 dark:bg-zinc-900/50 border-b border-border flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 group-hover:bg-red-500 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 group-hover:bg-yellow-500 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/30 group-hover:bg-green-500 transition-colors" />
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/5 group-hover:bg-muted/10 transition-colors">
                    <div className="absolute inset-0 bg-transparent z-10" />
                    
                    <iframe
                      src={`/preview/${value.slug}`}
                      className="h-full w-full scale-[0.5] origin-top-left pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ width: "200%", height: "200%" }}
                      title={value.name}
                      tabIndex={-1}
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                         <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                            View Documentation <ArrowRight className="w-4 h-4" />
                         </span>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-border bg-card group-hover:bg-muted/10 dark:group-hover:bg-zinc-900/50 transition-colors">
                    <h3 className="font-medium text-foreground">{value.name}</h3>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden px-4">
             <ButtonLink href="/components" variant="ghost" className="w-full">
                View all templates <ArrowRight className="ml-2 h-4 w-4" />
             </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-500/5 dark:from-zinc-900/10 to-transparent pointer-events-none" />
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                Start shipping better <br />
                <span className="text-zinc-500">experiences today.</span>
              </h2>
              <p className="text-base sm:text-xl text-muted-2 mb-8 sm:mb-10 max-w-xl mx-auto">
                No more boring default error pages. Give your users the polish they deserve with zero effort.
              </p>
              
              <div className="max-w-md mx-auto mb-12 text-left relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <Terminal className="w-24 h-24" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      CLI Documentation
                    </h4>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                    </div>
                  </div>
                  
                  <div className="space-y-5 font-mono text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-500/50 select-none">$</span>
                        <p className="text-zinc-200">error404 <span className="text-blue-400">list</span></p>
                      </div>
                      <p className="text-[11px] text-zinc-500 ml-6 italic">Browse all available templates</p>
                    </div>
                    
                    <div className="space-y-1 text-zinc-500 hover:text-zinc-300 transition-colors cursor-default">
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-500/50 select-none">$</span>
                        <p className="text-zinc-200">error404 <span className="text-amber-400"></span> <span className="text-yellow-400">--version</span></p>
                      </div>
                      <p className="text-[11px] text-zinc-500 ml-6 italic">Checks the version of error404</p>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-500/50 select-none">$</span>
                        <p className="text-zinc-200">error404 <span className="text-purple-400">--help</span></p>
                      </div>
                      <p className="text-[11px] text-zinc-500 ml-6 italic">Get instant help and usage tips</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/components" variant="primary" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full shadow-xl shadow-zinc-500/10 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <Zap className="mr-2 h-5 w-5" />
                  Get Started Now
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
};

export default Landing;
