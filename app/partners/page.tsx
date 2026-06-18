import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { MagneticButton } from "@/components/MagneticButton";
import { PartnerWays } from "@/components/PartnerWays";
import { partnerWays, chapter } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners — IEEE IES Rwanda Chapter",
  description:
    "Partner with the IEEE Industrial Electronics Society Rwanda Chapter — host industrial visits, sponsor events, collaborate on R&D, or recruit Rwanda's emerging engineering talent.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        index="05"
        kicker="Work with us"
        title="Partner with Rwanda's industrial engineering community."
        intro="Companies, institutions and IEEE societies power what the chapter does — from industrial visits and workshops to research and recruitment. Here's how your organisation can get involved."
      />

      {/* ways to partner */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="01">Ways to partner</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Four ways to get involved.
            </h2>
          </Reveal>
          <PartnerWays ways={partnerWays} />
        </div>
      </section>

      {/* Distinguished Lecturer Program — for schools & universities */}
      <section className="bg-ink-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="02">For schools &amp; universities</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Bringing engineering to classrooms.
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            <RevealItem>
              <div className="flex h-full flex-col rounded-2xl border border-paper/10 bg-ink p-8 transition-colors hover:border-signal/40">
                <p className="font-mono text-xs uppercase tracking-wider text-signal">Universities</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">Distinguished Lecturer Program</h3>
                <p className="mt-3 leading-relaxed text-paper/65">
                  Host a leading IEEE IES expert in industrial electronics — automation, robotics,
                  power electronics, IoT and more — to deliver a technical lecture to your students
                  and faculty. The chapter coordinates the request and the visit.
                </p>
                <ul className="mt-6 space-y-3 border-t border-paper/10 pt-6">
                  {[
                    "World-class IES lecturers, on your campus",
                    "Talks tailored to students & researchers",
                    "Chapter handles the coordination",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-paper/75">
                      <span className="mt-1 text-signal">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <MagneticButton href={`mailto:${chapter.email}?subject=Distinguished%20Lecturer%20request`}>
                    Request a lecturer →
                  </MagneticButton>
                </div>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="flex h-full flex-col rounded-2xl border border-paper/10 bg-ink p-8 transition-colors hover:border-signal/40">
                <p className="font-mono text-xs uppercase tracking-wider text-signal">Schools</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">K–12 STEM outreach</h3>
                <p className="mt-3 leading-relaxed text-paper/65">
                  Bring hands-on engineering to primary and secondary schools — robotics demos,
                  electronics activities and volunteer-led sessions that spark curiosity and show
                  young students a future in industrial technology.
                </p>
                <ul className="mt-6 space-y-3 border-t border-paper/10 pt-6">
                  {[
                    "Hands-on robotics & electronics demos",
                    "Volunteer engineers & student mentors",
                    "Inspiring the next generation of engineers",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-paper/75">
                      <span className="mt-1 text-signal">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <MagneticButton href={`mailto:${chapter.email}?subject=K-12%20STEM%20outreach`}>
                    Bring us to your school →
                  </MagneticButton>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ieee/20 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="tag justify-center">[ Let&apos;s talk ]</div>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tightest">
            Build the partnership
            <br />
            <span className="text-grad">that fits your goals.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-paper/65">
            Tell us what you&apos;re working on, and we&apos;ll shape a partnership around it — a
            visit, a sponsorship, a research collaboration or a hiring pipeline.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href={`mailto:${chapter.email}`}>
              Email the chapter →
            </MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Send a message
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
