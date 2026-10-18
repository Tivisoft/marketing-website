import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, TrendingDown, PieChart, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'FinOps for coding assistants | EjectorSeat',
  description:
    'Review coding assistant consumption by project, person and lane. Use aggregated data to optimize resources and guide training, without logging prompts or responses.',
  alternates: alternatesFor('finops', 'en'),
  openGraph: {
    title: 'FinOps for coding assistants | EjectorSeat',
    description:
      'Visibility into AI consumption for engineering, usage pattern analysis and inference credits per lane.',
    url: url('finops', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'website',
  },
  keywords: ['ai finops', 'coding assistant costs', 'ai governance', 'EjectorSeat FinOps'],
};

const finopsFaqs = [
  {
    question: 'What does FinOps show in EjectorSeat?',
    answer:
      'The dashboard presents aggregated consumption attributed by organization, project, person, lane and session, based on the available data. It helps you understand where resources are used and review how they evolve; it does not promise percentage savings or an automatic reduction in spend.',
  },
  {
    question: 'How do credits help understand consumption?',
    answer:
      'Credits let you measure the consumption of the integrated model. The number of tokens covered depends on the lane and whether they are input, output or cache tokens; that is why there is no single credit-to-token conversion. Commercial terms are defined in the proposal for each organization.',
  },
  {
    question: 'Does FinOps store code, prompts or responses?',
    answer:
      'The dashboard works with usage and consumption metadata. The product must not log the content of prompts or responses. Aggregated patterns can help leaders identify training needs and give feedback to the team, without using the content of the conversations.',
  },
  {
    question: 'Can I connect my own Anthropic, OpenAI or Bedrock account?',
    answer:
      'EjectorSeat offers the model and provider integrated into the product. BYOK and routing to providers chosen by each customer are not part of the current offering.',
  },
];

export default function FinOpsAIPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'FinOps for coding assistants: consumption visibility and optimization',
    description:
      'How to understand coding assistant usage through inference credits and aggregated metrics.',
    author: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
    publisher: { '@type': 'Organization', name: 'Tivisoft', url: 'https://tivisoft.com' },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('finops', 'es')} />
      <JsonLd data={schemaData} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="en" items={[{ name: 'AI FinOps', href: path('finops', 'en') }]} />
        <section className="pb-14 pt-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <BarChart3 className="h-4 w-4" /> FinOps for engineering teams
          </div>
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            Understand and optimize your team&apos;s AI consumption.
          </h1>
          <div className="mt-7 max-w-4xl rounded-2xl border border-emerald-500/30 bg-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Direct answer: what is FinOps for in EjectorSeat?
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
              The EjectorSeat dashboard attributes consumption by project, person and lane. That visibility lets you review spend, find usage patterns and guide optimizations and training. Credits let you measure inference consumption; the number of tokens covered depends on the lane, the working model and the token type.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 font-semibold text-slate-950">
              Talk to Tivisoft <ArrowRight className="h-4 w-4" />
            </a>
            <Link href={path('pricing', 'en')} className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-200 hover:border-emerald-400/50">
              Ask about plans
            </Link>
          </div>
        </section>

        <section className="grid gap-6 py-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <PieChart className="h-7 w-7 text-blue-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Attributable consumption</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Review aggregated usage by project, person and lane to see how inference resources are distributed.</p>
          </div>
          <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/80 p-7">
            <TrendingDown className="h-7 w-7 text-emerald-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Optimization decisions</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Compare periods and lanes to evaluate changes in usage and focus reviews where they can have the greatest impact.</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <Users className="h-7 w-7 text-purple-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Team support</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Use aggregated adoption patterns to identify training opportunities and give feedback on usage practices.</p>
          </div>
        </section>

        <section className="my-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-7 sm:p-10">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-7 w-7 flex-shrink-0 text-emerald-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Usage metrics without conversation content</h2>
              <p className="mt-3 leading-relaxed text-slate-300">
                FinOps uses consumption metadata for attribution and analysis. Prompts, responses and the code sent to the assistant are not included in the dashboard. The no-training guarantee is based on the clauses of DeepInfra, the integrated provider; review those contractual terms to understand their scope.
              </p>
              <p className="mt-3 leading-relaxed text-slate-300">
                EjectorSeat uses the model and provider included in the service. The platform does not currently offer BYOK or an EjectorSeat VPC. Tivisoft also offers enterprise assistant projects on your own infrastructure, with processing that is not connected to the Internet, as a separate solution.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">How to interpret the credits</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            Credits let you review the consumption of the integrated model. Usage is calculated based on the lane and the token type —input, output or cache—, so the number of tokens covered varies with the mix of tasks. There is no single equivalence to compare all usage patterns. The terms of each commercial proposal are agreed with the organization.
          </p>
        </section>

        <FaqSection lang="en" items={finopsFaqs} />
        <CtaBanner
          lang="en"
          title="Bring FinOps visibility to your coding assistants"
          subtitle="Learn how EjectorSeat attributes usage and helps your team make informed decisions about AI resources."
          primaryButtonText="Talk to Tivisoft"
          secondaryButtonText="View plans and pricing"
          secondaryButtonHref={path('pricing', 'en')}
        />
      </div>
      <Footer lang="en" />
    </main>
  );
}
