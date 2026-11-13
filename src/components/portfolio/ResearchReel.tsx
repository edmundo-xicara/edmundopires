import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { research } from "@/data/portfolio";
import { pick } from "@/data/home";
import { prefersReducedMotion } from "@/lib/motion";

const OFFSET = 122; // header + chapter bar
const DRIFT = 14; // px per second the reel slides on its own

/** Research videos on a pinned stage: the reel drifts sideways on its own, back and forth, and scrolling down slides it too. */
export function ResearchReel() {
  const { t, language } = useLanguage();
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const [num, setNum] = useState(1);

  useEffect(() => {
    let travel = 0;
    let scrolled = 0; // px of travel coming from the page scroll
    let drift = 0; // px added by the drift, kept so scrolled + drift stays inside the reel
    let dir = 1;
    let held = false; // pointer over the reel: hold still so a slide can be read or clicked
    let raf = 0;
    let last = 0;

    const size = () => {
      const tr = track.current, w = wrap.current;
      if (!tr || !w) return;
      // vertical room = how far the reel must travel sideways, plus one screen to see the last slide
      const pad = parseFloat(getComputedStyle(tr).paddingLeft) || 20;
      travel = Math.max(0, tr.scrollWidth - window.innerWidth + pad);
      w.style.height = `${travel + window.innerHeight - OFFSET}px`;
    };
    const render = () => {
      const tr = track.current;
      if (!tr) return;
      drift = Math.min(travel - scrolled, Math.max(-scrolled, drift));
      const x = scrolled + drift;
      const p = travel ? x / travel : 0;
      tr.style.transform = `translate3d(${-x}px, 0, 0)`;
      if (bar.current) bar.current.style.width = `${p * 100}%`;
      setNum(Math.min(research.length, Math.round(p * (research.length - 1)) + 1));
    };
    const onScroll = () => {
      const w = wrap.current;
      if (!w) return;
      const r = w.getBoundingClientRect();
      scrolled = travel * Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - (window.innerHeight - OFFSET))));
      render();
    };
    const tick = (now: number) => {
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
      last = now;
      if (!held && travel) {
        drift += dir * DRIFT * dt;
        // ping-pong between the first and the last slide
        if (scrolled + drift >= travel) dir = -1;
        else if (scrolled + drift <= 0) dir = 1;
        render();
      }
      raf = requestAnimationFrame(tick);
    };
    const onResize = () => {
      size();
      onScroll();
    };
    size();
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);
    document.fonts?.ready.then(onResize);

    // drift only while the reel is on screen
    const io = new IntersectionObserver(([e]) => {
      cancelAnimationFrame(raf);
      last = 0;
      if (e.isIntersecting && !prefersReducedMotion()) raf = requestAnimationFrame(tick);
    });
    if (wrap.current) io.observe(wrap.current);
    const tr = track.current;
    const hold = () => (held = true);
    const release = () => (held = false);
    tr?.addEventListener("pointerenter", hold);
    tr?.addEventListener("pointerleave", release);
    tr?.addEventListener("focusin", hold);
    tr?.addEventListener("focusout", release);

    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      io.disconnect();
      cancelAnimationFrame(raf);
      tr?.removeEventListener("pointerenter", hold);
      tr?.removeEventListener("pointerleave", release);
      tr?.removeEventListener("focusin", hold);
      tr?.removeEventListener("focusout", release);
    };
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div ref={wrap} className="pf-reel">
      <div className="pf-reel-stage">
        <div ref={track} className="pf-reel-track">
          {research.map((r) => (
            <article key={r.id} className="pf-slide">
              <a
                className="shot"
                href={r.url ?? `https://youtu.be/${r.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundImage: `url(/portfolio/${r.id}.webp)` }}
                aria-label={`${t("portfolio.watchOnYoutube")}: ${pick(r.title, language)}`}
              />
              <div className="min-w-0">
                <span className="pf-mono text-primary">{r.channel}</span>
                <h3>{pick(r.title, language)}</h3>
                <p>{t(r.descKey)}</p>
                <div className="acts">
                  <a className="btn-primary !px-4 !py-2.5 !text-sm" href={pick(r.doc, language)} target="_blank" rel="noopener noreferrer">
                    {t("portfolio.research.sample")} ↗
                  </a>
                  <a className="btn-ghost !px-4 !py-2.5 !text-sm" href={r.url ?? `https://youtu.be/${r.id}`} target="_blank" rel="noopener noreferrer">
                    {t("portfolio.watchOnYoutube")} ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="pf-reel-meta">
          <b>
            {pad(num)} / {pad(research.length)}
          </b>
          <span className="line">
            <i ref={bar} />
          </span>
          <span className="pf-mono text-muted-foreground">{t("portfolio.scroll")} ↓</span>
        </div>
      </div>
    </div>
  );
}
