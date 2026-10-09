import type { Metadata } from 'next';
import { Server, Shield, ArrowRight, Cloud, Network } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Opciones de infraestructura para asistentes de código | Tivisoft',
  description:
    'EjectorSeat es un plugin para VS Code y Cursor que utiliza un modelo integrado. Conoce también la oferta empresarial de Tivisoft para infraestructura propia.',
  alternates: { canonical: '/despliegue-en-tu-infraestructura' },
  openGraph: {
    title: 'Infraestructura para asistentes de código | Tivisoft',
    description:
      'Conoce el alcance actual de EjectorSeat y consulta con Tivisoft sobre soluciones empresariales en infraestructura propia.',
    url: 'https://tivisoft.com/despliegue-en-tu-infraestructura',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: ['asistentes de código', 'infraestructura propia IA', 'EjectorSeat', 'Tivisoft'],
};

const deploymentFaqs = [
  {
    question: '¿EjectorSeat se despliega hoy en la VPC del cliente?',
    answer:
      'No. EjectorSeat actualmente no ofrece un despliegue en la VPC del cliente ni una modalidad air-gapped. Se utiliza como plugin para VS Code y Cursor y se conecta al servicio del modelo integrado.',
  },
  {
    question: '¿Tivisoft ofrece soluciones en infraestructura propia?',
    answer:
      'Tivisoft también ofrece soluciones empresariales para contar con asistentes de código en infraestructura propia, con procesamiento que no se conecta a internet. Esta oferta es distinta de EjectorSeat. El alcance y la viabilidad técnica se conversan según los requisitos de cada organización.',
  },
  {
    question: '¿Qué proveedor de IA usa EjectorSeat?',
    answer:
      'EjectorSeat utiliza el modelo especial para desarrollo de software integrado en el producto, servido por DeepInfra. Actualmente no usa modelos de Anthropic ni de OpenAI.',
  },
];

export default function DespliegueInfraestructuraPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Opciones de infraestructura para asistentes de código',
    description:
      'Alcance actual de EjectorSeat y oferta empresarial de Tivisoft en infraestructura propia.',
    author: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
    publisher: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={schemaData} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Infraestructura', href: '/despliegue-en-tu-infraestructura' }]} />
        <section className="pt-4 pb-16 text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
            <Server className="h-4 w-4" />
            Alcance de producto y soluciones empresariales
          </div>
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Asistentes de código para las necesidades de tu organización.
          </h1>
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">EjectorSeat hoy</p>
            <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
              <strong>EjectorSeat</strong> es un plugin empresarial para VS Code y Cursor que integra un modelo de desarrollo servido por DeepInfra. Actualmente no ofrece despliegue en la VPC del cliente ni operación sin conexión a internet. Tivisoft también ofrece soluciones empresariales para infraestructura propia; son una oferta separada y su alcance se define según cada proyecto.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-[1.02]">
              Consultar con Tivisoft <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Dos necesidades, dos alcances</h2>
            <p className="mt-2 text-slate-400">La modalidad del producto y la oferta de infraestructura propia son distintas.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/40 bg-slate-900/80 p-8">
              <div className="flex items-center gap-3 text-emerald-300"><Cloud className="h-6 w-6" /><span className="font-semibold">Producto EjectorSeat</span></div>
              <h3 className="mt-4 text-2xl font-bold text-white">Plugin para VS Code y Cursor</h3>
              <p className="mt-3 text-slate-300">El desarrollador ingresa una API key en el plugin y accede al modelo de software integrado. El producto actual no incluye VPC del cliente, air-gap ni escaneo DLP de secretos.</p>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8">
              <div className="flex items-center gap-3 text-blue-300"><Network className="h-6 w-6" /><span className="font-semibold">Oferta empresarial de Tivisoft</span></div>
              <h3 className="mt-4 text-2xl font-bold text-white">Asistentes en infraestructura propia</h3>
              <p className="mt-3 text-slate-300">Tivisoft ofrece soluciones empresariales para ejecutar asistentes de código en infraestructura propia y sin conexión a internet. Esta solución es independiente de EjectorSeat; consulta con el equipo para definir alcance y viabilidad para tu entorno.</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12">
            <div className="flex items-center gap-3 text-emerald-300"><Shield className="h-6 w-6" /><h2 className="text-2xl font-bold text-white">Evalúa tus requisitos</h2></div>
            <p className="mt-4 max-w-3xl text-slate-300">Si tu organización necesita mantener el procesamiento dentro de su propia infraestructura o sin conexión a internet, conversa con Tivisoft sobre esa oferta empresarial. Si buscas un plugin para VS Code o Cursor con acceso administrado y análisis FinOps, conoce EjectorSeat.</p>
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-emerald-400/50">Conversar con Tivisoft <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>

        <FaqSection items={deploymentFaqs} />
        <CtaBanner title="Encuentra el alcance adecuado para tu equipo" subtitle="Cuéntanos tus requisitos de control, infraestructura y uso de asistentes de código." primaryButtonText="Hablar con Tivisoft" secondaryButtonText="Ver seguridad y tratamiento de datos" secondaryButtonHref="/seguridad-y-custodia" />
      </div>
      <Footer />
    </main>
  );
}
