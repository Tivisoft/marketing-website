import Image from 'next/image';
import {
  ArrowRight,
  BookOpen,
  Film,
  Gamepad2,
  GraduationCap,
  ImageIcon,
  Play,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Cpu,
} from 'lucide-react';
import pedaleandoLogo from '@/media/Pedaleando_logo.png';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
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

const WHATSAPP_EDUCATION_EN =
  'https://wa.me/573102134709?text=Hi%20Tivisoft%2C%20I%20would%20like%20to%20learn%20about%20your%20video%20game%20and%20interactive%20learning%20proposals%20for%20our%20educational%20institution.';

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
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('games', 'es')} />

      {/* Executive Division Header & Dual Hero */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300">
            <TrendingUp className="h-4 w-4 flex-shrink-0" />
            <span>
              Industry Insight: Video games generate more revenue than the film and music industries combined
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tivisoft Games: Interactive experiences built to entertain, connect, and educate.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            We combine software engineering, art, and storytelling to build original cross-platform video games and deliver high-impact interactive programs for <strong>educational institutions</strong> and organizations. Play our released game today or bring the power of gaming to your institution.
          </p>

          {/* Industry Impact Highlight Card */}
          <div className="mt-8 max-w-4xl rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-6 shadow-glow">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              The most powerful technological and cultural medium of our era
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              The global video game industry generates more revenue than global <strong>box office film and recorded music combined</strong>. Beyond entertainment, video games represent the pinnacle of interactive software engineering—and the native language of new generations to explore, learn, and connect with meaningful stories.
            </p>
          </div>

          {/* Dual CTAs: Gamers + Educational Institutions */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#pedaleando"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-4 text-base font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              <Gamepad2 className="h-5 w-5" />
              Try Our Released Game
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#educational-institutions"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-blue-400/50 bg-blue-500/10 px-7 py-4 text-base font-semibold text-blue-100 transition hover:border-blue-300 hover:bg-blue-500/20"
            >
              <GraduationCap className="h-5 w-5 text-emerald-300" />
              Proposals for Educational Institutions
            </a>
          </div>
        </div>
      </section>

      {/* Gamer Showcase Section: Pedaleando sin parar (Light Theme Showcase) */}
      <div id="pedaleando" className="bg-slate-50 text-slate-800">
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                <Sparkles className="h-4 w-4" />
                Our Released Game · Adventure + drama
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                  <Gamepad2 className="h-4 w-4" />
                  Official Video Game
                </span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Adventure · PC &amp; mobile
                </span>
              </div>

              <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Pedaleando sin parar
              </h2>

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
                Dive into polar bear Debi&apos;s journey across Colombia. Play it now on your desktop or mobile device!
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://tivisoft.itch.io/pedaleando"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:scale-[1.02]"
                >
                  Play Demo Now
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
                        Available now
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
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 text-sm text-slate-600 shadow-sm"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            ✓
                          </span>
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

        <section
          id="story"
          className="border-t border-slate-200 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100"
        >
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
                  It all started with an animated music video that tells Debi&apos;s journey… until the story is left on an unresolved cliffhanger. That is how{' '}
                  <span className="font-semibold text-white">Pedaleando sin parar</span> was born.
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
      </div>

      {/* Educational Institutions & Organizations Section */}
      <section
        id="educational-institutions"
        className="border-t border-slate-800 bg-slate-950 py-20 text-slate-100"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-300">
              <GraduationCap className="h-4 w-4" />
              Academic Partnerships &amp; EdTech
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Video Game &amp; Interactive Learning Proposals for Educational Institutions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Today&apos;s students are interactive natives. At <strong>Tivisoft</strong>, we partner with schools, universities, and cultural institutions to harness the power of video games for education:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
              <BookOpen className="h-7 w-7 text-emerald-400" />
              <h3 className="mt-5 text-xl font-bold text-white">
                Story-Driven Cultural Games
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                We bring narrative adventures like <em>Pedaleando sin parar</em> into the classroom—connecting students with geography, cultural diversity, and social realities through interactive play.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-7 shadow-glow">
              <Cpu className="h-7 w-7 text-blue-400" />
              <h3 className="mt-5 text-xl font-bold text-white">
                Custom Game-Based Learning
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                We design and build educational video games, simulations, and interactive platforms tailored to your institution&apos;s curriculum to boost student motivation and retention.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
              <Users className="h-7 w-7 text-emerald-400" />
              <h3 className="mt-5 text-xl font-bold text-white">
                Tech Workshops &amp; Academic Labs
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                We inspire the next generation through hands-on sessions with our engineering team covering video game development, software architecture, and Artificial Intelligence.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-white">
                Do you represent a school, university, or educational institution?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                Contact us to explore our educational proposals, schedule a live demonstration, or design a custom interactive project for your students.
              </p>
            </div>

            <a
              href={WHATSAPP_EDUCATION_EN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Request a Proposal for Your Institution
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
