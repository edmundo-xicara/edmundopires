import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function Credibility() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">

        <ScrollReveal>
          <div className="mb-14">
            <h2 className="font-heading text-[clamp(32px,4.5vw,56px)] font-medium">
              {t("credibility.title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="border-t border-border">

          {/* Stat 1 */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-start gap-6 py-10 border-b border-border">
              <div className="md:w-48 flex-shrink-0">
                <div className="stat-number">{t("credibility.videos.number")}</div>
                <div className="stat-label">{t("credibility.videos.label")}</div>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {t("credibility.videos.desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 2 */}
          <ScrollReveal delay={80}>
            <div className="flex flex-col md:flex-row md:items-start gap-6 py-10 border-b border-border">
              <div className="md:w-48 flex-shrink-0">
                <div className="stat-number">1M → 2.6M</div>
                <div className="stat-label">{t("credibility.growth.label")}</div>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {t("credibility.growth.desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 3 — Brands */}
          <ScrollReveal delay={160}>
            <div className="flex flex-col md:flex-row md:items-start gap-6 py-10 border-b border-border">
              <div className="md:w-48 flex-shrink-0">
                <div className="stat-number">{t("credibility.brands.number")}</div>
                <div className="stat-label">{t("credibility.brands.label")}</div>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {t("credibility.brands.prefix")}{" "}
                <Link to="/cases/shogun-disney" className="text-accent hover:underline underline-offset-2">Disney+</Link>,{" "}
                <Link to="/cases/olimpiadas-2024" className="text-accent hover:underline underline-offset-2">Globo Esporte</Link>,{" "}
                <a href="https://youtu.be/XDOWW7CQmhg?t=243" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">Insider</a>,{" "}
                <a href="https://youtu.be/j_BSyCFzxuM?t=119" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">Opera</a>,{" "}
                <a href="https://youtu.be/ttkt5pdArZY?t=145" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">Manual</a>,{" "}
                <a href="https://youtu.be/lcpzeK1-Ulg?t=76" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">Uninassau</a>,{" "}
                <a href="https://youtu.be/BpuNlQ_x2AA?t=99" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">CyberGhost</a>,{" "}
                <a href="https://youtu.be/97ozWnsSq0A?t=109" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">Promova</a>,{" "}
                {t("credibility.brands.suffix")}
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
