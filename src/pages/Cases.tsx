import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { catalog } from "@/data/catalog";
import { pick } from "@/data/home";
import { prefersReducedMotion } from "@/lib/motion";
import { getLenis } from "@/components/ScrollToTop";
import { closeInto, openFrom, startClose, takeReturnSlug } from "@/lib/caseTransition";
import "@/styles/cases.css";

const N = catalog.length;
// Scroll budget, in stage heights: one for the intro, one per case, and a dwell after the last one
// so it stays pinned (and its title readable) before the footer comes up.
const DWELL = 0.6;

/**
 * The cases page is one catalog. A pinned stage holds the thumbnails stacked in depth along a rising diagonal;
 * scrolling brings the next one forward while the current one shrinks into a pile in the bottom-left corner.
 * When scrolling stops, the nearest case glides into the middle.
 */
const Cases = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const title = useRef<HTMLHeadingElement>(null);
  const f = useRef(-1);
  const anchor = useRef(-1); // the case the snap last settled on
  const [active, setActive] = useState(-1);
  const [shown, setShown] = useState(0); // the case whose text is on screen; trails `active` through a short fade
  const [swapping, setSwapping] = useState(false);

  const travel = () => (track.current && stage.current ? track.current.offsetHeight - stage.current.offsetHeight * (1 + DWELL) : 1);
  const target = () => {
    if (!track.current) return -1;
    const p = Math.min(1, Math.max(0, -track.current.getBoundingClientRect().top / travel()));
    return p * N - 1;
  };
  const scrollFor = (i: number) => (track.current ? track.current.getBoundingClientRect().top + window.scrollY + ((i + 1) / N) * travel() : 0);

  const scrollToCase = useCallback((i: number, immediate = false) => {
    const y = scrollFor(i);
    const lenis = getLenis();
    if (lenis) {
      // Lenis caches the page height; right after a route change it still has the previous page's, and would cut the jump short
      lenis.resize();
      lenis.scrollTo(y, immediate ? { immediate: true, force: true } : { duration: 0.9 });
    }
    else window.scrollTo({ top: y, behavior: immediate || prefersReducedMotion() ? "auto" : "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const layout = useCallback(() => {
    const st = stage.current;
    if (!st) return;
    const w = st.clientWidth, h = st.clientHeight, phone = w < 760, ff = f.current;
    // the card in focus: as wide as fits between the sheet above and the blurb below
    const W = phone ? w * 0.84 : Math.min(w * 0.46, h * 0.46 * (16 / 9));
    // on phones the intro text sits over the stack, so the stack starts lower and rises into place
    const cx = phone ? w * 0.5 : w * 0.58;
    const cy = phone ? h * (0.5 + Math.max(0, -ff) * 0.26) : h * 0.54;

    cards.current.forEach((el, i) => {
      if (!el) return;
      const d = i - ff, ad = Math.abs(d);
      let x: number, y: number, s: number, o: number;
      if (d >= 0) {
        // upcoming: each one tucked behind the last, up and to the right, smaller and dimmer
        x = cx + d * (phone ? w * 0.2 : w * 0.15);
        y = cy - d * (phone ? h * 0.07 : h * 0.1);
        s = Math.max(0.3, 1 - d * 0.24);
        o = d > 4 ? 0 : Math.min(1, 4 - d);
      } else {
        // passed: stays in front while it shrinks into the pile in the bottom-left corner
        const sP = phone ? 0.26 : 0.22, hW = W * sP, hH = W * (9 / 16) * sP;
        const px = (phone ? 20 : 32) + hW / 2, py = (phone ? h * 0.76 : h - 34) - hH / 2;
        const tt = Math.min(1, ad), e = tt * tt * (3 - 2 * tt);
        const age = Math.min(5, Math.max(0, ad - 1)); // older ones fan out behind the newest
        x = cx + (px + age * 7 - cx) * e;
        y = cy + (py - age * 11 - cy) * e;
        s = 1 + (sP - 1) * e;
        o = ad > 6 ? Math.max(0, 7 - ad) : 1;
      }
      el.style.width = `${W}px`;
      el.style.transform = `translate3d(${x - W / 2}px, ${y - (W * 9) / 16 / 2}px, 0) rotateY(-9deg) rotateX(4deg) scale(${s})`;
      el.style.opacity = String(o);
      el.style.filter = d > 0.05 ? `brightness(${Math.max(0.55, 1 - d * 0.16)}) saturate(${Math.max(0.4, 1 - d * 0.2)})` : "none";
      // passed cards always sit above the stack, newest on top of the pile
      el.style.zIndex = String(d < 0 ? 300 - Math.round(ad * 10) : 100 - Math.round(ad * 10));
      el.style.pointerEvents = o < 0.2 ? "none" : "";
    });

    if (intro.current) {
      const k = Math.min(1, Math.max(0, (ff + 1) / 0.6));
      intro.current.style.opacity = String(1 - k);
      intro.current.style.transform = `translateY(calc(-50% - ${k * 60}px))`;
      intro.current.style.pointerEvents = k > 0.5 ? "none" : "";
    }
  }, []);

  // follow the scroll smoothly, place the cards, track the case in focus, and snap when scrolling stops
  useEffect(() => {
    const reduce = prefersReducedMotion();
    let frame = 0, running = false, snapTimer = 0;
    anchor.current = Math.round(target());
    f.current = target();

    const tick = () => {
      const tg = target();
      f.current += (tg - f.current) * (reduce ? 1 : 0.18);
      if (Math.abs(tg - f.current) < 0.0005) f.current = tg;
      layout();
      const ff = f.current;
      setActive(ff < -0.45 ? -1 : Math.min(N - 1, Math.max(0, Math.round(ff))));
      if (f.current !== tg) frame = requestAnimationFrame(tick);
      else running = false;
    };
    const kick = () => {
      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };
    // a small push in either direction moves on to the next case; less than that settles back
    const snap = () => {
      const tg = target();
      if (tg >= N - 1 + 1e-3) return;
      const moved = tg - anchor.current;
      // the tolerance absorbs sub-pixel rounding, so a case that is already in place isn't pushed to the next one
      const r = Math.max(-1, Math.min(N - 1, moved > 0.12 ? Math.ceil(tg - 0.02) : moved < -0.12 ? Math.floor(tg + 0.02) : anchor.current));
      anchor.current = r;
      if (Math.abs(tg - r) > 0.004) scrollToCase(r);
    };
    const onScroll = () => {
      kick();
      clearTimeout(snapTimer);
      snapTimer = window.setTimeout(snap, 140);
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", kick);
    layout();
    kick();
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", kick);
      cancelAnimationFrame(frame);
      clearTimeout(snapTimer);
    };
  }, [layout, scrollToCase]);

  // coming back from a case page: start covered, jump to that case, and shrink the cover into its card
  useEffect(() => {
    const slug = takeReturnSlug();
    const i = slug ? catalog.findIndex((c) => c.slug === slug) : -1;
    if (i < 0) return;
    const el = startClose();
    scrollToCase(i, true);
    anchor.current = i;
    f.current = i;
    layout();
    requestAnimationFrame(() => {
      const r = cards.current[i]?.getBoundingClientRect();
      if (r) closeInto(el, r.left + r.width / 2, r.top + r.height / 2);
      else el?.remove();
    });
  }, [layout, scrollToCase]);

  // the sheet and blurb fade out, swap to the new case, and fade back in
  useEffect(() => {
    if (active < 0 || active === shown) return;
    if (prefersReducedMotion()) return setShown(active);
    setSwapping(true);
    const id = window.setTimeout(() => {
      setShown(active);
      setSwapping(false);
    }, 180);
    return () => clearTimeout(id);
  }, [active, shown]);

  // keep the title on one line: shrink the type until it fits the sheet
  useLayoutEffect(() => {
    const fit = () => {
      const el = title.current;
      if (!el) return;
      el.style.fontSize = "";
      let size = parseFloat(getComputedStyle(el).fontSize);
      while (el.scrollWidth > el.clientWidth + 1 && size > 14) el.style.fontSize = `${--size}px`;
    };
    fit();
    addEventListener("resize", fit);
    document.fonts?.ready.then(fit);
    return () => removeEventListener("resize", fit);
  }, [shown, language]);

  const open = (i: number) => {
    const el = cards.current[i];
    if (!el) return;
    const r = el.getBoundingClientRect();
    openFrom(r.left + r.width / 2, r.top + r.height / 2, () => navigate(`/cases/${catalog[i].slug}`));
  };

  const onCard = (i: number) => (i === active ? open(i) : scrollToCase(i));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        scrollToCase(Math.min(N - 1, Math.max(0, active + 1)));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToCase(Math.max(-1, active - 1));
      }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [active, scrollToCase]);

  const c = catalog[shown];
  const hidden = active < 0 ? " is-off" : swapping ? " is-swap" : "";
  const sideDot = (side: "av" | "tc") => <i className={`inline-block w-2 h-2 rounded-full mr-2 align-[1px] ${side === "av" ? "bg-marker" : "bg-primary"}`} />;

  return (
    <Layout>
      <div ref={track} className="catalog" style={{ height: `calc(${N + 1 + DWELL} * (100svh - 64px) + 64px)` }}>
        <div ref={stage} className="catalog-stage">
          <div className="catalog-cards">
            {catalog.map((item, i) => (
              <button
                key={item.slug}
                ref={(el) => (cards.current[i] = el)}
                type="button"
                className="catalog-card"
                style={{ backgroundImage: `url(/cases/${item.img}.webp)` }}
                aria-label={pick(item.title, language)}
                onClick={() => onCard(i)}
              >
                <span className="catalog-year">{item.year}</span>
              </button>
            ))}
          </div>

          <div ref={intro} className="catalog-intro">
            <h1>{t("casesPage.title")}</h1>
            <p>{t("casesPage.desc")}</p>
            <span className="catalog-hint">
              <i />
              {t("catalog.hint")}
            </span>
          </div>

          <div className={`catalog-sheet${hidden}`} aria-live="polite">
            <h2 ref={title}>{pick(c.title, language)}</h2>
            <dl>
              <div>
                <dt>{t("catalog.client")}</dt>
                <dd>{pick(c.client, language)}</dd>
              </div>
              <div>
                <dt>{t("catalog.year")}</dt>
                <dd>{c.year}</dd>
              </div>
              <div>
                <dt>{t("catalog.role")}</dt>
                <dd>{pick(c.role, language)}</dd>
              </div>
              <div>
                <dt>{t("catalog.side")}</dt>
                <dd>
                  {sideDot(c.side)}
                  {t(`catalog.${c.side}`)}
                </dd>
              </div>
            </dl>
          </div>

          <div className={`catalog-counter${active < 0 ? " is-off" : ""}`}>
            <b>
              {String(Math.max(0, active) + 1).padStart(2, "0")}
              <small> / {String(N).padStart(2, "0")}</small>
            </b>
            <div className="catalog-ticks">
              {catalog.map((item, i) => (
                <button
                  key={item.slug}
                  type="button"
                  className={i === active ? "on" : ""}
                  aria-label={`${t("catalog.goTo")} ${pick(item.title, language)}`}
                  onClick={() => scrollToCase(i)}
                />
              ))}
            </div>
          </div>

          <div className={`catalog-blurb${hidden}`}>
            <p>{pick(c.blurb, language)}</p>
            <button type="button" className="btn-primary" onClick={() => active >= 0 && open(active)}>
              {t("catalog.open")} <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cases;
