import { MagneticButton } from "./MagneticButton";
import { chapter } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ieee/20 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="tag justify-center">[ Join the network ]</div>
        <h2 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[0.98] tracking-tightest">
          Build Rwanda&apos;s
          <br />
          <span className="text-grad">industrial future.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-paper/65">
          Students, engineers and industry partners: there&apos;s a place for you in the chapter.
          Membership is your door into the global IEEE IES community.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/membership">Become a member →</MagneticButton>
          <MagneticButton href={`mailto:${chapter.email}`} variant="ghost">
            Email the chapter
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
