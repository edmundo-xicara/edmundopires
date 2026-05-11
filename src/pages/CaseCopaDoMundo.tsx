import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OtherCases } from "@/components/OtherCases";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseCopaDoMundo = () => {
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
                Globo Esporte · {t("case.olimpiadas.category")}
              </div>
              <h1 className="font-heading text-[clamp(36px,5vw,64px)] font-medium mb-5">
                {t("case.olimpiadas.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("case.olimpiadas.subtitle")}
              </p>
            </header>
          </ScrollReveal>

          <div className="accent-line mb-12" />

          <div className="space-y-14">
            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.section.context")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t("case.olimpiadas.contextPre")}{" "}
                  <a
                    href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F%40geglobo%2Fvideo%2F7398979892722830597%3Fq%3Dtinocandotv%2520globo%2520esporte%2520torcedor%26t%3D1768226170070&lang=en&enter_method=mandatory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline underline-offset-2"
                  >
                    {t("case.olimpiadas.contextLink")}
                  </a>{" "}
                  {t("case.olimpiadas.contextPost")}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.olimpiadas.roleTitle")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("case.olimpiadas.roleText")}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.section.process")}</h2>
                <div className="border-t border-border">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
                      <span className="font-mono text-[11px] tracking-[0.14em] text-accent flex-shrink-0 mt-0.5">
                        {String(i).padStart(2, "0")}
                      </span>
                      <span className="text-muted-foreground leading-relaxed">
                        {t(`case.olimpiadas.process${i}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.section.result")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("case.olimpiadas.resultText")}</p>
              </section>
            </ScrollReveal>
          </div>

          <OtherCases currentSlug="olimpiadas-2024" />
        </div>
      </article>
    </Layout>
  );
};

export default CaseCopaDoMundo;
