import Link from "next/link";
import { Hero } from "@/components/Hero";
import { HubsNodesMap } from "@/components/HubsNodesMap";
import { Marquee } from "@/components/Marquee";
import { Counter } from "@/components/Counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Pillars } from "@/components/Pillars";
import { StoryStack } from "@/components/StoryStack";
import { CTA } from "@/components/CTA";
import { stats, focusKeywords, events, conferences } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* keyword marquee */}
      <section className="border-y border-paper/10 bg-ink-soft py-7">
        <Marquee items={focusKeywords} />
      </section>

      {/* interactive hubs & nodes map */}
      <HubsNodesMap />

      {/* stats band */}
      <section className="relative bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel index="02">By the numbers</SectionLabel>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 lg:grid-cols-4">
            {stats.map((s) => (
              <RevealItem key={s.label} className="bg-ink p-7 sm:p-9">
                <div className="font-display text-4xl font-bold tracking-tight text-grad sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
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
            <SectionLabel index="03">The lineage</SectionLabel>
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
              <SectionLabel index="04">Field of interest</SectionLabel>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tightest">
                IES areas of technical activity.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-paper/55">
              The IES spans electronics, controls, communications, instrumentation and
              computational intelligence, applied to real industry. Hover to explore each domain.
            </p>
          </Reveal>
          <Pillars />
        </div>
      </section>

      {/* annual IES conferences */}
      <section className="relative bg-ink-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel index="05">Every year, worldwide</SectionLabel>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tightest">
                The flagship IES conferences.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-paper/55">
              Members get discounted access to 30+ IES conferences a year. These are the
              society&apos;s marquee gatherings — and a stage Rwanda can host.
            </p>
          </Reveal>

          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conferences.map((c) => (
              <RevealItem key={c.acronym}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-paper/10 bg-ink p-7 transition-all hover:border-signal/40 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold tracking-tight text-grad">
                      {c.acronym}
                    </span>
                    {c.flagship && (
                      <span className="rounded-full bg-signal px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-coal">
                        Flagship
                      </span>
                    )}
                    {c.students && (
                      <span className="rounded-full border border-ieee/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ieee">
                        SYP
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold leading-snug text-paper/90">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/55">{c.focus}</p>
                  <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-paper/40">
                    <span className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-leaf" />
                      {c.students ? "Every year" : "Held annually"}
                    </span>
                    <span className="text-signal opacity-0 transition-opacity group-hover:opacity-100">
                      Visit ↗
                    </span>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* events preview */}
      <section className="relative bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12 flex items-end justify-between gap-6">
            <div>
              <SectionLabel index="06">What&apos;s on</SectionLabel>
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
                <article className="group relative h-full overflow-hidden rounded-2xl border border-paper/10 bg-ink-soft p-7 transition-colors hover:border-signal/40">
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
                  {e.status === "upcoming" && e.register && (
                    <a
                      href={e.register}
                      target={e.register.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-signal px-4 py-2 text-xs font-semibold text-coal transition-colors hover:bg-ieee hover:text-white"
                    >
                      Register →
                    </a>
                  )}
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
