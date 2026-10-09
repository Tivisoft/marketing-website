import type { Metadata } from 'next';
import { Clock, Calendar, CheckCircle2, Shield, Terminal, Cpu, Layers } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'GitHub Copilot, Claude Code y Cursor: guía para equipos',
  description:
    'Compara asistentes de código para equipos y conoce EjectorSeat, solución empresarial basada en Continue para VS Code y Cursor, con modelo integrado y análisis FinOps.',
  alternates: { canonical: '/blog/github-copilot-vs-claude-code-vs-cursor-equipos' },
  openGraph: {
    title: 'Copilot, Claude Code y Cursor: guía para equipos | Tivisoft',
    description:
      'Criterios para evaluar asistentes de código, seguridad y costos, junto con EjectorSeat basado en Continue.',
    url: 'https://tivisoft.com/blog/github-copilot-vs-claude-code-vs-cursor-equipos',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'article',
  },
  keywords: ['alternativa GitHub Copilot', 'Copilot vs Cursor', 'Claude Code para equipos', 'asistentes de código empresarial', 'EjectorSeat', 'Continue VS Code Cursor'],
};

const guideFaqs = [
  {
    question: '¿Por qué las empresas buscan alternativas a GitHub Copilot?',
    answer:
      'Algunas buscan más confiabilidad y control de seguridad para su infraestructura y sus secretos empresariales, además de entender mejor el uso y los costos. La evaluación debe comparar garantías y controles concretos de cada proveedor.',
  },
  {
    question: '¿Qué es EjectorSeat frente a Copilot, Claude Code y Cursor?',
    answer:
      'EjectorSeat es una solución empresarial basada en una versión modificada de Continue, distribuida como plugin para VS Code y Cursor. Incluye un modelo especializado en desarrollo de software. Copilot, Claude Code y Cursor son productos de terceros para comparar; no son modelos ni proveedores integrados de EjectorSeat.',
  },
  {
    question: '¿EjectorSeat permite elegir cualquier proveedor o usar BYOK?',
    answer:
      'No. Se usa el modelo integrado de desarrollo de software. El developer recibe una API key de acceso y la ingresa en el plugin; no conecta una cuenta propia de Anthropic u OpenAI.',
  },
  {
    question: '¿Qué protección de datos ofrece EjectorSeat?',
    answer:
      'La garantía de no entrenar con los datos es la que establecen las cláusulas del proveedor DeepInfra. EjectorSeat no se ofrece actualmente como una solución en VPC del cliente. Tivisoft cuenta por separado con soluciones empresariales para procesar asistentes de código en infraestructura propia sin conexión a internet.',
  },
  {
    question: '¿Cómo se puede ahorrar con EjectorSeat?',
    answer:
      'Los créditos ofrecen más tokens de inferencia y la capa FinOps ayuda a optimizar el gasto de recursos. El análisis de uso también puede orientar capacitación y retroalimentación del personal; el resultado depende de los patrones de consumo.',
  },
];

export default function CopilotVsCursorVsClaudeCodePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: 'GitHub Copilot, Claude Code y Cursor: guía para equipos',
        description: 'Criterios de evaluación para asistentes de código y descripción de EjectorSeat basado en Continue.',
        datePublished: '2026-09-24T08:00:00+00:00',
        dateModified: '2026-10-09T00:00:00+00:00',
        author: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
        publisher: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: guideFaqs.map(({ question, answer }) => ({
          '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={articleSchema} />
      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }, { name: 'Asistentes de código para equipos', href: '/blog/github-copilot-vs-claude-code-vs-cursor-equipos' }]} />
        <header className="mb-8 border-b border-slate-800 pt-4 pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-semibold text-blue-300">Comparativas</span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />9 de octubre, 2026</span><span>•</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />7 min de lectura</span>
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">GitHub Copilot, Claude Code y Cursor: guía para equipos de software</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">La elección de asistentes de código también implica evaluar seguridad, manejo de datos y costo. Esta guía presenta criterios de comparación y explica dónde encaja EjectorSeat.</p>
        </header>

        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Respuesta directa: ¿Qué ofrece EjectorSeat?</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base"><strong>EjectorSeat es una solución empresarial basada en Continue, un proyecto open source, con modificaciones propias y plugin para VS Code y Cursor.</strong> El developer recibe una API key y la ingresa en el plugin para usar el modelo integrado de desarrollo de software. La capa FinOps ayuda a optimizar el gasto y analizar patrones de uso.</p>
        </div>

        <article className="prose prose-invert max-w-none space-y-8 text-base leading-relaxed text-slate-300 sm:text-lg">
          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Qué comparar entre asistentes</h2>
            <p>GitHub Copilot, Claude Code y Cursor son productos de terceros con experiencias y condiciones propias. Sus funciones, compatibilidad, precios y compromisos de datos pueden cambiar; verifica la oferta vigente del proveedor antes de decidir. En una evaluación empresarial, considera al menos estos criterios:</p>
            <div className="my-6 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><Terminal className="mb-3 h-5 w-5 text-blue-400" /><h3 className="text-lg font-bold text-white">Flujo de trabajo</h3><p className="mt-2 text-sm text-slate-300">Editor, terminal, tareas cubiertas y experiencia del equipo.</p></div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><Shield className="mb-3 h-5 w-5 text-emerald-400" /><h3 className="text-lg font-bold text-white">Seguridad y datos</h3><p className="mt-2 text-sm text-slate-300">Controles de acceso, tratamiento de datos, secretos empresariales y compromisos contractuales.</p></div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><Cpu className="mb-3 h-5 w-5 text-purple-400" /><h3 className="text-lg font-bold text-white">Costo y uso</h3><p className="mt-2 text-sm text-slate-300">Modelo de cobro, límites, consumo observado y herramientas para gestionar el gasto.</p></div>
            </div>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Por qué buscar alternativas a GitHub Copilot</h2>
            <p>Las organizaciones pueden buscar alternativas que les den mayor confiabilidad respecto a la seguridad de su infraestructura y la protección de sus secretos empresariales. También pueden querer más claridad sobre el gasto, el acceso del personal técnico o la forma de acompañar la adopción. Estos requisitos se deben contrastar con las condiciones concretas de cada solución.</p>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">EjectorSeat: Continue modificado para uso empresarial</h2>
            <p>Continue es un proyecto open source de asistentes de código, no un IDE. EjectorSeat parte de Continue, incorpora modificaciones empresariales y se distribuye como plugin para VS Code y Cursor. El producto incluye un modelo especializado en desarrollo de software; no ofrece BYOK ni conecta al usuario con modelos de Anthropic, OpenAI o proveedores elegidos por el cliente.</p>
            <div className="my-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-white"><Layers className="h-5 w-5 text-emerald-400" />Acceso del desarrollador</h3>
              <ol className="list-decimal space-y-2 pl-6 text-sm text-slate-300">
                <li>El equipo proporciona una API key al developer.</li>
                <li>El developer la ingresa en el plugin de EjectorSeat.</li>
                <li>El asistente usa el modelo integrado para desarrollo de software.</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Garantías de datos y opciones de infraestructura</h2>
            <p>La garantía de no entrenar con los datos corresponde a las cláusulas del proveedor DeepInfra. EjectorSeat no es actualmente un servicio desplegado en una VPC del cliente. Tivisoft ofrece además soluciones empresariales separadas para operar asistentes de código en infraestructura propia, con procesamiento que no se conecta a internet.</p>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Tokens y análisis FinOps</h2>
            <p>Los créditos de EjectorSeat ofrecen más tokens de inferencia. Su capa FinOps ayuda a optimizar el gasto de recursos y analizar patrones de uso del personal; esos hallazgos pueden servir para planear capacitación y ofrecer retroalimentación. El resultado económico depende del consumo y del uso que la organización haga del análisis.</p>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-sm text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" /><p>Para comparar productos, valida por separado compatibilidad, garantías contractuales, ubicación del procesamiento, condiciones de precios y métricas de uso.</p></div>
          </section>
        </article>
        <FaqSection items={guideFaqs} />
        <CtaBanner title="Conoce EjectorSeat para tu equipo" subtitle="Evalúa el plugin para VS Code y Cursor, el modelo integrado y las herramientas FinOps." primaryButtonText="Hablar con Tivisoft" secondaryButtonText="Ver integración Continue" secondaryButtonHref="/integraciones/continue" />
      </div>
      <Footer />
    </main>
  );
}
