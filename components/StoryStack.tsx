"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { story } from "@/lib/site";

/** Sticky scroll storytelling: IEEE → IES → Rwanda, cards stack and scale. */
export function StoryStack() {
  return (
    <div className="relative">
      {story.map((s, i) => (
        <StoryCard key={i} index={i} total={story.length} {...s} />
      ))}
    </div>
  );
}

function StoryCard({
  index,
  total,
  kicker,
  title,
  body,
  logo,
}: {
  index: number;
  total: number;
  kicker: string;
  title: string;
  body: string;
  logo: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <div ref={ref} className="sticky top-24 mb-6" style={{ zIndex: index + 1 }}>
      <motion.div
        style={{ scale, opacity }}
        className="relative overflow-hidden rounded-3xl border border-paper/10 bg-ink-soft p-8 shadow-2xl sm:p-14"
      >
        <div className="blueprint pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="tag mb-4">
              {kicker} · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
            <h3 className="font-display text-4xl font-bold leading-none tracking-tight text-grad sm:text-6xl">
              {title}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-paper/70">{body}</p>
          </div>
          <div className="flex shrink-0 items-center justify-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-paper/10 sm:p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt={`${title} logo`} className="h-14 w-auto sm:h-20" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
