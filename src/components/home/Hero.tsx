import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="section-padding min-h-[90vh] flex items-center">
      <div className="container-wide">
        <div className="max-w-4xl">
          <div className="accent-line mb-8 animate-fade-in" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Transformo pesquisa histórica em narrativas audiovisuais com escala, rigor e impacto cultural.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Sou produtor, chefe de pesquisa e um dos gerentes do TinocandoTV. Atuo da investigação histórica à entrega do produto final, organizando processos de produção, revisão e gestão editorial para elevar qualidade, consistência e performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/cases" className="btn-primary">
              Ver cases
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/contato" className="btn-secondary">
              <MessageCircle className="mr-2" size={18} />
              Falar comigo
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">Pesquisa histórica aplicada a produtos audiovisuais</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">Produção e arquitetura de roteiros documentais</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">Gestão de pipeline, revisão e padronização editorial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
