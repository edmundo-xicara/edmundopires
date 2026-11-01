import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { prefersReducedMotion } from "@/lib/motion";

/* Opening a case: a violet circle grows from the clicked card until it fills the screen, the case page
   loads underneath, and the violet fades away. Coming back to /cases: the screen starts violet and the
   circle shrinks from the edges into the card of the case you came from. */

const KEY = "cases-return";
const EASE = "cubic-bezier(.7,0,.2,1)";

function cover() {
  const el = document.createElement("div");
  el.setAttribute("aria-hidden", "true");
  Object.assign(el.style, { position: "fixed", inset: "0", zIndex: "200", background: "hsl(var(--primary))", pointerEvents: "none" });
  document.body.appendChild(el);
  return el;
}

const radius = (x: number, y: number) => Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

/** Grows the circle from (x, y), runs `go` (the navigation) once the screen is covered, then fades the cover out. */
export function openFrom(x: number, y: number, go: () => void) {
  if (prefersReducedMotion()) return go();
  const el = cover();
  const grow = el.animate(
    [{ clipPath: `circle(0px at ${x}px ${y}px)` }, { clipPath: `circle(${radius(x, y)}px at ${x}px ${y}px)` }],
    { duration: 750, easing: EASE, fill: "forwards" },
  );
  grow.onfinish = () => {
    go();
    // two frames so the new page has painted under the cover before it fades
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 350, easing: "ease-out", fill: "forwards" }).onfinish = () => el.remove();
      }),
    );
  };
}

/** A full-screen cover, to be shrunk later with `closeInto` once the target card is in place. */
export function startClose() {
  return prefersReducedMotion() ? null : cover();
}

export function closeInto(el: HTMLElement | null, x: number, y: number) {
  if (!el) return;
  el.animate(
    [{ clipPath: `circle(${radius(x, y)}px at ${x}px ${y}px)` }, { clipPath: `circle(0px at ${x}px ${y}px)` }],
    { duration: 700, easing: EASE, fill: "forwards" },
  ).onfinish = () => el.remove();
}

/** The case the visitor came back from, if they are returning to /cases from a case page. Read once. */
export function takeReturnSlug() {
  try {
    const slug = sessionStorage.getItem(KEY);
    sessionStorage.removeItem(KEY);
    return slug;
  } catch {
    return null;
  }
}

/** Remembers the last case page visited, and forgets it anywhere other than the cases list. */
export function CaseReturnTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = pathname.match(/^\/cases\/([^/]+)\/?$/);
    try {
      if (m) sessionStorage.setItem(KEY, m[1]);
      else if (pathname !== "/cases") sessionStorage.removeItem(KEY);
    } catch {
      /* storage unavailable: the return animation just doesn't play */
    }
  }, [pathname]);
  return null;
}
