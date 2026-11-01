import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HandMark } from "@/components/HandMark";
import { IsoScene } from "./IsoScene";

export function Hero() {
  const { t, language } = useLanguage();
  const labels = useMemo(
    () => ({
      script: t("home.iso.script"),
      research: t("home.iso.research"),
      automation: t("home.iso.automation"),
      vibe: t("home.iso.vibe"),
      project: t("home.iso.project"),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language],
  );

  return (
    <section className="relative overflow-hidden px-5 md:px-12 lg:px-20 pt-12 md:pt-20 pb-12 md:pb-20">
      <div className="container-wide grid lg:grid-cols-[1.05fr_.95fr] gap-8 items-center">
        <div className="min-w-0">
          <h1 className="text-[clamp(40px,6vw,86px)] font-extrabold" style={{ fontVariationSettings: '"wdth" 88' }}>
            {t("home.hero.titleA")} <HandMark tail=".">{t("home.hero.titleMark")}</HandMark>
          </h1>
          <p className="mt-6 max-w-[34em] text-lg md:text-[19px] leading-relaxed text-muted-foreground">{t("home.hero.sub")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#mundos" className="btn-primary">
              {t("home.hero.ctaWork")}
            </a>
            <Link to="/contato" className="btn-ghost">
              {t("home.hero.ctaTalk")}
            </Link>
          </div>
        </div>
        <div className="min-w-0 w-full max-w-[540px] mx-auto lg:max-w-none">
          <IsoScene
            labels={labels}
            legend={{ av: t("home.iso.legendAv"), code: t("home.iso.legendCode") }}
            ariaLabel={t("home.iso.aria")}
          />
        </div>
      </div>
    </section>
  );
}
