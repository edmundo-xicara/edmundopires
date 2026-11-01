import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { InkFilters } from "@/components/brand/BrandMark";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <InkFilters />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
