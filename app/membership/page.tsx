import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { MagneticButton } from "@/components/MagneticButton";
import { benefits, tracks, chapter } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership — IEEE IES Rwanda Chapter",
  description:
    "Join the IEEE Industrial Electronics Society Rwanda Chapter — students, professionals and industry partners welcome.",
};

const steps = [
  { n: "01", t: "Join IEEE", d: "Create an IEEE membership at ieee.org — student rates available." },
  { n: "02", t: "Add the IES", d: "Add the Industrial Electronics Society to your membership." },
  { n: "03", t: "Connect locally", d: "Tell us you're in Rwanda — we'll plug you into chapter activities." },
];

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        index="04"
        kicker="Join us"
        title="Your door into a global engineering community."
        intro="Membership connects you to 10,000+ IES members, 30+ conferences a year, and a local chapter that turns that network into real opportunities in Rwanda."
      />

      {/* who can join */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="01">Who can join</SectionLabel>
          </Reveal>
          <RevealGroup className="grid gap-5 lg:grid-cols-3">
            {tracks.map((t, i) => (
              <RevealItem key={t.name}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition-colors ${
                    i === 0
                      ? "border-signal/40 bg-gradient-to-b from-ieee/15 to-ink-soft"
                      : "border-paper/10 bg-ink-soft hover:border-signal/40"
                  }`}
                >
                  {i === 0 && (
                    <span className="absolute right-5 top-5 rounded-full bg-signal px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-coal">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-3xl font-bold tracking-tight">{t.name}</h3>
                  <p className="mt-1 text-sm text-paper/55">{t.line}</p>
                  <ul className="mt-6 space-y-3">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-paper/75">
                        <span className="mt-1 text-signal">→</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* benefits */}
      <section className="bg-ink-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="02">Why join</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              What membership unlocks.
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <RevealItem key={b.title}>
                <div className="flex h-full gap-5 rounded-2xl border border-paper/10 bg-ink p-8">
                  <span className="font-mono text-sm text-signal">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{b.title}</h3>
                    <p className="mt-2 leading-relaxed text-paper/65">{b.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* how to join */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="03">Three steps</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              How to join.
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <RevealItem key={s.n}>
                <div className="h-full rounded-2xl border border-paper/10 bg-ink-soft p-8">
                  <div className="font-display text-5xl font-bold text-paper/10">{s.n}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-2 leading-relaxed text-paper/60">{s.d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-4">
            <MagneticButton href="https://www.ieee.org/membership/join">
              Start at ieee.org →
            </MagneticButton>
            <MagneticButton href={`mailto:${chapter.email}`} variant="ghost">
              Ask the chapter first
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
