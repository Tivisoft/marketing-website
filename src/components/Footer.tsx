import Link from 'next/link';
import { ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block font-black text-xl tracking-wider text-white">
              TIVISOFT
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm">
              Soluciones de inteligencia artificial aplicada, desarrollo de software empresarial y videojuegos narrativos. Creadores de <strong>EjectorSeat</strong>, un asistente empresarial de código basado en una modificación de Continue.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Acceso administrado y análisis FinOps</span>
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/573102134709"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-white"
              >
                Contacto Directo por WhatsApp
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: EjectorSeat */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
              EjectorSeat
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/integraciones/continue" className="transition hover:text-emerald-300">
                  EjectorSeat y Continue
                </Link>
              </li>
              <li>
                <Link href="/finops-ia" className="transition hover:text-emerald-300">
                  FinOps para IA
                </Link>
              </li>
              <li>
                <Link href="/precios" className="transition hover:text-emerald-300">
                  Precios y TCO
                </Link>
              </li>
              <li>
                <Link href="/seguridad-y-custodia" className="transition hover:text-emerald-300">
                  Seguridad y tratamiento de datos
                </Link>
              </li>
              <li>
                <Link href="/despliegue-en-tu-infraestructura" className="transition hover:text-emerald-300">
                  Infraestructura empresarial
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Alternativas */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
              Alternativas
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/alternativas/github-copilot" className="transition hover:text-emerald-300">
                  Alternativa a GitHub Copilot
                </Link>
              </li>
              <li>
                <Link href="/alternativas/cursor" className="transition hover:text-emerald-300">
                  Alternativa al asistente de Cursor
                </Link>
              </li>
              <li>
                <Link href="/blog/github-copilot-vs-claude-code-vs-cursor-equipos" className="transition hover:text-emerald-300">
                  Copilot vs Cursor vs Claude Code
                </Link>
              </li>
              <li>
                <Link href="/blog/claude-code-vs-continue-gateway-empresarial" className="transition hover:text-emerald-300">
                  Claude Code vs Continue
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Blog & Tivisoft Games */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
              Recursos & Juegos
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/blog" className="transition hover:text-emerald-300">
                  Blog Técnico de IA
                </Link>
              </li>
              <li>
                <Link href="/blog/costo-real-asistente-ia-codigo-equipo" className="transition hover:text-emerald-300">
                  Costo Real de Asistentes IA
                </Link>
              </li>
              <li>
                <Link href="/blog/que-significa-ia-no-entrena-con-tu-codigo" className="transition hover:text-emerald-300">
                  ¿La IA entrena con mi código?
                </Link>
              </li>
              <li>
                <Link href="/blog/gobierno-de-agentes-ia-en-desarrollo-de-software" className="transition hover:text-emerald-300">
                  Gobierno de Agentes IA
                </Link>
              </li>
              <li>
                <Link href="/games" className="transition hover:text-emerald-300">
                  Tivisoft Games (Pedaleando)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Tivisoft. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-slate-300">Inicio</Link>
            <Link href="/precios" className="hover:text-slate-300">Planes</Link>
            <Link href="/seguridad-y-custodia" className="hover:text-slate-300">Seguridad</Link>
            <a href="https://tivisoft.com/llms.txt" target="_blank" rel="noreferrer" className="hover:text-slate-300">llms.txt</a>
            <a href="https://tivisoft.com/sitemap.xml" target="_blank" rel="noreferrer" className="hover:text-slate-300">sitemap.xml</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
