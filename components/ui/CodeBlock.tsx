"use client";

import { useMemo, useState, useEffect } from "react";
import { Check, Copy, Code2 } from "lucide-react";
import { cn } from "@/components/ui/cn";

function highlightCode(code: string): string {
  const lines = code.split("\n");

  return lines
    .map((line) => {
      let result = line
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      const tokens: Array<{ start: number; end: number; className: string }> =
        [];

      const addToken = (start: number, end: number, className: string) => {
        if (start >= end) return;
        for (const token of tokens) {
          if (
            (start >= token.start && start < token.end) ||
            (end > token.start && end <= token.end)
          ) {
            return;
          }
        }
        tokens.push({ start, end, className });
      };

      const patterns = [
        { regex: /(\/\/.*$)/gm, className: "text-zinc-500 dark:text-[#6a9955]" },
        { regex: /(\/\*[\s\S]*?\*\/)/g, className: "text-zinc-500 dark:text-[#6a9955]" },
        {
          regex: /("([^"\\]|\\.)*"|'([^'\\]|\\.)*')/g,
          className: "text-emerald-600 dark:text-[#ce9178]",
        },
        { regex: /(`([^`\\]|\\.)*`)/g, className: "text-amber-600 dark:text-[#dcdcaa]" },
        { regex: /\b(\d+\.?\d*)\b/g, className: "text-blue-600 dark:text-[#b5cea8]" },
        {
          regex:
            /\b(React|useState|useEffect|useMemo|useCallback|useRef|Fragment|Component|Props|State|Suspense|Link|Image|useRouter|usePathname|useSearchParams|useParams)\b/g,
          className: "text-cyan-600 dark:text-[#4ec9b0]",
        },
        {
          regex:
            /\b(import|export|from|default|const|let|var|function|return|if|else|for|while|switch|case|break|continue|try|catch|finally|throw|new|class|extends|super|this|static|async|await|typeof|instanceof|in|of|void|null|undefined|true|false|as|type|interface|enum|namespace|module|declare|abstract|readonly|private|public|protected)\b/g,
          className: "text-violet-600 dark:text-[#c586c0]",
        },
        { regex: /(&lt;\/?[\w]+)/g, className: "text-blue-600 dark:text-[#569cd6]" },
        { regex: /(&lt;\/[\w]+&gt;)/g, className: "text-zinc-400 dark:text-[#808080]" },
        {
          regex:
            /(className|href|src|alt|target|rel|onClick|onChange|onSubmit|onMouseEnter|onMouseLeave|type|id|key|value|name|placeholder|disabled|required|style|children)=/g,
          className: "text-orange-600 dark:text-[#9cdcfe]",
        },
        {
          regex: /(=&gt;|&lt;=|&gt;=|==|!=|===|!==)/g,
          className: "text-zinc-500 dark:text-[#d4d4d4]",
        },
        {
          regex: /(\+|\-|\*|\/|%|\^|&amp;&amp;|\|\||&amp;|\||\?|:)/g,
          className: "text-zinc-500 dark:text-[#d4d4d4]",
        },
        { regex: /(\.[a-zA-Z_$][a-zA-Z0-9_$]*)/g, className: "text-blue-500 dark:text-[#4fc1ff]" },
        {
          regex:
            /(\.(map|filter|reduce|forEach|find|some|every|includes|split|join|slice|splice|push|pop|shift|unshift|length|toString|toLowerCase|toUpperCase|trim|replace|match|test|exec|parseInt|parseFloat|isNaN|isFinite|Math|Date|Object|Array|String|Number|Boolean|Promise|fetch|JSON|localStorage|sessionStorage|document|window|console|setTimeout|setInterval|clearTimeout|clearInterval))\b/g,
          className: "text-amber-600 dark:text-[#dcdcaa]",
        },
        { regex: /\b(npm|npx|pnpm|bun|bunx|yarn)\b/g, className: "text-[var(--brand-color)] font-bold" },
        { regex: /\b(install|add|dlx)\b/g, className: "text-zinc-400 dark:text-zinc-500 italic" },
        { regex: /\b([a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+)\b/g, className: "text-blue-400" },
        { regex: /\b(error404)\b/g, className: "text-zinc-100 dark:text-zinc-100 font-bold" },
        { regex: /\b([A-Z][a-zA-Z0-9_$]*)\b/g, className: "text-cyan-600 dark:text-[#4ec9b0]" },
      ];

      patterns.forEach(({ regex, className }) => {
        let match;
        const regexCopy = new RegExp(regex.source, regex.flags);
        while ((match = regexCopy.exec(result)) !== null) {
          if (!match[0].includes("<span")) {
            addToken(match.index, match.index + match[0].length, className);
          }
        }
      });

      tokens.sort((a, b) => b.start - a.start);

      tokens.forEach(({ start, end, className }) => {
        const before = result.substring(0, start);
        const token = result.substring(start, end);
        const after = result.substring(end);
        result = before + `<span class="${className}">${token}</span>` + after;
      });

      return result;
    })
    .join("\n");
}

export default function CodeBlock({
  code,
  className,
  filename,
  language,
  title,
  expandable = false,
  color,
}: {
  code: string;
  className?: string;
  filename?: string;
  language?: string;
  title?: string;
  expandable?: boolean;
  color?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const normalized = useMemo(() => code.replace(/\r\n/g, "\n").trim(), [code]);
  const lineCount = useMemo(() => normalized.split("\n").length, [normalized]);
  const highlightedCode = useMemo(
    () => highlightCode(normalized),
    [normalized],
  );

  const displayFilename =
    filename || title || (language ? `code.${language}` : "code.tsx");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(normalized);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group relative rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-950 transition-all duration-300",
        className,
      )}
      style={color ? ({ "--brand-color": color } as React.CSSProperties) : undefined}
    >
      {color && (
        <div 
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-color)] to-transparent opacity-50"
          style={{ backgroundColor: color }}
        />
      )}
      {color && (
        <div 
          className="absolute -inset-1 bg-[var(--brand-color)] opacity-[0.03] blur-2xl group-hover:opacity-[0.05] transition-opacity"
        />
      )}
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
        <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
          {displayFilename}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium transition-all focus:outline-none",
            copied 
              ? "text-emerald-500 bg-emerald-500/10" 
              : "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800",
          )}
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <pre className="p-4 text-[14px] leading-relaxed font-mono selection:bg-primary/20">
          <code
            className="block text-zinc-800 dark:text-zinc-300"
            dangerouslySetInnerHTML={{
              __html: mounted ? highlightedCode : normalized,
            }}
          />
        </pre>
      </div>
    </div>
  );
}
