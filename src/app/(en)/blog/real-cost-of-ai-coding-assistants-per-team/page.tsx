import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, Shield, BarChart3 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url, siteUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'The cost of AI coding assistants',
  description:
    'How to understand the inference cost of coding assistants, compare credits and manage security and usage with FinOps.',
  alternates: alternatesFor('blogCost', 'en'),
  openGraph: {
    title: 'The real cost of an AI coding assistant',
    description: 'Credits, token consumption, security and FinOps for engineering teams.',
    url: url('blogCost', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'article',
  },
  keywords: ['AI coding assistant cost', 'inference credits', 'FinOps for AI', 'Copilot alternatives'],
};

const articleFaqs = [
  {
    question: 'How much does it cost to use a coding assistant?',
    answer:
      "It depends on the tool, the plan, the models and the volume of usage. There is no universal monthly figure that describes the inference cost for every team. It is worth distinguishing the per-seat subscription from the tokens actually consumed and reviewing each service's limit policy.",
  },
  {
    question: 'What GitHub Copilot alternatives do companies look for?',
    answer:
      "Beyond price and features, some companies evaluate reliability, access control and protection of their infrastructure and enterprise secrets. EjectorSeat centralizes the team's access to the assistant included in the service and presents consumption metrics to support governance and optimization.",
  },
  {
    question: 'Does EjectorSeat let me use my OpenAI or Anthropic account?',
    answer:
      'No. EjectorSeat integrates the model and provider included in the product; it does not currently offer BYOK nor connect inference to OpenAI or Anthropic accounts.',
  },
  {
    question: 'Is EjectorSeat deployed in a private VPC?',
    answer:
      "EjectorSeat's current offering does not include a dedicated VPC. Tivisoft separately offers enterprise projects with assistants on your own infrastructure and processing that does not connect to the Internet. Check with Tivisoft about the scope of that solution.",
  },
];

export default function CostoRealAsistentePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'The cost of AI coding assistants: credits, usage and governance',
    description:
      'A guide to distinguishing the subscription from the inference cost and managing coding assistant usage across teams.',
    datePublished: '2026-09-24T08:00:00+00:00',
    dateModified: '2026-10-09T00:00:00+00:00',
    author: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('blogCost', 'es')} />
      <JsonLd data={articleSchema} />
      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="en" items={[
          { name: 'Blog', href: path('blog', 'en') },
          { name: 'Cost of coding assistants', href: path('blogCost', 'en') },
        ]} />
        <header className="border-b border-slate-800 pb-10 pt-4">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300">FinOps &amp; costs</span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />October 9, 2026</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />5 min read</span>
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            The real cost of an AI coding assistant
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            A subscription and the inference cost are different things. To understand a team&apos;s spend, you have to look at how many tokens it consumes, in which lanes and with what pricing rules, without inventing a monthly figure that applies to everyone.
          </p>
        </header>

        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-slate-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Quick answer</p>
          <p className="mt-3 leading-relaxed text-slate-200">
            EjectorSeat includes inference credits to use the integrated model. The scope of the credits and the commercial terms are defined in the proposal for each organization. Consumption depends on the lane and the token type —input, output or cache—. FinOps lets you review usage patterns and evaluate optimization opportunities with your team&apos;s data, without promising a savings percentage.
          </p>
        </div>

        <article className="prose prose-invert max-w-none space-y-8 text-base leading-relaxed text-slate-300 sm:text-lg">
          <section>
            <h2 className="mt-10 text-2xl font-bold text-white">A subscription is not the same as consumption</h2>
            <p>
              A per-seat license fixes the access price according to that provider&apos;s terms. A usage-based inference service calculates token consumption. Comparing them requires reviewing what each plan includes, what limits it applies and what type of model and tasks it covers. Without representative team data, a savings estimate would be speculative.
            </p>
            <p>
              Agentic assistants can make several calls to read context, propose changes and review results. The volume changes depending on the task, the context sent, the model and the number of iterations. That is why per-action token counts do not work as a universal forecast.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-2xl font-bold text-white">How to read inference credits</h2>
            <p>
              Credits let you measure consumption of the integrated model. Credit spend depends on the lane and the token type —input, output or cache—, so the number of tokens covered can change depending on the task and the usage mix. In certain patterns, credits may cover more inference tokens than other offerings; the comparison requires measuring the same type of task and token. Check the <Link href={path('pricing', 'en')} className="text-emerald-300 underline">plans</Link> page or request a proposal to learn the applicable commercial terms.
            </p>
          </section>

          <section>
            <h2 className="mt-10 flex items-center gap-3 text-2xl font-bold text-white"><BarChart3 className="h-6 w-6 text-emerald-400" />FinOps to optimize with data</h2>
            <p>
              The FinOps dashboard attributes consumption by organization, project, developer, lane and session. This information helps locate high-consumption patterns, evaluate resource usage and decide where it is worth optimizing. Managers can also use aggregated patterns to guide training and feedback for staff, without analyzing the content of their conversations.
            </p>
            <p>
              EjectorSeat keeps usage metadata to measure consumption; it does not log prompts or responses in its usage accounting. The no-training guarantee is based on DeepInfra&apos;s clauses, the integrated provider. Review those contractual terms to understand their scope.
            </p>
          </section>

          <section>
            <h2 className="mt-10 flex items-center gap-3 text-2xl font-bold text-white"><Shield className="h-6 w-6 text-emerald-400" />Security and access control</h2>
            <p>
              Companies also look for alternatives to GitHub Copilot because of reliability and control requirements: who can use the assistant, how keys are managed and how infrastructure and enterprise secrets are protected. EjectorSeat is an enterprise solution based on the Continue fork, with a plugin for VS Code and Cursor, per-developer keys and consumption visibility.
            </p>
            <p>
              The service integrates the model and provider included in EjectorSeat; the customer does not choose or connect their own OpenAI, Anthropic or other provider accounts via BYOK. The current offering also does not include deploying EjectorSeat in a dedicated VPC.
            </p>
            <p>
              Tivisoft separately offers enterprise coding assistant solutions on your own infrastructure, with processing that does not connect to the Internet. It is a different modality defined according to the project and its requirements.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-2xl font-bold text-white">Conclusion</h2>
            <p>
              To manage the cost of AI in engineering, measure consumption with a consistent unit, separate input, output and cache tokens, and review usage patterns before setting savings goals. EjectorSeat combines enterprise access to the integrated assistant with FinOps to understand and optimize spend using your team&apos;s data.
            </p>
          </section>
        </article>

        <FaqSection lang="en" items={articleFaqs} />
        <CtaBanner
          lang="en"
          title="Understand your team's AI consumption"
          subtitle="Learn about credits, the FinOps dashboard and Tivisoft's enterprise options."
          primaryButtonText="Talk to Tivisoft"
          secondaryButtonText="View pricing"
          secondaryButtonHref={path('pricing', 'en')}
        />
      </div>
      <Footer lang="en" />
    </main>
  );
}
