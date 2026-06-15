import Link from "next/link";
import { chapter, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/10 bg-ink-soft">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="IEEE Industrial Electronics Society — Rwanda Chapter"
              className="h-auto w-[230px] max-w-full"
            />
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
              {chapter.parentSection}
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
              The Rwanda Chapter of the IEEE Industrial Electronics Society — building the
              engineers behind Rwanda&apos;s industrial future. Engineered locally, connected
              globally.
            </p>
          </div>

          <div>
            <h4 className="tag mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors hover:text-signal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="tag mb-4">Connect</h4>
            <ul className="space-y-2.5 text-sm text-paper/70">
              <li>
                <a href={`mailto:${chapter.email}`} className="transition-colors hover:text-signal">
                  {chapter.email}
                </a>
              </li>
              <li>{chapter.location}</li>
              <li>
                <a
                  href="https://www.ieee-ies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-signal"
                >
                  ieee-ies.org ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-signal"
                >
                  ieee.org ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 font-mono text-[11px] uppercase tracking-wider text-paper/40 sm:flex-row sm:items-center">
          <span>
            © {chapter.established}–2026 IEEE IES Rwanda Chapter · Not an official IEEE page —
            demo content
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-leaf" />
            Status: Active
          </span>
        </div>
      </div>
    </footer>
  );
}
