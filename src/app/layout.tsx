import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { JsonLd } from '@/components/JsonLd';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tivisoft.com'),
  title: {
    default: 'Tivisoft | Soluciones de Inteligencia Artificial y EjectorSeat',
    template: '%s | Tivisoft',
  },
  description:
    'Desarrollo de software a medida, videojuegos narrativos y EjectorSeat: gateway empresarial de IA para equipos de desarrollo con Continue, FinOps y Zero Data Retention.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tivisoft | Inteligencia Artificial para Empresas e Ingeniería',
    description:
      'Soluciones de inteligencia artificial aplicadas a desarrollo de software, custodia de código fuente y videojuegos.',
    url: 'https://tivisoft.com',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tivisoft | Soluciones de Inteligencia Artificial',
    description:
      'EjectorSeat: Gateway empresarial de IA para desarrollo con Continue, FinOps y Zero Data Retention.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://tivisoft.com/#organization',
      name: 'Tivisoft',
      url: 'https://tivisoft.com',
      logo: 'https://tivisoft.com/logo.png',
      description:
        'Empresa tecnológica especializada en inteligencia artificial para desarrollo de software, videojuegos narrativos y soluciones enterprise.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+57-310-213-4709',
        contactType: 'sales and customer service',
        availableLanguage: ['Spanish', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://tivisoft.com/#website',
      url: 'https://tivisoft.com',
      name: 'Tivisoft',
      publisher: {
        '@id': 'https://tivisoft.com/#organization',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://tivisoft.com/#ejectorseat',
      name: 'EjectorSeat',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Cross-platform (VS Code, JetBrains)',
      description:
        'Gateway empresarial de IA para equipos de software con soporte nativo de Continue, Zero Data Retention (ZDR), escaneo DLP de secretos y control FinOps de costos.',
      provider: {
        '@id': 'https://tivisoft.com/#organization',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '9.00',
        offerCount: 3,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={outfit.variable}>
        <JsonLd data={globalSchema} />
        {children}
      </body>
    </html>
  );
}
