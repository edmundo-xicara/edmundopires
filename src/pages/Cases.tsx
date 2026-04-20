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
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl mb-6">{t("casesPage.title")}</h1>
              <p className="text-xl text-muted-foreground text-justify">
                {t("casesPage.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {allCases.map((caseItem, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <Link
                  to={`/cases/${caseItem.slug}`}
                  className="card-editorial block group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="text-sm text-accent font-medium uppercase tracking-wider">
                          {caseItem.client}
                        </span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {caseItem.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-250">
                        {caseItem.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        {caseItem.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-medium shrink-0">
                      {t("casesPage.viewCase")}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-250" />
                    </div>
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
