import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Counter } from "@/components/Counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Pillars } from "@/components/Pillars";
import { StoryStack } from "@/components/StoryStack";
import { CTA } from "@/components/CTA";
import { stats, focusKeywords, events } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* keyword marquee */}
      <section className="border-y border-paper/10 bg-ink-soft py-7">
        <Marquee items={focusKeywords} />
      </section>

      {/* stats band */}
      <section className="relative bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel index="01">By the numbers</SectionLabel>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 lg:grid-cols-4">
            {stats.map((s) => (
              <RevealItem key={s.label} className="bg-ink p-7 sm:p-9">
                <div className="font-display text-4xl font-bold tracking-tight text-grad sm:text-5xl">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm font-semibold text-paper/85">{s.label}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-paper/45">
                  {s.note}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* story: IEEE -> IES -> Rwanda */}
      <section className="relative bg-ink-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="02">The lineage</SectionLabel>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tightest">
              From a global institute to a chapter in Kigali.
            </h2>
          </Reveal>
          <StoryStack />
        </div>
      </section>

      {/* technical pillars */}
      <section className="relative bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel index="03">Field of interest</SectionLabel>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tightest">
                Four pillars of industrial electronics.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-paper/55">
              The IES applies electronics, control, instrumentation and computational
              intelligence to real industry. Hover to explore each domain.
            </p>
          </Reveal>
          <Pillars />
        </div>
      </section>

      {/* events preview */}
      <section className="relative bg-ink-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12 flex items-end justify-between gap-6">
            <div>
              <SectionLabel index="04">What&apos;s on</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tightest">
                Upcoming &amp; recent.
              </h2>
            </div>
            <Link
              href="/events"
              className="hidden whitespace-nowrap font-mono text-sm text-signal hover:underline sm:block"
            >
              All events →
            </Link>
          </Reveal>
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {events.slice(0, 4).map((e) => (
              <RevealItem key={e.title}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-paper/10 bg-ink p-7 transition-colors hover:border-signal/40">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-signal">
                      {e.kind}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                        e.status === "upcoming"
                          ? "bg-leaf/15 text-leaf"
                          : "bg-paper/10 text-paper/50"
                      }`}
                    >
                      {e.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">{e.body}</p>
                  <div className="mt-5 flex items-center gap-3 font-mono text-xs text-paper/50">
                    <span>{e.when}</span>
                    <span className="text-paper/20">·</span>
                    <span>{e.place}</span>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTA />
    </>
  );
}
