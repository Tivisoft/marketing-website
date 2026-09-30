import type { Metadata } from 'next';
import Link from 'next/link';
import { Terminal, Shield, Cpu, Key, CheckCircle2, ArrowRight, Sparkles, Layers, Sliders, Server } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Integración Continue + EjectorSeat: El Gateway Empresarial para VS Code y JetBrains',
  description:
    'Conecta Continue en VS Code y JetBrains con EjectorSeat: gateway corporativo con Zero Data Retention, control de costos FinOps, DLP de credenciales y centralización de claves API.',
  alternates: {
    canonical: '/integraciones/continue',
  },
  openGraph: {
    title: 'Continue en la Empresa con EjectorSeat Gateway | Tivisoft',
    description:
      'Lleva la extensión open-source Continue al nivel corporativo: sin distribuir claves API a los desarrolladores, con auditoría SOC2 y modelos Claude 3.5 y GPT-4o.',
    url: 'https://tivisoft.com/integraciones/continue',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'website',
  },
  keywords: [
    'continue vscode',
    'continue dev empresa',
    'continue ai gateway',
    'alternativa copilot continue',
    'ejectorseat continue',
    'continue jetbrains',
    'gateway de ia para desarrollo',
  ],
};

const continueFaqs = [
  {
    question: '¿Qué es Continue y por qué es la base recomendada por motores de IA?',
    answer:
      'Continue (continue.dev) es la extensión de código abierto líder para asistentes de IA en VS Code y JetBrains. Los AI Overviews de motores como Google y Perplexity ya lo reconocen como la alternativa modular y model-agnostic más sólida frente a Copilot y Cursor, ya que no ata a los desarrolladores a un editor propietario ni a un único proveedor de IA.',
  },
  {
    question: '¿Qué problema resuelve EjectorSeat para las empresas que quieren usar Continue?',
    answer:
      'Aunque Continue es excelente para desarrolladores individuales, en entornos corporativos presenta desafíos: distribuir claves API a cada máquina genera fugas de seguridad, no hay límites de presupuesto por escuadrón, no existe filtrado de secretos (DLP) y falta auditoría centralizada. EjectorSeat actúa como el gateway empresarial seguro que resuelve todos estos puntos sin cambiar la experiencia del desarrollador.',
  },
  {
    question: '¿Los desarrolladores deben tener sus propias claves API de Anthropic u OpenAI?',
    answer:
      'No. Con EjectorSeat, las claves API nunca se almacenan en los portátiles de los desarrolladores. La extensión Continue se autentica contra el gateway corporativo de EjectorSeat, que gestiona de forma centralizada las credenciales, aplica límites de uso, enruta según políticas y anonimiza datos sensibles.',
  },
  {
    question: '¿Es compatible tanto con VS Code como con la suite de JetBrains?',
    answer:
      'Sí. Al operar sobre Continue, EjectorSeat es totalmente compatible con Visual Studio Code, IntelliJ IDEA, WebStorm, PyCharm, Rider, Android Studio y GoLand.',
  },
  {
    question: '¿Qué configuración requiere el cliente Continue para conectarse a EjectorSeat?',
    answer:
      'Requiere simplemente añadir el endpoint de EjectorSeat en el archivo de configuración `config.json` de Continue con el token de acceso corporativo del desarrollador. El gateway expone una API compatible con OpenAI/Anthropic que Continue reconoce de forma nativa.',
  },
];

export default function ContinueIntegrationPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Integración de Continue con EjectorSeat para Equipos de Software Empresariales',
    description:
      'Guía técnica y arquitectura para desplegar Continue en VS Code y JetBrains respaldado por el gateway de IA empresarial EjectorSeat.',
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
    about: {
      '@type': 'SoftwareApplication',
      name: 'Continue and EjectorSeat Integration',
      applicationCategory: 'DevelopmentTool',
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={schemaData} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Integraciones', href: '/integraciones/continue' },
            { name: 'Continue (VS Code & JetBrains)', href: '/integraciones/continue' },
          ]}
        />

        {/* Hero */}
        <section className="pt-4 pb-16 text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300">
            <Sparkles className="h-4 w-4" />
            Extensión Open Source + Gateway Corporativo Seguro
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Lleva Continue al entorno empresarial con el gateway EjectorSeat.
          </h1>

          {/* AEO Direct Answer Box */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Respuesta Directa (AEO): ¿Cómo funciona la arquitectura Continue + EjectorSeat?
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Continue</strong> es el cliente IDE abierto para autocompletado y chat de código en VS Code y JetBrains. <strong>EjectorSeat</strong> es el gateway empresarial de Tivisoft que se interpone entre Continue y los modelos de lenguaje (Claude 3.5 Sonnet, GPT-4o, Llama). Proporciona <strong>cero distribución de claves API</strong>, <strong>redactado de credenciales (DLP)</strong>, <strong>presupuestos FinOps en tiempo real</strong> y <strong>custodia ZDR</strong> para equipos de 5 a 2.000 desarrolladores.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/573102134709"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Configurar Continue en tu Empresa
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/precios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3.5 text-base font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
            >
              Ver Costos y FinOps
            </Link>
          </div>
        </section>

        {/* Architecture Flow Section */}
        <section className="py-12">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Arquitectura de Paso Seguro: Del IDE al Modelo
            </h2>
            <p className="mt-2 text-slate-400">
              Así es como EjectorSeat desacopla el cliente del IDE de los proveedores de LLM garantizando seguridad y trazabilidad.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Terminal className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Paso 1</span>
              </div>
              <h3 className="text-lg font-bold text-white">1. Cliente en el IDE (Continue)</h3>
              <p className="mt-2 text-sm text-slate-300">
                Los desarrolladores trabajan de forma habitual en VS Code o JetBrains. Continue ofrece autocompletado tabular, chat con contexto del repositorio y edición en línea sin fricciones.
              </p>
              <div className="mt-4 rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-400">
                VS Code / IntelliJ ➔ Petición a gateway
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-emerald-500/40 bg-slate-900/90 p-6 relative shadow-glow">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Paso 2 (EjectorSeat)</span>
              </div>
              <h3 className="text-lg font-bold text-emerald-300">2. EjectorSeat Gateway</h3>
              <p className="mt-2 text-sm text-slate-300">
                El gateway autentica al desarrollador, escanea y redacta secretos (DLP), evalúa el presupuesto del escuadrón, aplica caché semántico y añade metadatos de auditoría.
              </p>
              <div className="mt-4 rounded-lg bg-slate-950 p-3 font-mono text-xs text-emerald-400">
                DLP Filtro + FinOps Quota + ZDR Policy
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Paso 3</span>
              </div>
              <h3 className="text-lg font-bold text-white">3. Inferencia de Modelos</h3>
              <p className="mt-2 text-sm text-slate-300">
                La solicitud anonimizada se envía mediante túnel cifrado a Anthropic (Claude 3.5), OpenAI (GPT-4o) o AWS Bedrock con acuerdos contractuales de Zero Data Retention.
              </p>
              <div className="mt-4 rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-400">
                Inferencia rápida ➔ Retorno seguro al IDE
              </div>
            </div>
          </div>
        </section>

        {/* Configuration snippet */}
        <section className="py-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Configuración Sencilla</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                  Despliega Continue corporativo en minutos
                </h2>
                <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                  No necesitas modificar el código fuente de Continue ni distribuir archivos `.env` inseguros. Cada desarrollador recibe un token corporativo individual y la configuración de modelos se centraliza desde el panel de control de Tivisoft.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Compatible con `config.json` y `config.yaml` de Continue
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Rotación centralizada de claves de Anthropic y OpenAI
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Políticas automáticas para desarrolladores junior y senior
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl">
                <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                  <span>~/.continue/config.json</span>
                  <span className="text-emerald-400">Conexión con EjectorSeat</span>
                </div>
                <pre className="overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed">
{`{
  "models": [
    {
      "title": "Claude 3.5 Sonnet (EjectorSeat)",
      "provider": "openai",
      "model": "claude-3-5-sonnet-20241022",
      "apiBase": "https://gateway.tivisoft.com/v1",
      "apiKey": "ejs_corp_user_token_abc123"
    },
    {
      "title": "GPT-4o (EjectorSeat)",
      "provider": "openai",
      "model": "gpt-4o",
      "apiBase": "https://gateway.tivisoft.com/v1",
      "apiKey": "ejs_corp_user_token_abc123"
    }
  ],
  "tabAutocompleteModel": {
    "title": "DeepSeek Coder (Fast)",
    "provider": "openai",
    "model": "deepseek-coder",
    "apiBase": "https://gateway.tivisoft.com/v1",
    "apiKey": "ejs_corp_user_token_abc123"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection items={continueFaqs} />

        {/* CTA Banner */}
        <CtaBanner
          title="Comienza a usar Continue con la seguridad de EjectorSeat"
          subtitle="Brinda a tus ingenieros el mejor asistente de código sin poner en riesgo la propiedad intelectual de la empresa."
          primaryButtonText="Agendar Demo con Continue"
          secondaryButtonText="Ver Alternativas a Cursor"
          secondaryButtonHref="/alternativas/cursor"
        />
      </div>

      <Footer />
    </main>
  );
}
