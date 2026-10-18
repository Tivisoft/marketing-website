import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Tag, Sparkles, Shield, DollarSign, Terminal, Layers, Search } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { path, url, alternatesFor, siteUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Artificial intelligence blog for software engineering and AEO',
  description:
    'Articles on AEO (Answer Engine Optimization), FinOps for AI, data handling and comparisons of coding assistants.',
  alternates: alternatesFor('blog', 'en'),
  openGraph: {
    title: 'AI Blog for Software Engineering and Businesses | Tivisoft',
    description:
      'Learn why your company needs AEO, how to analyze token consumption and how to select coding assistants for your team.',
    url: url('blog', 'en'),
    siteName: 'Tivisoft',
    locale: 'en_US',
    type: 'website',
  },
};

const blogPosts = [
  {
    route: 'serviceAeo' as const,
    href: path('serviceAeo', 'en'),
    title: 'Why Does Your Company Need AEO? Before You Needed SEO, Now You Also Need AEO',
    description:
      'We explain what AEO (Answer Engine Optimization) is, why appearing in AI agent searches is critical given the projected shift of the web, and how to take the lead now.',
    category: 'AEO & AI Agents',
    readTime: '5 min',
    date: '2026-10-18',
    featured: true,
    icon: Search,
  },
  {
    route: 'blogCost' as const,
    href: path('blogCost', 'en'),
    title: 'The real cost of an AI coding assistant',
    description:
      'We analyze how to measure the cost of coding assistants and use FinOps to identify optimization opportunities.',
    category: 'FinOps & Costs',
    readTime: '6 min',
    date: '2026-09-24',
    featured: false,
    icon: DollarSign,
  },
  {
    route: 'blogCompare' as const,
    href: path('blogCompare', 'en'),
    title: 'GitHub Copilot vs. Claude Code vs. Cursor: A guide for engineering leaders',
    description:
      'A comparison of extensions, editors and terminal agents: access governance, data handling and costs.',
    category: 'Comparisons',
    readTime: '8 min',
    date: '2026-09-24',
    featured: false,
    icon: Layers,
  },
  {
    route: 'blogGateway' as const,
    href: path('blogGateway', 'en'),
    title: 'Claude Code and Continue: two approaches to assisting development',
    description:
      'Differences between a terminal agent and an editor-integrated assistant, with enterprise governance criteria.',
    category: 'Architecture',
    readTime: '7 min',
    date: '2026-09-24',
    featured: false,
    icon: Terminal,
  },
  {
    route: 'blogTraining' as const,
    href: path('blogTraining', 'en'),
    title: 'What does it really mean that AI does not train on your code? A guide for CISOs',
    description:
      "How to read the provider's no-training and retention clauses before sending code to inference.",
    category: 'Security and data',
    readTime: '5 min',
    date: '2026-09-24',
    featured: false,
    icon: Shield,
  },
  {
    route: 'blogGovernance' as const,
    href: path('blogGovernance', 'en'),
    title: 'AI agent governance in software development: Speed without losing control',
    description:
      'Practical criteria for VPs of Engineering and CTOs: access, consumption visibility and team training.',
    category: 'Governance',
    readTime: '7 min',
    date: '2026-09-24',
    featured: false,
    icon: BookOpen,
  },
];

export default function BlogHubPage() {
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Tivisoft & EjectorSeat Technical Blog',
    description:
      'Posts on AI-assisted software engineering, FinOps, privacy and model architecture.',
    url: url('blog', 'en'),
    publisher: {
      '@type': 'Organization',
      name: 'Tivisoft',
      url: siteUrl,
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: url(post.route, 'en'),
      datePublished: post.date,
      dateModified: '2026-10-09',
    })),
  };

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p.route !== featuredPost.route);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar lang="en" switchPath={path('blog', 'es')} />
      <JsonLd data={blogListSchema} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs lang="en" items={[{ name: 'Blog', href: path('blog', 'en') }]} />

        {/* Hero */}
        <section className="pt-4 pb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            Research and Engineering Practices
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Blog: AI applied to software engineering
          </h1>
          <p className="mt-4 max-w-3xl text-slate-400 text-base sm:text-lg">
            Guides to evaluate coding assistants, data handling terms and inference costs.
          </p>
        </section>

        {/* Featured Post */}
        <section className="mb-14">
          <article className="group relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-8 shadow-glow sm:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 font-semibold text-emerald-300">
                Featured Article
              </span>
              <span>{featuredPost.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {featuredPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl group-hover:text-emerald-300 transition">
              <Link href={featuredPost.href}>{featuredPost.title}</Link>
            </h2>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              {featuredPost.description}
            </p>

            <div className="mt-6 flex items-center">
              <Link
                href={featuredPost.href}
                className="inline-flex items-center gap-2 font-semibold text-emerald-400 transition group-hover:translate-x-1"
              >
                Read the full article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </section>

        {/* Regular Posts Grid */}
        <section className="py-6">
          <h2 className="text-2xl font-bold text-white mb-8">All technical articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regularPosts.map((post) => {
              const Icon = post.icon;
              return (
                <article
                  key={post.route}
                  className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 transition duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 font-medium text-slate-300">
                        <Icon className="h-3.5 w-3.5 text-emerald-400" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white transition hover:text-emerald-300">
                      <Link href={post.href}>{post.title}</Link>
                    </h3>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.date}</span>
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 transition hover:translate-x-0.5"
                    >
                      Read more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <Footer lang="en" />
    </main>
  );
}
