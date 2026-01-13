import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const competencias = [
  "Pesquisa histórica e checagem de conteúdo",
  "Chefia de pesquisa e revisão editorial",
  "Gestão de projetos e pipeline de produção",
  "Planejamento editorial e organização de formatos",
  "Pesquisa e curadoria de imagens",
];

const Sobre = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl mb-8">Sobre mim</h1>
              
              <div className="editorial-prose">
                <p>
                  Sou produtor, chefe de pesquisa e gestor de conteúdo no TinocandoTV.
                </p>
                <p>
                  Meu trabalho é organizar projetos editoriais complexos, coordenar equipes de pesquisa 
                  e garantir rigor histórico antes da roteirização, assegurando consistência, clareza e 
                  segurança editorial em larga escala.
                </p>
                <p>
                  Atuo da definição de prioridades e cronogramas à revisão final do material de pesquisa 
                  e à curadoria de imagens, estruturando processos que tornam a produção mais previsível, 
                  eficiente e sustentável.
                </p>
              </div>

              <div className="mt-12">
                <Link to="/contato" className="btn-primary">
                  Entrar em contato
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-card border border-border p-8 lg:p-12">
              <h2 className="text-2xl font-semibold mb-8">Competências</h2>
              <ul className="space-y-4">
                {competencias.map((competencia, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-lg">{competencia}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Abordagem */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl mb-6">Minha abordagem</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Acredito que conteúdo histórico de qualidade depende de organização, rigor e processo. 
            Meu trabalho é estruturar pesquisa, produção e revisão para que temas complexos sejam 
            tratados com precisão, clareza e consistência, mesmo em grande escala.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
