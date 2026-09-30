import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles, HelpCircle, BarChart3, Calculator } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Precios y Análisis de TCO de Asistentes de Código IA | EjectorSeat Tivisoft',
  description:
    'Compara el costo real de GitHub Copilot ($19-$39/mes) y Claude Code frente a EjectorSeat. Conoce nuestros planes con FinOps, BYOK y ahorro de hasta 60% en licencias.',
  alternates: {
    canonical: '/precios',
  },
  openGraph: {
    title: 'Precios de Asistentes de Código IA y Análisis de TCO | EjectorSeat',
    description:
      'Calcula el costo real de tu equipo: por qué pagar licencias fijas por desarrollador es ineficiente y cómo el gateway FinOps de EjectorSeat optimiza tu presupuesto.',
    url: 'https://tivisoft.com/precios',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'claude code pricing',
    'claude code precio',
    'copilot pricing',
    'precio asistente de codigo ia',
    'cuanto cuesta copilot empresa',
    'finops ia precios',
    'tco asistente de codigo',
  ],
};

const pricingTiers = [
  {
    name: 'Starter / Piloto',
    description: 'Ideal para validar Continue y EjectorSeat en un equipo de desarrollo.',
    price: '$9',
    unit: 'USD / usuario / mes',
    badge: 'Evaluación rápida',
    highlighted: false,
    features: [
      'Hasta 10 desarrolladores',
      'Integración con Continue (VS Code y JetBrains)',
      'Acceso a Claude 3.5 Sonnet y GPT-4o',
      'Zero Data Retention (ZDR)',
      'Escaneo básico de secretos (DLP)',
      'Soporte por correo y comunidad',
    ],
    ctaText: 'Iniciar Piloto',
    ctaHref: 'https://wa.me/573102134709',
  },
  {
    name: 'Team / FinOps',
    description: 'Control de costos total, cuotas por escuadrón y telemetría avanzada.',
    price: '$15',
    unit: 'USD / usuario / mes + consumo',
    badge: 'Más Popular',
    highlighted: true,
    features: [
      'De 10 a 100 desarrolladores',
      'Opción BYOK (Trae tus propias claves API)',
      'Presupuestos y límites por escuadrón en tiempo real',
      'DLP avanzado: detección y enmascaramiento de tokens',
      'Enrutamiento inteligente de modelos (Fast vs Frontier)',
      'Panel FinOps con telemetría de tokens y ahorro',
      'Soporte prioritario y canal dedicado en Slack',
    ],
    ctaText: 'Solicitar Cotización',
    ctaHref: 'https://wa.me/573102134709',
  },
  {
    name: 'Enterprise / VPC',
    description: 'Máxima soberanía, despliegue en VPC dedicada y cumplimiento normativo.',
    price: 'A la medida',
    unit: 'Facturación anual / contrato corporativo',
    badge: 'Soberanía total',
    highlighted: false,
    features: [
      'Más de 100 desarrolladores',
      'Despliegue en Managed VPC dedicada (AWS / Azure / GCP)',
      'Autenticación corporativa SSO / SAML / Okta',
      'Auditoría completa y logs exportables para SOC2 / ISO',
      'SLA del 99.9% garantizado por contrato',
      'Account Manager y soporte 24/7',
      'Roadmap prioritario para self-hosted',
    ],
    ctaText: 'Contactar Ventas',
    ctaHref: 'https://wa.me/573102134709',
  },
];

const pricingFaqs = [
  {
    question: '¿Por qué las licencias de asiento fijo ($19 a $39 USD) suelen ser ineficientes?',
    answer:
      'En un equipo típico, la distribución de uso sigue la regla 80/20: un 20% de los desarrolladores (power users) consumen el 80% de los tokens, mientras que el resto solo realiza consultas esporádicas de $3-$5 USD al mes. Pagar $25-$39 USD mensuales fijos por cada desarrollador resulta en un sobrecosto medio del 40% al 60% en capacidad no aprovechada.',
  },
  {
    question: '¿Qué significa BYOK (Bring Your Own Key) y por qué reduce costos?',
    answer:
      'BYOK te permite conectar tus propios contratos corporativos de Anthropic, OpenAI o AWS Bedrock al gateway EjectorSeat. Esto significa que aprovechas los descuentos por volumen y acuerdos enterprise que ya tengas con los proveedores de nube, pagando a EjectorSeat solo una cuota reducida por el software de gestión y seguridad.',
  },
  {
    question: '¿Cómo evita EjectorSeat sorpresas de costos en flujos agénticos (como Claude Code o Cursor)?',
    answer:
      'El gateway de EjectorSeat cuenta con control FinOps en tiempo real: puedes fijar límites diarios o mensuales por desarrollador o escuadrón, alertas automáticas al 80% de consumo y enrutamiento inteligente que usa modelos más ligeros para autocompletado y reserva los modelos frontera (Claude 3.5 Sonnet) para refactorizaciones complejas.',
  },
  {
    question: '¿Existe periodo de prueba o piloto para evaluar la plataforma?',
    answer:
      'Sí. Ofrecemos programas piloto guiados de 14 a 30 días para equipos de ingeniería, donde configuramos Continue, auditamos el consumo inicial y proyectamos el ahorro de costos antes de cualquier compromiso formal.',
  },
];

export default function PreciosPage() {
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'EjectorSeat AI Gateway',
    description:
      'Plataforma y gateway empresarial para asistentes de código con Continue. Control FinOps, Zero Data Retention y soporte multi-modelo.',
    brand: {
      '@type': 'Brand',
      name: 'Tivisoft',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        price: '9.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Team / FinOps',
        price: '15.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={pricingSchema} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Precios', href: '/precios' },
          ]}
        />

        {/* Hero */}
        <section className="pt-4 pb-16 text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300">
            <Sparkles className="h-4 w-4" />
            FinOps Transparente y Predecible
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Precios y TCO: IA para ingeniería sin desperdicio de licencias.
          </h1>

          {/* AEO Direct Answer Box */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Respuesta Directa (AEO): ¿Cuánto cuesta un asistente de código IA para un equipo?
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              Mientras las herramientas tradicionales (GitHub Copilot Business o Cursor) cobran <strong>$19 a $40 USD por usuario al mes</strong> en asientos planos fijos, el <strong>costo real de uso promedio por desarrollador suele ser inferior a $8 USD en tokens</strong>, desperdiciando hasta un 60% del presupuesto. Con el gateway <strong>EjectorSeat</strong>, tu empresa paga una base mínima y optimiza el consumo real mediante <strong>presupuestos FinOps por escuadrón</strong>, <strong>prompt caching</strong> y <strong>BYOK</strong>.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-3xl border p-8 transition duration-300 ${
                  tier.highlighted
                    ? 'border-emerald-400/80 bg-slate-900/90 shadow-[0_0_40px_rgba(16,185,129,0.2)] scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-white">{tier.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{tier.description}</p>

                  <div className="my-6">
                    <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                    <span className="ml-2 text-xs text-slate-400">{tier.unit}</span>
                  </div>

                  <ul className="space-y-3 border-t border-slate-800/80 pt-6 text-sm text-slate-300">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 flex-shrink-0 text-emerald-400 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={tier.ctaHref}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-950 shadow-glow hover:scale-[1.02]'
                        : 'border border-slate-700 bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                  >
                    {tier.ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TCO Breakdown Comparison */}
        <section className="py-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Desglose de TCO
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                Comparación de Costo Total de Propiedad (TCO) para un equipo de 50 desarrolladores
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Simulación anual basada en consumo promedio de desarrollo y autocompletado en software nearshore.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-4">Concepto</th>
                    <th className="pb-4">GitHub Copilot Enterprise ($39/mes)</th>
                    <th className="pb-4">Cursor Business ($40/mes)</th>
                    <th className="pb-4 text-emerald-400 font-bold">EjectorSeat + FinOps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="py-4 font-medium text-white">Costo mensual licencias fijas</td>
                    <td className="py-4 text-slate-400">$1,950 USD</td>
                    <td className="py-4 text-slate-400">$2,000 USD</td>
                    <td className="py-4 text-emerald-300 font-semibold">$750 USD (base gateway)</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-white">Consumo real de tokens (promedio)</td>
                    <td className="py-4 text-slate-400">Incluido (restringido a OpenAI)</td>
                    <td className="py-4 text-slate-400">Incluido (límites duros)</td>
                    <td className="py-4 text-emerald-300 font-semibold">~$320 USD (BYOK Claude/GPT)</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-white">Costo por licencias inactivas</td>
                    <td className="py-4 text-rose-400 font-medium">~$650 USD desperdiciados/mes</td>
                    <td className="py-4 text-rose-400 font-medium">~$700 USD desperdiciados/mes</td>
                    <td className="py-4 text-emerald-300 font-semibold">$0 USD (telemetría activa)</td>
                  </tr>
                  <tr className="bg-emerald-950/20 font-bold">
                    <td className="py-4 text-white">Inversión Total Anual (50 devs)</td>
                    <td className="py-4 text-slate-300">$23,400 USD</td>
                    <td className="py-4 text-slate-300">$24,000 USD</td>
                    <td className="py-4 text-emerald-400 text-base">~$12,840 USD (Ahorro ~46%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection items={pricingFaqs} />

        {/* CTA */}
        <CtaBanner
          title="Optimiza el gasto de IA de tu equipo hoy mismo"
          subtitle="Realizamos un diagnóstico gratuito del uso actual de tus desarrolladores y estimamos el ahorro con EjectorSeat."
          primaryButtonText="Solicitar Diagnóstico Gratuito"
          secondaryButtonText="Conocer la Estrategia FinOps"
          secondaryButtonHref="/finops-ia"
        />
      </div>

      <Footer />
    </main>
  );
}
