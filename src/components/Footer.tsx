import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { type Locale, path } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

interface FooterProps {
  lang: Locale;
}

export function Footer({ lang }: FooterProps) {
  const t = getDictionary(lang).footer;

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2">
            <Link href={path('home', lang)} className="inline-block font-black text-xl tracking-wider text-white">
              TIVISOFT
            </Link>
            <p
              className="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm"
              dangerouslySetInnerHTML={{
                __html: t.brandDescription.replace('EjectorSeat', '<strong>EjectorSeat</strong>'),
              }}
            />
            <div className="mt-5 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>{t.managedAccess}</span>
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/573102134709"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-white"
              >
                {t.whatsappContact}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: EjectorSeat */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
              {t.colEjectorSeat}
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href={path('intContinue', lang)} className="transition hover:text-emerald-300">
                  {t.links.continue}
                </Link>
              </li>
              <li>
                <Link href={path('finops', lang)} className="transition hover:text-emerald-300">
                  {t.links.finops}
                </Link>
              </li>
              <li>
                <Link href={path('pricing', lang)} className="transition hover:text-emerald-300">
                  {t.links.pricing}
                </Link>
              </li>
              <li>
                <Link href={path('security', lang)} className="transition hover:text-emerald-300">
                  {t.links.security}
                </Link>
              </li>
              <li>
                <Link href={path('deployment', lang)} className="transition hover:text-emerald-300">
                  {t.links.infrastructure}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: AI Services & Alternatives */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
              {t.colServices}
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
              <li>
                <Link href={path('serviceAeo', lang)} className="font-medium text-emerald-300 transition hover:text-emerald-200">
                  {t.links.serviceAeo}
                </Link>
              </li>
              <li>
                <Link href={path('serviceEntrepreneurs', lang)} className="font-medium text-emerald-300 transition hover:text-emerald-200">
                  {t.links.serviceEntrepreneurs}
                </Link>
              </li>
            </ul>

            <p className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
              {t.colAlternatives}
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href={path('altCopilot', lang)} className="transition hover:text-emerald-300">
                  {t.links.altCopilot}
                </Link>
              </li>
              <li>
                <Link href={path('altCursor', lang)} className="transition hover:text-emerald-300">
                  {t.links.altCursor}
                </Link>
              </li>
              <li>
                <Link href={path('blogCompare', lang)} className="transition hover:text-emerald-300">
                  {t.links.blogCompare}
                </Link>
              </li>
              <li>
                <Link href={path('blogGateway', lang)} className="transition hover:text-emerald-300">
                  {t.links.blogGateway}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Blog & Tivisoft Games */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
              {t.colResources}
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href={path('blog', lang)} className="transition hover:text-emerald-300">
                  {t.links.blog}
                </Link>
              </li>
              <li>
                <Link href={path('blogCost', lang)} className="transition hover:text-emerald-300">
                  {t.links.blogCost}
                </Link>
              </li>
              <li>
                <Link href={path('blogTraining', lang)} className="transition hover:text-emerald-300">
                  {t.links.blogTraining}
                </Link>
              </li>
              <li>
                <Link href={path('blogGovernance', lang)} className="transition hover:text-emerald-300">
                  {t.links.blogGovernance}
                </Link>
              </li>
              <li>
                <Link href={path('games', lang)} className="transition hover:text-emerald-300">
                  {t.links.games}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {t.rightsReserved}</p>
          <div className="flex gap-4">
            <Link href={path('home', lang)} className="hover:text-slate-300">{t.bottomHome}</Link>
            <Link href={path('pricing', lang)} className="hover:text-slate-300">{t.bottomPricing}</Link>
            <Link href={path('security', lang)} className="hover:text-slate-300">{t.bottomSecurity}</Link>
            <a href="https://tivisoft.com/llms.txt" target="_blank" rel="noreferrer" className="hover:text-slate-300">llms.txt</a>
            <a href="https://tivisoft.com/sitemap.xml" target="_blank" rel="noreferrer" className="hover:text-slate-300">sitemap.xml</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
