'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X, ChevronDown, Globe } from 'lucide-react';
import logoDark from '@/media/LOGO TIVISOFT FONDO OSCURO.png';
import { type Locale, path, otherLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

interface NavbarProps {
  lang: Locale;
  // Path to the equivalent page in the other locale (for the language switcher).
  switchPath?: string;
}

export function Navbar({ lang, switchPath }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = getDictionary(lang).nav;
  const switchTo = otherLocale(lang);
  const altHref = switchPath ?? path('home', switchTo);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Desktop Logo */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={path('home', lang)}
            className="flex h-10 items-center justify-center overflow-hidden rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 p-2 shadow-[0_0_18px_rgba(16,185,129,0.2)]"
          >
            <Image
              src={logoDark}
              alt="Tivisoft logo"
              width={180}
              height={36}
              priority
              className="h-7 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Mobile Logo */}
        <div className="flex items-center justify-center lg:hidden">
          <Link
            href={path('home', lang)}
            className="flex h-11 items-center justify-center overflow-hidden rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 px-3 shadow-[0_0_18px_rgba(16,185,129,0.2)]"
          >
            <Image
              src={logoDark}
              alt="Tivisoft logo"
              width={120}
              height={28}
              priority
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-200 lg:flex">
          <Link href={path('home', lang)} className="transition hover:text-emerald-300">
            {t.home}
          </Link>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 transition hover:text-emerald-300 py-1"
            >
              <span>{t.solutions}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-emerald-300" />
            </button>
            <div className="absolute left-0 top-full hidden w-64 pt-2 group-hover:block z-50">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl">
                <Link
                  href={path('intContinue', lang)}
                  className="block rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-emerald-300"
                >
                  <p className="font-semibold text-white">{t.solutionsItems.continue.title}</p>
                  <p className="text-slate-400 text-[11px]">{t.solutionsItems.continue.desc}</p>
                </Link>
                <Link
                  href={path('altCopilot', lang)}
                  className="block rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-emerald-300"
                >
                  <p className="font-semibold text-white">{t.solutionsItems.copilot.title}</p>
                  <p className="text-slate-400 text-[11px]">{t.solutionsItems.copilot.desc}</p>
                </Link>
                <Link
                  href={path('altCursor', lang)}
                  className="block rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-emerald-300"
                >
                  <p className="font-semibold text-white">{t.solutionsItems.cursor.title}</p>
                  <p className="text-slate-400 text-[11px]">{t.solutionsItems.cursor.desc}</p>
                </Link>
                <Link
                  href={path('security', lang)}
                  className="block rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-emerald-300"
                >
                  <p className="font-semibold text-white">{t.solutionsItems.security.title}</p>
                  <p className="text-slate-400 text-[11px]">{t.solutionsItems.security.desc}</p>
                </Link>
                <Link
                  href={path('deployment', lang)}
                  className="block rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-emerald-300"
                >
                  <p className="font-semibold text-white">{t.solutionsItems.infrastructure.title}</p>
                  <p className="text-slate-400 text-[11px]">{t.solutionsItems.infrastructure.desc}</p>
                </Link>
              </div>
            </div>
          </div>

          <Link href={path('finops', lang)} className="transition hover:text-emerald-300">
            {t.finops}
          </Link>
          <Link href={path('pricing', lang)} className="transition hover:text-emerald-300">
            {t.pricing}
          </Link>
          <Link href={path('blog', lang)} className="transition hover:text-emerald-300">
            {t.blog}
          </Link>
          <Link href={path('games', lang)} className="transition hover:text-emerald-300">
            {t.games}
          </Link>

          {/* Language switcher */}
          <Link
            href={altHref}
            hrefLang={switchTo}
            className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-white"
          >
            <Globe className="h-3.5 w-3.5" />
            {switchTo.toUpperCase()}
          </Link>
        </div>

        {/* CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/573102134709"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-300 hover:bg-blue-500/20 md:flex"
          >
            {t.contact}
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-800/60 text-slate-100 lg:hidden"
            aria-label={t.openMenu}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950 px-4 py-6 lg:hidden">
          <div className="space-y-4">
            <Link
              href={path('home', lang)}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium text-slate-200 hover:text-emerald-300"
            >
              {t.home}
            </Link>

            <div className="border-t border-slate-800/60 pt-3">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                {t.solutions}
              </p>
              <div className="pl-3 space-y-2.5 text-sm">
                <Link
                  href={path('intContinue', lang)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-emerald-300"
                >
                  {t.solutionsItems.continue.title} (VS Code / Cursor)
                </Link>
                <Link
                  href={path('altCopilot', lang)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-emerald-300"
                >
                  {t.solutionsItems.copilot.title}
                </Link>
                <Link
                  href={path('altCursor', lang)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-emerald-300"
                >
                  {t.solutionsItems.cursor.title}
                </Link>
                <Link
                  href={path('security', lang)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-emerald-300"
                >
                  {t.solutionsItems.security.title}
                </Link>
                <Link
                  href={path('deployment', lang)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-emerald-300"
                >
                  {t.solutionsItems.infrastructure.title}
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-800/60 pt-3 space-y-3">
              <Link
                href={path('finops', lang)}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium text-slate-200 hover:text-emerald-300"
              >
                {t.finops}
              </Link>
              <Link
                href={path('pricing', lang)}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium text-slate-200 hover:text-emerald-300"
              >
                {t.pricing}
              </Link>
              <Link
                href={path('blog', lang)}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium text-slate-200 hover:text-emerald-300"
              >
                {t.technicalBlog}
              </Link>
              <Link
                href={path('games', lang)}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium text-slate-200 hover:text-emerald-300"
              >
                Tivisoft Games
              </Link>
              <Link
                href={altHref}
                hrefLang={switchTo}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 font-medium text-emerald-300 hover:text-emerald-200"
              >
                <Globe className="h-4 w-4" />
                {getDictionary(lang).common.languageSwitch}
              </Link>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/573102134709"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950"
              >
                {t.contact}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
