import { useEffect, useRef, useState } from "react";
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

const LOAD = 2000;
const WIPE = 900;
const PER_CHAR = 130;
const PAINT_DELAY = 250;

/**
 * Writes the header logo in place: "byed" is typed after the cursor, then "Studio" is painted in one brush pass.
 * Works on the header's own DOM and leaves it exactly as rendered.
 */
function writeHeaderLogo(mark: HTMLElement): (start: number) => () => void {
  const code = mark.querySelector<HTMLElement>(".tt");
  const paint = mark.querySelector<HTMLElement>(".paint");
  if (!code || !paint) return () => () => {};
  const word = code.textContent ?? "";
  const timers: number[] = [];
  code.style.minWidth = `${code.getBoundingClientRect().width}px`;
  code.textContent = "";
  paint.classList.add("off");

  return (start: number) => {
    [...word].forEach((_, i) => timers.push(window.setTimeout(() => (code.textContent = word.slice(0, i + 1)), start + i * PER_CHAR)));
    timers.push(window.setTimeout(() => paint.classList.remove("off"), start + word.length * PER_CHAR + PAINT_DELAY));
    timers.push(
      window.setTimeout(() => {
        code.style.minWidth = "";
      }, start + word.length * PER_CHAR + PAINT_DELAY + 1100),
    );
    return () => {
      timers.forEach(clearTimeout);
      code.textContent = word;
      code.style.minWidth = "";
      paint.classList.remove("off");
    };
  };
}

/** Once per session on the home: a ring loader counts to 100 and wipes away, then the header logo writes itself. */
export function IntroLoader() {
  const [out, setOut] = useState(false);
  const [gone, setGone] = useState(false);
  const arc = useRef<SVGCircleElement>(null);
  const count = useRef<HTMLDivElement>(null);

  useEffect(() => {
    markPlayed();
    const mark = document.querySelector<HTMLElement>("[data-header-logo] .bm");
    const play = mark ? writeHeaderLogo(mark) : null;
    let stopLogo: (() => void) | undefined;
    const timers: number[] = [];

    const stopCount = tween(LOAD, (p) => {
      const e = 1 - Math.pow(1 - p, 3);
      arc.current?.setAttribute("stroke-dashoffset", String(1 - e));
      if (count.current) count.current.textContent = String(Math.round(e * 100));
    });

    timers.push(
      window.setTimeout(() => {
        setOut(true);
        setIntroDone(true);
        // start writing while the wipe is still uncovering the header
        stopLogo = play?.(WIPE * 0.4);
      }, LOAD + 200),
    );
    timers.push(window.setTimeout(() => setGone(true), LOAD + 200 + WIPE + 50));

    return () => {
      timers.forEach(clearTimeout);
      stopCount();
      stopLogo?.();
      setIntroDone(true);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`intro${out ? " out" : ""}`} aria-hidden>
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
  );
}
