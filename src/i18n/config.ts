// -----------------------------------------------------------------------------
// i18n configuration for the Tivisoft marketing site.
//
// Strategy (static export on GitHub Pages):
//   - English is the default locale and lives at the root (`/`, `/pricing`, ...).
//   - Spanish lives under the `/es` prefix (`/es`, `/es/precios`, ...).
//   - Route slugs are translated per locale for SEO; the `RouteId` keys below are
//     the stable identifiers used across pages and components to build links.
// -----------------------------------------------------------------------------

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

// Open Graph locale tags.
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
};

export type RouteId =
  | 'home'
  | 'pricing'
  | 'finops'
  | 'security'
  | 'deployment'
  | 'altCopilot'
  | 'altCursor'
  | 'intContinue'
  | 'serviceAeo'
  | 'serviceEntrepreneurs'
  | 'blog'
  | 'blogCost'
  | 'blogCompare'
  | 'blogGateway'
  | 'blogTraining'
  | 'blogGovernance'
  | 'games';

// Localized path for every route, per locale. English paths have no prefix;
// Spanish paths are nested under `/es`.
export const routes: Record<RouteId, Record<Locale, string>> = {
  home: { en: '/', es: '/es' },
  pricing: { en: '/pricing', es: '/es/precios' },
  finops: { en: '/finops-ai', es: '/es/finops-ia' },
  security: {
    en: '/security-and-data-custody',
    es: '/es/seguridad-y-custodia',
  },
  deployment: {
    en: '/deploy-on-your-infrastructure',
    es: '/es/despliegue-en-tu-infraestructura',
  },
  altCopilot: {
    en: '/alternatives/github-copilot',
    es: '/es/alternativas/github-copilot',
  },
  altCursor: {
    en: '/alternatives/cursor',
    es: '/es/alternativas/cursor',
  },
  intContinue: {
    en: '/integrations/continue',
    es: '/es/integraciones/continue',
  },
  serviceAeo: {
    en: '/services/aeo-ai-agents',
    es: '/es/servicios/aeo-agentes-ia',
  },
  serviceEntrepreneurs: {
    en: '/services/ai-product-development-for-entrepreneurs',
    es: '/es/servicios/desarrollo-productos-ia-emprendedores',
  },
  blog: { en: '/blog', es: '/es/blog' },
  blogCost: {
    en: '/blog/real-cost-of-ai-coding-assistants-per-team',
    es: '/es/blog/costo-real-asistente-ia-codigo-equipo',
  },
  blogCompare: {
    en: '/blog/github-copilot-vs-claude-code-vs-cursor-teams',
    es: '/es/blog/github-copilot-vs-claude-code-vs-cursor-equipos',
  },
  blogGateway: {
    en: '/blog/claude-code-vs-continue-enterprise-gateway',
    es: '/es/blog/claude-code-vs-continue-gateway-empresarial',
  },
  blogTraining: {
    en: '/blog/what-ai-does-not-train-on-your-code-means',
    es: '/es/blog/que-significa-ia-no-entrena-con-tu-codigo',
  },
  blogGovernance: {
    en: '/blog/ai-agent-governance-in-software-development',
    es: '/es/blog/gobierno-de-agentes-ia-en-desarrollo-de-software',
  },
  games: { en: '/games', es: '/es/games' },
};

export const siteUrl = 'https://tivisoft.com';

// Localized path for a route id.
export function path(id: RouteId, locale: Locale): string {
  return routes[id][locale];
}

// Absolute URL for a route id.
export function url(id: RouteId, locale: Locale): string {
  return `${siteUrl}${path(id, locale)}`;
}

// hreflang alternates map for a given route id (for Metadata.alternates.languages).
// Includes an x-default pointing at the default locale.
export function languageAlternates(id: RouteId): Record<string, string> {
  return {
    en: url(id, 'en'),
    es: url(id, 'es'),
    'x-default': url(id, defaultLocale),
  };
}

// Canonical + hreflang metadata block for a route id and current locale.
export function alternatesFor(id: RouteId, locale: Locale) {
  return {
    canonical: url(id, locale),
    languages: languageAlternates(id),
  };
}

// The counterpart locale for a simple two-language language switcher.
export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en';
}
