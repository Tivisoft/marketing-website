import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Cpu, Key, Layers, Shield, Sparkles, Terminal } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Continue y EjectorSeat para VS Code y Cursor',
  description:
    'Conoce EjectorSeat, la solución empresarial basada en Continue para VS Code y Cursor: acceso con API key, modelo integrado de desarrollo y herramientas FinOps.',
  alternates: { canonical: '/integraciones/continue' },
  openGraph: {
    title: 'Continue + EjectorSeat para VS Code y Cursor | Tivisoft',
    description:
      'Una versión empresarial basada en Continue, con plugin para VS Code y Cursor, modelo de desarrollo integrado y análisis FinOps.',
    url: 'https://tivisoft.com/integraciones/continue',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'Continue VS Code',
    'Continue Cursor',
    'alternativa GitHub Copilot empresas',
    'EjectorSeat',
    'asistente de código empresarial',
    'FinOps IA desarrollo',
  ],
};

const continueFaqs = [
  {
    question: '¿Qué es Continue y qué relación tiene con EjectorSeat?',
    answer:
      'Continue es un proyecto open source de asistentes de código usado por desarrolladores. EjectorSeat parte de Continue y lo modifica para ofrecer una solución empresarial con gobierno de acceso y análisis FinOps. EjectorSeat no es un IDE: hoy se ofrece como plugin para VS Code y Cursor.',
  },
  {
    question: '¿Cómo empieza a usarlo un desarrollador?',
    answer:
      'El desarrollador recibe una API key, la ingresa en el plugin de EjectorSeat y usa el asistente desde VS Code o Cursor.',
  },
  {
    question: '¿Puedo conectar mi propia cuenta o elegir cualquier proveedor de IA?',
    answer:
      'No. EjectorSeat incluye el modelo destinado al desarrollo de software y no funciona como una opción BYOK para conectar cuentas de Anthropic, OpenAI u otros proveedores.',
  },
  {
    question: '¿Qué garantía existe sobre el uso de los datos para entrenar modelos?',
    answer:
      'La garantía de no entrenar el modelo con los datos se basa en las cláusulas del proveedor DeepInfra. Consulta esas cláusulas para conocer su alcance; EjectorSeat no ofrece por ello una garantía de procesamiento en VPC propia.',
  },
  {
    question: '¿Cómo ayuda EjectorSeat a controlar el gasto?',
    answer:
      'Los créditos ofrecen más tokens de inferencia y la capa FinOps ayuda a optimizar el gasto y analizar patrones de uso. Ese análisis también puede apoyar la capacitación y retroalimentación del equipo.',
  },
];

export default function ContinueIntegrationPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: 'Continue + EjectorSeat para equipos de software',
        description:
          'Cómo funciona EjectorSeat, una solución empresarial basada en Continue, en VS Code y Cursor.',
        author: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
        publisher: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
        about: { '@type': 'SoftwareApplication', name: 'EjectorSeat', applicationCategory: 'DeveloperApplication' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: continueFaqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={schemaData} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Integraciones', href: '/integraciones/continue' }, { name: 'Continue + EjectorSeat', href: '/integraciones/continue' }]} />

        <section className="pt-4 pb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
            <Sparkles className="h-4 w-4" /> Solución empresarial basada en Continue
          </div>
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Asistente de código empresarial para VS Code y Cursor.
          </h1>
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">¿Qué es EjectorSeat?</p>
            <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
              Continue es un proyecto open source de asistentes de código. <strong>EjectorSeat parte de Continue y lo modifica para ofrecer funciones empresariales de acceso y FinOps.</strong> Se usa como plugin para VS Code y Cursor, con un modelo integrado para desarrollo de software. Para empezar, el developer recibe una API key y la ingresa en el plugin.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-[1.02]">
              Consultar sobre EjectorSeat <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/precios" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3.5 font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white">
              Conocer la oferta
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Cómo se usa</h2>
            <p className="mt-2 text-slate-400">El flujo para el desarrollador es directo: plugin, API key y asistencia de código.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <Terminal className="mb-4 h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-bold text-white">1. Instala el plugin</h3>
              <p className="mt-2 text-sm text-slate-300">EjectorSeat está disponible como plugin para VS Code y Cursor. Continue es el proyecto open source del que parte y que fue modificado para esta solución.</p>
            </div>
            <div className="relative rounded-2xl border border-emerald-500/40 bg-slate-900/90 p-6">
              <Key className="mb-4 h-6 w-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-emerald-300">2. Ingresa tu API key</h3>
              <p className="mt-2 text-sm text-slate-300">El equipo entrega una API key al developer, quien la introduce en el plugin para habilitar el acceso.</p>
            </div>
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <Cpu className="mb-4 h-6 w-6 text-purple-400" />
              <h3 className="text-lg font-bold text-white">3. Usa el modelo integrado</h3>
              <p className="mt-2 text-sm text-slate-300">EjectorSeat incluye un modelo especializado en desarrollo de software. No conecta el producto con cuentas de Anthropic u OpenAI.</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <div className="flex items-center gap-3"><Shield className="h-6 w-6 text-emerald-400" /><h2 className="text-2xl font-bold text-white">Gobierno y análisis de uso</h2></div>
              <p className="mt-4 text-slate-300">EjectorSeat está pensado para que las empresas administren el acceso del personal técnico al asistente y revisen el uso desde su capa de FinOps. Los créditos incluyen más tokens de inferencia, mientras que el análisis de patrones ayuda a optimizar el gasto y a orientar capacitación y retroalimentación.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <div className="flex items-center gap-3"><Layers className="h-6 w-6 text-blue-400" /><h2 className="text-2xl font-bold text-white">Opciones para distintas necesidades</h2></div>
              <p className="mt-4 text-slate-300">La garantía de no entrenar con los datos corresponde a <a className="text-emerald-300 underline" href="https://deepinfra.com/terms">las cláusulas del proveedor DeepInfra</a>. Para organizaciones que requieren asistentes de código y procesamiento dentro de su propia infraestructura, Tivisoft también ofrece soluciones empresariales diseñadas para operar sin conexión a internet.</p>
            </div>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-sm text-slate-400">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
            <p>Las características de aislamiento de red, despliegue y tratamiento de datos dependen de la solución contratada. EjectorSeat no se ofrece actualmente como servicio en una VPC del cliente.</p>
          </div>
        </section>

        <FaqSection items={continueFaqs} />
        <CtaBanner title="Conoce EjectorSeat para tu equipo" subtitle="Conoce el plugin para VS Code y Cursor, el modelo integrado de desarrollo y las capacidades de gobierno y FinOps." primaryButtonText="Hablar con Tivisoft" secondaryButtonText="Leer comparativa" secondaryButtonHref="/blog/github-copilot-vs-claude-code-vs-cursor-equipos" />
      </div>
      <Footer />
    </main>
  );
}
