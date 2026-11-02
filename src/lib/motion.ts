import { useEffect, useRef, useState, useSyncExternalStore } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const easeOut = (t: number, k = 3) => 1 - Math.pow(1 - t, k);

/** Runs `fn(progress)` every frame for `duration` ms, starting at 0. Returns a cancel function. */
export function tween(duration: number, fn: (p: number) => void, done?: () => void) {
  const t0 = performance.now();
  let frame = 0;
  fn(0);
  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / duration);
    fn(p);
    if (p < 1) frame = requestAnimationFrame(step);
    else done?.();
  };
  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}

/* ── Intro state ──
   While the home intro plays, scroll-triggered motion waits, so nothing animates hidden under the loader. */
let introDone = true;
const listeners = new Set<() => void>();

export function setIntroDone(value: boolean) {
  if (introDone === value) return;
  introDone = value;
  listeners.forEach((l) => l());
}

export function useIntroDone() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => introDone,
  );
}

/** True once the element has entered the viewport (and the intro, if any, has finished). Fires once. */
export function useReveal<T extends Element>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  const ready = useIntroDone();

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, seen]);

  return [ref, seen && ready] as const;
}
