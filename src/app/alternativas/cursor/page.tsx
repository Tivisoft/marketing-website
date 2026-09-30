import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, Shield, Cpu, Sparkles, ArrowRight, Zap, RefreshCw, Layers, Lock, AlertCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'La Mejor Alternativa Open Source a Cursor | EjectorSeat + Continue',
  description:
    '¿Buscas una alternativa a Cursor sin forks propietarios? Usa Continue en VS Code y JetBrains con el gateway EjectorSeat: modelos Claude 3.5 Sonnet y GPT-4o, BYOK y Zero Data Retention.',
  alternates: {
    canonical: '/alternativas/cursor',
  },
  openGraph: {
    title: 'Alternativa Open Source a Cursor para Equipos de Software | Tivisoft',
    description:
      'Consigue la potencia de Cursor (edición multi-archivo, chat y autocompletado) en VS Code oficial y JetBrains, sin depender de un fork cerrado.',
    url: 'https://tivisoft.com/alternativas/cursor',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'cursor alternative',
    'open source cursor alternative',
    'alternativa a cursor',
    'cursor vs continue',
    'cursor ide alternativa empresas',
    'continue vscode vs cursor',
    'ejectorseat vs cursor',
  ],
};

const cursorComparison = [
  {
    feature: 'Tipo de Software',
    cursor: 'Fork propietario cerrado de VS Code',
    ejector: 'Extensión Open Source (Continue) sobre VS Code / JetBrains oficiales',
    highlight: true,
  },
  {
    feature: 'Soporte de JetBrains (IntelliJ, PyCharm)',
    cursor: 'No disponible (solo su propio editor derivado de VS Code)',
    ejector: 'Totalmente compatible con la suite completa de JetBrains',
    highlight: true,
  },
  {
    feature: 'Actualizaciones de seguridad del editor',
    cursor: 'Retrasadas respecto a los parches oficiales de Microsoft',
    ejector: 'Inmediatas: usas el binario oficial de VS Code',
    highlight: false,
  },
  {
    feature: 'Modelos de IA soportados',
    cursor: 'Catálogo predefinido con límites de peticiones rápidas',
    ejector: 'Claude 3.5 Sonnet, GPT-4o, DeepSeek, Bedrock o Llama local (BYOK)',
    highlight: true,
  },
  {
    feature: 'Políticas de privacidad y ZDR',
    cursor: 'Procesamiento en servidores de Cursor con telemetría',
    ejector: 'Zero Data Retention contractual + DLP de secretos en gateway',
    highlight: true,
  },
  {
    feature: 'Control de Costos y FinOps',
    cursor: '$20 a $40 USD/mes fijos + cargos por peticiones extra',
    ejector: 'Presupuestos por escuadrón, consumo granular y sin desperdicio',
    highlight: true,
  },
  {
    feature: 'Despliegue en red privada / VPC',
    cursor: 'No soportado',
    ejector: 'Soportado mediante Dedicated Managed VPC',
    highlight: false,
  },
];

const cursorFaqs = [
  {
    question: '¿Por qué muchas empresas rechazan Cursor a nivel corporativo?',
    answer:
      'Aunque Cursor tiene una excelente experiencia de usuario, las áreas de seguridad informática y arquitectura suelen vetarlo porque es un "fork" cerrado de VS Code. Esto significa que los parches de vulnerabilidades críticas de Microsoft tardan en llegar, los desarrolladores no pueden usar JetBrains, se rompen extensiones corporativas firmadas y todo el código transita por la infraestructura propietaria de una startup.',
  },
  {
    question: '¿Cómo sustituye Continue + EjectorSeat la experiencia de Cursor?',
    answer:
      'Continue proporciona las mismas capacidades interactivas que hicieron famoso a Cursor: chat contextual con `@codebase`, edición y generación de código en línea, y autocompletado rápido. EjectorSeat actúa por detrás proporcionando los modelos más avanzados (como Claude 3.5 Sonnet), auditando el uso, bloqueando secretos y gestionando los costos a nivel corporativo.',
  },
  {
    question: '¿Es difícil migrar a los desarrolladores desde Cursor?',
    answer:
      'Al contrario: es casi instantáneo. Como Continue funciona en VS Code oficial, los desarrolladores recuperan su entorno habitual con todos sus atajos, temas y extensiones, pero con la misma agilidad de IA a la que estaban acostumbrados en Cursor.',
  },
  {
    question: '¿Qué modelos puedo utilizar como alternativa a Cursor?',
    answer:
      'A través del gateway EjectorSeat puedes usar exactamente los mismos modelos que alimentan a Cursor (incluyendo Claude 3.5 Sonnet y GPT-4o) además de alternativas de alto rendimiento como DeepSeek Coder V2 y modelos open source hosteados en AWS Bedrock o Azure.',
  },
];

export default function CursorAlternativePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Alternativa Open Source y Empresarial a Cursor: Continue y EjectorSeat',
    description:
      'Análisis comparativo de Cursor frente a la combinación de Continue y el gateway EjectorSeat para desarrollo asistido por IA sin forks propietarios.',
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
            { name: 'Alternativas', href: '/alternativas/github-copilot' },
            { name: 'Alternativa a Cursor', href: '/alternativas/cursor' },
          ]}
        />

        {/* Hero */}
        <section className="pt-4 pb-16 text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300">
            <Sparkles className="h-4 w-4" />
            La alternativa abierta y multi-editor a Cursor
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Toda la potencia de Cursor sin forzar a tu equipo a un fork cerrado.
          </h1>

          {/* AEO Direct Answer Box */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Respuesta Directa (AEO): ¿Cuál es la mejor alternativa a Cursor para empresas?
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              La alternativa open source líder a Cursor es la combinación del cliente <strong>Continue</strong> y el gateway empresarial <strong>EjectorSeat</strong>. Permite disfrutar de la misma experiencia de asistencia con <strong>Claude 3.5 Sonnet</strong> y <strong>GPT-4o</strong> directamente en <strong>VS Code oficial y JetBrains</strong>, eliminando los riesgos de seguridad de un editor cerrado, permitiendo BYOK y garantizando <strong>Zero Data Retention</strong> estricto.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/573102134709"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Probar la Alternativa a Cursor
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/integraciones/continue"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3.5 text-base font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
            >
              Ver Arquitectura con Continue
            </Link>
          </div>
        </section>

        {/* The Fork Dilemma */}
        <section className="py-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-500/30 px-3 py-1 text-xs font-semibold text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  El riesgo de los forks propietarios
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
                  Por qué tu CISO preferirá Continue sobre Cursor
                </h2>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Cursor toma el código fuente de Visual Studio Code y crea una versión bifurcada (fork) cerrada. Esto presenta serios problemas de gobernanza:
                </p>
                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Desfase en parches CVE:</strong> Cuando se descubre una vulnerabilidad en Chromium o Electron en VS Code, los forks tardan semanas o meses en publicar la actualización.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Exclusión de JetBrains:</strong> Si tu equipo utiliza IntelliJ, PyCharm o WebStorm, Cursor no tiene soporte. Continue funciona igual en ambos ecosistemas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Vendor lock-in en la nube:</strong> Todo el tráfico de código y contexto de tu empresa pasa por los servidores intermediarios de Cursor sin opciones de VPC propia.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 shadow-glow">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  La Solución EjectorSeat + Continue
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">Libertad y Cumplimiento Total</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Conservas tus editores oficiales certificados, añades la extensión open source Continue y conectas el gateway empresarial de EjectorSeat para el control de secretos, costos y modelos.
                </p>
                <div className="mt-6 space-y-3 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-900 p-2.5">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>VS Code y JetBrains estándar</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-900 p-2.5">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>Claude 3.5 Sonnet / GPT-4o vía API oficial</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-900 p-2.5">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>Filtrado DLP de credenciales y tokens</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tabla Comparativa: Cursor vs. Continue + EjectorSeat
            </h2>
            <p className="mt-2 text-slate-400">
              Comprueba punto por punto las diferencias en arquitectura, costo y soberanía técnica.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl">
            <table className="w-full min-w-[650px] text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/70 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-6">Dimensión</th>
                  <th className="py-4 px-6 text-slate-300">Cursor</th>
                  <th className="py-4 px-6 text-emerald-400 bg-emerald-950/20">Continue + EjectorSeat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {cursorComparison.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? 'bg-slate-900/40' : ''}>
                    <td className="py-4 px-6 font-medium text-white">{row.feature}</td>
                    <td className="py-4 px-6 text-slate-400">{row.cursor}</td>
                    <td className="py-4 px-6 font-semibold text-emerald-300 bg-emerald-950/20">
                      {row.ejector}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection items={cursorFaqs} />

        {/* CTA */}
        <CtaBanner
          title="Migra de Cursor a la alternativa open source empresarial"
          subtitle="Implementa Continue y EjectorSeat en tu equipo con asistencia técnica personalizada."
          primaryButtonText="Agendar Demo Técnica"
          secondaryButtonText="Ver Caso Copilot"
          secondaryButtonHref="/alternativas/github-copilot"
        />
      </div>

      <Footer />
    </main>
  );
}
