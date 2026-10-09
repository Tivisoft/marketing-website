import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code2, KeyRound, ChartBar } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Alternativa al asistente de Cursor para empresas | EjectorSeat',
  description: 'EjectorSeat es un plugin propio para VS Code y Cursor, basado en una modificación de Continue. Conoce su modelo integrado, acceso por clave y análisis FinOps.',
  alternates: { canonical: '/alternativas/cursor' },
  openGraph: {
    title: 'EjectorSeat para equipos que evalúan alternativas a Cursor',
    description: 'Gobierno de acceso y análisis del consumo del asistente de código en VS Code y Cursor.',
    url: 'https://tivisoft.com/alternativas/cursor',
    siteName: 'Tivisoft', locale: 'es_ES', type: 'website',
  },
};

const cursorFaqs = [
  {
    question: '¿Debo dejar de usar Cursor para utilizar EjectorSeat?',
    answer: 'No. El plugin de EjectorSeat está dirigido a VS Code y Cursor. Puedes evaluar el asistente de EjectorSeat dentro de Cursor o usarlo en VS Code, según el entorno de tu equipo.',
  },
  {
    question: '¿EjectorSeat es el mismo Continue?',
    answer: 'No. Tivisoft modificó el proyecto de código abierto Continue para ofrecer una solución empresarial propia con acceso administrado, un modelo integrado especializado en desarrollo y visibilidad FinOps.',
  },
  {
    question: '¿Cómo se conecta un desarrollador?',
    answer: 'El administrador entrega una clave API de EjectorSeat. El desarrollador la pega en el panel del plugin y puede comenzar a usarlo sin configurar una URL ni claves de otros proveedores.',
  },
  {
    question: '¿Puedo elegir cualquier proveedor de IA?',
    answer: 'La oferta actual de EjectorSeat utiliza el modelo de desarrollo integrado en el producto mediante DeepInfra. No se vende como una pasarela para conectar libremente proveedores como Anthropic u OpenAI.',
  },
  {
    question: '¿Qué aporta FinOps?',
    answer: 'Permite revisar consumo y costos atribuidos a equipos y desarrolladores, detectar patrones de uso y orientar decisiones de optimización, capacitación y retroalimentación. El ahorro depende del uso real.',
  },
];

export default function CursorAlternativePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Alternativa al asistente de Cursor', href: '/alternativas/cursor' }]} />
        <section className="pt-4 pb-16">
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Evalúa EjectorSeat como asistente empresarial en VS Code o Cursor
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-300">
            Si tu equipo busca más control sobre el acceso, el tratamiento de sus datos y el gasto de inferencia, EjectorSeat reúne el plugin y el servicio de IA en una oferta empresarial. El plugin funciona en VS Code y Cursor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 font-semibold text-slate-950">Solicitar demostración <ArrowRight className="h-4 w-4" /></a>
            <Link href="/integraciones/continue" className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-200">Conocer el plugin</Link>
          </div>
        </section>
        <section className="py-12">
          <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl">Qué aporta EjectorSeat al equipo</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><Code2 className="mb-4 text-emerald-400" /><h3 className="text-xl font-bold">Plugin propio</h3><p className="mt-2 text-slate-300">Una modificación de Continue preparada por Tivisoft para VS Code y Cursor, con un modelo especializado en desarrollo integrado.</p></article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><KeyRound className="mb-4 text-emerald-400" /><h3 className="text-xl font-bold">Acceso gobernado</h3><p className="mt-2 text-slate-300">Cada desarrollador recibe una clave de EjectorSeat que la empresa puede administrar y revocar.</p></article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><ChartBar className="mb-4 text-emerald-400" /><h3 className="text-xl font-bold">FinOps</h3><p className="mt-2 text-slate-300">Visibilidad del consumo para optimizar recursos y entender cómo se usa el asistente dentro del equipo.</p></article>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            DeepInfra declara en <a className="text-emerald-300 underline" href="https://deepinfra.com/terms">sus términos de servicio</a> que no usa datos de clientes para entrenar modelos. Revisa el alcance y las excepciones de esa política al evaluar tus requisitos de seguridad.
          </p>
        </section>
        <FaqSection items={cursorFaqs} />
        <CtaBanner title="Conoce EjectorSeat en tu editor" subtitle="Evalúa el plugin en VS Code o Cursor con el gobierno de acceso y la visibilidad de uso que necesita tu equipo." primaryButtonText="Agendar demostración" secondaryButtonText="Comparar con Copilot" secondaryButtonHref="/alternativas/github-copilot" />
      </div>
      <Footer />
    </main>
  );
}
