import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Code2 } from "lucide-react";

const docsMap: Record<string, () => Promise<{ default: React.ComponentType }>> =
  {
    stoneage: () => import("@/components/docs/stoneAge.mdx"),
    simple: () => import("@/components/docs/simple.mdx"),
    modern: () => import("@/components/docs/modern.mdx"),
    strangerthings: () => import("@/components/docs/strangerthings.mdx"),
    terminal: () => import("@/components/docs/terminal.mdx"),
    snow: () => import("@/components/docs/snow.mdx"),
    amongus: () => import("@/components/docs/amongus.mdx"),
    retrotv: () => import("@/components/docs/retrotv.mdx"),
    blueglitch: () => import("@/components/docs/blueglitch.mdx"),
    poet: () => import("@/components/docs/poet.mdx"),
    particles: () => import("@/components/docs/particles.mdx"),
    google: () => import("@/components/docs/google.mdx"),
    geeksforgeeks: () => import("@/components/docs/geeksforgeeks.mdx"),
    macos: () => import("@/components/docs/macos.mdx"),
    vercel: () => import("@/components/docs/vercel.mdx"),
    buggame: () => import("@/components/docs/buggame.mdx"),
    void: () => import("@/components/docs/void.mdx"),
  };

const docsList = Object.keys(docsMap).map((slug) => ({
  slug,
  title:
    slug.charAt(0).toUpperCase() +
    slug.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2"),
}));

export default async function DocsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const slug = params.slug;

  const docLoader = docsMap[slug];
  if (!docLoader) {
    notFound();
  }

  const DocContent = (await docLoader()).default;
  const currentIndex = docsList.findIndex((d) => d.slug === slug);
  const previousDoc = currentIndex > 0 ? docsList[currentIndex - 1] : null;
  const nextDoc =
    currentIndex < docsList.length - 1 ? docsList[currentIndex + 1] : null;
  const currentTitle = docsList.find((d) => d.slug === slug)?.title || slug;

  return (
    <div className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)] gap-10 lg:pr-[280px]">
          <main className="min-w-0 mx-auto w-full max-w-5xl">
            <div className="mb-8">
              <Link
                href="/components"
                className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to components
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/10 text-xs font-medium text-foreground border border-border">
                  <Code2 className="h-3 w-3" />
                  Component
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
                {currentTitle}
              </h1>
              <p className="text-muted-2 text-base leading-relaxed max-w-2xl">
                Complete guide and implementation details for this 404
                component.
              </p>
            </div>

            <article className="prose max-w-none prose-headings:scroll-mt-28 prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:border prose-pre:border-border prose-a:underline-offset-4">
              <DocContent />
            </article>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                {previousDoc ? (
                  <Link
                    href={`/components/${previousDoc.slug}`}
                    className="group flex flex-col gap-2 rounded-xl border border-border surface p-4 hover:border-ring hover:bg-muted/5 transition-all duration-200"
                  >
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <ArrowLeft className="h-3 w-3" />
                      Previous
                    </span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-foreground">
                      {previousDoc.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {nextDoc ? (
                  <Link
                    href={`/components/${nextDoc.slug}`}
                    className="group flex flex-col gap-2 rounded-xl border border-border surface p-4 hover:border-ring hover:bg-muted/5 transition-all duration-200 text-right items-end"
                  >
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      Next
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-foreground">
                      {nextDoc.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </main>

          <aside className="hidden lg:block fixed right-10 top-28 w-[240px] space-y-4">
            <div className="pl-4 border-l border-border">
              <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
                On this page
              </p>
              <nav className="space-y-2 text-sm">
                <a
                  href="#preview"
                  className="block rounded-md border border-border bg-muted/5 px-3 py-2 text-muted-2 hover:border-muted hover:bg-muted/10 hover:text-foreground transition-colors"
                >
                  Preview
                </a>
                <a
                  href="#installation"
                  className="block rounded-md border border-border bg-muted/5 px-3 py-2 text-muted-2 hover:border-muted hover:bg-muted/10 hover:text-foreground transition-colors"
                >
                  Installation
                </a>
                <a
                  href="#usage"
                  className="block rounded-md border border-border bg-muted/5 px-3 py-2 text-muted-2 hover:border-muted hover:bg-muted/10 hover:text-foreground transition-colors"
                >
                  Usage
                </a>
                <a
                  href="#props"
                  className="block rounded-md border border-border bg-muted/5 px-3 py-2 text-muted-2 hover:border-muted hover:bg-muted/10 hover:text-foreground transition-colors"
                >
                  Props
                </a>
                <a
                  href="#features"
                  className="block rounded-md border border-border bg-muted/5 px-3 py-2 text-muted-2 hover:border-muted hover:bg-muted/10 hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </nav>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  href={`/preview/${slug}`}
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background hover:bg-foreground/90 transition-all duration-200 shadow-lg shadow-black/20 group"
                >
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Live Preview
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
