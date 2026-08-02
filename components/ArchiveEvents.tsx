"use client";

import { useMemo, useState } from "react";
import { EventMedia } from "./EventMedia";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type ArchiveEvent = {
  date: string;
  when: string;
  title: string;
  place: string;
  kind: string;
  body: string;
  image?: string;
  photos?: string;
};

export function ArchiveEvents({ events }: { events: ArchiveEvent[] }) {
  const years = useMemo(
    () => Array.from(new Set(events.map((event) => event.date.slice(0, 4)))).sort().reverse(),
    [events]
  );
  const [activeYear, setActiveYear] = useState("all");
  const visibleEvents =
    activeYear === "all"
      ? events
      : events.filter((event) => event.date.startsWith(`${activeYear}-`));

  return (
    <>
      <Reveal className="mb-10 mt-20">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <SectionLabel index="05">Archive</SectionLabel>
          <div className="flex flex-wrap items-center gap-2" aria-label="Filter archived events by year">
            <YearButton active={activeYear === "all"} onClick={() => setActiveYear("all")}>
              All
            </YearButton>
            {years.map((year) => (
              <YearButton
                key={year}
                active={activeYear === year}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </YearButton>
            ))}
          </div>
        </div>
      </Reveal>

      <RevealGroup key={activeYear} className="grid gap-5 md:grid-cols-2">
        {visibleEvents.map((event) => (
          <RevealItem key={event.title} className="h-full">
            <ArchiveCard event={event} />
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}

function YearButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
        active
          ? "border-signal bg-signal text-coal"
          : "border-paper/15 text-paper/55 hover:border-signal/50 hover:text-signal"
      }`}
    >
      {children}
    </button>
  );
}

function ArchiveCard({ event }: { event: ArchiveEvent }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-paper/10 bg-ink-soft transition-colors hover:border-signal/40">
      <EventMedia image={event.image} variant="photo" kind={event.kind} compact />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-signal">{event.when}</span>
          <span className="text-paper/20">·</span>
          <span className="rounded-full border border-paper/15 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-paper/60">
            {event.kind}
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
          {event.title}
        </h3>
        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-paper/60">{event.body}</p>
        <div className="mt-auto pt-5">
          <div className="font-mono text-[11px] leading-relaxed text-paper/45">↳ {event.place}</div>
          {event.photos && (
            <a
              href={event.photos}
              target={event.photos.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-paper/20 px-4 py-2 text-sm font-semibold text-paper transition-colors hover:border-signal/50 hover:text-signal"
            >
              View photos →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
