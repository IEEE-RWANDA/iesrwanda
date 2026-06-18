import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { MagneticButton } from "@/components/MagneticButton";
import {
  resourceCategories,
  resourceHighlights,
  resourceCenterUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources — IEEE IES Rwanda Chapter",
  description:
    "Free courses, webinars, tutorials and conference recordings from the IEEE Industrial Electronics Society Resource Center — open to members and non-members alike.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        index="06"
        kicker="Keep learning"
        title="Free courses & technical learning, from the global IES."
        intro="The IEEE IES Resource Center is the society's online learning library — webinars, tutorials, short courses and conference recordings across the whole industrial electronics field. Every resource is free, for members and non-members alike."
      />

      {/* what's inside */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="01">What&apos;s inside</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              A library of industrial electronics knowledge.
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {resourceCategories.map((c, i) => (
              <RevealItem key={c.title}>
                <div className="flex h-full flex-col rounded-2xl border border-paper/10 bg-ink-soft p-8 transition-colors hover:border-signal/40">
                  <span className="font-mono text-sm text-signal">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-paper/65">{c.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-paper/10 pt-6">
                    {c.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-paper/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper/60"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* why it's worth it */}
      <section className="bg-ink-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="02">Why it matters</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              World-class learning, no paywall.
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-5 md:grid-cols-3">
            {resourceHighlights.map((h) => (
              <RevealItem key={h.title}>
                <div className="h-full rounded-2xl border border-paper/10 bg-ink p-8">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {h.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-paper/65">{h.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ieee/20 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="tag justify-center">[ Start learning ]</div>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tightest">
            Open the
            <br />
            <span className="text-grad">Resource Center.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-paper/65">
            Browse the full catalogue of free webinars, tutorials and courses on the
            official IEEE IES Resource Center — and bring what you learn back to the
            chapter.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href={resourceCenterUrl} external>
              Explore free courses →
            </MagneticButton>
            <MagneticButton href="/membership" variant="ghost">
              Become a member
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
