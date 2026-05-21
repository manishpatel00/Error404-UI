"use client";

import { useState, useEffect } from "react";
import { get404Content } from "@/app/actions/get-404-content";
import CodeBlock from "@/components/ui/CodeBlock";

interface DynamicCodeBlockProps {
  fileName: string;
  language?: string;
  title?: string;
  expandable?: boolean;
}

export function DynamicCodeBlock({
  fileName,
  language = "tsx",
  title,
  expandable = true,
}: DynamicCodeBlockProps) {
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        setLoading(true);
        const result = await get404Content(fileName);

        if (result.success) {
          setCode(result.code);
          setError(null);
        } else {
          setError(result.error);
          setCode("");
        }
      } catch (err) {
        setError("Failed to load code");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCode();
  }, [fileName]);

  if (loading) {
    return (
      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 animate-pulse">
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg p-4 text-red-600 dark:text-red-200">
        Error loading code: {error}
      </div>
    );
  }

  return (
    <CodeBlock
      language={language}
      title={title}
      expandable={expandable}
      code={code}
    />
  );
}

export default DynamicCodeBlock;
