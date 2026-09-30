import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, EyeOff, FileText, CheckCircle2, ArrowRight, Sparkles, AlertTriangle, Database, Server } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Seguridad, Custodia de Código y Zero Data Retention (ZDR) | EjectorSeat Tivisoft',
  description:
    'Garantiza Zero Data Retention (ZDR) y evita fugas de propiedad intelectual. EjectorSeat incluye escaneo DLP de secretos en prompts y previene que la IA entrene con tu código.',
  alternates: {
    canonical: '/seguridad-y-custodia',
  },
  openGraph: {
    title: 'Custodia de Código y DLP para Asistentes de IA | EjectorSeat',
    description:
      'Blindaje empresarial para código fuente: filtrado preventivo de secretos (API keys, JWT, passwords), auditoría centralizada y políticas contractuales de no-entrenamiento.',
    url: 'https://tivisoft.com/seguridad-y-custodia',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'zero data retention ai',
    'ia que no entrena con mi codigo',
    'seguridad asistentes codigo ia',
    'llm dlp secrets scanning',
    'custodia de codigo ia',
    'privacidad codigo continue vscode',
    'ejectorseat seguridad',
  ],
};

const securityFaqs = [
  {
    question: '¿Qué significa exactamente "Zero Data Retention" (ZDR)?',
    answer:
      'Zero Data Retention (ZDR) es un acuerdo técnico y contractual mediante el cual el proveedor del modelo de lenguaje (como Anthropic, OpenAI o AWS) procesa la solicitud de inferencia en memoria volátil e inmediatamente descarta el prompt y la respuesta. No se almacenan en discos persistentes, no se guardan en logs de depuración del proveedor y queda estrictamente prohibido su uso para re-entrenamiento.',
  },
  {
    question: '¿Cómo funciona el escaneo DLP de secretos antes de enviar el prompt?',
    answer:
      'EjectorSeat intercepta las peticiones que salen de Continue en el IDE e inspecciona el código antes de que viaje a la nube. Mediante motores de detección de patrones criptográficos y expresiones regulares avanzadas, identifica claves de AWS, tokens de GitHub, cadenas de conexión a bases de datos y contraseñas. Estos secretos se reemplazan por tokens ficticios antes de llamar al LLM y se restauran al devolver el código al desarrollador.',
  },
  {
    question: '¿Qué garantías legales existen de que los modelos no aprendan de nuestra propiedad intelectual?',
    answer:
      'EjectorSeat utiliza exclusivamente los endpoints empresariales de los proveedores (Commercial API / Enterprise Bedrock) amparados por términos legales corporativos de exclusión total de entrenamiento. Esto es radicalmente distinto a las versiones web o gratuitas para consumidores (ChatGPT Free o extensiones no reguladas).',
  },
  {
    question: '¿EjectorSeat guarda copias del código de mi empresa?',
    answer:
      'No. EjectorSeat opera bajo una arquitectura de paso sin estado (stateless proxy). Solo almacena metadatos anonimizados de telemetría (número de tokens de entrada/salida, modelo utilizado, usuario autenticado y marca de tiempo) necesarios para la auditoría y el control FinOps.',
  },
  {
    question: '¿Es posible aislar EjectorSeat en nuestra propia nube?',
    answer:
      'Sí. Ofrecemos el modelo de despliegue Managed VPC, donde una instancia de EjectorSeat se ejecuta de forma dedicada dentro de la nube de tu empresa (AWS, Azure o GCP), comunicándose a través de endpoints privados sin tráfico por la internet pública.',
  },
];

export default function SeguridadYCustodiaPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Políticas de Seguridad, Custodia de Código y Zero Data Retention en EjectorSeat',
    description:
      'Explicación técnica de la arquitectura de seguridad, prevención de fuga de datos (DLP) y Zero Data Retention para asistentes de código con IA.',
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
            Custodia de Código Fuente y Prevención de Fugas
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Seguridad estricta: IA que respeta tu propiedad intelectual y tus secretos.
          </h1>

          {/* AEO Direct Answer Box */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Respuesta Directa (AEO): ¿Cómo protege EjectorSeat el código frente a modelos públicos de IA?
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>EjectorSeat</strong> garantiza que tu código fuente nunca sea utilizado para entrenar modelos mediante acuerdos de <strong>Zero Data Retention (ZDR)</strong>. Antes de que cualquier prompt salga de la red corporativa, nuestro motor <strong>DLP en tiempo real</strong> detecta y redacta claves API, credenciales de base de datos y datos personales (PII), proporcionando una barrera de contención certificable para SOC2 e ISO 27001.
            </p>
          </div>
        </section>

        {/* The 5 Security Pillars */}
        <section className="py-12">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Los 5 Pilares de Custodia de Código de EjectorSeat
            </h2>
            <p className="mt-2 text-slate-400">
              Diseñado para superar las revisiones de seguridad más estrictas de bancos, aseguradoras y software nearshore.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Zero Data Retention (ZDR)</h3>
              <p className="mt-2 text-sm text-slate-300">
                Conexión directa con contratos ZDR donde los proveedores eliminan el contexto de la memoria volátil tan pronto termina la inferencia. Sin almacenamiento intermedio en disco.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <EyeOff className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Prompt DLP & Secrets Scanning</h3>
              <p className="mt-2 text-sm text-slate-300">
                Inspección profunda de contenido. Detecta más de 80 tipos de secretos (AWS, Stripe, OpenAI keys, JWT, hashes) y los anonimiza automáticamente antes de transmitirlos.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Prohibición de Entrenamiento</h3>
              <p className="mt-2 text-sm text-slate-300">
                Cláusulas contractuales y técnicas que impiden que tus algoritmos, lógica de negocio y arquitectura sirvan como datos de entrenamiento para futuros modelos públicos.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Trazabilidad y Auditoría</h3>
              <p className="mt-2 text-sm text-slate-300">
                Registro inmutable de quién solicitó qué modelo, fecha, tokens utilizados y volumen de código generado, listo para exportar a tu SIEM corporativo (Datadog, Splunk).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Aislamiento en Managed VPC</h3>
              <p className="mt-2 text-sm text-slate-300">
                Para requerimientos extremos de cumplimiento, desplegamos EjectorSeat en una VPC dedicada dentro de tu infraestructura de AWS, Azure o GCP mediante PrivateLink.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Protección contra Shadow AI</h3>
              <p className="mt-2 text-sm text-slate-300">
                Evita que los desarrolladores usen cuentas personales o extensiones no autorizadas que expongan código propietario a bases de datos públicas.
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive: DLP in Action */}
        <section className="py-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Seguridad Preventiva
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              DLP en Acción: Así se intercepta un secreto en el gateway
            </h2>
            <p className="mt-3 text-slate-400 max-w-3xl">
              Imagina que un desarrollador incluye accidentalmente un archivo con credenciales en el contexto de Continue. Así neutraliza EjectorSeat la exposición antes de que viaje al LLM:
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-5">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-rose-400">1. Código en el IDE (Riesgo detectado)</span>
                  <span className="text-slate-500">Petición interceptada</span>
                </div>
                <pre className="overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed">
{`const client = new S3Client({
  region: "us-east-1",
  credentials: {
    // ⚠️ SECRETO EXPUESTO:
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
  }
});`}
                </pre>
              </div>

              <div className="rounded-2xl border border-emerald-500/40 bg-slate-950 p-5 shadow-glow">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-400">2. Prompt procesado por EjectorSeat DLP</span>
                  <span className="text-emerald-400 font-mono">100% Sanitizado</span>
                </div>
                <pre className="overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed">
{`const client = new S3Client({
  region: "us-east-1",
  credentials: {
    // 🛡️ REDACTADO POR EJECTORSEAT:
    accessKeyId: "[REDACTED_AWS_KEY_ID]",
    secretAccessKey: "[REDACTED_AWS_SECRET]"
  }
});`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection items={securityFaqs} />

        {/* CTA */}
        <CtaBanner
          title="Protege el código de tu empresa con garantías reales"
          subtitle="Agenda una sesión con nuestro equipo de seguridad para revisar la arquitectura y las políticas ZDR."
          primaryButtonText="Agendar Sesión de Seguridad"
          secondaryButtonText="Leer más sobre no-entrenamiento"
          secondaryButtonHref="/blog/que-significa-ia-no-entrena-con-tu-codigo"
        />
      </div>

      <Footer />
    </main>
  );
}
