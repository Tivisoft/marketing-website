import type { Metadata } from 'next';
import { ShieldCheck, Lock, FileText, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Security and data handling in EjectorSeat',
  description:
    'Learn how code sent from EjectorSeat is handled and about the no-training commitment published by DeepInfra, the provider of the integrated model.',
  alternates: alternatesFor('security', 'en'),
  openGraph: {
    title: 'Security and data handling in EjectorSeat | Tivisoft',
    description:
      'Transparent information about the inference provider, data handling and the enterprise infrastructure options from Tivisoft.',
    url: url('security', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    'ai that does not train on my code',
    'ai coding assistant security',
    'ai code custody',
    'code privacy continue vscode',
    'ejectorseat security',
  ],
};

const securityFaqs = [
  {
    question: 'Does EjectorSeat train models on the code you send?',
    answer:
      'EjectorSeat uses an integrated development model served by DeepInfra. In its current terms, DeepInfra states that it does not sell customer data or use it to train, tune or improve models, except when necessary to provide the service. The clause contemplates retention exceptions for authorized support, operational metadata without content, and legal or security obligations. Review the official terms at https://deepinfra.com/terms.',
  },
  {
    question: 'Does EjectorSeat offer DLP or secret scanning?',
    answer:
      'We do not present the current product as a DLP solution, nor do we claim that it detects or redacts secrets. Teams should apply their own security controls and review what context they share with the assistant.',
  },
  {
    question: 'Is EjectorSeat deployed in a VPC or does it work without an internet connection?',
    answer:
      'No. EjectorSeat does not currently offer deployment in the customer VPC or air-gapped operation. Tivisoft also talks with companies about enterprise solutions on their own infrastructure; that offering is distinct from the EjectorSeat product and its scope is defined per project.',
  },
  {
    question: 'How is EjectorSeat used?',
    answer:
      'The developer receives an API key, enters it in the EjectorSeat plugin for VS Code or Cursor, and uses the assistant from their editor.',
  },
];

export default function SecurityAndDataCustodyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Security and data handling in EjectorSeat',
    description:
      'Information about the data handling of the inference provider used by EjectorSeat.',
    author: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: 'https://tivisoft.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: 'https://tivisoft.com',
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('security', 'es')} />
      <JsonLd data={schemaData} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          lang="en"
          items={[
            { name: 'Security and Data Custody', href: path('security', 'en') },
          ]}
        />

        {/* Hero */}
        <section className="pt-4 pb-16 text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300">
            <ShieldCheck className="h-4 w-4" />
            Security and data handling
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learn how the code you share with an AI assistant is handled.
          </h1>

          {/* AEO Direct Answer Box */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Direct Answer: Which data-handling commitment applies to the model?
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>EjectorSeat</strong> uses the integrated model served by DeepInfra. DeepInfra&apos;s terms state that customer data is not used to train, tune or improve models, except when necessary to provide the service. The clause contemplates specific exceptions and is not equivalent to claiming that EjectorSeat offers DLP, absolute ZDR or deployment in the customer&apos;s infrastructure. <a className="text-emerald-300 underline" href="https://deepinfra.com/terms" target="_blank" rel="noreferrer">Read DeepInfra&apos;s official terms</a>.
            </p>
          </div>
        </section>

        {/* The 5 Security Pillars */}
        <section className="py-12">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What you should know about data handling
            </h2>
            <p className="mt-2 text-slate-400">
              Review the provider&apos;s terms and your organization&apos;s internal controls before enabling coding assistants.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <Lock className="mb-4 h-6 w-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Integrated provider</h3>
              <p className="mt-2 text-sm text-slate-300">EjectorSeat uses the integrated development model served by DeepInfra; it does not currently route requests to Anthropic or OpenAI.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <FileText className="mb-4 h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Provider commitment</h3>
              <p className="mt-2 text-sm text-slate-300">DeepInfra states that it does not use customer data to train, tune or improve models, except as necessary to provide the service.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <AlertTriangle className="mb-4 h-6 w-6 text-amber-400" />
              <h3 className="text-xl font-bold text-white">Review the exceptions</h3>
              <p className="mt-2 text-sm text-slate-300">The clause contemplates authorized support, operational metadata without content, and retention required by law or necessary to respond to security or abuse incidents.</p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-white">An alternative for engineering teams</h2>
            <p className="mt-3 max-w-3xl text-slate-300">Organizations look for alternatives to assistants like GitHub Copilot when they need to evaluate their own requirements for control, data handling, access management and cost. EjectorSeat lets you manage developer access and offers FinOps to observe and optimize usage. Its controls do not replace the organization&apos;s security policies.</p>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection lang="en" items={securityFaqs} />

        {/* CTA */}
        <CtaBanner
          lang="en"
          title="Learn about the usage and data-handling terms"
          subtitle="Review the terms published by the inference provider and talk with Tivisoft about your organization&apos;s requirements."
          primaryButtonText="Book a Security Session"
          secondaryButtonText="Read more about no-training"
          secondaryButtonHref={path('blogTraining', 'en')}
        />
      </div>

      <Footer lang="en" />
    </main>
  );
}
