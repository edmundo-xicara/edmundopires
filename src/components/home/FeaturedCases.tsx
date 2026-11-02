import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { featuredCases, pick, type FeaturedCase } from "@/data/home";

function Row({ c }: { c: FeaturedCase }) {
  const { language } = useLanguage();
  const body = (
    <>
      <span className="font-mono text-[13px] text-muted-foreground">{c.year}</span>
      <h3
        className="text-[clamp(22px,2.8vw,38px)] transition-[transform,color] duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-2.5 group-hover:text-primary"
        style={{ fontVariationSettings: '"wdth" 88' }}
      >
        {pick(c.title, language)}
        {c.external && " ↗"}
      </h3>
      <span className="text-sm text-muted-foreground md:text-right">
        {pick(c.client, language)} · {pick(c.category, language)}
      </span>
    </>
  );
  const cls = "group grid md:grid-cols-[70px_minmax(0,1fr)_auto] gap-1.5 md:gap-5 items-baseline py-6 md:py-7 border-b border-border";
  return c.external ? (
    <a href={c.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <Link to={c.href} className={cls}>
      {body}
    </Link>
  );
}

export function FeaturedCases() {
  const { t } = useLanguage();

  return (
    <section className="section-padding pt-0 md:pt-0 lg:pt-0">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="grid gap-4">
            <span className="kicker">{t("home.cases.kicker")}</span>
            <h2 className="text-[clamp(34px,4.8vw,66px)]">{t("featured.title")}</h2>
          </div>
          <Link to="/cases" className="btn-ghost flex-shrink-0 self-start md:self-auto">
            {t("featured.viewAll")}
          </Link>
        </div>

        <div className="border-t border-border">
          {featuredCases.map((c) => (
            <Row key={c.href} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
