import Link from "next/link";
import { BookOpen, ArrowRight, Code2, Sparkles } from "lucide-react";

const docs = [
  {
    slug: "stoneage",
    title: "Stone Age 404",
    description: "A minimal 404 page with a friendly illustration",
  },
  {
    slug: "simple",
    title: "Simple 404",
    description: "A minimal and clean 404 page for quick use.",
  },
  {
    slug: "modern",
    title: "Modern 404",
    description: "A modern, animated 404 page for stylish web apps.",
  },
  {
    slug: "strangerthings",
    title: "Stranger Things 404",
    description: "A 404 page inspired by the Stranger Things series.",
  },
  {
    slug: "terminal",
    title: "Terminal 404",
    description: "A terminal-style 404 page for developers and tech sites.",
  },
  {
    slug: "snow",
    title: "Snow 404",
    description: "A 404 page with a snow animation effect.",
  },
  {
    slug: "amongus",
    title: "Among Us 404",
    description: "A playful 404 page inspired by Among Us.",
  },
  {
    slug: "retrotv",
    title: "Retro TV 404",
    description: "A retro TV themed 404 page.",
  },
  {
    slug: "blueglitch",
    title: "Blue Glitch 404",
    description: "A glitchy blue 404 page for a cyberpunk vibe.",
  },
  {
    slug: "poet",
    title: "Poet 404",
    description: "A poetic 404 page with a unique style.",
  },
  {
    slug: "particles",
    title: "Particles 404",
    description: "A 404 page with animated particles for a modern effect.",
  },
  {
    slug: "google",
    title: "Google 404",
    description: "A Google-inspired minimalist 404 page.",
  },
  {
    slug: "geeksforgeeks",
    title: "GeeksforGeeks 404",
    description: "A GeeksforGeeks-inspired 404 page with flip cards.",
  },
  {
    slug: "macos",
    title: "MacOS Terminal 404",
    description: "A retro MacOS terminal style 404 page.",
  },
  {
    slug: "vercel",
    title: "Vercel Style 404",
    description: "A sleek, Vercel-inspired 404 page.",
  },
  {
    slug: "buggame",
    title: "Bug Game 404",
    description: "An interactive bug game to play when you are lost.",
  },
  {
    slug: "void",
    title: "Void 404",
    description: "An immersive void-themed 404 page with interactive particles.",
  },
];

function DocCard({ doc, index }: { doc: (typeof docs)[0]; index: number }) {
  return (
    <Link
      href={`/components/${doc.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/30 transition-all duration-300 hover:border-zinc-500/50 hover:bg-card/50 hover:shadow-2xl"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/10">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
        <iframe
          src={`/preview/${doc.slug}`}
          className="h-full w-full scale-[0.75] origin-top-left pointer-events-none"
          style={{ width: "133.33%", height: "133.33%" }}
          title={doc.title}
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 z-20">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-background/90 text-xs font-medium text-foreground border border-border">
            <BookOpen className="h-3 w-3" />
            Components
          </span>
        </div>
        <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/10 text-xs font-medium text-foreground border border-foreground/10">
            View documentation
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 border-t border-border">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base font-semibold text-foreground group-hover:text-muted-2 transition-colors leading-tight">
            {doc.title}
          </h2>
          <ArrowRight className="h-4 w-4 text-muted group-hover:text-muted-2 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 mt-0.5" />
        </div>
        <p className="text-sm text-muted line-clamp-2 leading-relaxed">
          {doc.description}
        </p>
        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted">
            <Code2 className="h-3 w-3" />
            Copy & paste ready
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ComponentsOverview() {
  const sortedDocs = [...docs].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className="relative min-h-screen">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/10 text-xs font-medium text-foreground border border-border">
                  <Sparkles className="h-3 w-3" />
                  Components
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                Components Overview
              </h1>
              <p className="text-lg text-muted-2 max-w-2xl leading-relaxed">
                Comprehensive documentation and guides for each 404 template.
                Learn implementation details, customization options, and best
                practices.
              </p>
            </div>
            <Link
              href="/request"
              className="group relative flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <Code2 className="h-4 w-4" />
              Request Template
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
          <div className="flex items-center gap-2 text-sm text-muted">
            <BookOpen className="h-4 w-4" />
            <span>{sortedDocs.length} components available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedDocs.map((doc, idx) => (
            <DocCard key={doc.slug} doc={doc} index={idx} />
          ))}
        </div>
      </div>
    </main>
  );
}
