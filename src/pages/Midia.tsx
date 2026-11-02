import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ResearchReel } from "@/components/portfolio/ResearchReel";
import { PhoneScripts } from "@/components/portfolio/PhoneScripts";
import { MediaKit } from "@/components/portfolio/MediaKit";
import { MagazineStack } from "@/components/portfolio/MagazineStack";
import { getLenis } from "@/components/ScrollToTop";
import { prefersReducedMotion } from "@/lib/motion";
import "@/styles/portfolio.css";

const CHAPTERS = [
  { id: "pesquisas", key: "portfolio.ch.research" },
  { id: "roteiros", key: "portfolio.ch.scripts" },
  { id: "midia-kit", key: "portfolio.ch.kit" },
  { id: "revistas", key: "portfolio.ch.mags" },
];

const OFFSET = 122; // header + chapter bar

/** Glides to a chapter instead of jumping, quickly even when it is far down the page. */
function goToChapter(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const lenis = getLenis();
  // Lenis already honours the sections' scroll-margin-top, which leaves room for the header and chapter bar
  if (lenis) lenis.scrollTo(el, { duration: 1, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
  else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - OFFSET, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  history.replaceState(null, "", `#${id}`);
}

function ChapterHead({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="pf-ch-head container-wide px-5 md:px-12 lg:px-20">
      <span className="n">{String(n).padStart(2, "0")}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

/** The portfolio, in chapters: research as a pinned reel, scripts on phones, the media kit under a magnifier, magazines in depth. */
const Portfolio = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const bar = useRef<HTMLSpanElement>(null);

  // the chapter bar highlights the chapter in view and fills with page progress
  useEffect(() => {
    const onScroll = () => {
      let cur = 0;
      CHAPTERS.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) cur = i;
      });
      setCurrent(cur);
      const doc = document.documentElement;
      if (bar.current) bar.current.style.width = `${(window.scrollY / Math.max(1, doc.scrollHeight - window.innerHeight)) * 100}%`;
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout>
      <section className="pf-hero container-wide px-5 md:px-12 lg:px-20">
        <h1>{t("portfolio.title")}</h1>
        <p>{t("portfolio.intro")}</p>
      </section>

      <nav className="pf-chapters" aria-label={t("portfolio.chapters")}>
        <div className="container-wide px-5 md:px-12 lg:px-20 flex gap-1.5 overflow-x-auto py-2.5 [scrollbar-width:none]">
          {CHAPTERS.map((c, i) => (
            <a key={c.id} href={`#${c.id}`} className={i === current ? "on" : ""} onClick={(e) => goToChapter(e, c.id)}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              {t(c.key)}
            </a>
          ))}
        </div>
        <span ref={bar} className="bar" />
      </nav>

      <section id="pesquisas" className="pf-ch">
        <ChapterHead n={1} title={t("portfolio.research.title")} text={`${t("portfolio.research.desc")} ${t("portfolio.research.hint")}`} />
        <ResearchReel />
      </section>

      <section id="roteiros" className="pf-ch">
        <ChapterHead n={2} title={t("portfolio.ch.scripts")} text={t("portfolio.scripts.intro")} />
        <div className="container-wide px-5 md:px-12 lg:px-20">
          <PhoneScripts />
        </div>
      </section>

      <section id="midia-kit" className="pf-ch">
        <ChapterHead n={3} title={t("portfolio.ch.kit")} text={t("portfolio.kit.intro")} />
        <div className="container-wide px-5 md:px-12 lg:px-20">
          <MediaKit />
        </div>
      </section>

      <section id="revistas" className="pf-ch">
        <ChapterHead n={4} title={t("portfolio.ch.mags")} text={t("portfolio.mags.intro")} />
        <MagazineStack />
      </section>
    </Layout>
  );
};

export default Portfolio;
