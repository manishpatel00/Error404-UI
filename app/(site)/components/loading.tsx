import { Skeleton } from "@/components/ui/Skeleton";

export default function ComponentsLoading() {
  return (
    <main className="relative min-h-screen">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="space-y-6 mb-12">
          <Skeleton className="h-6 w-32 rounded-full" />
          <div className="space-y-4">
            <Skeleton className="h-12 sm:h-16 w-full max-w-2xl" />
            <Skeleton className="h-6 w-full max-w-xl" />
          </div>
        </div>

        <div className="py-6 border-b border-zinc-800 mb-8">
          <Skeleton className="h-5 w-56" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="rounded-xl border border-zinc-800 overflow-hidden">
              <Skeleton className="aspect-[16/10] w-full" />
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-start">
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-4 w-4 rounded-full" />
                </div>
                <Skeleton className="h-4 w-full" />
                <div className="pt-3 border-t border-zinc-800">
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
