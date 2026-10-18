'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import type { Locale } from '@/i18n/config';

export type GalleryItem = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

const labels: Record<Locale, { enlarge: string; close: string; prev: string; next: string }> = {
  en: { enlarge: 'Enlarge image', close: 'Close gallery', prev: 'Previous image', next: 'Next image' },
  es: { enlarge: 'Ampliar imagen', close: 'Cerrar galería', prev: 'Imagen anterior', next: 'Imagen siguiente' },
};

export default function GameGallery({ items, lang = 'en' }: { items: GalleryItem[]; lang?: Locale }) {
  const t = labels[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const go = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? current : (current + delta + items.length) % items.length,
      ),
    [items.length],
  );

  const open = (index: number) => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setOpenIndex(index);
  };

  useEffect(() => {
    if (openIndex === null) {
      lastFocusedRef.current?.focus();
      return;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, go]);

  const active = openIndex === null ? null : items[openIndex];

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <li key={item.alt}>
            <button
              type="button"
              onClick={() => open(index)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              aria-label={`${t.enlarge}: ${item.caption}`}
            >
              <span className="block aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </span>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent p-3 text-left text-xs font-semibold text-white sm:text-sm">
                {item.caption}
                <Expand className="h-4 w-4 shrink-0 opacity-0 transition group-hover:opacity-100" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label={t.close}
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            className="absolute left-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:left-6"
            aria-label={t.prev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            className="absolute right-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:right-6"
            aria-label={t.next}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="max-h-full w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 60vw, 90vw"
              className="mx-auto h-auto max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-slate-200">
              {active.caption}
              <span className="ml-2 text-slate-400">
                {(openIndex ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
