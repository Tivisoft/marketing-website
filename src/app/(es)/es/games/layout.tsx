import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { alternatesFor, ogLocales, url } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Tivisoft Games: Videojuegos e Innovación para Instituciones Educativas',
  description:
    'División de videojuegos y experiencias interactivas de Tivisoft. Prueba nuestro juego lanzado Pedaleando sin parar y conoce nuestras propuestas para instituciones educativas.',
  alternates: alternatesFor('games', 'es'),
  openGraph: {
    title: 'Tivisoft Games | Videojuegos y Propuestas Educativas',
    description:
      'La industria de los videojuegos supera al cine y la música combinados. Prueba nuestro juego Pedaleando sin parar y descubre nuestras propuestas para instituciones educativas.',
    url: url('games', 'es'),
    siteName: 'Tivisoft',
    locale: ogLocales.es,
    type: 'website',
  },
};

const gameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Pedaleando sin parar',
  description:
    'Aventura narrativa que sigue la travesía del oso polar Debi desde el Polo Norte hasta recorrer las calles y paisajes de Colombia.',
  genre: ['Adventure', 'Narrative', 'Drama'],
  gamePlatform: ['PC', 'Mobile', 'Web Browser'],
  url: url('games', 'es'),
  inLanguage: 'es',
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
