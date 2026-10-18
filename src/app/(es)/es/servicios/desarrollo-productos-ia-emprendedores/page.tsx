import type { Metadata } from 'next';
import {
  ArrowRight,
  Rocket,
  Sparkles,
  Code2,
  Cpu,
  TrendingUp,
  CheckCircle2,
  Smartphone,
  Globe,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url } from '@/i18n/config';

const WHATSAPP_ENTREPRENEURS_ES =
  'https://wa.me/573102134709?text=Hola%20Tivisoft%2C%20soy%20emprendedor%20y%20quiero%20aprovechar%20la%20ola%20de%20la%20IA%20para%20desarrollar%20mi%20producto.';

export const metadata: Metadata = {
  title: 'Desarrollo de Productos con IA para Emprendedores | Aprovecha la Ola de la IA',
  description:
    '¿No aprovechaste la ola de las webs .com ni la de las Apps móviles? Hoy vivimos la ola de la IA. En Tivisoft contamos con expertos para desarrollar tu producto y llevarlo al siguiente nivel.',
  alternates: alternatesFor('serviceEntrepreneurs', 'es'),
  openGraph: {
    title: 'Aprovecha la Ola de la IA | Desarrollo de Productos para Emprendedores | Tivisoft',
    description:
      'Si dejaste pasar las olas tecnológicas anteriores, esta es tu oportunidad. Nuestro equipo de expertos desarrolla tu producto con IA y lo lleva al siguiente nivel.',
    url: url('serviceEntrepreneurs', 'es'),
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'desarrollo de productos con IA para emprendedores',
    'crear startup de inteligencia artificial',
    'desarrollo de software para startups',
    'desarrollo MVP con IA',
    'empresa desarrollo IA emprendedores',
    'Tivisoft emprendedores',
  ],
};

const entrepreneurFaqs = [
  {
    question: 'Tengo una idea de negocio con IA, ¿necesito saber programar para trabajar con Tivisoft?',
    answer:
      'No. Nuestro equipo de expertos se encarga de toda la arquitectura técnica, el diseño de producto, la integración de modelos de Inteligencia Artificial y el despliegue en la nube, acompañándote paso a paso para convertir tu visión de negocio en un producto real.',
  },
  {
    question: '¿Cómo me ayudan a llevar mi producto al siguiente nivel?',
    answer:
      'No construimos simples prototipos frágiles. Diseñamos y desarrollamos software escalable, seguro y con una experiencia de usuario diferenciadora, integrando capacidades reales de IA para que puedas validar tu mercado, adquirir clientes o presentar tu producto ante inversionistas con total solidez.',
  },
  {
    question: '¿Qué tipo de productos con IA pueden desarrollar para mi emprendimiento?',
    answer:
      'Desarrollamos plataformas SaaS potenciadas por IA, aplicaciones web y móviles inteligentes, agentes especializados por industria, automatizaciones avanzadas de procesos y productos digitales a medida adaptados a tu modelo de negocio.',
  },
  {
    question: '¿Cómo empezamos a trabajar en mi proyecto?',
    answer:
      'Contáctanos directamente por WhatsApp. Agendaremos una sesión con nuestros expertos para escuchar tu idea o conocer tu negocio actual, evaluar la viabilidad técnica y proponerte una hoja de ruta clara para lanzar y escalar tu producto.',
  },
];

export default function ServiceEntrepreneursPageES() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desarrollo de Productos con Inteligencia Artificial para Emprendedores',
    description:
      'Equipo experto de ingeniería e IA en Tivisoft para desarrollar productos tecnológicos de emprendedores y llevarlos al siguiente nivel.',
    provider: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: 'https://tivisoft.com',
    },
    areaServed: 'Worldwide',
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="es" switchPath={path('serviceEntrepreneurs', 'en')} />
      <JsonLd data={schemaData} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          lang="es"
          items={[
            {
              name: 'IA para Emprendedores',
              href: path('serviceEntrepreneurs', 'es'),
            },
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 pt-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-300">
            <Rocket className="h-4 w-4" />
            Tivisoft para Emprendedores · Desarrollo de Productos con IA
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Estamos viviendo la ola de la IA. No la dejes pasar como las anteriores.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Si hace décadas no alcanzaste a aprovechar el boom de las <strong>webs .com</strong>, ni años después la revolución de las <strong>Apps móviles</strong>, hoy tienes frente a ti la mayor oportunidad tecnológica de nuestra era. En <strong>Tivisoft</strong> contamos con los expertos capaces de desarrollar tus productos y ayudarte a llegar al siguiente nivel.
          </p>

          <div className="mt-8 max-w-4xl rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-6 shadow-glow">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Tu socio tecnológico en la revolución de la IA
            </p>
            <p className="mt-2 text-base leading-relaxed text-slate-200 sm:text-lg">
              Las grandes empresas de la próxima década están naciendo hoy. La diferencia entre quedarse con una buena idea y liderar tu sector está en la ejecución: contar con un equipo de ingeniería experto que convierta tu visión en un producto sólido, rentable y listo para escalar.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_ENTREPRENEURS_ES}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-8 py-4 text-base font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Contáctanos y lleva tu producto al siguiente nivel
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#olas-tecnologicas"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-7 py-4 text-base font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
            >
              Por qué este es tu momento
            </a>
          </div>
        </section>

        {/* Timeline of Tech Waves */}
        <section id="olas-tecnologicas" className="py-10">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Historia en movimiento
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
              Tres olas que cambiaron los negocios: esta es la tuya
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Cada gran cambio tecnológico abre una ventana irrepetible para los emprendedores que deciden construir a tiempo:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                <Globe className="h-3.5 w-3.5" />
                1ª Ola · Décadas atrás
              </div>
              <h3 className="text-xl font-bold text-white">La era de las webs .com</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Quienes llevaron sus ideas y comercios a internet cuando todo empezaba construyeron marcas que dominaron el mercado durante veinte años.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                <Smartphone className="h-3.5 w-3.5" />
                2ª Ola · La década móvil
              </div>
              <h3 className="text-xl font-bold text-white">El boom de las Apps</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Con la llegada del smartphone, los emprendedores que lanzaron aplicaciones resolvieron necesidades cotidianas y crearon industrias enteras.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-7 shadow-glow">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                3ª Ola · Hoy mismo
              </div>
              <h3 className="text-xl font-bold text-white">La Ola de la Inteligencia Artificial</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                La IA está transformando todas las industrias al mismo tiempo. Si dejaste pasar las olas anteriores, <strong>esta es la oportunidad que debes aprovechar hoy</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* How Tivisoft Helps Entrepreneurs */}
        <section className="my-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-12">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Expertos a tu lado
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
              ¿Cómo llevamos tu producto al siguiente nivel en Tivisoft?
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Contamos con un equipo de expertos en desarrollo de software e Inteligencia Artificial aplicada listo para transformar tu idea o negocio en un producto tecnológico competitivo:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <Code2 className="h-7 w-7 text-emerald-400" />
              <h3 className="mt-4 text-lg font-bold text-white">
                De la idea a un producto real y funcional
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Aterrizamos tu visión, definimos la arquitectura adecuada y construimos tu producto para que salgas al mercado con velocidad y bases sólidas.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <Cpu className="h-7 w-7 text-blue-400" />
              <h3 className="mt-4 text-lg font-bold text-white">
                Integración experta de IA y Agentes
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Incorporamos modelos de lenguaje, asistentes inteligentes y automatizaciones que aportan valor real a tus usuarios y diferencian tu oferta.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <TrendingUp className="h-7 w-7 text-emerald-400" />
              <h3 className="mt-4 text-lg font-bold text-white">
                Preparado para escalar al siguiente nivel
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Desarrollamos con estándares de calidad, seguridad y rendimiento para que tu plataforma crezca al ritmo de tus clientes e inversionistas.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                ¿Listo para construir tu producto en la era de la IA?
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Acompañamiento directo de ingenieros expertos en IA y producto.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Ideal tanto para nuevos emprendimientos como para empresas que buscan innovar.</span>
                </li>
              </ul>
            </div>

            <a
              href={WHATSAPP_ENTREPRENEURS_ES}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Hablar con nuestros expertos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <FaqSection lang="es" items={entrepreneurFaqs} />

        <CtaBanner
          lang="es"
          title="Aprovecha la ola de la IA hoy mismo"
          subtitle="Si no aprovechaste la ola de las .com ni la de las Apps, no dejes pasar esta. Contáctanos y desarrollemos juntos el producto que llevará tu proyecto al siguiente nivel."
          primaryButtonText="Contactar a Tivisoft"
          primaryButtonHref={WHATSAPP_ENTREPRENEURS_ES}
          secondaryButtonText="Ver servicio de AEO para empresas"
          secondaryButtonHref={path('serviceAeo', 'es')}
        />
      </div>

      <Footer lang="es" />
    </main>
  );
}
