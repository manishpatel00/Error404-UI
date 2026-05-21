import { Skeleton } from "@/components/ui/Skeleton";

export default function ForgotPasswordLoading() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 pt-10">
      <div className="relative hidden flex-col justify-center items-center bg-zinc-900 lg:flex dark:border-r overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/50" />
        <Skeleton className="absolute inset-0 opacity-10" />
        <div className="relative z-20 flex flex-col items-center justify-center p-10 text-center space-y-8">
          <Skeleton className="h-24 w-24 rounded-2xl" />
          <div className="max-w-md space-y-4 w-full">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-10 w-3/4 mx-auto" />
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950">
        <div className="relative mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[400px]">
          <div className="flex flex-col space-y-3 text-center">
            <Skeleton className="h-8 w-48 mx-auto" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-10 w-full mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
