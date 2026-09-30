import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, Shield, Lock, AlertTriangle, CheckCircle2, FileText, ArrowRight, EyeOff } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '¿Qué Significa Realmente que la IA no Entrena con tu Código? | Tivisoft Blog',
  description:
    'Análisis para CISOs y líderes técnicos: qué hay detrás de las promesas de no-entrenamiento, qué es Zero Data Retention (ZDR) y cómo blindar tu propiedad intelectual.',
  alternates: {
    canonical: '/blog/que-significa-ia-no-entrena-con-tu-codigo',
  },
  openGraph: {
    title: '¿Qué Significa Realmente que la IA no Entrena con tu Código?',
    description:
      'Descubre la verdad sobre los términos legales de las APIs de IA, retención de telemetría y por qué se requiere filtrado DLP a nivel de gateway.',
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
    'zdr anthropic openai continue',
    'dlp secretos prompts ia',
  ],
};

const zdrFaqs = [
  {
    question: '¿Las versiones gratuitas o de consumidor de ChatGPT y Copilot entrenan con mi código?',
    answer:
      'Por defecto, en los niveles para consumidores (Consumer / Free / Plus estándar sin optar por salir expresamente), los proveedores se reservan el derecho legal de utilizar los datos enviados para entrenar o calibrar futuros modelos de lenguaje. En las cuentas comerciales y Enterprise, esto se desactiva contractualmente, pero sigue habiendo retención temporal para moderación de abusos salvo que se firme un acuerdo ZDR.',
  },
  {
    question: '¿Qué es el periodo de retención de 30 días para moderación?',
    answer:
      'La mayoría de las APIs comerciales estándar (incluso sin entrenamiento) conservan los prompts y respuestas en discos cifrados durante 30 días para auditar abusos y seguridad. Si tu empresa maneja secretos comerciales o datos de clientes regulados por GDPR o HIPAA, esos 30 días en servidores de terceros suponen un riesgo legal. La garantía Zero Data Retention (ZDR) elimina ese periodo de retención.',
  },
  {
    question: '¿Cómo complementa el DLP de EjectorSeat a las políticas ZDR?',
    answer:
      'Aunque un proveedor de modelos prometa ZDR, enviar claves de producción, certificados SSL o credenciales AWS a la nube sigue siendo una vulnerabilidad grave. EjectorSeat añade una capa preventiva de DLP en el propio gateway corporativo, anonimizando las credenciales antes de que salgan de la red, garantizando defensa en profundidad.',
  },
];

export default function QueSignificaIANoEntrenaPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '¿Qué significa realmente que la IA no entrene con tu código? Guía para CISOs',
    description:
      'Explicación jurídica y técnica sobre los acuerdos de confidencialidad, Zero Data Retention y protección de secretos en modelos de lenguaje.',
    datePublished: '2026-09-24T08:00:00+00:00',
    dateModified: '2026-09-24T08:00:00+00:00',
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
              Seguridad & ZDR
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
            Casi todos los proveedores de herramientas de IA afirman que &quot;no entrenan con tus datos&quot;. Sin embargo, para un Director de Seguridad (CISO) o un abogado corporativo, el diablo está en los detalles de retención, telemetría y logs.
          </p>
        </header>

        {/* Direct Answer Box (AEO) */}
        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Respuesta Directa (AEO): ¿Cómo verificar que una IA no entrena con tu código fuente?
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
            Una afirmación verbal de marketing no es vinculante. Para garantizar la seguridad corporativa se requieren tres elementos verificables: (1) <strong>Términos comerciales de API</strong> que excluyan expresamente el entrenamiento de modelos, (2) un acuerdo de <strong>Zero Data Retention (ZDR)</strong> que anule el almacenamiento de logs de 30 días, y (3) un <strong>gateway corporativo con DLP</strong> como EjectorSeat que elimine credenciales, llaves API y secretos antes de que el código salga de la frontera corporativa.
          </p>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Los 3 Niveles de Retención de Datos en IA
            </h2>
            <div className="space-y-4 my-6">
              <div className="rounded-xl border border-rose-500/30 bg-slate-900/60 p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">Nivel 1: Alto Riesgo</span>
                <h3 className="text-lg font-bold text-white mt-1">Cuentas gratuitas y de consumidor</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Las plataformas web estándar guardan historiales de conversación y los utilizan para enriquecer datasets de entrenamiento mediante aprendizaje por refuerzo con feedback humano (RLHF). Usar estas cuentas con código propietario de clientes constituye una violación directa de acuerdos de confidencialidad (NDA).
                </p>
              </div>

              <div className="rounded-xl border border-yellow-500/30 bg-slate-900/60 p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400">Nivel 2: Riesgo Moderado</span>
                <h3 className="text-lg font-bold text-white mt-1">APIs Comerciales Estándar</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Anthropic y OpenAI especifican que no utilizan datos de la API comercial para entrenar modelos. No obstante, por defecto conservan una copia cifrada durante 30 días con fines de detección de abusos y auditoría de seguridad.
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/40 bg-slate-900/90 p-5 shadow-glow">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Nivel 3: Máxima Seguridad</span>
                <h3 className="text-lg font-bold text-emerald-300 mt-1">Zero Data Retention (ZDR) + Gateway DLP</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Acuerdos formalizados donde la retención temporal en disco es exactamente cero: la inferencia se procesa estrictamente en memoria RAM y se descarta de inmediato. Combinado con un gateway que anonimice secretos, el riesgo de filtración se neutraliza por completo.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              El Riesgo Oculto: Secretos en el Contexto del Prompt
            </h2>
            <p>
              Incluso cuando el proveedor del modelo cumple el 100% de sus compromisos de no-entrenamiento, existe un riesgo técnico frecuente: <strong>la exposición involuntaria de credenciales</strong>.
            </p>
            <p>
              Los asistentes de código envían fragmentos de archivos adyacentes, variables de entorno y comentarios de código. Si un desarrollador tiene un archivo de configuración con contraseñas o tokens de AWS, ese secreto viajará a través de la red.
            </p>
            <p>
              Por esta razón, la arquitectura de Tivisoft con <strong>EjectorSeat</strong> incluye un motor de DLP preventivo:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-300">
              <li>Escanea expresiones regulares y patrones criptográficos de claves en milisegundos.</li>
              <li>Reemplaza credenciales por variables simuladas antes de que la petición salga del gateway corporativo.</li>
              <li>Genera alertas de auditoría interna para que el equipo de ciberseguridad pueda rotar secretos comprometidos en el repositorio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Checklist para el CISO antes de autorizar herramientas de IA
            </h2>
            <div className="space-y-3 font-medium text-sm text-slate-200">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>¿Existe contrato comercial que prohíba contractualmente el re-entrenamiento?</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>¿Se ha firmado un anexo de Zero Data Retention para evitar logs temporales de 30 días?</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>¿Las claves API están centralizadas en un gateway seguro sin llegar a las laptops de los desarrolladores?</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>¿Disponemos de filtrado DLP para que ningún secreto se incluya en el contexto del prompt?</span>
              </div>
            </div>
          </section>
        </article>

        {/* FAQs */}
        <FaqSection items={zdrFaqs} />

        {/* CTA */}
        <CtaBanner
          title="Garantiza la custodia total de tu código con EjectorSeat"
          subtitle="Implementa un gateway corporativo con ZDR, DLP preventivo y auditoría SOC2 para tu equipo de ingeniería."
          primaryButtonText="Hablar con un Experto en Seguridad"
          secondaryButtonText="Ver Medidas de Seguridad"
          secondaryButtonHref="/seguridad-y-custodia"
        />
      </div>

      <Footer />
    </main>
  );
}
