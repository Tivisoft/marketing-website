import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Search,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Globe,
  Layers,
  Clock,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url } from '@/i18n/config';

const WHATSAPP_AEO_ES =
  'https://wa.me/573102134709?text=Hola%20Tivisoft%2C%20quiero%20que%20mi%20empresa%20tome%20la%20delantera%20con%20su%20servicio%20de%20AEO.';

export const metadata: Metadata = {
  title: '¿Por qué tu empresa necesita AEO? Antes necesitabas SEO, ahora también necesitas AEO',
  description:
    'Antes necesitabas SEO, ahora también necesitas AEO (Answer Engine Optimization). Descubre por qué aparecer en las búsquedas de agentes de IA es clave para el futuro de tu empresa.',
  alternates: alternatesFor('serviceAeo', 'es'),
  openGraph: {
    title: '¿Por qué tu empresa necesita AEO? | Tivisoft',
    description:
      'Antes necesitabas SEO, ahora también necesitas AEO. Posiciona tu empresa en las búsquedas de agentes de IA y toma la delantera ahora que se puede.',
    url: url('serviceAeo', 'es'),
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'qué es AEO',
    'Answer Engine Optimization',
    'por qué mi empresa necesita AEO',
    'posicionamiento en agentes de IA',
    'búsquedas en ChatGPT y Perplexity',
    'agencia AEO',
    'Tivisoft AEO',
  ],
};

const aeoFaqs = [
  {
    question: '¿Qué significa AEO y en qué se diferencia del SEO tradicional?',
    answer:
      'AEO significa Answer Engine Optimization (Optimización para Motores de Respuesta). Mientras el SEO tradicional busca posicionar enlaces en una lista de resultados para ganar clics, el AEO estructura la información y la autoridad digital de tu empresa para que los agentes de IA y modelos de lenguaje (como ChatGPT, Perplexity, Claude o Gemini) comprendan tu oferta y te recomienden directamente cuando un usuario pide una solución.',
  },
  {
    question: '¿El AEO reemplaza al SEO o se complementan?',
    answer:
      'Se complementan directamente: antes necesitabas SEO, ahora también necesitas AEO. Una base sólida de indexabilidad sigue siendo fundamental, pero los agentes de IA requieren además claridad semántica, datos estructurados y respuestas verificables para citarte como fuente confiable.',
  },
  {
    question: '¿Por qué es urgente implementar AEO ahora?',
    answer:
      'Porque el comportamiento de búsqueda está migrando aceleradamente hacia agentes conversacionales. En una búsqueda tradicional aparecen diez opciones en primera página; un agente de IA suele recomendar solo entre una y tres empresas. Quienes estructuren su presencia para agentes hoy tomarán la delantera antes de que sus competidores reaccionen.',
  },
  {
    question: '¿Cómo ayuda Tivisoft a mi empresa con el servicio de AEO?',
    answer:
      'En Tivisoft contamos con una importante experiencia en este trabajo. Analizamos cómo perciben los agentes de IA a tu marca hoy, estructuramos la arquitectura técnica y semántica de tu sitio, optimizamos el acceso para rastreadores de IA y construimos contenido orientado a que los agentes comprendan y recomienden tus servicios.',
  },
];

export default function ServiceAeoPageES() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Servicio de AEO (Answer Engine Optimization) para Empresas',
    description:
      'Antes necesitabas SEO, ahora también necesitas AEO. Servicio especializado para posicionar empresas en las búsquedas de agentes de IA y motores de respuesta.',
    provider: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: 'https://tivisoft.com',
    },
    areaServed: 'Worldwide',
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="es" switchPath={path('serviceAeo', 'en')} />
      <JsonLd data={schemaData} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          lang="es"
          items={[{ name: '¿Por qué tu empresa necesita AEO?', href: path('serviceAeo', 'es') }]}
        />

        {/* Hero Section */}
        <section className="pb-16 pt-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-300">
            <Sparkles className="h-4 w-4" />
            Antes necesitabas SEO, ahora también necesitas AEO
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            ¿Por qué tu empresa necesita AEO?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            La web está viviendo su mayor transformación en dos décadas. Tus clientes ya no solo buscan en listas de enlaces tradicionales: ahora le preguntan directamente a <strong>agentes de Inteligencia Artificial</strong> qué proveedor elegir. Si tu empresa no está preparada para las búsquedas de los agentes, estás cediendo tu mercado.
          </p>

          <div className="mt-8 max-w-4xl rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-6 shadow-glow">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              El cambio de paradigma en internet
            </p>
            <p className="mt-2 text-lg font-bold text-white sm:text-xl">
              &ldquo;Antes necesitabas SEO, ahora también necesitas AEO.&rdquo;
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
              <strong>AEO (Answer Engine Optimization)</strong> es el conjunto de estrategias técnicas y de contenido que permite que los motores de respuesta y agentes de IA —como ChatGPT, Perplexity, Claude, Gemini y Google AI Overviews— entiendan qué hace tu empresa, confíen en tu relevancia y te incluyan en sus respuestas cuando un cliente potencial busca tus servicios.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_AEO_ES}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-8 py-4 text-base font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Contáctanos y toma la delantera
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#importancia-aeo"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-7 py-4 text-base font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
            >
              Descubrir cómo funciona el AEO
            </a>
          </div>
        </section>

        {/* Comparison: SEO vs AEO */}
        <section id="importancia-aeo" className="py-10">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              La proyección del cambio de la web
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
              Por qué aparecer en las búsquedas de los agentes define el futuro de tu negocio
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Cada mes, millones de compradores y tomadores de decisiones reemplazan las búsquedas fragmentadas por consultas completas a agentes de IA. Mira cómo cambia el recorrido de tu cliente:
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                <Search className="h-3.5 w-3.5 text-slate-400" />
                Ayer: Búsqueda tradicional (Solo SEO)
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                El usuario buscaba palabras clave y abría 10 pestañas
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-500 flex-shrink-0" />
                  <span>El comprador escribía términos cortos y debía investigar página por página.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-500 flex-shrink-0" />
                  <span>Estar entre los primeros 10 resultados aún te daba visibilidad y tráfico constante.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-500 flex-shrink-0" />
                  <span>Bastaba con repetir palabras clave y acumular enlaces genéricos.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-7 sm:p-9 shadow-glow">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                <Bot className="h-3.5 w-3.5 text-emerald-300" />
                Hoy y Mañana: La Web de Agentes (SEO + AEO)
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                El agente investiga por el usuario y recomienda a los mejores
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-200 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    El cliente pregunta: <em>&ldquo;¿Qué empresa me recomiendas para resolver este problema y por qué?&rdquo;</em>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    El agente sintetiza la web en segundos y menciona únicamente de <strong>1 a 3 opciones confiables</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    Si tu empresa tiene AEO, el agente entiende tu propuesta de valor y te convierte en la recomendación directa.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Three Pillars of Why Now */}
        <section className="grid gap-6 py-10 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <TrendingUp className="h-7 w-7 text-emerald-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Crecimiento exponencial de agentes</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Las consultas en asistentes de IA y motores de respuesta crecen día tras día. Preparar tu presencia digital hoy asegura que tu marca sea la referencia que los modelos aprendan y citen.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/80 p-7">
            <Layers className="h-7 w-7 text-blue-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Claridad para las máquinas</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Los agentes de IA necesitan datos estructurados, entidades claras, arquitectura técnica limpia y contenido que responda con precisión a las dudas reales de tus compradores.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <Clock className="h-7 w-7 text-emerald-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Toma la delantera ahora que se puede</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              La mayoría de las empresas aún desconoce qué es el AEO. Actuar en esta etapa temprana te permite posicionar tu empresa con mucha menos fricción antes de que tus competidores reaccionen.
            </p>
          </div>
        </section>

        {/* Tivisoft Experience Section */}
        <section className="my-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
                <Globe className="h-3.5 w-3.5" />
                Experiencia comprobada en ingeniería e IA
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                En Tivisoft tenemos una importante experiencia en AEO
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                El AEO no se resuelve con trucos superficiales; requiere entender a fondo cómo los grandes modelos de lenguaje y los agentes autónomos rastrean, procesan y validan la información en la web.
              </p>
              <p className="mt-3 leading-relaxed text-slate-300">
                En <strong>Tivisoft</strong> contamos con una importante experiencia realizando este trabajo. Acompañamos a tu empresa desde el diagnóstico de visibilidad en agentes de IA hasta la implementación técnica y estratégica para que tu negocio destaque cuando tus clientes pregunten por soluciones en tu sector.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Ventaja Competitiva
              </p>
              <p className="mt-3 text-xl font-bold text-white">
                Haz que los agentes de IA recomienden a tu empresa
              </p>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Agenda una conversación directa con nuestro equipo para evaluar el estado actual de tu empresa y trazar tu estrategia de AEO.
              </p>
              <a
                href={WHATSAPP_AEO_ES}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
              >
                Contactar a Tivisoft ahora
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <FaqSection lang="es" items={aeoFaqs} />

        <CtaBanner
          lang="es"
          title="Toma la delantera con AEO, ahora que se puede"
          subtitle="Antes necesitabas SEO, ahora también necesitas AEO. Contáctanos y aprovecha nuestra experiencia para posicionar a tu empresa en las búsquedas de los agentes de IA."
          primaryButtonText="Hablar con expertos en AEO"
          primaryButtonHref={WHATSAPP_AEO_ES}
          secondaryButtonText="Ver soluciones empresariales"
          secondaryButtonHref={path('home', 'es')}
        />
      </div>

      <Footer lang="es" />
    </main>
  );
}
