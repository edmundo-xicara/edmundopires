import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const competencias = [
  "Pesquisa histórica e checagem rigorosa",
  "Produção e storytelling documental",
  "Arquitetura de roteiro e formatos de série",
  "Gestão de pipeline e revisão",
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
                  Sou produtor, pesquisador e gestor de conteúdo no TinocandoTV.
                </p>
                <p>
                  Meu trabalho é garantir que temas historicamente complexos sejam transformados em 
                  narrativas claras, envolventes e verificáveis, sem sacrificar profundidade.
                </p>
                <p>
                  Atuo desde a pesquisa bruta até a entrega do produto final, passando por roteiro, 
                  imagens, revisão e organização de processo. Tenho atenção especial à segurança 
                  editorial, coerência interna e escalabilidade de produção.
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
            Acredito que conteúdo histórico de qualidade não precisa ser inacessível. 
            Meu trabalho é construir pontes entre o rigor acadêmico e a linguagem audiovisual, 
            criando produtos que informam, engajam e respeitam a inteligência do público.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
