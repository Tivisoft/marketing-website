'use client';

import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import type { Locale } from '@/i18n/config';

type Props = {
  videoId: string;
  title: string;
  /** Tailwind aspect-ratio class for the player frame. */
  aspectClassName?: string;
  lang?: Locale;
};

const labels: Record<Locale, { watch: string; play: string }> = {
  en: { watch: 'Watch on YouTube', play: 'Play video' },
  es: { watch: 'Ver en YouTube', play: 'Reproducir video' },
};

/**
 * Renders a lightweight thumbnail first and only loads the YouTube iframe on click,
 * to keep the page fast and avoid third-party scripts on initial load.
 */
export default function YouTubeEmbed({
  videoId,
  title,
  aspectClassName = 'aspect-video',
  lang = 'en',
}: Props) {
  const [active, setActive] = useState(false);
  const t = labels[lang];
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className={`relative w-full overflow-hidden bg-slate-900 ${aspectClassName}`}>
      {active ? (
        <>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          {/* Escape hatch for videos whose owner disabled embedding. */}
          <a
            href={watchUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-slate-950"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {t.watch}
          </a>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400"
          aria-label={`${t.play}: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            }}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-slate-950/25 transition group-hover:bg-slate-950/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 transition group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
