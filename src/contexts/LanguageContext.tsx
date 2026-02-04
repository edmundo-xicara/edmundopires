import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    "nav.home": "Home",
    "nav.cases": "Cases",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.portfolio": "Portfólio",
    "nav.contact": "Contato",
    
    // Hero
    "hero.title": "Youtube Manager",
    "hero.description": "Gestão, pesquisa e produção para canais e criadores de conteúdo de grande escala.",
    "hero.cta.cases": "Ver cases",
    "hero.cta.contact": "Falar comigo",
    
    // Services
    "services.title": "O que eu faço",
    "services.description": "Atuação como Youtube Manager no TinocandoTV, um canal com mais de 3 milhões de inscritos.",
    "services.project.title": "Gestão de Projetos e Calendário Editorial",
    "services.project.description": "Organização completa da produção, desde o planejamento até a entrega final. Criação e manutenção de calendários editoriais, definição de prazos e coordenação de equipes para garantir consistência e qualidade nas publicações.",
    "services.research.title": "Chefia de Pesquisa e Revisão de Conteúdo",
    "services.research.description": "Liderança do processo de pesquisa histórica e cultural, garantindo precisão e profundidade nos conteúdos. Revisão crítica de roteiros e materiais, assegurando coerência narrativa e rigor factual.",
    "services.curation.title": "Pesquisa e Curadoria de Imagens para Vídeos",
    "services.curation.description": "Seleção criteriosa de imagens, pinturas e materiais visuais que complementam a narrativa. Pesquisa em acervos históricos e bancos de imagens para encontrar recursos visuais de alta qualidade.",
    
    // Credibility
    "credibility.title": "Por que me escolher",
    "credibility.experience.number": "5+",
    "credibility.experience.label": "Anos de experiência",
    "credibility.subscribers.number": "3M+",
    "credibility.subscribers.label": "Inscritos gerenciados",
    "credibility.projects.number": "100+",
    "credibility.projects.label": "Projetos entregues",
    
    // Featured Cases
    "cases.featured.title": "Cases em destaque",
    "cases.featured.description": "Principais projetos nos quais trabalhei, servindo como exemplos práticos da qualidade do meu trabalho como gestor, produtor e pesquisador.",
    "cases.featured.viewAll": "Ver todos os cases",
    "cases.featured.viewCase": "Ver case completo",
    
    // Cases Page
    "cases.title": "Cases",
    "cases.description": "Principais projetos nos quais trabalhei, servindo como exemplos práticos da qualidade do meu trabalho como gestor, produtor e pesquisador.",
    "cases.viewCase": "Ver case",
    "cases.backToCases": "Voltar para cases",
    
    // CTA
    "cta.title": "Vamos construir algo juntos?",
    "cta.description": "Conteúdo complexo não escala sem organização. Se você precisa estruturar pesquisa, produção e qualidade, vamos conversar.",
    "cta.button": "Entrar em contato",
    
    // Footer
    "footer.rights": "Todos os direitos reservados.",
    
    // About
    "about.title": "Sobre",
    
    // Contact
    "contact.title": "Contato",
    "contact.description": "Se você trabalha com conteúdo complexo e precisa organizar pesquisa, produção e qualidade — entre em contato.",
    
    // Misc
    "checkOnInstagram": "Confira no Instagram",
    "checkOnYoutube": "Confira o vídeo no Youtube",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.cases": "Cases",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Youtube Manager",
    "hero.description": "Management, research, and production for large-scale channels and content creators.",
    "hero.cta.cases": "View cases",
    "hero.cta.contact": "Talk to me",
    
    // Services
    "services.title": "What I do",
    "services.description": "Working as Youtube Manager at TinocandoTV, a channel with over 3 million subscribers.",
    "services.project.title": "Project Management and Editorial Calendar",
    "services.project.description": "Complete production organization, from planning to final delivery. Creation and maintenance of editorial calendars, deadline setting, and team coordination to ensure consistency and quality in publications.",
    "services.research.title": "Research Leadership and Content Review",
    "services.research.description": "Leading the historical and cultural research process, ensuring accuracy and depth in content. Critical review of scripts and materials, ensuring narrative coherence and factual rigor.",
    "services.curation.title": "Image Research and Curation for Videos",
    "services.curation.description": "Careful selection of images, paintings, and visual materials that complement the narrative. Research in historical archives and image banks to find high-quality visual resources.",
    
    // Credibility
    "credibility.title": "Why choose me",
    "credibility.experience.number": "5+",
    "credibility.experience.label": "Years of experience",
    "credibility.subscribers.number": "3M+",
    "credibility.subscribers.label": "Subscribers managed",
    "credibility.projects.number": "100+",
    "credibility.projects.label": "Projects delivered",
    
    // Featured Cases
    "cases.featured.title": "Featured Cases",
    "cases.featured.description": "Main projects I worked on, serving as practical examples of the quality of my work as manager, producer, and researcher.",
    "cases.featured.viewAll": "View all cases",
    "cases.featured.viewCase": "View full case",
    
    // Cases Page
    "cases.title": "Cases",
    "cases.description": "Main projects I worked on, serving as practical examples of the quality of my work as manager, producer, and researcher.",
    "cases.viewCase": "View case",
    "cases.backToCases": "Back to cases",
    
    // CTA
    "cta.title": "Let's build something together?",
    "cta.description": "Complex content doesn't scale without organization. If you need to structure research, production, and quality, let's talk.",
    "cta.button": "Get in touch",
    
    // Footer
    "footer.rights": "All rights reserved.",
    
    // About
    "about.title": "About",
    
    // Contact
    "contact.title": "Contact",
    "contact.description": "If you work with complex content and need to organize research, production, and quality — get in touch.",
    
    // Misc
    "checkOnInstagram": "Check on Instagram",
    "checkOnYoutube": "Watch the video on Youtube",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "pt";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
