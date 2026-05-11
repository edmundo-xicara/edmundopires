import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OtherCases } from "@/components/OtherCases";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseNobel = () => {
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
                TinocandoTV · {t("case.nobel.category")}
              </div>
              <h1 className="font-heading text-[clamp(36px,5vw,64px)] font-medium mb-5">
                {t("case.nobel.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("case.nobel.subtitle")}
              </p>
            </header>
          </ScrollReveal>

          <div className="accent-line mb-12" />

          <div className="space-y-14">
            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.section.context")}</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-lg">{t("case.nobel.contextText1")}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg">{t("case.nobel.contextText2")}</p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.nobel.roleTitle")}</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t("case.nobel.roleText1Pre")}{" "}
                    <a
                      href="https://www.youtube.com/@cortesTTVoficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline underline-offset-2"
                    >
                      {t("case.nobel.roleText1Link")}
                    </a>
                    {t("case.nobel.roleText1Post")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">{t("case.nobel.roleText2")}</p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.section.process")}</h2>
                <div className="border-t border-border">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
                      <span className="font-mono text-[11px] tracking-[0.14em] text-accent flex-shrink-0 mt-0.5">
                        {String(i).padStart(2, "0")}
                      </span>
                      <span className="text-muted-foreground leading-relaxed">
                        {t(`case.nobel.process${i}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-heading text-2xl font-medium mb-5">{t("case.section.result")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("case.nobel.resultText")}</p>
              </section>
            </ScrollReveal>

            {/* Video thumbnail */}
            <ScrollReveal>
              <a
                href="https://www.youtube.com/watch?v=j_BSyCFzxuM"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden border border-border relative group"
              >
                <img
                  src="https://img.youtube.com/vi/j_BSyCFzxuM/maxresdefault.jpg"
                  alt={t("case.nobel.videoAlt")}
                  className="w-full h-auto object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                  <span className="text-white font-mono text-[11px] uppercase tracking-[0.18em] text-center px-4">
                    {t("case.nobel.watchVideo")}
                  </span>
                </div>
              </a>
            </ScrollReveal>
          </div>

          <OtherCases currentSlug="nobel-2025" />
        </div>
      </article>
    </Layout>
  );
};

export default CaseNobel;
