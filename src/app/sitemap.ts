import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tivisoft.com';
  const now = new Date();

  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/alternativas/github-copilot', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/alternativas/cursor', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/integraciones/continue', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/precios', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/finops-ia', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/seguridad-y-custodia', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/despliegue-en-tu-infraestructura', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.85, changeFrequency: 'daily' as const },
    { url: '/blog/costo-real-asistente-ia-codigo-equipo', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog/github-copilot-vs-claude-code-vs-cursor-equipos', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog/claude-code-vs-continue-gateway-empresarial', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog/que-significa-ia-no-entrena-con-tu-codigo', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/blog/gobierno-de-agentes-ia-en-desarrollo-de-software', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/games', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
