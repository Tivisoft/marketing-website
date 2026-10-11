import Link from 'next/link';
import { ArrowRight, Bot, ChartBar, Code2, Sparkles, Zap, ShieldCheck, Terminal, DollarSign, Layers, BookOpen, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const services = [
  {
    title: 'Integración de IA a soluciones tecnológicas existentes',
    description: 'Conectamos modelos y automatizaciones a tus sistemas actuales para ganar productividad y escalabilidad.',
    icon: Zap,
  },
  {
    title: 'Desarrollo de software a la medida con IA',
    description: 'Creamos productos omnicanal, dashboards inteligentes y UX orientadas a resultados diferenciadores.',
    icon: Code2,
  },
];

const homeFeaturedPosts = [
  {
    slug: 'costo-real-asistente-ia-codigo-equipo',
    title: 'El costo real de un asistente de IA para tu equipo',
    description: 'Cómo evaluar el consumo real de asistentes de código y usar FinOps para encontrar oportunidades de optimización.',
    category: 'FinOps',
    readTime: '6 min',
  },
  {
    slug: 'github-copilot-vs-claude-code-vs-cursor-equipos',
    title: 'GitHub Copilot vs. Claude Code vs. Cursor',
    description: 'Comparativa exhaustiva entre extensiones de IDE, editores bifurcados y agentes de terminal para ingeniería.',
    category: 'Comparativas',
    readTime: '8 min',
  },
  {
    slug: 'que-significa-ia-no-entrena-con-tu-codigo',
    title: '¿Qué significa que la IA no entrene con tu código?',
    description: 'Guía para CISOs sobre el alcance de las cláusulas de no entrenamiento y el tratamiento de datos del proveedor.',
    category: 'Seguridad',
    readTime: '5 min',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-sm text-emerald-200">
                <Sparkles className="h-4 w-4" />
                IA para negocios de alto impacto
              </div>

              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                La Inteligencia Artificial que Evoluciona tu Empresa. Hoy.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Desde <strong>EjectorSeat</strong>, nuestro asistente empresarial de código basado en una modificación de Continue, hasta software a medida y videojuegos interactivos.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
                >
                  Descubrir EjectorSeat
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="https://wa.me/573102134709"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-blue-400/60 bg-blue-500/10 px-6 py-3 font-semibold text-blue-100 transition hover:border-blue-300 hover:bg-blue-500/20"
                >
                  Agendar Consultoría
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.8)] backdrop-blur-sm">
                <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                      <span className="h-3 w-3 rounded-full bg-blue-400" />
                      <span className="h-3 w-3 rounded-full bg-slate-500" />
                    </div>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                      EjectorSeat Telemetry
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                      <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
                        <Bot className="h-4 w-4 text-emerald-400" />
                        EjectorSeat para equipos de desarrollo
                      </div>
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-2xl font-bold text-white">VS Code + Cursor</p>
                          <p className="text-sm text-slate-400">plugin propio basado en Continue</p>
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 text-emerald-300">
                          <Zap className="h-7 w-7" />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                        <p className="text-sm text-slate-400">Acceso</p>
                        <p className="mt-2 text-2xl font-bold text-emerald-400">Por clave</p>
                      </div>
                      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                        <p className="text-sm text-slate-400">Uso y costos</p>
                        <p className="mt-2 text-2xl font-bold text-white">FinOps</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                      <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                        <span>Visibilidad del consumo</span>
                        <span className="text-emerald-300">Por equipo y usuario</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-emerald-300">Servicios</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Soluciones inteligentes para equipos que quieren escalar.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/15 to-blue-500/15 text-emerald-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EjectorSeat Product Hub */}
      <section id="productos" className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/80 shadow-[0_30px_80px_rgba(15,23,42,0.8)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                Asistente empresarial de código
              </div>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">EjectorSeat</h2>

              <p className="mt-5 text-slate-300 leading-relaxed">
                Un plugin propio basado en una modificación de <strong>Continue</strong> para VS Code y Cursor. Integra un modelo especializado en desarrollo, gobierno de acceso para el equipo y análisis FinOps del consumo.
              </p>

              <ul className="mt-8 space-y-4 text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </span>
                  <span><strong>Tratamiento de datos:</strong> DeepInfra declara en <a className="text-emerald-300 underline" href="https://deepinfra.com/terms">sus términos</a> que no usa datos de clientes para entrenar modelos, con el alcance y las excepciones allí descritos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                    <ChartBar className="h-3.5 w-3.5" />
                  </span>
                  <span><strong>FinOps y control de costos:</strong> Analiza el consumo, identifica oportunidades de optimización y patrones de uso útiles para formación y retroalimentación.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <Terminal className="h-3.5 w-3.5" />
                  </span>
                  <span><strong>Instalación sencilla:</strong> El desarrollador pega su clave API de EjectorSeat en el plugin para VS Code o Cursor.</span>
                </li>
              </ul>

              {/* Quick links to new subpages */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/integraciones/continue"
                  className="rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Integración Continue →
                </Link>
                <Link
                  href="/alternativas/github-copilot"
                  className="rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
                >
                  Alternativa a Copilot
                </Link>
                <Link
                  href="/alternativas/cursor"
                  className="rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
                >
                  Alternativa a Cursor
                </Link>
                <Link
                  href="/precios"
                  className="rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
                >
                  Planes y Precios
                </Link>
                <Link
                  href="/finops-ia"
                  className="rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
                >
                  FinOps IA
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-700 bg-slate-950/80 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900 p-4 shadow-inner shadow-slate-950">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="h-3 w-3 rounded-full bg-slate-500" />
                  </div>
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300">Panel FinOps</span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-sm text-slate-400">Consumo por equipo</p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-3xl font-bold text-white">Trazable</p>
                      <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300">Por usuario y proyecto</span>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Uso de inferencia</p>
                      <p className="mt-2 text-2xl font-bold text-white">Tokens</p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Acceso del equipo</p>
                      <p className="mt-2 text-2xl font-bold text-white">Claves</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                      <span>Datos para decisiones FinOps</span>
                      <span className="text-emerald-300">Visibilidad</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Resources Section on Homepage */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-300">Recursos Técnicos</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Artículos destacados de ingeniería</h2>
          </div>
          <Link
            href="/blog"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
          >
            Ver todos los artículos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {homeFeaturedPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-200 hover:-translate-y-1 hover:border-slate-700"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-400/30 px-2.5 py-0.5 font-medium text-emerald-300">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white transition hover:text-emerald-300">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  Leer análisis
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.7)]">
          <p className="text-sm uppercase tracking-[0.22em] text-emerald-300">Hablemos</p>
          <h3 className="mt-4 text-3xl font-bold text-white">Diseñamos IA que encaja con tu operación.</h3>
          <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto">
            Desde la implementación de EjectorSeat en tu equipo de desarrollo hasta proyectos a medida.
          </p>
          <a
            href="https://wa.me/573102134709"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
          >
            Agendar consultoría
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
