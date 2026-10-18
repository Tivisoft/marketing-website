import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { alternatesFor, ogLocales, url } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Pedaleando sin parar: an adventure and drama video game',
  description:
    'Discover Pedaleando sin parar: join polar bear Debi on his moving bicycle journey across Colombia. Play the demo on PC and mobile.',
  alternates: alternatesFor('games', 'en'),
  openGraph: {
    title: 'Pedaleando sin parar | Tivisoft Games',
    description:
      "Dive into Debi's narrative adventure across Colombia. Indie video game available for PC and mobile devices.",
    url: url('games', 'en'),
    siteName: 'Tivisoft',
    locale: ogLocales.en,
    type: 'website',
  },
};

const gameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Pedaleando sin parar',
  description:
    'A narrative adventure following the journey of polar bear Debi from the North Pole through the streets and landscapes of Colombia.',
  genre: ['Adventure', 'Narrative', 'Drama'],
  gamePlatform: ['PC', 'Mobile', 'Web Browser'],
  url: url('games', 'en'),
  inLanguage: 'en',
  author: {
    '@type': 'Organization',
    name: 'Tivisoft Games',
    url: 'https://tivisoft.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Tivisoft',
    url: 'https://tivisoft.com',
  },
  playMode: 'SinglePlayer',
  applicationCategory: 'Game',
};

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={gameSchema} />
      {children}
    </>
  );
}
