import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { chapter } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — IEEE IES Rwanda Chapter",
  description: "Get in touch with the IEEE IES Rwanda Chapter.",
};

const channels = [
  { k: "Email", v: chapter.email, href: `mailto:${chapter.email}` },
  { k: "Location", v: chapter.location, href: null },
  { k: "Section", v: chapter.parentSection, href: null },
  { k: "Society", v: "ieee-ies.org", href: "https://www.ieee-ies.org" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="05"
        kicker="Get in touch"
        title="Let's build something."
        intro="Whether you're a student, an engineer or a company in Rwanda's industrial space — we'd love to hear from you."
      />

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionLabel index="06">Send a message</SectionLabel>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel index="07">Direct</SectionLabel>
            <div className="mt-8 overflow-hidden rounded-2xl border border-paper/10">
              {channels.map((c) => (
                <div
                  key={c.k}
                  className="flex items-center justify-between gap-4 border-b border-paper/10 bg-ink-soft px-6 py-5 last:border-b-0"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-paper/45">
                    {c.k}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-right text-paper transition-colors hover:text-signal"
                    >
                      {c.v}
                    </a>
                  ) : (
                    <span className="text-right text-paper/80">{c.v}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-paper/20 bg-ink-soft/50 p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-signal">Note</p>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">
                This is a demonstration chapter site. Replace the contact details and officer
                information in <span className="font-mono text-paper/80">lib/site.ts</span> with
                your real chapter data.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
