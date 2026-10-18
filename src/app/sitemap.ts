import type { MetadataRoute } from 'next';
import { routes, locales, siteUrl, type RouteId } from '@/i18n/config';

const priorities: Record<RouteId, { priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }> = {
  home: { priority: 1.0, changeFrequency: 'weekly' },
  altCopilot: { priority: 0.9, changeFrequency: 'weekly' },
  altCursor: { priority: 0.9, changeFrequency: 'weekly' },
  intContinue: { priority: 0.9, changeFrequency: 'weekly' },
  pricing: { priority: 0.9, changeFrequency: 'weekly' },
  finops: { priority: 0.85, changeFrequency: 'weekly' },
  security: { priority: 0.85, changeFrequency: 'monthly' },
  deployment: { priority: 0.8, changeFrequency: 'monthly' },
  blog: { priority: 0.85, changeFrequency: 'daily' },
  blogCost: { priority: 0.8, changeFrequency: 'monthly' },
  blogCompare: { priority: 0.8, changeFrequency: 'monthly' },
  blogGateway: { priority: 0.8, changeFrequency: 'monthly' },
  blogTraining: { priority: 0.75, changeFrequency: 'monthly' },
  blogGovernance: { priority: 0.75, changeFrequency: 'monthly' },
  games: { priority: 0.7, changeFrequency: 'monthly' },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  (Object.keys(routes) as RouteId[]).forEach((id) => {
    const meta = priorities[id];
    locales.forEach((locale) => {
      entries.push({
        url: `${siteUrl}${routes[id][locale]}`,
        changeFrequency: meta.changeFrequency,
        priority: meta.priority,
        alternates: {
          languages: {
            en: `${siteUrl}${routes[id].en}`,
            es: `${siteUrl}${routes[id].es}`,
          },
        },
      });
    });
  });

  return entries;
}
