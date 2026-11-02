import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BrandMark } from "@/components/brand/BrandMark";
import { prefersReducedMotion, setIntroDone, tween } from "@/lib/motion";

const KEY = "intro-played";

function alreadyPlayed() {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

function markPlayed() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* storage unavailable: the intro just plays again next time */
  }
}

/** Decides once, on the home's first render, whether the intro runs. Call during render so children see the paused state. */
export function useIntroGate() {
  const [play] = useState(() => {
    const p = !alreadyPlayed() && !prefersReducedMotion();
    if (p) setIntroDone(false);
    return p;
  });
  return play;
}

// Timeline, in ms
const LOAD = 1800; // the ring counts to 100
const WIPE = 900; // the ring layer wipes up
const TYPE_AT = LOAD + 450; // "byed" starts typing while the wipe uncovers the logo stage
const PER_CHAR = 130;
const PAINT_DELAY = 250;
const PAINT = 1000; // "Studio" brush pass
const HOLD = 450;
const FLY = 950; // the mark travels to the header
const NAV_AT = 380; // into the flight, the capsule starts opening behind the landing logo

/**
 * Once per session on the home:
 * 1. a ring loader counts to 100 and wipes up;
 * 2. the logo is written large in the middle: "byed" typed, "Studio" painted;
 * 3. it flies to the top-left, where the navbar capsule opens behind it;
 * 4. the rest of the page comes in.
 */
export function IntroLoader() {
  const [ringOut, setRingOut] = useState(false);
  const [flying, setFlying] = useState(false);
  const [gone, setGone] = useState(false);
  const arc = useRef<SVGCircleElement>(null);
  const count = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const big = mark.current!;
    const code = big.querySelector<HTMLElement>(".tt")!;
    const paint = big.querySelector<HTMLElement>(".paint")!;
    const splash = big.querySelector<SVGElement>(".spl");
    const word = code.textContent ?? "";
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    markPlayed();
    root.classList.add("intro-playing");

    // the big mark starts empty, keeping its final width so typing doesn't shift it
    code.style.minWidth = `${code.getBoundingClientRect().width}px`;
    code.textContent = "";
    paint.classList.add("off");
    splash?.classList.add("off");

    // 1. ring
    const stopCount = tween(LOAD, (p) => {
      const e = 1 - Math.pow(1 - p, 3);
      arc.current?.setAttribute("stroke-dashoffset", String(1 - e));
      if (count.current) count.current.textContent = String(Math.round(e * 100));
    });
    at(LOAD, () => setRingOut(true));

    // 2. write the logo
    [...word].forEach((_, i) => at(TYPE_AT + i * PER_CHAR, () => (code.textContent = word.slice(0, i + 1))));
    const paintAt = TYPE_AT + word.length * PER_CHAR + PAINT_DELAY;
    at(paintAt, () => paint.classList.remove("off"));
    at(paintAt + PAINT * 0.75, () => splash?.classList.remove("off"));

    // 3. fly to the header logo's slot; the capsule opens behind it as it lands
    const flyAt = paintAt + PAINT + HOLD;
    at(flyAt, () => {
      const target = document.querySelector("[data-header-logo] .bm");
      if (target) {
        const a = big.getBoundingClientRect();
        const b = target.getBoundingClientRect();
        big.style.transformOrigin = "0 0";
        big.style.transform = `translate(${b.left - a.left}px, ${b.top - a.top}px) scale(${b.width / a.width})`;
      }
      setFlying(true);
    });
    at(flyAt + NAV_AT, () => root.classList.add("intro-nav"));

    // 4. hand over to the real header and let the page in
    const finish = () => {
      root.classList.remove("intro-playing", "intro-nav");
      setIntroDone(true);
      setGone(true);
    };
    at(flyAt + FLY + 60, finish);

    return () => {
      timers.forEach(clearTimeout);
      stopCount();
      finish();
    };
  }, []);

  if (gone) return null;

  // portaled to <body>: main is transformed while the intro plays, which would pin these fixed layers to it instead of the viewport
  return createPortal(
    <>
      {/* the logo stage, under the ring */}
      <div className={`intro-stage${flying ? " flying" : ""}`} aria-hidden>
        <BrandMark ref={mark} splash className={`intro-mark${flying ? " landing" : ""}`} />
      </div>

      {/* the ring loader */}
      <div className={`intro${ringOut ? " out" : ""}`} aria-hidden>
        <div className="intro-corner tl">
          BYEDSTUDIO
          <br />
          CÓDIGO × AUDIOVISUAL
        </div>
        <div className="intro-ring">
          <svg viewBox="0 0 220 220">
            <circle className="track" cx="110" cy="110" r="96" />
            <circle ref={arc} className="arc" cx="110" cy="110" r="96" pathLength={1} strokeDasharray="1" strokeDashoffset="1" />
            <g className="orbit">
              <circle cx="110" cy="6" r="3" fill="currentColor" />
            </g>
            {[0, 1, 2, 3].map((i) => {
              const a = (i * Math.PI) / 2;
              return (
                <line
                  key={i}
                  className="tick"
                  x1={110 + Math.cos(a) * 108}
                  y1={110 + Math.sin(a) * 108}
                  x2={110 + Math.cos(a) * 118}
                  y2={110 + Math.sin(a) * 118}
                />
              );
            })}
          </svg>
          <div className="intro-center">
            <div ref={count} className="intro-count">
              0
            </div>
            <div className="intro-label">
              carregando
              <br />o sinal
            </div>
          </div>
        </div>
        <div className="intro-corner br">
          roteiro · pesquisa
          <br />
          automação · vibe coding
        </div>
      </div>
    </>,
    document.body,
  );
}
