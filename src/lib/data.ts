export const personalInfo = {
  name: "Rafael Stuepp Riegel",
  role: "Engenheiro de Computação",
  company: "Stuepp Riegel Company LTDA",
  email: "rafaelsriegel@gmail.com",
  phone: "+55 (47) 99999-9999",
  location: "São Bento do Sul, SC - Brasil",
  bio: "Este é o meu portfólio e currículo. Nele compartilho minha experiência profissional, minhas habilidades técnicas e alguns dos projetos que desenvolvi.",
  highlightDescriptions: [
    "Desenvolvimento end-to-end de experiências digitais escaláveis e acessíveis.",
    "Conjunto de projetos e experimentos que refletem minha evolução técnica.",
    "Compromisso com resultados sustentáveis e impacto real para parceiros e clientes.",
  ],
  avatar: "/avatar.jpg",
  social: {
    github: "https://github.com/faelsriegel",
    linkedin: "https://www.linkedin.com/in/rafael-stuepp-riegel/",
    replit: "https://replit.com/@faelsriegel?tab=repls",
    empresa: "https://cnpj.biz/57130014000147",
  },
};

export const services = [
  {
    id: 1,
    name: "Soluções em Tecnologia",
    description:
      "Solucionador de adversidades na área de TI, oferecendo o suporte necessário para que sua empresa obtenha sucesso e atinja seus objetivos",
    tags: ["Infraestrutura", "Suporte 360°"],
    icon: "server",
  },
  {
    id: 2,
    name: "Segurança da Informação",
    description:
      "Presto serviços de SI e de DPO as Service, através de Programas e Treinamentos, fornecendo a sua empresa conformidade à LGPD.",
    tags: ["LGPD", "DPO as a Service"],
    icon: "shield",
  },
  {
    id: 3,
    name: "Criação de Websites",
    description:
      "Desenvolvimento de websites, sistemas web, aplicações, blogs e lojas virtuais com foco em resultados e nas necessidades dos clientes.",
    tags: ["Experiência Digital", "Resultados"],
    icon: "laptop",
  },
];

export const skills = [
  // Sistemas Operacionais
  { name: "Windows", years: 15, category: "os" },
  { name: "Linux", years: 8, category: "os" },
  { name: "FreeBSD", years: 7, category: "os" },
  { name: "Ubuntu", years: 7, category: "os" },
  { name: "Kali Linux", years: 7, category: "os" },
  // Linguagens
  { name: "Java", years: 8, category: "language" },
  { name: "C++", years: 8, category: "language" },
  { name: "Python", years: 2, category: "language" },
  { name: "Django", years: 2, category: "language" },
  { name: "Flask", years: 2, category: "language" },
  // Frontend
  { name: "HTML", years: 9, category: "frontend" },
  { name: "CSS", years: 9, category: "frontend" },
  { name: "Bootstrap CSS", years: 7, category: "frontend" },
  { name: "Tailwind CSS", years: 5, category: "frontend" },
  { name: "Figma", years: 7, category: "frontend" },
  { name: "Javascript", years: 5, category: "frontend" },
  { name: "Typescript", years: 5, category: "frontend" },
  { name: "React.js", years: 5, category: "frontend" },
  { name: "Node.js", years: 5, category: "frontend" },
  { name: "Next.js", years: 5, category: "frontend" },
  // Deploy & Cloud
  { name: "Vercel", years: 3, category: "cloud" },
  { name: "Heroku", years: 2, category: "cloud" },
  { name: "Git", years: 7, category: "devops" },
  { name: "Gitlab", years: 5, category: "devops" },
  { name: "Wordpress", years: 8, category: "cms" },
  { name: "Elementor", years: 7, category: "cms" },
  // DevOps
  { name: "Docker", years: 5, category: "devops" },
  { name: "Jenkins", years: 5, category: "devops" },
  { name: "Kubernetes", years: 5, category: "devops" },
  { name: "Terraform", years: 5, category: "devops" },
  { name: "Prometheus", years: 5, category: "devops" },
  { name: "Grafana", years: 5, category: "devops" },
  { name: "Zabbix", years: 2, category: "devops" },
  // Cloud Providers
  { name: "AWS", years: 5, category: "cloud" },
  { name: "Azure", years: 5, category: "cloud" },
  { name: "Google Cloud", years: 1, category: "cloud" },
  { name: "Digital Ocean", years: 1, category: "cloud" },
  // AI
  { name: "Claude Code", years: 0.25, category: "ai" },
  { name: "ChatGPT", years: 3, category: "ai" },
  { name: "Google Gemini", years: 1, category: "ai" },
];

export const education = [
  {
    id: 1,
    name: "BACHARELADO EM ENGENHARIA DE COMPUTAÇÃO",
    institution: "INSTITUTO FEDERAL CATARINENSE - IFC",
    duration: "5 anos",
    schedule: "Integral (tarde e noite)",
    modality: "Presencial",
    image: "/images/projects/IFC.png",
    imageEco: "/images/projects/ECO.png",
    skills: [
      "ALGORITMOS E PROGRAMAÇÃO",
      "DESENVOLVIMENTO WEB",
      "LÓGICA PARA COMPUTAÇÃO",
      "ORIENTAÇÃO A OBJETOS",
      "ESTRUTURA DE DADOS I e II",
      "PROGRAMAÇÃO I e II",
      "SEGURANÇA DA INFORMAÇÃO",
      "ENGENHARIA DE SOFTWARE",
      "BANCO DE DADOS",
      "REDES DE COMPUTADORES I e II",
      "COMUNICAÇÃO DE DADOS",
      "ARQUITETURA DE COMPUTADORES",
      "SISTEMAS OPERACIONAIS",
      "SISTEMAS INTELIGENTES I e II",
      "SISTEMAS E SINAIS",
      "PROCESSAMENTO DIGITAL DE SINAIS",
      "GESTÃO DE PROJETOS",
      "ELETRÔNICA BÁSICA",
      "CÁLCULO I, II, III e NUMÉRICO",
      "FÍSICA GERAL I, II e III",
      "CURSOS DE INGLÊS E ESPANHOL",
    ],
    url: "https://saobentodosul.ifc.edu.br/eco/",
  },
];

export const certificates = [
  {
    id: 1,
    name: "FORMAÇÃO COMPLETA DPO EXIN",
    description: "Composta pelos 4 módulos a seguir:",
    image:
      "https://antebellum.com.br/wp-content/uploads/2022/02/EXIN_Certified_DataProtectionOfficer-300x300.png",
    skills: [
      "LGPD",
      "GDPR",
      "PRIVACIDADE DE DADOS",
      "SEGURANÇA DA INFORMAÇÃO",
      "ISO 27001",
      "ISO 27002",
      "ISO 27005",
      "ISO 27007",
      "ISO 31000",
    ],
    isMain: true,
    url: "https://ead.deservacademy.com.br/bundles/EXINDPO",
  },
  {
    id: 2,
    name: "EXIN Privacy & Data Protection Essentials",
    description: "",
    image:
      "https://antebellum.com.br/wp-content/uploads/2022/02/EXIN_Badge_ModuleEssentials_PDPLGPD-300x300.png",
    skills: ["LGPD", "COMPLIANCE", "PRIVACIDADE DE DADOS"],
    url: "https://ead.deservacademy.com.br/bundles/EXINDPO",
  },
  {
    id: 3,
    name: "EXIN Information Security Foundation",
    description: "",
    image:
      "https://antebellum.com.br/wp-content/uploads/2022/02/EXIN_Badge_ModuleFoundation_PDP-300x300.png",
    skills: ["GDPR", "COMPLIANCE", "PRIVACIDADE DE DADOS"],
    url: "https://ead.deservacademy.com.br/bundles/EXINDPO",
  },
  {
    id: 4,
    name: "EXIN Privacy & D. Protection Professional",
    description: "",
    image:
      "https://antebellum.com.br/wp-content/uploads/2022/02/EXIN_Badge_ModuleProfessional_InformationSM_ISO-300x300.png",
    skills: ["LGPD", "GDPR", "ISO 27001", "ISO 27002", "ISO 27005"],
    url: "https://ead.deservacademy.com.br/bundles/EXINDPO",
  },
  {
    id: 5,
    name: "EXIN Privacy & D. Protection Practitioner",
    description: "",
    image: "/images/projects/BADGE4.webp",
    skills: ["LGPD", "GDPR", "ISO 27005", "ISO 27007", "ISO 31000"],
    url: "https://ead.deservacademy.com.br/bundles/EXINDPO",
  },
  {
    id: 6,
    name: "Membro APDADOS",
    description: "Membro APDADOS Comitê Público",
    image: "/images/projects/APDADOS.webp",
    skills: [
      "LGPD",
      "GDPR",
      "PRIVACIDADE DE DADOS",
      "SEGURANÇA DA INFORMAÇÃO",
      "ISO 27001",
      "ISO 27002",
      "ISO 27005",
      "ISO 27007",
      "ISO 31000",
    ],
    url: "https://apdados.org/",
  },
];

export const portfolioFullStack = [
  {
    id: 1,
    name: "SAPU - Sistema Analítico de Progressão Universitária",
    description:
      "Solução que consiste em ser um app web para realizar o gerenciamento, controle e análise da progressão acadêmica para os cursos superiores",
    image: "/images/projects/projeto4.webp",
    skills: ["React", "Node.js", "Tailwind", "Typescript", "Next.js", "Vercel"],
    websiteUrl: "https://sapu.eco.br",
  },
  {
    id: 2,
    name: "Safeguard - Plataforma de Gestão & Adequação à LGPD",
    description:
      "Solução dedicada à auxiliar as empresas a se adequarem à legislação, em especial a LGPD, oferecendo aspectos de governança e compliance de maneira fácil e eficiente.",
    image: "/images/projects/projeto10.webp",
    skills: ["React", "Node.js", "Tailwind", "Typescript", "Next.js", "Vercel"],
    websiteUrl: "https://dpohub.vercel.app",
  },
  {
    id: 3,
    name: "ZenBookee - Ferramentas para Contadores",
    description:
      "Aplicativo Web para contabilidades, que conta com automações (bots), modificações de planilhas para importação em sistemas contábeis e gerador de e-mails.",
    image: "/images/projects/projeto1.webp",
    skills: ["HTML/CSS", "Python", "Django", "Vercel"],
    websiteUrl: "https://zenbookee.com.br",
  },
  {
    id: 4,
    name: "Projeto de DTA - Controlador MIDI Virtual",
    description:
      "Desenvolvido na disciplina de Desenho Técnico Avançado do IFC Campus SBS. Conta com informações sobre o processo de criação, os componentes utilizados e a aplicação prática e virtualizada do Controlador MIDI desenvolvido.",
    image: "/images/projects/projeto11.webp",
    skills: ["HTML", "CSS", "Vercel"],
    websiteUrl: "https://midiview.vercel.app",
  },
  {
    id: 5,
    name: "Sr. Coruja - Monitorador de Preços",
    description:
      "Monitoramento ativo 24/7 com alertas de preço no seu Telegram. Cole o link do produto, defina sua meta e receba uma notificação assim que o preço cair. Simples, rápido e automático.",
    image: "/images/projects/srcoruja.webp",
    skills: ["React", "Node.js", "Tailwind", "Typescript", "Next.js", "Vercel"],
    websiteUrl: "https://srcoruja.vercel.app",
  },
  {
    id: 6,
    name: "Tabs - Plataforma Musical Interativa",
    description:
      "Plataforma central para ensino e experimentação musical interativa, com biblioteca completa de acordeões e demais instrumentos musicais virtuais, suporte a tablaturas interativas, interfaces responsivas e arquitetura modular.",
    image: "/images/projects/srtabs.webp",
    skills: ["React", "Node.js", "Tailwind", "Typescript", "Next.js", "Vercel"],
    websiteUrl: "https://srtabs.vercel.app",
  },
];

export const portfolioLandingPages = [
  {
    id: 1,
    name: "Eletricista Rudnik",
    description:
      "Site dedicado à divulgação dos serviços oferecidos pelo Eletricista Rudnik. Este projeto proporciona um ambiente que destaca seus serviços de maneira profissional e de fácil contato com o cliente.",
    image: "/images/projects/projeto7.webp",
    skills: ["HTML", "CSS", "Vercel"],
    websiteUrl: "https://eletricistarudnik.crnet.com.br",
  },
  {
    id: 2,
    name: "Margarida de Quadra",
    description:
      "Website voltado para promover os serviços prestados por Margarida de Quadra. Com o intuito de ser um espaço online que enfatiza seus serviços de maneira profissional, além de facilitar o contato com os clientes.",
    image: "/images/projects/projeto5.webp",
    skills: ["HTML", "CSS", "Vercel"],
    websiteUrl: "https://margaridadequadra.vercel.app",
  },
  // {
  //   id: 3,
  //   name: "Portfólio de Sites - Divulgador de Projetos",
  //   description:
  //     "Desenvolvido com o objetivo de testar o efeito parallax, através de seções fixas, afim de testar conhecimentos e validar templates para portfolios para divulgar projetos",
  //   image: "/images/projects/projeto8.webp",
  //   skills: ["HTML", "CSS", "Vercel"],
  //   websiteUrl: "https://portfoliosites.crnet.com.br",
  // },
  {
    id: 4,
    name: "Website com Bootstrap",
    description:
      "Atividade associada à disciplina de Programação 2 de Engenharia de Computação, onde foi desenvolvido um website simples e estático, utilizando Bootstrap. Toda a identidade visual já estava pré-determinada pelo Professor.",
    image: "/images/projects/projeto3.webp",
    skills: ["HTML/CSS", "Bootstrap", "Vercel"],
    websiteUrl: "https://web-site-bootstrap.vercel.app",
  },
];

export const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Atividades", href: "#services" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Formação", href: "#education" },
  { name: "Especializações", href: "#certificates" },
  { name: "Conhecimentos", href: "#skills" },
];

export const sectionTitles = {
  services: "Atividades Profissionais",
  portfolioFull: "Portfólio (Full-Stack)",
  portfolioLanding: "Portfólio (Landing Pages)",
  education: "Formação Acadêmica",
  certificates: "Expertise Profissional",
  skills: "Conhecimentos",
};
