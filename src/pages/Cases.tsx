import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Cases = () => {
  const { t } = useLanguage();

  const allCases = [
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
    {
      slug: "shogun-disney",
      title: t("case.shogun.title"),
      client: t("case.shogun.client"),
      category: t("case.shogun.category"),
      description: t("case.shogun.desc"),
    },
    {
      slug: "revista-instagram",
      title: t("case.revista.title"),
      client: t("case.revista.client"),
      category: t("case.revista.category"),
      description: t("case.revista.desc"),
    },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">

          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h1 className="font-heading text-[clamp(40px,6vw,80px)] font-medium mb-6">
                {t("casesPage.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("casesPage.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="border-t border-border">
            {allCases.map((caseItem, index) => (
              <ScrollReveal key={index} delay={index * 60}>
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
                    <h2 className="font-heading text-2xl font-medium mb-3 group-hover:text-accent transition-colors duration-250">
                      {caseItem.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {caseItem.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-accent font-mono text-[11px] uppercase tracking-[0.18em] flex-shrink-0">
                    {t("casesPage.viewCase")}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-250" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Cases;
