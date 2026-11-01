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

          <Link to="/cases" className="btn-accent mb-10 inline-flex">
            <ArrowLeft size={13} className="mr-2" />
            {t("casesPage.back")}
          </Link>

          <ScrollReveal>
            <header className="mb-12">
              <div className="text-sm font-semibold text-accent mb-4">
                Disney+<span aria-hidden className="mx-2.5 inline-block w-2 h-2 rounded-full bg-signal-yellow align-middle" />{t("case.shogun.category")}
              </div>
              <h1 className="font-heading text-[clamp(36px,5vw,64px)] mb-5">
                {t("case.shogun.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("case.shogun.subtitle")}
              </p>
            </header>
          </ScrollReveal>

          <div className="accent-line mb-12" />

          <div className="space-y-14">
            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl mb-5">{t("case.section.context")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("case.shogun.contextText")}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl mb-5">{t("case.shogun.roleTitle")}</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t("case.shogun.roleText1Pre")}{" "}
                    <a href="https://www.youtube.com/watch?v=peMqRTi6gT4" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">
                      {t("case.shogun.roleText1Link1")}
                    </a>{" "}
                    {t("case.shogun.roleText1Mid")}{" "}
                    <a href="https://www.youtube.com/watch?v=yYWIQOGgllw" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">
                      {t("case.shogun.roleText1Link2")}
                    </a>
                    {t("case.shogun.roleText1Post")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">{t("case.shogun.roleText2")}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg">{t("case.shogun.roleText3")}</p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl mb-5">{t("case.section.process")}</h2>
                <div className="border-t border-border">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
                      <span className="text-sm font-semibold text-accent flex-shrink-0 mt-0.5">
                        {String(i).padStart(2, "0")}
                      </span>
                      <span className="text-muted-foreground leading-relaxed">
                        {t(`case.shogun.process${i}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl mb-5">{t("case.section.result")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("case.shogun.resultText")}</p>
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
