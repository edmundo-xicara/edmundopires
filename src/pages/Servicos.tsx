import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Search, FileCheck, Film, Layers, Building, Settings } from "lucide-react";

const servicos = [
  {
    icon: Layers,
    title: "Gestão de Projetos Editoriais",
    description:
      "Organização e acompanhamento de projetos de conteúdo complexo, incluindo definição de prioridades, cronogramas, dependências e fluxo entre pesquisa, roteiro e edição. Foco em previsibilidade, consistência e eficiência de produção.",
  },
  {
    icon: Search,
    title: "Pesquisa",
    description:
      "Realizo pesquisa aplicada à produção audiovisual, com foco em recorte temático, cronologia, checagem e adaptação do conteúdo para formatos claros e consistentes. Tenho experiência tanto na execução da pesquisa quanto na coordenação de equipes de pesquisadores.",
  },
  {
    icon: FileCheck,
    title: "Revisão Editorial e Fact-checking",
    description:
      "Análise e revisão de pesquisas e roteiros com foco em precisão factual, coerência interna, clareza conceitual e prevenção de erros editoriais ou simplificações indevidas.",
  },
  {
    icon: Settings,
    title: "Estruturação de Processos de Produção",
    description:
      "Criação e organização de pipelines, checklists e métodos de trabalho para escalar a produção de conteúdo sem perda de qualidade.",
  },
  {
    icon: Film,
    title: "Pesquisa e Curadoria de Imagens",
    description:
      "Pesquisa, seleção e organização de imagens que sustentam a narrativa visual dos vídeos, garantindo coerência, qualidade estética e alinhamento com o conteúdo pesquisado.",
  },
  {
    icon: Building,
    title: "Consultoria Editorial",
    description:
      "Apoio estratégico a canais, produtoras e marcas que trabalham com temas históricos, científicos ou culturais, ajudando a estruturar pesquisa, produção e revisão de conteúdo complexo.",
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
              Estou aberto a projetos de consultoria, freelas e parcerias em pesquisa, 
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
