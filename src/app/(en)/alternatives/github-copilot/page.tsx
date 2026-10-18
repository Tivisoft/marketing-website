import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, KeyRound, BarChart3, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url, siteUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'EjectorSeat as an enterprise alternative to GitHub Copilot',
  description: 'EjectorSeat offers its own plugin for VS Code and Cursor, key-governed access, and FinOps analysis. Learn what to evaluate when comparing alternatives to GitHub Copilot.',
  alternates: alternatesFor('altCopilot', 'en'),
  openGraph: {
    title: 'EjectorSeat as an enterprise alternative to GitHub Copilot',
    description: 'Compare access governance, data handling, and visibility into coding-assistant consumption.',
    url: url('altCopilot', 'en'),
    siteName: 'Tivisoft', locale: 'en_US', type: 'website',
  },
};

const comparisonData = [
  { feature: 'Development client', copilot: 'GitHub extensions and tools', ejector: 'Proprietary plugin based on a modification of Continue for VS Code and Cursor' },
  { feature: 'Team access', copilot: 'Administration according to the plan contracted with GitHub', ejector: 'One EjectorSeat key per developer, managed by the company' },
  { feature: 'Inference', copilot: 'Options and conditions of the GitHub service', ejector: 'Specialized development model built into EjectorSeat' },
  { feature: 'Usage visibility', copilot: 'Reports available according to the GitHub plan', ejector: 'FinOps dashboard with consumption attributed to organization, project, and user' },
  { feature: 'Data handling', copilot: 'Review the conditions of the plan and the model used', ejector: 'DeepInfra states in its terms that it does not use customer data to train models' },
];

const faqs = [
  {
    question: 'Why consider an alternative to GitHub Copilot?',
    answer: 'Each company may require different controls over access, costs, and the handling of code and enterprise secrets. It may also need greater confidence in the security of its infrastructure. It is worth comparing the specific conditions of each service.',
  },
  {
    question: 'What is EjectorSeat?',
    answer: 'It is the Tivisoft enterprise solution based on a modification of Continue. It includes a proprietary plugin for VS Code and Cursor, an integrated model specialized in development, governance of developer access, and FinOps analysis of usage.',
  },
  {
    question: 'What does each developer need to configure?',
    answer: 'The company gives the developer an EjectorSeat API key, which they paste into the plugin panel. They do not need to enter a URL or provide a personal key from a model provider.',
  },
  {
    question: 'Are Anthropic or OpenAI models used?',
    answer: 'Not in the current EjectorSeat offering. Inference is provided with the specialized model integrated through DeepInfra; EjectorSeat does not broker connections with Anthropic or OpenAI.',
  },
  {
    question: 'How is the code sent for inference handled?',
    answer: 'DeepInfra states in its terms of service that it does not use its customer data to train, tune, or improve models. Inference requires processing the inputs and outputs, and its terms contemplate retention exceptions.',
  },
  {
    question: 'How much can my team save?',
    answer: 'EjectorSeat credits aim to offer more inference tokens per budget and the FinOps dashboard helps find optimization opportunities. Actual savings depend on the plan, usage, and the specific comparison; there is no universal percentage.',
  },
];

export default function GitHubCopilotAlternativePage() {
  const productSchema = {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'EjectorSeat', applicationCategory: 'DeveloperApplication',
    operatingSystem: 'VS Code and Cursor',
    description: 'Enterprise coding assistant based on a modification of Continue, with governed access and FinOps analysis.',
    provider: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('altCopilot', 'es')} />
      <JsonLd data={productSchema} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="en" items={[{ name: 'Alternative to GitHub Copilot', href: path('altCopilot', 'en') }]} />
        <section className="pt-4 pb-16">
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            An enterprise alternative to GitHub Copilot with access governance and FinOps
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-300">
            Teams evaluating alternatives want to control who accesses the assistant, understand its consumption, and review how code, secrets, and infrastructure are protected. EjectorSeat integrates a model specialized in development into a proprietary plugin for VS Code and Cursor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 font-semibold text-slate-950">
              Request a demo <ArrowRight className="h-4 w-4" />
            </a>
            <Link href={path('intContinue', 'en')} className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-200">Get to know the plugin</Link>
          </div>
        </section>
        <section className="py-12">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">What to compare before deciding</h2>
          <p className="mb-8 text-slate-400">Third-party conditions change by plan and date; confirm their current terms before purchasing.</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80">
            <table className="w-full min-w-[650px] text-left text-sm sm:text-base">
              <thead className="bg-slate-950/70 text-slate-300"><tr><th className="px-6 py-4">Dimension</th><th className="px-6 py-4">GitHub Copilot</th><th className="px-6 py-4 text-emerald-300">EjectorSeat</th></tr></thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonData.map((row) => <tr key={row.feature}><td className="px-6 py-4 font-medium text-white">{row.feature}</td><td className="px-6 py-4 text-slate-400">{row.copilot}</td><td className="px-6 py-4 text-emerald-300">{row.ejector}</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>
        <section className="grid gap-6 py-12 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><KeyRound className="mb-4 text-emerald-400" /><h2 className="text-xl font-bold">Managed access</h2><p className="mt-2 text-slate-300">Hand out and revoke keys per developer from the enterprise environment. To get started, each person pastes their key into the plugin.</p></article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><BarChart3 className="mb-4 text-emerald-400" /><h2 className="text-xl font-bold">Usage FinOps</h2><p className="mt-2 text-slate-300">Check consumption and costs by team, project, and user to optimize resources and guide training and feedback.</p></article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><ShieldCheck className="mb-4 text-emerald-400" /><h2 className="text-xl font-bold">Clear data conditions</h2><p className="mt-2 text-slate-300">The no-training policy corresponds to <a className="text-emerald-300 underline" href="https://deepinfra.com/terms">the DeepInfra terms</a>. Review its scope and exceptions for your requirements.</p></article>
        </section>
        <FaqSection lang="en" items={faqs} />
        <CtaBanner lang="en" title="Evaluate EjectorSeat with your team" subtitle="Get to know the plugin, the integrated model, and FinOps visibility with your security and budget requirements." primaryButtonText="Talk to a specialist" secondaryButtonText="See how it works" secondaryButtonHref={path('intContinue', 'en')} />
      </div>
      <Footer lang="en" />
    </main>
  );
}
