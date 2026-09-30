import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ShieldCheck, Zap, Layers, Sparkles, ArrowRight, Server, Terminal, Lock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'La Mejor Alternativa a GitHub Copilot para Empresas | EjectorSeat',
  description:
    'Descubre por qué equipos de software migran de GitHub Copilot a EjectorSeat con Continue: Zero Data Retention (ZDR), modelos Claude 3.5 y GPT-4o sin lock-in y FinOps para ahorrar hasta un 60%.',
  alternates: {
    canonical: '/alternativas/github-copilot',
  },
  openGraph: {
    title: 'Alternativa Empresarial a GitHub Copilot | EjectorSeat + Continue',
    description:
      'Supera el vendor lock-in de Copilot: usa Claude 3.5 Sonnet, GPT-4o o DeepSeek en VS Code y JetBrains con custodia de código total y DLP de secretos.',
    url: 'https://tivisoft.com/alternativas/github-copilot',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'github copilot alternative',
    'alternativa a github copilot',
    'alternativa open source copilot',
    'continue vscode copilot',
    'asistente ia codigo privacidad',
    'zero data retention ai',
    'ejectorseat tivisoft',
  ],
};

const comparisonData = [
  {
    feature: 'Modelos disponibles',
    copilot: 'Modelos fijos de OpenAI / Microsoft',
    cursor: 'Modelos seleccionados por Cursor',
    ejector: 'Claude 3.5 Sonnet, GPT-4o, DeepSeek, Bedrock, Llama 3 (BYOK)',
    highlight: true,
  },
  {
    feature: 'Soporte de IDE',
    copilot: 'Extensión para VS Code, JetBrains, Visual Studio',
    cursor: 'Fork propietario cerrado de VS Code',
    ejector: 'VS Code y JetBrains nativos vía Continue (Open Source)',
    highlight: false,
  },
  {
    feature: 'Zero Data Retention (ZDR)',
    copilot: 'Políticas estándar corporativas de Microsoft',
    cursor: 'Almacena telemetría en sus servidores',
    ejector: 'Garantía ZDR contractual: tu código no se almacena ni entrena',
    highlight: true,
  },
  {
    feature: 'DLP de secretos y tokens',
    copilot: 'No detecta ni redacta secretos antes de enviar',
    cursor: 'Sin redactado preventivo en cliente',
    ejector: 'Escaneo y redactado de secretos y credenciales en el gateway',
    highlight: true,
  },
  {
    feature: 'Modelo de precios y FinOps',
    copilot: '$19 a $39 USD/mes/usuario (asiento plano)',
    cursor: '$20 a $40 USD/mes/usuario + costos extras',
    ejector: 'FinOps real: consumo transparente por escuadrón y BYOK',
    highlight: true,
  },
  {
    feature: 'Despliegue en VPC privada',
    copilot: 'No disponible (solo SaaS multi-tenant)',
    cursor: 'No disponible',
    ejector: 'Disponible: Managed VPC dedicada para máxima soberanía',
    highlight: false,
  },
  {
    feature: 'Vendor Lock-in',
    copilot: 'Alto (ecosistema Microsoft GitHub)',
    cursor: 'Alto (dependencia de binarios propietarios de Cursor)',
    ejector: 'Cero: cliente 100% open-source (Continue) y gateway agnóstico',
    highlight: true,
  },
];

const faqs = [
  {
    question: '¿Por qué las empresas buscan una alternativa a GitHub Copilot?',
    answer:
      'Las principales razones son la rigidez en la elección de modelos (Copilot limita a modelos específicos de OpenAI sin acceso inmediato a lo mejor de Anthropic Claude 3.5 Sonnet o DeepSeek), el costo fijo por asiento que desperdicia presupuesto en desarrolladores con uso bajo, y la necesidad de políticas estrictas de Zero Data Retention y redactado de secretos (DLP) antes de que el código salga de la red corporativa.',
  },
  {
    question: '¿Qué es EjectorSeat y cómo se compara con Copilot?',
    answer:
      'EjectorSeat es un gateway empresarial de IA desarrollado por Tivisoft que se conecta directamente al cliente open-source Continue en VS Code y JetBrains. A diferencia de Copilot, EjectorSeat te permite utilizar cualquier modelo de IA (Anthropic, OpenAI, AWS Bedrock, etc.), centraliza la gestión de claves API, audita cada interacción, filtra secretos mediante DLP y ofrece métricas FinOps para optimizar el gasto de tu equipo.',
  },
  {
    question: '¿Los desarrolladores tienen que cambiar de editor de código?',
    answer:
      'No. A diferencia de alternativas como Cursor (que obligan a instalar un fork cerrado de VS Code), EjectorSeat funciona mediante la extensión Continue en las versiones oficiales y estándares de VS Code y la suite de JetBrains (IntelliJ, WebStorm, PyCharm), manteniendo intactos todos los plugins corporativos y configuraciones.',
  },
  {
    question: '¿Cómo garantiza EjectorSeat que la IA no entrene con nuestro código?',
    answer:
      'EjectorSeat implementa acuerdos Zero Data Retention (ZDR) con los proveedores de inferencia y opera bajo una arquitectura de paso efímero: el código nunca se almacena en bases de datos del gateway, los tokens sensibles se redactan automáticamente mediante DLP y no existe almacenamiento intermedio para re-entrenamiento.',
  },
  {
    question: '¿Cuánto puede ahorrar una empresa migrando de Copilot a EjectorSeat?',
    answer:
      'Los equipos suelen ahorrar entre un 35% y un 60% en TCO. Mientras que GitHub Copilot cobra una tarifa plana de $19-$39 USD por desarrollador al mes independientemente de su uso real, EjectorSeat permite pagar solo por el cómputo consumido (BYOK o planes optimizados) con límites y enrutamiento inteligente por escuadrón.',
  },
];

export default function GitHubCopilotAlternativePage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EjectorSeat',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform (VS Code, JetBrains)',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Planes flexibles y evaluación empresarial para equipos de desarrollo.',
    },
    description:
      'Gateway empresarial de IA para desarrollo de software con Continue. Alternativa a GitHub Copilot con Zero Data Retention, FinOps y soporte multi-modelo.',
    provider: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: 'https://tivisoft.com',
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={productSchema} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Alternativas', href: '/alternativas/github-copilot' },
            { name: 'Alternativa a GitHub Copilot', href: '/alternativas/github-copilot' },
          ]}
        />

        {/* Hero Section */}
        <section className="relative pt-4 pb-16 text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300">
            <Sparkles className="h-4 w-4" />
            La alternativa abierta, privada y rentable a GitHub Copilot
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            La alternativa empresarial a GitHub Copilot sin lock-in ni fuga de código.
          </h1>

          {/* AEO Direct Answer Summary Box */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Respuesta Directa (AEO): ¿Por qué elegir EjectorSeat + Continue frente a Copilot?
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>EjectorSeat</strong> con el cliente open source <strong>Continue</strong> es la alternativa líder a GitHub Copilot para equipos de ingeniería. A diferencia de Copilot, ofrece <strong>libertad total de modelos</strong> (Claude 3.5 Sonnet, GPT-4o, DeepSeek), <strong>Zero Data Retention contractual</strong> garantizado, <strong>redactado automático de secretos (DLP)</strong> y un control <strong>FinOps de costos por escuadrón</strong> que ahorra entre el 35% y el 60% frente a las tarifas planas tradicionales.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/573102134709"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Solicitar Demostración
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/integraciones/continue"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3.5 text-base font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
            >
              Cómo funciona con Continue
            </Link>
          </div>
        </section>

        {/* Comparison Matrix Section */}
        <section className="py-12">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Comparativa detallada: GitHub Copilot vs. Cursor vs. EjectorSeat
            </h2>
            <p className="mt-2 text-slate-400">
              Analizamos las dimensiones críticas para equipos de tecnología: modelos, privacidad, costos y gobierno corporativo.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl">
            <table className="w-full min-w-[650px] text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/70 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-6">Característica</th>
                  <th className="py-4 px-6 text-slate-300">GitHub Copilot</th>
                  <th className="py-4 px-6 text-slate-300">Cursor</th>
                  <th className="py-4 px-6 text-emerald-400 bg-emerald-950/20">
                    EjectorSeat + Continue
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? 'bg-slate-900/40' : ''}>
                    <td className="py-4 px-6 font-medium text-white">{row.feature}</td>
                    <td className="py-4 px-6 text-slate-400">{row.copilot}</td>
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

        {/* 4 Pillars of Migration */}
        <section className="py-12">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ¿Por qué migrar de GitHub Copilot a EjectorSeat?
            </h2>
            <p className="mt-2 text-slate-400">
              Diseñado para responder a las exigencias de directores de ingeniería, arquitectos y CISOs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Agnóstico de Modelos (BYOK)</h3>
              <p className="mt-2 text-sm text-slate-300">
                No quedes atrapado en una sola familia de modelos. Alterna dinámicamente entre Claude 3.5 Sonnet para refactorizaciones complejas y modelos más veloces y económicos para autocompletado en milisegundos.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">DLP Preventivo de Secretos</h3>
              <p className="mt-2 text-sm text-slate-300">
                EjectorSeat intercepta y anonimiza claves API, credenciales AWS, JWTs y datos sensibles antes de que el prompt abandone tu red, mitigando incidentes de seguridad que Copilot no detecta.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">FinOps y Control de Costos</h3>
              <p className="mt-2 text-sm text-slate-300">
                Acaba con las licencias inactivas. Asigna presupuestos por equipo, visualiza telemetría de tokens en tiempo real y optimiza con prompt caching inteligente.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection items={faqs} />

        {/* Conversion Banner */}
        <CtaBanner
          title="Migra de GitHub Copilot a una arquitectura de IA sin lock-in"
          subtitle="Descubre cómo empresas de software ahorran costos y blindan su código fuente con EjectorSeat y Continue."
          primaryButtonText="Hablar con un Especialista"
          secondaryButtonText="Ver Caso Continue"
          secondaryButtonHref="/integraciones/continue"
        />
      </div>

      <Footer />
    </main>
  );
}
