import { Layout } from "@/components/layout/Layout";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const videos = [
  {
    id: "Jn99lnP5yik",
    title: "QUEDA de HITLER",
    description: "Além do enorme desafio da pesquisa histórica em si, esse vídeo foi provavelmente meu maior desafio em questão de mapas, graças as diversas mudanças de territórios, exigindo um trabalho minucioso de pesquisa para representarmos visualmente para o público como, de fato, Adolf Hitler perdeu a guerra.",
    researchLink: "https://docs.google.com/document/d/1iUIrrrKGCvzM6SaYR4k8Uvafvh8Nmj1wFzE8AyzHwHY/edit?tab=t.0",
  },
  {
    id: "V5VXxyn6G24",
    title: "CRISE de 1929",
    description: "Nesse vídeo, nós cobrimos a história inteira, desde o fim da Primeira Guerra Mundial e a ascensão dos EUA até a quebra de uma das maiores bolhas econômicas da história e a eventual ascensão dos regimes totalitários na Europa durante a Grande Depressão.",
    researchLink: "https://docs.google.com/document/d/1D-lCTELT2H6kOpu3Ukrlhq0Fgp5nZnlbVUwtmUkAplQ/edit?usp=sharing",
  },
  {
    id: "PCJ02veFgfg",
    title: "MURO de BERLIM",
    description: "Esse é mais um exemplo de uma pesquisa extremamente completa que cobre toda a história da construção e queda do Muro de Berlim, com imagens de reportagens e filmagens da época.",
    researchLink: "https://docs.google.com/document/d/12b0N1zQtPN6UbNCYIeD2cAPAwPYGEQbd0BE7OwMeOUk/edit?usp=sharing",
  },
  {
    id: "cxLm8ZmgKzg",
    title: "DEUS de SPINOZA",
    description: "Nesse caso, além do desafio da pesquisa histórica, houve também o desafio da pesquisa filosófica, na qual foi necessário interpretar a filosofia de Spinoza para explicá-la de maneira simples e didática para um público leigo no assunto.",
    researchLink: "https://docs.google.com/document/d/1oNJBFaXtNW-0YKiFDpopWtmRBeW_CzAxg05S9XIzFnY/edit?tab=t.0",
  },
];

const publis = [
  {
    title: "Disney+",
    description: "Trabalhei na seleção das imagens da série divulgada, fornecidas pela equipe da Disney+, e também colaborei na escrita do roteiro publicitário de acordo com o briefing também fornecido pela marca.",
    caseLink: "/cases/shogun-disney",
    caseLinkText: "Veja mais no case",
  },
  {
    title: "Globo Esporte",
    description: "Acompanhei o Tinôco numa série de gravações no Rio de Janeiro para divulgação da Copa do Mundo 2022 pela equipe do Globo Esporte.",
    caseLink: "/cases/copa-do-mundo-2022",
    caseLinkText: "Veja mais no case",
  },
  {
    title: "Opera",
    description: "Escrevi o roteiro publicitário de acordo com o briefing fornecido pelo Opera e produzi todas as gravações apresentadas no trecho da publi no vídeo.",
    videoLink: "https://youtu.be/j_BSyCFzxuM?t=119",
    videoLinkText: "Confira o vídeo",
  },
];

const outrosExemplos = [
  { title: "Insider", videoLink: "https://youtu.be/XDOWW7CQmhg?t=243", videoId: "XDOWW7CQmhg" },
  { title: "Manual", videoLink: "https://youtu.be/ttkt5pdArZY?t=145", videoId: "ttkt5pdArZY" },
  { title: "Uninassau", videoLink: "https://youtu.be/lcpzeK1-Ulg?t=76", videoId: "lcpzeK1-Ulg" },
  { title: "CyberGhost", videoLink: "https://youtu.be/BpuNlQ_x2AA?t=99", videoId: "BpuNlQ_x2AA" },
  { title: "Promova", videoLink: "https://youtu.be/97ozWnsSq0A?t=109", videoId: "97ozWnsSq0A" },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Pesquisas Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="accent-line mb-6" />
            <h1 className="text-4xl md:text-5xl mb-6">Pesquisas</h1>
            <p className="text-xl text-muted-foreground">
              Vídeos que melhor representam meu trabalho em pesquisa dentro do TinocandoTV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="card-editorial p-0 overflow-hidden animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video">
                  <a
                    href={`https://youtu.be/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                    />
                  </a>
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">{video.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                    {video.description}
                  </p>
                  <a
                    href={video.researchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent inline-flex w-fit"
                  >
                    Link para pesquisa
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publis Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl mb-6">Publis</h2>
            <p className="text-xl text-muted-foreground">
              Principais marcas com quem já trabalhei dentro do TinocandoTV.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {publis.map((publi, index) => (
              <div
                key={index}
                className="card-editorial p-0 overflow-hidden animate-fade-in-up flex flex-col md:flex-row"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:w-1/3 aspect-video md:aspect-auto bg-muted flex items-center justify-center">
                  <span className="text-4xl font-bold text-muted-foreground/50">{publi.title}</span>
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">{publi.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                    {publi.description}
                  </p>
                  {publi.caseLink && (
                    <Link to={publi.caseLink} className="btn-accent inline-flex w-fit">
                      {publi.caseLinkText}
                      <ExternalLink size={16} className="ml-2" />
                    </Link>
                  )}
                  {publi.videoLink && (
                    <a
                      href={publi.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent inline-flex w-fit"
                    >
                      {publi.videoLinkText}
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Outros Exemplos */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8">Outros exemplos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {outrosExemplos.map((exemplo, index) => (
                <a
                  key={index}
                  href={exemplo.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-editorial p-0 overflow-hidden animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square">
                    <img
                      src={`https://img.youtube.com/vi/${exemplo.videoId}/maxresdefault.jpg`}
                      alt={exemplo.title}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-semibold group-hover:text-accent transition-colors">{exemplo.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mídia Kits Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl mb-6">Mídia Kits</h2>
            <p className="text-xl text-muted-foreground">
              Alguns dos Mídia Kits que já desenvolvi tanto para canais grandes quanto para influenciadores menores.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
