"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

/** Consistent animated header for interior pages. */
export function PageHeader({
  index,
  kicker,
  title,
  intro,
}: {
  index: string;
  kicker: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-paper/10 bg-ink pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-ieee/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel index={index}>{kicker}</SectionLabel>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,7vw,5rem)] font-bold leading-[0.95] tracking-tightest"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/65"
        >
          {intro}
        </motion.p>
      </div>
    </header>
  );
}
