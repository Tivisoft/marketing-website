import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import '../globals.css';
import { JsonLd } from '@/components/JsonLd';
import { LanguageSuggestion } from '@/components/LanguageSuggestion';
import { globalSchema } from '@/i18n/schema';
import { alternatesFor, ogLocales, siteUrl } from '@/i18n/config';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tivisoft | Soluciones de Inteligencia Artificial y EjectorSeat',
    template: '%s | Tivisoft',
  },
  description:
    'Desarrollo de software a medida, videojuegos narrativos y EjectorSeat: asistente empresarial de código basado en Continue con gobierno de acceso y FinOps.',
  alternates: alternatesFor('home', 'es'),
  openGraph: {
    title: 'Tivisoft | Inteligencia Artificial para Empresas e Ingeniería',
    description:
      'Soluciones de inteligencia artificial aplicadas a desarrollo de software, custodia de código fuente y videojuegos.',
    url: alternatesFor('home', 'es').canonical,
    siteName: 'Tivisoft',
    locale: ogLocales.es,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tivisoft | Soluciones de Inteligencia Artificial',
    description:
      'EjectorSeat: plugin empresarial para VS Code y Cursor con acceso administrado y FinOps.',
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

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={outfit.variable}>
        <JsonLd data={globalSchema('es')} />
        {children}
        <LanguageSuggestion />
      </body>
    </html>
  );
}
