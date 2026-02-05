import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <ScrollReveal>
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Edmundo Pires</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Gestão de projetos, pesquisa e produção audiovisual em larga escala.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div>
              <h4 className="font-medium uppercase tracking-widest text-sm mb-4 text-primary-foreground/60">
                Navegação
              </h4>
              <div className="flex flex-col gap-3">
                <Link to="/cases" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-250 hover:translate-x-1 inline-block transform">
                  Cases
                </Link>
                <Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-250 hover:translate-x-1 inline-block transform">
                  Sobre
                </Link>
                <Link to="/servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-250 hover:translate-x-1 inline-block transform">
                  Serviços
                </Link>
                <Link to="/contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-250 hover:translate-x-1 inline-block transform">
                  Contato
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div>
              <h4 className="font-medium uppercase tracking-widest text-sm mb-4 text-primary-foreground/60">
                Contato
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:edmundopires@outlook.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-250 hover:translate-x-1"
                >
                  <Mail size={18} />
                  edmundopires@outlook.com
                </a>
                <a
                  href="https://w.app/4bpne2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-250 hover:translate-x-1"
                >
                  <Phone size={18} />
                  (31) 99333-1644
                </a>
                <a
                  href="https://www.linkedin.com/in/edmundo-pires-12ab89237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-250 hover:translate-x-1"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} Edmundo Pires. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
