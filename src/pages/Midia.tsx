import { Layout } from "@/components/layout/Layout";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import midiaKitEstranhaHistoria from "@/assets/midia-kit-estranha-historia.png";
import midiaKitCetaligado from "@/assets/midia-kit-cetaligado.png";
import midiaKitEntrosamento from "@/assets/midia-kit-entrosamento.png";

const outrosExemplos = [
  { title: "Insider", videoLink: "https://youtu.be/XDOWW7CQmhg?t=243", videoId: "XDOWW7CQmhg" },
  { title: "Manual", videoLink: "https://youtu.be/ttkt5pdArZY?t=145", videoId: "ttkt5pdArZY" },
  { title: "Uninassau", videoLink: "https://youtu.be/lcpzeK1-Ulg?t=76", videoId: "lcpzeK1-Ulg" },
  { title: "CyberGhost", videoLink: "https://youtu.be/BpuNlQ_x2AA?t=99", videoId: "BpuNlQ_x2AA" },
  { title: "Promova", videoLink: "https://youtu.be/97ozWnsSq0A?t=109", videoId: "97ozWnsSq0A" },
  { title: "Alura", videoLink: "https://www.youtube.com/watch?v=MBwGOxEoJgQ", videoId: "MBwGOxEoJgQ" },
];

const Portfolio = () => {
  const { t } = useLanguage();

  const videos = [
    { id: "Jn99lnP5yik", title: t("portfolio.video1.title"), description: t("portfolio.video1.desc"), researchLink: language === "en" ? "https://docs.google.com/document/d/1ycmrxjR2g7lB3rcimOyv2z_Y-iO40TfvC2oTZ52Fs5s/edit?usp=drive_link" : "https://docs.google.com/document/d/1ycmrxjR2g7lB3rcimOyv2z_Y-iO40TfvC2oTZ52Fs5s/edit?usp=drive_link" },
    { id: "V5VXxyn6G24", title: t("portfolio.video2.title"), description: t("portfolio.video2.desc"), researchLink: "https://docs.google.com/document/d/1HBnwm7k7s1ynkiQayaugg2orrNU9zxRe7rZ7YkWt1k0/edit?usp=drive_link" },
    { id: "PCJ02veFgfg", title: t("portfolio.video3.title"), description: t("portfolio.video3.desc"), researchLink: "https://docs.google.com/document/d/1hzXc44kfSQ6KZsbnRyvYY1p8lqTqyRKtLEIeIrdbRSs/edit?usp=drive_link" },
    { id: "cxLm8ZmgKzg", title: t("portfolio.video4.title"), description: t("portfolio.video4.desc"), researchLink: "https://docs.google.com/document/d/1vYyymN2RqjZ_wERrFZ1d4lQ0ONUx4dXB0wGftF0F-T8/edit?tab=t.0" },
  ];

  const scripts = [
    {
      id: "PuJ2AKtlONM",
      title: t("portfolio.script1.title"),
      videoLink: "https://youtube.com/shorts/PuJ2AKtlONM",
      scriptLink: language === "en"
        ? "https://docs.google.com/document/d/1NI0ZGm6nZHzpm6qwTc74yhrXwT4tsaulM4fJnMbAin4/edit?usp=drive_link"
        : "https://docs.google.com/document/d/1r7D4oCjHNdHhFvv7koFcZHTt82B0vT1_okHLaax3MiI/edit?usp=drive_link",
    },
    {
      id: "lr_kwdM4AkA",
      title: t("portfolio.script2.title"),
      videoLink: "https://youtube.com/shorts/lr_kwdM4AkA",
      scriptLink: language === "en"
        ? "https://docs.google.com/document/d/1gOtwNBpc5Bawlt44IqXnfLSZNIlzefyANALJ12-_D8U/edit?usp=drive_link"
        : "https://docs.google.com/document/d/1roSmgxwwARZne21TYS13BiSIW1NPn6MVLb298qYYl10/edit?usp=drive_link",
    },
    {
      id: "6OdS2zOgxcE",
      title: t("portfolio.script3.title"),
      videoLink: "https://www.youtube.com/shorts/6OdS2zOgxcE",
      scriptLink: language === "en"
        ? "https://docs.google.com/document/d/1zEpL1-zXcMoXxljIzToqH2ojyIcSVyqKG0w45eyw_Uo/edit?usp=drive_link"
        : "https://docs.google.com/document/d/1mERt6ARx2R8iGhZ3KKOLD3m4QnZ8aV2JF6XoBgXupGU/edit?usp=drive_link",
    },
  ];

  const publis = [
    { title: "Disney+", description: t("portfolio.publi.disney.desc"), caseLink: "/cases/shogun-disney", caseLinkText: t("portfolio.publis.seeCase") },
    { title: "Globo Esporte", description: t("portfolio.publi.globo.desc"), caseLink: "/cases/olimpiadas-2024", caseLinkText: t("portfolio.publis.seeCase") },
    { title: "Opera", description: t("portfolio.publi.opera.desc"), videoLink: "https://youtu.be/j_BSyCFzxuM?t=119", videoLinkText: t("portfolio.publis.seeVideo") },
  ];

  return (
    <Layout>
      {/* Pesquisas Section */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl mb-6">{t("portfolio.research.title")}</h1>
              <p className="text-xl text-muted-foreground">
                {t("portfolio.research.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <ScrollReveal key={index} delay={index * 80} direction="none">
                <div className="card-editorial p-0 overflow-hidden flex flex-col h-full">
                  <div className="aspect-video overflow-hidden">
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-250"
                      />
                    </a>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">{video.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      {video.description}
                    </p>
                    <a
                      href={video.researchLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent inline-flex w-fit mt-auto"
                    >
                      {t("portfolio.research.linkBtn")}
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Publis Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <div className="accent-line mb-6" />
              <h2 className="text-3xl md:text-4xl mb-6">{t("portfolio.publis.title")}</h2>
              <p className="text-xl text-muted-foreground">
                {t("portfolio.publis.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8">
            {publis.map((publi, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                {publi.caseLink ? (
                  <Link
                    to={publi.caseLink}
                    className="card-editorial block group"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-250">{publi.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      {publi.description}
                    </p>
                    <span className="btn-accent inline-flex w-fit">
                      {publi.caseLinkText}
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-250" />
                    </span>
                  </Link>
                ) : (
                  <a
                    href={publi.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-editorial block group"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-250">{publi.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      {publi.description}
                    </p>
                    <span className="btn-accent inline-flex w-fit">
                      {publi.videoLinkText}
                      <ExternalLink size={16} className="ml-2" />
                    </span>
                  </a>
                )}
              </ScrollReveal>
            ))}
          </div>

          {/* Outros Exemplos */}
          <ScrollReveal>
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-8">{t("portfolio.others.title")}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {outrosExemplos.map((exemplo, index) => (
                  <ScrollReveal key={index} delay={index * 60} direction="none">
                    <a
                      href={exemplo.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-editorial p-0 overflow-hidden group block"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={`https://img.youtube.com/vi/${exemplo.videoId}/maxresdefault.jpg`}
                          alt={exemplo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-250"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="font-semibold group-hover:text-accent transition-colors duration-250">{exemplo.title}</h4>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mídia Kits Section */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <div className="accent-line mb-6" />
              <h2 className="text-3xl md:text-4xl mb-6">{t("portfolio.kits.title")}</h2>
              <p className="text-xl text-muted-foreground">
                {t("portfolio.kits.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <a
                href="https://www.figma.com/design/thkL4L1YTCauQSvoR9QPHM/M%C3%ADdia-Kit-Hist%C3%B3ria-Estranha?m=auto&t=28Rb0GjM7P2ImmQo-1"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-lg block"
              >
                <img
                  src={midiaKitEstranhaHistoria}
                  alt="Mídia Kit Estranha História"
                  className="w-full h-auto object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                  <span className="text-white text-xl md:text-2xl font-semibold">{t("portfolio.kits.seeFull")}</span>
                </div>
              </a>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={0}>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={midiaKitCetaligado}
                    alt="Mídia Kit Cê Tá Ligado"
                    className="w-full h-auto object-cover transition-transform duration-250 hover:scale-[1.02]"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={midiaKitEntrosamento}
                    alt="Mídia Kit Entrosamento em Dia"
                    className="w-full h-auto object-cover transition-transform duration-250 hover:scale-[1.02]"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
