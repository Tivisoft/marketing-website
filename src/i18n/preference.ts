import { locales, type Locale } from './config';

export const preferenceStorageKey = 'tivisoft-language';
export const fallbackLocale: Locale = 'es';

export function isLocale(value: string | null): value is Locale {
  return locales.some((locale) => locale === value);
}

export function preferredLocale(languages: readonly string[]): Locale {
  for (const language of languages) {
    const base = language.toLowerCase().split(/[-_]/)[0];
    if (isLocale(base)) return base;
  }
  return fallbackLocale;
}
