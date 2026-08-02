"use client";

import { useRef, useState } from "react";

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
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setFeedback("");
    const data = new FormData(event.currentTarget);
    data.set("volunteerRole", role);

    try {
      const response = await fetch("/api/volunteer-inquiry", { method: "POST", body: data });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "The application could not be sent.");

      setState("sent");
      setFeedback("Thank you. Your volunteer application has been sent to the chapter team.");
      formRef.current?.reset();
      setRole(roles[0].title);
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "The application could not be sent.");
    }
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

      <form ref={formRef} onSubmit={onSubmit} className="space-y-5 p-7 sm:p-8">
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
          disabled={state === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-coal transition-colors hover:bg-ieee hover:text-white disabled:cursor-wait disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send volunteer application →"}
        </button>
        <p className="font-mono text-[11px] text-paper/40">
          Sent securely to info@iesrwanda.org. The chapter team will reply to your email address.
        </p>
        {feedback && (
          <p
            role="status"
            className={`rounded-xl border px-4 py-3 text-sm ${
              state === "sent"
                ? "border-leaf/40 bg-leaf/10 text-leaf"
                : "border-red-400/40 bg-red-400/10 text-red-300"
            }`}
          >
            {feedback}
          </p>
        )}
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
