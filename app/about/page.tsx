import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Marquee } from "@/components/Marquee";
import { CTA } from "@/components/CTA";
import { focusKeywords, pillars, chapter, links, studentBranchFormUrl } from "@/lib/site";

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
    d: "We put students and young professionals at the centre — and we'll help you start a Student Branch Chapter at your university.",
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

      {/* 01 — IEEE */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ieee-logo.png" alt="IEEE logo" className="mb-6 h-9 w-auto" />
            <SectionLabel index="02">The institute</SectionLabel>
            <h2 className="mt-6 font-display text-5xl font-bold leading-none tracking-tightest sm:text-7xl">
              <span className="text-grad-blue">IEEE</span>
            </h2>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-paper/45">
              Institute of Electrical and Electronics Engineers
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-paper/70">
            <p>
              IEEE is the world&apos;s largest technical professional organisation dedicated to{" "}
              <span className="text-paper">advancing technology for the benefit of humanity</span>.
              With more than 400,000 members in over 160 countries, IEEE inspires a global community
              through its publications, conferences, technology standards, and professional and
              educational activities.
            </p>
            <p>
              IEEE&apos;s technical work is organised into <span className="text-paper">39 Societies</span>{" "}
              — focused communities for every field of technology, from power and computing to
              robotics and communications.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={links.ieeeAbout}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-signal hover:text-signal"
              >
                About IEEE ↗
              </a>
              <a
                href={links.ieeeSocieties}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-signal hover:text-signal"
              >
                Explore IEEE Societies ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — IES */}
      <section className="border-y border-paper/10 bg-ink-soft py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ies-logo.png" alt="IEEE Industrial Electronics Society logo" className="mb-6 h-16 w-auto" />
            <SectionLabel index="03">The society</SectionLabel>
            <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tightest sm:text-6xl">
              Industrial <span className="text-grad">Electronics Society</span>
            </h2>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-paper/45">
              One of IEEE&apos;s 39 societies · 10,000+ members
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-paper/70">
            <p>
              The <span className="text-paper">IES</span> is devoted to the application of
              electronics and electrical sciences for the enhancement of industrial and
              manufacturing processes — spanning robotics, control, power electronics,
              instrumentation and computational intelligence.
            </p>
            <p>
              To bring members closer together, the IES recently introduced a network of{" "}
              <span className="text-paper">Hubs &amp; Nodes</span> — regional structures that connect
              local communities to the global society. Rwanda sits in the East African Hub.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={links.ies}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-signal hover:text-signal"
              >
                Visit ieee-ies.org ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — IES Rwanda */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="IEEE IES Rwanda Chapter logo" className="mb-6 h-20 w-auto" />
            <SectionLabel index="04">The chapter</SectionLabel>
            <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tightest sm:text-7xl">
              IES <span className="text-grad">Rwanda</span>
            </h2>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-paper/45">
              The Rwanda node · East African Hub · Est. {chapter.established}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-paper/70">
            <p>
              We are the <span className="text-paper">Rwanda node of the East African Hub</span> —
              the local home of the IES in Rwanda. Founded in {chapter.established} and part of IEEE
              Region 8, we connect students, young professionals and industry in Kigali to the
              global IES community.
            </p>
            <p>
              We run workshops, seminars and projects that turn industrial-electronics knowledge
              into real impact — energy access, manufacturing, mobility and agritech. And we want to
              grow: help us launch the first IES Student Branch Chapters at universities across
              Rwanda.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-2.5 text-sm font-semibold text-coal transition-colors hover:bg-ieee hover:text-white"
              >
                Join the chapter →
              </Link>
              <a
                href={studentBranchFormUrl}
                target={studentBranchFormUrl.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-signal hover:text-signal"
              >
                Start a Student Branch Chapter →
              </a>
            </div>
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
            <SectionLabel index="05">What we stand for</SectionLabel>
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
            <SectionLabel index="06">What we work on</SectionLabel>
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
