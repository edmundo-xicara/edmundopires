import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Search, FileText, Film, Building, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const servicos = [
  {
    icon: Building,
    title: "Consultoria",
    description:
      "Consultoria especializada para canais no Youtube. Cada canal do Youtube tem suas especificidades, seu público-alvo e a própria identidade do criador intrinsicamente ligada a identidade do canal. Como alguém com ampla experiência na gestão de um canal no Youtube de grande porte, posso te ajudar sobre estratégias de crescimento específicas para você e conhecimentos gerais sobre como pensar como um gestor do seu próprio canal.",
  },
  {
    icon: Search,
    title: "Pesquisa",
    description:
      "Realizo pesquisa aplicada à produção audiovisual, com foco em recorte temático, cronologia, checagem e adaptação do conteúdo para formatos claros e consistentes. Tenho experiência tanto na execução da pesquisa quanto na coordenação de equipes de pesquisadores.",
  },
  {
    icon: FileText,
    title: "Roteiro",
    description:
      "Além da pesquisa, tenho experiência na escrita de roteiro também aplicado à produção audiovisual, selecionando os pontos-chave de qualquer tema para conectá-los numa narrativa coerente e imersiva para o público, já pensando em como ela pode conversar com a edição.",
  },
  {
    icon: Briefcase,
    title: "Mídia Kit",
    description:
      "Trabalho também com a produção de Mídia Kits, que é basicamente um currículo para influenciadores e imprescindível para qualquer criador de conteúdo que pensa em fazer parcerias com marcas, as famosas \"publis\".",
  },
  {
    icon: Film,
    title: "Pesquisa e Curadoria de Imagens",
    description:
      "Pesquisa e curadoria de imagens que sustentam a narrativa visual dos vídeos, seja com pinturas, filmagens, notícias da época ou até representações visuais abstratas. Em casos de vídeos históricos, realizo uma pesquisa extensa sobre os mapas e territórios de cada época abordada no vídeo para evitar imprecisões.",
  },
];

const Servicos = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl mb-6">Serviços</h1>
              <p className="text-xl text-muted-foreground">
                Estou aberto a serviços de consultoria, freelas, pesquisa/roteiro sob demanda e também desenvolvimento de Mídia Kits.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8">
            {servicos.map((servico, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <div className="card-editorial flex flex-col md:flex-row md:items-start gap-6">
                  <div className="icon-box inline-flex items-center justify-center w-14 h-14 rounded bg-accent/10 text-accent flex-shrink-0">
                    <servico.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{servico.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">{servico.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <ScrollReveal>
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              Tem um projeto em mente?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Se você trabalha com conteúdo complexo e precisa de rigor histórico, clareza narrativa 
              e produção sólida — vamos conversar.
            </p>
            <Link to="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium tracking-wide transition-all duration-250 hover:bg-accent/90 hover:-translate-y-0.5 active:translate-y-0 active:transition-[100ms]">
              Entrar em contato
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Servicos;
