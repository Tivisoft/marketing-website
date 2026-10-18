import type { Metadata } from 'next';
import { Clock, Calendar, CheckCircle2, Shield, Terminal, Cpu, Layers } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url, siteUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'GitHub Copilot, Claude Code and Cursor: a guide for teams',
  description:
    'Compare coding assistants for teams and discover EjectorSeat, an enterprise solution based on Continue for VS Code and Cursor, with an integrated model and FinOps analysis.',
  alternates: alternatesFor('blogCompare', 'en'),
  openGraph: {
    title: 'Copilot, Claude Code and Cursor: a guide for teams | Tivisoft',
    description:
      'Criteria to evaluate coding assistants, security and costs, along with EjectorSeat based on Continue.',
    url: url('blogCompare', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'article',
  },
  keywords: ['GitHub Copilot alternative', 'Copilot vs Cursor', 'Claude Code for teams', 'enterprise coding assistants', 'EjectorSeat', 'Continue VS Code Cursor'],
};

const guideFaqs = [
  {
    question: 'Why do companies look for alternatives to GitHub Copilot?',
    answer:
      "Some look for more reliability and security control for their infrastructure and enterprise secrets, as well as a better understanding of usage and costs. The evaluation should compare each provider's concrete guarantees and controls.",
  },
  {
    question: 'What is EjectorSeat compared to Copilot, Claude Code and Cursor?',
    answer:
      "EjectorSeat is an enterprise solution based on a modified version of Continue, distributed as a plugin for VS Code and Cursor. It includes a model specialized in software development. Copilot, Claude Code and Cursor are third-party products to compare; they are not EjectorSeat's integrated models or providers.",
  },
  {
    question: 'Does EjectorSeat allow choosing any provider or using BYOK?',
    answer:
      'No. It uses the integrated software development model. The developer receives an access API key and enters it in the plugin; they do not connect their own Anthropic or OpenAI account.',
  },
  {
    question: 'What data protection does EjectorSeat offer?',
    answer:
      "The guarantee of not training on your data is the one established by DeepInfra's provider clauses. EjectorSeat is not currently offered as a solution in the customer's VPC. Tivisoft separately has enterprise solutions to process coding assistants on your own infrastructure without an internet connection.",
  },
  {
    question: 'How can you save with EjectorSeat?',
    answer:
      'Credits offer more inference tokens and the FinOps layer helps optimize resource spend. Usage analysis can also guide staff training and feedback; the result depends on consumption patterns.',
  },
];

export default function CopilotVsCursorVsClaudeCodePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: 'GitHub Copilot, Claude Code and Cursor: a guide for teams',
        description: 'Evaluation criteria for coding assistants and a description of EjectorSeat based on Continue.',
        datePublished: '2026-09-24T08:00:00+00:00',
        dateModified: '2026-10-09T00:00:00+00:00',
        author: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
        publisher: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
      },
      {
        '@type': 'FAQPage',
        mainEntity: guideFaqs.map(({ question, answer }) => ({
          '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('blogCompare', 'es')} />
      <JsonLd data={articleSchema} />
      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="en" items={[{ name: 'Blog', href: path('blog', 'en') }, { name: 'Coding assistants for teams', href: path('blogCompare', 'en') }]} />
        <header className="mb-8 border-b border-slate-800 pt-4 pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-semibold text-blue-300">Comparisons</span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />October 9, 2026</span><span>•</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />7 min read</span>
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">GitHub Copilot, Claude Code and Cursor: a guide for software teams</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">Choosing coding assistants also involves evaluating security, data handling and cost. This guide presents comparison criteria and explains where EjectorSeat fits.</p>
        </header>

        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Direct answer: What does EjectorSeat offer?</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base"><strong>EjectorSeat is an enterprise solution based on Continue, an open source project, with its own modifications and a plugin for VS Code and Cursor.</strong> The developer receives an API key and enters it in the plugin to use the integrated software development model. The FinOps layer helps optimize spend and analyze usage patterns.</p>
        </div>

        <article className="prose prose-invert max-w-none space-y-8 text-base leading-relaxed text-slate-300 sm:text-lg">
          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">What to compare between assistants</h2>
            <p>GitHub Copilot, Claude Code and Cursor are third-party products with their own experiences and terms. Their features, compatibility, pricing and data commitments can change; verify the provider&apos;s current offering before deciding. In an enterprise evaluation, consider at least these criteria:</p>
            <div className="my-6 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><Terminal className="mb-3 h-5 w-5 text-blue-400" /><h3 className="text-lg font-bold text-white">Workflow</h3><p className="mt-2 text-sm text-slate-300">Editor, terminal, covered tasks and team experience.</p></div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><Shield className="mb-3 h-5 w-5 text-emerald-400" /><h3 className="text-lg font-bold text-white">Security and data</h3><p className="mt-2 text-sm text-slate-300">Access controls, data handling, enterprise secrets and contractual commitments.</p></div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"><Cpu className="mb-3 h-5 w-5 text-purple-400" /><h3 className="text-lg font-bold text-white">Cost and usage</h3><p className="mt-2 text-sm text-slate-300">Billing model, limits, observed consumption and tools to manage spend.</p></div>
            </div>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Why look for alternatives to GitHub Copilot</h2>
            <p>Organizations may look for alternatives that give them greater reliability regarding the security of their infrastructure and the protection of their enterprise secrets. They may also want more clarity about spend, technical staff access or how to support adoption. These requirements should be contrasted with each solution&apos;s concrete terms.</p>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">EjectorSeat: Continue modified for enterprise use</h2>
            <p>Continue is an open source coding assistant project, not an IDE. EjectorSeat builds on Continue, incorporates enterprise modifications and is distributed as a plugin for VS Code and Cursor. The product includes a model specialized in software development; it does not offer BYOK nor connect the user to models from Anthropic, OpenAI or providers chosen by the customer.</p>
            <div className="my-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-white"><Layers className="h-5 w-5 text-emerald-400" />Developer access</h3>
              <ol className="list-decimal space-y-2 pl-6 text-sm text-slate-300">
                <li>The team provides an API key to the developer.</li>
                <li>The developer enters it in the EjectorSeat plugin.</li>
                <li>The assistant uses the integrated model for software development.</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Data guarantees and infrastructure options</h2>
            <p>The guarantee of not training on your data corresponds to DeepInfra&apos;s provider clauses. EjectorSeat is not currently a service deployed in the customer&apos;s VPC. Tivisoft also offers separate enterprise solutions to operate coding assistants on your own infrastructure, with processing that does not connect to the internet.</p>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Tokens and FinOps analysis</h2>
            <p>EjectorSeat&apos;s credits offer more inference tokens. Its FinOps layer helps optimize resource spend and analyze staff usage patterns; those findings can help plan training and provide feedback. The economic outcome depends on consumption and on how the organization uses the analysis.</p>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-sm text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" /><p>To compare products, separately validate compatibility, contractual guarantees, processing location, pricing terms and usage metrics.</p></div>
          </section>
        </article>
        <FaqSection lang="en" items={guideFaqs} />
        <CtaBanner lang="en" title="Discover EjectorSeat for your team" subtitle="Evaluate the plugin for VS Code and Cursor, the integrated model and the FinOps tools." primaryButtonText="Talk to Tivisoft" secondaryButtonText="View Continue integration" secondaryButtonHref={path('intContinue', 'en')} />
      </div>
      <Footer lang="en" />
    </main>
  );
}
