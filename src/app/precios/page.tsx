import type { Metadata } from 'next';
import { Check, ArrowRight, Sparkles, Coins, BarChart3 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Planes de EjectorSeat | Tivisoft',
  description:
    'Conoce la estructura de los planes de EjectorSeat y solicita una propuesta comercial para tu equipo.',
  alternates: { canonical: '/precios' },
  openGraph: {
    title: 'Planes de EjectorSeat',
    description: 'Acceso administrado, créditos de inferencia y FinOps para equipos de ingeniería.',
    url: 'https://tivisoft.com/precios',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: ['planes EjectorSeat', 'créditos de inferencia', 'FinOps asistentes de código'],
};

const pricingTiers = [
  {
    name: 'Piloto',
    description: 'Para una primera evaluación técnica con el equipo.',
    price: 'A consultar',
    unit: 'evaluación',
    detail: 'Alcance y duración según la propuesta acordada',
    badge: 'Evaluación',
    highlighted: false,
    features: ['Créditos de inferencia incluidos', 'Acceso al plugin para VS Code y Cursor', 'Revisión inicial de consumo'],
  },
  {
    name: 'Team',
    description: 'Para equipos que necesitan acceso empresarial y visibilidad del consumo.',
    price: 'A consultar',
    unit: 'por equipo',
    detail: 'Bolsa de créditos según la propuesta acordada',
    badge: 'Equipo',
    highlighted: true,
    features: ['Créditos de inferencia incluidos en el plan', 'Clave revocable por desarrollador', 'Consumo visible por proyecto y carril'],
  },
  {
    name: 'Enterprise',
    description: 'Para organizaciones con requisitos empresariales de gobierno y operación.',
    price: 'A consultar',
    unit: 'por organización',
    detail: 'Condiciones y créditos según la propuesta acordada',
    badge: 'Enterprise',
    highlighted: false,
    features: ['Créditos de inferencia incluidos en el plan', 'Gobierno de acceso y análisis FinOps', 'Condiciones Enterprise sujetas a acuerdo'],
  },
];

const pricingFaqs = [
  {
    question: '¿Qué significa que el plan incluya créditos de inferencia?',
    answer:
      'Los créditos se descuentan según el carril y el tipo de token: entrada, salida o caché. La cantidad de tokens que cubre una bolsa depende del patrón de uso y de las condiciones del plan acordado.',
  },
  {
    question: '¿El plan permite BYOK o elegir proveedor?',
    answer:
      'No. EjectorSeat incluye el modelo y proveedor integrados en el servicio. No conecta hoy cuentas propias de Anthropic, OpenAI, AWS Bedrock u otros proveedores.',
  },
  {
    question: '¿EjectorSeat incluye una VPC privada o DLP?',
    answer:
      'La oferta actual de EjectorSeat no incluye VPC dedicada ni debe describirse como un producto DLP. Tivisoft ofrece por separado proyectos empresariales de asistentes en infraestructura propia, con procesamiento que no se conecta a Internet.',
  },
  {
    question: '¿Cómo puedo conocer el consumo de mi equipo?',
    answer:
      'FinOps atribuye el uso agregado por organización, proyecto, persona, carril y sesión. Esa información permite analizar patrones y optimizar el gasto. El tablero usa metadatos de consumo; no incorpora los prompts ni las respuestas.',
  },
];

export default function PreciosPage() {
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'EjectorSeat',
    description: 'Plugin empresarial de asistentes de código para VS Code y Cursor con créditos de inferencia y FinOps.',
    brand: { '@type': 'Brand', name: 'Tivisoft' },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={pricingSchema} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Precios', href: '/precios' }]} />
        <section className="pb-12 pt-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <Sparkles className="h-4 w-4" /> Precios con créditos de inferencia
          </div>
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            Planes para gobernar el uso de asistentes de código.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Cada asiento incluye una bolsa de créditos para usar el modelo integrado de EjectorSeat. FinOps ayuda a entender el consumo por proyecto y carril para optimizar los recursos con datos del equipo.
          </p>
        </section>

        <section className="grid gap-7 py-4 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className={`flex flex-col justify-between rounded-3xl border p-8 ${tier.highlighted ? 'border-emerald-400/80 bg-slate-900 shadow-[0_0_40px_rgba(16,185,129,0.14)]' : 'border-slate-800 bg-slate-900/60'}`}>
              <div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">{tier.badge}</span>
                <h2 className="mt-5 text-2xl font-bold text-white">{tier.name}</h2>
                <p className="mt-2 min-h-12 text-sm text-slate-400">{tier.description}</p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="ml-2 text-xs text-slate-400">{tier.unit}</span>
                </div>
                <p className="mb-5 text-sm font-medium text-emerald-300">{tier.detail}</p>
                <ul className="space-y-3 border-t border-slate-800 pt-6 text-sm text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" /><span>{feature}</span></li>
                  ))}
                </ul>
              </div>
              <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-slate-950 hover:bg-emerald-300">
                Consultar este plan <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </section>

        <section className="my-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <Coins className="h-7 w-7 text-emerald-400" />
            <h2 className="mt-4 text-xl font-bold text-white">¿Cuántos tokens cubren los créditos?</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Depende del carril y del tipo de token. Entrada, salida y caché tienen consumos distintos. Los créditos pueden ofrecer más tokens de inferencia por presupuesto, pero la comparación concreta depende del plan y del patrón de uso.</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <BarChart3 className="h-7 w-7 text-blue-400" />
            <h2 className="mt-4 text-xl font-bold text-white">FinOps con datos de uso</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">El tablero atribuye consumo por proyecto, persona y carril. Los responsables pueden revisar patrones agregados para optimizar recursos y orientar formación y retroalimentación, sin analizar prompts ni respuestas.</p>
          </div>
        </section>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm leading-relaxed text-slate-400">
          Los importes y condiciones se definen en la propuesta comercial para cada organización. Consulta con Tivisoft la bolsa de créditos, el alcance del piloto y las condiciones de uso antes de contratar.
        </div>

        <FaqSection items={pricingFaqs} />
        <CtaBanner
          title="Encuentra el plan adecuado para tu equipo"
          subtitle="Conoce el modelo integrado, los créditos y la visibilidad FinOps de EjectorSeat."
          primaryButtonText="Consultar planes"
          secondaryButtonText="Conocer FinOps"
          secondaryButtonHref="/finops-ia"
        />
      </div>
      <Footer />
    </main>
  );
}
