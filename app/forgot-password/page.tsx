import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site/SiteHeader";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <>
      <SiteHeader />
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 pt-10">
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
                Don't panic. It happens.
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed text-balance">
                Just like a 404 page helps users find their way back, we'll help you recover your account in no time.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="relative mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
             <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </>
  );
}
