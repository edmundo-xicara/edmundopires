// Content for the home sections that list things: channels, audiovisual work, featured cases.
// Interface copy lives in LanguageContext; these are the records.

export type Localized = { pt: string; en: string };

export const pick = (v: string | Localized, lang: "pt" | "en") => (typeof v === "string" ? v : v[lang]);

export interface Channel {
  id: string;
  name: string;
  /** Subscribers in millions, as shown on the channel page (checked 2026-11-01) */
  subs: number;
  decimals: number;
  href: string;
  banner: string;
  avatar: string;
  role: Localized;
}

export const channels: Channel[] = [
  {
    id: "tino",
    name: "TinocandoTV",
    subs: 6.77,
    decimals: 2,
    href: "https://www.youtube.com/@tinocandotv",
    banner: "/channels/tino-banner.webp",
    avatar: "/channels/tino-avatar.webp",
    role: {
      pt: "Estrategista de conteúdo e chefe de pesquisa. Acompanhei o canal de 1 mi para 2,6 mi.",
      en: "Content strategist and head of research. I was there as the channel grew from 1M to 2.6M.",
    },
  },
  {
    id: "nost",
    name: "Canal Nostalgia",
    subs: 15.2,
    decimals: 1,
    href: "https://www.youtube.com/@nostalgia",
    banner: "/channels/nost-banner.webp",
    avatar: "/channels/nost-avatar.webp",
    role: {
      pt: "Pesquisa de imagens do vídeo sobre os 5 mil anos de história da China.",
      en: "Image research for the video on 5,000 years of Chinese history.",
    },
  },
  {
    id: "eh",
    name: "Estranha História",
    subs: 1.26,
    decimals: 2,
    href: "https://www.youtube.com/channel/UCDjzWHhTShC59KtduL-jeig",
    banner: "/channels/eh-banner.webp",
    avatar: "/channels/eh-avatar.webp",
    // TODO(Edmundo): say what you did on this channel.
    role: {
      pt: "Trabalhei na produção de vídeos do canal.",
      en: "I worked on video production for the channel.",
    },
  },
];

/** Audiovisual work shown as clips in "Dois mundos". Each opens its case, or the video when there is no case. */
export const clips: { title: Localized; meta: string; href: string; external?: boolean }[] = [
  { title: { pt: "Documentário Grécia Antiga", en: "Ancient Greece documentary" }, meta: "TinocandoTV · 2025", href: "/cases/grecia-antiga" },
  {
    title: { pt: "China: 5 mil anos de história em 1 hora", en: "China: 5,000 years of history in 1 hour" },
    meta: "Canal Nostalgia · 2026",
    href: "https://www.youtube.com/watch?v=deEXaVt3EgE",
    external: true,
  },
  { title: { pt: "Making of das Olimpíadas", en: "Olympics making-of" }, meta: "Globo Esporte · 2024", href: "/cases/olimpiadas-2024" },
  { title: { pt: "Parceria Shōgun", en: "Shōgun partnership" }, meta: "Disney+ · 2024", href: "/cases/shogun-disney" },
];

/** Tech projects, printed as a code listing in "Dois mundos". */
export const techProjects: { name: string | Localized; href?: string; detail: { key: "questions" | "stack"; value: string } }[] = [
  { name: "Análise do ENEM", href: "https://analise-enems.vercel.app/", detail: { key: "questions", value: "1485" } },
  { name: { pt: "Este site", en: "This website" }, detail: { key: "stack", value: "React + GSAP" } },
];

export interface FeaturedCase {
  year: string;
  title: Localized;
  client: string | Localized;
  category: Localized;
  href: string;
  external?: boolean;
}

export const featuredCases: FeaturedCase[] = [
  {
    year: "2026",
    title: { pt: "O que cai no ENEM: análise aberta", en: "What's on the ENEM: an open analysis" },
    client: { pt: "Projeto próprio", en: "Personal project" },
    category: { pt: "Dados e vibe coding", en: "Data and vibe coding" },
    href: "https://analise-enems.vercel.app/",
    external: true,
  },
  {
    year: "2026",
    title: { pt: "China: 5 mil anos de história em 1 hora", en: "China: 5,000 years of history in 1 hour" },
    client: "Canal Nostalgia",
    category: { pt: "Pesquisa de imagens", en: "Image research" },
    href: "https://www.youtube.com/watch?v=deEXaVt3EgE",
    external: true,
  },
  {
    year: "2025",
    title: { pt: "Documentário Grécia Antiga", en: "Ancient Greece documentary" },
    client: "TinocandoTV",
    category: { pt: "Documentário", en: "Documentary" },
    href: "/cases/grecia-antiga",
  },
  {
    year: "2025",
    title: { pt: "Entrevistas de especialistas para o Prêmio Nobel", en: "Expert interviews for the 2025 Nobel Prize" },
    client: "TinocandoTV",
    category: { pt: "Produção e entrevistas", en: "Production and interviews" },
    href: "/cases/nobel-2025",
  },
  {
    year: "2024",
    title: { pt: "Campanha Olimpíadas de 2024", en: "2024 Olympics campaign" },
    client: "Globo Esporte",
    category: { pt: "Making of institucional", en: "Institutional making-of" },
    href: "/cases/olimpiadas-2024",
  },
];
