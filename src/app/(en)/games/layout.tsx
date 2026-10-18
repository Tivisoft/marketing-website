import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { alternatesFor, ogLocales, url } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Tivisoft Games: Video Games & Interactive Proposals for Educational Institutions',
  description:
    'Tivisoft interactive and video game division. Play our released game Pedaleando sin parar and explore our interactive learning proposals for educational institutions.',
  alternates: alternatesFor('games', 'en'),
  openGraph: {
    title: 'Tivisoft Games | Video Games & Educational Institutions',
    description:
      'The video game industry generates more revenue than film and music combined. Play Pedaleando sin parar and discover our programs for educational institutions.',
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
