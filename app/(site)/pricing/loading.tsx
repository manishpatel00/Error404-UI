import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function PricingLoading() {
  return (
    <main className="relative py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="flex justify-center">
            <Skeleton className="h-6 w-32 rounded-full" />
          </div>
          <Skeleton className="h-12 w-full max-w-md mx-auto" />
          <Skeleton className="h-6 w-full max-w-lg mx-auto" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-3xl mx-auto">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="rounded-lg border border-zinc-800 p-8 space-y-8">
              <div className="space-y-3">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-12 w-full rounded-lg" />
              <div className="space-y-4">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
      </Container>
    </main>
  );
}
