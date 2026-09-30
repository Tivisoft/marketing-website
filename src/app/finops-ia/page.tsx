import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, TrendingDown, DollarSign, PieChart, ShieldAlert, Cpu, CheckCircle2, ArrowRight, Sparkles, Sliders } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'FinOps para IA en Ingeniería de Software | EjectorSeat Tivisoft',
  description:
    'Aplica principios de FinOps a tus asistentes de código y modelos de IA: asignación de costos por escuadrón, límites automáticos de tokens, prompt caching y ahorro de hasta 60%.',
  alternates: {
    canonical: '/finops-ia',
  },
  openGraph: {
    title: 'FinOps for AI: Control de Costos en Asistentes de Código | EjectorSeat',
    description:
      'Elimina el despilfarro de licencias fijas y bucles agénticos descontrolados. Gestiona el gasto de Claude, GPT-4o y Copilot con el gateway FinOps de Tivisoft.',
    url: 'https://tivisoft.com/finops-ia',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'finops ia',
    'finops for ai',
    'control de costos ia desarrollo',
    'optimizacion gasto llm ingenieria',
    'finops software desarrollo',
    'ejectorseat finops',
    'ahorro licencias copilot cursor',
  ],
};

const finopsFaqs = [
  {
    question: '¿Qué es "FinOps para IA" en el contexto de desarrollo de software?',
    answer:
      'FinOps para IA es la disciplina de gestión financiera y operativa aplicada al consumo de modelos de lenguaje e infraestructura de IA por parte de equipos de ingeniería. Su objetivo es garantizar la máxima productividad del desarrollador al menor costo posible, mediante visibilidad en tiempo real (Informar), optimización de modelos y caché (Optimizar) y políticas automáticas de presupuesto (Operar).',
  },
  {
    question: '¿Cómo evita EjectorSeat que los flujos agénticos disparen la factura mensual?',
    answer:
      'Los agentes de código (como Claude Code, Continue en bucle o herramientas de testing) pueden generar cientos de miles de tokens por tarea si entran en bucles iterativos. EjectorSeat detecta anomalías de consumo en tiempo real, impone techos presupuestarios por sesión/día por desarrollador y corta bucles infinitos antes de que representen una sorpresa en la factura.',
  },
  {
    question: '¿Qué es el enrutamiento inteligente de modelos (Tiered Model Routing)?',
    answer:
      'No todas las tareas requieren el modelo más costoso. EjectorSeat enruta automáticamente el autocompletado en segundo plano a modelos ultrarrápidos y económicos (como DeepSeek Coder o Haiku), reservando modelos de frontera como Claude 3.5 Sonnet o GPT-4o únicamente para peticiones de chat y refactorización compleja, reduciendo el gasto medio de tokens hasta un 70%.',
  },
  {
    question: '¿Es compatible con el modelo BYOK (Bring Your Own Key)?',
    answer:
      'Sí. EjectorSeat permite conectar tus propias cuentas y contratos corporativos de Anthropic, Azure OpenAI o AWS Bedrock, agregando la capa de telemetría y límites presupuestarios sin comisiones abusivas sobre el consumo de inferencia.',
  },
];

export default function FinOpsIAPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Estrategia y Prácticas de FinOps para Asistentes de Código IA en Empresas',
    description:
      'Guía técnica sobre la implementación de la disciplina FinOps para controlar el costo de tokens y asistentes de código en equipos de desarrollo.',
    author: {
      '@type': 'Organization',
      name: 'Tivisoft',
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
      <JsonLd data={schemaData} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'FinOps IA', href: '/finops-ia' },
          ]}
        />

        {/* Hero */}
        <section className="pt-4 pb-16 text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300">
            <BarChart3 className="h-4 w-4" />
            Disciplina FinOps para Equipos de Ingeniería
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Controla y optimiza el costo real de la IA en tu equipo de desarrollo.
          </h1>

          {/* AEO Direct Answer Box */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Respuesta Directa (AEO): ¿Cómo ayuda FinOps para IA a recortar el presupuesto de ingeniería?
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>FinOps para IA</strong> con <strong>EjectorSeat</strong> sustituye los costosos asientos planos de licencias ($19-$40/mes por desarrollador) por una gestión basada en consumo real, <strong>enrutamiento inteligente de modelos</strong> (DeepSeek para autocompletado y Claude 3.5 para arquitectura), <strong>prompt caching</strong> y <strong>techos presupuestarios por escuadrón</strong>. Esto permite reducir entre un 40% y un 60% el gasto en inferencia manteniendo la velocidad del equipo.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/573102134709"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Auditar Gasto de IA de mi Equipo
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/precios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3.5 text-base font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
            >
              Ver Comparativa de Precios
            </Link>
          </div>
        </section>

        {/* The 3 FinOps Phases */}
        <section className="py-12">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              El Ciclo FinOps para Asistentes de Código en 3 Etapas
            </h2>
            <p className="mt-2 text-slate-400">
              Inspirado en el estándar de la FinOps Foundation y adaptado a la economía de tokens de LLMs.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <PieChart className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Fase 1</span>
              <h3 className="mt-2 text-2xl font-bold text-white">1. Informar (Inform)</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Asignación de costos transparente. Visualiza cuánto gasta cada escuadrón, proyecto o desarrollador en tokens de entrada y salida, con etiquetado claro para showback y chargeback interno.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">✓ Desglose por escuadrón y repositorio</li>
                <li className="flex items-center gap-2">✓ Telemetría en tiempo real</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-emerald-500/40 bg-slate-900/90 p-8 shadow-glow">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                <TrendingDown className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Fase 2</span>
              <h3 className="mt-2 text-2xl font-bold text-emerald-300">2. Optimizar (Optimize)</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Aprovecha prompt caching para reutilizar el contexto del repositorio con un 90% de descuento en tokens. Implementa enrutamiento escalonado para no pagar precios de Claude 3.5 en completado simple.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-emerald-400/80">
                <li className="flex items-center gap-2">✓ Hasta 90% de ahorro con Prompt Caching</li>
                <li className="flex items-center gap-2">✓ Tiered routing de modelos</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                <Sliders className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">Fase 3</span>
              <h3 className="mt-2 text-2xl font-bold text-white">3. Operar (Operate)</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Gobernanza continua y automatizada. Fija presupuestos mensuales máximos con alertas automáticas y degradación elegante a modelos de menor costo antes de exceder el presupuesto del sprint.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">✓ Alertas de desvío y corte de bucles</li>
                <li className="flex items-center gap-2">✓ Integración con Slack y SIEM</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection items={finopsFaqs} />

        {/* CTA */}
        <CtaBanner
          title="Toma el control financiero de la IA en tu empresa"
          subtitle="Implementa EjectorSeat y descubre de inmediato el desperdicio oculto en licencias y peticiones redundantes."
          primaryButtonText="Agendar Auditoría FinOps"
          secondaryButtonText="Ver Planes y Precios"
          secondaryButtonHref="/precios"
        />
      </div>

      <Footer />
    </main>
  );
}
