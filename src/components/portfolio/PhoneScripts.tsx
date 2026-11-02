import { CSSProperties } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { shorts } from "@/data/portfolio";
import { useReveal } from "@/lib/motion";

const TILT = [-4, 2, -2];

function Phone({ i }: { i: number }) {
  const { t, language } = useLanguage();
  const [ref, shown] = useReveal<HTMLDivElement>();
  const s = shorts[i];
  const title = t(s.titleKey);
  return (
    <div ref={ref} className={`pf-phone${shown ? "" : " pending"}`} style={{ "--r": `${TILT[i]}deg`, transitionDelay: shown ? `${i * 0.12}s` : undefined } as CSSProperties}>
      <a className="dev" href={s.video} target="_blank" rel="noopener noreferrer" aria-label={`${t("portfolio.scripts.watch")}: ${title}`}>
        <span className="screen" style={{ backgroundImage: `url(/portfolio/${s.id}.webp)` }}>
          <span className="ui">@tinocandotv · {title}</span>
        </span>
      </a>
      <h3>{title}</h3>
      <div className="acts">
        <a className="btn-primary !px-3.5 !py-2 !text-[13px]" href={s.doc[language]} target="_blank" rel="noopener noreferrer">
          {t("portfolio.scripts.read")} ↗
        </a>
        <a className="btn-ghost !px-3.5 !py-2 !text-[13px]" href={s.video} target="_blank" rel="noopener noreferrer">
          {t("portfolio.scripts.watch")} ↗
        </a>
      </div>
    </div>
  );
}

/** The short-form scripts, each in a phone frame that straightens on hover. */
export function PhoneScripts() {
  return (
    <div className="pf-phones">
      {shorts.map((s, i) => (
        <Phone key={s.id} i={i} />
      ))}
    </div>
  );
}
