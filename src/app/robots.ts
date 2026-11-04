import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/llms.txt',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Amazonbot', 'Applebot-Extended'],
        allow: '/',
      },
    ],
    sitemap: 'https://tivisoft.com/sitemap.xml',
    host: 'https://tivisoft.com',
  };
}
