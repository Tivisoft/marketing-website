import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, KeyRound, BarChart3, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'EjectorSeat como alternativa empresarial a GitHub Copilot',
  description: 'EjectorSeat ofrece un plugin propio para VS Code y Cursor, acceso gobernado por clave y análisis FinOps. Conoce qué evaluar al comparar alternativas a GitHub Copilot.',
  alternates: { canonical: '/alternativas/github-copilot' },
  openGraph: {
    title: 'EjectorSeat como alternativa empresarial a GitHub Copilot',
    description: 'Compara gobierno de acceso, tratamiento de datos y visibilidad del consumo de asistentes de código.',
    url: 'https://tivisoft.com/alternativas/github-copilot',
    siteName: 'Tivisoft', locale: 'es_ES', type: 'website',
  },
};

const comparisonData = [
  { feature: 'Cliente de desarrollo', copilot: 'Extensiones y herramientas de GitHub', ejector: 'Plugin propio basado en una modificación de Continue para VS Code y Cursor' },
  { feature: 'Acceso del equipo', copilot: 'Administración según el plan contratado con GitHub', ejector: 'Una clave de EjectorSeat por desarrollador, administrada por la empresa' },
  { feature: 'Inferencia', copilot: 'Opciones y condiciones del servicio de GitHub', ejector: 'Modelo especializado en desarrollo integrado en EjectorSeat' },
  { feature: 'Visibilidad de uso', copilot: 'Informes disponibles según el plan de GitHub', ejector: 'Panel FinOps con consumo atribuido a organización, proyecto y usuario' },
  { feature: 'Tratamiento de datos', copilot: 'Revisar las condiciones del plan y del modelo utilizado', ejector: 'DeepInfra declara en sus términos que no usa datos de clientes para entrenar modelos' },
];

const faqs = [
  {
    question: '¿Por qué considerar una alternativa a GitHub Copilot?',
    answer: 'Cada empresa puede exigir controles distintos de acceso, costos y tratamiento del código y los secretos empresariales. También puede necesitar mayor confianza en la seguridad de su infraestructura. Conviene comparar las condiciones concretas de cada servicio.',
  },
  {
    question: '¿Qué es EjectorSeat?',
    answer: 'Es la solución empresarial de Tivisoft basada en una modificación de Continue. Incluye un plugin propio para VS Code y Cursor, un modelo integrado especializado en desarrollo, gobierno del acceso de desarrolladores y análisis FinOps del uso.',
  },
  {
    question: '¿Qué debe configurar cada desarrollador?',
    answer: 'La empresa entrega una clave API de EjectorSeat al desarrollador, que la pega en el panel del plugin. No necesita introducir una URL ni aportar una clave personal de un proveedor de modelos.',
  },
  {
    question: '¿Se usan modelos de Anthropic u OpenAI?',
    answer: 'No en la oferta actual de EjectorSeat. La inferencia se ofrece con el modelo especializado integrado mediante DeepInfra; EjectorSeat no intermedia conexiones con Anthropic ni OpenAI.',
  },
  {
    question: '¿Cómo se trata el código enviado para inferencia?',
    answer: 'DeepInfra declara en sus términos de servicio que no utiliza los datos de sus clientes para entrenar, ajustar o mejorar modelos. La inferencia requiere procesar las entradas y salidas, y sus términos contemplan excepciones de retención.',
  },
  {
    question: '¿Cuánto puede ahorrar mi equipo?',
    answer: 'Los créditos de EjectorSeat buscan ofrecer más tokens de inferencia por presupuesto y el panel FinOps ayuda a encontrar oportunidades de optimización. El ahorro real depende del plan, el uso y la comparación concreta; no existe un porcentaje universal.',
  },
];

export default function GitHubCopilotAlternativePage() {
  const productSchema = {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'EjectorSeat', applicationCategory: 'DeveloperApplication',
    operatingSystem: 'VS Code y Cursor',
    description: 'Asistente empresarial de código basado en una modificación de Continue, con acceso gobernado y análisis FinOps.',
    provider: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={productSchema} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Alternativa a GitHub Copilot', href: '/alternativas/github-copilot' }]} />
        <section className="pt-4 pb-16">
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Una alternativa empresarial a GitHub Copilot con gobierno de acceso y FinOps
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-300">
            Los equipos que evalúan alternativas buscan controlar quién accede al asistente, entender su consumo y revisar cómo se protegen el código, los secretos y la infraestructura. EjectorSeat integra un modelo especializado en desarrollo en un plugin propio para VS Code y Cursor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 font-semibold text-slate-950">
              Solicitar demostración <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/integraciones/continue" className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-200">Conocer el plugin</Link>
          </div>
        </section>
        <section className="py-12">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Qué comparar antes de decidir</h2>
          <p className="mb-8 text-slate-400">Las condiciones de terceros cambian por plan y fecha; confirma sus términos vigentes antes de contratar.</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80">
            <table className="w-full min-w-[650px] text-left text-sm sm:text-base">
              <thead className="bg-slate-950/70 text-slate-300"><tr><th className="px-6 py-4">Dimensión</th><th className="px-6 py-4">GitHub Copilot</th><th className="px-6 py-4 text-emerald-300">EjectorSeat</th></tr></thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonData.map((row) => <tr key={row.feature}><td className="px-6 py-4 font-medium text-white">{row.feature}</td><td className="px-6 py-4 text-slate-400">{row.copilot}</td><td className="px-6 py-4 text-emerald-300">{row.ejector}</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>
        <section className="grid gap-6 py-12 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><KeyRound className="mb-4 text-emerald-400" /><h2 className="text-xl font-bold">Acceso administrado</h2><p className="mt-2 text-slate-300">Entrega y revoca claves por desarrollador desde el entorno empresarial. Para empezar, cada persona pega su clave en el plugin.</p></article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><BarChart3 className="mb-4 text-emerald-400" /><h2 className="text-xl font-bold">FinOps de uso</h2><p className="mt-2 text-slate-300">Consulta consumo y costos por equipo, proyecto y usuario para optimizar recursos y orientar capacitación y retroalimentación.</p></article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><ShieldCheck className="mb-4 text-emerald-400" /><h2 className="text-xl font-bold">Condiciones de datos claras</h2><p className="mt-2 text-slate-300">La política de no entrenamiento corresponde a <a className="text-emerald-300 underline" href="https://deepinfra.com/terms">los términos de DeepInfra</a>. Revisa su alcance y excepciones para tus requisitos.</p></article>
        </section>
        <FaqSection items={faqs} />
        <CtaBanner title="Evalúa EjectorSeat con tu equipo" subtitle="Conoce el plugin, el modelo integrado y la visibilidad FinOps con tus requisitos de seguridad y presupuesto." primaryButtonText="Hablar con un especialista" secondaryButtonText="Ver cómo funciona" secondaryButtonHref="/integraciones/continue" />
      </div>
      <Footer />
    </main>
  );
}
