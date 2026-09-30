import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { JsonLd } from './JsonLd';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ name: 'Inicio', href: '/' }, ...items];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://tivisoft.com${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <nav aria-label="Migas de pan" className="mb-6 flex items-center text-xs text-slate-400">
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="inline-flex items-center gap-1.5 sm:gap-2">
                {index > 0 && <ChevronRight className="h-3 w-3 text-slate-600" />}
                {isLast ? (
                  <span className="font-medium text-emerald-400" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 transition hover:text-slate-200"
                  >
                    {index === 0 && <Home className="h-3 w-3" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
