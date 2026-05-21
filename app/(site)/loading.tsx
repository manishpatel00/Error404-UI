import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="relative pt-24 pb-16 sm:pt-40 sm:pb-32">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex justify-center mb-8">
            <Skeleton className="h-6 w-32 rounded-full" />
          </div>
          <div className="space-y-6 mb-10">
            <Skeleton className="h-[72px] sm:h-[120px] w-full max-w-3xl mx-auto" />
            <Skeleton className="h-6 w-full max-w-lg mx-auto" />
          </div>
          <div className="flex justify-center mb-20">
            <Skeleton className="h-12 w-48 rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
          <Skeleton className="md:col-span-2 row-span-2 h-[400px] rounded-[2rem]" />
          <Skeleton className="h-[187px] rounded-[2rem]" />
          <Skeleton className="h-[187px] rounded-[2rem]" />
          <Skeleton className="md:col-span-3 h-[140px] rounded-[2rem]" />
        </div>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 w-full max-w-xl">
              <Skeleton className="h-10 w-64" />
              <Skeleton className="h-6 w-full max-w-md" />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[16/10] w-full rounded-2xl" />
                <Skeleton className="h-6 w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center space-y-8 py-24">
          <Skeleton className="h-16 w-full max-w-xl mx-auto" />
          <Skeleton className="h-6 w-full max-w-md mx-auto" />
          <div className="flex justify-center">
            <Skeleton className="h-14 w-56 rounded-full" />
          </div>
        </div>
      </Container>
    </main>
  );
}
