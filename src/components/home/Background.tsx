import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { HandMark } from "@/components/HandMark";
import { channels, pick, type Channel } from "@/data/home";
import { brands } from "@/data/brands";
import { easeOut, prefersReducedMotion, tween, useReveal } from "@/lib/motion";

const fmt = (v: number, lang: "pt" | "en", decimals = 0) =>
  v.toLocaleString(lang === "pt" ? "pt-BR" : "en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/** A card that drops in slightly rotated and settles, then runs `onShow` once (counters, drawings). */
function Tile({
  children,
  className = "",
  tilt = 0,
  onShow,
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
  onShow?: () => void | (() => void);
  as?: "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
}) {
  const [ref, shown] = useReveal<HTMLDivElement & HTMLAnchorElement>("0px 0px -10% 0px");
  const fired = useRef(false);
  useEffect(() => {
    if (!shown || fired.current || prefersReducedMotion()) return;
    fired.current = true;
    return onShow?.() ?? undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown]);
  return (
    <Tag
      ref={ref}
      {...rest}
      className={`tile rounded-[20px] bg-card border border-border min-w-0 ${shown ? "" : "pending"} ${className}`}
      style={{ "--r": `${tilt}deg` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

function ChannelCard({ c, tilt }: { c: Channel; tilt: number }) {
  const { t, language } = useLanguage();
  const [subs, setSubs] = useState(c.subs);
  return (
    <Tile
      as="a"
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      tilt={tilt}
      className="group overflow-hidden grid content-start"
      onShow={() => tween(1800, (p) => setSubs(c.subs * easeOut(p)))}
    >
      <div
        className="h-[116px] bg-soft bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
        style={{ backgroundImage: `url(${c.banner})` }}
      />
      <div className="relative grid gap-2.5 px-6 pb-6">
        <img src={c.avatar} alt="" width={76} height={76} className="w-[76px] h-[76px] -mt-[38px] rounded-full border-4 border-card bg-soft" />
        <h3 className="text-[clamp(24px,2.4vw,32px)]" style={{ fontVariationSettings: '"wdth" 86' }}>
          {c.name}
        </h3>
        <p className="font-heading font-extrabold text-[clamp(34px,3.4vw,46px)] leading-none tabular-nums" style={{ fontVariationSettings: '"wdth" 76' }}>
          {fmt(subs, language, c.decimals)} {t("home.bg.million")}
          <small className="ml-2 font-mono font-medium text-[13px] text-muted-foreground tracking-normal">{t("home.bg.subsToday")}</small>
        </p>
        <p className="text-[15px] text-muted-foreground">{pick(c.role, language)}</p>
        <span className="text-sm font-semibold text-primary">{t("home.bg.visit")}</span>
      </div>
    </Tile>
  );
}

// The line is drawn as a rising arc; milestone m sits at its share of the 1M → 2.6M climb.
const CURVE = "M20 128 C 140 122, 260 84, 420 22";
const MILESTONES = [1, 1.5, 2, 2.6];

function GrowthTile() {
  const { t, language } = useLanguage();
  const line = useRef<SVGPathElement>(null);
  const [p, setP] = useState(1);
  const [len, setLen] = useState(0);
  useEffect(() => setLen(line.current?.getTotalLength() ?? 0), []);

  const at = (f: number) => line.current?.getPointAtLength(f * len) ?? { x: 20, y: 128 };
  const head = at(p);
  const count = Math.round((1e6 + 1.6e6 * p) / 1000) * 1000;

  return (
    <Tile tilt={-1.5} className="lg:col-span-4 p-6 md:p-8 grid content-between gap-5" onShow={() => tween(2200, (x) => setP(easeOut(x, 2)))}>
      <div>
        <p className="font-heading font-extrabold text-[clamp(42px,5.4vw,76px)] leading-[.9] tabular-nums tracking-[-0.03em]" style={{ fontVariationSettings: '"wdth" 76' }}>
          {fmt(count, language)}
        </p>
        <p className="mt-3 text-[15px] text-muted-foreground max-w-[30em]">{t("home.bg.growth")}</p>
      </div>
      <svg className="growth w-full h-auto overflow-visible" viewBox="0 0 440 150" aria-hidden>
        <g className="grid">
          {[22, 64, 106].map((y) => (
            <line key={y} x1="20" x2="420" y1={y} y2={y} />
          ))}
        </g>
        <path className="area" d={`${CURVE} L420 140 L20 140 Z`} style={{ clipPath: `inset(0 ${100 - p * 100}% 0 0)` }} />
        <path ref={line} className="ln" d={CURVE} style={len ? { strokeDasharray: len, strokeDashoffset: len * (1 - p) } : undefined} />
        {len > 0 &&
          MILESTONES.map((m) => {
            const f = (m - 1) / 1.6;
            const pt = at(f);
            const end = f > 0.9;
            return (
              <g key={m} className={`ms${p >= f - 0.001 ? " on" : ""}`}>
                <circle cx={pt.x} cy={pt.y} r={5} />
                <text x={pt.x + (end ? -10 : 8)} y={pt.y - 12} textAnchor={end ? "end" : "start"}>
                  {fmt(m, language, m % 1 ? 1 : 0)}M
                </text>
              </g>
            );
          })}
        <circle cx={head.x} cy={head.y} r={6} className="fill-primary" />
      </svg>
    </Tile>
  );
}

const HIGHLIGHT = new Set([3, 17, 28, 44, 59, 71]);

function VideosTile() {
  const { t } = useLanguage();
  const [n, setN] = useState(80);
  return (
    <Tile
      tilt={2}
      className="lg:col-span-2 !bg-primary !border-transparent text-primary-foreground p-6 md:p-8 grid content-between gap-5"
      onShow={() => tween(1600, (x) => setN(Math.round(80 * easeOut(x, 2))))}
    >
      <p className="font-heading font-extrabold text-[clamp(42px,5.4vw,76px)] leading-[.9] tabular-nums" style={{ fontVariationSettings: '"wdth" 76' }}>
        {n}
        <span className="text-marker">+</span>
      </p>
      <div className="grid grid-cols-10 gap-1" aria-hidden>
        {Array.from({ length: 80 }, (_, i) => (
          <i key={i} className={`thumb${i < n ? " on" : ""}${HIGHLIGHT.has(i) ? " hi" : ""}`} />
        ))}
      </div>
      <p className="text-[15px] text-primary-foreground/80">{t("home.bg.videos")}</p>
    </Tile>
  );
}

function BrandsTile() {
  const { t } = useLanguage();
  const [shown, setShown] = useState(brands.length);
  return (
    <Tile
      tilt={0.6}
      className="lg:col-span-6 p-6 md:p-8 grid gap-6"
      onShow={() => {
        setShown(0);
        const timers = brands.map((_, i) => window.setTimeout(() => setShown(i + 1), 200 + i * 100));
        return () => timers.forEach(clearTimeout);
      }}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <p className="font-heading font-extrabold text-[clamp(42px,5.4vw,76px)] leading-[.9] tabular-nums" style={{ fontVariationSettings: '"wdth" 76' }}>
          {Math.max(shown, 1)}
          <span className="text-primary">+ {t("home.bg.brands")}</span>
        </p>
        <p className="text-[15px] text-muted-foreground max-w-[26em]">{t("home.bg.brandsText")}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {brands.map((b, i) => {
          const cls = `brand-cell group grid place-items-center aspect-[3/2] rounded-2xl bg-background hover:bg-primary${i < shown ? "" : " pending"}`;
          const logo = (
            <span
              role="img"
              aria-label={b.name}
              className={`logo-mask block text-foreground group-hover:text-primary-foreground ${b.size}`}
              style={{ "--logo": `url(${b.logo})` } as CSSProperties}
            />
          );
          if (!b.href) return <div key={b.name} className={cls}>{logo}</div>;
          return b.internal ? (
            <Link key={b.name} to={b.href} className={cls} title={b.name}>
              {logo}
            </Link>
          ) : (
            <a key={b.name} href={b.href} target="_blank" rel="noopener noreferrer" className={cls} title={b.name}>
              {logo}
            </a>
          );
        })}
      </div>
    </Tile>
  );
}

/** "O que eu trago de antes": the channels, the growth, the volume of work and the brands. */
export function Background() {
  const { t } = useLanguage();
  return (
    <section className="section-padding pt-0 md:pt-0 lg:pt-0">
      <div className="container-wide">
        <div className="grid gap-4 max-w-3xl mb-10 md:mb-16">
          <span className="kicker">{t("home.bg.kicker")}</span>
          <h2 className="text-[clamp(34px,4.8vw,66px)]">
            {t("home.bg.titleA")} <HandMark variant="circle" tail=".">{t("home.bg.titleMark")}</HandMark>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-3.5 mb-3.5">
          {channels.map((c, i) => (
            <ChannelCard key={c.id} c={c} tilt={[-1.2, 1, -0.6][i]} />
          ))}
        </div>
        <div className="grid lg:grid-cols-6 gap-3.5">
          <GrowthTile />
          <VideosTile />
          <BrandsTile />
        </div>
      </div>
    </section>
  );
}
