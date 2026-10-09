import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Tag, Sparkles, Shield, DollarSign, Terminal, Layers } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Blog de Inteligencia Artificial para Ingeniería de Software | Tivisoft',
  description:
    'Artículos sobre FinOps para IA, tratamiento de datos y comparativas entre asistentes de código como GitHub Copilot, Cursor, Claude Code y Continue.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog de IA para Ingeniería y Equipos de Software | Tivisoft',
    description:
      'Aprende a analizar el consumo de tokens, revisar condiciones de privacidad y seleccionar asistentes de código para tu equipo.',
    url: 'https://tivisoft.com/blog',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'costo-real-asistente-ia-codigo-equipo',
    title: 'El costo real de un asistente de IA para código',
    description:
      'Analizamos cómo medir el costo de los asistentes de código y usar FinOps para identificar oportunidades de optimización.',
    category: 'FinOps & Costos',
    readTime: '6 min',
    date: '2026-09-24',
    featured: true,
    icon: DollarSign,
  },
  {
    slug: 'github-copilot-vs-claude-code-vs-cursor-equipos',
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
    slug: 'claude-code-vs-continue-gateway-empresarial',
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
    slug: 'que-significa-ia-no-entrena-con-tu-codigo',
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
    slug: 'gobierno-de-agentes-ia-en-desarrollo-de-software',
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
    url: 'https://tivisoft.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: 'https://tivisoft.com',
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://tivisoft.com/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: '2026-10-09',
    })),
  };

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={blogListSchema} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />

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
              <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h2>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              {featuredPost.description}
            </p>

            <div className="mt-6 flex items-center">
              <Link
                href={`/blog/${featuredPost.slug}`}
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
                  key={post.slug}
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
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
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

      <Footer />
    </main>
  );
}
