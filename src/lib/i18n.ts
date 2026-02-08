export type Locale = "pt" | "en";

export const translations = {
  pt: {
    // Personal Info
    role: "Eng. de Computação",
    bio: "Meu portfólio e currículo. Compartilho minha experiência, habilidades técnicas e projetos desenvolvidos.",
    
    // Navigation
    nav: {
      about: "Sobre",
      services: "Serviços",
      portfolio: "Portfólio",
      education: "Formação",
      certificates: "Certificações",
      skills: "Skills",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    
    // Section Titles
    sections: {
      services: "Serviços",
      experience: "Experiência Profissional",
      portfolioFull: "Portfólio (Full-Stack)",
      portfolioLanding: "Portfólio (Landing Pages)",
      education: "Formação",
      certificates: "Certificações",
      skills: "Skills",
    },
    
    // Hero
    hero: {
      contact: "Contato",
      viewCV: "Currículo",
      subtitle: "Entre em contato para conversar sobre projetos, consultorias, adequações e treinamentos.",
    },
    
    // Services
    services: [
      {
        name: "Soluções em Tecnologia",
        description: "Solucionador de adversidades na área de TI, oferecendo o suporte necessário para que sua empresa obtenha sucesso e atinja seus objetivos",
        tags: ["Infraestrutura", "Suporte 360°"],
      },
      {
        name: "Segurança da Informação",
        description: "Presto serviços de SI e de DPO as Service, através de Programas e Treinamentos, fornecendo a sua empresa conformidade à LGPD.",
        tags: ["LGPD", "DPO as a Service"],
      },
      {
        name: "Criação de Websites",
        description: "Desenvolvimento de websites, sistemas web, aplicações, blogs e lojas virtuais com foco em resultados e nas necessidades dos clientes.",
        tags: ["Experiência Digital", "Resultados"],
      },
    ],
    
    // Education
    education: {
      degree: "BACHARELADO EM ENGENHARIA DE COMPUTAÇÃO",
      institution: "INSTITUTO FEDERAL CATARINENSE - IFC",
      duration: "5 anos",
      schedule: "Integral (tarde e noite)",
      modality: "Presencial",
      labels: {
        duration: "DURAÇÃO",
        schedule: "TURNO",
        modality: "MODALIDADE",
      },
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
    },
    
    // Certificates
    certificates: {
      main: {
        name: "FORMAÇÃO DPO EXIN",
        description: "Composta pelos 4 módulos a seguir:",
        skills: ["LGPD", "GDPR", "PRIVACIDADE DE DADOS", "SEGURANÇA DA INFORMAÇÃO", "ISO 27001", "ISO 27002", "ISO 27005", "ISO 27007", "ISO 31000"],
      },
      modules: [
        { name: "EXIN Privacy & Data Protection Essentials", skills: ["LGPD", "COMPLIANCE", "PRIVACIDADE DE DADOS"] },
        { name: "EXIN Information Security Foundation", skills: ["GDPR", "COMPLIANCE", "PRIVACIDADE DE DADOS"] },
        { name: "EXIN Privacy & D. Protection Professional", skills: ["LGPD", "GDPR", "ISO 27001", "ISO 27002", "ISO 27005"] },
        { name: "EXIN Privacy & D. Protection Practitioner", skills: ["LGPD", "GDPR", "ISO 27005", "ISO 27007", "ISO 31000"] },
      ],
      member: {
        name: "Membro APDADOS",
        description: "Membro APDADOS Comitê Público",
        skills: ["LGPD", "GDPR", "PRIVACIDADE DE DADOS", "SEGURANÇA DA INFORMAÇÃO", "ISO 27001", "ISO 27002", "ISO 27005", "ISO 27007", "ISO 31000"],
      },
    },
    
    // Portfolio
    portfolio: {
      fullStack: [
        {
          name: "SAPU - Sistema Analítico de Progressão Universitária",
          description: "Solução que consiste em ser um app web para realizar o gerenciamento, controle e análise da progressão acadêmica para os cursos superiores",
        },
        {
          name: "Safeguard - Plataforma de Gestão & Adequação à LGPD",
          description: "Solução dedicada à auxiliar as empresas a se adequarem à legislação, em especial a LGPD, oferecendo aspectos de governança e compliance de maneira fácil e eficiente.",
        },
        {
          name: "ZenBookee - Ferramentas para Contadores",
          description: "Aplicativo Web para contabilidades, que conta com automações (bots), modificações de planilhas para importação em sistemas contábeis e gerador de e-mails.",
        },
        {
          name: "Projeto de DTA - Controlador MIDI Virtual",
          description: "Desenvolvido na disciplina de Desenho Técnico Avançado do IFC Campus SBS. Conta com informações sobre o processo de criação, os componentes utilizados e a aplicação prática e virtualizada do Controlador MIDI desenvolvido.",
        },
        {
          name: "Sr. Coruja - Monitorador de Preços",
          description: "Monitoramento ativo 24/7 com alertas de preço no seu Telegram. Cole o link do produto, defina sua meta e receba uma notificação assim que o preço cair. Simples, rápido e automático.",
        },
        {
          name: "Tabs - Plataforma Musical Interativa",
          description: "Plataforma central para ensino e experimentação musical interativa, com biblioteca completa de acordeões e demais instrumentos musicais virtuais, suporte a tablaturas interativas, interfaces responsivas e arquitetura modular.",
        },
      ],
      landingPages: [
        {
          name: "Eletricista Rudnik",
          description: "Site dedicado à divulgação dos serviços oferecidos pelo Eletricista Rudnik. Este projeto proporciona um ambiente que destaca seus serviços de maneira profissional e de fácil contato com o cliente.",
        },
        {
          name: "Margarida de Quadra",
          description: "Website voltado para promover os serviços prestados por Margarida de Quadra. Com o intuito de ser um espaço online que enfatiza seus serviços de maneira profissional, além de facilitar o contato com os clientes.",
        },
        {
          name: "Website com Bootstrap",
          description: "Atividade associada à disciplina de Programação 2 de Engenharia de Computação, onde foi desenvolvido um website simples e estático, utilizando Bootstrap. Toda a identidade visual já estava pré-determinada pelo Professor.",
        },
      ],
      comingSoon: "Em breve",
    },
    
    // Contact
    contact: {
      title: "Contato",
      subtitle: "Tem alguma ideia, projeto ou proposta de trabalho?",
      description: "Ficarei feliz em conversar.",
      sendMessage: "Enviar Mensagem",
      orEmail: "ou envie um e-mail para",
    },
    
    // Footer
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  
  en: {
    // Personal Info
    role: "Computer Engineer",
    bio: "This is my portfolio and resume. Here I share my professional experience, technical skills, and some of the projects I've developed.",
    
    // Navigation
    nav: {
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      education: "Education",
      certificates: "Certifications",
      skills: "Skills",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    
    // Section Titles
    sections: {
      services: "Professional Services",
      experience: "Professional Experience",
      portfolioFull: "Portfolio (Full-Stack)",
      portfolioLanding: "Portfolio (Landing Pages)",
      education: "Academic Background",
      certificates: "Professional Expertise",
      skills: "Skills",
    },
    
    // Hero
    hero: {
      contact: "Get in Touch",
      viewCV: "View Resume",
      subtitle: "Get in touch to discuss projects you want to develop",
    },
    
    // Services
    services: [
      {
        name: "Technology Solutions",
        description: "IT problem solver, providing the necessary support for your company to succeed and achieve its goals",
        tags: ["Infrastructure", "360° Support"],
      },
      {
        name: "Information Security",
        description: "I provide IS and DPO as a Service through Programs and Training, ensuring your company's compliance with data protection laws.",
        tags: ["GDPR", "DPO as a Service"],
      },
      {
        name: "Website Development",
        description: "Development of websites, web systems, applications, blogs, and online stores focused on results and client needs.",
        tags: ["Digital Experience", "Results"],
      },
    ],
    
    // Education
    education: {
      degree: "BACHELOR'S IN COMPUTER ENGINEERING",
      institution: "FEDERAL INSTITUTE OF SANTA CATARINA - IFC",
      duration: "5 years",
      schedule: "Full-time (afternoon and evening)",
      modality: "On-site",
      labels: {
        duration: "DURATION",
        schedule: "SCHEDULE",
        modality: "MODALITY",
      },
      skills: [
        "ALGORITHMS AND PROGRAMMING",
        "WEB DEVELOPMENT",
        "LOGIC FOR COMPUTING",
        "OBJECT-ORIENTED PROGRAMMING",
        "DATA STRUCTURES I and II",
        "PROGRAMMING I and II",
        "INFORMATION SECURITY",
        "SOFTWARE ENGINEERING",
        "DATABASES",
        "COMPUTER NETWORKS I and II",
        "DATA COMMUNICATION",
        "COMPUTER ARCHITECTURE",
        "OPERATING SYSTEMS",
        "INTELLIGENT SYSTEMS I and II",
        "SYSTEMS AND SIGNALS",
        "DIGITAL SIGNAL PROCESSING",
        "PROJECT MANAGEMENT",
        "BASIC ELECTRONICS",
        "CALCULUS I, II, III and NUMERICAL",
        "GENERAL PHYSICS I, II and III",
        "ENGLISH AND SPANISH COURSES",
      ],
    },
    
    // Certificates
    certificates: {
      main: {
        name: "DPO EXIN TRAINING",
        description: "Composed of the following 4 modules:",
        skills: ["LGPD", "GDPR", "DATA PRIVACY", "INFORMATION SECURITY", "ISO 27001", "ISO 27002", "ISO 27005", "ISO 27007", "ISO 31000"],
      },
      modules: [
        { name: "EXIN Privacy & Data Protection Essentials", skills: ["LGPD", "COMPLIANCE", "DATA PRIVACY"] },
        { name: "EXIN Information Security Foundation", skills: ["GDPR", "COMPLIANCE", "DATA PRIVACY"] },
        { name: "EXIN Privacy & D. Protection Professional", skills: ["LGPD", "GDPR", "ISO 27001", "ISO 27002", "ISO 27005"] },
        { name: "EXIN Privacy & D. Protection Practitioner", skills: ["LGPD", "GDPR", "ISO 27005", "ISO 27007", "ISO 31000"] },
      ],
      member: {
        name: "APDADOS Member",
        description: "APDADOS Public Committee Member",
        skills: ["LGPD", "GDPR", "DATA PRIVACY", "INFORMATION SECURITY", "ISO 27001", "ISO 27002", "ISO 27005", "ISO 27007", "ISO 31000"],
      },
    },
    
    // Portfolio
    portfolio: {
      fullStack: [
        {
          name: "SAPU - University Progress Analytics System",
          description: "A web app solution for managing, controlling, and analyzing academic progress for higher education courses",
        },
        {
          name: "Safeguard - LGPD Management & Compliance Platform",
          description: "A solution dedicated to helping companies comply with legislation, especially LGPD, offering governance and compliance aspects in an easy and efficient way.",
        },
        {
          name: "ZenBookee - Tools for Accountants",
          description: "Web application for accounting firms, featuring automations (bots), spreadsheet modifications for importing into accounting systems, and email generator.",
        },
        {
          name: "DTA Project - Virtual MIDI Controller",
          description: "Developed in the Advanced Technical Drawing course at IFC Campus SBS. Contains information about the creation process, components used, and the practical virtualized application of the developed MIDI Controller.",
        },
        {
          name: "Sr. Coruja - Price Monitor",
          description: "24/7 active monitoring with price alerts on your Telegram. Paste the product link, set your target and receive a notification as soon as the price drops. Simple, fast and automatic.",
        },
        {
          name: "Tabs - Interactive Music Platform",
          description: "Central platform for interactive music teaching and experimentation, featuring a complete library of accordions and other virtual musical instruments, interactive tablature support, responsive interfaces and modular architecture.",
        },
      ],
      landingPages: [
        {
          name: "Electrician Rudnik",
          description: "Website dedicated to promoting the services offered by Electrician Rudnik. This project provides an environment that highlights services professionally with easy client contact.",
        },
        {
          name: "Margarida de Quadra",
          description: "Website aimed at promoting the services provided by Margarida de Quadra. An online space that emphasizes services professionally while facilitating client contact.",
        },
        {
          name: "Bootstrap Website",
          description: "Activity associated with Programming 2 course in Computer Engineering, where a simple static website was developed using Bootstrap. The visual identity was predetermined by the Professor.",
        },
      ],
      comingSoon: "Coming soon",
    },
    
    // Contact
    contact: {
      title: "Contact",
      subtitle: "Have an idea, project, or job proposal?",
      description: "I'd be happy to talk.",
      sendMessage: "Send Message",
      orEmail: "or send an email to",
    },
    
    // Footer
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export function getTranslation(locale: Locale) {
  return translations[locale];
}
