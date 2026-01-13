import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
export function Hero() {
  return <section className="section-padding min-h-[90vh] flex items-center">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Foto */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-muted border-4 border-accent/20 flex items-center justify-center overflow-hidden">
              {/* Substitua pelo seu componente de imagem */}
              <span className="text-muted-foreground text-sm text-center px-4">Sua foto aqui</span>
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="max-w-3xl">
            <div className="accent-line mb-8 animate-fade-in" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-up" style={{
            animationDelay: "0.1s"
          }}>
            Gestão, pesquisa e produção para canais e criadores de conteúdo de grande escala.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl animate-fade-in-up" style={{
            animationDelay: "0.2s"
          }}>Sou chefe de pesquisa, produtor e um dos gestores do TinocandoTV. Organizo todos os projetos e calendário do canal, lidero a equipe de pesquisa, reviso todo o material antes da roteirização e realizo a pesquisa de imagens de todos os vídeos, garantindo consistência, rigor histórico e eficiência de produção.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{
            animationDelay: "0.3s"
          }}>
            <Link to="/cases" className="btn-primary">
              Ver cases
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/contato" className="btn-secondary">
              <MessageCircle className="mr-2" size={18} />
              Falar comigo
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 animate-fade-in-up" style={{
            animationDelay: "0.4s"
          }}>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">Pesquisa histórica aplicada a produtos audiovisuais</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">Gestão de projetos e calendário editorial para produção contínua de vídeos</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground"><strong>Pesquisa e curadoria de imagens</strong>, garantindo coerência visual com o conteúdo explicado</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}