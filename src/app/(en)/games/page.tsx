import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Film, Gamepad2, ImageIcon, Play, Smartphone, Sparkles, MessageCircle, Globe } from 'lucide-react';
import logoLight from '@/media/LOGO TIVISOFT.png';
import pedaleandoLogo from '@/media/Pedaleando_logo.png';
import GameGallery, { type GalleryItem } from '@/components/GameGallery';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { path } from '@/i18n/config';
import debi from '@/media/galeria-pedaleando-sin-parar/0-debi.jpeg';
import debiPoloNorte from '@/media/galeria-pedaleando-sin-parar/1-Debi-polo-norte.jpeg';
import estatuaLibertad from '@/media/galeria-pedaleando-sin-parar/2-estatua-libertad.jpeg';
import isla from '@/media/galeria-pedaleando-sin-parar/3-isla.jpeg';
import islaNoche from '@/media/galeria-pedaleando-sin-parar/4-isla-noche.jpeg';
import welcomeBogota from '@/media/galeria-pedaleando-sin-parar/5-welcome-to-bogota.jpeg';
import barrio01 from '@/media/galeria-pedaleando-sin-parar/6-barrio-01.jpeg';
import barrio02 from '@/media/galeria-pedaleando-sin-parar/7-barrio-02.jpeg';
import fabrica from '@/media/galeria-pedaleando-sin-parar/8-fabrica.jpeg';
import trabajo from '@/media/galeria-pedaleando-sin-parar/trabajo.jpeg';

const gameHighlights = [
  'A narrative adventure that travels across Colombia',
  'Explore different settings alongside Debi',
  'Available to play on PC and mobile',
];

const galleryItems: GalleryItem[] = [
  { src: debi, alt: 'Debi, the polar bear protagonist of the game', caption: 'Meet Debi' },
  { src: debiPoloNorte, alt: 'Debi at the North Pole, the starting point of the adventure', caption: 'The North Pole' },
  { src: estatuaLibertad, alt: 'Debi cycling in front of the Statue of Liberty', caption: 'Heading to America' },
  { src: isla, alt: 'Level set on a tropical island', caption: 'The island' },
  { src: islaNoche, alt: 'The same island at night', caption: 'The island at night' },
  { src: welcomeBogota, alt: 'Welcome to Bogotá screen', caption: 'Welcome to Bogotá' },
  { src: barrio01, alt: 'A journey through a Colombian neighborhood', caption: 'The neighborhood' },
  { src: barrio02, alt: 'Another view of the Colombian neighborhood', caption: 'Streets with history' },
  { src: fabrica, alt: 'Level set in a factory', caption: 'The factory' },
  { src: trabajo, alt: 'Scene about the world of work in the game', caption: 'Getting to work' },
];

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-slate-50/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href={path('home', 'en')} className="flex h-12 items-center justify-center overflow-hidden rounded-full border border-emerald-200 bg-white/80 p-2 shadow-lg shadow-blue-900/5">
              <Image
                src={logoLight}
                alt="Tivisoft logo"
                width={150}
                height={36}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
            <Link href={path('home', 'en')} className="transition hover:text-emerald-600">Home</Link>
            <Link href={path('games', 'en')} className="transition hover:text-emerald-600">Games</Link>
            <a href="#story" className="transition hover:text-emerald-600">Story</a>
            <a href="#videos" className="transition hover:text-emerald-600">Videos</a>
            <a href="#gallery" className="transition hover:text-emerald-600">Gallery</a>
            <Link href={path('games', 'es')} hrefLang="es" className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-emerald-400 hover:text-emerald-700">
              <Globe className="h-3.5 w-3.5" />
              ES
            </Link>
          </div>

          <a
            href="https://tivisoft.itch.io/pedaleando"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Play Demo
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              <Sparkles className="h-4 w-4" />
              Adventure + drama
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                <Gamepad2 className="h-4 w-4" />
                Video game
              </span>
              <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Adventure · PC &amp; mobile
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Pedaleando sin parar
            </h1>

            <div className="mt-6 max-w-md overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-xl shadow-blue-900/5 sm:p-5">
              <Image
                src={pedaleandoLogo}
                alt="Pedaleando sin parar logo"
                width={520}
                height={220}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Dive into polar bear Debi&apos;s journey across Colombia.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://tivisoft.itch.io/pedaleando"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:scale-[1.02]"
              >
                Play Demo
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#videos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                <Play className="h-4 w-4" />
                Watch videos &amp; gallery
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-[0_35px_80px_rgba(30,41,59,0.12)]">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-3 sm:p-4">
                <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-emerald-200/60 blur-3xl" />
                <div className="absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-blue-200/60 blur-3xl" />

                <div className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                      <Play className="h-3.5 w-3.5 text-emerald-500" />
                      Demo game
                    </div>
                    <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 sm:text-xs">
                      In beta
                    </div>
                  </div>

                  <div className="aspect-video w-full bg-slate-100">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/ZSzDsUYp_oY?si=-NnglKKtT35z6EAh&start=77"
                      title="Tivisoft Games demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>

                  <div className="space-y-3 p-4 sm:p-5">
                    {gameHighlights.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 text-sm text-slate-600 shadow-sm">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="border-t border-slate-200 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
                <BookOpen className="h-4 w-4" />
                Where it all began
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                The game is based on this story. Don&apos;t miss it.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                It all started with an animated music video that tells Debi&apos;s journey… until the story is left on an unresolved cliffhanger. That is how <span className="font-semibold text-white">Pedaleando sin parar</span> was born.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                The video game continues that tale, reveals the parts that were never told and brings the polar bear&apos;s adventure to an ending.
              </p>

              <a
                href="#videos"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-300"
              >
                Follow the story in the game
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_35px_80px_rgba(2,6,23,0.55)]">
              <YouTubeEmbed videoId="QVRynwNuKZ8" title="Animated music video: Debi's story" lang="en" />
              <div className="p-5 sm:p-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  <Film className="h-3.5 w-3.5" />
                  Animated music video
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">Debi&apos;s story</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  The starting point of the Pedaleando sin parar universe.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="videos" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              <Film className="h-4 w-4" />
              Videos
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              See the game in action
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A look at Debi&apos;s story and how it plays on desktop and mobile.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_25px_60px_rgba(15,23,42,0.07)]">
              <YouTubeEmbed videoId="CKqeA4dnVcY" title="Pedaleando sin parar promotional video" lang="en" />
              <div className="p-5 sm:p-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  <Play className="h-3.5 w-3.5" />
                  Official trailer
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">Debi&apos;s journey</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  The promotional video that sums up the polar bear&apos;s adventure from the North Pole to Colombia.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_25px_60px_rgba(15,23,42,0.07)]">
              <YouTubeEmbed videoId="4UL5SIs6GSc" title="Pedaleando sin parar mobile gameplay" lang="en" />
              <div className="p-5 sm:p-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  <Smartphone className="h-3.5 w-3.5" />
                  Mobile version
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">Gameplay on mobile</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Touch controls designed to play anytime, anywhere.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            <ImageIcon className="h-4 w-4" />
            Gallery
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            The worlds Debi travels through
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            From the ice of the North Pole to the neighborhoods of Bogotá. Tap any image to view it larger.
          </p>
        </div>

        <div className="mt-10">
          <GameGallery items={galleryItems} lang="en" />
        </div>
      </section>

    </main>
  );
}
