import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Credibility } from "@/components/home/Credibility";
import { Services } from "@/components/home/Services";
import { FeaturedCases } from "@/components/home/FeaturedCases";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <Hero />
      <Services />
      <Credibility />
      <FeaturedCases />

      {/* CTA Final */}
      <section className="section-padding bg-primary text-primary-foreground">
        <ScrollReveal>
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              {t("cta.home.title")}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              {t("cta.home.desc")}
            </p>
            <Link to="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium tracking-wide transition-all duration-250 hover:bg-accent/90 hover:-translate-y-0.5 active:translate-y-0 active:transition-[100ms]">
              {t("cta.home.button")}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Index;
