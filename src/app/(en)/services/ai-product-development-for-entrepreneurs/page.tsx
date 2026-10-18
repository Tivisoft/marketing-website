import type { Metadata } from 'next';
import {
  ArrowRight,
  Rocket,
  Sparkles,
  Code2,
  Cpu,
  TrendingUp,
  CheckCircle2,
  Smartphone,
  Globe,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { JsonLd } from '@/components/JsonLd';
import { path, alternatesFor, url } from '@/i18n/config';

const WHATSAPP_ENTREPRENEURS_EN =
  'https://wa.me/573102134709?text=Hi%20Tivisoft%2C%20I%20am%20an%20entrepreneur%20and%20want%20to%20seize%20the%20AI%20wave%20to%20build%20my%20product.';

export const metadata: Metadata = {
  title: 'AI Product Development for Entrepreneurs | Seize the AI Wave',
  description:
    'Missed the .com web wave or the mobile app wave decades ago? We are living the AI wave right now. Tivisoft has the experts to build your product and take it to the next level.',
  alternates: alternatesFor('serviceEntrepreneurs', 'en'),
  openGraph: {
    title: 'Seize the AI Wave | AI Product Development for Entrepreneurs | Tivisoft',
    description:
      'If you missed previous tech waves, this one is yours to seize. Our expert team develops your AI product and helps you reach the next level.',
    url: url('serviceEntrepreneurs', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    'AI product development for entrepreneurs',
    'build an AI startup',
    'startup software development',
    'AI MVP development',
    'AI engineering partner for founders',
    'Tivisoft entrepreneurs',
  ],
};

const entrepreneurFaqs = [
  {
    question: 'I have an AI product idea—do I need a technical background to work with Tivisoft?',
    answer:
      'No. Our team of experts handles the entire technical architecture, product engineering, Artificial Intelligence integration, and cloud deployment—guiding you step by step to turn your business vision into a real, market-ready product.',
  },
  {
    question: 'How does Tivisoft help take my product to the next level?',
    answer:
      'We do not build fragile throwaway prototypes. We architect and develop scalable, secure software with standout user experience and real AI capabilities so you can validate your market, win paying customers, and pitch investors with confidence.',
  },
  {
    question: 'What types of AI products can you develop for my venture?',
    answer:
      'We build AI-powered SaaS platforms, intelligent web and mobile applications, specialized industry AI agents, smart workflow automations, and custom digital products tailored to your business model.',
  },
  {
    question: 'How do we get started on my project?',
    answer:
      'Contact us directly via WhatsApp. We will schedule a session with our experts to hear your vision or learn about your current business, evaluate technical feasibility, and outline a clear roadmap to build and scale your product.',
  },
];

export default function ServiceEntrepreneursPageEN() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Product Development Services for Entrepreneurs',
    description:
      'Expert software and AI engineering team at Tivisoft helping entrepreneurs build their products and reach the next level in the AI wave.',
    provider: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: 'https://tivisoft.com',
    },
    areaServed: 'Worldwide',
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('serviceEntrepreneurs', 'es')} />
      <JsonLd data={schemaData} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          lang="en"
          items={[
            {
              name: 'AI for Entrepreneurs',
              href: path('serviceEntrepreneurs', 'en'),
            },
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 pt-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-300">
            <Rocket className="h-4 w-4" />
            Tivisoft for Entrepreneurs · AI Product Development
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Are Living the AI Wave. Don&apos;t Let It Pass You By Like the Previous Ones.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            If you didn&apos;t catch the <strong>.com web boom</strong> decades ago, or the <strong>mobile App wave</strong> years later, today you are standing in front of the biggest technological opportunity of our lifetime. At <strong>Tivisoft</strong>, we have the experts capable of developing your products and helping you reach the next level.
          </p>

          <div className="mt-8 max-w-4xl rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-6 shadow-glow">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Your Technical Partner in the AI Revolution
            </p>
            <p className="mt-2 text-base leading-relaxed text-slate-200 sm:text-lg">
              The category leaders of the next decade are being built right now. The difference between sitting on a great idea and leading your market comes down to execution: partnering with an expert engineering team that turns your vision into a rock-solid, scalable product.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_ENTREPRENEURS_EN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-8 py-4 text-base font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Contact Us &amp; Take Your Product to the Next Level
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#tech-waves"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-7 py-4 text-base font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
            >
              Why Now Is Your Moment
            </a>
          </div>
        </section>

        {/* Timeline of Tech Waves */}
        <section id="tech-waves" className="py-10">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              History in Motion
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
              Three waves that reshaped business—this one is yours to seize
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Every major technological shift opens a once-in-a-generation window for entrepreneurs who decide to build early:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                <Globe className="h-3.5 w-3.5" />
                1st Wave · Decades Ago
              </div>
              <h3 className="text-xl font-bold text-white">The .com Web Era</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Pioneers who brought businesses online at the dawn of the internet built brands that dominated their markets for twenty years.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                <Smartphone className="h-3.5 w-3.5" />
                2nd Wave · The Mobile Decade
              </div>
              <h3 className="text-xl font-bold text-white">The Mobile App Boom</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                With the rise of smartphones, founders who launched mobile apps solved everyday problems and created entire new industries.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-7 shadow-glow">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                3rd Wave · Right Now
              </div>
              <h3 className="text-xl font-bold text-white">The Artificial Intelligence Wave</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                AI is transforming every industry simultaneously. If you missed the previous waves, <strong>this is the opportunity you must seize today</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* How Tivisoft Helps Entrepreneurs */}
        <section className="my-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-12">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Experts by Your Side
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
              How Tivisoft Takes Your Product to the Next Level
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              We have an experienced team of software and applied Artificial Intelligence specialists ready to turn your idea or business into a high-impact technology product:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <Code2 className="h-7 w-7 text-emerald-400" />
              <h3 className="mt-4 text-lg font-bold text-white">
                From Vision to a Real, Working Product
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                We refine your concept, design the right technical architecture, and build your product so you can launch fast on a solid foundation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <Cpu className="h-7 w-7 text-blue-400" />
              <h3 className="mt-4 text-lg font-bold text-white">
                Expert AI &amp; Agent Integration
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                We embed language models, intelligent assistants, and smart workflows that deliver real value to your users and set your product apart.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <TrendingUp className="h-7 w-7 text-emerald-400" />
              <h3 className="mt-4 text-lg font-bold text-white">
                Engineered for the Next Level
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                We build with enterprise-grade quality, security, and performance so your platform scales smoothly with your customers and investors.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Ready to build your product in the AI era?
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Direct collaboration with experts in AI and product engineering.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Built for both new startup founders and established entrepreneurs.</span>
                </li>
              </ul>
            </div>

            <a
              href={WHATSAPP_ENTREPRENEURS_EN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Talk to Our Experts
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <FaqSection lang="en" items={entrepreneurFaqs} />

        <CtaBanner
          lang="en"
          title="Seize the AI wave today"
          subtitle="If you missed the .com boom or the mobile app wave, do not let this one pass you by. Contact us and let our experts build the product that takes your venture to the next level."
          primaryButtonText="Contact Tivisoft"
          primaryButtonHref={WHATSAPP_ENTREPRENEURS_EN}
          secondaryButtonText="See AEO Services for Companies"
          secondaryButtonHref={path('serviceAeo', 'en')}
        />
      </div>

      <Footer lang="en" />
    </main>
  );
}
