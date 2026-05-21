import { Skeleton } from "@/components/ui/Skeleton";

export default function ComponentDocLoading() {
  return (
    <div className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)] gap-10 lg:pr-[280px]">
          <main className="min-w-0 mx-auto w-full max-w-5xl space-y-10">
            <div className="space-y-6">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-6 w-24 rounded-md" />
              <div className="space-y-4">
                <Skeleton className="h-10 sm:h-12 w-full max-w-md" />
                <Skeleton className="h-6 w-full max-w-2xl" />
              </div>
            </div>

            <div className="space-y-8 pt-10 border-t border-zinc-800">
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-4/5" />
              </div>
              <Skeleton className="h-[400px] w-full rounded-2xl" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-zinc-800 grid grid-cols-2 gap-6">
              <Skeleton className="h-24 rounded-xl" />
              <Skeleton className="h-24 rounded-xl" />
            </div>
          </main>

          <aside className="hidden lg:block fixed right-10 top-28 w-[240px] space-y-8">
            <div className="pl-4 border-l border-zinc-800 space-y-6">
              <Skeleton className="h-4 w-24" />
              <div className="space-y-3">
                <Skeleton className="h-9 w-full rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </div>
              <div className="mt-8 pt-8 border-t border-zinc-800">
                <Skeleton className="h-5 w-36" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
