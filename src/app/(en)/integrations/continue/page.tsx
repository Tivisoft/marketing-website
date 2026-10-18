import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Cpu, Key, Layers, Shield, Sparkles, Terminal } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url, siteUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Continue and EjectorSeat for VS Code and Cursor',
  description:
    'Learn about EjectorSeat, the enterprise solution based on Continue for VS Code and Cursor: API key access, an integrated development model, and FinOps tools.',
  alternates: alternatesFor('intContinue', 'en'),
  openGraph: {
    title: 'Continue + EjectorSeat for VS Code and Cursor | Tivisoft',
    description:
      'An enterprise version based on Continue, with a plugin for VS Code and Cursor, an integrated development model, and FinOps analysis.',
    url: url('intContinue', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    'Continue VS Code',
    'Continue Cursor',
    'enterprise GitHub Copilot alternative',
    'EjectorSeat',
    'enterprise coding assistant',
    'FinOps AI development',
  ],
};

const continueFaqs = [
  {
    question: 'What is Continue and how is it related to EjectorSeat?',
    answer:
      'Continue is an open-source coding-assistant project used by developers. EjectorSeat starts from Continue and modifies it to offer an enterprise solution with access governance and FinOps analysis. EjectorSeat is not an IDE: today it is offered as a plugin for VS Code and Cursor.',
  },
  {
    question: 'How does a developer start using it?',
    answer:
      'The developer receives an API key, enters it in the EjectorSeat plugin, and uses the assistant from VS Code or Cursor.',
  },
  {
    question: 'Can I connect my own account or choose any AI provider?',
    answer:
      'No. EjectorSeat includes the model intended for software development and does not work as a BYOK option to connect Anthropic, OpenAI, or other provider accounts.',
  },
  {
    question: 'What guarantee is there about using the data to train models?',
    answer:
      'The guarantee of not training the model with the data is based on the clauses of the provider DeepInfra. Consult those clauses to learn their scope; for that reason EjectorSeat does not offer a guarantee of processing in your own VPC.',
  },
  {
    question: 'How does EjectorSeat help control spend?',
    answer:
      'The credits offer more inference tokens and the FinOps layer helps optimize spend and analyze usage patterns. That analysis can also support team training and feedback.',
  },
];

export default function ContinueIntegrationPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: 'Continue + EjectorSeat for software teams',
        description:
          'How EjectorSeat, an enterprise solution based on Continue, works in VS Code and Cursor.',
        author: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
        publisher: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
        about: { '@type': 'SoftwareApplication', name: 'EjectorSeat', applicationCategory: 'DeveloperApplication' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: continueFaqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('intContinue', 'es')} />
      <JsonLd data={schemaData} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="en" items={[{ name: 'Integrations', href: path('intContinue', 'en') }, { name: 'Continue + EjectorSeat', href: path('intContinue', 'en') }]} />

        <section className="pt-4 pb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
            <Sparkles className="h-4 w-4" /> Enterprise solution based on Continue
          </div>
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Enterprise coding assistant for VS Code and Cursor.
          </h1>
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">What is EjectorSeat?</p>
            <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
              Continue is an open-source coding-assistant project. <strong>EjectorSeat starts from Continue and modifies it to offer enterprise access and FinOps features.</strong> It is used as a plugin for VS Code and Cursor, with an integrated model for software development. To get started, the developer receives an API key and enters it in the plugin.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-[1.02]">
              Ask about EjectorSeat <ArrowRight className="h-4 w-4" />
            </a>
            <Link href={path('pricing', 'en')} className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3.5 font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white">
              Explore the offering
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">How it is used</h2>
            <p className="mt-2 text-slate-400">The flow for the developer is straightforward: plugin, API key, and coding assistance.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <Terminal className="mb-4 h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-bold text-white">1. Install the plugin</h3>
              <p className="mt-2 text-sm text-slate-300">EjectorSeat is available as a plugin for VS Code and Cursor. Continue is the open-source project it starts from and that was modified for this solution.</p>
            </div>
            <div className="relative rounded-2xl border border-emerald-500/40 bg-slate-900/90 p-6">
              <Key className="mb-4 h-6 w-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-emerald-300">2. Enter your API key</h3>
              <p className="mt-2 text-sm text-slate-300">The team gives the developer an API key, which they enter in the plugin to enable access.</p>
            </div>
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <Cpu className="mb-4 h-6 w-6 text-purple-400" />
              <h3 className="text-lg font-bold text-white">3. Use the integrated model</h3>
              <p className="mt-2 text-sm text-slate-300">EjectorSeat includes a model specialized in software development. It does not connect the product with Anthropic or OpenAI accounts.</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <div className="flex items-center gap-3"><Shield className="h-6 w-6 text-emerald-400" /><h2 className="text-2xl font-bold text-white">Governance and usage analysis</h2></div>
              <p className="mt-4 text-slate-300">EjectorSeat is designed so that companies manage technical staff access to the assistant and review usage from its FinOps layer. Credits include more inference tokens, while pattern analysis helps optimize spend and guide training and feedback.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <div className="flex items-center gap-3"><Layers className="h-6 w-6 text-blue-400" /><h2 className="text-2xl font-bold text-white">Options for different needs</h2></div>
              <p className="mt-4 text-slate-300">The guarantee of not training on the data corresponds to <a className="text-emerald-300 underline" href="https://deepinfra.com/terms">the clauses of the provider DeepInfra</a>. For organizations that require coding assistants and processing within their own infrastructure, Tivisoft also offers enterprise solutions designed to operate without an internet connection.</p>
            </div>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-sm text-slate-400">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
            <p>The network isolation, deployment, and data-handling features depend on the contracted solution. EjectorSeat is not currently offered as a service in a customer VPC.</p>
          </div>
        </section>

        <FaqSection lang="en" items={continueFaqs} />
        <CtaBanner lang="en" title="Get to know EjectorSeat for your team" subtitle="Get to know the plugin for VS Code and Cursor, the integrated development model, and the governance and FinOps capabilities." primaryButtonText="Talk to Tivisoft" secondaryButtonText="Read the comparison" secondaryButtonHref={path('blogCompare', 'en')} />
      </div>
      <Footer lang="en" />
    </main>
  );
}
