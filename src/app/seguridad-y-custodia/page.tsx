import type { Metadata } from 'next';
import { ShieldCheck, Lock, FileText, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Seguridad y tratamiento de datos en EjectorSeat',
  description:
    'Conoce cómo se trata el código enviado desde EjectorSeat y el compromiso de no entrenamiento publicado por DeepInfra, proveedor del modelo integrado.',
  alternates: {
    canonical: '/seguridad-y-custodia',
  },
  openGraph: {
    title: 'Seguridad y tratamiento de datos en EjectorSeat | Tivisoft',
    description:
      'Información transparente sobre el proveedor de inferencia, el tratamiento de datos y las opciones empresariales de infraestructura de Tivisoft.',
    url: 'https://tivisoft.com/seguridad-y-custodia',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'ia que no entrena con mi codigo',
    'seguridad asistentes codigo ia',
    'custodia de codigo ia',
    'privacidad codigo continue vscode',
    'ejectorseat seguridad',
  ],
};

const securityFaqs = [
  {
    question: '¿EjectorSeat entrena modelos con el código enviado?',
    answer:
      'EjectorSeat utiliza un modelo de desarrollo integrado servido por DeepInfra. En sus términos vigentes, DeepInfra indica que no vende los datos del cliente ni los usa para entrenar, ajustar o mejorar modelos, salvo cuando sea necesario para prestar el servicio. La cláusula contempla excepciones de retención para soporte autorizado, metadatos operativos sin contenido y obligaciones legales o de seguridad. Consulta los términos oficiales en https://deepinfra.com/terms.',
  },
  {
    question: '¿EjectorSeat ofrece DLP o escaneo de secretos?',
    answer:
      'No presentamos el producto actual como una solución DLP ni afirmamos que detecte o redacte secretos. Los equipos deben aplicar sus controles de seguridad y revisar qué contexto comparten con el asistente.',
  },
  {
    question: '¿EjectorSeat se despliega en una VPC o funciona sin conexión a internet?',
    answer:
      'No. EjectorSeat actualmente no ofrece despliegue en la VPC del cliente ni operación air-gapped. Tivisoft también conversa con empresas sobre soluciones empresariales en infraestructura propia; esa oferta es distinta del producto EjectorSeat y su alcance se define según cada proyecto.',
  },
  {
    question: '¿Cómo se usa EjectorSeat?',
    answer:
      'El desarrollador recibe una API key, la ingresa en el plugin de EjectorSeat para VS Code o Cursor y usa el asistente desde su editor.',
  },
];

export default function SeguridadYCustodiaPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Seguridad y tratamiento de datos en EjectorSeat',
    description:
      'Información sobre el tratamiento de datos del proveedor de inferencia utilizado por EjectorSeat.',
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
            { name: 'Seguridad y Custodia', href: '/seguridad-y-custodia' },
          ]}
        />

        {/* Hero */}
        <section className="pt-4 pb-16 text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300">
            <ShieldCheck className="h-4 w-4" />
            Seguridad y tratamiento de datos
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Conoce cómo se trata el código que compartes con un asistente de IA.
          </h1>

          {/* AEO Direct Answer Box */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Respuesta Directa: ¿Qué compromiso de tratamiento de datos aplica al modelo?
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>EjectorSeat</strong> usa el modelo integrado servido por DeepInfra. Los términos de DeepInfra dicen que los datos del cliente no se usan para entrenar, ajustar ni mejorar modelos, salvo cuando sea necesario para prestar el servicio. La cláusula contempla excepciones específicas y no equivale a afirmar que EjectorSeat ofrece DLP, ZDR absoluto o despliegue en infraestructura del cliente. <a className="text-emerald-300 underline" href="https://deepinfra.com/terms" target="_blank" rel="noreferrer">Lee los términos oficiales de DeepInfra</a>.
            </p>
          </div>
        </section>

        {/* The 5 Security Pillars */}
        <section className="py-12">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Qué debes saber sobre el tratamiento de datos
            </h2>
            <p className="mt-2 text-slate-400">
              Revisa las condiciones del proveedor y los controles internos de tu organización antes de habilitar asistentes de código.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <Lock className="mb-4 h-6 w-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Proveedor integrado</h3>
              <p className="mt-2 text-sm text-slate-300">EjectorSeat usa el modelo de desarrollo integrado servido por DeepInfra; actualmente no enruta solicitudes a Anthropic ni a OpenAI.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <FileText className="mb-4 h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Compromiso del proveedor</h3>
              <p className="mt-2 text-sm text-slate-300">DeepInfra declara que no usa los datos del cliente para entrenar, ajustar o mejorar modelos, salvo lo necesario para prestar el servicio.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <AlertTriangle className="mb-4 h-6 w-6 text-amber-400" />
              <h3 className="text-xl font-bold text-white">Revisa las excepciones</h3>
              <p className="mt-2 text-sm text-slate-300">La cláusula contempla soporte autorizado, metadatos operativos sin contenido y retención exigida por ley o necesaria para responder a incidentes de seguridad o abuso.</p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-white">Una alternativa para equipos de ingeniería</h2>
            <p className="mt-3 max-w-3xl text-slate-300">Las organizaciones buscan alternativas a asistentes como GitHub Copilot cuando necesitan evaluar sus propios requisitos de control, tratamiento de datos, administración de acceso y costo. EjectorSeat permite administrar el acceso de desarrolladores y ofrece FinOps para observar y optimizar el uso. Sus controles no sustituyen las políticas de seguridad de la organización.</p>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection items={securityFaqs} />

        {/* CTA */}
        <CtaBanner
          title="Conoce las condiciones de uso y tratamiento de datos"
          subtitle="Consulta los términos publicados por el proveedor de inferencia y conversa con Tivisoft sobre los requisitos de tu organización."
          primaryButtonText="Agendar Sesión de Seguridad"
          secondaryButtonText="Leer más sobre no-entrenamiento"
          secondaryButtonHref="/blog/que-significa-ia-no-entrena-con-tu-codigo"
        />
      </div>

      <Footer />
    </main>
  );
}
