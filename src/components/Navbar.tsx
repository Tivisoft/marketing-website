'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import logoDark from '@/media/LOGO TIVISOFT FONDO OSCURO.png';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Desktop Logo */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/"
            className="flex h-10 items-center justify-center overflow-hidden rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 p-2 shadow-[0_0_18px_rgba(16,185,129,0.2)]"
          >
            <Image
              src={logoDark}
              alt="Tivisoft logo"
              width={180}
              height={36}
              priority
              className="h-7 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Mobile Logo */}
        <div className="flex items-center justify-center lg:hidden">
          <Link
            href="/"
            className="flex h-11 items-center justify-center overflow-hidden rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 px-3 shadow-[0_0_18px_rgba(16,185,129,0.2)]"
          >
            <Image
              src={logoDark}
              alt="Tivisoft logo"
              width={120}
              height={28}
              priority
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-200 lg:flex">
          <Link href="/" className="transition hover:text-emerald-300">
            Inicio
          </Link>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 transition hover:text-emerald-300 py-1"
            >
              <span>EjectorSeat</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-emerald-300" />
            </button>
            <div className="absolute left-0 top-full hidden w-64 pt-2 group-hover:block z-50">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl">
                <Link
                  href="/integraciones/continue"
                  className="block rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-emerald-300"
                >
                  <p className="font-semibold text-white">EjectorSeat y Continue</p>
                  <p className="text-slate-400 text-[11px]">Plugin para VS Code y Cursor</p>
                </Link>
                <Link
                  href="/alternativas/github-copilot"
                  className="block rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-emerald-300"
                >
                  <p className="font-semibold text-white">Alternativa a Copilot</p>
                  <p className="text-slate-400 text-[11px]">Acceso administrado y FinOps</p>
                </Link>
                <Link
                  href="/alternativas/cursor"
                  className="block rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-emerald-300"
                >
                  <p className="font-semibold text-white">Alternativa a Cursor</p>
                  <p className="text-slate-400 text-[11px]">Usa el plugin en VS Code o Cursor</p>
                </Link>
                <Link
                  href="/seguridad-y-custodia"
                  className="block rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-emerald-300"
                >
                  <p className="font-semibold text-white">Seguridad y datos</p>
                  <p className="text-slate-400 text-[11px]">Condiciones del proveedor y acceso</p>
                </Link>
                <Link
                  href="/despliegue-en-tu-infraestructura"
                  className="block rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-emerald-300"
                >
                  <p className="font-semibold text-white">Infraestructura empresarial</p>
                  <p className="text-slate-400 text-[11px]">Soluciones a medida de Tivisoft</p>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/finops-ia" className="transition hover:text-emerald-300">
            FinOps IA
          </Link>
          <Link href="/precios" className="transition hover:text-emerald-300">
            Precios
          </Link>
          <Link href="/blog" className="transition hover:text-emerald-300">
            Blog
          </Link>
          <Link href="/games" className="transition hover:text-emerald-300">
            Games
          </Link>
        </div>

        {/* CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/573102134709"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-300 hover:bg-blue-500/20 md:flex"
          >
            Contacto
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-800/60 text-slate-100 lg:hidden"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950 px-4 py-6 lg:hidden">
          <div className="space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium text-slate-200 hover:text-emerald-300"
            >
              Inicio
            </Link>

            <div className="border-t border-slate-800/60 pt-3">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                EjectorSeat
              </p>
              <div className="pl-3 space-y-2.5 text-sm">
                <Link
                  href="/integraciones/continue"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-emerald-300"
                >
                  EjectorSeat y Continue (VS Code y Cursor)
                </Link>
                <Link
                  href="/alternativas/github-copilot"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-emerald-300"
                >
                  Alternativa a GitHub Copilot
                </Link>
                <Link
                  href="/alternativas/cursor"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-emerald-300"
                >
                  Alternativa al asistente de Cursor
                </Link>
                <Link
                  href="/seguridad-y-custodia"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-emerald-300"
                >
                  Seguridad y tratamiento de datos
                </Link>
                <Link
                  href="/despliegue-en-tu-infraestructura"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-emerald-300"
                >
                  Infraestructura empresarial
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-800/60 pt-3 space-y-3">
              <Link
                href="/finops-ia"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium text-slate-200 hover:text-emerald-300"
              >
                FinOps IA
              </Link>
              <Link
                href="/precios"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium text-slate-200 hover:text-emerald-300"
              >
                Precios y TCO
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium text-slate-200 hover:text-emerald-300"
              >
                Blog Técnico
              </Link>
              <Link
                href="/games"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium text-slate-200 hover:text-emerald-300"
              >
                Tivisoft Games
              </Link>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/573102134709"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 py-3 text-sm font-semibold text-slate-950"
              >
                Hablar con un Especialista
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
