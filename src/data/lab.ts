// Lab projects — the tech side of the portfolio. Each one becomes a tab on /lab, walked through step by step.
// To add a project: add an object to `labProjects`, with its steps and what the screen shows at each step.

import type { Localized } from "./home";

export type LabPane =
  | { kind: "sheet"; rows: [string, string, string, string, string][]; note: Localized }
  | { kind: "terminal"; lines: string[]; chips?: string[] }
  | { kind: "image"; src: string }
  | { kind: "stats"; stats: { value: string; label: Localized }[]; src: string }
  | { kind: "old" }
  | { kind: "refs"; refs: [Localized, string][] }
  | { kind: "swatches" }
  | { kind: "minis"; srcs: string[] }
  | { kind: "code"; lines: string[]; chips: string[] };

export interface LabStep {
  label: Localized;
  title: Localized;
  text: Localized;
  /** what the window's title bar shows */
  file: string;
  pane: LabPane;
}

export interface LabProject {
  id: string;
  name: Localized;
  title: string;
  year: string;
  stack: string[];
  links: { label: Localized; href: string }[];
  steps: LabStep[];
}

const github: Localized = { pt: "Ver no GitHub", en: "View on GitHub" };

export const labProjects: LabProject[] = [
  {
    id: "enem",
    name: { pt: "Análise do ENEM", en: "ENEM analysis" },
    title: "O que cai no ENEM",
    year: "2026",
    stack: ["Python", "pandas", "pypdf", "ECharts", "Claude Code"],
    links: [
      { label: { pt: "Abrir o site", en: "Open the website" }, href: "https://analise-enems.vercel.app/" },
      { label: github, href: "https://github.com/edmundo-xicara/analise-enems" },
    ],
    steps: [
      {
        label: { pt: "Etapa 1 · À mão", en: "Step 1 · By hand" },
        title: { pt: "Antes da IA, uma planilha", en: "Before AI, a spreadsheet" },
        text: {
          pt: "Entre 2022 e 2023 li as questões de Humanas de cada prova do ENEM e anotei disciplina, matéria, assunto, abordagem e fonte. Depois montei uma apresentação no Power BI.",
          en: "Between 2022 and 2023 I read the humanities questions of every ENEM exam and logged subject, topic, theme, approach and source. Then I built a Power BI presentation.",
        },
        file: "questoes.csv",
        pane: {
          kind: "sheet",
          rows: [
            ["2017", "51", "História", "Brasil Império", "Amas de leite, Escravidão"],
            ["2018", "71", "História", "Brasil República", "Revolta da Chibata"],
            ["2020", "51", "Geografia", "Agricultura", "Zona de pastoreio"],
            ["2021", "76", "História", "Idade Média", "Francisco de Assis"],
          ],
          note: { pt: "495 questões anotadas uma a uma", en: "495 questions logged one by one" },
        },
      },
      {
        label: { pt: "Etapa 2 · Recuperar", en: "Step 2 · Recover" },
        title: { pt: "Tirar os dados de dentro do Power BI", en: "Getting the data out of Power BI" },
        text: {
          pt: "Em 2026, com IA ao lado no código, extraí o modelo de dados do arquivo do Power BI e juntei as planilhas antigas numa base única e aberta.",
          en: "In 2026, with AI alongside in the code, I extracted the data model from the Power BI file and merged the old spreadsheets into one open dataset.",
        },
        file: "terminal",
        pane: {
          kind: "terminal",
          lines: [
            "# lê o modelo de dados do .pbix original",
            "$ python scripts/build_data.py",
            "  lendo dados/originais/*.pbix ...",
            "  2015–2022: 495 questões (manual)",
            "  2009–2014: totais da apresentação",
            "✓ dados/questoes.csv gerado",
            "✓ site/data/*.json atualizados",
          ],
          chips: ["pbixray", "pandas", "pypdf"],
        },
      },
      {
        label: { pt: "Etapa 3 · Continuar", en: "Step 3 · Extend" },
        title: { pt: "Até 2025, e também em Exatas", en: "Up to 2025, and into math and science" },
        text: {
          pt: "Classifiquei 2023 a 2025 com ajuda de IA, no mesmo esquema da análise manual, e apliquei o método às 990 questões de Matemática e Ciências da Natureza.",
          en: "I classified 2023 to 2025 with AI, using the same scheme as the manual analysis, and applied the method to the 990 math and natural science questions.",
        },
        file: "analise-enems.vercel.app",
        pane: { kind: "image", src: "/lab/enem-charts.webp" },
      },
      {
        label: { pt: "Etapa 4 · Abrir", en: "Step 4 · Open up" },
        title: { pt: "Um site no lugar da apresentação", en: "A website instead of a presentation" },
        text: {
          pt: "Gráficos que se filtram uns aos outros e um simulado com questões reais, corrigidas pelo gabarito oficial do INEP.",
          en: "Charts that filter each other and a practice test with real questions, graded with INEP's official answer key.",
        },
        file: "analise-enems.vercel.app/simulado",
        pane: { kind: "image", src: "/lab/enem-simulado.webp" },
      },
      {
        label: { pt: "Resultado", en: "Result" },
        title: { pt: "Tudo aberto, para quem estuda", en: "All open, for anyone studying" },
        text: {
          pt: "Dados, código e site públicos. Qualquer pessoa pode conferir uma classificação, sugerir correção ou reaproveitar a base.",
          en: "Data, code and website are public. Anyone can check a classification, suggest a fix or reuse the dataset.",
        },
        file: "analise-enems.vercel.app",
        pane: {
          kind: "stats",
          stats: [
            { value: "17", label: { pt: "provas de Humanas", en: "humanities exams" } },
            { value: "1.485", label: { pt: "questões classificadas", en: "classified questions" } },
            { value: "424", label: { pt: "fontes citadas", en: "sources cited" } },
          ],
          src: "/lab/enem-home.webp",
        },
      },
    ],
  },
  {
    id: "site",
    name: { pt: "Este site", en: "This website" },
    title: "byedstudio",
    year: "2026",
    stack: ["React", "TypeScript", "GSAP", "Lenis", "Tailwind", "Claude Code"],
    links: [{ label: github, href: "https://github.com/edmundo-xicara/edmundopires" }],
    steps: [
      {
        label: { pt: "Etapa 1 · Problema", en: "Step 1 · Problem" },
        title: { pt: "O portfólio vendia o trabalho antigo", en: "The portfolio sold my old work" },
        text: {
          pt: "O site falava de estrategista de conteúdo e serviços para YouTube, e tinha cara de template.",
          en: "The site talked about content strategy and YouTube services, and looked like a template.",
        },
        file: "site-antigo.png",
        pane: { kind: "old" },
      },
      {
        label: { pt: "Etapa 2 · Referências", en: "Step 2 · References" },
        title: { pt: "Um efeito de cada site", en: "One effect from each site" },
        text: {
          pt: "Estudei como cada referência resolve loading, grifo, cena 3D, tela fixa, números animados, catálogo e pilha em profundidade.",
          en: "I studied how each reference handles loading, hand-drawn marks, a 3D scene, a pinned screen, counting numbers, a catalog and a stack in depth.",
        },
        file: "referencias.md",
        pane: {
          kind: "refs",
          refs: [
            [{ pt: "Tela de loading", en: "Loading screen" }, "Blue Marine"],
            [{ pt: "Grifo desenhado à mão", en: "Hand-drawn marks" }, "Visor"],
            [{ pt: "Cena 3D em movimento", en: "Moving 3D scene" }, "Diálogo"],
            [{ pt: "Tela parada no scroll", en: "Pinned screen on scroll" }, "agentes.chat"],
            [{ pt: "Números que contam", en: "Counting numbers" }, "Himetrica"],
            [{ pt: "Catálogo em scroll", en: "Scrolling catalog" }, "A24"],
            [{ pt: "Pilha em profundidade", en: "Stack in depth" }, "Unveil"],
          ],
        },
      },
      {
        label: { pt: "Etapa 3 · Rascunho", en: "Step 3 · Draft" },
        title: { pt: "Decidir rolando, antes do código", en: "Deciding by scrolling, before the code" },
        text: {
          pt: "Cada página nasceu como um rascunho navegável: paleta, logo e animações testados rolando a página, não olhando um print.",
          en: "Every page started as a draft you could scroll: palette, logo and motion tested on the page itself, not on a screenshot.",
        },
        file: "rascunho.html",
        pane: { kind: "swatches" },
      },
      {
        label: { pt: "Etapa 4 · Página por página", en: "Step 4 · Page by page" },
        title: { pt: "Home, Cases, Portfólio e Contato", en: "Home, Cases, Portfolio and Contact" },
        text: {
          pt: "Cada página com um efeito próprio, aplicada no site só depois de aprovada no rascunho.",
          en: "Each page has its own effect, and went into the site only after its draft was approved.",
        },
        file: "src/pages",
        pane: { kind: "minis", srcs: ["/lab/site-home.webp", "/lab/site-cases.webp", "/lab/site-portfolio.webp", "/lab/site-contato.webp"] },
      },
      {
        label: { pt: "Resultado", en: "Result" },
        title: { pt: "Você está nele", en: "You're on it" },
        text: {
          pt: "React e TypeScript, com animações em GSAP e scroll suave. A IA escreve código comigo, eu decido o que fica.",
          en: "React and TypeScript, with GSAP motion and smooth scrolling. AI writes code with me; I decide what stays.",
        },
        file: "src/pages/Index.tsx",
        pane: {
          kind: "code",
          lines: ['const palette = "violeta";', 'const logo = "> byed|Studio";', "export default function Home() {", "  return <Hero />;", "}"],
          chips: ["React", "TypeScript", "GSAP", "Lenis", "Tailwind", "Claude Code"],
        },
      },
    ],
  },
];
