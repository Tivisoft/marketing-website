import type { Metadata } from 'next';
import Link from 'next/link';
import { Server, Shield, Cloud, CheckCircle2, Clock, ArrowRight, Sparkles, AlertCircle, Cpu, Network } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Despliegue en Tu Infraestructura: Managed VPC y Roadmap On-Prem | EjectorSeat',
  description:
    'Conoce las opciones de despliegue de EjectorSeat: Managed VPC dedicada en AWS/Azure/GCP (Disponible en GA) y lista de espera para self-hosted on-premises air-gapped.',
  alternates: {
    canonical: '/despliegue-en-tu-infraestructura',
  },
  openGraph: {
    title: 'Despliegue Privado de EjectorSeat: Dedicated VPC y Roadmap | Tivisoft',
    description:
      'Máxima soberanía de datos para bancos y empresas reguladas: despliega el gateway de IA en tu propia nube privada mediante AWS PrivateLink y Azure Private Link.',
    url: 'https://tivisoft.com/despliegue-en-tu-infraestructura',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'self-hosted ai gateway',
    'despliegue privado ai',
    'ai gateway vpc privada',
    'despliegue on-premise ia',
    'ejectorseat vpc managed',
    'soberania de datos ia desarrollo',
  ],
};

const deploymentFaqs = [
  {
    question: '¿Qué opción de despliegue aislado está disponible hoy en producción (GA)?',
    answer:
      'La opción disponible y recomendada para máxima seguridad en producción es el despliegue Managed VPC (Single-Tenant). Tivisoft provisiona y administra una instancia dedicada de EjectorSeat dentro de una Virtual Private Cloud en AWS, GCP o Azure exclusiva para tu organización, conectada a tu red interna mediante PrivateLink o VPN sin exponer tráfico a internet pública.',
  },
  {
    question: '¿Por qué el despliegue 100% on-premises / air-gapped está catalogado como Roadmap?',
    answer:
      'Siguiendo nuestra política de transparencia y la especificación de producto (SPEC §3 y §11.4), el despliegue completamente desconectado (air-gapped sin salida a internet) está en fase de desarrollo y validación con clientes de diseño seleccionados. Mientras tanto, Dedicated Managed VPC proporciona el aislamiento criptográfico y de red requerido por entidades financieras y de salud.',
  },
  {
    question: '¿Cómo puedo unirme a la lista de espera para el despliegue self-hosted on-prem?',
    answer:
      'Puedes contactar a nuestro equipo de arquitectura para registrarte en el programa Early Access. Los participantes tienen acceso prioritario a las pruebas beta de contenedores Kubernetes (Helm charts) para orquestación interna.',
  },
  {
    question: '¿Qué modelos de nube son compatibles con Dedicated Managed VPC?',
    answer:
      'Soportamos Amazon Web Services (AWS), Microsoft Azure y Google Cloud Platform (GCP), permitiendo integración nativa con tus instancias de AWS Bedrock o Azure OpenAI Service.',
  },
];

export default function DespliegueInfraestructuraPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Opciones de Despliegue de EjectorSeat: Managed VPC y Roadmap On-Premises',
    description:
      'Topología de despliegue para el gateway empresarial de IA EjectorSeat: comparación entre Cloud Multi-Tenant, Dedicated VPC y Roadmap Self-Hosted.',
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
            { name: 'Despliegue en tu Infraestructura', href: '/despliegue-en-tu-infraestructura' },
          ]}
        />

        {/* Hero */}
        <section className="pt-4 pb-16 text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300">
            <Server className="h-4 w-4" />
            Topología de Despliegue y Soberanía
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Despliegue en tu infraestructura: máxima soberanía para tu código.
          </h1>

          {/* AEO Direct Answer Box */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Respuesta Directa (AEO): ¿Cómo puedo desplegar EjectorSeat de forma privada?
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              Actualmente, <strong>EjectorSeat</strong> ofrece en producción (GA) el modelo <strong>Dedicated Managed VPC</strong>: una instancia de gateway dedicada exclusivamente a tu empresa en AWS, Azure o GCP conectada mediante PrivateLink con aislamiento de red total. Adicionalmente, mantenemos una <strong>lista de espera activa</strong> para la versión <strong>Self-Hosted / On-Premises</strong>, diseñada para entornos desconectados (air-gapped) en data centers propios.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/573102134709"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Consultar Despliegue Dedicated VPC
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3.5 text-base font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
            >
              Unirme a la Lista de Espera On-Prem
            </a>
          </div>
        </section>

        {/* Deployment Comparison */}
        <section className="py-12">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Modelos de Despliegue: Estado Actual y Roadmap
            </h2>
            <p className="mt-2 text-slate-400">
              Claridad técnica y honestidad sobre lo que está disponible en GA y lo que está en hoja de ruta.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Multi-Tenant SaaS */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
                    Disponible (GA)
                  </span>
                  <Cloud className="h-5 w-5 text-slate-400" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">Cloud Multi-Tenant</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Aislamiento lógico a nivel de tenant con cifrado en tránsito y en reposo. Puesta en marcha inmediata en menos de 10 minutos.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">✓ Configuración instantánea</li>
                  <li className="flex items-center gap-2">✓ Zero Data Retention</li>
                  <li className="flex items-center gap-2">✓ Ideal para equipos de 5 a 50 devs</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-500">Mantenido 100% por Tivisoft</span>
              </div>
            </div>

            {/* Dedicated VPC */}
            <div className="rounded-3xl border border-emerald-500/50 bg-slate-900/90 p-8 shadow-glow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Disponible (GA) · Máxima Privacidad
                  </span>
                  <Network className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-emerald-300">Dedicated Managed VPC</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Instancia única de EjectorSeat desplegada en una VPC dedicada en tu nube (AWS, Azure, GCP). Conexión privada sin IP pública.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-2">✓ AWS PrivateLink / Azure Private Link</li>
                  <li className="flex items-center gap-2">✓ Cero infraestructura compartida</li>
                  <li className="flex items-center gap-2">✓ Conexión nativa con Bedrock / Azure AI</li>
                  <li className="flex items-center gap-2">✓ Certificable para SOC2 e ISO 27001</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800">
                <span className="text-xs text-emerald-400 font-semibold">El estándar actual para Enterprise</span>
              </div>
            </div>

            {/* On-Premises Roadmap */}
            <div className="rounded-3xl border border-purple-500/30 bg-slate-900/60 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-purple-500/20 border border-purple-500/40 px-3 py-1 text-xs font-semibold text-purple-300">
                    Roadmap · Lista de Espera
                  </span>
                  <Clock className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">Self-Hosted Air-Gapped</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Despliegue 100% desconectado en tus propios servidores o Kubernetes (bare-metal o data center propio) con modelos locales (Llama 3/vLLM).
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">○ Distribución vía Helm Charts</li>
                  <li className="flex items-center gap-2">○ Soporte para clusters GPU internos</li>
                  <li className="flex items-center gap-2">○ Diseñado para defensa y banca estricta</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800">
                <span className="text-xs text-purple-300">En desarrollo activo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Box */}
        <section id="waitlist" className="py-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              Programa Early Access
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              ¿Tu empresa requiere despliegue on-premises air-gapped?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Estamos colaborando con directores de tecnología y CISOs para validar la arquitectura de despliegue desconectado. Únete a la lista de espera para ser de los primeros en probar la versión interna.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://wa.me/573102134709?text=Hola,%20nos%20interesa%20unirnos%20a%20la%20lista%20de%20espera%20para%20despliegue%20on-premises%20de%20EjectorSeat"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                Registrar Interés en On-Premises
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection items={deploymentFaqs} />

        {/* CTA */}
        <CtaBanner
          title="Evalúa el despliegue privado que mejor se adapta a tu arquitectura"
          subtitle="Conversa con nuestros ingenieros de infraestructura para planificar tu despliegue en Dedicated VPC."
          primaryButtonText="Conversar con Arquitectura"
          secondaryButtonText="Ver Medidas de Seguridad"
          secondaryButtonHref="/seguridad-y-custodia"
        />
      </div>

      <Footer />
    </main>
  );
}
