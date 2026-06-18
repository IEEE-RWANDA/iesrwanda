"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RevealGroup, RevealItem } from "./Reveal";

type Way = {
  title: string;
  line: string;
  body: string;
  points: string[];
};

export function PartnerWays({ ways }: { ways: Way[] }) {
  const [active, setActive] = useState<Way | null>(null);

  return (
    <>
      <RevealGroup className="grid gap-5 sm:grid-cols-2">
        {ways.map((w) => (
          <RevealItem key={w.title}>
            <button
              type="button"
              onClick={() => setActive(w)}
              className="group flex h-full w-full flex-col rounded-2xl border border-paper/10 bg-ink-soft p-8 text-left transition-colors hover:border-signal/40"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-signal">{w.line}</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{w.title}</h3>
              <p className="mt-3 leading-relaxed text-paper/65">{w.body}</p>
              <ul className="mt-6 space-y-3 border-t border-paper/10 pt-6">
                {w.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-paper/75">
                    <span className="mt-1 text-signal">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-paper/50 transition-colors group-hover:text-signal">
                Learn more
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} — coming soon`}
          >
            <div className="absolute inset-0 bg-coal/80 backdrop-blur-sm" />
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-paper/10 bg-ink p-10 text-center"
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-paper/50 transition-colors hover:bg-paper/10 hover:text-paper"
              >
                ✕
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/emblem.png"
                alt="IEEE IES Rwanda Chapter emblem"
                className="mx-auto h-20 w-20 animate-spin-rest"
              />
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-signal">{active.line}</p>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight">{active.title}</h3>
              <p className="mt-4 text-lg font-semibold text-paper">Coming soon.</p>
              <p className="mt-2 leading-relaxed text-paper/60">
                We&apos;re building this out. Want to be first in line?
              </p>
              <a
                href={`mailto:info@iesrwanda.org?subject=${encodeURIComponent(active.title + " — partnership enquiry")}`}
                className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-coal transition-colors hover:bg-ieee hover:text-white"
              >
                Talk to us →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
