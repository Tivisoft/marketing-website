import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, Shield, Cpu, Sliders, Users } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Gobierno de Agentes de IA en Desarrollo de Software | Tivisoft Blog',
  description:
    'Guía para equipos de ingeniería sobre control de acceso, análisis FinOps, seguridad y alternativas a asistentes de código como GitHub Copilot.',
  alternates: {
    canonical: '/blog/gobierno-de-agentes-ia-en-desarrollo-de-software',
  },
  openGraph: {
    title: 'Gobierno de Agentes de IA en Ingeniería de Software | Tivisoft',
    description:
      'Criterios para evaluar control de acceso, tratamiento de datos y uso de recursos en asistentes de código empresariales.',
    url: 'https://tivisoft.com/blog/gobierno-de-agentes-ia-en-desarrollo-de-software',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'article',
  },
  keywords: [
    'gobierno de agentes ia software',
    'control ia ingenieria',
    'agentes de codigo gobernanza',
    'politicas uso ia desarrollo',
    'shadow ai desarrollo software',
    'ejectorseat gobernanza ia',
  ],
};

const governanceFaqs = [
  {
    question: '¿Por qué algunas empresas buscan alternativas a GitHub Copilot?',
    answer:
      'Las organizaciones pueden evaluar alternativas según sus requisitos de control de acceso, tratamiento de datos, administración de proveedores y previsibilidad del gasto. Esto no implica que una herramienta sea adecuada para todas las políticas o arquitecturas.',
  },
  {
    question: '¿Qué ofrece EjectorSeat hoy?',
    answer:
      'EjectorSeat es un plugin para VS Code y Cursor, basado en modificaciones de Continue, que usa un modelo de desarrollo integrado servido por DeepInfra. El administrador entrega una API key al desarrollador, quien la ingresa en el plugin.',
  },
  {
    question: '¿Cómo puede FinOps ayudar a controlar el gasto?',
    answer:
      'EjectorSeat ofrece análisis FinOps para observar el uso, ayudar a optimizar el gasto y revisar patrones de consumo del equipo. Los créditos incluidos ofrecen más tokens de inferencia según las condiciones vigentes; el ahorro efectivo depende del uso y de la comparación aplicable.',
  },
];

export default function GobiernoAgentesIAPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Gobierno de agentes de IA en desarrollo de software: Velocidad sin perder el control',
    description:
      'Criterios para administrar el acceso y el uso de asistentes de código en equipos de ingeniería.',
    datePublished: '2026-09-24T08:00:00+00:00',
    dateModified: '2026-10-09T00:00:00+00:00',
    author: {
      '@type': 'Organization',
      name: 'Tivisoft Research',
      url: 'https://tivisoft.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: 'https://tivisoft.com',
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={articleSchema} />

      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Blog', href: '/blog' },
            { name: 'Gobierno de Agentes de IA', href: '/blog/gobierno-de-agentes-ia-en-desarrollo-de-software' },
          ]}
        />

        {/* Header */}
        <header className="pt-4 pb-10 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="rounded-full bg-purple-500/10 border border-purple-400/30 px-3 py-1 font-semibold text-purple-300">
              Gobernanza
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              24 de septiembre, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              7 min de lectura
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl leading-tight">
            Gobierno de agentes de IA en desarrollo de software: Velocidad sin perder el control
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Algunas organizaciones buscan alternativas a GitHub Copilot para responder a sus requisitos de confiabilidad, tratamiento de datos, control de acceso y gasto. Una evaluación útil parte de las políticas internas y de las características verificables de cada solución.
          </p>
        </header>

        {/* Direct Answer Box (AEO) */}
        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Respuesta directa: ¿qué aporta EjectorSeat a la gestión del uso?
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
            <strong>EjectorSeat</strong> es un plugin para VS Code y Cursor que permite administrar el acceso mediante API keys y ofrece análisis FinOps del uso. Integra un modelo de desarrollo servido por DeepInfra. Para requisitos de infraestructura propia y operación sin conexión a Internet, Tivisoft ofrece una solución empresarial separada.
          </p>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              El dilema: Bloquear o Descontrolar
            </h2>
            <p>
              Algunas empresas buscan alternativas a GitHub Copilot porque quieren evaluar otras opciones de control, tratamiento de datos, confiabilidad y administración del gasto. Cada organización debe contrastar esas necesidades con las condiciones del producto y de su proveedor.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 my-6">
              <div className="rounded-xl border border-rose-500/30 bg-slate-900/60 p-5">
                <h3 className="font-bold text-rose-400">1. La Prohibición Total</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Restringir herramientas sin ofrecer una alternativa que cumpla los requisitos del equipo puede dificultar la adopción de prácticas autorizadas.
                </p>
              </div>
              <div className="rounded-xl border border-yellow-500/30 bg-slate-900/60 p-5">
                <h3 className="font-bold text-yellow-400">2. El Descontrol Absoluto</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Permitir herramientas y cuentas sin una política de acceso ni seguimiento del gasto puede reducir la visibilidad del uso y de sus costos.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              El Framework de los 4 Pilares de Gobernanza
            </h2>
            <p>
              Para evaluar herramientas, los equipos pueden definir sus políticas de acceso, revisar los compromisos del proveedor y observar el gasto y los patrones de uso.
            </p>

            <div className="space-y-4 my-6">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Shield className="h-5 w-5" />
                  Pilar 1: Acceso del equipo
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  En EjectorSeat, el administrador entrega una API key al desarrollador y este la ingresa en el plugin. El producto actual no utiliza modelos de Anthropic ni OpenAI.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  <Cpu className="h-5 w-5" />
                  Pilar 2: Tratamiento de datos
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  EjectorSeat incluye un modelo de desarrollo servido por DeepInfra. Revisa los términos vigentes del proveedor y las políticas internas sobre el código que puede enviarse al asistente.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Sliders className="h-5 w-5" />
                  Pilar 3: Análisis FinOps
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  El análisis FinOps de EjectorSeat ayuda a revisar el comportamiento de uso y optimizar el gasto. Los créditos incluidos ofrecen más tokens de inferencia bajo las condiciones vigentes; el ahorro depende del patrón de uso y debe medirse frente a una referencia equivalente.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-purple-400 font-bold">
                  <Users className="h-5 w-5" />
                  Pilar 4: Acompañamiento del equipo
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Los datos agregados de uso pueden ayudar a identificar necesidades de capacitación y ofrecer retroalimentación al equipo. Las organizaciones deben definir sus prácticas de revisión y desarrollo responsable.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              El Rol de EjectorSeat en la Gobernanza Técnica
            </h2>
            <p>
              EjectorSeat parte de Continue y se ofrece como plugin para VS Code y Cursor. Da al administrador una forma de proporcionar acceso con API keys y herramientas FinOps para analizar el uso del equipo.
            </p>
          </section>
        </article>

        {/* FAQs */}
        <FaqSection items={governanceFaqs} />

        {/* CTA */}
        <CtaBanner
          title="Establece un gobierno de IA eficiente en tu equipo de software"
          subtitle="Conoce el plugin, el modelo integrado y las funciones FinOps de EjectorSeat."
          primaryButtonText="Agendar Consulta de Gobernanza"
          secondaryButtonText="Ver Caso Continue"
          secondaryButtonHref="/integraciones/continue"
        />
      </div>

      <Footer />
    </main>
  );
}
