import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Pedaleando sin parar | Videojuego de Aventura y Drama | Tivisoft Games',
  description:
    'Descubre Pedaleando sin parar: acompaña al oso polar Debi en su emotiva travesía en bicicleta por Colombia. Juega la demo en PC y móvil.',
  alternates: {
    canonical: '/games',
  },
  openGraph: {
    title: 'Pedaleando sin parar | Tivisoft Games',
    description:
      'Sumérgete en la aventura narrativa de Debi por Colombia. Videojuego indie disponible para PC y dispositivos móviles.',
    url: 'https://tivisoft.com/games',
    siteName: 'Tivisoft',
    locale: 'es_ES',
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