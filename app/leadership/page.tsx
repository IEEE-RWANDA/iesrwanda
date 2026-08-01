import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CTA } from "@/components/CTA";
import { PersonPhoto } from "@/components/PersonPhoto";
import { VolunteerForm } from "@/components/VolunteerForm";
import { officers } from "@/lib/site";

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
        intro="The chapter runs on volunteers — students, academics and industry professionals giving their time to grow industrial electronics in Rwanda."
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
            <VolunteerForm />
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
