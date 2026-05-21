"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Github, Globe, ArrowUpRight, Heart, type LucideIcon } from "lucide-react";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
    icon?: LucideIcon;
  }

  const sections: { title: string; links: FooterLink[] }[] = [
    {
      title: "Product",
      links: [
        { label: "Components", href: "/components" },
        { label: "Pricing", href: "/pricing" },
        { label: "AI (Soon)", href: "/ai" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Request Template", href: "/request" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "GitHub", href: "https://github.com/manishpatel00", external: true, icon: Github },
        { label: "Portfolio", href: "https://manishdevin.vercel.app/", external: true, icon: Globe },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border/40 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 lg:gap-8">
          <div className="lg:col-span-3 space-y-10">
            <div className="space-y-6">
              <Link href="/" className="inline-flex items-center gap-3 transition-all group">
                <div className="p-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors shadow-2xl">
                  <Image
                    src="/favicon.svg"
                    alt="Error404 logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white">Error404</span>
                  <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-[0.2em]">Beautiful Error Experiences</span>
                </div>
              </Link>
              
              <p className="text-zinc-400 text-lg max-w-sm leading-relaxed font-light">
                Carefully crafted, copy-paste ready 404 pages for developers who care about the details.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-medium text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Everything systems are operational
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-all duration-300"
                    >
                      {link.icon && <link.icon className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />}
                      <span>{link.label}</span>
                      {link.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <span className="text-sm text-zinc-500 font-light">
              © {currentYear} Error404. All rights reserved.
            </span>
            <div className="flex items-center gap-8">
              <Link href="/legal" className="text-xs text-zinc-600 hover:text-white transition-colors uppercase tracking-widest">Legal stuff</Link>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-zinc-500 font-light">
            <span className="opacity-70">Built with</span>
            <Heart className="w-3.5 h-3.5 text-zinc-400 fill-zinc-400/20 group-hover:fill-red-500 group-hover:text-red-500 transition-all duration-500" />
            <span className="opacity-70">by</span>
            <Link 
              href="https://manishdevin.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="font-medium text-zinc-300 hover:text-white transition-colors underline-offset-8 decoration-zinc-800 hover:decoration-zinc-500 underline"
            >
              Manish
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
