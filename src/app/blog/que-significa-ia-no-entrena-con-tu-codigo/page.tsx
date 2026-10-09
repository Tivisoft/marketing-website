import type { Metadata } from 'next';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '¿Qué Significa Realmente que la IA no Entrena con tu Código? | Tivisoft Blog',
  description:
    'Qué dicen los términos de DeepInfra sobre el uso de los datos de inferencia y qué límites conviene tener presentes.',
  alternates: {
    canonical: '/blog/que-significa-ia-no-entrena-con-tu-codigo',
  },
  openGraph: {
    title: '¿Qué Significa Realmente que la IA no Entrena con tu Código?',
    description:
      'Revisa el compromiso de DeepInfra sobre entrenamiento de modelos, su alcance y las excepciones de retención.',
    url: 'https://tivisoft.com/blog/que-significa-ia-no-entrena-con-tu-codigo',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'article',
  },
  keywords: [
    'ia que no entrena con mi codigo',
    'zero data retention desarrollo software',
    'seguridad codigo fuente ia',
    'politicas privacidad asistentes codigo',
    'deepinfra tratamiento de datos',
    'privacidad asistentes codigo',
  ],
};

const zdrFaqs = [
  {
    question: '¿Qué compromiso de no entrenamiento aplica a EjectorSeat?',
    answer:
      'EjectorSeat utiliza el modelo de desarrollo integrado servido por DeepInfra. En sus términos, DeepInfra declara que no vende los datos del cliente ni los usa para entrenar, ajustar o mejorar modelos, excepto cuando sea necesario para prestar el servicio. Consulta los términos oficiales en https://deepinfra.com/terms.',
  },
  {
    question: '¿Significa esto que no se conserva ningún dato?',
    answer:
      'No debe interpretarse como ausencia absoluta de retención. Los términos de DeepInfra contemplan datos autorizados por escrito para resolver incidentes de soporte (que se eliminan dentro de los 30 días siguientes a su resolución), metadatos operativos sin contenido y registros que deban conservarse por ley o para investigar fraude, incidentes de seguridad o abuso.',
  },
  {
    question: '¿EjectorSeat ofrece DLP o despliegue en la VPC del cliente?',
    answer:
      'No. El producto actual no ofrece escaneo DLP de secretos, despliegue en la VPC del cliente ni modalidad air-gapped. Tivisoft ofrece por separado soluciones empresariales para infraestructura propia; su alcance debe conversarse con el equipo.',
  },
];

export default function QueSignificaIANoEntrenaPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Qué significa el compromiso de no entrenamiento de DeepInfra',
    description:
      'Alcance del compromiso de DeepInfra sobre entrenamiento y excepciones contractuales de retención.',
    datePublished: '2026-09-24T08:00:00+00:00',
    dateModified: '2026-10-09T00:00:00+00:00',
    author: {
      '@type': 'Organization',
      name: 'Tivisoft Research',
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
      <JsonLd data={articleSchema} />

      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Blog', href: '/blog' },
            { name: '¿La IA entrena con tu código?', href: '/blog/que-significa-ia-no-entrena-con-tu-codigo' },
          ]}
        />

        {/* Header */}
        <header className="pt-4 pb-10 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="rounded-full bg-emerald-500/10 border border-emerald-400/30 px-3 py-1 font-semibold text-emerald-300">
              Seguridad y datos
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              24 de septiembre, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              5 min de lectura
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl leading-tight">
            ¿Qué significa realmente que la IA no entrene con tu código?
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            La frase &quot;no entrenamos con tus datos&quot; no describe por sí sola todo el tratamiento de una solicitud. Conviene revisar qué datos cubre el compromiso, para qué se procesan y qué excepciones de retención aplican.
          </p>
        </header>

        {/* Direct Answer Box (AEO) */}
        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Respuesta directa: ¿qué dice el proveedor integrado de EjectorSeat?
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
            EjectorSeat utiliza un modelo de desarrollo integrado servido por DeepInfra. Sus términos dicen que DeepInfra no vende los datos del cliente ni los usa para entrenar, ajustar o mejorar modelos, salvo cuando sea necesario para prestar el servicio. La cláusula también contempla excepciones específicas; por eso, no equivale a prometer retención cero absoluta. <a className="text-emerald-300 underline" href="https://deepinfra.com/terms" target="_blank" rel="noreferrer">Lee los términos de DeepInfra</a>.
          </p>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Qué cubren los términos de DeepInfra</h2>
            <p>Los términos vigentes de DeepInfra indican que el proveedor no vende los datos del cliente ni los usa para entrenar, ajustar o mejorar modelos, excepto cuando sea necesario para prestar el servicio. La obligación se refiere al proveedor de inferencia integrado en EjectorSeat.</p>
            <p>La misma cláusula describe excepciones: retención autorizada por escrito para soporte, metadatos operativos que no incluyan el contenido de la solicitud y registros que deban conservarse por ley o para atender fraude, seguridad o abuso. Por tanto, no debe resumirse como una garantía de que nunca se almacena ningún dato.</p>
            <p><a className="text-emerald-300 underline" href="https://deepinfra.com/terms" target="_blank" rel="noreferrer">Consulta directamente los términos de DeepInfra (sección 7)</a> y confirma que la versión vigente y el acuerdo aplicable cubran tu caso.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">El compromiso no reemplaza tus controles</h2>
            <p>El compromiso sobre entrenamiento no significa que EjectorSeat filtre secretos, elimine datos personales o procese solicitudes dentro de la infraestructura del cliente. El producto actual no ofrece DLP, despliegue en VPC del cliente ni operación air-gapped.</p>
            <p>Antes de habilitar un asistente de código, define qué contexto pueden compartir tus desarrolladores, aplica las políticas internas de manejo de secretos y revisa el contrato y las excepciones del proveedor.</p>
            <p>Tivisoft también ofrece soluciones empresariales para asistentes en infraestructura propia. Esa oferta es distinta de EjectorSeat y requiere conversar su alcance con el equipo.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Checklist para el CISO antes de autorizar herramientas de IA
            </h2>
            <div className="space-y-3 font-medium text-sm text-slate-200">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>¿Qué proveedor procesa las solicitudes y qué compromiso contractual publica?</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>¿Qué excepciones de retención y soporte contempla el acuerdo vigente?</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>¿Qué datos y contexto pueden enviar los desarrolladores desde el plugin?</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>¿Tenemos controles propios para evitar compartir secretos en el contexto?</span>
              </div>
            </div>
          </section>
        </article>

        {/* FAQs */}
        <FaqSection items={zdrFaqs} />

        {/* CTA */}
        <CtaBanner
          title="Revisa el tratamiento de datos de tu asistente de código"
          subtitle="Consulta los términos de DeepInfra y conversa con Tivisoft sobre los requisitos de seguridad de tu organización."
          primaryButtonText="Hablar con un Experto en Seguridad"
          secondaryButtonText="Ver Medidas de Seguridad"
          secondaryButtonHref="/seguridad-y-custodia"
        />
      </div>

      <Footer />
    </main>
  );
}
