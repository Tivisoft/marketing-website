import type { Metadata } from 'next';
import { Clock, Calendar, Terminal, Shield, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url, siteUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Claude Code and Continue: two approaches to assisting development',
  description:
    'Compare a third-party terminal agent with EjectorSeat, an enterprise solution based on Continue for VS Code and Cursor with an integrated development model and FinOps.',
  alternates: alternatesFor('blogGateway', 'en'),
  openGraph: {
    title: 'Claude Code and Continue: differences for software teams | Tivisoft',
    description:
      'A comparison between third-party tools and EjectorSeat, the enterprise solution based on Continue for VS Code and Cursor.',
    url: url('blogGateway', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'article',
  },
  keywords: ['Claude Code vs Continue', 'enterprise code assistant', 'Continue VS Code', 'Continue Cursor', 'EjectorSeat', 'FinOps development'],
};

const claudeVsContinueFaqs = [
  {
    question: 'Is EjectorSeat a competitor of or a provider for Claude Code?',
    answer:
      'No. Claude Code is a third-party tool and is not the model or integrated provider of EjectorSeat. EjectorSeat is an enterprise solution based on Continue, modified and offered as a plugin for VS Code and Cursor.',
  },
  {
    question: 'What is Continue and how is it used with EjectorSeat?',
    answer:
      'Continue is an open source code-assistant project, not an IDE. EjectorSeat starts from Continue and modifies it. The developer receives an API key, enters it in the VS Code or Cursor plugin, and uses the integrated model for software development.',
  },
  {
    question: 'Does EjectorSeat connect Anthropic or OpenAI accounts?',
    answer:
      'No. EjectorSeat includes its own model specialized in software development; it is not a BYOK solution for connecting the accounts or models of Anthropic, OpenAI, or other providers.',
  },
  {
    question: 'What does the FinOps layer offer?',
    answer:
      'EjectorSeat credits offer more inference tokens, and the FinOps layer helps optimize spend and analyze usage patterns to guide team training and feedback. Savings depend on usage and are not a promise of an absolute reduction.',
  },
  {
    question: 'Does EjectorSeat offer a VPC or guarantee that processing never connects to the internet?',
    answer:
      'EjectorSeat is not currently offered inside a customer VPC. The guarantee of not training on your data depends on the clauses of the provider DeepInfra. Tivisoft separately offers enterprise solutions to run assistants on the customer infrastructure without an internet connection.',
  },
];

export default function ClaudeCodeVsContinuePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: 'Claude Code and Continue: two approaches to assisting development',
        description: 'A comparison of a third-party terminal agent with EjectorSeat based on Continue for VS Code and Cursor.',
        datePublished: '2026-09-24T08:00:00+00:00',
        dateModified: '2026-10-09T00:00:00+00:00',
        author: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
        publisher: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
      },
      {
        '@type': 'FAQPage',
        mainEntity: claudeVsContinueFaqs.map(({ question, answer }) => ({
          '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('blogGateway', 'es')} />
      <JsonLd data={articleSchema} />
      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="en" items={[{ name: 'Blog', href: path('blog', 'en') }, { name: 'Claude Code and Continue', href: path('blogGateway', 'en') }]} />
        <header className="border-b border-slate-800 pt-4 pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300">AI architecture</span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />October 9, 2026</span><span>•</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />6 min read</span>
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">Claude Code and Continue: two approaches to assisting development</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">Teams can compare terminal agents and IDE plugins based on their workflow. EjectorSeat is an enterprise solution based on Continue, built for VS Code and Cursor.</p>
        </header>

        <div className="my-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Direct answer: How does EjectorSeat fit in?</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base"><strong>Continue is an open source project, not an IDE.</strong> EjectorSeat is an enterprise modification of Continue available as a plugin for VS Code and Cursor. The developer enters a provided API key in the plugin to access the integrated software-development model. Claude Code is a third-party tool and is not part of the models or providers included with EjectorSeat.</p>
        </div>

        <article className="prose prose-invert max-w-none space-y-8 text-base leading-relaxed text-slate-300 sm:text-lg">
          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Two ways to work with code assistants</h2>
            <p>Claude Code and Continue describe different experiences. Claude Code is a third-party tool oriented toward working from the terminal. Continue is an open source project that integrates assistance capabilities into compatible editors. EjectorSeat starts from Continue and develops its own enterprise experience for VS Code and Cursor.</p>
            <div className="my-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="mb-3 flex items-center gap-2 font-bold text-purple-400"><Terminal className="h-5 w-5" />Third-party terminal agents</div>
                <p className="text-sm text-slate-300">Tools like Claude Code are used from the console and can work with the commands and files of a project according to their capabilities and permissions.</p>
                <p className="mt-4 border-t border-slate-800 pt-3 text-xs text-slate-400"><strong>When evaluating:</strong> review the access controls, data handling, and costs of that tool&apos;s provider.</p>
              </div>
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-6">
                <div className="mb-3 flex items-center gap-2 font-bold text-emerald-400"><Layers className="h-5 w-5" />EjectorSeat based on Continue</div>
                <p className="text-sm text-slate-300">EjectorSeat&apos;s enterprise plugin for VS Code and Cursor, based on a modified version of Continue and with an integrated model for software development.</p>
                <p className="mt-4 border-t border-slate-800 pt-3 text-xs text-emerald-300/80"><strong>Access:</strong> the developer enters the API key in the plugin.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Why teams explore alternatives</h2>
            <p>When looking for alternatives to assistants like GitHub Copilot, teams may be seeking greater security assurance: both for their infrastructure and for the protection of their corporate secrets. It is worth comparing the actual data flow, the contractual guarantees, and the controls available for each product, without assuming that they all offer the same architecture.</p>
            <p>In EjectorSeat, the guarantee of not training the model on your data is the one set out in the clauses of the provider DeepInfra. EjectorSeat is not currently offered as a deployment in the customer VPC. Tivisoft also offers separate enterprise solutions to run code assistants on your own infrastructure, with processing that does not connect to the internet.</p>
          </section>

          <section>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white">Spend control and team support</h2>
            <p>EjectorSeat credits offer more inference tokens. The FinOps layer helps optimize resource spend and analyze staff usage behavior, information that can help plan training and provide feedback.</p>
            <div className="my-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">What to review in an evaluation</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" /><span>Which model and provider the product includes and what API key the developer requires.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" /><span>What data each service processes and what contractual commitments apply.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" /><span>How tokens and spend are measured, and how FinOps analysis is used to support the team.</span></li>
              </ul>
            </div>
          </section>
        </article>
        <FaqSection lang="en" items={claudeVsContinueFaqs} />
        <CtaBanner lang="en" title="Discover EjectorSeat for your team" subtitle="Review the plugin for VS Code and Cursor, the integrated development model, and the FinOps layer." primaryButtonText="Talk to Tivisoft" secondaryButtonText="See Continue integration" secondaryButtonHref={path('intContinue', 'en')} />
      </div>
      <Footer lang="en" />
    </main>
  );
}
