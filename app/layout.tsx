import { type Metadata } from "next";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist_Mono, Roboto_Slab } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/site/ScrollToTop";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Error404 - Creative Error Pages",
  description: "Beautiful, interactive 404 error page templates for modern web",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.UMAMI_WEBSITE_ID ? (
          <Script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.UMAMI_WEBSITE_ID}
          />
        ) : null}
      </head>
      <body
        className={`${robotoSlab.variable} ${geistMono.variable} antialiased selection:bg-white/10`}
      >
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="relative min-h-screen">
              <ScrollToTop />
              <div className="fixed inset-0 bg-grid opacity-100 pointer-events-none z-0" />
              <div className="fixed inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/20 to-zinc-950 pointer-events-none z-0" />
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
