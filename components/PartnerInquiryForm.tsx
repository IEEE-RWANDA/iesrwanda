"use client";

import { useRef, useState } from "react";

const partnershipTypes = [
  "Host an industrial visit",
  "Sponsor an event or programme",
  "Research / technical collaboration",
  "Recruitment and talent pipeline",
  "School or university programme",
  "Other partnership",
];

type FormState = "idle" | "sending" | "sent" | "error";

export function PartnerInquiryForm() {
  const [type, setType] = useState(partnershipTypes[0]);
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setFeedback("");

    const data = new FormData(event.currentTarget);
    data.set("partnershipType", type);

    try {
      const response = await fetch("/api/partner-inquiry", { method: "POST", body: data });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "The enquiry could not be sent.");

      setState("sent");
      setFeedback("Thank you. Your partnership enquiry and attachments have been sent.");
      formRef.current?.reset();
      setFiles([]);
      setType(partnershipTypes[0]);
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "The enquiry could not be sent.");
    }
  }

  const field =
    "w-full rounded-xl border border-paper/20 bg-white px-4 py-3 text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/20";

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-6 rounded-2xl border border-paper/10 bg-ink-soft p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name">
          <input name="name" required placeholder="Full name" className={field} />
        </Field>
        <Field label="Work email">
          <input name="email" type="email" required placeholder="you@organisation.com" className={field} />
        </Field>
        <Field label="Organisation">
          <input name="organisation" required placeholder="Company, school or institution" className={field} />
        </Field>
        <Field label="Role / title">
          <input name="jobTitle" placeholder="Your role" className={field} />
        </Field>
        <Field label="Phone / WhatsApp">
          <input name="phone" type="tel" placeholder="Optional" className={field} />
        </Field>
        <Field label="Organisation website">
          <input name="website" type="url" placeholder="https://…" className={field} />
        </Field>
      </div>

      <fieldset>
        <legend className="tag mb-3 block">Partnership interest</legend>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {partnershipTypes.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={type === option}
              onClick={() => setType(option)}
              className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                type === option
                  ? "border-signal bg-signal/10 text-signal"
                  : "border-paper/15 text-paper/65 hover:border-paper/35"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <Field label="Proposal or reference links">
        <textarea
          name="links"
          rows={3}
          placeholder="Add one link per line — proposal, organisation profile, project page, portfolio…"
          className={`${field} resize-y`}
        />
      </Field>

      <Field label="Tell us about the partnership">
        <textarea
          name="message"
          required
          rows={6}
          placeholder="What would you like to build with IEEE IES Rwanda? Include goals, timing and the support you have in mind."
          className={`${field} resize-y`}
        />
      </Field>

      <div>
        <label className="tag mb-2 block" htmlFor="partner-attachments">
          Attachments
        </label>
        <label
          htmlFor="partner-attachments"
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-paper/25 px-5 py-7 text-center transition-colors hover:border-signal/50 hover:bg-signal/5"
        >
          <span className="font-semibold text-paper/80">Choose proposal files</span>
          <span className="mt-1 text-sm text-paper/45">
            PDF, Word, PowerPoint or images · up to 3 files · 10 MB total
          </span>
        </label>
        <input
          id="partner-attachments"
          name="attachments"
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
          className="sr-only"
          onChange={(event) => setFiles(Array.from(event.target.files || []))}
        />
        {files.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-paper/60">
            {files.map((file) => (
              <li key={`${file.name}-${file.size}`}>↳ {file.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-coal transition-colors hover:bg-ieee hover:text-white disabled:cursor-wait disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send partnership enquiry →"}
        </button>
        <p className="text-sm text-paper/45">Sent securely to info@iesrwanda.org</p>
      </div>

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
