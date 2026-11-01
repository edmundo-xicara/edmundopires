import { forwardRef } from "react";

interface BrandMarkProps {
  /** Ink splash at the start of the brush stroke. Too small to read at header size, so the intro is the only place that shows it. */
  splash?: boolean;
  className?: string;
}

/** The byedstudio wordmark: "byed" typed as code with a blinking cursor, "Studio" painted by hand. */
export const BrandMark = forwardRef<HTMLSpanElement, BrandMarkProps>(function BrandMark({ splash = false, className = "" }, ref) {
  return (
    <span ref={ref} className={`bm ${className}`} aria-hidden>
      <span className="pr">&gt;</span>
      <span className="tt">byed</span>
      <span className="cur" />
      <span className="paint">
        Studio
        {splash && (
          <svg className="spl" viewBox="0 0 40 30">
            <circle cx="13" cy="17" r="5" />
            <circle cx="20" cy="13" r="2.4" />
            <circle cx="4" cy="9" r="1.6" />
            <circle cx="23" cy="5" r="1.2" />
            <circle cx="27" cy="23" r="2" />
            <circle cx="7" cy="26" r="1.1" />
            <circle cx="17" cy="28" r=".9" />
            <circle cx="31" cy="15" r=".8" />
          </svg>
        )}
      </span>
    </span>
  );
});

function inkFilter(id: string, freq: string, a: number, c: number, displace: number, displaceFreq: string) {
  return (
    <filter id={id} x="-10%" y="-30%" width="120%" height="160%">
      {/* bristle streaks: stretched noise thresholded into holes punched out of the stroke */}
      <feTurbulence type="fractalNoise" baseFrequency={freq} numOctaves={3} seed={4} result="n" />
      <feColorMatrix in="n" type="matrix" values={`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 ${a} ${c}`} result="mask" />
      <feComposite in="SourceGraphic" in2="mask" operator="in" result="dry" />
      {/* ragged edges, like ink soaking into paper */}
      <feTurbulence type="fractalNoise" baseFrequency={displaceFreq} numOctaves={2} seed={9} result="n2" />
      <feDisplacementMap in="dry" in2="n2" scale={displace} xChannelSelector="R" yChannelSelector="G" />
    </filter>
  );
}

/** SVG filters the painted half of the logo refers to. Rendered once per page. */
export function InkFilters() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      {inkFilter("ink", "0.009 0.26", -13, 9, 7, "0.05")}
      {inkFilter("ink-sm", "0.04 0.9", -12, 8.6, 1.6, "0.2")}
    </svg>
  );
}
