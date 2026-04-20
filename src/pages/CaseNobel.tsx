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
              <h1 className="text-4xl md:text-5xl mb-4">{t("case.nobel.title")}</h1>
              <p className="text-xl text-muted-foreground mb-12">
                {t("case.nobel.subtitle")}
              </p>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none">
              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("case.section.context")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  {t("case.nobel.contextText1")}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  {t("case.nobel.contextText2")}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("case.nobel.roleTitle")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  {t("case.nobel.roleText1Pre")}{" "}
                  <a
                    href="https://www.youtube.com/@cortesTTVoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {t("case.nobel.roleText1Link")}
                  </a>
                  {t("case.nobel.roleText1Post")}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  {t("case.nobel.roleText2")}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("case.section.process")}</h2>
                <ul className="text-muted-foreground leading-relaxed mb-8 list-disc list-inside space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i}>{t(`case.nobel.process${i}`)}</li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("case.section.result")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  {t("case.nobel.resultText")}
                </p>
              </ScrollReveal>

              {/* Thumbnail do vídeo */}
              <ScrollReveal>
                <a
                  href="https://www.youtube.com/watch?v=j_BSyCFzxuM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg relative group"
                >
                  <img
                    src="https://img.youtube.com/vi/j_BSyCFzxuM/maxresdefault.jpg"
                    alt={t("case.nobel.videoAlt")}
                    className="w-full h-auto object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                    <span className="text-white text-xl md:text-2xl font-semibold text-center px-4">
                      {t("case.nobel.watchVideo")}
                    </span>
                  </div>
                </a>
              </ScrollReveal>

              <OtherCases currentSlug="nobel-2025" />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseNobel;
