import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header / Nav
    "nav.home": "Home",
    "nav.cases": "Cases",
    "nav.about": "Sobre Mim",
    "nav.services": "Serviços",
    "nav.portfolio": "Portfólio",
    "nav.contact": "Contato",
    "nav.menu": "Menu",

    // Hero
    "hero.title": "Youtube Manager",
    "hero.description": "Gestão, pesquisa e produção para canais e criadores de conteúdo de grande escala.",
    "hero.cta.cases": "Portfólio",
    "services.btn": "Serviços",
    "hero.cta.contact": "Falar comigo",

    // Services (home)
    "services.title": "O que eu faço",
    "services.intro": "Sou chefe de pesquisa, produtor e um dos gestores do TinocandoTV. Organizo todos os projetos e calendário do canal, lidero a equipe de pesquisa, reviso todo o material antes da roteirização e realizo a pesquisa de imagens de todos os vídeos, garantindo que o canal consiga manter um ritmo incessante de vídeos dentro de um alto padrão de qualidade.",
    "services.item1.title": "Gestão de projetos e calendário editorial",
    "services.item1.desc": "Planejo e organizo todos os projetos do canal, definindo prioridades, prazos e dependências. Como um dos gestores, coordeno a comunicação entre diferentes equipes para manter o bom funcionamento do TinocandoTV, integrando todas as áreas de produção, desde ideia, pesquisa e roteiro até revisão, roteirização de imagens e edição. Além disso, gerencio também o calendário do canal, ajudando a organizar e planejar os próximos vídeos que serão postados e próximas ideias na fila de produção.",
    "services.item2.title": "Chefia de pesquisa e revisão de conteúdo",
    "services.item2.desc": "Além de produzir pesquisas direcionadas para a roteirização de vídeos dentro de um canal do Youtube, também coordeno a equipe de pesquisadores do TinocandoTV, onde estabeleço padrões de qualidade e reviso todo o material antes da roteirização, assegurando credibilidade, clareza e coerência narrativa. Afinal, há um abismo entre uma pesquisa acadêmica e uma pesquisa escrita para uma produção audiovisual, funcionando como um \"pré-roteiro\".",
    "services.item3.title": "Pesquisa e curadoria de imagens para vídeos",
    "services.item3.desc": "Depois do roteiro e antes da edição do vídeo, realizo a pesquisa e seleção de imagens que irão entrar no produto final e sustentar a narrativa visual dos vídeos. Isso requer desde uma seleção cuidadosa de pinturas e imagens históricas, até o estudo de mapas e mudanças de fronteira de acordo com cada período, sem falar também nos casos nos quais estudo o tema para descrever para o editor uma representação visual coerente para um conceito abstrato ou impossível de visualizar, muito comum em vídeos de ciência ou filosofia.",

    // Credibility
    "credibility.title": "Experiência profissional",
    "credibility.videos.number": "80+",
    "credibility.videos.label": "Vídeos produzidos",
    "credibility.videos.desc": "Participei ativamente na pesquisa, produção e revisão de mais de 80 vídeos no canal do Youtube do TinocandoTV, muitos dos quais ultrapassaram 1 milhão de visualizações. Nesses anos de experiência, pude aprender muito sobre a produção audiovisual dentro de um canal no Youtube, além de ter reunido um grande acervo profissional de pesquisas que cobrem basicamente qualquer período histórico.",
    "credibility.growth.label": "Crescimento acompanhado",
    "credibility.growth.desc": "Desde que entrei no canal, acompanhei o crescimento do TinocandoTV desde 1 milhão até 2,6 milhões de inscritos, o que me deu ampla experiência na gestão e produção de um canal de larga escala em crescimento.",
    "credibility.brands.number": "Grandes marcas",
    "credibility.brands.label": "Parcerias institucionais",
    "credibility.brands.prefix": "Ao longo de todos os vídeos que produzi, lidei diretamente com o marketing de grandes marcas do mercado, sendo os principais exemplos:",
    "credibility.brands.suffix": "entre outros.",

    // Featured Cases (home)
    "featured.title": "Cases em destaque",
    "featured.desc": "Principais projetos nos quais trabalhei, servindo como exemplos práticos da qualidade do meu trabalho como gestor, produtor e pesquisador.",
    "featured.viewAll": "Ver todos os cases",
    "featured.viewCase": "Ver case completo",

    // CTA Home
    "cta.home.title": "Vamos construir algo juntos?",
    "cta.home.desc": "Entre em contato para pesquisa, roteiro e produção de vídeos de alta qualidade.",
    "cta.home.button": "Entrar em contato",

    // Cases page
    "casesPage.title": "Cases",
    "casesPage.desc": "Principais projetos nos quais trabalhei, servindo como exemplos práticos da qualidade do meu trabalho como gestor, produtor e pesquisador.",
    "casesPage.viewCase": "Ver case",
    "casesPage.back": "Voltar para cases",
    "casesPage.others": "Outros cases",

    // Cases data
    "case.nobel.title": "Entrevistas de especialistas para Prêmio Nobel 2025",
    "case.nobel.shortTitle": "Prêmio Nobel 2025",
    "case.nobel.client": "TinocandoTV",
    "case.nobel.category": "Produção e Entrevistas",
    "case.nobel.desc": "Em 2025, o TinocandoTV produziu um vídeo especial explicando os vencedores do Prêmio Nobel daquele ano. Fui responsável por buscar e entrar em contato com a maior parte dos especialistas convidados, além de estruturar as perguntas e conduzir as entrevistas com cada um deles.",
    "case.grecia.title": "Documentário Grécia Antiga",
    "case.grecia.client": "TinocandoTV",
    "case.grecia.category": "Documentário",
    "case.grecia.desc": "O maior documentário já produzido pelo canal. Atuei na ampliação do roteiro, complementando a narrativa do vídeo com uma pesquisa histórica adicional, além de conduzir cerca de 70% da pesquisa de imagens do documentário final.",
    "case.olimpiadas.title": "Campanha Olimpíadas de 2024",
    "case.olimpiadas.shortTitle": "Olimpíadas de 2024",
    "case.olimpiadas.client": "Globo Esporte",
    "case.olimpiadas.category": "Making Of Institucional",
    "case.olimpiadas.desc": "Tive a honra de participar dessa campanha juntamente com o Tinôco, dono do canal. Além de auxiliar em todo o planejamento da campanha dentro do TinocandoTV, fiquei responsável por toda a captação do making of durante as gravações no Rio de Janeiro, tendo a experiência de como funciona os bastidores de uma produção profissional de grande porte como a do Globo Esporte.",
    "case.shogun.title": "Parceria Disney+ — Shōgun",
    "case.shogun.client": "Disney+",
    "case.shogun.category": "Parceria Publicitária",
    "case.shogun.desc": "Tive a oportunidade de participar ativamente da parceria entre TinocandoTV e Disney+ para a divulgação da séria Shōgun. Fiquei responsável pela pesquisa dos vídeos, tanto como gestor e revisor, quanto como pesquisador. Também revisei historicamente o vídeo final, garantindo a coerência visual com a historiografia conhecida. Além disso, participei ativamente na escrita da inserção publicitária no roteiro final do vídeo.",
    "case.revista.title": "Revista digital - Instagram",
    "case.revista.client": "TinocandoTV",
    "case.revista.category": "Design Editorial",
    "case.revista.desc": "Durante um período específico, eu e o Tinôco decidimos testar um projeto novo no Instagram do TinocandoTV: a criação de revistas digitais com notícias socioculturais e, em alguns casos, políticas. Fui responsável pela criação da maior parte das revistas privadas destinadas aos assinantes.",

    // Section labels (case pages)
    "case.section.context": "Contexto",
    "case.section.role": "Meu papel",
    "case.section.process": "Processo",
    "case.section.result": "Resultado",

    // Case Grécia
    "case.grecia.subtitle": "O maior documentário já produzido pelo canal.",
    "case.grecia.contextText": "O documentário sobre a Grécia Antiga representou o projeto mais ambicioso do TinocandoTV até então. O objetivo era criar um conteúdo de longa duração que elevasse o padrão de engajamento e a qualidade visual de produção num nível sem precedentes no canal.",
    "case.grecia.roleTitle": "Meu papel como produtor e pesquisador",
    "case.grecia.roleText": "Atuei diretamente na ampliação da narrativa, complementando o roteiro inicial com uma pesquisa aprofundada sobre o período. Além de ter sido responsável por conduzir cerca de 70% da pesquisa de imagens do vídeo final, garantindo que cada elemento visual estivesse alinhado com a precisão histórica exigida pelo tema. O maior desafio foi, sem dúvidas, o trabalho nos mapas. Fiz uma extensa pesquisa sobre as diversas mudanças territoriais ocorridas ao longo de toda a história narrada no vídeo para orientar o ilustrador e editores na criação de mapas historicamente precisos e coerentes.",
    "case.grecia.process1": "Revisão e complementação do roteiro com foco em precisão historiográfica",
    "case.grecia.process2": "Curadoria extensiva de fontes visuais (obras de arte, reconstruções, mapas históricos)",
    "case.grecia.process3": "Checagem cruzada de informações com fontes acadêmicas primárias",
    "case.grecia.process4": "Organização do material para facilitar o trabalho de edição",
    "case.grecia.watchVideo": "Ver documentário no YouTube",
    "case.grecia.resultText": "O documentário consolidou-se como referência de conteúdo histórico de longa duração no YouTube brasileiro, demonstrando que é possível manter engajamento com produção rigorosa. O projeto estabeleceu um novo padrão de qualidade para o canal e serviu como modelo para produções subsequentes.",

    // Case Olimpíadas
    "case.olimpiadas.subtitle": "Captação do making of e bastidores das gravações no Rio de Janeiro.",
    "case.olimpiadas.contextPre": "Durante a campanha das Olimpíadas de 2024, o Globo Esporte convidou o Tinôco, dono do canal, para realizar",
    "case.olimpiadas.contextLink": "uma série de gravações no Rio de Janeiro",
    "case.olimpiadas.contextPost": "para produção de conteúdo institucional.",
    "case.olimpiadas.roleTitle": "Meu papel como produtor",
    "case.olimpiadas.roleText": "Minha demanda dentro da equipe TinocandoTV foi auxiliar o Tinôco na revisão do roteiro de gravação e documentar os bastidores dessas gravações, tendo a oportunidade de ver de perto a complexidade de uma equipe de produção de grande porte como a do Globo Esporte.",
    "case.olimpiadas.process1": "Planejamento da cobertura com foco em momentos-chave da produção",
    "case.olimpiadas.process2": "Captação com olhar narrativo, priorizando bastidores e interações espontâneas",
    "case.olimpiadas.process3": "Documentação visual que contextualiza a escala e profissionalismo da operação",
    "case.olimpiadas.resultText": "O material capturado serviu como base para peças de comunicação interna do TinocandoTV, servindo como um registro fiel para o nosso público dessa campanha tão importante para a história do canal.",

    // Case Shogun
    "case.shogun.subtitle": "Gestão da pesquisa histórica, revisão do produto final e participação direta na escrita do roteiro publicitário.",
    "case.shogun.contextText": "A parceria com a Disney+ para a série Shōgun exigiu um equilíbrio delicado: produzir conteúdo que atendesse aos objetivos de marketing da plataforma enquanto mantinha o rigor histórico que caracteriza o trabalho do TinocandoTV. O desafio era integrar duas demandas aparentemente conflitantes — promoção e precisão — em uma narrativa coesa.",
    "case.shogun.roleTitle": "Meu papel como produtor e pesquisador",
    "case.shogun.roleText1Pre": "Durante a campanha, produzimos dois vídeos:",
    "case.shogun.roleText1Link1": "SAMURAIS: os MAIORES GUERREIROS do JAPÃO",
    "case.shogun.roleText1Mid": "e",
    "case.shogun.roleText1Link2": "NINJAS: REALIDADE ou MITO?",
    "case.shogun.roleText1Post": ". No primeiro, atuei como chefe de pesquisa e revisor para garantir a coerência na narrativa e o padrão de qualidade que estamos acostumados no canal. Já no segundo vídeo, atuei diretamente no processo de pesquisa, o que me exigiu uma cuidadosa curadoria de fontes graças à natureza do tema, com uma enorme variedade de informações falsas espalhadas pela internet.",
    "case.shogun.roleText2": "Além disso, trabalhei na pesquisa de imagens dos dois vídeos e revisei ambos para garantir a coerência histórica da forma como as imagens são mostradas e principalmente os letterings do vídeo, já que trabalhamos com a língua japonesa, traduzindo nomes de equipamentos e armas do Japão Feudal.",
    "case.shogun.roleText3": "Por fim, participei ativamente no desenvolvimento do roteiro publicitário. Fizemos uma seleção das imagens fornecidas pela Disney+ e conseguimos desenvolver uma integração publicitária de acordo com o briefing fornecido, aprovada pela marca.",
    "case.shogun.process1": "Pesquisa aprofundada sobre o Japão feudal e o contexto histórico da série",
    "case.shogun.process2": "Identificação de pontos de conexão entre a narrativa histórica e os elementos da série",
    "case.shogun.process3": "Desenvolvimento de roteiro que integra contexto histórico e chamadas promocionais",
    "case.shogun.process4": "Revisão editorial para garantir consistência e precisão",
    "case.shogun.resultText": "Foi um projeto de grandes proporções que conseguimos realizar em tempo hábil para a promoção de lançamento da série, demonstrando nossa capacidade como uma equipe bem coordenada de atender demandas comerciais sem abrir mão de qualidade.",

    // Case Revista
    "case.revista.subtitle": "Revistas diárias no Instagram.",
    "case.revista.contextText": "Durante um período específico, eu e o Tinôco decidimos testar um projeto novo no Instagram do TinocandoTV: a criação de revistas digitais com notícias socioculturais e, em alguns casos, políticas. Parte dessas revistas foi publicada gratuitamente no Instagram, enquanto outras ficaram disponíveis exclusivamente para assinantes, dentro de um sistema de membros. O objetivo era experimentar um formato editorial diferente, mais aprofundado e visualmente organizado, adaptado ao consumo rápido da plataforma.",
    "case.revista.roleTitle": "Meu papel como designer",
    "case.revista.roleText1": "Fui responsável pela criação da maior parte das revistas privadas destinadas aos assinantes, atuando desde a definição da estrutura de cada edição, incluindo escrita dos textos e número de slides, até o design completo das páginas no Figma.",
    "case.revista.roleText2": "Ao longo do projeto, buscamos manter um padrão visual consistente, com layouts leves e uso recorrente de pinturas ou imagens históricas texturizadas, sempre escolhidas para dialogar com o conteúdo e reforçar o tema abordado em cada revista.",
    "case.revista.process1": "Definição do tema e recorte editorial",
    "case.revista.process2": "Estruturação da revista (número de slides e textos)",
    "case.revista.process3": "Pesquisa e seleção de imagens",
    "case.revista.process4": "Desenvolvimento do design página a página",
    "case.revista.checkInstagram": "Confira no Instagram",

    // Case Nobel
    "case.nobel.subtitle": "Entrevistas exclusivas com especialistas para cada categoria do Nobel de 2025.",
    "case.nobel.contextText1": "Em 2025, o TinocandoTV produziu um vídeo especial explicando os vencedores do Prêmio Nobel daquele ano. Para aprofundar o conteúdo, convidamos especialistas de diferentes áreas para comentar cada categoria do prêmio.",
    "case.nobel.contextText2": "Participaram do projeto uma geneticista, um químico, um físico e um economista, além de especialistas que ajudaram a contextualizar o Prêmio Nobel da Paz, considerando sua natureza multilateral. Para essa categoria, contamos com a colaboração de professores de geografia e geopolítica, um especialista em relações internacionais e dois historiadores, cada um contribuindo com análises complementares sobre o prêmio daquele ano.",
    "case.nobel.roleTitle": "Meu papel como produtor e entrevistador",
    "case.nobel.roleText1Pre": "Fui responsável por buscar e entrar em contato com a maior parte dos especialistas convidados, além de estruturar as perguntas e conduzir as entrevistas com cada um deles. Todo o material foi registrado no",
    "case.nobel.roleText1Link": "canal de cortes do TinocandoTV",
    "case.nobel.roleText1Post": ", um projeto novo dentro do canal, do qual também sou responsável.",
    "case.nobel.roleText2": "Após a realização das entrevistas, selecionei e filtrei os momentos-chave de cada conversa para construir um roteiro coeso, combinando as explicações dos especialistas com trechos explicativos próprios, falados pelo Tinôco no vídeo e apresentados de forma mais clara, direta e acessível ao público.",
    "case.nobel.process1": "Identificação e contato com especialistas de cada área",
    "case.nobel.process2": "Estudo prévio sobre os temas e categorias do prêmio",
    "case.nobel.process3": "Desenvolvimento das perguntas para as entrevistas",
    "case.nobel.process4": "Realização das entrevistas",
    "case.nobel.process5": "Seleção e filtragem dos momentos-chave para a construção do roteiro",
    "case.nobel.resultText": "O projeto resultou em um vídeo com mais de uma hora de duração, no qual explicamos a trajetória de Alfred Nobel, criador do prêmio, e apresentamos as categorias do Nobel de 2025, seus vencedores e as principais contribuições de cada um para suas respectivas áreas.",
    "case.nobel.watchVideo": "Confira o vídeo no Youtube",
    "case.nobel.videoAlt": "Vídeo Prêmio Nobel 2025",

    // Sobre
    "about.title": "Sobre mim",
    "about.p1": "Sou produtor, chefe de pesquisa e gestor de conteúdo no TinocandoTV.",
    "about.p2Pre": "Meu principal trabalho dentro do canal é o de",
    "about.p2Em": "Youtube Manager",
    "about.p2Post": ", isso significa que atuo basicamente como o coordenador do TinocandoTV, organizando todos os projetos do canal.",
    "about.p3": "Sou eu quem organizo, juntamente com o Tinôco, o calendário completo do canal, decidindo os vídeos que serão postados nos próximos meses e as pessoas responsáveis por cada um. Ou seja, fico responsável por organizar qual vídeo será postado em qual data e quem irá trabalhar nele, desde a pesquisa até a edição final.",
    "about.p4": "E essa é uma palavra chave aqui: \"pesquisa\". Isso porque, como chefe de pesquisa do canal, sou eu quem fica responsável por coordenar a equipe de pesquisa do TinocandoTV, orientando sobre o cada tema e revisando a pesquisa final para garantir a entrega de uma pesquisa correta, coerente e, acima de tudo, otimizada para servir de base para a escrita do roteiro, que fica a cargo do Tinôco.",
    "about.p5": "Depois disso, participo da revisão de cada roteiro juntamente com os especialistas do canal e sou eu também quem desenvolve a pesquisa de imagens de cada vídeo, selecionando as pinturas, mapas e representações visuais que serão usadas pelos editores no vídeo final.",
    "about.p6": "E para finalizar, depois da edição, reviso cada um dos vídeos para garantir que as imagens e, principalmente, mapas selecionados foram apresentados no vídeo de forma historicamente correta.",
    "about.p7": "Agora já na hora da postagem, como produtor, sou eu quem organiza todos os detalhes que rodeiam os vídeos, como os nomes dos membros do canal e dos apoiadores que aparecem no final de todo vídeo, ou também os nomes da Ficha Técnica, garantindo que cada integrante da equipe receba o devido reconhecimento.",
    "about.p8": "Dito isso, pode-se dizer que sou um grande \"faz-tudo\" de um canal no Youtube e é justamente por isso que reuni uma ampla experiência trabalhando em um canal não só de grande porte, mas também em crescimento.",
    "about.contactBtn": "Entrar em contato",
    "about.skillsTitle": "Competências",
    "about.skill1": "Pesquisa histórica e checagem de conteúdo",
    "about.skill2": "Escrita e revisão de roteiros",
    "about.skill3": "Gestão de projetos e pipeline de produção",
    "about.skill4": "Planejamento editorial e organização de formatos",
    "about.skill5": "Pesquisa e curadoria de imagens",
    "about.skill6": "Desenvolvimento de Mídia Kits",

    // Serviços
    "servicos.title": "Serviços",
    "servicos.intro": "Estou aberto a serviços de consultoria, freelas, pesquisa/roteiro sob demanda e também desenvolvimento de Mídia Kits.",
    "servicos.consult.title": "Consultoria",
    "servicos.consult.desc": "Consultoria especializada para canais no Youtube. Cada canal do Youtube tem suas especificidades, seu público-alvo e a própria identidade do criador intrinsicamente ligada a identidade do canal. Como alguém com ampla experiência na gestão de um canal no Youtube de grande porte, posso te ajudar sobre estratégias de crescimento específicas para você e conhecimentos gerais sobre como pensar como um gestor do seu próprio canal.",
    "servicos.research.title": "Pesquisa",
    "servicos.research.desc": "Realizo pesquisa aplicada à produção audiovisual, com foco em recorte temático, cronologia, checagem e adaptação do conteúdo para formatos claros e consistentes. Tenho experiência tanto na execução da pesquisa quanto na coordenação de equipes de pesquisadores.",
    "servicos.script.title": "Roteiro",
    "servicos.script.desc": "Além da pesquisa, tenho experiência na escrita de roteiro também aplicado à produção audiovisual, selecionando os pontos-chave de qualquer tema para conectá-los numa narrativa coerente e imersiva para o público, já pensando em como ela pode conversar com a edição.",
    "servicos.kit.title": "Mídia Kit",
    "servicos.kit.desc": "Trabalho também com a produção de Mídia Kits, que é basicamente um currículo para influenciadores e imprescindível para qualquer criador de conteúdo que pensa em fazer parcerias com marcas, as famosas \"publis\".",
    "servicos.images.title": "Pesquisa e Curadoria de Imagens",
    "servicos.images.desc": "Pesquisa e curadoria de imagens que sustentam a narrativa visual dos vídeos, seja com pinturas, filmagens, notícias da época ou até representações visuais abstratas. Em casos de vídeos históricos, realizo uma pesquisa extensa sobre os mapas e territórios de cada época abordada no vídeo para evitar imprecisões.",
    "servicos.cta.title": "Tem um projeto em mente?",
    "servicos.cta.desc": "Entre em contato para pesquisa, roteiro e produção de vídeos de alta qualidade.",
    "servicos.cta.button": "Entrar em contato",

    // Contato
    "contato.title": "Vamos conversar",
    "contato.desc": "Entre em contato para pesquisa, roteiro e produção de vídeos de alta qualidade.",
    "contato.responseTime": "Respondo a todas as mensagens em até 48 horas úteis.",
    "contato.email": "Email",
    "contato.phone": "Telefone",
    "contato.emailCopied": "E-mail copiado!",
    "contato.phoneCopied": "Número copiado!",
    "contato.copied": "Copiado!",
    "contato.linkedin": "LinkedIn",
    "contato.linkedinDesc": "Conecte-se comigo",

    // Portfólio / Mídia
    "portfolio.research.title": "Pesquisas",
    "portfolio.research.desc": "Vídeos que melhor representam meu trabalho em pesquisa dentro do TinocandoTV.",
    "portfolio.research.linkBtn": "Link para pesquisa",
    "portfolio.scripts.title": "Roteiros",
    "portfolio.scripts.desc": "Exemplos de roteiros feitos por mim dentro do TinocandoTV.",
    "portfolio.scripts.linkBtn": "Link para roteiro",
    "portfolio.script1.title": "Artemis II",
    "portfolio.script2.title": "Hitler no Nobel",
    "portfolio.script3.title": "Túmulo de Alexandre, o Grande",
    "portfolio.scriptModels.title": "Modelos de Roteiros",
    "portfolio.scriptModels.desc": "Modelos de roteiros que montei me baseando nas principais pesquisas que eu mesmo escrevi.",
    "portfolio.scriptModel1.title": "Operação Barbarossa — A Guerra que Hitler perdeu",
    "portfolio.scriptModel1.desc": "\"Guerra que Hitler perdeu\" é um documentário completo que conta como a arrogância ideológica nazista subestimou um território, um clima e um povo — e como esse erro custou dezenas de milhões de vidas.",
    "portfolio.scriptModel2.title": "A Crise de 1929 — O Crash que Mudou o Mundo",
    "portfolio.scriptModel2.desc": "A história completa de como a maior bolha financeira da história foi inflada e o que aconteceu quando ela estourou.",
    "portfolio.scriptModel3.title": "O Muro de Berlim — O Muro que Dividiu o Mundo",
    "portfolio.scriptModel3.desc": "A narrativa de ponta a ponta desde a construção até a queda do Muro de Berlim, o símbolo mais poderoso da Guerra Fria.",
    "portfolio.scriptModel4.title": "O Deus de Spinoza",
    "portfolio.scriptModel4.desc": "Aqui eu exploro a ideia radical que custou a Spinoza tudo: a de que Deus não está acima do mundo — Ele é o mundo.",
    "portfolio.publis.title": "Publis",
    "portfolio.publis.desc": "Principais marcas com quem já trabalhei dentro do TinocandoTV.",
    "portfolio.publis.seeCase": "Veja mais no case",
    "portfolio.publis.seeVideo": "Confira o vídeo",
    "portfolio.others.title": "Outros exemplos",
    "portfolio.kits.title": "Mídia Kits",
    "portfolio.kits.desc": "Alguns dos Mídia Kits que já desenvolvi tanto para canais grandes quanto para influenciadores menores.",
    "portfolio.kits.seeFull": "Ver Mídia Kit completo",
    "portfolio.video1.title": "QUEDA de HITLER",
    "portfolio.video1.desc": "Além do enorme desafio da pesquisa histórica em si, esse vídeo foi provavelmente meu maior desafio em questão de mapas, graças as diversas mudanças de territórios, exigindo um trabalho minucioso de pesquisa para representarmos visualmente para o público como, de fato, Adolf Hitler perdeu a guerra.",
    "portfolio.video2.title": "CRISE de 1929",
    "portfolio.video2.desc": "Nesse vídeo, nós cobrimos a história inteira, desde o fim da Primeira Guerra Mundial e a ascensão dos EUA até a quebra de uma das maiores bolhas econômicas da história e a eventual ascensão dos regimes totalitários na Europa durante a Grande Depressão.",
    "portfolio.video3.title": "MURO de BERLIM",
    "portfolio.video3.desc": "Esse é mais um exemplo de uma pesquisa extremamente completa que cobre toda a história da construção e queda do Muro de Berlim, com imagens de reportagens e filmagens da época.",
    "portfolio.video4.title": "DEUS de SPINOZA",
    "portfolio.video4.desc": "Nesse caso, além do desafio da pesquisa histórica, houve também o desafio da pesquisa filosófica, na qual foi necessário interpretar a filosofia de Spinoza para explicá-la de maneira simples e didática para um público leigo no assunto.",
    "portfolio.publi.disney.desc": "Trabalhei na seleção das imagens da série divulgada, fornecidas pela equipe da Disney+, e também colaborei na escrita do roteiro publicitário de acordo com o briefing também fornecido pela marca.",
    "portfolio.publi.globo.desc": "Acompanhei o Tinôco numa série de gravações no Rio de Janeiro para divulgação das Olimpíadas de 2024 pela equipe do Globo Esporte.",
    "portfolio.publi.opera.desc": "Escrevi o roteiro publicitário de acordo com o briefing fornecido pelo Opera e produzi todas as gravações apresentadas no trecho da publi no vídeo.",

    // Footer
    "footer.tagline": "Gestão de projetos, pesquisa, roteiro e produção audiovisual em larga escala.",
    "portfolio.watchOnYoutube": "Ver no YouTube",
    "portfolio.magazines.title": "Instagram Magazines",
    "portfolio.magazines.desc": "Revistas digitais criadas para o Instagram do TinocandoTV.",
    "footer.navTitle": "Navegação",
    "footer.contactTitle": "Contato",
    "footer.copied": "Copiado!",
    "footer.rights": "Todos os direitos reservados.",

    // 404
    "notFound.message": "Oops! Página não encontrada",
    "notFound.back": "Voltar para Home",
  },
  en: {
    // Header / Nav
    "nav.home": "Home",
    "nav.cases": "Cases",
    "nav.about": "About Me",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "nav.menu": "Menu",

    // Hero
    "hero.title": "Youtube Manager",
    "hero.description": "Management, research, and production for large-scale channels and content creators.",
    "hero.cta.cases": "Portfolio",
    "services.btn": "Services",
    "hero.cta.contact": "Talk to me",

    // Services (home)
    "services.title": "What I do",
    "services.intro": "I'm head of research, producer, and one of the managers at TinocandoTV. I organize all the channel's projects and calendar, lead the research team, review all material before scripting, and conduct image research for every video, ensuring the channel maintains a relentless publishing pace at a high quality standard.",
    "services.item1.title": "Project management and editorial calendar",
    "services.item1.desc": "I plan and organize all channel projects, defining priorities, deadlines, and dependencies. As one of the managers, I coordinate communication between different teams to keep TinocandoTV running smoothly, integrating all production areas — from idea, research, and script to review, image scripting, and editing. I also manage the channel's calendar, helping organize and plan the next videos to be published and upcoming ideas in the production queue.",
    "services.item2.title": "Research leadership and content review",
    "services.item2.desc": "Beyond producing research aimed at scripting YouTube videos, I also coordinate the TinocandoTV research team, where I set quality standards and review all material before scripting, ensuring credibility, clarity, and narrative coherence. After all, there's a wide gap between academic research and research written for audiovisual production, which functions as a \"pre-script\".",
    "services.item3.title": "Image research and curation for videos",
    "services.item3.desc": "After the script and before video editing, I conduct the research and selection of images that will appear in the final product and support the visual narrative. This requires careful selection of historical paintings and images, the study of maps and border changes for each period, and even researching topics to describe coherent visual representations of abstract or impossible-to-visualize concepts — common in science or philosophy videos.",

    // Credibility
    "credibility.title": "Professional experience",
    "credibility.videos.number": "80+",
    "credibility.videos.label": "Videos produced",
    "credibility.videos.desc": "I've actively participated in research, production, and review of more than 80 videos on the TinocandoTV YouTube channel, many of which surpassed 1 million views. Over these years of experience, I've learned a great deal about audiovisual production within a YouTube channel, while building a large professional archive of research covering virtually any historical period.",
    "credibility.growth.label": "Growth followed",
    "credibility.growth.desc": "Since joining the channel, I've followed TinocandoTV's growth from 1 million to 2.6 million subscribers, gaining broad experience in managing and producing for a large-scale, growing channel.",
    "credibility.brands.number": "Major brands",
    "credibility.brands.label": "Institutional partnerships",
    "credibility.brands.prefix": "Throughout all the videos I've produced, I've worked directly with the marketing of major market brands, including:",
    "credibility.brands.suffix": "among others.",

    // Featured Cases (home)
    "featured.title": "Featured cases",
    "featured.desc": "Main projects I worked on, serving as practical examples of the quality of my work as manager, producer, and researcher.",
    "featured.viewAll": "View all cases",
    "featured.viewCase": "View full case",

    // CTA Home
    "cta.home.title": "Shall we build something together?",
    "cta.home.desc": "Get in touch for research, scripting, and high-quality video production.",
    "cta.home.button": "Get in touch",

    // Cases page
    "casesPage.title": "Cases",
    "casesPage.desc": "Main projects I worked on, serving as practical examples of the quality of my work as manager, producer, and researcher.",
    "casesPage.viewCase": "View case",
    "casesPage.back": "Back to cases",
    "casesPage.others": "Other cases",

    // Cases data
    "case.nobel.title": "Expert interviews for the 2025 Nobel Prize",
    "case.nobel.shortTitle": "2025 Nobel Prize",
    "case.nobel.client": "TinocandoTV",
    "case.nobel.category": "Production and Interviews",
    "case.nobel.desc": "In 2025, TinocandoTV produced a special video explaining that year's Nobel Prize winners. I was responsible for finding and contacting most of the invited experts, structuring the questions, and conducting the interviews with each of them.",
    "case.grecia.title": "Ancient Greece Documentary",
    "case.grecia.client": "TinocandoTV",
    "case.grecia.category": "Documentary",
    "case.grecia.desc": "The largest documentary ever produced by the channel. I worked on expanding the script, complementing the video's narrative with additional historical research, and conducted about 70% of the image research for the final documentary.",
    "case.olimpiadas.title": "2024 Olympics Campaign",
    "case.olimpiadas.shortTitle": "2024 Olympics",
    "case.olimpiadas.client": "Globo Esporte",
    "case.olimpiadas.category": "Institutional Making Of",
    "case.olimpiadas.desc": "I had the honor of taking part in this campaign together with Tinôco, the channel owner. In addition to assisting with the entire campaign planning within TinocandoTV, I was responsible for capturing the making of during the shoots in Rio de Janeiro, experiencing firsthand how the behind-the-scenes of a large professional production like Globo Esporte's works.",
    "case.shogun.title": "Disney+ Partnership — Shōgun",
    "case.shogun.client": "Disney+",
    "case.shogun.category": "Advertising Partnership",
    "case.shogun.desc": "I had the opportunity to actively participate in the partnership between TinocandoTV and Disney+ for the promotion of the Shōgun series. I was responsible for the videos' research, both as manager and reviewer, and as researcher. I also reviewed the final video historically, ensuring visual coherence with established historiography. I also actively contributed to writing the advertising insertion in the final script.",
    "case.revista.title": "Digital Magazine - Instagram",
    "case.revista.client": "TinocandoTV",
    "case.revista.category": "Editorial Design",
    "case.revista.desc": "During a specific period, Tinôco and I decided to test a new project on TinocandoTV's Instagram: the creation of digital magazines with sociocultural and, in some cases, political news. I was responsible for creating most of the private magazines aimed at subscribers.",

    // Section labels (case pages)
    "case.section.context": "Context",
    "case.section.role": "My role",
    "case.section.process": "Process",
    "case.section.result": "Result",

    // Case Greece
    "case.grecia.subtitle": "The largest documentary ever produced by the channel.",
    "case.grecia.contextText": "The Ancient Greece documentary represented TinocandoTV's most ambitious project to date. The goal was to create long-form content that would raise the channel's engagement standard and visual production quality to an unprecedented level.",
    "case.grecia.roleTitle": "My role as producer and researcher",
    "case.grecia.roleText": "I worked directly on expanding the narrative, complementing the initial script with in-depth research about the period. I was also responsible for conducting about 70% of the image research for the final video, ensuring every visual element aligned with the historical accuracy required by the topic. The biggest challenge was undoubtedly the work on maps. I conducted extensive research on the various territorial changes throughout the entire history narrated in the video to guide the illustrator and editors in creating historically precise and coherent maps.",
    "case.grecia.process1": "Script review and expansion focused on historiographic accuracy",
    "case.grecia.process2": "Extensive curation of visual sources (artworks, reconstructions, historical maps)",
    "case.grecia.process3": "Cross-checking information against primary academic sources",
    "case.grecia.process4": "Organizing material to facilitate editing work",
    "case.grecia.watchVideo": "Watch documentary on YouTube",
    "case.grecia.resultText": "The documentary established itself as a reference for long-form historical content on Brazilian YouTube, demonstrating that engagement can be sustained alongside rigorous production. The project set a new quality standard for the channel and served as a model for subsequent productions.",

    // Case Olympics
    "case.olimpiadas.subtitle": "Capturing the making of and behind-the-scenes of the shoots in Rio de Janeiro.",
    "case.olimpiadas.contextPre": "During the 2024 Olympics campaign, Globo Esporte invited Tinôco, the channel owner, to do",
    "case.olimpiadas.contextLink": "a series of recordings in Rio de Janeiro",
    "case.olimpiadas.contextPost": "for institutional content production.",
    "case.olimpiadas.roleTitle": "My role as producer",
    "case.olimpiadas.roleText": "My job within the TinocandoTV team was to assist Tinôco in reviewing the recording script and to document the behind-the-scenes of these shoots, having the chance to see up close the complexity of a large production team like Globo Esporte's.",
    "case.olimpiadas.process1": "Coverage planning focused on key production moments",
    "case.olimpiadas.process2": "Capturing with a narrative eye, prioritizing behind-the-scenes and spontaneous interactions",
    "case.olimpiadas.process3": "Visual documentation that contextualizes the scale and professionalism of the operation",
    "case.olimpiadas.resultText": "The captured material served as the basis for TinocandoTV's internal communication pieces, providing a faithful record for our audience of this campaign that was so important to the channel's history.",

    // Case Shogun
    "case.shogun.subtitle": "Historical research management, final product review, and direct participation in writing the advertising script.",
    "case.shogun.contextText": "The Disney+ partnership for the Shōgun series required a delicate balance: producing content that met the platform's marketing goals while maintaining the historical rigor that characterizes TinocandoTV's work. The challenge was to integrate two seemingly conflicting demands — promotion and accuracy — into a cohesive narrative.",
    "case.shogun.roleTitle": "My role as producer and researcher",
    "case.shogun.roleText1Pre": "During the campaign, we produced two videos:",
    "case.shogun.roleText1Link1": "SAMURAI: the GREATEST WARRIORS of JAPAN",
    "case.shogun.roleText1Mid": "and",
    "case.shogun.roleText1Link2": "NINJAS: REALITY or MYTH?",
    "case.shogun.roleText1Post": ". On the first, I acted as head of research and reviewer to ensure narrative coherence and the quality standard we're known for. On the second, I worked directly on the research process, which required careful curation of sources due to the topic's nature, with vast amounts of false information spread online.",
    "case.shogun.roleText2": "I also worked on image research for both videos and reviewed both to ensure historical coherence in how the images are shown, especially the lettering, since we worked with the Japanese language, translating names of feudal Japan equipment and weapons.",
    "case.shogun.roleText3": "Finally, I actively participated in developing the advertising script. We curated the images provided by Disney+ and managed to develop an advertising integration aligned with the brand's brief, which was approved.",
    "case.shogun.process1": "In-depth research on feudal Japan and the historical context of the series",
    "case.shogun.process2": "Identifying connection points between historical narrative and series elements",
    "case.shogun.process3": "Developing a script that integrates historical context and promotional cues",
    "case.shogun.process4": "Editorial review to ensure consistency and accuracy",
    "case.shogun.resultText": "It was a large-scale project we managed to deliver in time for the series' launch promotion, demonstrating our capacity as a well-coordinated team to meet commercial demands without compromising quality.",

    // Case Magazine
    "case.revista.subtitle": "Daily magazines on Instagram.",
    "case.revista.contextText": "During a specific period, Tinôco and I decided to test a new project on TinocandoTV's Instagram: digital magazines with sociocultural and, in some cases, political news. Some of these magazines were published freely on Instagram, while others were exclusively available to subscribers within a members system. The goal was to experiment with a different editorial format, more in-depth and visually organized, adapted to the platform's fast consumption.",
    "case.revista.roleTitle": "My role as designer",
    "case.revista.roleText1": "I was responsible for creating most of the private magazines aimed at subscribers, working from defining the structure of each edition — including writing the texts and number of slides — to the complete page design in Figma.",
    "case.revista.roleText2": "Throughout the project, we sought to maintain a consistent visual standard, with light layouts and recurring use of textured paintings or historical images, always chosen to dialogue with the content and reinforce the theme of each magazine.",
    "case.revista.process1": "Defining theme and editorial focus",
    "case.revista.process2": "Structuring the magazine (number of slides and texts)",
    "case.revista.process3": "Image research and selection",
    "case.revista.process4": "Page-by-page design development",
    "case.revista.checkInstagram": "Check it on Instagram",

    // Case Nobel
    "case.nobel.subtitle": "Exclusive interviews with experts for each category of the 2025 Nobel.",
    "case.nobel.contextText1": "In 2025, TinocandoTV produced a special video explaining that year's Nobel Prize winners. To deepen the content, we invited experts from different fields to comment on each prize category.",
    "case.nobel.contextText2": "The project featured a geneticist, a chemist, a physicist, and an economist, plus experts who helped contextualize the Nobel Peace Prize, given its multilateral nature. For that category, we worked with geography and geopolitics professors, an international relations specialist, and two historians, each contributing complementary analyses of that year's prize.",
    "case.nobel.roleTitle": "My role as producer and interviewer",
    "case.nobel.roleText1Pre": "I was responsible for finding and contacting most of the invited experts, as well as structuring the questions and conducting the interviews. All the material was recorded on the",
    "case.nobel.roleText1Link": "TinocandoTV cuts channel",
    "case.nobel.roleText1Post": ", a new project within the channel, which I'm also responsible for.",
    "case.nobel.roleText2": "After conducting the interviews, I selected and filtered the key moments of each conversation to build a cohesive script, combining the experts' explanations with our own explanatory segments, spoken by Tinôco in the video and presented in a clearer, more direct, and accessible way to the audience.",
    "case.nobel.process1": "Identifying and contacting experts in each field",
    "case.nobel.process2": "Prior study on the topics and prize categories",
    "case.nobel.process3": "Developing the interview questions",
    "case.nobel.process4": "Conducting the interviews",
    "case.nobel.process5": "Selecting and filtering key moments to build the script",
    "case.nobel.resultText": "The project resulted in a video over an hour long, in which we explain the trajectory of Alfred Nobel, the prize's creator, and present the 2025 Nobel categories, their winners, and each one's main contributions to their respective fields.",
    "case.nobel.watchVideo": "Watch the video on YouTube",
    "case.nobel.videoAlt": "2025 Nobel Prize Video",

    // About
    "about.title": "About me",
    "about.p1": "I'm a producer, head of research, and content manager at TinocandoTV.",
    "about.p2Pre": "My main role within the channel is",
    "about.p2Em": "Youtube Manager",
    "about.p2Post": ", which means I essentially act as TinocandoTV's coordinator, organizing all the channel's projects.",
    "about.p3": "Together with Tinôco, I organize the channel's complete calendar, deciding which videos will be published in the coming months and the people responsible for each one. In other words, I'm in charge of organizing which video will be posted on which date and who will work on it, from research to final editing.",
    "about.p4": "And that's a key word here: \"research.\" As the channel's head of research, I'm responsible for coordinating TinocandoTV's research team, providing guidance on each topic and reviewing the final research to ensure delivery of accurate, coherent, and — above all — optimized research that serves as the basis for the script writing, which is handled by Tinôco.",
    "about.p5": "After that, I take part in reviewing each script alongside the channel's specialists, and I'm also the one who develops the image research for each video, selecting the paintings, maps, and visual representations to be used by the editors in the final video.",
    "about.p6": "And to wrap up, after editing, I review each video to ensure that the images and especially the maps selected are presented in the video in a historically accurate way.",
    "about.p7": "By the time of publishing, as a producer, I'm the one who organizes all the details surrounding the videos, such as the names of channel members and supporters that appear at the end of every video, or the credits, ensuring each team member receives proper recognition.",
    "about.p8": "All this said, I can be described as a true \"jack-of-all-trades\" of a YouTube channel, and that's exactly why I've gathered broad experience working at a channel that's not only large-scale but also growing.",
    "about.contactBtn": "Get in touch",
    "about.skillsTitle": "Skills",
    "about.skill1": "Historical research and content fact-checking",
    "about.skill2": "Script writing and review",
    "about.skill3": "Project management and production pipeline",
    "about.skill4": "Editorial planning and format organization",
    "about.skill5": "Image research and curation",
    "about.skill6": "Media Kit development",

    // Services page
    "servicos.title": "Services",
    "servicos.intro": "I'm open to consulting, freelance work, on-demand research/scriptwriting, and Media Kit development.",
    "servicos.consult.title": "Consulting",
    "servicos.consult.desc": "Specialized consulting for YouTube channels. Each YouTube channel has its specifics, target audience, and the creator's identity intrinsically linked to the channel's. As someone with broad experience managing a large YouTube channel, I can help you with growth strategies tailored to you and general knowledge on how to think like a manager of your own channel.",
    "servicos.research.title": "Research",
    "servicos.research.desc": "I conduct research applied to audiovisual production, focusing on thematic scope, chronology, fact-checking, and content adaptation to clear and consistent formats. I have experience both in conducting research and in coordinating teams of researchers.",
    "servicos.script.title": "Script",
    "servicos.script.desc": "Beyond research, I have experience writing scripts also applied to audiovisual production, selecting the key points of any topic to connect them in a coherent and immersive narrative for the audience, with editing in mind from the start.",
    "servicos.kit.title": "Media Kit",
    "servicos.kit.desc": "I also work on Media Kit production, which is essentially a CV for influencers and indispensable for any content creator considering brand partnerships — the famous \"publis\".",
    "servicos.images.title": "Image Research and Curation",
    "servicos.images.desc": "Image research and curation that supports the visual narrative of videos, whether through paintings, footage, period news, or even abstract visual representations. For historical videos, I conduct extensive research on the maps and territories of each period covered to avoid inaccuracies.",
    "servicos.cta.title": "Got a project in mind?",
    "servicos.cta.desc": "Get in touch for research, scripting, and high-quality video production.",
    "servicos.cta.button": "Get in touch",

    // Contact
    "contato.title": "Let's talk",
    "contato.desc": "Get in touch for research, scripting, and high-quality video production.",
    "contato.responseTime": "I respond to all messages within 48 business hours.",
    "contato.email": "Email",
    "contato.phone": "Phone",
    "contato.emailCopied": "Email copied!",
    "contato.phoneCopied": "Number copied!",
    "contato.copied": "Copied!",
    "contato.linkedin": "LinkedIn",
    "contato.linkedinDesc": "Connect with me",

    // Portfolio / Media
    "portfolio.research.title": "Research",
    "portfolio.research.desc": "Videos that best represent my research work within TinocandoTV.",
    "portfolio.research.linkBtn": "Link to research",
    "portfolio.scripts.title": "Scripts",
    "portfolio.scripts.desc": "Examples of scripts I wrote within TinocandoTV.",
    "portfolio.scripts.linkBtn": "Link to script",
    "portfolio.script1.title": "Artemis II",
    "portfolio.script2.title": "Hitler at the Nobel",
    "portfolio.script3.title": "Tomb of Alexander the Great",
    "portfolio.scriptModels.title": "Script Models",
    "portfolio.scriptModels.desc": "Script models I built based on the main research pieces I wrote myself.",
    "portfolio.scriptModel1.title": "Operation Barbarossa — The War Hitler Lost",
    "portfolio.scriptModel1.desc": "\"The War Hitler Lost\" is a full documentary telling how Nazi ideological arrogance underestimated a territory, a climate, and a people — and how that mistake cost tens of millions of lives.",
    "portfolio.scriptModel2.title": "The Crash of 1929 — The Crash That Changed the World",
    "portfolio.scriptModel2.desc": "The complete story of how the greatest financial bubble in history was inflated — and what happened when it burst.",
    "portfolio.scriptModel3.title": "The Berlin Wall — The Wall That Divided the World",
    "portfolio.scriptModel3.desc": "The end-to-end narrative from the construction to the fall of the Berlin Wall, the most powerful symbol of the Cold War.",
    "portfolio.scriptModel4.title": "The God of Spinoza",
    "portfolio.scriptModel4.desc": "Here I explore the radical idea that cost Spinoza everything: that God is not above the world — He is the world.",
    "portfolio.publis.title": "Brand Partnerships",
    "portfolio.publis.desc": "Main brands I've worked with within TinocandoTV.",
    "portfolio.publis.seeCase": "See more in the case",
    "portfolio.publis.seeVideo": "Watch the video",
    "portfolio.others.title": "Other examples",
    "portfolio.kits.title": "Media Kits",
    "portfolio.kits.desc": "Some of the Media Kits I've developed for both large channels and smaller influencers.",
    "portfolio.kits.seeFull": "View full Media Kit",
    "portfolio.video1.title": "FALL of HITLER",
    "portfolio.video1.desc": "Beyond the enormous challenge of historical research itself, this video was probably my biggest map challenge, given the many territorial changes, demanding meticulous research to visually represent for the audience how Adolf Hitler actually lost the war.",
    "portfolio.video2.title": "1929 CRISIS",
    "portfolio.video2.desc": "In this video we cover the entire history, from the end of World War I and the rise of the U.S. to the burst of one of history's biggest economic bubbles and the eventual rise of totalitarian regimes in Europe during the Great Depression.",
    "portfolio.video3.title": "BERLIN WALL",
    "portfolio.video3.desc": "Another example of an extremely thorough research piece covering the entire history of the construction and fall of the Berlin Wall, with period news footage and recordings.",
    "portfolio.video4.title": "SPINOZA's GOD",
    "portfolio.video4.desc": "In this case, beyond the historical research challenge, there was also the philosophical research challenge, requiring interpretation of Spinoza's philosophy to explain it simply and didactically to a lay audience.",
    "portfolio.publi.disney.desc": "I worked on selecting the released series' images, provided by the Disney+ team, and also contributed to writing the advertising script according to the brief provided by the brand.",
    "portfolio.publi.globo.desc": "I accompanied Tinôco on a series of shoots in Rio de Janeiro to promote the 2024 Olympics with the Globo Esporte team.",
    "portfolio.publi.opera.desc": "I wrote the advertising script according to the brief provided by Opera and produced all the footage shown in the ad segment of the video.",

    // Footer
    "footer.tagline": "Project management, research, scriptwriting, and large-scale audiovisual production.",
    "portfolio.watchOnYoutube": "Watch on YouTube",
    "portfolio.magazines.title": "Instagram Magazines",
    "portfolio.magazines.desc": "Digital magazines created for TinocandoTV's Instagram.",
    "footer.navTitle": "Navigation",
    "footer.contactTitle": "Contact",
    "footer.copied": "Copied!",
    "footer.rights": "All rights reserved.",

    // 404
    "notFound.message": "Oops! Page not found",
    "notFound.back": "Return to Home",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "pt";
  
  const browserLang = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || "pt";
  const langCode = browserLang.toLowerCase().split("-")[0];
  
  return langCode === "pt" ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || getBrowserLanguage();
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
