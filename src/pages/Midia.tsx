import { Layout } from "@/components/layout/Layout";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import midiaKitEstranhaHistoria from "@/assets/midia-kit-estranha-historia.png";
import revista1 from "@/assets/revista-1.png";
import revista2 from "@/assets/revista-2.png";
import revista3 from "@/assets/revista-3.png";
import revista4 from "@/assets/revista-4.png";
import revista5 from "@/assets/revista-5.png";
import revista6 from "@/assets/revista-6.png";

const outrosExemplos = [
  { title: "Insider", videoLink: "https://youtu.be/XDOWW7CQmhg?t=243", videoId: "XDOWW7CQmhg" },
  { title: "Manual", videoLink: "https://youtu.be/ttkt5pdArZY?t=145", videoId: "ttkt5pdArZY" },
  { title: "Uninassau", videoLink: "https://youtu.be/lcpzeK1-Ulg?t=76", videoId: "lcpzeK1-Ulg" },
  { title: "CyberGhost", videoLink: "https://youtu.be/BpuNlQ_x2AA?t=99", videoId: "BpuNlQ_x2AA" },
  { title: "Promova", videoLink: "https://youtu.be/97ozWnsSq0A?t=109", videoId: "97ozWnsSq0A" },
  { title: "Alura", videoLink: "https://www.youtube.com/watch?v=MBwGOxEoJgQ", videoId: "MBwGOxEoJgQ" },
];

const Portfolio = () => {
  const { t, language } = useLanguage();

  const videos = [
    { id: "l4cy3ni-4dE", title: t("portfolio.video.grecia.title"), channel: t("portfolio.video.grecia.channel"), description: t("portfolio.video.grecia.desc"), researchLink: "https://drive.google.com/file/d/1rR4v8NogJeAuMg_MgDZhDAU6Imk16QEk/view?usp=drive_link" },
    { id: "3LlZGDXC2fU", title: t("portfolio.video.groenlandia.title"), channel: t("portfolio.video.groenlandia.channel"), description: t("portfolio.video.groenlandia.desc"), researchLink: "https://drive.google.com/file/d/1P33Nq9rnRfQycBqN4gU4y7LgFt82rD-q/view?usp=drive_link" },
    { id: "eCNlfj-_U8U", title: t("portfolio.video.reparar.title"), channel: t("portfolio.video.reparar.channel"), description: t("portfolio.video.reparar.desc"), researchLink: "https://drive.google.com/file/d/1WcuPwgeetYcPnP2KOIt6es7Hv--qdbDR/view?usp=drive_link" },
    { id: "Jn99lnP5yik", title: t("portfolio.video.hitler.title"), channel: t("portfolio.video.hitler.channel"), description: t("portfolio.video.hitler.desc"), researchLink: language === "en" ? "https://drive.google.com/file/d/1NbF2fQudJtmKW-RVpGTkJkyURD61C9Tj/view?usp=drive_link" : "https://drive.google.com/file/d/1FVrEYpAMdmRM74lIgvCyD7xnhfrkNsB-/view?usp=drive_link" },
  ];

  const scripts = [
    {
      id: "PuJ2AKtlONM",
      title: t("portfolio.script1.title"),
      videoLink: "https://youtube.com/shorts/PuJ2AKtlONM",
      scriptLink: language === "en"
        ? "https://drive.google.com/file/d/1uHjfnyPSma8mx9o2FK6n6ziT8NsRTFjw/view?usp=drive_link"
        : "https://drive.google.com/file/d/1w2SssFAx4K3LY4DZDlOFzrpe155Ufyyd/view?usp=drive_link",
    },
    {
      id: "lr_kwdM4AkA",
      title: t("portfolio.script2.title"),
      videoLink: "https://youtube.com/shorts/lr_kwdM4AkA",
      scriptLink: language === "en"
        ? "https://drive.google.com/file/d/12DYB1uuDYJhWAGzi50WA4tUIwPxghEdt/view?usp=drive_link"
        : "https://drive.google.com/file/d/15JuuJYZdrzjGeRXDNQwo2kinBGfU5kEQ/view?usp=drive_link",
    },
    {
      id: "6OdS2zOgxcE",
      title: t("portfolio.script3.title"),
      videoLink: "https://www.youtube.com/shorts/6OdS2zOgxcE",
      scriptLink: language === "en"
        ? "https://drive.google.com/file/d/1doR-ockxvhvSSC5PE7bqhLAXlMkXz07d/view?usp=drive_link"
        : "https://drive.google.com/file/d/1kyYgy3l_Se8p34x1gRDH05a5Df_QuJfG/view?usp=drive_link",
    },
  ];

  const scriptModels = [
    {
      title: t("portfolio.scriptModel1.title"),
      description: t("portfolio.scriptModel1.desc"),
      link: language === "en"
        ? "https://drive.google.com/file/d/1QYbPqhEbQb07TgqcCcYUseakzBByYsBw/view?usp=drive_link"
        : "https://drive.google.com/file/d/1U3E-64pCuSRiuo8le8B0DPlzAET3Dt2l/view?usp=drive_link",
    },
    {
      title: t("portfolio.scriptModel2.title"),
      description: t("portfolio.scriptModel2.desc"),
      link: language === "en"
        ? "https://drive.google.com/file/d/1fmx-dkv9PdXc3nLYOpMShrQwj49F2JSn/view?usp=drive_link"
        : "https://drive.google.com/file/d/1oesTeHMNF8YODB6L0e7F7HyNPcqw1ZUp/view?usp=drive_link",
    },
    {
      title: t("portfolio.scriptModel3.title"),
      description: t("portfolio.scriptModel3.desc"),
      link: language === "en"
        ? "https://drive.google.com/file/d/1SVQGWBU3KlWlclPyt75gnrqEPG5ocDzB/view?usp=drive_link"
        : "https://drive.google.com/file/d/1Bp0OGFPOZ8hETMeIJbQtJanvuwIupdrA/view?usp=drive_link",
    },
    {
      title: t("portfolio.scriptModel4.title"),
      description: t("portfolio.scriptModel4.desc"),
      link: language === "en"
        ? "https://drive.google.com/file/d/1_JVqL2gp3-6WwIgca_7QiunvAID82Igc/view?usp=drive_link"
        : "https://drive.google.com/file/d/1CYC764IrqsUBdNr1kDouP0Da6nab1m4_/view?usp=drive_link",
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
              <h1 className="font-heading text-[clamp(40px,6vw,80px)] mb-6">
                {t("portfolio.research.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("portfolio.research.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <ScrollReveal key={index} delay={index * 80} direction="none">
                <div className="border border-border bg-card overflow-hidden flex flex-col h-full">
                  <div className="aspect-video overflow-hidden relative group">
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-105"
                      />
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
                      <span className="text-white text-sm font-semibold text-center px-4">
                        {t("portfolio.watchOnYoutube")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-xl mb-1">{video.title}</h3>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">{video.channel}</p>
                    <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
                      {video.description}
                    </p>
                    <a
                      href={video.researchLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent w-fit"
                    >
                      {t("portfolio.research.linkBtn")}
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roteiros Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading text-[clamp(32px,4.5vw,56px)] mb-6">
                {t("portfolio.scripts.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("portfolio.scripts.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scripts.map((script, index) => (
              <ScrollReveal key={index} delay={index * 80} direction="none">
                <div className="border border-border bg-card overflow-hidden flex flex-col h-full">
                  <a
                    href={script.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group block aspect-[9/16] overflow-hidden bg-muted"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${script.id}/maxresdefault.jpg`}
                      alt={script.title}
                      className="w-full h-full object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                      <span className="text-white text-sm font-semibold text-center px-4">
                        {t("portfolio.watchOnYoutube")}
                      </span>
                    </div>
                  </a>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-xl mb-4">{script.title}</h3>
                    <a
                      href={script.scriptLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent w-fit mt-auto"
                    >
                      {t("portfolio.scripts.linkBtn")}
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Modelos de Roteiros */}
          <ScrollReveal>
            <div className="max-w-3xl mt-24 mb-12">
              <h3 className="font-heading text-[clamp(28px,3.5vw,48px)] mb-4">
                {t("portfolio.scriptModels.title")}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("portfolio.scriptModels.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="border-t border-border">
            {scriptModels.map((model, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <a
                  href={model.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-border transition-colors duration-250 hover:bg-card/60 -mx-4 px-4"
                >
                  <div className="flex-1">
                    <h4 className="font-heading text-xl mb-3 group-hover:text-accent transition-colors duration-250">
                      {model.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                  <span className="btn-accent flex-shrink-0">
                    {t("portfolio.scripts.linkBtn")}
                    <ExternalLink size={13} />
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Publis Section */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading text-[clamp(32px,4.5vw,56px)] mb-6">
                {t("portfolio.publis.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("portfolio.publis.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="border-t border-border">
            {publis.map((publi, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                {publi.caseLink ? (
                  <Link
                    to={publi.caseLink}
                    className="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-border transition-colors duration-250 hover:bg-card/60 -mx-4 px-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl mb-3 group-hover:text-accent transition-colors duration-250">
                        {publi.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {publi.description}
                      </p>
                    </div>
                    <span className="btn-accent flex-shrink-0">
                      {publi.caseLinkText}
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-250" />
                    </span>
                  </Link>
                ) : (
                  <a
                    href={publi.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-border transition-colors duration-250 hover:bg-card/60 -mx-4 px-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl mb-3 group-hover:text-accent transition-colors duration-250">
                        {publi.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {publi.description}
                      </p>
                    </div>
                    <span className="btn-accent flex-shrink-0">
                      {publi.videoLinkText}
                      <ExternalLink size={13} />
                    </span>
                  </a>
                )}
              </ScrollReveal>
            ))}
          </div>

          {/* Outros Exemplos */}
          <ScrollReveal>
            <div className="mt-20">
              <h3 className="text-sm font-semibold text-muted-foreground mb-8">
                {t("portfolio.others.title")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:flex lg:gap-3 lg:[&:hover>div]:flex-[0.5_0.5_0%] lg:[&>div:hover]:!flex-[3_3_0%]">
                {outrosExemplos.map((exemplo, index) => (
                  <div key={index} className="lg:flex-1 lg:min-w-0 lg:transition-all lg:duration-300">
                    <ScrollReveal delay={index * 60} direction="none">
                      <a
                        href={exemplo.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border border-border bg-card overflow-hidden block"
                      >
                        <div className="aspect-square lg:h-36 lg:aspect-auto overflow-hidden relative">
                          <img
                            src={`https://img.youtube.com/vi/${exemplo.videoId}/maxresdefault.jpg`}
                            alt={exemplo.title}
                            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                            <span className="text-white font-mono text-[9px] text-center px-2">
                              {t("portfolio.watchOnYoutube")}
                            </span>
                          </div>
                        </div>
                        <div className="p-3 text-center">
                          <h4 className="text-sm font-semibold text-muted-foreground group-hover:text-accent transition-colors duration-250">
                            {exemplo.title}
                          </h4>
                        </div>
                      </a>
                    </ScrollReveal>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mídia Kits Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading text-[clamp(32px,4.5vw,56px)] mb-6">
                {t("portfolio.kits.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("portfolio.kits.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            <ScrollReveal>
              <a
                href="https://drive.google.com/file/d/1ECdeEvQ1KBtRe04Kq8e5U_bzNz_s0LrI/view"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden block border border-border"
              >
                <img
                  src={midiaKitEstranhaHistoria}
                  alt="Mídia Kit Estranha História"
                  className="w-full h-auto object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                  <span className="text-white text-sm font-semibold">
                    {t("portfolio.kits.seeFull")}
                  </span>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Instagram Magazines Section */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading text-[clamp(32px,4.5vw,56px)] mb-6">
                {t("portfolio.magazines.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("portfolio.magazines.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[revista1, revista2, revista3, revista4, revista5, revista6].map((src, index) => (
              <ScrollReveal key={index} delay={index * 60} direction="none">
                <a
                  href="https://www.instagram.com/tinocandotv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden border border-border block"
                >
                  <img
                    src={src}
                    alt={`Instagram Magazine ${index + 1}`}
                    className="w-full h-auto object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                    <span className="text-white text-sm font-semibold text-center px-4">
                      {t("case.revista.checkInstagram")}
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
