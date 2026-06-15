"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { chapter } from "@/lib/site";

const interests = ["Student member", "Professional member", "Industry partner", "Speaking / event", "Just curious"];

export function ContactForm() {
  const [interest, setInterest] = useState(interests[0]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`[IES Rwanda] ${interest} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${data.get("email")}\nInterest: ${interest}\n\n${message}`
    );
    window.location.href = `mailto:${chapter.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-xl border border-paper/20 bg-white px-4 py-3 text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/20";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="tag mb-2 block">Name</label>
          <input name="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label className="tag mb-2 block">Email</label>
          <input name="email" type="email" required placeholder="you@example.com" className={field} />
        </div>
      </div>

      <div>
        <label className="tag mb-2 block">I&apos;m interested as</label>
        <div className="flex flex-wrap gap-2">
          {interests.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setInterest(opt)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                interest === opt
                  ? "border-signal bg-signal/10 text-signal"
                  : "border-paper/15 text-paper/60 hover:border-paper/40"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="tag mb-2 block">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us how you'd like to get involved…"
          className={`${field} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-coal transition-colors hover:bg-ieee hover:text-white"
      >
        Send message →
      </motion.button>
      <p className="font-mono text-[11px] text-paper/40">
        Opens your email client addressed to {chapter.email}
      </p>
    </form>
  );
}
