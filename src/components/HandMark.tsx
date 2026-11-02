import { ReactNode } from "react";
import { useReveal } from "@/lib/motion";

const PATHS = {
  under: { viewBox: "0 0 300 20", d: "M4 13 C 60 6, 120 4, 180 8 S 270 14, 296 6" },
  under2: { viewBox: "0 0 300 20", d: "M4 10 C 70 16, 150 4, 220 9 S 280 15, 296 8" },
  hl: { viewBox: "0 0 300 40", d: "M6 22 C 80 18, 200 24, 294 19" },
  circle: { viewBox: "0 0 200 80", d: "M150 10 C 100 -2, 18 6, 8 36 C 0 66, 90 78, 160 70 C 200 64, 198 22, 140 12 C 120 9, 100 10, 92 14" },
};

interface HandMarkProps {
  children: ReactNode;
  variant?: keyof typeof PATHS;
  /** Punctuation that must stay on the marked words' line */
  tail?: string;
}

/** Underlines, highlights or circles a few words with a stroke that draws itself in when scrolled into view. */
export function HandMark({ children, variant = "under", tail }: HandMarkProps) {
  const [ref, shown] = useReveal<HTMLSpanElement>();
  const { viewBox, d } = PATHS[variant];
  const kind = variant === "under2" ? "under" : variant;

  const mark = (
    <span ref={ref} className={`mark ${kind}${shown ? "" : " pending"}`}>
      <svg viewBox={viewBox} preserveAspectRatio="none" aria-hidden>
        <path pathLength={1} d={d} />
      </svg>
      {children}
    </span>
  );
  return tail ? (
    <span className="whitespace-nowrap">
      {mark}
      {tail}
    </span>
  ) : (
    mark
  );
}
