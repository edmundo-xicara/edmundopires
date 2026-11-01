// The cases catalog: every case, in the order the /cases page shows them.
// A case with `page: true` has its own hand-written page in src/pages; the others use the generic CaseDetail page.

import type { Localized } from "./home";

export interface CatalogCase {
  slug: string;
  side: "av" | "tc";
  year: string;
  title: Localized;
  client: string | Localized;
  role: Localized;
  /** /public/cases/<img>.webp, 16:9 */
  img: string;
  /** One or two lines under the catalog */
  blurb: Localized;
  /** Full text for cases without their own page */
  text?: Localized;
  link?: { label: Localized; href: string };
  page?: boolean;
}

export const catalog: CatalogCase[] = [
  {
    slug: "analise-enem",
    side: "tc",
    year: "2026",
    title: { pt: "O que cai no ENEM", en: "What's on the ENEM" },
    client: { pt: "Projeto próprio", en: "Personal project" },
    role: { pt: "Dados e vibe coding", en: "Data and vibe coding" },
    img: "analise-enem",
    blurb: {
      pt: "Li à mão as provas de Humanas do ENEM, continuei a análise até 2025 com IA e transformei tudo em um site aberto com simulado.",
      en: "I read the ENEM humanities exams by hand, extended the analysis to 2025 with AI and turned it into an open website with a practice test.",
    },
    text: {
      pt: "Entre 2022 e 2023, antes do boom da IA generativa, li à mão as questões de Humanas de cada prova do ENEM e anotei tudo numa planilha, com disciplina, matéria, assunto e fonte. Em 2026, com vibe coding, transformei esse trabalho em um projeto aberto: continuei a classificação até 2025, apliquei o mesmo método às questões de Matemática e Natureza e construí um site com gráficos filtráveis e um simulado com questões reais. São 1.485 questões classificadas.",
      en: "Between 2022 and 2023, before the generative AI boom, I read every humanities question of each ENEM exam by hand and logged it in a spreadsheet by subject, topic and source. In 2026, with vibe coding, I turned that work into an open project: I extended the classification to 2025, applied the same method to the math and science questions, and built a website with filterable charts and a practice test using real questions. That's 1,485 classified questions.",
    },
    link: { label: { pt: "Abrir o site", en: "Open the website" }, href: "https://analise-enems.vercel.app/" },
  },
  {
    slug: "china-5-mil-anos",
    side: "av",
    year: "2026",
    title: { pt: "China: 5 mil anos em 1 hora", en: "China: 5,000 years in 1 hour" },
    client: "Canal Nostalgia",
    role: { pt: "Pesquisa de imagens", en: "Image research" },
    img: "china-5-mil-anos",
    blurb: {
      pt: "Pesquisa de imagens para um vídeo de uma hora sobre dinastias, guerras e revoluções.",
      en: "Image research for an hour-long video on dynasties, wars and revolutions.",
    },
    text: {
      pt: "Fiz a pesquisa de imagens do vídeo que conta a história completa da China em uma hora, de impérios milenares à potência atual. Cada dinastia, guerra e revolução do roteiro precisava de material visual que sustentasse a narração.",
      en: "I did the image research for the video that tells the whole history of China in one hour, from ancient empires to today's world power. Every dynasty, war and revolution in the script needed visual material to carry the narration.",
    },
    link: { label: { pt: "Assistir no YouTube", en: "Watch on YouTube" }, href: "https://www.youtube.com/watch?v=deEXaVt3EgE" },
  },
  {
    slug: "grecia-antiga",
    side: "av",
    year: "2025",
    title: { pt: "Documentário Grécia Antiga", en: "Ancient Greece documentary" },
    client: "TinocandoTV",
    role: { pt: "Roteiro e pesquisa de imagens", en: "Script and image research" },
    img: "grecia-antiga",
    blurb: {
      pt: "O maior documentário do canal. Ampliei o roteiro e conduzi cerca de 70% da pesquisa de imagens.",
      en: "The channel's biggest documentary. I expanded the script and led about 70% of the image research.",
    },
    page: true,
  },
  {
    slug: "nobel-2025",
    side: "av",
    year: "2025",
    title: { pt: "Entrevistas para o Prêmio Nobel", en: "Nobel Prize interviews" },
    client: "TinocandoTV",
    role: { pt: "Produção e entrevistas", en: "Production and interviews" },
    img: "nobel-2025",
    blurb: {
      pt: "Encontrei e contatei os especialistas e estruturei as entrevistas para cada categoria do Nobel de 2025.",
      en: "I found and reached the experts and structured the interviews for each 2025 Nobel category.",
    },
    page: true,
  },
  {
    slug: "revista-instagram",
    side: "av",
    year: "2025",
    title: { pt: "Revista digital no Instagram", en: "Digital magazine on Instagram" },
    client: "TinocandoTV",
    role: { pt: "Design editorial", en: "Editorial design" },
    img: "revista-instagram",
    blurb: {
      pt: "Revistas diárias com notícias socioculturais, criadas para o Instagram do canal.",
      en: "Daily magazines with sociocultural news, made for the channel's Instagram.",
    },
    page: true,
  },
  {
    slug: "olimpiadas-2024",
    side: "av",
    year: "2024",
    title: { pt: "Campanha Olimpíadas de 2024", en: "2024 Olympics campaign" },
    client: "Globo Esporte",
    role: { pt: "Making of institucional", en: "Institutional making-of" },
    img: "olimpiadas-2024",
    blurb: {
      pt: "Captação do making of e dos bastidores das gravações no Rio de Janeiro.",
      en: "Making-of and behind-the-scenes footage of the shoots in Rio de Janeiro.",
    },
    page: true,
  },
  {
    slug: "shogun-disney",
    side: "av",
    year: "2024",
    title: { pt: "Parceria Disney+ · Shōgun", en: "Disney+ partnership · Shōgun" },
    client: "Disney+",
    role: { pt: "Pesquisa e roteiro publicitário", en: "Research and ad script" },
    img: "shogun-disney",
    blurb: {
      pt: "Gestão da pesquisa histórica, revisão do vídeo final e escrita do roteiro publicitário.",
      en: "Managed the historical research, reviewed the final video and wrote the sponsored segment.",
    },
    page: true,
  },
];
