import { Layout } from "@/components/layout/Layout";
import { ExternalLink } from "lucide-react";

const videos = [
  {
    id: "Jn99lnP5yik",
    title: "HITLER: ASCENSÃO e QUEDA",
    description: "Além do enorme desafio da pesquisa histórica em si, esse vídeo foi provavelmente meu maior desafio em questão de mapas, já que ao longo da história narrada no vídeo, houve diversas mudanças drásticas nos territórios conquistados pelos nazistas, exigindo um trabalho de pesquisa minucioso para representarmos visualmente para o público como, de fato, Adolf Hitler perdeu a guerra.",
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

const Portfolio = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="accent-line mb-6" />
            <h1 className="text-4xl md:text-5xl mb-6">Pesquisas</h1>
            <p className="text-xl text-muted-foreground">
              Vídeos que melhor representam meu trabalho em pesquisa dentro do TinocandoTV.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="card-editorial p-0 overflow-hidden animate-fade-in-up flex flex-col md:flex-row"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:w-1/3 aspect-video md:aspect-auto">
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
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
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
    </Layout>
  );
};

export default Portfolio;
