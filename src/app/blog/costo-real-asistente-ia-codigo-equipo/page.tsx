import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, Shield, BarChart3 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'El costo de los asistentes de IA para código | Tivisoft',
  description:
    'Cómo entender el costo de inferencia de los asistentes de código, comparar créditos y gestionar seguridad y uso con FinOps.',
  alternates: { canonical: '/blog/costo-real-asistente-ia-codigo-equipo' },
  openGraph: {
    title: 'El costo real de un asistente de IA para código',
    description: 'Créditos, consumo de tokens, seguridad y FinOps para equipos de ingeniería.',
    url: 'https://tivisoft.com/blog/costo-real-asistente-ia-codigo-equipo',
    siteName: 'Tivisoft',
    locale: 'es_ES',
    type: 'article',
  },
  keywords: ['costo asistente código IA', 'créditos de inferencia', 'FinOps para IA', 'alternativas a Copilot'],
};

const articleFaqs = [
  {
    question: '¿Cuánto cuesta usar un asistente de código?',
    answer:
      'Depende de la herramienta, el plan, los modelos y el volumen de uso. No hay una cifra mensual universal que describa el costo de inferencia de todos los equipos. Conviene distinguir la suscripción por asiento de los tokens realmente consumidos y revisar la política de límites de cada servicio.',
  },
  {
    question: '¿Qué alternativas a GitHub Copilot buscan las empresas?',
    answer:
      'Además de precio y funciones, algunas empresas evalúan confiabilidad, control de acceso y protección de su infraestructura y secretos empresariales. EjectorSeat centraliza el acceso del equipo al asistente incluido en el servicio y presenta métricas de consumo para apoyar el gobierno y la optimización.',
  },
  {
    question: '¿EjectorSeat permite usar mi cuenta de OpenAI o Anthropic?',
    answer:
      'No. EjectorSeat integra el modelo y el proveedor incluidos en el producto; no ofrece hoy BYOK ni conecta la inferencia con cuentas de OpenAI o Anthropic.',
  },
  {
    question: '¿EjectorSeat se despliega en una VPC privada?',
    answer:
      'La oferta actual de EjectorSeat no incluye una VPC dedicada. Tivisoft ofrece por separado proyectos empresariales con asistentes en infraestructura propia y procesamiento que no se conecta a Internet. Consulta con Tivisoft el alcance de esa solución.',
  },
];

export default function CostoRealAsistentePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'El costo de los asistentes de IA para código: créditos, uso y gobierno',
    description:
      'Guía para distinguir la suscripción del costo de inferencia y gestionar el uso de asistentes de código en equipos.',
    datePublished: '2026-09-24T08:00:00+00:00',
    dateModified: '2026-10-09T00:00:00+00:00',
    author: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
    publisher: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <JsonLd data={articleSchema} />
      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Costo de asistentes de código', href: '/blog/costo-real-asistente-ia-codigo-equipo' },
        ]} />
        <header className="border-b border-slate-800 pb-10 pt-4">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300">FinOps &amp; costos</span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />9 de octubre, 2026</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />5 min de lectura</span>
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            El costo real de un asistente de IA para código
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Una suscripción y el costo de inferencia son cosas distintas. Para entender el gasto de un equipo, hay que observar cuántos tokens consume, en qué carriles y con qué reglas de precio, sin inventar una cifra mensual que aplique a todos.
          </p>
        </header>

        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-slate-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Respuesta rápida</p>
          <p className="mt-3 leading-relaxed text-slate-200">
            EjectorSeat incluye créditos de inferencia para usar el modelo integrado. Según el catálogo comercial vigente, Team cuesta <strong>19 USD por asiento al mes</strong> e incluye una bolsa de 1.900 créditos. Cada crédito equivale a 0,01 USD de precio de lista; la cantidad de tokens depende del carril y de si son de entrada, salida o caché. FinOps permite revisar el consumo y buscar optimizaciones, sin prometer un porcentaje de ahorro.
          </p>
        </div>

        <article className="prose prose-invert max-w-none space-y-8 text-base leading-relaxed text-slate-300 sm:text-lg">
          <section>
            <h2 className="mt-10 text-2xl font-bold text-white">Suscripción no es lo mismo que consumo</h2>
            <p>
              Una licencia por asiento fija el precio de acceso de acuerdo con las condiciones de ese proveedor. Un servicio de inferencia por uso calcula el consumo de tokens. Compararlos requiere revisar qué incluye cada plan, qué límites aplica y qué tipo de modelo y tareas cubre. Sin datos representativos del equipo, una estimación de ahorro sería especulativa.
            </p>
            <p>
              Los asistentes agénticos pueden realizar varias llamadas para leer contexto, proponer cambios y revisar resultados. El volumen cambia según la tarea, el contexto enviado, el modelo y la cantidad de iteraciones. Por eso los conteos de tokens por acción no sirven como pronóstico universal.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-2xl font-bold text-white">Cómo leer los créditos de inferencia</h2>
            <p>
              En el catálogo de EjectorSeat, un crédito representa 0,01 USD de precio de lista. El precio por millón de tokens varía por carril y tipo de token. Como ejemplo, en el carril ejs-agent un millón de tokens de entrada equivale a 30 créditos y un millón de salida a 90 créditos. Así, la bolsa puede cubrir más tokens de inferencia que una cuota plana de otro asistente en ciertos patrones de uso; la equivalencia cambia con la mezcla de tareas y no debe interpretarse como una comparación universal.
            </p>
            <p>
              La bolsa de 1.900 créditos de Team corresponde a 19 USD de precio de lista. El plan Enterprise define 3.900 créditos por asiento y cuesta 39 USD al mes; la variante de 29 USD aplica bajo la condición de precertificación SOC 2 descrita en el catálogo. Consulta <Link href="/precios" className="text-emerald-300 underline">precios y condiciones</Link> para ver los planes.
            </p>
          </section>

          <section>
            <h2 className="mt-10 flex items-center gap-3 text-2xl font-bold text-white"><BarChart3 className="h-6 w-6 text-emerald-400" />FinOps para optimizar con datos</h2>
            <p>
              El tablero FinOps atribuye consumo por organización, proyecto, desarrollador, carril y sesión. Esta información ayuda a localizar patrones de alto consumo, evaluar el uso de recursos y decidir dónde conviene optimizar. Los responsables también pueden emplear patrones agregados para orientar formación y retroalimentación al personal, sin analizar el contenido de sus conversaciones.
            </p>
            <p>
              EjectorSeat conserva metadatos de uso para medir el consumo; no registra los prompts ni las respuestas en su contabilidad de uso. La garantía de no entrenamiento se basa en las cláusulas de DeepInfra, proveedor integrado. Revisa esas condiciones contractuales para conocer su alcance.
            </p>
          </section>

          <section>
            <h2 className="mt-10 flex items-center gap-3 text-2xl font-bold text-white"><Shield className="h-6 w-6 text-emerald-400" />Seguridad y control del acceso</h2>
            <p>
              Las empresas también buscan alternativas a GitHub Copilot por requisitos de confiabilidad y control: quién puede usar el asistente, cómo se administran las claves y cómo se protege la infraestructura y los secretos empresariales. EjectorSeat es una solución empresarial basada en el fork de Continue, con plugin para VS Code y Cursor, claves por desarrollador y visibilidad de consumo.
            </p>
            <p>
              El servicio integra el modelo y proveedor incluidos en EjectorSeat; el cliente no elige ni conecta sus propias cuentas de OpenAI, Anthropic u otros proveedores mediante BYOK. La oferta actual tampoco incluye despliegue de EjectorSeat en una VPC dedicada.
            </p>
            <p>
              Tivisoft ofrece por separado soluciones empresariales de asistentes de código en infraestructura propia, con procesamiento que no se conecta a Internet. Es una modalidad distinta que se define según el proyecto y sus requisitos.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-2xl font-bold text-white">Conclusión</h2>
            <p>
              Para gestionar el costo de la IA en ingeniería, mide el consumo con una unidad consistente, separa tokens de entrada, salida y caché, y revisa patrones de uso antes de fijar objetivos de ahorro. EjectorSeat combina acceso empresarial al asistente integrado con FinOps para entender y optimizar el gasto con datos del equipo.
            </p>
          </section>
        </article>

        <FaqSection items={articleFaqs} />
        <CtaBanner
          title="Entiende el consumo de IA de tu equipo"
          subtitle="Conoce los créditos, el tablero FinOps y las opciones empresariales de Tivisoft."
          primaryButtonText="Consultar con Tivisoft"
          secondaryButtonText="Ver precios"
          secondaryButtonHref="/precios"
        />
      </div>
      <Footer />
    </main>
  );
}
