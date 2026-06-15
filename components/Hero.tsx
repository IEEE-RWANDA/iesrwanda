"use client";

import { motion } from "framer-motion";
import { CircuitField } from "./CircuitField";
import { MagneticButton } from "./MagneticButton";
import { chapter } from "@/lib/site";

const headline = ["Industrial", "intelligence,", "engineered", "in", "Rwanda."];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {/* live circuit field */}
      <div className="absolute inset-0">
        <CircuitField />
      </div>
      {/* depth + readability gradients (white theme) */}
      <div className="blueprint pointer-events-none absolute inset-0 opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,transparent_45%,#ffffff_92%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-ieee/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-signal/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 sm:px-8">
        {/* status line */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-3 rounded-full border border-paper/15 bg-paper/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70 backdrop-blur-sm"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-leaf" />
          {chapter.parentSection}
          <span className="text-paper/30">·</span>
          Est. {chapter.established}
        </motion.div>

        {/* kinetic headline */}
        <h1 className="max-w-[16ch] font-display text-[clamp(2.6rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tightest">
          {headline.map((word, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span
                className={`inline-block ${
                  word === "Rwanda." ? "text-grad" : "text-paper"
                }`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70"
        >
          The Rwanda Chapter of the{" "}
          <span className="text-paper">IEEE Industrial Electronics Society</span> — robotics,
          mechatronics, power electronics and industrial AI, connecting Kigali to a global
          community of 10,000+ engineers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/membership">Join the chapter →</MagneticButton>
          <MagneticButton href="/about" variant="ghost">
            What is IES?
          </MagneticButton>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 sm:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-paper/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-signal"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
