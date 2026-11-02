import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { BrandMark } from "@/components/brand/BrandMark";
import { useLanguage } from "@/contexts/LanguageContext";
import { prefersReducedMotion } from "@/lib/motion";
import { ChatContact } from "@/components/contact/ChatContact";
import "@/styles/contact.css";

const EMAIL = "edmundopires@outlook.com";
const PHONE = "(31) 99333-1644";
const WHATSAPP = "https://wa.me/5531993331644";
const LINKEDIN = "https://www.linkedin.com/in/edmundo-pires-12ab89237/";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75ZM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.6 4.77 6V21h-4v-5c0-1.2-.02-2.73-1.66-2.73-1.67 0-1.92 1.3-1.92 2.64V21h-4V9.75Z" />
  </svg>
);

type Cable = { d: string; port: { x: number; y: number }; wa: boolean };

/**
 * The contact page is a business card with a cable running from a port on its edge to each channel.
 * Side by side on wide screens; on phones the cables drop from the card's bottom edge into the stacked channels.
 */
const Contato = () => {
  const { t } = useLanguage();
  const board = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLElement>(null);
  const nodes = useRef<(HTMLElement | null)[]>([]);
  const [cables, setCables] = useState<Cable[]>([]);
  const [shown, setShown] = useState(false);
  const [settled, setSettled] = useState(false); // entrance done: drop the stagger delay so hovers respond at once
  const [hot, setHot] = useState(-1);
  const [copied, setCopied] = useState(false);
  const drawn = useRef(false);
  const [wired, setWired] = useState(false); // the cables have finished drawing: the flowing dashes and sparks can show

  // lay the cables from the card's edge to the near side of each channel
  useEffect(() => {
    const reduce = prefersReducedMotion();
    const measure = () => {
      const b = board.current?.getBoundingClientRect();
      const c = card.current?.getBoundingClientRect();
      if (!b || !c) return;
      const stacked = window.innerWidth < 1024;
      const n = nodes.current.length;
      setCables(
        nodes.current.map((el, i) => {
          const r = el!.getBoundingClientRect();
          const x2 = r.left - b.left, y2 = r.top - b.top + r.height / 2;
          if (!stacked) {
            const x1 = c.right - b.left, y1 = c.top - b.top + c.height * (0.3 + i * 0.2), mx = (x1 + x2) / 2;
            return { d: `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`, port: { x: x1 - (c.left - b.left), y: y1 - (c.top - b.top) }, wa: i === 1 };
          }
          // inner cable for the first channel, outer for the last, so they never cross
          const x1 = c.left - b.left + 16 + (n - 1 - i) * 10, y1 = c.bottom - b.top;
          return {
            d: `M${x1},${y1} L${x1},${y2 - 18} Q${x1},${y2} ${x1 + 18},${y2} L${x2},${y2}`,
            port: { x: x1 - (c.left - b.left), y: c.height },
            wa: i === 1,
          };
        }),
      );
    };
    // wait for the card and channels to finish sliding in before measuring
    const first = window.setTimeout(measure, reduce ? 0 : 1400);
    const show = window.setTimeout(() => setShown(true), reduce ? 0 : 150);
    const settle = window.setTimeout(() => setSettled(true), reduce ? 0 : 1500);
    let t = 0;
    const onResize = () => {
      clearTimeout(t);
      t = window.setTimeout(measure, 120);
    };
    addEventListener("resize", onResize);
    document.fonts?.ready.then(() => drawn.current && measure());
    return () => {
      clearTimeout(first);
      clearTimeout(show);
      clearTimeout(settle);
      clearTimeout(t);
      removeEventListener("resize", onResize);
    };
  }, []);

  // the first time they appear, the cables draw themselves from the card out to the channels
  const svg = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!cables.length || drawn.current) return;
    drawn.current = true;
    if (prefersReducedMotion()) return setWired(true);
    // a violet stroke runs from the card out to each channel, one after the other
    const paths = [...(svg.current?.querySelectorAll<SVGPathElement>(".base") ?? [])];
    paths.forEach((p, i) => {
      const L = p.getTotalLength();
      p.style.strokeDasharray = `${L}`;
      // Web Animations rather than a CSS transition: it runs regardless of React re-rendering the path
      p.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], {
        duration: 1200,
        delay: i * 180,
        easing: "cubic-bezier(.65,0,.35,1)",
        fill: "backwards",
      });
    });
    const done = window.setTimeout(() => {
      // drop the drawing styles so the cables can be re-measured on resize
      paths.forEach((p) => {
        p.style.strokeDasharray = "";
      });
      setWired(true);
    }, 1200 + paths.length * 180);
    return () => clearTimeout(done);
  }, [cables]);

  // the card tilts toward the pointer, with a light sheen following it
  const tilt = (e: React.PointerEvent) => {
    const el = card.current;
    if (!el || prefersReducedMotion() || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `rotateY(${(x - 0.5) * 8}deg) rotateX(${(0.5 - y) * 8}deg)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      },
      () => {
        /* clipboard refused: the address is on screen to select */
      },
    );
  };

  const nodeProps = (i: number) => ({
    ref: (el: HTMLElement | null) => (nodes.current[i] = el),
    className: `contact-node${i === 1 ? " wa" : ""}${shown ? "" : " pending"}`,
    style: { transitionDelay: shown && !settled ? `${0.25 + i * 0.12}s` : undefined },
    onPointerEnter: () => setHot(i),
    onPointerLeave: () => setHot(-1),
    onFocus: () => setHot(i),
    onBlur: () => setHot(-1),
  });

  return (
    <Layout hideContact>
      <section className="section-padding pb-24 md:pb-32">
        <div className="container-wide">
          <header className="grid gap-4 mb-10 md:mb-14">
            <h1 className="text-[clamp(48px,8vw,116px)] tracking-[-0.04em]" style={{ fontVariationSettings: '"wdth" 82' }}>
              {t("contato.title")}
            </h1>
            <p className="hidden md:block text-lg md:text-xl text-muted-foreground max-w-[32em]">{t("contato.desc")}</p>
            <span className="contact-eta">
              <i />
              {t("contato.responseTime")}
            </span>
          </header>

          {/* phones get the chat; wider screens the card with its cables */}
          <ChatContact />

          <div ref={board} className="contact-board">
            <svg ref={svg} className={`contact-cables${wired ? " wired" : ""}`} aria-hidden>
              {cables.map((c, i) => (
                <g key={i}>
                  <path className="base" d={c.d} />
                  <path className={`flow${hot === i ? " hot" : ""}`} d={c.d} />
                  {!prefersReducedMotion() && (
                    <circle className={`spark${c.wa ? " wa" : ""}`} r={4}>
                      <animateMotion dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite" path={c.d} />
                    </circle>
                  )}
                </g>
              ))}
            </svg>

            <div className={`contact-card-wrap${shown ? "" : " pending"}`} onPointerMove={tilt} onPointerLeave={() => card.current && (card.current.style.transform = "")}>
              <article ref={card} className="contact-card" aria-label={t("contato.cardLabel")}>
                <div className="photo" role="img" aria-label={t("contato.photoAlt")} />
                <div className="info">
                  <div className="flex justify-between items-start gap-3 text-muted-foreground">
                    <span className="contact-mono">{t("contato.card.kicker")}</span>
                    <span className="ring">EP</span>
                  </div>
                  <h2 className="name">Edmundo Pires</h2>
                  <p className="contact-mono rule">{t("contato.card.role")}</p>
                  <div className="flex justify-between items-center gap-2.5 flex-wrap">
                    <span className="contact-mono text-primary">{t("contato.card.place")}</span>
                    <BrandMark className="!text-[clamp(14px,1.3vw,17px)]" />
                  </div>
                </div>
              </article>
              {cables.map((c, i) => (
                <span key={i} className="contact-port" style={{ left: c.port.x, top: c.port.y }} />
              ))}
            </div>

            <div className="contact-nodes">
              <button type="button" onClick={copyEmail} {...nodeProps(0)}>
                <span className="ic">
                  <MailIcon />
                </span>
                <span className="min-w-0">
                  <span className="contact-mono lab">{t("contato.email")}</span>
                  <span className="val">{copied ? t("contato.emailCopied") : EMAIL}</span>
                </span>
                <span className="act">{t("contato.copyAction")}</span>
              </button>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" {...nodeProps(1)}>
                <span className="ic">
                  <WhatsAppIcon />
                </span>
                <span className="min-w-0">
                  <span className="contact-mono lab">WhatsApp</span>
                  <span className="val">{PHONE}</span>
                </span>
                <span className="act">{t("contato.whatsappAction")}</span>
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" {...nodeProps(2)}>
                <span className="ic">
                  <LinkedInIcon />
                </span>
                <span className="min-w-0">
                  <span className="contact-mono lab">{t("contato.linkedin")}</span>
                  <span className="val">{t("contato.linkedinDesc")}</span>
                </span>
                <span className="act">{t("contato.openAction")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
