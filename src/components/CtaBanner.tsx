import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { type Locale, path } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

interface CtaBannerProps {
  lang: Locale;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CtaBanner({
  lang,
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref = 'https://wa.me/573102134709',
  secondaryButtonText,
  secondaryButtonHref,
}: CtaBannerProps) {
  const t = getDictionary(lang).cta;
  const resolvedTitle = title ?? t.title;
  const resolvedSubtitle = subtitle ?? t.subtitle;
  const resolvedPrimary = primaryButtonText ?? t.primary;
  const resolvedSecondary = secondaryButtonText ?? t.secondary;
  const resolvedSecondaryHref = secondaryButtonHref ?? path('pricing', lang);

  return (
    <section className="my-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/30 p-8 text-center sm:p-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5" />
          {t.badge}
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {resolvedTitle}
        </h2>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">{resolvedSubtitle}</p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={primaryButtonHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
          >
            {resolvedPrimary}
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href={resolvedSecondaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-7 py-3.5 text-base font-semibold text-slate-200 transition hover:border-emerald-400/40 hover:text-white"
          >
            <Zap className="h-4 w-4 text-emerald-400" />
            {resolvedSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
