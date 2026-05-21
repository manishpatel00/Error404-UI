import type { ReactNode } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col">
      <SiteHeader />
      <div className="relative flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
