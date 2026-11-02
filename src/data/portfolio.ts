// Content of the /portfolio page. Images live in /public/portfolio.

import type { Localized } from "./home";

export interface ResearchVideo {
  id: string;
  title: Localized;
  channel: string;
  /** translation key of the description */
  descKey: string;
  doc: string | Localized;
  /** link to the video, when it should open at a specific moment */
  url?: string;
}

export const research: ResearchVideo[] = [
  {
    id: "deEXaVt3EgE",
    title: { pt: "China: 5 mil anos de história em 1 hora", en: "China: 5,000 years of history in 1 hour" },
    channel: "Canal Nostalgia",
    descKey: "portfolio.video.china.desc",
    doc: "https://docs.google.com/document/d/1eTmnV_TpWdqeXbd3gFlmBcTQAHpq47vjuodH6fhtBfM/edit?usp=drive_link",
    url: "https://www.youtube.com/watch?v=deEXaVt3EgE&t=2308s",
  },
  {
    id: "l4cy3ni-4dE",
    title: { pt: "Tour pela Grécia Antiga", en: "A tour of Ancient Greece" },
    channel: "TinocandoTV",
    descKey: "portfolio.video.grecia.desc",
    doc: "https://drive.google.com/file/d/1rR4v8NogJeAuMg_MgDZhDAU6Imk16QEk/view?usp=drive_link",
  },
  {
    id: "3LlZGDXC2fU",
    title: { pt: "A ilha do futuro", en: "The island of the future" },
    channel: "Canal Nostalgia",
    descKey: "portfolio.video.groenlandia.desc",
    doc: "https://drive.google.com/file/d/1P33Nq9rnRfQycBqN4gU4y7LgFt82rD-q/view?usp=drive_link",
  },
  {
    id: "eCNlfj-_U8U",
    title: { pt: "Você vai reparar nisso pra sempre", en: "You'll notice this forever" },
    channel: "Estranha História",
    descKey: "portfolio.video.reparar.desc",
    doc: "https://drive.google.com/file/d/1WcuPwgeetYcPnP2KOIt6es7Hv--qdbDR/view?usp=drive_link",
  },
  {
    id: "Jn99lnP5yik",
    title: { pt: "Queda de Hitler", en: "The fall of Hitler" },
    channel: "TinocandoTV",
    descKey: "portfolio.video.hitler.desc",
    doc: {
      pt: "https://drive.google.com/file/d/1FVrEYpAMdmRM74lIgvCyD7xnhfrkNsB-/view?usp=drive_link",
      en: "https://drive.google.com/file/d/1NbF2fQudJtmKW-RVpGTkJkyURD61C9Tj/view?usp=drive_link",
    },
  },
];

export interface ShortScript {
  id: string;
  /** translation key of the title */
  titleKey: string;
  video: string;
  doc: Localized;
}

export const shorts: ShortScript[] = [
  {
    id: "PuJ2AKtlONM",
    titleKey: "portfolio.script1.title",
    video: "https://youtube.com/shorts/PuJ2AKtlONM",
    doc: {
      pt: "https://drive.google.com/file/d/1w2SssFAx4K3LY4DZDlOFzrpe155Ufyyd/view?usp=drive_link",
      en: "https://drive.google.com/file/d/1uHjfnyPSma8mx9o2FK6n6ziT8NsRTFjw/view?usp=drive_link",
    },
  },
  {
    id: "lr_kwdM4AkA",
    titleKey: "portfolio.script2.title",
    video: "https://youtube.com/shorts/lr_kwdM4AkA",
    doc: {
      pt: "https://drive.google.com/file/d/15JuuJYZdrzjGeRXDNQwo2kinBGfU5kEQ/view?usp=drive_link",
      en: "https://drive.google.com/file/d/12DYB1uuDYJhWAGzi50WA4tUIwPxghEdt/view?usp=drive_link",
    },
  },
  {
    id: "6OdS2zOgxcE",
    titleKey: "portfolio.script3.title",
    video: "https://www.youtube.com/shorts/6OdS2zOgxcE",
    doc: {
      pt: "https://drive.google.com/file/d/1kyYgy3l_Se8p34x1gRDH05a5Df_QuJfG/view?usp=drive_link",
      en: "https://drive.google.com/file/d/1doR-ockxvhvSSC5PE7bqhLAXlMkXz07d/view?usp=drive_link",
    },
  },
];

export const mediaKit = {
  img: "/portfolio/midia-kit-estranha-historia.webp",
  href: "https://drive.google.com/file/d/1ECdeEvQ1KBtRe04Kq8e5U_bzNz_s0LrI/view",
};

/** Every magazine in the Drive folder; the cover is /public/portfolio/magazines/<slug>.webp. Titles are as printed on the covers. */
export const magazines: { slug: string; title: string; drive: string }[] = [
  { slug: "top-10-cidades", title: "As 10 melhores cidades do mundo", drive: "1ucFYXgqyr_cc3Rx2QoryUdQ4OXSU3Nkw" },
  { slug: "magazine", title: "O restaurante embaixo d'água", drive: "1uIBil8QsE_1s2HMLnSj-A46YUmzXqqQL" },
  { slug: "pinturas-em-filmes", title: "Filmes inspirados em Vincent van Gogh", drive: "1zm32xvWMtLA61xswWwE3iq3lKYk7LJxG" },
  { slug: "ultramaratonista", title: "O ultramaratonista que deu a volta ao mundo", drive: "1HgH7xiHuRODxYtSXpJLsdOO-GhoWUB3W" },
  { slug: "kuhikugu", title: "O império perdido da Amazônia", drive: "1Iu--UWoqzLx34kW6_PiF1BmAv0AhRzFC" },
  { slug: "bruxaria", title: "A história por trás da “bruxaria”", drive: "1hCYmm9LSmZslyT6ckLOSFceZeDAlQggh" },
  { slug: "realidade-atleta-brasileiro", title: "A realidade do esporte brasileiro", drive: "1qtf5X693RhgbmswjU6_InsRm7j4EnaxN" },
  { slug: "curupira", title: "Curupira como mascote da COP 30", drive: "16Jb1mmREXr_NTQOhBDH_YiyM5dcgUNwR" },
  { slug: "miss-atomic-bomb", title: "Miss Atomic Bomb", drive: "1opGc5AhlQFAck8jGCmhXvbFa3vaFoiw5" },
  { slug: "tesouros-nao-encontrados", title: "Os tesouros ainda não encontrados", drive: "1XuyOhJavwDXAAdkT3BD9CUCycbVCLXat" },
  { slug: "mapa-mundi", title: "O mapa-múndi que desafiou seu tempo", drive: "1WovjNZyz4xwaP48l_p6sKdGtx3nGq7eC" },
  { slug: "nascimento-da-estrela", title: "O nascimento de uma estrela", drive: "1weaFiivT2EfAy9jYw2OsvGu82gHMxd2u" },
  { slug: "esc", title: "O paradoxo do ESC", drive: "1bjjU5xH-wiub37_gJDDBaDpe1mws6GeT" },
  { slug: "novo-patrimonio", title: "Brasil ganha patrimônio", drive: "17P8TqR-sD-pjk3y7YbTtKQ6cG9xtyDFU" },
  { slug: "psicologia-das-cores", title: "A psicologia das cores", drive: "1drxEfjYejO_1iKeYv_y7s1pg8pMUNtjd" },
  { slug: "maracana-de-oscar", title: "O Maracanã de Oscar Niemeyer", drive: "18lrPJ5DvEvDANZBGyyQBIUXh9dZVAv3p" },
  { slug: "mona-lisa", title: "Por que a Mona Lisa é tão valiosa?", drive: "1YIcOLrE-n9DYpCPzmnKqcfpJw_wu-GxH" },
  { slug: "leoes", title: "A pintura que imortalizou a fé inabalável", drive: "13oxHDQj9rukLdZ9spMXo-PsBwMpRraey" },
  { slug: "cinema-brasileiro", title: "A ascensão do cinema brasileiro", drive: "1Rj1f5Hs2YSS39R_MKhG5MhcgyoQoxCRS" },
  { slug: "pirataria", title: "Pirataria no Brasil", drive: "1EsKHvsphA4tXXSTxut1CZy6I-sRetHNt" },
  { slug: "van-gogh-e-o-amarelo", title: "Van Gogh: o homem que decifrou o amarelo", drive: "1ctkX-HTFtRsNHFMIY1n6FuwEdrri2u8D" },
  { slug: "colonialismo-alimentar", title: "Colonialismo alimentar", drive: "1IFnAm2Vo2clEOYTlMS7T6t8ReMbHZmxs" },
  { slug: "tecidos-india", title: "A Índia não é um país, é um tear vivo", drive: "1ZMtUpEW0jwZd-e0A-GqMb5noST3vVP-k" },
  { slug: "roland-garros", title: "Joël Blanc: o pintor que eternizou Roland-Garros", drive: "1_iKHBGs-rJ1l0meIYAnBTXkfVKohD2kj" },
  { slug: "faixa-de-gaza", title: "A maior prisão a céu aberto do mundo", drive: "1ZS8jpN4w7Mu8kfexg5G_uXWiDR7JvGDi" },
  { slug: "nascente-nilo", title: "O mistério do Rio Nilo", drive: "1dzVAeNS60Cw1RauAfIacJ2PStF34wYjK" },
];

export const driveView = (id: string) => `https://drive.google.com/file/d/${id}/view`;
