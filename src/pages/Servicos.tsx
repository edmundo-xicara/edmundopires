import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Search, FileCheck, Film, Layers, Building } from "lucide-react";

const servicos = [
  {
    icon: Search,
    title: "Consultoria em pesquisa histórica",
    description:
      "Apoio especializado em investigação histórica para projetos audiovisuais, editoriais ou institucionais. Da definição do recorte temático à entrega de dossiês completos.",
  },
  {
    icon: FileCheck,
    title: "Revisão editorial e fact-checking",
    description:
      "Verificação rigorosa de informações históricas, checagem de fontes e revisão de conteúdo para garantir precisão e credibilidade.",
  },
  {
    icon: Film,
    title: "Produção e estruturação de documentários",
    description:
      "Desenvolvimento de estrutura narrativa, arquitetura de roteiro e organização de produção para documentários e séries de longa duração.",
  },
  {
    icon: Layers,
    title: "Desenvolvimento de formatos editoriais",
    description:
      "Criação e padronização de formatos de conteúdo escaláveis, com foco em consistência editorial e eficiência de produção.",
  },
  {
    icon: Building,
    title: "Apoio a marcas e plataformas",
    description:
      "Consultoria para marcas e plataformas que desejam produzir conteúdo histórico-cultural com rigor e relevância.",
  },
];

const Servicos = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="accent-line mb-6" />
            <h1 className="text-4xl md:text-5xl mb-6">Serviços</h1>
            <p className="text-xl text-muted-foreground">
              Estou aberto a projetos de consultoria, freelas e parcerias em pesquisa histórica, 
              produção editorial e gestão de conteúdo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="card-editorial animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded bg-accent/10 text-accent mb-6">
                  <servico.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{servico.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{servico.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Tem um projeto em mente?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Se você trabalha com conteúdo complexo e precisa de rigor histórico, clareza narrativa 
            e produção sólida — vamos conversar.
          </p>
          <Link to="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium tracking-wide transition-all duration-300 hover:bg-accent/90">
            Entrar em contato
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
