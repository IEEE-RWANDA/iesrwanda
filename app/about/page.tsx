import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Marquee } from "@/components/Marquee";
import { CTA } from "@/components/CTA";
import { focusKeywords, pillars, chapter } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — IEEE IES Rwanda Chapter",
  description:
    "Who we are: the Rwanda Chapter of the IEEE Industrial Electronics Society, part of IEEE Region 8.",
};

const values = [
  {
    t: "Engineered locally",
    d: "We ground global industrial-electronics knowledge in Rwandan problems — energy access, manufacturing, mobility and agritech.",
  },
  {
    t: "Connected globally",
    d: "Members plug directly into IES technical committees, conferences and a worldwide network of 10,000+ engineers.",
  },
  {
    t: "Students first",
    d: "From the University of Rwanda Student Branch outward, we put students and young professionals at the centre.",
  },
  {
    t: "Industry-coupled",
    d: "We pair academic research with the companies building Rwanda's industrial base, in Kigali and beyond.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="01"
        kicker="About the chapter"
        title="A local home for industrial electronics."
        intro="The Rwanda Chapter brings the mission of the IEEE Industrial Electronics Society to Kigali — turning electronics, control and intelligence into the systems that power industry."
      />

      {/* mission */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionLabel index="02">Mission</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Advancing technology for the benefit of{" "}
              <span className="text-grad">humanity</span> — starting in Rwanda.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-paper/70">
            <p>
              IEEE is the world&apos;s largest technical professional organisation, with more than
              400,000 members across 160+ countries. Within it, the{" "}
              <span className="text-paper">Industrial Electronics Society</span> gathers over
              10,000 engineers and researchers devoted to applying electronics and electrical
              sciences to the enhancement of industrial and manufacturing processes.
            </p>
            <p>
              The IES field of interest spans the theory and applications of electronics, controls,
              communications, instrumentation and computational intelligence to industrial systems
              and processes — from robotics and motion control to power electronics and industrial
              AI.
            </p>
            <p>
              Our chapter, part of {chapter.parentSection.split("·")[0].trim()} in IEEE Region 8,
              exists to make that community real and local: a place where Rwandan students,
              engineers and industry meet the global IES.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-paper/10 bg-ink-soft py-7">
        <Marquee items={focusKeywords} reverse variant="mono" />
      </section>

      {/* values */}
      <section className="bg-ink-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="03">What we stand for</SectionLabel>
          </Reveal>
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <RevealItem key={v.t}>
                <div className="h-full rounded-2xl border border-paper/10 bg-ink p-8 transition-colors hover:border-signal/40">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{v.t}</h3>
                  <p className="mt-3 leading-relaxed text-paper/65">{v.d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* what we do = pillars recap */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="04">What we work on</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              The domains we convene around.
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <RevealItem key={p.id}>
                <div className="flex h-full gap-5 rounded-2xl border border-paper/10 bg-ink-soft p-8">
                  <span className="font-mono text-sm text-signal">{p.id}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-paper/60">{p.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTA />
    </>
  );
}
