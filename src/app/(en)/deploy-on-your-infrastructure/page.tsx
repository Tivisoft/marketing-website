import type { Metadata } from 'next';
import { Server, Shield, ArrowRight, Cloud, Network } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url, siteUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Infrastructure options for coding assistants',
  description:
    'EjectorSeat is a plugin for VS Code and Cursor that uses an integrated model. Learn about the Tivisoft enterprise offering for your own infrastructure as well.',
  alternates: alternatesFor('deployment', 'en'),
  openGraph: {
    title: 'Infrastructure for coding assistants | Tivisoft',
    description:
      'Learn the current scope of EjectorSeat and talk to Tivisoft about enterprise solutions on your own infrastructure.',
    url: url('deployment', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'website',
  },
  keywords: ['coding assistants', 'self-hosted AI infrastructure', 'EjectorSeat', 'Tivisoft'],
};

const deploymentFaqs = [
  {
    question: 'Does EjectorSeat deploy into the customer VPC today?',
    answer:
      'No. EjectorSeat currently does not offer a deployment in the customer VPC or an air-gapped mode. It is used as a plugin for VS Code and Cursor and connects to the integrated model service.',
  },
  {
    question: 'Does Tivisoft offer solutions on your own infrastructure?',
    answer:
      'Tivisoft also offers enterprise solutions to run coding assistants on your own infrastructure, with processing that does not connect to the internet. This offering is different from EjectorSeat. The scope and technical feasibility are discussed according to the requirements of each organization.',
  },
  {
    question: 'Which AI provider does EjectorSeat use?',
    answer:
      'EjectorSeat uses the special software-development model built into the product, served by DeepInfra. It currently does not use Anthropic or OpenAI models.',
  },
];

export default function DeployOnYourInfrastructurePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Infrastructure options for coding assistants',
    description:
      'Current scope of EjectorSeat and the Tivisoft enterprise offering on your own infrastructure.',
    author: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Tivisoft', url: siteUrl },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('deployment', 'es')} />
      <JsonLd data={schemaData} />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="en" items={[{ name: 'Infrastructure', href: path('deployment', 'en') }]} />
        <section className="pt-4 pb-16 text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
            <Server className="h-4 w-4" />
            Product scope and enterprise solutions
          </div>
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Coding assistants for your organization&apos;s needs.
          </h1>
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">EjectorSeat today</p>
            <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
              <strong>EjectorSeat</strong> is an enterprise plugin for VS Code and Cursor that integrates a development model served by DeepInfra. It currently does not offer deployment in the customer VPC or operation without an internet connection. Tivisoft also offers enterprise solutions for your own infrastructure; they are a separate offering and their scope is defined per project.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-[1.02]">
              Talk to Tivisoft <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Two needs, two scopes</h2>
            <p className="mt-2 text-slate-400">The product offering and the self-hosted infrastructure offering are different.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/40 bg-slate-900/80 p-8">
              <div className="flex items-center gap-3 text-emerald-300"><Cloud className="h-6 w-6" /><span className="font-semibold">EjectorSeat product</span></div>
              <h3 className="mt-4 text-2xl font-bold text-white">Plugin for VS Code and Cursor</h3>
              <p className="mt-3 text-slate-300">The developer enters an API key in the plugin and accesses the integrated software model. The current product does not include customer VPC, air-gap, or DLP scanning of secrets.</p>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8">
              <div className="flex items-center gap-3 text-blue-300"><Network className="h-6 w-6" /><span className="font-semibold">Tivisoft enterprise offering</span></div>
              <h3 className="mt-4 text-2xl font-bold text-white">Assistants on your own infrastructure</h3>
              <p className="mt-3 text-slate-300">Tivisoft offers enterprise solutions to run coding assistants on your own infrastructure and without an internet connection. This solution is independent of EjectorSeat; talk to the team to define scope and feasibility for your environment.</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12">
            <div className="flex items-center gap-3 text-emerald-300"><Shield className="h-6 w-6" /><h2 className="text-2xl font-bold text-white">Assess your requirements</h2></div>
            <p className="mt-4 max-w-3xl text-slate-300">If your organization needs to keep processing within its own infrastructure or without an internet connection, talk to Tivisoft about that enterprise offering. If you are looking for a plugin for VS Code or Cursor with managed access and FinOps analysis, get to know EjectorSeat.</p>
            <a href="https://wa.me/573102134709" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-emerald-400/50">Talk with Tivisoft <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>

        <FaqSection lang="en" items={deploymentFaqs} />
        <CtaBanner lang="en" title="Find the right scope for your team" subtitle="Tell us your requirements for control, infrastructure, and use of coding assistants." primaryButtonText="Talk to Tivisoft" secondaryButtonText="See security and data handling" secondaryButtonHref={path('security', 'en')} />
      </div>
      <Footer lang="en" />
    </main>
  );
}
