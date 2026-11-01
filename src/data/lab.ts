// Lab projects — the tech side of the portfolio.
// Add a new object to `labProjects` for every automation, site or tool you ship.
// Write each one as problem → what you built → result; small projects read well this way.

type Localized = { pt: string; en: string };

export interface LabProject {
  title: Localized;
  status: "live" | "wip";
  year: string;
  stack: string[];
  problem: Localized;
  built: Localized;
  result?: Localized;
  href?: string;
}

export const labProjects: LabProject[] = [
  {
    title: { pt: "Este site", en: "This website" },
    status: "live",
    year: "2026",
    stack: ["React", "TypeScript", "GSAP", "Tailwind"],
    problem: {
      pt: "O portfólio antigo vendia um trabalho que eu não faço mais e tinha cara de template.",
      en: "My old portfolio sold work I no longer do, and it looked like a template.",
    },
    built: {
      pt: "Redesenhei do zero com uma identidade inspirada em sinal de TV: barras de cor na abertura, tipografia variável que reage ao cursor e animações com GSAP.",
      en: "I redesigned it from scratch around a broadcast identity: color bars on load, variable type that reacts to the cursor, and GSAP motion.",
    },
    result: {
      pt: "Um portfólio que junta as duas frentes do meu trabalho e serve de primeira peça do Lab.",
      en: "A portfolio that brings both sides of my work together and serves as the Lab's first piece.",
    },
  },
  {
    // TODO(Edmundo): replace with the real details of the production company's website.
    title: { pt: "Site da produtora", en: "Production company website" },
    status: "wip",
    year: "2026",
    stack: [],
    problem: {
      pt: "A produtora precisava de um site que mostrasse o trabalho da equipe.",
      en: "The production company needed a website that shows the team's work.",
    },
    built: {
      pt: "Estou desenvolvendo o site institucional, do planejamento à publicação.",
      en: "I'm building the company website, from planning to launch.",
    },
  },
  {
    // TODO(Edmundo): split into one entry per automation, with the tools used and time saved.
    title: { pt: "Automações de produção", en: "Production automations" },
    status: "wip",
    year: "2026",
    stack: [],
    problem: {
      pt: "Tarefas repetitivas tomavam tempo da equipe que deveria ir para a produção.",
      en: "Repetitive tasks were eating time the team should spend on production.",
    },
    built: {
      pt: "Automações que cuidam dessas tarefas no dia a dia da produtora.",
      en: "Automations that handle those tasks in the company's day-to-day.",
    },
  },
];
