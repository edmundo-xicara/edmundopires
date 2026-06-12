import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function Services() {
  const { t, language } = useLanguage();

  const titleWords = t("services.title").split(" ");
  const titleLastWord = titleWords.pop();

  const p1Highlight = language === "en" ? "Content Coordinator" : "Coordenador de Conteúdo";
  const [p1Before, p1After] = t("services.p1").split(p1Highlight);

  const p7Highlight = language === "en" ? "\"jack-of-all-trades\" of a YouTube channel" : "\"faz-tudo\" de um canal no Youtube";
  const [p7Before, p7After] = t("services.p7").split(p7Highlight);

  return (
    <section className="section-padding">
      <div className="container-wide">

        <ScrollReveal>
          <div className="mb-14">
            <h2 className="font-heading text-[clamp(32px,4.5vw,56px)] font-medium mb-6">
              {titleWords.join(" ")} <span className="text-accent italic">{titleLastWord}</span>
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-5">
              <p>
                {p1Before}<strong className="font-semibold text-foreground">{p1Highlight}</strong>{p1After}
              </p>
              <p>{t("services.p2")}</p>
              <p>{t("services.p3")}</p>
              <p>{t("services.p4")}</p>
              <p>{t("services.p5")}</p>
              <p>{t("services.p6")}</p>
              <p>
                {p7Before}<strong className="font-semibold text-foreground">{p7Highlight}</strong>{p7After}
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
