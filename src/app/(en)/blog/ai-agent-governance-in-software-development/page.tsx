import type { Metadata } from 'next';
import { Clock, Calendar, Shield, Cpu, Sliders, Users } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url, siteUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'AI agent governance in software development',
  description:
    'A guide for engineering teams on access control, FinOps analysis, security, and alternatives to code assistants like GitHub Copilot.',
  alternates: alternatesFor('blogGovernance', 'en'),
  openGraph: {
    title: 'AI Agent Governance in Software Engineering | Tivisoft',
    description:
      'Criteria for evaluating access control, data handling, and resource usage in enterprise code assistants.',
    url: url('blogGovernance', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'article',
  },
  keywords: [
    'ai agent governance software',
    'ai control engineering',
    'code agents governance',
    'ai usage policies development',
    'shadow ai software development',
    'ejectorseat ai governance',
  ],
};

const governanceFaqs = [
  {
    question: 'Why do some companies look for alternatives to GitHub Copilot?',
    answer:
      'Organizations may evaluate alternatives based on their requirements for access control, data handling, provider administration, and spend predictability. This does not imply that a tool is suitable for all policies or architectures.',
  },
  {
    question: 'What does EjectorSeat offer today?',
    answer:
      'EjectorSeat is a plugin for VS Code and Cursor, based on modifications of Continue, that uses an integrated development model served by DeepInfra. The administrator provides an API key to the developer, who enters it in the plugin.',
  },
  {
    question: 'How can FinOps help control spend?',
    answer:
      'EjectorSeat offers FinOps analysis to observe usage, help optimize spend, and review the team consumption patterns. The included credits offer more inference tokens under the current conditions; the actual savings depend on usage and the applicable comparison.',
  },
];

export default function AiAgentGovernancePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'AI agent governance in software development: Speed without losing control',
    description:
      'Criteria for managing access to and usage of code assistants in engineering teams.',
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
      <Navbar lang="en" switchPath={path('blogGovernance', 'es')} />
      <JsonLd data={articleSchema} />

      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          lang="en"
          items={[
            { name: 'Blog', href: path('blog', 'en') },
            { name: 'AI Agent Governance', href: path('blogGovernance', 'en') },
          ]}
        />

        {/* Header */}
        <header className="pt-4 pb-10 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="rounded-full bg-purple-500/10 border border-purple-400/30 px-3 py-1 font-semibold text-purple-300">
              Governance
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              September 24, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              7 min read
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl leading-tight">
            AI agent governance in software development: Speed without losing control
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Some organizations look for alternatives to GitHub Copilot to respond to their requirements for reliability, data handling, access control, and spend. A useful evaluation starts from the internal policies and the verifiable features of each solution.
          </p>
        </header>

        {/* Direct Answer Box (AEO) */}
        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Direct answer: what does EjectorSeat contribute to usage management?
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
            <strong>EjectorSeat</strong> is a plugin for VS Code and Cursor that lets you manage access through API keys and offers FinOps analysis of usage. It integrates a development model served by DeepInfra. For requirements around your own infrastructure and operation without an internet connection, Tivisoft offers a separate enterprise solution.
          </p>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              The dilemma: Block or lose control
            </h2>
            <p>
              Some companies look for alternatives to GitHub Copilot because they want to evaluate other options for control, data handling, reliability, and spend administration. Each organization must weigh those needs against the conditions of the product and its provider.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 my-6">
              <div className="rounded-xl border border-rose-500/30 bg-slate-900/60 p-5">
                <h3 className="font-bold text-rose-400">1. The total ban</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Restricting tools without offering an alternative that meets the team requirements can make it harder to adopt authorized practices.
                </p>
              </div>
              <div className="rounded-xl border border-yellow-500/30 bg-slate-900/60 p-5">
                <h3 className="font-bold text-yellow-400">2. Complete lack of control</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Allowing tools and accounts without an access policy or spend tracking can reduce visibility into usage and its costs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              The 4 Pillars of Governance framework
            </h2>
            <p>
              To evaluate tools, teams can define their access policies, review the provider commitments, and observe spend and usage patterns.
            </p>

            <div className="space-y-4 my-6">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Shield className="h-5 w-5" />
                  Pillar 1: Team access
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  In EjectorSeat, the administrator provides an API key to the developer, who enters it in the plugin. The current product does not use Anthropic or OpenAI models.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  <Cpu className="h-5 w-5" />
                  Pillar 2: Data handling
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  EjectorSeat includes a development model served by DeepInfra. Review the provider&apos;s current terms and the internal policies on the code that can be sent to the assistant.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Sliders className="h-5 w-5" />
                  Pillar 3: FinOps analysis
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  EjectorSeat&apos;s FinOps analysis helps review usage behavior and optimize spend. The included credits offer more inference tokens under the current conditions; the savings depend on the usage pattern and should be measured against an equivalent baseline.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-purple-400 font-bold">
                  <Users className="h-5 w-5" />
                  Pillar 4: Team support
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Aggregated usage data can help identify training needs and provide feedback to the team. Organizations must define their review and responsible-development practices.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              EjectorSeat&apos;s role in technical governance
            </h2>
            <p>
              EjectorSeat starts from Continue and is offered as a plugin for VS Code and Cursor. It gives the administrator a way to provide access with API keys and FinOps tools to analyze the team usage.
            </p>
          </section>
        </article>

        {/* FAQs */}
        <FaqSection lang="en" items={governanceFaqs} />

        {/* CTA */}
        <CtaBanner
          lang="en"
          title="Establish efficient AI governance in your software team"
          subtitle="Discover EjectorSeat's plugin, integrated model, and FinOps features."
          primaryButtonText="Schedule a Governance Consultation"
          secondaryButtonText="See Continue Case"
          secondaryButtonHref={path('intContinue', 'en')}
        />
      </div>

      <Footer lang="en" />
    </main>
  );
}
