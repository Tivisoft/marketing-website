'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { routes, type Locale, type RouteId } from '@/i18n/config';
import { isLocale, preferredLocale, preferenceStorageKey } from '@/i18n/preference';

function remember(locale: Locale) {
  try {
    localStorage.setItem(preferenceStorageKey, locale);
  } catch (error) {
    console.warn('Unable to save the language preference.', error);
  }
}

export function LanguageSuggestion() {
  const pathname = usePathname();
  const [suggestion, setSuggestion] = useState<{ locale: Locale; href: string } | null>(null);
  const currentLocale: Locale = pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';

  useEffect(() => {
    const normalized = pathname.replace(/\/+$/, '') || '/';
    const route = (Object.keys(routes) as RouteId[]).find((id) =>
      Object.values(routes[id]).includes(normalized),
    );
    if (!route) {
      setSuggestion(null);
      return;
    }

    let stored: string | null = null;
    try {
      stored = localStorage.getItem(preferenceStorageKey);
    } catch (error) {
      console.warn('Unable to read the language preference.', error);
    }

    const preferred = isLocale(stored)
      ? stored
      : preferredLocale(navigator.languages?.length ? navigator.languages : [navigator.language || '']);
    setSuggestion(preferred === currentLocale ? null : { locale: preferred, href: routes[route][preferred] });
  }, [pathname, currentLocale]);

  useEffect(() => {
    // Covers language links in both the shared navbar and the games header.
    const onClick = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[hreflang]') : null;
      const locale = anchor?.getAttribute('hreflang') ?? null;
      if (isLocale(locale)) {
        remember(locale);
        setSuggestion(null);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!suggestion) return null;

  const spanish = suggestion.locale === 'es';
  return (
    <aside
      lang={suggestion.locale}
      aria-label={spanish ? 'Preferencia de idioma' : 'Language preference'}
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-xl flex-wrap items-center justify-center gap-3 rounded-2xl border border-slate-600 bg-slate-900 p-4 text-sm text-white shadow-2xl"
    >
      <p>{spanish ? '¿Prefieres ver esta página en español?' : 'Would you prefer to view this page in English?'}</p>
      <a
        href={suggestion.href}
        hrefLang={suggestion.locale}
        onClick={() => remember(suggestion.locale)}
        className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950"
      >
        {spanish ? 'Ver en español' : 'View in English'}
      </a>
      <button
        type="button"
        onClick={() => {
          remember(currentLocale);
          setSuggestion(null);
        }}
        className="rounded-full border border-slate-500 px-4 py-2"
      >
        {spanish ? 'Continuar en inglés' : 'Continue in Spanish'}
      </button>
    </aside>
  );
}
