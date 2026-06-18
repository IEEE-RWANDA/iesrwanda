import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";
import { nav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink py-32">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ieee/20 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="tag justify-center">[ Error · 404 ]</div>

        <h1 className="mt-6 font-display text-[clamp(4.5rem,18vw,11rem)] font-bold leading-[0.9] tracking-tightest">
          <span className="text-grad">404</span>
        </h1>

        <h2 className="mt-2 font-display text-[clamp(1.6rem,5vw,3rem)] font-bold leading-[1.02] tracking-tightest">
          Signal lost.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-paper/65">
          This circuit doesn&apos;t connect to anything — the page you&apos;re looking
          for has moved, been renamed, or never existed. Let&apos;s route you back on
          track.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/">Back to home →</MagneticButton>
          <MagneticButton href="/contact" variant="ghost">
            Report a broken link
          </MagneticButton>
        </div>

        <nav className="mt-12 border-t border-paper/10 pt-8">
          <p className="tag mb-4">Or try one of these</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-paper/70 transition-colors hover:text-signal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
