import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CTA } from "@/components/CTA";
import { PersonPhoto } from "@/components/PersonPhoto";
import { officers, volunteerFormUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leadership — IEEE IES Rwanda Chapter",
  description: "The volunteer officers leading the IEEE IES Rwanda Chapter.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        index="02"
        kicker="The volunteers"
        title="Led by engineers, for engineers."
        intro="The chapter runs on volunteers — students, academics and industry professionals giving their time to grow industrial electronics in Rwanda. (Names below are placeholders, ready for the real committee.)"
      />

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="01">Executive committee</SectionLabel>
          </Reveal>

          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {officers.map((o) => (
              <RevealItem key={o.name}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-paper/10 bg-ink-soft transition-all hover:border-signal/40 hover:shadow-lg">
                  <PersonPhoto photo={o.photo} name={o.name} initials={o.initials} />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {o.name}
                    </h3>
                    <div className="mt-1 font-mono text-xs uppercase tracking-widest text-signal">
                      {o.role}
                    </div>
                    <div className="mt-3 text-sm text-paper/55">{o.affil}</div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12">
            <div className="rounded-2xl border border-dashed border-paper/20 bg-ink-soft/60 p-8 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-signal">
                Volunteer position open
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                Want to help lead the chapter?
              </h3>
              <p className="mx-auto mt-2 max-w-md text-paper/60">
                We&apos;re always looking for committee members and student volunteers. If you
                care about industrial electronics in Rwanda, there&apos;s a role for you.
              </p>
              <a
                href={volunteerFormUrl}
                target={volunteerFormUrl.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-coal transition-colors hover:bg-ieee hover:text-white"
              >
                Volunteer with us →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
