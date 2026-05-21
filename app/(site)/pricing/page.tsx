"use client";

import Container from "@/components/ui/Container";
import { Sparkles, Coffee, Rocket, Check, X, ShieldAlert } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "The Moocher",
      description: "I'm literally paying to host your 404 pages bruh.",
      price: "$0",
      period: "/forever",
      cta: "Continue for free (sadly)",
      features: [
        "All 19+ 404 templates",
        "Personal & Commercial use",
        "Copy-paste ready code",
        "Zero support (you're on your own)",
        "I cry a little every time you skip",
      ],
      missing: [
        "My respect",
        "A warm feeling in your heart",
      ],
    },
    {
      name: "The Savior",
      description: "Finally, someone with taste (and money).",
      price: "$12",
      period: "/per year",
      highlighted: true,
      cta: "Unlock the jokes",
      features: [
        "Everything in Moocher tier",
        "I'll email you a dad joke monthly",
        "I'll tell your parents you're successful",
        "Unlock the 'AI Route' (Soon™)",
        "Priority support (I'll actually reply)",
        "A special place in my heart",
      ],
      missing: [
        "A refund (I already spent it on coffee)",
      ],
    },
  ];

  return (
    <main className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
            Pricing that makes zero sense
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
            Transparent Pricing <br />
            <span className="text-zinc-500 italic">(The bill collector is calling)</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            I'm a developer, I have bills, and GPUs aren't free bruh. <br />
            Choose how much you want to support my caffeine addiction.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                group relative flex flex-col p-10 rounded-3xl border transition-all duration-500
                ${
                  plan.highlighted
                    ? "bg-zinc-900 border-zinc-700 shadow-2xl scale-105 z-20"
                    : "bg-zinc-950 border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/40"
                }
              `}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-zinc-900 text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Highly Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-zinc-600 font-medium">{plan.period}</span>
                </div>
              </div>

              <button
                className={`
                  w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 mb-10 active:scale-95
                  ${
                    plan.highlighted
                      ? "bg-white text-zinc-950 hover:bg-zinc-200"
                      : "bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800"
                  }
                `}
              >
                {plan.cta}
              </button>

              <div className="space-y-6">
                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-4">
                      <div className="mt-1 p-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-zinc-400 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.missing.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-zinc-800/50">
                    {plan.missing.map((item) => (
                      <div key={item} className="flex items-start gap-4 opacity-40 grayscale">
                        <div className="mt-1 p-0.5 rounded-full bg-red-500/10 text-red-500">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-zinc-600 font-light line-through">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center justify-center space-y-4 px-6 text-center">
            <div className="p-3 rounded-2xl bg-amber-500/5 border border-amber-500/10 inline-flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-500" />
              <p className="text-sm text-amber-200/70 font-medium tracking-wide">
                Warning: These buttons are currently decorative. I'm working on the payment flow (and my courage to ask for money).
              </p>
            </div>
            <p className="text-xs text-zinc-600 uppercase tracking-[0.4em] font-bold py-6">
              I'm just a dev with a coffee addiction bruh.
            </p>
        </div>
      </Container>
    </main>
  );
}

