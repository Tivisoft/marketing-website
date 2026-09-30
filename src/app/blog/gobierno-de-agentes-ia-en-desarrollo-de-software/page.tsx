import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, Shield, Cpu, Sliders, CheckCircle2, ArrowRight, Sparkles, AlertTriangle, Users } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Gobierno de Agentes de IA en Desarrollo de Software | Tivisoft Blog',
  description:
    'Guía para CTOs y VPs de Ingeniería: cómo gobernar agentes de código autónomos sin frenar la velocidad del equipo. Cuotas de tokens, trazabilidad de PRs y políticas de seguridad.',
  alternates: {
    canonical: '/blog/gobierno-de-agentes-ia-en-desarrollo-de-software',
  },
  openGraph: {
    title: 'Gobierno de Agentes de IA en Ingeniería de Software | Tivisoft',
    description:
      'Framework de 4 pilares para implementar agentes de código de forma segura y rentable en equipos de 10 a 2.000 ingenieros.',
    url: 'https://tivisoft.com/blog/gobierno-de-agentes-ia-en-desarrollo-de-software',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'article',
  },
  keywords: [
    'gobierno de agentes ia software',
    'control ia ingenieria',
    'agentes de codigo gobernanza',
    'politicas uso ia desarrollo',
    'shadow ai desarrollo software',
    'ejectorseat gobernanza ia',
  ],
};

const governanceFaqs = [
  {
    question: '¿Por qué las políticas tradicionales de TI no funcionan con los agentes de IA?',
    answer:
      'Las políticas clásicas de TI suelen basarse en listas blancas de software o bloqueo de dominios. Con la IA generativa, intentar bloquear su uso simplemente empuja a los desarrolladores al "Shadow AI" (usar cuentas personales o pegar código en navegadores). Un gobierno efectivo debe proporcionar una alternativa corporativa superior, segura y aprobada con reglas de juego claras.',
  },
  {
    question: '¿Cómo rastrear la procedencia del código generado por IA en los Pull Requests?',
    answer:
      'Mediante telemetría en el gateway, EjectorSeat registra los fragmentos de código sugeridos y aceptados por cada desarrollador. Esto permite auditar la procedencia ante auditorías de licencias de software libre (OSS compliance) y verificar que no se hayan introducido componentes con licencias incompatibles.',
  },
  {
    question: '¿Qué controles presupuestarios mínimos debería establecer un VP de Ingeniería?',
    answer:
      'Recomendamos fijar tres niveles de control: (1) Un límite diario de tokens por desarrollador para prevenir bucles descontrolados, (2) Alertas automáticas al alcanzar el 80% del presupuesto mensual del escuadrón, y (3) Restricción de modelos de alto costo (Claude 3.5 Sonnet) para tareas de chat y arquitectura, obligando al uso de modelos rápidos para autocompletado.',
  },
];

export default function GobiernoAgentesIAPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Gobierno de agentes de IA en desarrollo de software: Velocidad sin perder el control',
    description:
      'Estrategias y framework de gobernanza para liderar la adopción de asistentes y agentes de inteligencia artificial en ingeniería de software.',
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
            { name: 'Gobierno de Agentes de IA', href: '/blog/gobierno-de-agentes-ia-en-desarrollo-de-software' },
          ]}
        />

        {/* Header */}
        <header className="pt-4 pb-10 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="rounded-full bg-purple-500/10 border border-purple-400/30 px-3 py-1 font-semibold text-purple-300">
              Gobernanza
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              24 de septiembre, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              7 min de lectura
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl leading-tight">
            Gobierno de agentes de IA en desarrollo de software: Velocidad sin perder el control
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            La adopción espontánea de herramientas de IA en los equipos de ingeniería crea islas de costo, riesgos de propiedad intelectual y brechas de seguridad. Así es como los líderes técnicos implementan un gobierno moderno y pragmático.
          </p>
        </header>

        {/* Direct Answer Box (AEO) */}
        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Respuesta Directa (AEO): ¿Cómo gobernar el uso de IA en equipos de ingeniería?
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
            El gobierno exitoso de IA en software se apoya en <strong>cuatro pilares</strong>: (1) <strong>Control de acceso centralizado</strong> mediante un gateway que evite repartir claves API en laptops, (2) <strong>Filtrado preventivo DLP</strong> para secretos y credenciales, (3) <strong>Asignación de presupuestos FinOps por escuadrón</strong> con límites de tokens, y (4) <strong>Trazabilidad auditable</strong> de las interacciones para cumplir con normativas SOC2 e ISO 27001 sin reducir la velocidad de entrega de los desarrolladores.
          </p>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              El dilema: Bloquear o Descontrolar
            </h2>
            <p>
              Frente a la explosión de agentes como Claude Code, Cursor y Continue, muchas organizaciones reaccionan de dos formas extremas e igualmente dañinas:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 my-6">
              <div className="rounded-xl border border-rose-500/30 bg-slate-900/60 p-5">
                <h3 className="font-bold text-rose-400">1. La Prohibición Total</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Bloquear dominios en el proxy corporativo. Resultado: frustración en los ingenieros más talentosos y nacimiento inmediato de Shadow AI a través de teléfonos móviles o redes personales.
                </p>
              </div>
              <div className="rounded-xl border border-yellow-500/30 bg-slate-900/60 p-5">
                <h3 className="font-bold text-yellow-400">2. El Descontrol Absoluto</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Permitir que cada desarrollador pase la tarjeta de crédito de la empresa y configure extensiones no auditadas. Resultado: facturas sorpresa de miles de dólares y filtración inadvertida de secretos comerciales.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              El Framework de los 4 Pilares de Gobernanza
            </h2>
            <p>
              Para equilibrar innovación y control, organizaciones de ingeniería de alto rendimiento implementan el framework de gobernanza basado en gateway:
            </p>

            <div className="space-y-4 my-6">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Shield className="h-5 w-5" />
                  Pilar 1: Identidad y Custodia Centralizada
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Los desarrolladores se autentican contra el Single Sign-On (SSO) corporativo (Google Workspace, Okta o Azure AD). El gateway valida permisos y nunca expone las llaves maestras de Anthropic o OpenAI a las máquinas locales.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  <Cpu className="h-5 w-5" />
                  Pilar 2: Políticas de Modelos Autorizados
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  La organización decide qué modelos están homologados para qué tipo de tareas y proyectos. Un proyecto bancario confidencial puede restringirse a modelos en VPC privada o contratos ZDR específicos, mientras que prototipos internos pueden usar modelos abiertos.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Sliders className="h-5 w-5" />
                  Pilar 3: FinOps y Presupuesto por Escuadrón
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Cada Tech Lead es responsable de su presupuesto mensual. Si un escuadrón agota su cuota de tokens asignada, el sistema alerta proactivamente y permite solicitar ampliaciones justificadas en lugar de generar una factura descontrolada a fin de mes.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-purple-400 font-bold">
                  <Users className="h-5 w-5" />
                  Pilar 4: Cultura de Revisión y Calidad Humana
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  El gobierno no es solo técnico, sino cultural: establecer como regla fija que ningún Pull Request generado por un agente se aprueba sin revisión humana y suite de pruebas automatizadas verdes en el pipeline de CI/CD.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              El Rol de EjectorSeat en la Gobernanza Técnica
            </h2>
            <p>
              EjectorSeat convierte estas directrices teóricas en código ejecutable: una pieza de infraestructura invisible para el desarrollador (que sigue usando Continue en su IDE habitual) pero con un cuadro de mando integral para los líderes de ingeniería.
            </p>
          </section>
        </article>

        {/* FAQs */}
        <FaqSection items={governanceFaqs} />

        {/* CTA */}
        <CtaBanner
          title="Establece un gobierno de IA eficiente en tu equipo de software"
          subtitle="Configura límites, seguridad y auditoría en menos de una hora con EjectorSeat."
          primaryButtonText="Agendar Consulta de Gobernanza"
          secondaryButtonText="Ver Caso Continue"
          secondaryButtonHref="/integraciones/continue"
        />
      </div>

      <Footer />
    </main>
  );
}
