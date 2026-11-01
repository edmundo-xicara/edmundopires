import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { OtherCases } from "@/components/OtherCases";
import { useLanguage } from "@/contexts/LanguageContext";
import { catalog } from "@/data/catalog";
import { pick } from "@/data/home";

/** The page for a catalog case that has no hand-written page of its own. */
const CaseDetail = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const c = catalog.find((item) => item.slug === slug && !item.page);
  if (!c) return <Navigate to="/cases" replace />;

  const rows = [
    [t("catalog.client"), pick(c.client, language)],
    [t("catalog.year"), c.year],
    [t("catalog.role"), pick(c.role, language)],
  ];

  return (
    <Layout>
      <article className="section-padding pt-10 md:pt-14">
        <div className="max-w-[1100px] mx-auto">
          <Link to="/cases" className="btn-accent mb-8 inline-flex">
            <ArrowLeft size={13} className="mr-2" />
            {t("casesPage.back")}
          </Link>

          <div className="aspect-video max-h-[62svh] w-full rounded-3xl bg-soft bg-cover bg-center" style={{ backgroundImage: `url(/cases/${c.img}.webp)` }} />

          <div className="mt-9 grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,.7fr)] gap-10">
            <div>
              <h1 className="text-[clamp(36px,5.4vw,76px)]" style={{ fontVariationSettings: '"wdth" 84' }}>
                {pick(c.title, language)}
              </h1>
              {c.text && <p className="mt-5 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[38em]">{pick(c.text, language)}</p>}
              {c.link && (
                <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                  {pick(c.link.label, language)} ↗
                </a>
              )}
            </div>
            <dl className="self-start border-t border-foreground">
              {rows.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[100px_minmax(0,1fr)] gap-3 py-2.5 border-b border-border text-[15px]">
                  <dt className="font-mono text-[11px] leading-loose uppercase tracking-[0.1em] text-muted-foreground">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-3 py-2.5 border-b border-border text-[15px]">
                <dt className="font-mono text-[11px] leading-loose uppercase tracking-[0.1em] text-muted-foreground">{t("catalog.side")}</dt>
                <dd>
                  <i className={`inline-block w-2 h-2 rounded-full mr-2 align-[1px] ${c.side === "av" ? "bg-marker" : "bg-primary"}`} />
                  {t(`catalog.${c.side}`)}
                </dd>
              </div>
            </dl>
          </div>

          <div className="max-w-3xl">
            <OtherCases currentSlug={c.slug} />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseDetail;
