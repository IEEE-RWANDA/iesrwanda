import Link from "next/link";
import { chapter, footerNav, socials } from "@/lib/site";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/10 bg-ink-soft">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="IEEE Industrial Electronics Society — Rwanda Chapter"
              className="h-auto w-[180px] max-w-full"
            />
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
              {chapter.parentSection}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              The IEEE Industrial Electronics Society Rwanda Chapter, building the engineers
              behind Rwanda&apos;s industrial future. Engineered locally, connected globally.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-signal hover:bg-signal hover:text-coal"
                >
                  <SocialIcon name={s.key} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="tag mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
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

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 font-mono text-[11px] uppercase tracking-wider text-paper/40 sm:flex-row sm:items-center">
          <span>
            © {chapter.established} IEEE IES Rwanda Chapter · Established {chapter.established},
            Kigali
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
