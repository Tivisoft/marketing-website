import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CtaBanner({
  title = '¿Quieres evaluar EjectorSeat con tu equipo?',
  subtitle = 'Conoce el plugin para VS Code y Cursor, el acceso administrado y el análisis FinOps del consumo de inferencia.',
  primaryButtonText = 'Agendar Demo Técnica',
  primaryButtonHref = 'https://wa.me/573102134709',
  secondaryButtonText = 'Ver Planes y Precios',
  secondaryButtonHref = '/precios',
}: CtaBannerProps) {
  return (
    <section className="my-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/30 p-8 text-center sm:p-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5" />
          Acceso administrado · Modelo integrado · FinOps
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">{subtitle}</p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={primaryButtonHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
          >
            {primaryButtonText}
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href={secondaryButtonHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-7 py-3.5 text-base font-semibold text-slate-200 transition hover:border-emerald-400/40 hover:text-white"
          >
            <Zap className="h-4 w-4 text-emerald-400" />
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
