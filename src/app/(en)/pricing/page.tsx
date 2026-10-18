import type { Metadata } from 'next';
import { Check, ArrowRight, Sparkles, Coins, BarChart3 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'EjectorSeat Plans',
  description:
    'Learn how EjectorSeat plans are structured and request a commercial proposal for your team.',
  alternates: alternatesFor('pricing', 'en'),
  openGraph: {
    title: 'EjectorSeat Plans',
    description: 'Managed access, inference credits and FinOps for engineering teams.',
    url: url('pricing', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'website',
  },
  keywords: ['EjectorSeat plans', 'inference credits', 'FinOps coding assistants'],
};

const pricingTiers = [
  {
    name: 'Pilot',
    description: 'For a first technical evaluation with the team.',
    price: 'Contact us',
    unit: 'evaluation',
    detail: 'Scope and duration per the agreed proposal',
    badge: 'Evaluation',
    highlighted: false,
    features: ['Inference credits included', 'Access to the plugin for VS Code and Cursor', 'Initial consumption review'],
  },
  {
    name: 'Team',
    description: 'For teams that need enterprise access and consumption visibility.',
    price: 'Contact us',
    unit: 'per team',
    detail: 'Credit bundle per the agreed proposal',
    badge: 'Team',
    highlighted: true,
    features: ['Inference credits included in the plan', 'Revocable key per developer', 'Consumption visible by project and lane'],
  },
  {
    name: 'Enterprise',
    description: 'For organizations with enterprise governance and operational requirements.',
    price: 'Contact us',
    unit: 'per organization',
    detail: 'Terms and credits per the agreed proposal',
    badge: 'Enterprise',
    highlighted: false,
    features: ['Inference credits included in the plan', 'Access governance and FinOps analytics', 'Enterprise terms subject to agreement'],
  },
];

const pricingFaqs = [
  {
    question: 'What does it mean for the plan to include inference credits?',
    answer:
      'Credits are deducted based on the lane and the token type: input, output or cache. The number of tokens a bundle covers depends on the usage pattern and the terms of the agreed plan.',
  },
  {
    question: 'Does the plan allow BYOK or choosing a provider?',
    answer:
      'No. EjectorSeat includes the model and provider integrated into the service. Today it does not connect your own Anthropic, OpenAI, AWS Bedrock or other provider accounts.',
  },
  {
    question: 'Does EjectorSeat include a private VPC or DLP?',
    answer:
      'The current EjectorSeat offering does not include a dedicated VPC and should not be described as a DLP product. Tivisoft separately offers enterprise assistant projects on your own infrastructure, with processing that is not connected to the Internet.',
  },
  {
    question: "How can I see my team's consumption?",
    answer:
      'FinOps attributes aggregated usage by organization, project, person, lane and session. That information lets you analyze patterns and optimize spend. The dashboard uses consumption metadata; it does not include prompts or responses.',
  },
];

export default function PricingPage() {
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'EjectorSeat',
    description: 'Enterprise coding assistant plugin for VS Code and Cursor with inference credits and FinOps.',
    brand: { '@type': 'Brand', name: 'Tivisoft' },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('pricing', 'es')} />
      <JsonLd data={pricingSchema} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="en" items={[{ name: 'Pricing', href: path('pricing', 'en') }]} />
        <section className="pb-12 pt-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <Sparkles className="h-4 w-4" /> Pricing with inference credits
          </div>
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            Plans to govern the use of coding assistants.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Every seat includes a bundle of credits to use the integrated EjectorSeat model. FinOps helps you understand consumption by project and lane to optimize resources with team data.
          </p>
        </section>

        <section className="grid gap-7 py-4 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className={`flex flex-col justify-between rounded-3xl border p-8 ${tier.highlighted ? 'border-emerald-400/80 bg-slate-900 shadow-[0_0_40px_rgba(16,185,129,0.14)]' : 'border-slate-800 bg-slate-900/60'}`}>
              <div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">{tier.badge}</span>
                <h2 className="mt-5 text-2xl font-bold text-white">{tier.name}</h2>
                <p className="mt-2 min-h-12 text-sm text-slate-400">{tier.description}</p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="ml-2 text-xs text-slate-400">{tier.unit}</span>
                </div>
                <p className="mb-5 text-sm font-medium text-emerald-300">{tier.detail}</p>
                <ul className="space-y-3 border-t border-slate-800 pt-6 text-sm text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" /><span>{feature}</span></li>
                  ))}
                </ul>
              </div>
              <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-slate-950 hover:bg-emerald-300">
                Ask about this plan <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </section>

        <section className="my-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <Coins className="h-7 w-7 text-emerald-400" />
            <h2 className="mt-4 text-xl font-bold text-white">How many tokens do the credits cover?</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">It depends on the lane and the token type. Input, output and cache have different consumption. Credits can offer more inference tokens per budget, but the specific comparison depends on the plan and the usage pattern.</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <BarChart3 className="h-7 w-7 text-blue-400" />
            <h2 className="mt-4 text-xl font-bold text-white">FinOps with usage data</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">The dashboard attributes consumption by project, person and lane. Leaders can review aggregated patterns to optimize resources and guide training and feedback, without analyzing prompts or responses.</p>
          </div>
        </section>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm leading-relaxed text-slate-400">
          Amounts and terms are defined in the commercial proposal for each organization. Ask Tivisoft about the credit bundle, the scope of the pilot and the usage terms before signing up.
        </div>

        <FaqSection lang="en" items={pricingFaqs} />
        <CtaBanner
          lang="en"
          title="Find the right plan for your team"
          subtitle="Learn about the integrated model, the credits and the FinOps visibility of EjectorSeat."
          primaryButtonText="Ask about plans"
          secondaryButtonText="Explore FinOps"
          secondaryButtonHref={path('finops', 'en')}
        />
      </div>
      <Footer lang="en" />
    </main>
  );
}
