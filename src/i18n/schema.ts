// Localized JSON-LD global schema (Organization, WebSite, SoftwareApplication).
import { type Locale, siteUrl, url } from './config';

const descriptions: Record<
  Locale,
  { org: string; software: string; os: string }
> = {
  en: {
    org: 'Technology company specialized in artificial intelligence for software development, narrative video games and enterprise solutions.',
    software:
      'Enterprise coding assistant based on a modification of Continue, with a built-in model, managed access and FinOps analytics.',
    os: 'VS Code and Cursor',
  },
  es: {
    org: 'Empresa tecnológica especializada en inteligencia artificial para desarrollo de software, videojuegos narrativos y soluciones enterprise.',
    software:
      'Asistente empresarial de código basado en una modificación de Continue, con modelo integrado, acceso administrado y análisis FinOps.',
    os: 'VS Code y Cursor',
  },
};

export function globalSchema(locale: Locale) {
  const d = descriptions[locale];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Tivisoft',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        description: d.org,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+57-310-213-4709',
          contactType: 'sales and customer service',
          availableLanguage: ['Spanish', 'English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website-${locale}`,
        url: url('home', locale),
        name: 'Tivisoft',
        inLanguage: locale,
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/#ejectorseat`,
        name: 'EjectorSeat',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: d.os,
        description: d.software,
        provider: {
          '@id': `${siteUrl}/#organization`,
        },
      },
    ],
  };
}
