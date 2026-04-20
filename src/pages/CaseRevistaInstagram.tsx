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
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-250 mb-8"
          >
            <ArrowLeft size={18} />
            {t("casesPage.back")}
          </Link>

          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl mb-4">{t("case.revista.title")}</h1>
              <p className="text-xl text-muted-foreground mb-12">
                {t("case.revista.subtitle")}
              </p>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none">
              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("case.section.context")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  {t("case.revista.contextText")}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("case.revista.roleTitle")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  {t("case.revista.roleText1")}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  {t("case.revista.roleText2")}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("case.section.process")}</h2>
                <ul className="text-muted-foreground leading-relaxed mb-8 list-disc list-inside space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>{t(`case.revista.process${i}`)}</li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("case.section.result")}</h2>
              </ScrollReveal>
            </div>

            {/* Grid de imagens com hover */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {revistas.map((revista, index) => (
                <ScrollReveal key={index} delay={index * 60} direction="none">
                  <a
                    href="https://www.instagram.com/tinocandotv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden rounded-lg block"
                  >
                    <img
                      src={revista.src}
                      alt={revista.alt}
                      className="w-full h-auto object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                      <span className="text-white text-lg md:text-xl font-semibold text-center px-4">
                        {t("case.revista.checkInstagram")}
                      </span>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <OtherCases currentSlug="revista-instagram" />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseRevistaInstagram;
