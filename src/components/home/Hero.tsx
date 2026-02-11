import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import fotoPerfil from "@/assets/foto-perfil.jpg";

export function Hero() {
  return (
    <section className="section-padding !pb-0 flex items-center">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Foto - 1/3 no desktop */}
          <ScrollReveal direction="none" duration={300} className="w-full lg:w-1/3 flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-muted border-4 border-accent/20 overflow-hidden transition-transform duration-250 hover:scale-105">
              <img
                src={fotoPerfil}
                alt="Edmundo Pires"
                className="w-full h-full object-cover object-center"
                style={{ minWidth: '100%', minHeight: '100%' }}
              />
            </div>
          </ScrollReveal>

          {/* Conteúdo - 2/3 no desktop */}
          <div className="lg:w-2/3">
            <ScrollReveal delay={0}>
              <div className="accent-line mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Youtube Manager
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Gestão, pesquisa e produção para canais e criadores de conteúdo de grande escala.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cases" className="btn-primary">
                  Ver cases
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link to="/contato" className="btn-secondary">
                  <MessageCircle className="mr-2" size={18} />
                  Falar comigo
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
