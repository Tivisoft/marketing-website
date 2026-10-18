import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Tag, Sparkles, Shield, DollarSign, Terminal, Layers, Search } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { path, url, alternatesFor, siteUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Blog de inteligencia artificial para ingeniería de software y AEO',
  description:
    'Artículos sobre AEO (Answer Engine Optimization), FinOps para IA, tratamiento de datos y comparativas entre asistentes de código.',
  alternates: alternatesFor('blog', 'es'),
  openGraph: {
    title: 'Blog de IA para Ingeniería y Empresas | Tivisoft',
    description:
      'Descubre por qué tu empresa necesita AEO, cómo analizar el consumo de tokens y cómo seleccionar asistentes de código.',
    url: url('blog', 'es'),
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
};

const blogPosts = [
  {
    route: 'serviceAeo' as const,
    href: path('serviceAeo', 'es'),
    title: '¿Por qué tu empresa necesita AEO? Antes necesitabas SEO, ahora también necesitas AEO',
    description:
      'Explicamos qué es el AEO (Answer Engine Optimization), la importancia de aparecer en las búsquedas de los agentes de IA ante el cambio de la web y cómo tomar la delantera hoy.',
    category: 'AEO & Agentes IA',
    readTime: '5 min',
    date: '2026-10-18',
    featured: true,
    icon: Search,
  },
  {
    route: 'blogCost' as const,
    href: path('blogCost', 'es'),
    title: 'El costo real de un asistente de IA para código',
    description:
      'Analizamos cómo medir el costo de los asistentes de código y usar FinOps para identificar oportunidades de optimización.',
    category: 'FinOps & Costos',
    readTime: '6 min',
    date: '2026-09-24',
    featured: false,
    icon: DollarSign,
  },
  {
    route: 'blogCompare' as const,
    href: path('blogCompare', 'es'),
    title: 'GitHub Copilot vs. Claude Code vs. Cursor: Guía para líderes de ingeniería',
    description:
      'Comparativa entre extensiones, editores y agentes de terminal: gobierno del acceso, tratamiento de datos y costos.',
    category: 'Comparativas',
    readTime: '8 min',
    date: '2026-09-24',
    featured: false,
    icon: Layers,
  },
  {
    route: 'blogGateway' as const,
    href: path('blogGateway', 'es'),
    title: 'Claude Code y Continue: dos enfoques para asistir el desarrollo',
    description:
      'Diferencias entre un agente de terminal y un asistente integrado en el editor, con criterios de gobierno empresarial.',
    category: 'Arquitectura',
    readTime: '7 min',
    date: '2026-09-24',
    featured: false,
    icon: Terminal,
  },
  {
    route: 'blogTraining' as const,
    href: path('blogTraining', 'es'),
    title: '¿Qué significa realmente que la IA no entrene con tu código? Guía para CISOs',
    description:
      'Cómo leer las cláusulas de no entrenamiento y retención del proveedor antes de enviar código a inferencia.',
    category: 'Seguridad y datos',
    readTime: '5 min',
    date: '2026-09-24',
    featured: false,
    icon: Shield,
  },
  {
    route: 'blogGovernance' as const,
    href: path('blogGovernance', 'es'),
    title: 'Gobierno de agentes de IA en desarrollo de software: Velocidad sin perder el control',
    description:
      'Criterios prácticos para VPs de Ingeniería y CTOs: acceso, visibilidad del consumo y formación del equipo.',
    category: 'Gobernanza',
    readTime: '7 min',
    date: '2026-09-24',
    featured: false,
    icon: BookOpen,
  },
];

export default function BlogHubPage() {
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Técnico de Tivisoft & EjectorSeat',
    description:
      'Publicaciones sobre ingeniería de software asistida por IA, FinOps, privacidad y arquitectura de modelos.',
    url: url('blog', 'es'),
    publisher: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: siteUrl,
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: url(post.route, 'es'),
      datePublished: post.date,
      dateModified: '2026-10-09',
    })),
  };

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p.route !== featuredPost.route);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="es" switchPath={path('blog', 'en')} />
      <JsonLd data={blogListSchema} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="es" items={[{ name: 'Blog', href: path('blog', 'es') }]} />

        {/* Hero */}
        <section className="pt-4 pb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            Investigación y Prácticas de Ingeniería
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Blog: IA aplicada a ingeniería de software
          </h1>
          <p className="mt-4 max-w-3xl text-slate-400 text-base sm:text-lg">
            Guías para evaluar asistentes de código, condiciones de tratamiento de datos y costos de inferencia.
          </p>
        </section>

        {/* Featured Post */}
        <section className="mb-14">
          <article className="group relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-8 shadow-glow sm:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 font-semibold text-emerald-300">
                Artículo Destacado
              </span>
              <span>{featuredPost.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {featuredPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl group-hover:text-emerald-300 transition">
              <Link href={featuredPost.href}>{featuredPost.title}</Link>
            </h2>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              {featuredPost.description}
            </p>

            <div className="mt-6 flex items-center">
              <Link
                href={featuredPost.href}
                className="inline-flex items-center gap-2 font-semibold text-emerald-400 transition group-hover:translate-x-1"
              >
                Leer artículo completo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </section>

        {/* Regular Posts Grid */}
        <section className="py-6">
          <h2 className="text-2xl font-bold text-white mb-8">Todos los artículos técnicos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regularPosts.map((post) => {
              const Icon = post.icon;
              return (
                <article
                  key={post.route}
                  className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 transition duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 font-medium text-slate-300">
                        <Icon className="h-3.5 w-3.5 text-emerald-400" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white transition hover:text-emerald-300">
                      <Link href={post.href}>{post.title}</Link>
                    </h3>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.date}</span>
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 transition hover:translate-x-0.5"
                    >
                      Leer más
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <Footer lang="es" />
    </main>
  );
}
