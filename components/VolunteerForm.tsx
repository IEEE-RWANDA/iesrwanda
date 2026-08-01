"use client";

import { useState } from "react";
import { chapter } from "@/lib/site";

const roles = [
  {
    title: "Social Media Manager / Content Creator",
    body: "Plan posts, capture chapter stories and keep our community active across LinkedIn, Instagram, TikTok and YouTube.",
  },
  {
    title: "Graphic Designer",
    body: "Create event flyers, social graphics and visual campaigns that make IEEE IES Rwanda instantly recognisable.",
  },
  {
    title: "University IES Lead",
    body: "Build and lead an IES community at your university, connect students to chapter opportunities and organise local activities.",
  },
  {
    title: "Other / Propose a Role",
    body: "Have another skill, idea or way to contribute? Tell us what you would like to bring to the chapter.",
  },
];

export function VolunteerForm() {
  const [role, setRole] = useState(roles[0].title);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const school = String(data.get("school") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`[IES Rwanda Volunteer] ${role} — ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone || "Not provided"}`,
        `School / Organisation: ${school || "Not provided"}`,
        `Role: ${role}`,
        "",
        "Why I would like to volunteer:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${chapter.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-xl border border-paper/20 bg-white px-4 py-3 text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/20";

  return (
    <div className="overflow-hidden rounded-2xl border border-paper/10 bg-ink-soft">
      <div className="border-b border-paper/10 p-7 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">
          Volunteer positions open
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
          Help shape IES Rwanda.
        </h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-paper/60">
          Bring your creative skills or build an IES community at your school. Choose the role
          where you can make the strongest contribution.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((option) => (
            <button
              key={option.title}
              type="button"
              aria-pressed={role === option.title}
              onClick={() => setRole(option.title)}
              className={`rounded-xl border p-5 text-left transition-colors ${
                role === option.title
                  ? "border-signal bg-signal/10"
                  : "border-paper/15 hover:border-paper/35"
              }`}
            >
              <span className="font-display text-lg font-semibold">{option.title}</span>
              <span className="mt-2 block text-sm leading-relaxed text-paper/55">
                {option.body}
              </span>
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-5 p-7 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name">
            <input name="name" required placeholder="Your full name" className={field} />
          </Field>
          <Field label="Email">
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={field}
            />
          </Field>
          <Field label="Phone / WhatsApp">
            <input name="phone" type="tel" placeholder="Optional" className={field} />
          </Field>
          <Field label="School / Organisation">
            <input name="school" placeholder="University or organisation" className={field} />
          </Field>
        </div>

        <div className="rounded-xl border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-paper/75">
          Applying for: <strong className="text-signal">{role}</strong>
        </div>

        <Field label="Why would you like to volunteer?">
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your interest, relevant skills and any ideas you would like to pursue…"
            className={`${field} resize-none`}
          />
        </Field>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-coal transition-colors hover:bg-ieee hover:text-white"
        >
          Prepare application email →
        </button>
        <p className="font-mono text-[11px] text-paper/40">
          Opens your email app with the application addressed to {chapter.email}. Review it,
          then press Send.
        </p>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="tag mb-2 block">{label}</span>
      {children}
    </label>
  );
}
