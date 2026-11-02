import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

// Sections no longer fade in one by one: the page has a single orchestrated moment (the home intro)
// and otherwise only moves in response to the visitor. Kept as a plain wrapper so existing pages don't change.
export function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  return <div className={className}>{children}</div>;
}
