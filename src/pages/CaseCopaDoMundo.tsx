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
          <Link to="/cases" className="btn-accent mb-8 inline-flex">
            <ArrowLeft size={18} className="mr-2" />
            {t("casesPage.back")}
          </Link>

          <ScrollReveal>
            <header className="mb-12">
              <span className="text-sm text-accent font-medium uppercase tracking-wider mb-4 block">
                Globo Esporte • {t("case.olimpiadas.category")}
              </span>
              <h1 className="text-4xl md:text-5xl mb-6">{t("case.olimpiadas.title")}</h1>
              <p className="text-xl text-muted-foreground text-justify">
                {t("case.olimpiadas.subtitle")}
              </p>
            </header>
          </ScrollReveal>

          <div className="accent-line mb-12" />

          <div className="editorial-prose space-y-12">
            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t("case.section.context")}</h2>
                <p className="text-justify">
                  {t("case.olimpiadas.contextPre")}{" "}
                  <a
                    href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F%40geglobo%2Fvideo%2F7398979892722830597%3Fq%3Dtinocandotv%2520globo%2520esporte%2520torcedor%26t%3D1768226170070&lang=en&enter_method=mandatory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {t("case.olimpiadas.contextLink")}
                  </a>{" "}
                  {t("case.olimpiadas.contextPost")}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t("case.olimpiadas.roleTitle")}</h2>
                <p className="text-justify">{t("case.olimpiadas.roleText")}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t("case.section.process")}</h2>
                <ul className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-justify">{t(`case.olimpiadas.process${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t("case.section.result")}</h2>
                <p className="text-justify">{t("case.olimpiadas.resultText")}</p>
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
