import { Layout } from "@/components/layout/Layout";
import { ExternalLink } from "lucide-react";

const videos = [
  {
    id: "B5nJX-rmIgo",
    title: "Vídeo 1",
  },
  {
    id: "3-GICRxg0T8",
    title: "Vídeo 2",
  },
  {
    id: "e12D7VU1G2c",
    title: "Vídeo 3",
  },
  {
    id: "Jn99lnP5yik",
    title: "Vídeo 4",
  },
  {
    id: "cxLm8ZmgKzg",
    title: "Vídeo 5",
  },
];

const Midia = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="accent-line mb-6" />
            <h1 className="text-4xl md:text-5xl mb-6">Mídia</h1>
            <p className="text-xl text-muted-foreground">
              Vídeos selecionados que representam o trabalho desenvolvido em pesquisa, produção e 
              gestão editorial no TinocandoTV.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="card-editorial p-0 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <a
                    href={`https://youtu.be/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                  >
                    Assistir no YouTube
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canal */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl mb-6">TinocandoTV</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Conheça mais do trabalho desenvolvido no canal, com documentários históricos de 
            longa duração e conteúdo educacional de alta qualidade.
          </p>
          <a
            href="https://www.youtube.com/@TinocandoTV"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Visitar canal
            <ExternalLink className="ml-2" size={18} />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Midia;
