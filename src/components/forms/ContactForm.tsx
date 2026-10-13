"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Link from "next/link";

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
        throw new Error(json.error || "Submission failed. Please try again.");
      }
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please reach out via info@synvael.com.");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-3xl border border-[var(--border)] bg-white p-8 sm:p-12 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[var(--teal-600)]">
          <CheckCircle2 className="h-7 w-7 text-[var(--teal-600)]" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-[var(--ink)]">
          Thank you for reaching out
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[var(--ink-muted)]">
          We received your message and will review your requirements. Our team will respond within one business day.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setState("idle")}
            className="rounded-xl border border-[var(--border)] bg-white px-5 py-2.5 text-xs font-semibold text-[var(--ink)] transition-colors hover:bg-slate-50 cursor-pointer"
          >
            Send another message
          </button>
          <Link
            href="/products"
            className="rounded-xl bg-[var(--teal-600)] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[var(--teal-500)]"
          >
            Explore AI Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-[var(--border)] bg-white p-7 sm:p-9 shadow-sm"
    >
      <div className="mb-6 border-b border-black/5 pb-4">
        <h3 className="text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
          Send a Message
        </h3>
        <p className="mt-1 text-sm text-[var(--ink-muted)]">
          Fill out the details below and we&apos;ll be in touch within one business day.
        </p>
      </div>

      <div className="space-y-5">
        {/* Name and Email Row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--ink)]"
            >
              Full name <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your full name"
              className="w-full rounded-xl border border-[var(--border)] bg-[#faf8f5] px-4 py-3 text-sm text-[var(--ink)] placeholder:text-slate-400 outline-none transition-all focus:border-[var(--teal-600)] focus:bg-white focus:ring-2 focus:ring-[var(--teal-600)]/15"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--ink)]"
            >
              Work email <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-[var(--border)] bg-[#faf8f5] px-4 py-3 text-sm text-[var(--ink)] placeholder:text-slate-400 outline-none transition-all focus:border-[var(--teal-600)] focus:bg-white focus:ring-2 focus:ring-[var(--teal-600)]/15"
            />
          </div>
        </div>

        {/* Company and Project Type Row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--ink)]"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              placeholder="Company or organization"
              className="w-full rounded-xl border border-[var(--border)] bg-[#faf8f5] px-4 py-3 text-sm text-[var(--ink)] placeholder:text-slate-400 outline-none transition-all focus:border-[var(--teal-600)] focus:bg-white focus:ring-2 focus:ring-[var(--teal-600)]/15"
            />
          </div>

          <div>
            <label
              htmlFor="projectType"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--ink)]"
            >
              Project type <span className="text-rose-500">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              defaultValue=""
              className="w-full rounded-xl border border-[var(--border)] bg-[#faf8f5] px-4 py-3 text-sm text-[var(--ink)] outline-none transition-all focus:border-[var(--teal-600)] focus:bg-white focus:ring-2 focus:ring-[var(--teal-600)]/15"
            >
              <option value="" disabled>
                Select a type
              </option>
              <option value="holopresence">AI Hologram &amp; Digital Humans (HoloPresence™)</option>
              <option value="execuos">AI Business OS &amp; Executive Agents (ExecuOS™)</option>
              <option value="vaultmodel">Private Foundation AI Models (VaultModel™)</option>
              <option value="agentforge">Autonomous Multi-Agent Swarms (AgentForge™)</option>
              <option value="synchat">Enterprise AI Voice &amp; Chatbot (SynChat™)</option>
              <option value="web">Custom Software &amp; Web Platform</option>
              <option value="mobile">Native Mobile Application (iOS / Android)</option>
              <option value="consulting">Technical Architecture &amp; AI Consulting</option>
              <option value="support">Enterprise Support &amp; Retainer</option>
            </select>
          </div>
        </div>

        {/* Project Description Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--ink)]"
          >
            Project description <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project goals, scope, timeline, or requirements..."
            className="w-full rounded-xl border border-[var(--border)] bg-[#faf8f5] px-4 py-3 text-sm text-[var(--ink)] placeholder:text-slate-400 outline-none transition-all focus:border-[var(--teal-600)] focus:bg-white focus:ring-2 focus:ring-[var(--teal-600)]/15"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="rounded-xl border border-[var(--border)] bg-[#faf8f5] p-3.5">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs leading-relaxed text-[var(--ink-muted)]">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[var(--teal-600)] focus:ring-[var(--teal-600)] cursor-pointer"
            />
            <span>
              I agree to be contacted by SynVael regarding my project inquiry.
            </span>
          </label>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs text-rose-700">
            {error}
          </div>
        )}

        {/* Clean Submit Button */}
        <div>
          <button
            type="submit"
            disabled={state === "loading"}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[var(--ink)] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[var(--teal-600)] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
          >
            {state === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-white" />
                <span>Sending message...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}


