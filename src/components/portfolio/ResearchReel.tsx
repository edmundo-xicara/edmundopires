import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { research } from "@/data/portfolio";
import { pick } from "@/data/home";

const OFFSET = 122; // header + chapter bar

/** Research videos on a pinned stage: scrolling down slides the reel sideways. */
export function ResearchReel() {
  const { t, language } = useLanguage();
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const [num, setNum] = useState(1);

  useEffect(() => {
    let travel = 0;
    const size = () => {
      const tr = track.current, w = wrap.current;
      if (!tr || !w) return;
      // vertical room = how far the reel must travel sideways, plus one screen to see the last slide
      const pad = parseFloat(getComputedStyle(tr).paddingLeft) || 20;
      travel = Math.max(0, tr.scrollWidth - window.innerWidth + pad);
      w.style.height = `${travel + window.innerHeight - OFFSET}px`;
    };
    const onScroll = () => {
      const w = wrap.current, tr = track.current;
      if (!w || !tr) return;
      const r = w.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - (window.innerHeight - OFFSET))));
      tr.style.transform = `translate3d(${-p * travel}px, 0, 0)`;
      if (bar.current) bar.current.style.width = `${p * 100}%`;
      setNum(Math.min(research.length, Math.round(p * (research.length - 1)) + 1));
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
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
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
