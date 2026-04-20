import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OtherCases } from "@/components/OtherCases";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseShogun = () => {
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
                Disney+ • {t("case.shogun.category")}
              </span>
              <h1 className="text-4xl md:text-5xl mb-6">{t("case.shogun.title")}</h1>
              <p className="text-xl text-muted-foreground text-justify">
                {t("case.shogun.subtitle")}
              </p>
            </header>
          </ScrollReveal>

          <div className="accent-line mb-12" />

          <div className="editorial-prose space-y-12">
            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t("case.section.context")}</h2>
                <p className="text-justify">{t("case.shogun.contextText")}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t("case.shogun.roleTitle")}</h2>
                <p className="text-justify">
                  {t("case.shogun.roleText1Pre")}{" "}
                  <a href="https://www.youtube.com/watch?v=peMqRTi6gT4" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{t("case.shogun.roleText1Link1")}</a>{" "}
                  {t("case.shogun.roleText1Mid")}{" "}
                  <a href="https://www.youtube.com/watch?v=yYWIQOGgllw" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{t("case.shogun.roleText1Link2")}</a>
                  {t("case.shogun.roleText1Post")}
                </p>
                <p className="text-justify mt-4">{t("case.shogun.roleText2")}</p>
                <p className="text-justify mt-4">{t("case.shogun.roleText3")}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t("case.section.process")}</h2>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-justify">{t(`case.shogun.process${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t("case.section.result")}</h2>
                <p className="text-justify">{t("case.shogun.resultText")}</p>
              </section>
            </ScrollReveal>
          </div>

          <OtherCases currentSlug="shogun-disney" />
        </div>
      </article>
    </Layout>
  );
};

export default CaseShogun;
