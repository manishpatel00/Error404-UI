import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import CodeBlock from "@/components/ui/CodeBlock";
import { CodeBlock as DocsCodeBlock, Dependencies } from "@/components/docs/component-installation";
import { CLICommand } from "@/components/docs/cli-command";
import { PropsTable } from "@/components/docs/props-table";
import { ComponentPreview } from "@/components/docs/component-preview";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }) => {
      if (href?.startsWith("/")) {
        return (
          <Link
            href={href}
            className="text-zinc-200 underline underline-offset-4 decoration-white/20 hover:text-white hover:decoration-white/40"
            {...props}
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-200 underline underline-offset-4 decoration-white/20 hover:text-white hover:decoration-white/40"
          {...props}
        >
          {children}
        </a>
      );
    },
    h1: ({ children }) => (
      <h1 className="text-balance text-3xl sm:text-4xl font-semibold tracking-tight text-white mt-4 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white mt-10 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-sm font-semibold text-zinc-200 mt-6 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{children}</p>
    ),
    code: ({ children, className }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-white/10 text-zinc-200 px-1.5 py-0.5 rounded text-[13px] font-mono">
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    },
    pre: ({ children }) => (
      <pre className="bg-[#050505] border border-white/10 rounded-lg p-4 overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-sm text-zinc-400 mb-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-sm text-zinc-400 mb-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-zinc-400">{children}</li>,
    hr: () => <hr className="border-white/10 my-8" />,
    section: ({ children, className, ...props }) => (
      <section className={className} {...props}>
        {children}
      </section>
    ),
    CodeBlock: DocsCodeBlock,
    Dependencies,
    CLICommand,
    PropsTable,
    ComponentPreview,
    ...components,
  };
}
