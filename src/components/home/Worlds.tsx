import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { HandMark } from "@/components/HandMark";
import { clips, techProjects, pick } from "@/data/home";
import { prefersReducedMotion, useReveal } from "@/lib/motion";

/** The tech projects as a code listing, one line per string so it can be typed out. */
function codeLines(t: (k: string) => string, lang: "pt" | "en") {
  const lines: string[] = [`<span class="c">${t("home.code.comment")}</span>`, `<span class="k">const</span> lab = [`];
  for (const p of techProjects) {
    const name = pick(p.name, lang);
    const value = p.detail.key === "questions" ? `<span class="k">${p.detail.value}</span>` : `<span class="s">"${p.detail.value}"</span>`;
    lines.push("  {", `    ${t("home.code.name")}: <span class="s">"${name}"</span>,`, `    ${p.detail.key === "questions" ? t("home.code.questions") : "stack"}: ${value},`);
    if (p.href) {
      const host = p.href.replace(/^https?:\/\//, "").replace(/\/$/, "");
      lines.push(`    link: <a href="${p.href}" target="_blank" rel="noopener noreferrer"><span class="s">"${host}"</span> ↗</a>,`);
    }
    lines.push("  },");
  }
  lines.push(`  <span class="c">${t("home.code.more")}</span>`, "];");
  return lines;
}

function CodeListing({ lines, play }: { lines: string[]; play: boolean }) {
  // `done` lines are fully shown; the next one shows `partial`, typed as plain text, then swaps to its highlighted form
  const [done, setDone] = useState(() => (prefersReducedMotion() ? Infinity : 0));
  const [partial, setPartial] = useState("");
  const linesRef = useRef(lines);
  linesRef.current = lines;

  useEffect(() => {
    if (!play || done > 0) return;
    const plain = linesRef.current.map((l) => {
      const d = document.createElement("div");
      d.innerHTML = l;
      return d.textContent ?? "";
    });
    let line = 0;
    let n = 0;
    let timer = 0;
    const tick = () => {
      n += 2;
      if (n < plain[line].length) {
        setPartial(plain[line].slice(0, n));
        timer = window.setTimeout(tick, 16);
        return;
      }
      line += 1;
      n = 0;
      setPartial("");
      setDone(line >= plain.length ? Infinity : line);
      if (line < plain.length) timer = window.setTimeout(tick, 90);
    };
    timer = window.setTimeout(tick, 16);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);

  return (
    <div className="code-list font-mono text-sm leading-[1.75] min-w-0">
      {lines.map((l, i) =>
        i < done ? (
          <div key={i} className="whitespace-pre-wrap break-words" dangerouslySetInnerHTML={{ __html: l + (i === lines.length - 1 ? '<span class="code-caret"></span>' : "") }} />
        ) : i === done ? (
          <div key={i} className="whitespace-pre-wrap break-words">
            {partial}
            <span className="code-caret" />
          </div>
        ) : (
          <div key={i} className="invisible whitespace-pre-wrap break-words" dangerouslySetInnerHTML={{ __html: l }} />
        ),
      )}
    </div>
  );
}

export function Worlds() {
  const { t, language } = useLanguage();
  const [ref, shown] = useReveal<HTMLDivElement>("0px 0px -25% 0px");
  const [lines, setLines] = useState(() => codeLines(t, language));
  useEffect(() => setLines(codeLines(t, language)), [language]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="mundos" className="section-padding pt-10 md:pt-16 lg:pt-20 scroll-mt-16">
      <div className="container-wide">
        <div className="grid gap-4 max-w-3xl mb-10 md:mb-16">
          <span className="kicker">{t("home.worlds.kicker")}</span>
          <h2 className="text-[clamp(34px,4.8vw,66px)]">
            {t("home.worlds.titleA")} <HandMark variant="hl" tail=".">{t("home.worlds.titleMark")}</HandMark>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[36em]">{t("home.worlds.text")}</p>
        </div>

        <div ref={ref} className={`worlds grid lg:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)]${shown ? "" : " pending"}`}>
          <article className="rounded-3xl bg-card border border-border p-6 md:p-9 grid content-start gap-4 min-w-0">
            <span className="kicker">{t("home.worlds.avKicker")}</span>
            <h3 className="text-[clamp(28px,3.2vw,44px)]">{t("home.worlds.avTitle")}</h3>
            <p className="text-muted-foreground max-w-[30em]">{t("home.worlds.avText")}</p>
            <div className="grid gap-2.5 mt-1">
              {clips.map((c, i) => {
                const cls =
                  "clip-item group grid grid-cols-[54px_minmax(0,1fr)_auto] gap-3 items-center p-2.5 rounded-xl bg-soft hover:bg-primary hover:text-primary-foreground";
                const body = (
                  <>
                    <span className="clip-thumb relative aspect-[16/10] rounded-md bg-primary group-hover:bg-marker transition-colors" aria-hidden />
                    <div className="min-w-0">
                      <b className="block text-[15px] leading-tight font-semibold">{pick(c.title, language)}</b>
                      <small className="font-mono text-xs text-muted-foreground group-hover:text-primary-foreground/80">{c.meta}</small>
                    </div>
                    <span className="pr-1.5 text-muted-foreground group-hover:text-primary-foreground transition-transform group-hover:translate-x-0.5" aria-hidden>
                      {c.external ? "↗" : "→"}
                    </span>
                  </>
                );
                const style = { transitionDelay: shown ? `${i * 0.12}s, ${i * 0.12}s, 0s, 0s` : undefined };
                return c.external ? (
                  <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
                    {body}
                  </a>
                ) : (
                  <Link key={c.href} to={c.href} className={cls} style={style}>
                    {body}
                  </Link>
                );
              })}
            </div>
          </article>

          <div className="seam relative grid place-items-center h-16 lg:h-auto" aria-hidden>
            <span className="relative w-11 h-11 rounded-full bg-primary text-primary-foreground grid place-items-center font-heading font-extrabold text-[22px]">
              +
            </span>
          </div>

          <article className="rounded-3xl bg-foreground text-[#E9E3F8] p-6 md:p-9 grid content-start gap-4 min-w-0">
            <span className="kicker text-marker">{t("home.worlds.tcKicker")}</span>
            <h3 className="text-[clamp(28px,3.2vw,44px)]">{t("home.worlds.tcTitle")}</h3>
            <p className="text-[#E9E3F8]/70 max-w-[30em]">{t("home.worlds.tcText")}</p>
            <CodeListing lines={lines} play={shown} />
          </article>
        </div>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-lg">
          <span className="font-hand text-[30px] leading-none text-primary">{t("home.worlds.mergeNote")}</span>
          <span>{t("home.worlds.mergeText")}</span>
        </p>
      </div>
    </section>
  );
}
