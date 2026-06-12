import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Credibility } from "@/components/home/Credibility";
import { Services } from "@/components/home/Services";
import { FeaturedCases } from "@/components/home/FeaturedCases";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const brands = [
  "Disney+",
  "Globo Esporte",
  "Insider",
  "Opera",
  "Manual",
  "Uninassau",
  "CyberGhost",
  "Promova",
  "Alura",
];

const Index = () => {
  const { t, language } = useLanguage();

  const ctaHighlight = language === "en" ? "build" : "construir";
  const [ctaBefore, ctaAfter] = t("cta.home.title").split(ctaHighlight);

  return (
    <Layout>
      <Hero />

      {/* Brand marquee */}
      <div className="border-y border-border py-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center mb-7">
          {language === "en" ? "Brands I've worked with" : "Marcas com quem já trabalhei"}
        </p>
        <div className="overflow-hidden">
          <div className="animate-marquee items-center">
            {[...brands, ...brands].map((brand, i) => (
              <React.Fragment key={i}>
                <span className="font-heading italic text-4xl text-accent px-5">
                  {brand}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground flex-shrink-0">
                  ·
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <Services />
      <Credibility />
      <FeaturedCases />

      {/* CTA Final */}
      <section className="section-padding bg-primary text-primary-foreground">
        <ScrollReveal>
          <div className="container-narrow text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-medium mb-6 text-primary-foreground">
              {ctaBefore}<span className="text-accent italic">{ctaHighlight}</span>{ctaAfter}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("cta.home.desc")}
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-primary-foreground/40 text-primary-foreground font-mono text-[11px] tracking-[0.18em] uppercase transition-all duration-250 hover:bg-primary-foreground hover:text-primary"
            >
              {t("cta.home.button")}
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Index;
