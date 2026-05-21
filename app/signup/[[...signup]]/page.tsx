import { SignUp, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/Skeleton";

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden flex-col justify-center items-center bg-zinc-900 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <Image
          src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80"
          alt="Authentication background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
        
        <div className="relative z-20 flex flex-col items-center justify-center p-10 text-center space-y-8">
          <Link href="/" className="flex flex-col items-center gap-6 hover:opacity-80 transition-opacity">
            <img
              src="/logo-new.svg"
              alt="Error404 Logo"
              width={120}
              height={120}
              style={{ width: 120, height: 120, objectFit: 'contain' }}
            />
          </Link>
          
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight leading-tight">
               Fed up with boring 404 pages?
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed text-balance">
              Join thousands of developers building engaging, brand-aware error pages. Stop losing traffic to dead ends—turn them into new beginnings.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
           <Link href="/signin" className="text-sm font-medium hover:underline underline-offset-4">
              Sign in
           </Link>
        </div>

        <div className="relative mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Enter your email below to create your account
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center min-h-[500px]">
            <ClerkLoading>
              <div className="w-full space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-10 w-full mt-4" />
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-zinc-200 dark:border-zinc-800"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-zinc-50 dark:bg-zinc-950 px-2 text-zinc-500">Or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </ClerkLoading>
            
            <ClerkLoaded>
              <SignUp 
                routing="path" 
                path="/signup" 
                signInUrl="/signin"
                fallbackRedirectUrl="/components" 
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-none bg-transparent w-full",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    formButtonPrimary: "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
                    formFieldInput: "rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-700",
                    formFieldLabel: "text-zinc-900 dark:text-zinc-100 font-medium",
                    socialButtonsIconButton: "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900",
                    socialButtonsBlockButton: "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100",
                  }
                }} 
              />
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </div>
  );
}
