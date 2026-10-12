"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; message?: string; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed");
      }
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-white p-8 text-center">
        <p className="text-lg font-semibold text-[var(--teal-600)]">Thank you!</p>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">
          We received your message and will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold">
          Full name *
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--teal-600)]"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold">
          Work email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--teal-600)]"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-semibold">
          Company
        </label>
        <input
          id="company"
          name="company"
          className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--teal-600)]"
        />
      </div>
      <div>
        <label htmlFor="projectType" className="mb-1 block text-sm font-semibold">
          Project type *
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--teal-600)]"
          defaultValue=""
        >
          <option value="" disabled>
            Select a type
          </option>
          <option value="web">Web application</option>
          <option value="mobile">Mobile application</option>
          <option value="consulting">Consulting</option>
          <option value="support">Support / retainer</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold">
          Project description *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--teal-600)]"
        />
      </div>
      <label className="flex items-start gap-2 text-sm text-[var(--ink-muted)]">
        <input type="checkbox" name="consent" required className="mt-1" />
        I agree to be contacted about my inquiry.
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={state === "loading"}
        className="yanol-btn-launch border-0 disabled:opacity-60"
      >
        {state === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
