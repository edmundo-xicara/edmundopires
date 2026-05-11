import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OtherCases } from "@/components/OtherCases";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseGreciaAntiga = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <article className="section-padding">
        <div className="container-narrow">

          <Link to="/cases" className="btn-accent mb-10 inline-flex">
            <ArrowLeft size={13} className="mr-2" />
            {t("casesPage.back")}
          </Link>

          <ScrollReveal>
            <header className="mb-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">
                TinocandoTV · {t("case.grecia.category")}
              </div>
              <h1 className="font-heading text-[clamp(36px,5vw,64px)] font-medium mb-5">
                {t("case.grecia.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("case.grecia.subtitle")}
              </p>
            </header>
          </ScrollReveal>

          <div className="accent-line mb-12" />

          <div className="space-y-14">
            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.section.context")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("case.grecia.contextText")}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.grecia.roleTitle")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("case.grecia.roleText")}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.section.process")}</h2>
                <div className="border-t border-border">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
                      <span className="font-mono text-[11px] tracking-[0.14em] text-accent flex-shrink-0 mt-0.5">
                        {String(i).padStart(2, "0")}
                      </span>
                      <span className="text-muted-foreground leading-relaxed">
                        {t(`case.grecia.process${i}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.section.result")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("case.grecia.resultText")}</p>
              </section>
            </ScrollReveal>
          </div>

          <OtherCases currentSlug="grecia-antiga" />
        </div>
      </article>
    </Layout>
  );
};

export default CaseGreciaAntiga;
