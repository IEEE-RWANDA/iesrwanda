"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pillars } from "@/lib/site";

/** Interactive accordion list of the IES technical pillars. */
export function Pillars() {
  const [active, setActive] = useState(0);

  return (
    <div className="divide-y divide-paper/10 border-y border-paper/10">
      {pillars.map((p, i) => {
        const open = active === i;
        return (
          <div
            key={p.id}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className="group cursor-pointer py-7 transition-colors"
          >
            <div className="flex items-start gap-5 sm:gap-8">
              <span
                className={`font-mono text-sm transition-colors ${
                  open ? "text-signal" : "text-paper/40"
                }`}
              >
                {p.id}
              </span>
              <div className="flex-1">
                <h3
                  className={`font-display text-2xl font-semibold tracking-tight transition-colors sm:text-4xl ${
                    open ? "text-paper" : "text-paper/55 group-hover:text-paper/80"
                  }`}
                >
                  {p.title}
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pt-4 text-base leading-relaxed text-paper/65">
                        {p.body}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-signal/30 bg-signal/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-signal/90"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span
                className={`mt-1 text-2xl transition-all duration-300 ${
                  open ? "rotate-45 text-signal" : "text-paper/30"
                }`}
              >
                +
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
