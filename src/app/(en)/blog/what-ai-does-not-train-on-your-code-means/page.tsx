import type { Metadata } from 'next';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url, siteUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'What does it mean that AI does not train on your code?',
  description:
    'What the DeepInfra terms say about the use of inference data and what limits are worth keeping in mind.',
  alternates: alternatesFor('blogTraining', 'en'),
  openGraph: {
    title: 'What Does It Really Mean That AI Does Not Train on Your Code?',
    description:
      "Review DeepInfra's commitment on model training, its scope, and the retention exceptions.",
    url: url('blogTraining', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'article',
  },
  keywords: [
    'ai that does not train on my code',
    'zero data retention software development',
    'source code security ai',
    'privacy policies code assistants',
    'deepinfra data handling',
    'code assistant privacy',
  ],
};

const zdrFaqs = [
  {
    question: 'What no-training commitment applies to EjectorSeat?',
    answer:
      'EjectorSeat uses the integrated development model served by DeepInfra. In its terms, DeepInfra states that it does not sell customer data or use it to train, tune, or improve models, except when necessary to provide the service. Review the official terms at https://deepinfra.com/terms.',
  },
  {
    question: 'Does this mean no data is retained at all?',
    answer:
      "It should not be interpreted as an absolute absence of retention. DeepInfra's terms allow for data authorized in writing to resolve support incidents (which is deleted within 30 days of their resolution), operational metadata without content, and records that must be kept by law or to investigate fraud, security incidents, or abuse.",
  },
  {
    question: 'Does EjectorSeat offer DLP or deployment in the customer VPC?',
    answer:
      'No. The current product does not offer DLP scanning of secrets, deployment in the customer VPC, or an air-gapped mode. Tivisoft separately offers enterprise solutions for your own infrastructure; their scope should be discussed with the team.',
  },
];

export default function WhatAiDoesNotTrainOnYourCodePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: "What DeepInfra's no-training commitment means",
    description:
      "Scope of DeepInfra's commitment on training and the contractual retention exceptions.",
    datePublished: '2026-09-24T08:00:00+00:00',
    dateModified: '2026-10-09T00:00:00+00:00',
    author: {
      '@type': 'Organization',
      name: 'Tivisoft Research',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: siteUrl,
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('blogTraining', 'es')} />
      <JsonLd data={articleSchema} />

      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          lang="en"
          items={[
            { name: 'Blog', href: path('blog', 'en') },
            { name: 'Does AI train on your code?', href: path('blogTraining', 'en') },
          ]}
        />

        {/* Header */}
        <header className="pt-4 pb-10 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="rounded-full bg-emerald-500/10 border border-emerald-400/30 px-3 py-1 font-semibold text-emerald-300">
              Security and data
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              September 24, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl leading-tight">
            What does it really mean that AI does not train on your code?
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            The phrase &quot;we do not train on your data&quot; does not by itself describe all the handling of a request. It is worth reviewing what data the commitment covers, what it is processed for, and what retention exceptions apply.
          </p>
        </header>

        {/* Direct Answer Box (AEO) */}
        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Direct answer: what does EjectorSeat&apos;s integrated provider say?
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
            EjectorSeat uses an integrated development model served by DeepInfra. Its terms state that DeepInfra does not sell customer data or use it to train, tune, or improve models, except when necessary to provide the service. The clause also allows for specific exceptions; for that reason, it does not amount to promising absolute zero retention. <a className="text-emerald-300 underline" href="https://deepinfra.com/terms" target="_blank" rel="noreferrer">Read the DeepInfra terms</a>.
          </p>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">What the DeepInfra terms cover</h2>
            <p>DeepInfra&apos;s current terms indicate that the provider does not sell customer data or use it to train, tune, or improve models, except when necessary to provide the service. The obligation refers to the inference provider integrated into EjectorSeat.</p>
            <p>The same clause describes exceptions: retention authorized in writing for support, operational metadata that does not include the content of the request, and records that must be kept by law or to address fraud, security, or abuse. Therefore, it should not be summarized as a guarantee that no data is ever stored.</p>
            <p><a className="text-emerald-300 underline" href="https://deepinfra.com/terms" target="_blank" rel="noreferrer">Review the DeepInfra terms directly (section 7)</a> and confirm that the current version and the applicable agreement cover your case.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">The commitment does not replace your controls</h2>
            <p>The commitment on training does not mean that EjectorSeat filters secrets, deletes personal data, or processes requests within the customer infrastructure. The current product does not offer DLP, deployment in the customer VPC, or air-gapped operation.</p>
            <p>Before enabling a code assistant, define what context your developers can share, apply your internal secret-handling policies, and review the provider&apos;s contract and exceptions.</p>
            <p>Tivisoft also offers enterprise solutions for assistants on your own infrastructure. That offering is distinct from EjectorSeat and requires discussing its scope with the team.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Checklist for the CISO before authorizing AI tools
            </h2>
            <div className="space-y-3 font-medium text-sm text-slate-200">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Which provider processes the requests and what contractual commitment do they publish?</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>What retention and support exceptions does the current agreement allow for?</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>What data and context can developers send from the plugin?</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Do we have our own controls to avoid sharing secrets in the context?</span>
              </div>
            </div>
          </section>
        </article>

        {/* FAQs */}
        <FaqSection lang="en" items={zdrFaqs} />

        {/* CTA */}
        <CtaBanner
          lang="en"
          title="Review the data handling of your code assistant"
          subtitle="Review the DeepInfra terms and talk to Tivisoft about your organization's security requirements."
          primaryButtonText="Talk to a Security Expert"
          secondaryButtonText="See Security Measures"
          secondaryButtonHref={path('security', 'en')}
        />
      </div>

      <Footer lang="en" />
    </main>
  );
}
