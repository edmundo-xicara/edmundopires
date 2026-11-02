import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OtherCases } from "@/components/OtherCases";
import { useLanguage } from "@/contexts/LanguageContext";
import revista1 from "@/assets/revista-1.png";
import revista2 from "@/assets/revista-2.png";
import revista3 from "@/assets/revista-3.png";
import revista4 from "@/assets/revista-4.png";
import revista5 from "@/assets/revista-5.png";
import revista6 from "@/assets/revista-6.png";

const revistas = [
  { src: revista1, alt: "Revista 1" },
  { src: revista2, alt: "Revista 2" },
  { src: revista3, alt: "Revista 3" },
  { src: revista4, alt: "Revista 4" },
  { src: revista5, alt: "Revista 5" },
  { src: revista6, alt: "Revista 6" },
];

const CaseRevistaInstagram = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <article className="section-padding">
        <div className="container-wide">

          <Link to="/cases" className="btn-accent mb-10 inline-flex">
            <ArrowLeft size={13} className="mr-2" />
            {t("casesPage.back")}
          </Link>

          <div className="max-w-4xl">
            <ScrollReveal>
              <header className="mb-12">
                <div className="text-sm font-semibold text-accent mb-4">
                  TinocandoTV<span aria-hidden className="mx-2.5 inline-block w-2 h-2 rounded-full bg-signal-yellow align-middle" />{t("case.revista.category")}
                </div>
                <h1 className="font-heading text-[clamp(36px,5vw,64px)] mb-5">
                  {t("case.revista.title")}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("case.revista.subtitle")}
                </p>
              </header>
            </ScrollReveal>

            <div className="accent-line mb-12" />

            <div className="space-y-14">
              <ScrollReveal>
                <section>
                  <h2 className="font-heading text-2xl mb-5">{t("case.section.context")}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{t("case.revista.contextText")}</p>
                </section>
              </ScrollReveal>

              <ScrollReveal>
                <section>
                  <h2 className="font-heading text-2xl mb-5">{t("case.revista.roleTitle")}</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-lg">{t("case.revista.roleText1")}</p>
                    <p className="text-muted-foreground leading-relaxed text-lg">{t("case.revista.roleText2")}</p>
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
                          {t(`case.revista.process${i}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>

              <ScrollReveal>
                <section>
                  <h2 className="font-heading text-2xl mb-8">{t("case.section.result")}</h2>

                  {/* Grid de revistas */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {revistas.map((revista, index) => (
                      <ScrollReveal key={index} delay={index * 60} direction="none">
                        <a
                          href="https://www.instagram.com/tinocandotv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group overflow-hidden border border-border block"
                        >
                          <img
                            src={revista.src}
                            alt={revista.alt}
                            className="w-full h-auto object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                            <span className="text-white text-sm font-semibold text-center px-4">
                              {t("case.revista.checkInstagram")}
                            </span>
                          </div>
                        </a>
                      </ScrollReveal>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            </div>

            <OtherCases currentSlug="revista-instagram" />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseRevistaInstagram;
