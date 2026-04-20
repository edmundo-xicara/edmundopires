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
      description: t("case.nobel.desc"),
    },
    {
      slug: "grecia-antiga",
      title: t("case.grecia.title"),
      client: t("case.grecia.client"),
      description: t("case.grecia.desc"),
    },
    {
      slug: "olimpiadas-2024",
      title: t("case.olimpiadas.title"),
      client: t("case.olimpiadas.client"),
      description: t("case.olimpiadas.desc"),
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <ScrollReveal>
            <div>
              <div className="accent-line mb-6" />
              <h2 className="text-3xl md:text-4xl mb-4">{t("featured.title")}</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                {t("featured.desc")}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link to="/cases" className="btn-accent">
              {t("featured.viewAll")}
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-8">
          {cases.map((caseItem, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <Link
                to={`/cases/${caseItem.slug}`}
                className="card-editorial block group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <span className="text-sm text-accent font-medium uppercase tracking-wider mb-3 block">
                      {caseItem.client}
                    </span>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors duration-250">{caseItem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {caseItem.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-accent font-medium shrink-0">
                    {t("featured.viewCase")}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-250" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
