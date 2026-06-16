import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CTA } from "@/components/CTA";
import { RwandaHeroVideo } from "@/components/RwandaHeroVideo";
import { rwandaVideoId, rwandaHighlights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rwanda — IEEE IES Rwanda Chapter",
  description:
    "Discover Rwanda — the Land of a Thousand Hills and one of Africa's fastest-rising technology nations, and the home of the IEEE IES Rwanda Chapter.",
};

export default function RwandaPage() {
  return (
    <>
      {/* video hero */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-black">
        {/* background video + sound toggle */}
        <RwandaHeroVideo videoId={rwandaVideoId} />
        {/* readability overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/80">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-leaf" />
              Kigali, Rwanda
            </div>
            <h1 className="mt-5 font-display text-[clamp(3rem,11vw,8rem)] font-bold leading-[0.9] tracking-tightest text-white">
              Rwanda
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              The <span className="font-semibold">Land of a Thousand Hills</span>, and one of
              Africa&apos;s fastest-rising technology nations. This is the home of our chapter.
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${rwandaVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              ► Watch on YouTube
            </a>
          </Reveal>
        </div>
      </section>

      {/* intro */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionLabel index="01">Why Rwanda</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              A small country with <span className="text-grad">big ambition</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-paper/70">
            <p>
              In a generation, Rwanda has transformed into one of Africa&apos;s safest, cleanest and
              most forward-looking nations — with a clear plan, Vision 2050, to become a high-income,
              knowledge-based economy.
            </p>
            <p>
              Kigali has become a magnet for technology and industry: innovation hubs, world-class
              universities and a government that moves fast on infrastructure and digital
              transformation. It&apos;s the perfect ground to grow{" "}
              <span className="text-paper">industrial electronics</span> — and the reason our chapter
              calls it home.
            </p>
          </Reveal>
        </div>
      </section>

      {/* highlights */}
      <section className="bg-ink-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <SectionLabel index="02">The highlights</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              What makes it special.
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rwandaHighlights.map((h, i) => (
              <RevealItem key={h.title}>
                <div className="flex h-full flex-col rounded-2xl border border-paper/10 bg-ink p-7 transition-all hover:border-signal/40 hover:shadow-lg">
                  <span className="font-mono text-sm text-signal">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                    {h.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-paper/60">{h.body}</p>
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
