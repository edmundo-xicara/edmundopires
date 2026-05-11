import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturedCases() {
  const { t } = useLanguage();

  const cases = [
    {
      slug: "nobel-2025",
      title: t("case.nobel.title"),
      client: t("case.nobel.client"),
      category: t("case.nobel.category"),
      description: t("case.nobel.desc"),
    },
    {
      slug: "grecia-antiga",
      title: t("case.grecia.title"),
      client: t("case.grecia.client"),
      category: t("case.grecia.category"),
      description: t("case.grecia.desc"),
    },
    {
      slug: "olimpiadas-2024",
      title: t("case.olimpiadas.title"),
      client: t("case.olimpiadas.client"),
      category: t("case.olimpiadas.category"),
      description: t("case.olimpiadas.desc"),
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">

        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <h2 className="font-heading text-[clamp(32px,4.5vw,56px)] font-medium mb-4">
                {t("featured.title")}
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                {t("featured.desc")}
              </p>
            </div>
            <Link to="/cases" className="btn-ghost flex-shrink-0">
              {t("featured.viewAll")}
              <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="border-t border-border">
          {cases.map((caseItem, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <Link
                to={`/cases/${caseItem.slug}`}
                className="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-border transition-colors duration-250 hover:bg-card/60 -mx-4 px-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {caseItem.client}
                    </span>
                    <span className="text-muted-foreground text-xs">·</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {caseItem.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-medium mb-3 group-hover:text-accent transition-colors duration-250">
                    {caseItem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {caseItem.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-accent font-mono text-[11px] uppercase tracking-[0.18em] flex-shrink-0">
                  {t("featured.viewCase")}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-250" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
