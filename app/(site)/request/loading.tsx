"use client";

import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function RequestLoading() {
  return (
    <main className="relative min-h-screen">
      <Container className="relative pt-28 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-48 mx-auto mb-6 rounded-full" />
            <Skeleton className="h-14 w-80 mx-auto mb-3" />
            <Skeleton className="h-14 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          <div className="rounded-3xl border border-border bg-card/50 p-8 sm:p-10">
            <Skeleton className="h-5 w-24 mb-4" />
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-24 rounded-xl" />
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <Skeleton className="h-5 w-24 mb-2" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
              <div>
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
              <div>
                <Skeleton className="h-5 w-28 mb-2" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
              <div>
                <Skeleton className="h-5 w-36 mb-2" />
                <Skeleton className="h-32 w-full rounded-xl" />
              </div>
              <div>
                <Skeleton className="h-5 w-28 mb-2" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
              <Skeleton className="h-14 w-full rounded-xl" />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-border bg-card/30"
              >
                <Skeleton className="h-10 w-10 rounded-xl mb-3" />
                <Skeleton className="h-5 w-28 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
