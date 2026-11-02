import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { labProjects, type LabPane, type LabProject } from "@/data/lab";
import { pick } from "@/data/home";
import { getLenis } from "@/components/ScrollToTop";
import { prefersReducedMotion } from "@/lib/motion";
import "@/styles/lab.css";

const OFFSET = 122; // header + tabs
const pad = (n: number) => String(n).padStart(2, "0");

/** What the window shows at one step. */
function Pane({ pane, on }: { pane: LabPane; on: boolean }) {
  const { language } = useLanguage();
  const cls = `lab-pane${on ? " on" : ""}`;
  switch (pane.kind) {
    case "image":
      return (
        <div className={cls}>
          <img src={pane.src} alt="" loading="lazy" />
        </div>
      );
    case "sheet":
      return (
        <div className={`${cls} pad`}>
          <div className="lab-sheet">
            <table>
              <thead>
                <tr>
                  <th>ano</th>
                  <th>q.</th>
                  <th>disciplina</th>
                  <th>matéria</th>
                  <th>assuntos</th>
                  <th>método</th>
                </tr>
              </thead>
              <tbody>
                {pane.rows.map((r) => (
                  <tr key={r[0] + r[1]}>
                    {r.map((c, i) => (
                      <td key={i}>{c}</td>
                    ))}
                    <td>
                      <span className="tag">manual</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="lab-note">{pick(pane.note, language)}</p>
        </div>
      );
    case "terminal":
      return (
        <div className={`${cls} pad`}>
          <div className="lab-term">
            {pane.lines.map((l, i) => (
              <div key={i} className={l.startsWith("#") ? "c" : ""}>
                {l.startsWith("$") ? (
                  <>
                    <span className="p">$</span>
                    {l.slice(1)}
                  </>
                ) : l.startsWith("✓") ? (
                  <>
                    <span className="ok">✓</span>
                    {l.slice(1)}
                  </>
                ) : (
                  l
                )}
              </div>
            ))}
          </div>
          {pane.chips && (
            <div className="lab-chips">
              {pane.chips.map((c) => (
                <span key={c} className="lab-chip">
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      );
    case "stats":
      return (
        <div className={`${cls} pad`}>
          <div className="lab-stats">
            {pane.stats.map((s) => (
              <div key={s.value}>
                <b>{s.value}</b>
                <span>{pick(s.label, language)}</span>
              </div>
            ))}
          </div>
          <img src={pane.src} alt="" loading="lazy" className="framed" />
        </div>
      );
    case "old":
      return (
        <div className={`${cls} pad`}>
          <div className="lab-old">
            <div className="t">Estrategista de Conteúdo</div>
            <p>Gestão, coordenação e produção para canais e criadores de conteúdo de grande escala.</p>
            <div className="b">
              <i />
              <i />
            </div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              <path vectorEffect="non-scaling-stroke" d="M6 10 L94 90 M94 12 L8 88" />
            </svg>
          </div>
          <p className="lab-note">{language === "pt" ? "não é mais isso que eu faço" : "that's not what I do anymore"}</p>
        </div>
      );
    case "refs":
      return (
        <div className={`${cls} pad`}>
          <div className="lab-refs">
            {pane.refs.map(([what, site]) => (
              <div key={site}>
                {pick(what, language)} <b>{site}</b>
              </div>
            ))}
          </div>
        </div>
      );
    case "swatches":
      return (
        <div className={`${cls} pad`}>
          <div className="lab-swatches">
            {["#2433FF", "#07243B", "#FF5B14"].map((c) => (
              <i key={c} style={{ background: c }} />
            ))}
          </div>
          <p className="lab-note">{language === "pt" ? "v1: azul, mar, laranja" : "v1: blue, sea, orange"}</p>
          <div className="lab-swatches">
            {["#6A2BFF", "#170C2B", "#8E1E9E"].map((c) => (
              <i key={c} style={{ background: c }} />
            ))}
          </div>
          <p className="lab-note">{language === "pt" ? "v2: roxo. ficou o Violeta ✓" : "v2: purple. Violeta it is ✓"}</p>
        </div>
      );
    case "minis":
      return (
        <div className={`${cls} pad`}>
          <div className="lab-minis">
            {pane.srcs.map((s) => (
              <img key={s} src={s} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      );
    case "code":
      return (
        <div className={`${cls} pad`}>
          <div className="lab-term">
            {pane.lines.map((l, i) => (
              <div key={i}>{l}</div>
            ))}
          </div>
          <div className="lab-chips">
            {pane.chips.map((c) => (
              <span key={c} className="lab-chip">
                {c}
              </span>
            ))}
          </div>
        </div>
      );
  }
}

/** A project's walkthrough: the page stays put while the steps advance and the window swaps its content. */
function Walkthrough({ project }: { project: LabProject }) {
  const { language } = useLanguage();
  const walk = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const n = project.steps.length;

  useEffect(() => {
    const onScroll = () => {
      const el = walk.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - (window.innerHeight - OFFSET))));
      if (bar.current) bar.current.style.width = `${p * 100}%`;
      setActive(Math.min(n - 1, Math.floor(p * n)));
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, [n]);

  // clicking a step scrolls to it
  const goTo = (k: number) => {
    const el = walk.current;
    if (!el) return;
    const span = el.offsetHeight - (window.innerHeight - OFFSET);
    const y = el.getBoundingClientRect().top + window.scrollY + ((k + 0.5) / n) * span;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(y, { duration: 0.9 });
    else window.scrollTo({ top: y, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <div ref={walk} className="lab-walk" style={{ height: `calc(${n} * 70svh + 100svh - ${OFFSET}px)` }}>
      <div className="lab-stage">
        <div className="container-wide px-5 md:px-12 lg:px-20 w-full">
          <div className="lab-grid">
            <div className="lab-steps">
              {project.steps.map((s, k) => (
                <button key={k} type="button" className={`lab-step${k === active ? " on" : ""}`} onClick={() => goTo(k)}>
                  <span className="k">{pick(s.label, language)}</span>
                  <span className="h">{pick(s.title, language)}</span>
                  <span className="p">{pick(s.text, language)}</span>
                </button>
              ))}
            </div>
            <div className="lab-screen">
              <div className="bar">
                <i />
                <i />
                <i />
                <span>{project.steps[active].file}</span>
              </div>
              {project.steps.map((s, k) => (
                <Pane key={k} pane={s.pane} on={k === active} />
              ))}
              <span className="count">
                {pad(active + 1)} / {pad(n)}
              </span>
              <div ref={bar} className="prog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The Lab: one tab per project, each a pinned walkthrough. */
const Lab = () => {
  const { t, language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    if (i === current) return;
    const swap = () => {
      setCurrent(i);
      setLeaving(false);
      // every tab starts at its own beginning
      requestAnimationFrame(() => {
        const el = panel.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        if (window.scrollY > top) {
          const lenis = getLenis();
          if (lenis) lenis.scrollTo(top, { immediate: true });
          else window.scrollTo({ top });
        }
      });
    };
    if (prefersReducedMotion()) return swap();
    setLeaving(true);
    window.setTimeout(swap, 300);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (current + (e.key === "ArrowRight" ? 1 : -1) + labProjects.length) % labProjects.length;
    tabs.current[next]?.focus();
    select(next);
  };

  const p = labProjects[current];

  return (
    <Layout>
      <section className="lab-hero container-wide px-5 md:px-12 lg:px-20">
        <h1>
          {t("lab.title")}
          <span className="cur" aria-hidden />
        </h1>
        <p>{t("lab.intro")}</p>
      </section>

      <nav className="lab-tabs" aria-label={t("lab.projects")}>
        <div className="container-wide px-5 md:px-12 lg:px-20 flex gap-2 py-2.5 overflow-x-auto [scrollbar-width:none]" role="tablist" onKeyDown={onKey}>
          {labProjects.map((proj, i) => (
            <button
              key={proj.id}
              ref={(el) => (tabs.current[i] = el)}
              id={`lab-tab-${proj.id}`}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-controls="lab-panel"
              tabIndex={i === current ? 0 : -1}
              className="lab-tab"
              onClick={() => select(i)}
            >
              <span className="dot">{pad(i + 1)}</span>
              {pick(proj.name, language)}
              <span className="live" title={t("lab.status.live")} />
            </button>
          ))}
        </div>
      </nav>

      <div ref={panel} id="lab-panel" role="tabpanel" aria-labelledby={`lab-tab-${p.id}`} className={`lab-panel${leaving ? " leaving" : ""}`}>
        <section className="lab-proj container-wide px-5 md:px-12 lg:px-20">
          <div>
            <span className="lab-mono text-primary">
              {t("lab.project")} {pad(current + 1)} · {p.year}
            </span>
            <h2>{p.title}</h2>
            <div className="meta">
              <span className="lab-chip ok">● {t("lab.status.live")}</span>
              {p.stack.map((c) => (
                <span key={c} className="lab-chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {p.links.map((l) => (
              // GitHub links are always the outlined button; the project's own site gets the filled one
              <a key={l.href} className={`${l.href.includes("github.com") ? "btn-ghost" : "btn-primary"} !px-4 !py-2.5 !text-sm`} href={l.href} target="_blank" rel="noopener noreferrer">
                {pick(l.label, language)} ↗
              </a>
            ))}
          </div>
        </section>
        <Walkthrough key={p.id} project={p} />
      </div>
    </Layout>
  );
};

export default Lab;
