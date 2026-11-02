import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { driveView, magazines } from "@/data/portfolio";
import { prefersReducedMotion } from "@/lib/motion";

const OFFSET = 122; // header + chapter bar
const PER_MAG = 110; // px of scroll per magazine
const VISIBLE = 8;
const N = magazines.length;
const cover = (slug: string) => `/portfolio/magazines/${slug}.webp`;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The magazines as a stack in depth. Scrolling walks into the stack: the front magazine slides away and the
 * next comes forward. Hovering pulls one up like a file from a drawer, still behind the ones in front of it;
 * clicking opens its cover large, with a link to the full PDF on Drive.
 */
export function MagazineStack() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  const barRef = useRef<HTMLElement>(null);
  const depth = useRef(0);
  const hovered = useRef(-1);
  const [label, setLabel] = useState(0);
  const [viewing, setViewing] = useState(-1);
  const closeRef = useRef<HTMLButtonElement>(null);

  const place = useCallback(() => {
    const stack = stackRef.current, first = items.current[0];
    if (!stack || !first) return;
    const w = stack.clientWidth, h = stack.clientHeight, phone = w < 600;
    const mw = first.offsetWidth, mh = mw * 1.25;
    const stepX = phone ? 34 : Math.min(84, (w - mw) / 7), stepY = phone ? 26 : Math.min(56, (h - mh) / 7);
    const dep = depth.current, hov = hovered.current;
    items.current.forEach((m, i) => {
      if (!m) return;
      const d = i - dep, out = i === hov ? 1 : 0;
      let x: number, y: number, o: number;
      if (d >= 0) {
        // waiting in the stack: up and to the right, one gap per magazine
        x = 10 + d * stepX;
        y = h - mh - 10 - d * stepY;
        o = d > VISIBLE ? Math.max(0, VISIBLE + 1 - d) : 1;
      } else {
        // passed: slides out of the frame down and to the left, fading
        x = 10 + d * stepX * 2.2;
        y = h - mh - 10 - d * stepY * 1.6;
        o = Math.max(0, 1 + d * 1.4);
      }
      x += out * (phone ? 12 : 26);
      y -= out * (phone ? 46 : 90);
      m.style.transform = `translate3d(${x}px, ${y}px, 0) rotateY(${out ? -24 : -38}deg)`;
      m.style.opacity = String(o);
      m.style.pointerEvents = o < 0.3 ? "none" : "";
      m.style.zIndex = String(10 + N - i);
      m.classList.toggle("on", i === hov);
    });
    if (barRef.current) barRef.current.style.width = `${(dep / (N - 1)) * 100}%`;
    setLabel(hov >= 0 ? hov : Math.min(N - 1, Math.max(0, Math.round(dep))));
  }, []);

  // the scroll position decides how deep into the stack we are; the stack follows it smoothly
  useEffect(() => {
    const reduce = prefersReducedMotion();
    let target = 0, frame = 0;
    const size = () => {
      if (trackRef.current) trackRef.current.style.height = `${(N - 1) * PER_MAG + window.innerHeight - OFFSET}px`;
    };
    const step = () => {
      depth.current += (target - depth.current) * (reduce ? 1 : 0.16);
      if (Math.abs(target - depth.current) < 0.001) depth.current = target;
      place();
      frame = depth.current !== target ? requestAnimationFrame(step) : 0;
    };
    const onScroll = () => {
      const tr = trackRef.current;
      if (!tr) return;
      const r = tr.getBoundingClientRect();
      target = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - (window.innerHeight - OFFSET)))) * (N - 1);
      if (!frame) frame = requestAnimationFrame(step);
    };
    const onResize = () => {
      size();
      place();
      onScroll();
    };
    size();
    place();
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, [place]);

  const hover = (i: number) => {
    hovered.current = i;
    place();
  };
  const unhover = (i: number) => {
    if (hovered.current === i) hover(-1);
  };

  // the viewer: Esc closes it and focus goes back to the magazine
  useEffect(() => {
    if (viewing < 0) return;
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setViewing(-1);
    addEventListener("keydown", onKey);
    const opener = items.current[viewing];
    return () => {
      removeEventListener("keydown", onKey);
      opener?.focus({ preventScroll: true });
    };
  }, [viewing]);

  const current = magazines[label];
  const open = viewing >= 0 ? magazines[viewing] : null;

  return (
    <>
      <div ref={trackRef} className="pf-mag-track">
        <div className="pf-mag-stage">
          <div className="container-wide w-full px-5 md:px-12 lg:px-20">
            <div className="pf-mags">
              <div ref={stackRef} className="pf-stack" onPointerLeave={() => hover(-1)}>
                {magazines.map((m, i) => (
                  <button
                    key={m.slug}
                    ref={(el) => (items.current[i] = el)}
                    type="button"
                    className="pf-mag"
                    aria-label={m.title}
                    style={{ backgroundImage: `url(${cover(m.slug)})` }}
                    onPointerEnter={() => hover(i)}
                    onPointerLeave={() => unhover(i)}
                    onFocus={() => hover(i)}
                    onBlur={() => unhover(i)}
                    onClick={() => setViewing(i)}
                  />
                ))}
              </div>
              <div className="pf-mag-label" aria-live="polite">
                <span className="n">{pad(label + 1)}</span>
                <h3>{current.title}</h3>
                <p>
                  TinocandoTV · {N} {t("portfolio.mags.count")}
                </p>
                <div>
                  <button type="button" className="btn-primary !px-4 !py-2.5 !text-sm" onClick={() => setViewing(label)}>
                    {t("portfolio.mags.open")}
                  </button>
                </div>
                <div className="progress">
                  <i ref={barRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`pf-viewer${open ? " on" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label={open?.title}
        onClick={(e) => e.target === e.currentTarget && setViewing(-1)}
      >
        {open && (
          <div className="in">
            <img src={cover(open.slug)} alt={open.title} />
            <div className="side">
              <span className="n">{pad(viewing + 1)}</span>
              <h3>{open.title}</h3>
              <p>TinocandoTV · Instagram</p>
              <div className="acts">
                <a className="btn-primary !px-4 !py-2.5 !text-sm" href={driveView(open.drive)} target="_blank" rel="noopener noreferrer">
                  {t("portfolio.mags.full")} ↗
                </a>
                <button ref={closeRef} type="button" className="btn-ghost !px-4 !py-2.5 !text-sm !text-white" onClick={() => setViewing(-1)}>
                  {t("portfolio.close")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
