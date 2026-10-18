// -----------------------------------------------------------------------------
// UI dictionaries for shared components (Navbar, Footer, CtaBanner, FaqSection,
// Breadcrumbs). Page body copy lives in the per-locale page files; this file only
// holds the chrome/navigation strings that are shared across every page.
// -----------------------------------------------------------------------------

import type { Locale } from './config';

export interface NavDictionary {
  home: string;
  aeo: string;
  solutions: string; // dropdown trigger label (brand stays "EjectorSeat")
  finops: string;
  pricing: string;
  blog: string;
  games: string;
  contact: string;
  openMenu: string;
  technicalBlog: string;
  solutionsItems: {
    continue: { title: string; desc: string };
    copilot: { title: string; desc: string };
    cursor: { title: string; desc: string };
    security: { title: string; desc: string };
    infrastructure: { title: string; desc: string };
  };
}

export interface FooterDictionary {
  brandDescription: string;
  managedAccess: string;
  whatsappContact: string;
  colServices: string;
  colEjectorSeat: string;
  colAlternatives: string;
  colResources: string;
  links: {
    serviceAeo: string;
    serviceEntrepreneurs: string;
    continue: string;
    finops: string;
    pricing: string;
    security: string;
    infrastructure: string;
    altCopilot: string;
    altCursor: string;
    blogCompare: string;
    blogGateway: string;
    blog: string;
    blogCost: string;
    blogTraining: string;
    blogGovernance: string;
    games: string;
  };
  rightsReserved: string;
  bottomHome: string;
  bottomPricing: string;
  bottomSecurity: string;
}

export interface CtaDictionary {
  badge: string;
  title: string;
  subtitle: string;
  primary: string;
  secondary: string;
}

export interface FaqDictionary {
  badge: string;
  title: string;
  description: string;
}

export interface CommonDictionary {
  home: string;
  breadcrumbAria: string;
  languageSwitch: string;
}

export interface Dictionary {
  nav: NavDictionary;
  footer: FooterDictionary;
  cta: CtaDictionary;
  faq: FaqDictionary;
  common: CommonDictionary;
}

const en: Dictionary = {
  nav: {
    home: 'Home',
    aeo: 'AEO',
    solutions: 'EjectorSeat',
    finops: 'AI FinOps',
    pricing: 'Pricing',
    blog: 'Blog',
    games: 'Games',
    contact: 'Contact',
    openMenu: 'Open navigation menu',
    technicalBlog: 'Technical Blog',
    solutionsItems: {
      continue: {
        title: 'EjectorSeat & Continue',
        desc: 'Plugin for VS Code and Cursor',
      },
      copilot: {
        title: 'GitHub Copilot alternative',
        desc: 'Managed access and FinOps',
      },
      cursor: {
        title: 'EjectorSeat in Cursor',
        desc: 'Use the plugin in VS Code or Cursor',
      },
      security: {
        title: 'Security & data',
        desc: 'Provider terms and access control',
      },
      infrastructure: {
        title: 'Enterprise infrastructure',
        desc: 'Tailored solutions by Tivisoft',
      },
    },
  },
  footer: {
    brandDescription:
      'Applied artificial intelligence solutions, enterprise AEO positioning, custom software development and narrative video games. Creators of EjectorSeat, an enterprise coding assistant based on a modification of Continue.',
    managedAccess: 'Managed access and FinOps analytics',
    whatsappContact: 'Direct contact via WhatsApp',
    colServices: 'Enterprise AI Services',
    colEjectorSeat: 'EjectorSeat',
    colAlternatives: 'Alternatives',
    colResources: 'Resources & Games',
    links: {
      serviceAeo: 'Why Your Company Needs AEO',
      serviceEntrepreneurs: 'Startups & New AI Products',
      continue: 'EjectorSeat & Continue',
      finops: 'FinOps for AI',
      pricing: 'Plans',
      security: 'Security and data handling',
      infrastructure: 'Enterprise infrastructure',
      altCopilot: 'GitHub Copilot alternative',
      altCursor: 'EjectorSeat in Cursor',
      blogCompare: 'Copilot vs Cursor vs Claude Code',
      blogGateway: 'Claude Code vs Continue',
      blog: 'AI Technical Blog',
      blogCost: 'Real Cost of AI Assistants',
      blogTraining: 'Does AI train on my code?',
      blogGovernance: 'AI Agent Governance',
      games: 'Tivisoft Games',
    },
    rightsReserved: 'Tivisoft. All rights reserved.',
    bottomHome: 'Home',
    bottomPricing: 'Plans',
    bottomSecurity: 'Security',
  },
  cta: {
    badge: 'Managed access · Built-in model · FinOps',
    title: 'Want to evaluate EjectorSeat with your team?',
    subtitle:
      'Discover the plugin for VS Code and Cursor, managed access and FinOps analytics for inference consumption.',
    primary: 'Book a Technical Demo',
    secondary: 'See Plans and Pricing',
  },
  faq: {
    badge: 'Questions and answers',
    title: 'Frequently asked questions',
    description:
      'Direct, technical answers about EjectorSeat and enterprise AI architecture.',
  },
  common: {
    home: 'Home',
    breadcrumbAria: 'Breadcrumb',
    languageSwitch: 'Ver en español',
  },
};

const es: Dictionary = {
  nav: {
    home: 'Inicio',
    aeo: 'AEO',
    solutions: 'EjectorSeat',
    finops: 'FinOps IA',
    pricing: 'Planes',
    blog: 'Blog',
    games: 'Games',
    contact: 'Contacto',
    openMenu: 'Abrir menú de navegación',
    technicalBlog: 'Blog Técnico',
    solutionsItems: {
      continue: {
        title: 'EjectorSeat y Continue',
        desc: 'Plugin para VS Code y Cursor',
      },
      copilot: {
        title: 'Alternativa a Copilot',
        desc: 'Acceso administrado y FinOps',
      },
      cursor: {
        title: 'EjectorSeat en Cursor',
        desc: 'Usa el plugin en VS Code o Cursor',
      },
      security: {
        title: 'Seguridad y datos',
        desc: 'Condiciones del proveedor y acceso',
      },
      infrastructure: {
        title: 'Infraestructura empresarial',
        desc: 'Soluciones a medida de Tivisoft',
      },
    },
  },
  footer: {
    brandDescription:
      'Soluciones de inteligencia artificial aplicada, posicionamiento AEO empresarial, desarrollo de software corporativo y videojuegos narrativos. Creadores de EjectorSeat, un asistente empresarial de código basado en una modificación de Continue.',
    managedAccess: 'Acceso administrado y análisis FinOps',
    whatsappContact: 'Contacto Directo por WhatsApp',
    colServices: 'Servicios IA',
    colEjectorSeat: 'EjectorSeat',
    colAlternatives: 'Alternativas',
    colResources: 'Recursos & Juegos',
    links: {
      serviceAeo: '¿Por qué tu empresa necesita AEO?',
      serviceEntrepreneurs: 'Startups & Nuevos Productos IA',
      continue: 'EjectorSeat y Continue',
      finops: 'FinOps para IA',
      pricing: 'Planes',
      security: 'Seguridad y tratamiento de datos',
      infrastructure: 'Infraestructura empresarial',
      altCopilot: 'Alternativa a GitHub Copilot',
      altCursor: 'EjectorSeat en Cursor',
      blogCompare: 'Copilot vs Cursor vs Claude Code',
      blogGateway: 'Claude Code vs Continue',
      blog: 'Blog Técnico de IA',
      blogCost: 'Costo Real de Asistentes IA',
      blogTraining: '¿La IA entrena con mi código?',
      blogGovernance: 'Gobierno de Agentes IA',
      games: 'Tivisoft Games',
    },
    rightsReserved: 'Tivisoft. Todos los derechos reservados.',
    bottomHome: 'Inicio',
    bottomPricing: 'Planes',
    bottomSecurity: 'Seguridad',
  },
  cta: {
    badge: 'Acceso administrado · Modelo integrado · FinOps',
    title: '¿Quieres evaluar EjectorSeat con tu equipo?',
    subtitle:
      'Conoce el plugin para VS Code y Cursor, el acceso administrado y el análisis FinOps del consumo de inferencia.',
    primary: 'Agendar Demo Técnica',
    secondary: 'Ver Planes y Precios',
  },
  faq: {
    badge: 'Preguntas y respuestas',
    title: 'Preguntas frecuentes',
    description:
      'Respuestas directas y técnicas sobre EjectorSeat y la arquitectura de IA empresarial.',
  },
  common: {
    home: 'Inicio',
    breadcrumbAria: 'Migas de pan',
    languageSwitch: 'View in English',
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
