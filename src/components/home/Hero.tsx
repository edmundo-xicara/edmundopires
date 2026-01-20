import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import fotoPerfil from "@/assets/foto-perfil.jpg";
export function Hero() {
  return <section className="section-padding min-h-[90vh] flex items-center">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Foto */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-muted border-4 border-accent/20 flex items-center justify-center overflow-hidden">
              <img 
                src={fotoPerfil} 
                alt="Edmundo Pires" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="max-w-3xl">
            <div className="accent-line mb-8 animate-fade-in" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-up" style={{
            animationDelay: "0.1s"
          }}>
            Youtube Manager
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl animate-fade-in-up" style={{
            animationDelay: "0.2s"
          }}>Gestão, pesquisa e produção para canais e criadores de conteúdo de grande escala.</p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{
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
          </div>
        </div>
      </div>
    </section>;
}