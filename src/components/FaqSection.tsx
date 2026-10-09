import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  description?: string;
  items: FaqItem[];
  className?: string;
}

export function FaqSection({
  title = 'Preguntas frecuentes',
  description = 'Respuestas directas y técnicas sobre EjectorSeat y la arquitectura de IA empresarial.',
  items,
  className = '',
}: FaqSectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center sm:text-left">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <HelpCircle className="h-3.5 w-3.5" />
            Preguntas y respuestas
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
          {description && <p className="mt-2 text-sm text-slate-400">{description}</p>}
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <details
              key={item.question}
              open={idx === 0}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition duration-200 hover:border-slate-700"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-semibold text-slate-100 transition hover:text-emerald-400">
                <span className="text-base sm:text-lg">{item.question}</span>
                <ChevronDown className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180 group-open:text-emerald-400" />
              </summary>
              <div className="border-t border-slate-800/80 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
