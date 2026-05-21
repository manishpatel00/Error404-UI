"use client";

export function PropsTable({
  data,
}: {
  data: Array<{
    prop: string;
    type: string;
    defaultValue?: string;
    description: string;
  }>;
}) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50">
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Prop
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Type
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Default
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/50">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
              <td className="px-4 py-3 font-mono text-[14px] text-zinc-900 dark:text-zinc-200">
                {row.prop}
              </td>
              <td className="px-4 py-3 font-mono text-[14px] text-primary/70 dark:text-[#4ec9b0]">
                {row.type}
              </td>
              <td className="px-4 py-3 font-mono text-[14px]">
                {row.defaultValue && row.defaultValue !== "-" ? (
                  <code className="text-zinc-600 dark:text-zinc-500 bg-zinc-200/50 dark:bg-zinc-800 px-1 py-0.5 rounded text-[11px]">
                    {row.defaultValue}
                  </code>
                ) : (
                  <span className="text-zinc-400 dark:text-zinc-600">—</span>
                )}
              </td>
              <td className="px-4 py-3 text-[14px] text-zinc-600 dark:text-zinc-400">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
