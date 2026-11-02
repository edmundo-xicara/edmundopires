import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { InkFilters } from "@/components/brand/BrandMark";

interface LayoutProps {
  children: ReactNode;
  /** Leave out the footer's contact block, on pages that are themselves the contact */
  hideContact?: boolean;
}

export function Layout({ children, hideContact = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <InkFilters />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer hideContact={hideContact} />
    </div>
  );
}
