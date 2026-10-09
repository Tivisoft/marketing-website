import type { Metadata } from 'next';
import { Clock, Calendar, Terminal, Shield, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Claude Code y Continue: dos enfoques para asistir el desarrollo',
  description:
    'Compara un agente de terminal de terceros con EjectorSeat, una solución empresarial basada en Continue para VS Code y Cursor con modelo de desarrollo integrado y FinOps.',
  alternates: { canonical: '/blog/claude-code-vs-continue-gateway-empresarial' },
  openGraph: {
    title: 'Claude Code y Continue: diferencias para equipos de software | Tivisoft',
    description:
      'Una comparación entre herramientas de terceros y EjectorSeat, la solución empresarial basada en Continue para VS Code y Cursor.',
    url: 'https://tivisoft.com/blog/claude-code-vs-continue-gateway-empresarial',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'article',
  },
  keywords: ['Claude Code vs Continue', 'asistente de código empresarial', 'Continue VS Code', 'Continue Cursor', 'EjectorSeat', 'FinOps desarrollo'],
};

const claudeVsContinueFaqs = [
  {
    question: '¿EjectorSeat es un competidor o un proveedor de Claude Code?',
    answer:
      'No. Claude Code es una herramienta de terceros y no es el modelo ni el proveedor integrado de EjectorSeat. EjectorSeat es una solución empresarial basada en Continue, modificada y ofrecida como plugin para VS Code y Cursor.',
  },
  {
    question: '¿Qué es Continue y cómo se usa con EjectorSeat?',
    answer:
      'Continue es un proyecto open source de asistentes de código, no un IDE. EjectorSeat parte de Continue y lo modifica. El developer recibe una API key, la ingresa en el plugin de VS Code o Cursor y usa el modelo integrado para desarrollo de software.',
  },
  {
    question: '¿EjectorSeat conecta cuentas de Anthropic u OpenAI?',
    answer:
      'No. EjectorSeat incluye su modelo especializado en desarrollo de software; no es una solución BYOK para conectar las cuentas o modelos de Anthropic, OpenAI u otros proveedores.',
  },
  {
    question: '¿Qué ofrece la capa FinOps?',
    answer:
      'Los créditos de EjectorSeat ofrecen más tokens de inferencia y la capa FinOps ayuda a optimizar el gasto y analizar patrones de uso para orientar capacitación y retroalimentación del equipo. El ahorro depende del uso y no es una promesa de reducción absoluta.',
  },
  {
    question: '¿EjectorSeat ofrece una VPC o garantiza que el procesamiento nunca se conecta a internet?',
    answer:
      'EjectorSeat no se ofrece actualmente dentro de una VPC del cliente. La garantía de no entrenar con datos depende de las cláusulas del proveedor DeepInfra. Tivisoft ofrece por separado soluciones empresariales para operar asistentes en la infraestructura del cliente sin conexión a internet.',
  },
];

export default function ClaudeCodeVsContinuePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: 'Claude Code y Continue: dos enfoques para asistir el desarrollo',
        description: 'Comparación de un agente de terminal de terceros con EjectorSeat basado en Continue para VS Code y Cursor.',
        datePublished: '2026-09-24T08:00:00+00:00',
        dateModified: '2026-10-09T00:00:00+00:00',
        author: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
        publisher: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: claudeVsContinueFaqs.map(({ question, answer }) => ({
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
        <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }, { name: 'Claude Code y Continue', href: '/blog/claude-code-vs-continue-gateway-empresarial' }]} />
        <header className="border-b border-slate-800 pt-4 pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300">Arquitectura de IA</span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />9 de octubre, 2026</span><span>•</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />6 min de lectura</span>
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">Claude Code y Continue: dos enfoques para asistir el desarrollo</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">Los equipos pueden comparar agentes de terminal y plugins de IDE según su flujo de trabajo. EjectorSeat es una solución empresarial basada en Continue, hecha para VS Code y Cursor.</p>
        </header>

        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Respuesta directa: ¿Cómo encaja EjectorSeat?</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base"><strong>Continue es un proyecto open source, no un IDE.</strong> EjectorSeat es una modificación empresarial de Continue disponible como plugin para VS Code y Cursor. El developer ingresa en el plugin una API key provista para acceder al modelo integrado de desarrollo de software. Claude Code es una herramienta de terceros y no forma parte de los modelos o proveedores incluidos con EjectorSeat.</p>
        </div>

        <article className="prose prose-invert max-w-none space-y-8 text-base leading-relaxed text-slate-300 sm:text-lg">
          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Dos formas de trabajar con asistentes de código</h2>
            <p>Claude Code y Continue describen experiencias distintas. Claude Code es una herramienta de terceros orientada al trabajo desde terminal. Continue es un proyecto open source que integra capacidades de asistencia en editores compatibles. EjectorSeat parte de Continue y desarrolla su propia experiencia empresarial para VS Code y Cursor.</p>
            <div className="my-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="mb-3 flex items-center gap-2 font-bold text-purple-400"><Terminal className="h-5 w-5" />Agentes de terminal de terceros</div>
                <p className="text-sm text-slate-300">Herramientas como Claude Code se usan desde consola y pueden trabajar con comandos y archivos de un proyecto según sus capacidades y permisos.</p>
                <p className="mt-4 border-t border-slate-800 pt-3 text-xs text-slate-400"><strong>Al evaluar:</strong> revisa controles de acceso, manejo de datos y costos del proveedor de esa herramienta.</p>
              </div>
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-6">
                <div className="mb-3 flex items-center gap-2 font-bold text-emerald-400"><Layers className="h-5 w-5" />EjectorSeat basado en Continue</div>
                <p className="text-sm text-slate-300">Plugin empresarial de EjectorSeat para VS Code y Cursor, basado en una versión modificada de Continue y con un modelo integrado para desarrollo de software.</p>
                <p className="mt-4 border-t border-slate-800 pt-3 text-xs text-emerald-300/80"><strong>Acceso:</strong> el developer ingresa la API key en el plugin.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Por qué los equipos exploran alternativas</h2>
            <p>Al buscar alternativas a asistentes como GitHub Copilot, los equipos pueden estar buscando mayor confiabilidad en seguridad: tanto para su infraestructura como para la protección de sus secretos empresariales. Conviene comparar el flujo real de datos, las garantías contractuales y los controles disponibles para cada producto, sin asumir que todos ofrecen la misma arquitectura.</p>
            <p>En EjectorSeat, la garantía de no entrenar el modelo con los datos es la establecida en las cláusulas del proveedor DeepInfra. EjectorSeat no se ofrece actualmente como despliegue en la VPC del cliente. Tivisoft también ofrece soluciones empresariales separadas para ejecutar asistentes de código en infraestructura propia, con procesamiento que no se conecta a internet.</p>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Control de gasto y acompañamiento al equipo</h2>
            <p>Los créditos de EjectorSeat ofrecen más tokens de inferencia. La capa FinOps ayuda a optimizar el gasto de recursos y analizar el comportamiento de uso del personal, información que puede servir para planear capacitación y dar retroalimentación.</p>
            <div className="my-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Qué conviene revisar en una evaluación</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" /><span>Qué modelo y proveedor incluye el producto y qué API key requiere el desarrollador.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" /><span>Qué datos procesa cada servicio y qué compromisos contractuales aplican.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" /><span>Cómo se miden tokens y gasto, y cómo se usa el análisis FinOps para apoyar al equipo.</span></li>
              </ul>
            </div>
          </section>
        </article>
        <FaqSection items={claudeVsContinueFaqs} />
        <CtaBanner title="Conoce EjectorSeat para tu equipo" subtitle="Revisa el plugin para VS Code y Cursor, el modelo de desarrollo integrado y la capa FinOps." primaryButtonText="Hablar con Tivisoft" secondaryButtonText="Ver integración Continue" secondaryButtonHref="/integraciones/continue" />
      </div>
      <Footer />
    </main>
  );
}
