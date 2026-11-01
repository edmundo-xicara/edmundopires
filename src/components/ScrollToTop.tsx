import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

let current: Lenis | null = null;

/** The smooth-scroll instance, when it is running (not under reduced motion). */
export const getLenis = () => current;

/** Smooth wheel scrolling (skipped for reduced motion) and a jump to the top on every route change. */
export function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const instance = new Lenis({ lerp: 0.11 });
    lenis.current = instance;
    current = instance;
    let frame = 0;
    const raf = (time: number) => {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      instance.destroy();
      lenis.current = null;
      current = null;
    };
  }, []);

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
