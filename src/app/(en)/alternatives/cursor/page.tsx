import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code2, KeyRound, ChartBar } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { path, alternatesFor, url } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'EjectorSeat in Cursor: access and FinOps for teams',
  description: 'EjectorSeat is a proprietary plugin for VS Code and Cursor, based on a modification of Continue. Learn about its integrated model, key-based access, and FinOps analysis.',
  alternates: alternatesFor('altCursor', 'en'),
  openGraph: {
    title: 'EjectorSeat in Cursor: access and FinOps for teams',
    description: 'Access governance and analysis of coding-assistant consumption in VS Code and Cursor.',
    url: url('altCursor', 'en'),
    siteName: 'Tivisoft', locale: 'en_US', type: 'website',
  },
};

const cursorFaqs = [
  {
    question: 'Do I have to stop using Cursor to use EjectorSeat?',
    answer: 'No. The EjectorSeat plugin targets VS Code and Cursor. You can evaluate the EjectorSeat assistant inside Cursor or use it in VS Code, depending on your team environment.',
  },
  {
    question: 'Is EjectorSeat the same as Continue?',
    answer: 'No. Tivisoft modified the open-source Continue project to offer a proprietary enterprise solution with managed access, an integrated model specialized in development, and FinOps visibility.',
  },
  {
    question: 'How does a developer connect?',
    answer: 'The administrator provides an EjectorSeat API key. The developer pastes it into the plugin panel and can start using it without configuring a URL or keys from other providers.',
  },
  {
    question: 'Can I choose any AI provider?',
    answer: 'The current EjectorSeat offering uses the development model integrated into the product through DeepInfra. It is not sold as a gateway to freely connect providers such as Anthropic or OpenAI.',
  },
  {
    question: 'What does FinOps provide?',
    answer: 'It lets you review consumption and costs attributed to teams and developers, detect usage patterns, and guide optimization, training, and feedback decisions. Savings depend on actual usage.',
  },
];

export default function CursorAlternativePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('altCursor', 'es')} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="en" items={[{ name: 'EjectorSeat in Cursor', href: path('altCursor', 'en') }]} />
        <section className="pt-4 pb-16">
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Evaluate EjectorSeat as an enterprise assistant in VS Code or Cursor
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-300">
            If your team wants more control over access, the handling of its data, and inference spend, EjectorSeat brings together the plugin and the AI service in an enterprise offering. The plugin works in VS Code and Cursor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 font-semibold text-slate-950">Request a demo <ArrowRight className="h-4 w-4" /></a>
            <Link href={path('intContinue', 'en')} className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-200">Get to know the plugin</Link>
          </div>
        </section>
        <section className="py-12">
          <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl">What EjectorSeat brings to the team</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><Code2 className="mb-4 text-emerald-400" /><h3 className="text-xl font-bold">Proprietary plugin</h3><p className="mt-2 text-slate-300">A modification of Continue prepared by Tivisoft for VS Code and Cursor, with an integrated model specialized in development.</p></article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><KeyRound className="mb-4 text-emerald-400" /><h3 className="text-xl font-bold">Governed access</h3><p className="mt-2 text-slate-300">Each developer receives an EjectorSeat key that the company can manage and revoke.</p></article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><ChartBar className="mb-4 text-emerald-400" /><h3 className="text-xl font-bold">FinOps</h3><p className="mt-2 text-slate-300">Visibility into consumption to optimize resources and understand how the assistant is used within the team.</p></article>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            DeepInfra states in <a className="text-emerald-300 underline" href="https://deepinfra.com/terms">its terms of service</a> that it does not use customer data to train models. Review the scope and exceptions of that policy when evaluating your security requirements.
          </p>
        </section>
        <FaqSection lang="en" items={cursorFaqs} />
        <CtaBanner lang="en" title="Get to know EjectorSeat in your editor" subtitle="Evaluate the plugin in VS Code or Cursor with the access governance and usage visibility your team needs." primaryButtonText="Schedule a demo" secondaryButtonText="Compare with Copilot" secondaryButtonHref={path('altCopilot', 'en')} />
      </div>
      <Footer lang="en" />
    </main>
  );
}
