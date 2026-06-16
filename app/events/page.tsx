import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CTA } from "@/components/CTA";
import { EventMedia } from "@/components/EventMedia";
import { events } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events — IEEE IES Rwanda Chapter",
  description:
    "Workshops, seminars and summits from the IEEE IES Rwanda Chapter — including the IES East Africa Industrial Innovation Summit in Nairobi.",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <PageHeader
        index="03"
        kicker="Programme"
        title="Where the chapter gathers."
        intro="Workshops, seminars, competitions and conferences — supported by IES grants of up to $4,000 per local activity. Here's what's coming and what we've built on."
      />

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* upcoming */}
          <Reveal className="mb-10">
            <SectionLabel index="04">Upcoming</SectionLabel>
          </Reveal>
          <div className="relative border-l border-paper/15 pl-6 sm:pl-10">
            <RevealGroup className="space-y-5">
              {upcoming.map((e) => (
                <RevealItem key={e.title}>
                  <Timeline event={e} live />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* past */}
          <Reveal className="mb-10 mt-20">
            <SectionLabel index="05">Archive</SectionLabel>
          </Reveal>
          <div className="relative border-l border-paper/15 pl-6 sm:pl-10">
            <RevealGroup className="space-y-5">
              {past.map((e) => (
                <RevealItem key={e.title}>
                  <Timeline event={e} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function Timeline({
  event,
  live = false,
}: {
  event: (typeof events)[number];
  live?: boolean;
}) {
  return (
    <div className="group relative">
      <span
        className={`absolute -left-[34px] top-6 h-3 w-3 rounded-full sm:-left-[50px] ${
          live ? "bg-signal" : "bg-paper/30"
        }`}
      >
        {live && (
          <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-75" />
        )}
      </span>
      <article className="overflow-hidden rounded-2xl border border-paper/10 bg-ink-soft p-7 transition-colors hover:border-signal/40 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm text-signal">{event.when}</span>
              <span className="text-paper/20">·</span>
              <span className="rounded-full border border-paper/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper/60">
                {event.kind}
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {event.title}
            </h3>
            <p className="mt-2 leading-relaxed text-paper/65">{event.body}</p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="font-mono text-xs text-paper/50">↳ {event.place}</div>
              {live && event.register && (
                <a
                  href={event.register}
                  target={event.register.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-coal transition-colors hover:bg-ieee hover:text-white"
                >
                  Register →
                </a>
              )}
            </div>
          </div>
          <EventMedia
            image={event.image}
            variant={live ? "poster" : "photo"}
            kind={event.kind}
          />
        </div>
      </article>
    </div>
  );
}
