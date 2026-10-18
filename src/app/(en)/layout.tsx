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
    default: 'Tivisoft | Artificial Intelligence Solutions and EjectorSeat',
    template: '%s | Tivisoft',
  },
  description:
    'Custom software development, narrative video games and EjectorSeat: an enterprise coding assistant based on Continue with managed access control and FinOps.',
  alternates: alternatesFor('home', 'en'),
  openGraph: {
    title: 'Tivisoft | Artificial Intelligence for Enterprises and Engineering',
    description:
      'Artificial intelligence solutions applied to software development, source code custody and video games.',
    url: siteUrl,
    siteName: 'Tivisoft',
    locale: ogLocales.en,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tivisoft | Artificial Intelligence Solutions',
    description:
      'EjectorSeat: enterprise plugin for VS Code and Cursor with managed access and FinOps.',
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

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <JsonLd data={globalSchema('en')} />
        {children}
        <LanguageSuggestion />
      </body>
    </html>
  );
}
