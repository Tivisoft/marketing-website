import type { Metadata } from 'next';
import {
  ArrowRight,
  Bot,
  Search,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Globe,
  Layers,
  Clock,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url } from '@/i18n/config';

const WHATSAPP_AEO_EN =
  'https://wa.me/573102134709?text=Hi%20Tivisoft%2C%20I%20want%20my%20company%20to%20take%20the%20lead%20with%20your%20AEO%20service.';

export const metadata: Metadata = {
  title: 'Why Does Your Company Need AEO? Before You Needed SEO, Now You Also Need AEO',
  description:
    'Before you needed SEO, now you also need AEO (Answer Engine Optimization). Learn why appearing in AI agent searches is critical for the future of your business.',
  alternates: alternatesFor('serviceAeo', 'en'),
  openGraph: {
    title: 'Why Does Your Company Need AEO? | Tivisoft',
    description:
      'Before you needed SEO, now you also need AEO. Position your business in AI agent searches and take the lead while the window is open.',
    url: url('serviceAeo', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    'what is AEO',
    'Answer Engine Optimization',
    'why your business needs AEO',
    'AI agent search positioning',
    'ChatGPT and Perplexity search',
    'AEO services',
    'Tivisoft AEO',
  ],
};

const aeoFaqs = [
  {
    question: 'What does AEO stand for and how does it differ from traditional SEO?',
    answer:
      'AEO stands for Answer Engine Optimization. While traditional SEO focuses on ranking web links in a search results list to win clicks, AEO structures your digital presence and authority so AI agents and language models (such as ChatGPT, Perplexity, Claude, or Gemini) understand your offering and directly recommend your company when buyers ask for a solution.',
  },
  {
    question: 'Does AEO replace SEO, or do they work together?',
    answer:
      'They work hand in hand: before you needed SEO, now you also need AEO. Strong crawlability and indexing remain essential, but AI agents also require semantic clarity, structured entity data, and verifiable answers in order to cite your business as a trusted answer.',
  },
  {
    question: 'Why is it urgent to implement AEO right now?',
    answer:
      'Because buyer discovery is rapidly moving toward conversational AI agents. Traditional search displays ten links on page one, whereas an AI agent typically recommends only one to three trusted companies. Businesses that prepare for AI agent searches today will lock in an early advantage before competitors catch up.',
  },
  {
    question: 'How does Tivisoft help my company with AEO?',
    answer:
      'At Tivisoft, we have extensive hands-on experience in this work. We evaluate how AI agents currently interpret your brand, implement the technical and semantic architecture required by answer engines, optimize AI crawler access, and structure high-authority content so agents understand and recommend your business.',
  },
];

export default function ServiceAeoPageEN() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AEO (Answer Engine Optimization) Services for Businesses',
    description:
      'Before you needed SEO, now you also need AEO. Specialized engineering and content strategy to position companies inside AI agent searches and answer engines.',
    provider: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: 'https://tivisoft.com',
    },
    areaServed: 'Worldwide',
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('serviceAeo', 'es')} />
      <JsonLd data={schemaData} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          lang="en"
          items={[{ name: 'Why Your Company Needs AEO', href: path('serviceAeo', 'en') }]}
        />

        {/* Hero Section */}
        <section className="pb-16 pt-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-300">
            <Sparkles className="h-4 w-4" />
            Before you needed SEO, now you also need AEO
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Why Does Your Company Need AEO?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            The web is undergoing its biggest transformation in twenty years. Buyers no longer rely solely on scrolling through traditional link lists—they now ask <strong>Artificial Intelligence agents</strong> directly which company to hire. If your business is not built for AI agent searches, you are handing your market to the competition.
          </p>

          <div className="mt-8 max-w-4xl rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-6 shadow-glow">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              The new paradigm of online discovery
            </p>
            <p className="mt-2 text-lg font-bold text-white sm:text-xl">
              &ldquo;Before you needed SEO, now you also need AEO.&rdquo;
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
              <strong>AEO (Answer Engine Optimization)</strong> is the technical and editorial discipline that enables answer engines and AI agents—such as ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews—to understand what your company does, trust your authority, and recommend you directly when high-intent prospects search for your services.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_AEO_EN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-8 py-4 text-base font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Contact Us &amp; Take the Lead
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#why-aeo-matters"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-7 py-4 text-base font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
            >
              See How AEO Works
            </a>
          </div>
        </section>

        {/* Comparison: SEO vs AEO */}
        <section id="why-aeo-matters" className="py-10">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              The Projected Shift of the Web
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
              Why appearing in AI agent searches defines the future of your business
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Every month, millions of buyers and decision-makers replace fragmented keyword searches with full conversational prompts to AI agents. Here is how your customer journey is changing:
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                <Search className="h-3.5 w-3.5 text-slate-400" />
                Yesterday: Traditional Search (SEO Only)
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Users typed keywords and opened 10 browser tabs
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-500 flex-shrink-0" />
                  <span>Buyers typed short phrases and manually compared websites one by one.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-500 flex-shrink-0" />
                  <span>Ranking anywhere in the top 10 blue links still delivered steady traffic.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-500 flex-shrink-0" />
                  <span>Matching keywords and generic backlinks was often enough to compete.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-7 sm:p-9 shadow-glow">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                <Bot className="h-3.5 w-3.5 text-emerald-300" />
                Today &amp; Tomorrow: The Agentic Web (SEO + AEO)
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                AI agents research for the buyer and recommend the winners
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-200 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    The buyer asks: <em>&ldquo;Which company do you recommend to solve this problem and why?&rdquo;</em>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    The agent synthesizes the web in seconds and cites only <strong>1 to 3 trusted providers</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    With AEO in place, the agent clearly understands your value proposition and recommends your company directly.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Three Pillars of Why Now */}
        <section className="grid gap-6 py-10 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <TrendingUp className="h-7 w-7 text-emerald-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Exponential rise of AI search</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Queries inside AI assistants and answer engines are compounding every month. Preparing your digital footprint today ensures AI models learn and cite your brand as an industry leader.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/80 p-7">
            <Layers className="h-7 w-7 text-blue-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Machine-readable authority</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              AI agents rely on structured data, unambiguous entity definitions, clean technical architecture, and high-clarity content that directly answers buyer questions.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <Clock className="h-7 w-7 text-emerald-400" />
            <h2 className="mt-5 text-xl font-bold text-white">Take the lead while you can</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Most companies still haven&apos;t adapted to AEO. Acting now during this early window allows your business to establish authority long before your competitors react.
            </p>
          </div>
        </section>

        {/* Tivisoft Experience Section */}
        <section className="my-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
                <Globe className="h-3.5 w-3.5" />
                Proven AI &amp; Engineering Experience
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Extensive Experience Executing AEO at Tivisoft
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                AEO cannot be solved with superficial tricks—it requires deep technical understanding of how large language models and autonomous agents crawl, interpret, and validate information across the web.
              </p>
              <p className="mt-3 leading-relaxed text-slate-300">
                At <strong>Tivisoft</strong>, we have extensive experience in this work. We partner with your company from diagnosing your current visibility across AI agents to executing the technical and editorial strategy needed so your business stands out when customers ask AI for solutions in your industry.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                First-Mover Advantage
              </p>
              <p className="mt-3 text-xl font-bold text-white">
                Make AI agents recommend your company
              </p>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Speak directly with our team to evaluate your company&apos;s current visibility and launch your AEO strategy.
              </p>
              <a
                href={WHATSAPP_AEO_EN}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
              >
                Contact Tivisoft Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <FaqSection lang="en" items={aeoFaqs} />

        <CtaBanner
          lang="en"
          title="Take the lead with AEO—while the window is open"
          subtitle="Before you needed SEO, now you also need AEO. Contact us today and leverage our experience to position your company in AI agent searches."
          primaryButtonText="Talk to Our AEO Experts"
          primaryButtonHref={WHATSAPP_AEO_EN}
          secondaryButtonText="Explore Enterprise Solutions"
          secondaryButtonHref={path('home', 'en')}
        />
      </div>

      <Footer lang="en" />
    </main>
  );
}
