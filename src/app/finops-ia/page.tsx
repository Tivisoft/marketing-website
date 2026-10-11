import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, TrendingDown, PieChart, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'FinOps para asistentes de código | EjectorSeat',
  description:
    'Consulta el consumo de asistentes de código por proyecto, persona y carril. Usa datos agregados para optimizar recursos y orientar formación, sin registrar prompts ni respuestas.',
  alternates: { canonical: '/finops-ia' },
  openGraph: {
    title: 'FinOps para asistentes de código | EjectorSeat',
    description:
      'Visibilidad del consumo de IA para ingeniería, análisis de patrones de uso y créditos de inferencia por carril.',
    url: 'https://tivisoft.com/finops-ia',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: ['finops ia', 'costos asistentes de código', 'gobierno de IA', 'EjectorSeat FinOps'],
};

const finopsFaqs = [
  {
    question: '¿Qué muestra FinOps en EjectorSeat?',
    answer:
      'El tablero presenta consumo agregado y atribuido por organización, proyecto, persona, carril y sesión, según los datos disponibles. Ayuda a entender dónde se usan los recursos y a revisar su evolución; no promete ahorros porcentuales ni una reducción automática del gasto.',
  },
  {
    question: '¿Cómo ayudan los créditos a entender el consumo?',
    answer:
      'Los créditos permiten medir el consumo del modelo integrado. La cantidad de tokens cubierta depende del carril y de si son tokens de entrada, salida o caché; por eso no existe una conversión única de créditos a tokens. Las condiciones comerciales se definen en la propuesta para cada organización.',
  },
  {
    question: '¿FinOps guarda el código, los prompts o las respuestas?',
    answer:
      'El tablero trabaja con metadatos de uso y consumo. El producto no debe registrar el contenido de prompts ni respuestas. Los patrones agregados pueden ayudar a los responsables a identificar necesidades de formación y dar retroalimentación al equipo, sin usar el contenido de las conversaciones.',
  },
  {
    question: '¿Puedo conectar mi propia cuenta de Anthropic, OpenAI o Bedrock?',
    answer:
      'EjectorSeat ofrece el modelo y el proveedor integrados en el producto. La modalidad BYOK y el enrutamiento hacia proveedores elegidos por cada cliente no forman parte de la oferta actual.',
  },
];

export default function FinOpsIAPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'FinOps para asistentes de código: visibilidad y optimización del consumo',
    description:
      'Cómo entender el uso de asistentes de código mediante créditos de inferencia y métricas agregadas.',
    author: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
    publisher: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={schemaData} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'FinOps IA', href: '/finops-ia' }]} />
        <section className="pb-14 pt-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <BarChart3 className="h-4 w-4" /> FinOps para equipos de ingeniería
          </div>
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            Entiende y optimiza el consumo de IA de tu equipo.
          </h1>
          <div className="mt-7 max-w-4xl rounded-2xl border border-emerald-500/30 bg-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Respuesta directa: ¿para qué sirve FinOps en EjectorSeat?
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
              El tablero de EjectorSeat atribuye consumo por proyecto, persona y carril. Esa visibilidad permite revisar el gasto, encontrar patrones de uso y orientar optimizaciones y formación. Los créditos permiten medir el consumo de inferencia; la cantidad de tokens cubierta depende del carril, el modelo de trabajo y el tipo de token.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 font-semibold text-slate-950">
              Hablar con Tivisoft <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/precios" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-200 hover:border-emerald-400/50">
              Consultar planes
            </Link>
          </div>
        </section>

        <section className="grid gap-6 py-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <PieChart className="h-7 w-7 text-blue-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Consumo atribuible</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Revisa el uso agregado por proyecto, persona y carril para saber cómo se distribuyen los recursos de inferencia.</p>
          </div>
          <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/80 p-7">
            <TrendingDown className="h-7 w-7 text-emerald-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Decisiones de optimización</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Compara periodos y carriles para evaluar cambios en el uso y enfocar las revisiones donde puedan tener mayor impacto.</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <Users className="h-7 w-7 text-purple-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Acompañamiento del equipo</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Usa patrones agregados de adopción para identificar oportunidades de formación y dar retroalimentación sobre prácticas de uso.</p>
          </div>
        </section>

        <section className="my-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-7 sm:p-10">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-7 w-7 flex-shrink-0 text-emerald-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Métricas de uso sin contenido de conversaciones</h2>
              <p className="mt-3 leading-relaxed text-slate-300">
                FinOps utiliza metadatos de consumo para atribución y análisis. Los prompts, las respuestas y el código enviado al asistente no se incorporan al tablero. La garantía de no entrenamiento se basa en las cláusulas de DeepInfra, proveedor integrado; consulta esas condiciones contractuales para conocer su alcance.
              </p>
              <p className="mt-3 leading-relaxed text-slate-300">
                EjectorSeat utiliza el modelo y proveedor incluidos en el servicio. La plataforma no ofrece actualmente BYOK ni una VPC de EjectorSeat. Tivisoft también ofrece proyectos empresariales de asistentes en infraestructura propia, con procesamiento sin conexión a Internet, como una solución separada.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Cómo interpretar los créditos</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            Los créditos permiten revisar el consumo del modelo integrado. El uso se calcula según el carril y el tipo de token —entrada, salida o caché—, por lo que la cantidad de tokens cubierta varía con la mezcla de tareas. No existe una equivalencia única para comparar todos los patrones de uso. Las condiciones de cada propuesta comercial se acuerdan con la organización.
          </p>
        </section>

        <FaqSection items={finopsFaqs} />
        <CtaBanner
          title="Lleva visibilidad FinOps a tus asistentes de código"
          subtitle="Conoce cómo EjectorSeat atribuye el uso y ayuda a tu equipo a tomar decisiones informadas sobre recursos de IA."
          primaryButtonText="Hablar con Tivisoft"
          secondaryButtonText="Ver planes y precios"
          secondaryButtonHref="/precios"
        />
      </div>
      <Footer />
    </main>
  );
}
