import { Skeleton } from "@/components/ui/Skeleton";

export default function UserLoading() {
  return (
    <div className="flex flex-col items-center gap-6 py-20">
      <Skeleton className="h-6 w-64" />
      <Skeleton className="h-20 w-20 rounded-lg" />
      <div className="flex gap-4 mt-8">
        <Skeleton className="h-10 w-28 rounded-lg" />
        <Skeleton className="h-10 w-28 rounded-lg" />
      </div>
    </div>
  );
}
