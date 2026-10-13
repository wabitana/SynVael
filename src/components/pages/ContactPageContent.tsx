"use client";

import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Clock,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";

export function ContactPageContent() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  function copyToClipboard(text: string) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  }

  return (
    <SiteShell>
      {/* Editorial Page Hero */}
      <section className="border-b border-black/5 bg-white py-14 sm:py-20">
        <div className="yanol-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--teal-600)]">
                <Mail className="h-3.5 w-3.5" />
                Contact &amp; Engagement
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
                Let&apos;s Build Something <br className="hidden sm:inline" />
                <span className="text-[var(--teal-600)]">Extraordinary Together</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
                Whether deploying proprietary generative AI models, autonomous agent swarms, or engineering mission-critical enterprise software, our founding architects are ready to collaborate.
              </p>
            </div>

            {/* Quick Trust Telemetry Badges */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center gap-3.5 rounded-2xl border border-black/6 bg-[#faf8f5] p-4 transition-colors hover:border-teal-500/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[var(--teal-600)]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                    Fast Response SLA
                  </p>
                  <p className="text-xs text-[var(--ink-muted)]">
                    Typically acknowledged within 2 business hours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-black/6 bg-[#faf8f5] p-4 transition-colors hover:border-teal-500/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[var(--teal-600)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                    Reciprocal NDA Protection
                  </p>
                  <p className="text-xs text-[var(--ink-muted)]">
                    100% Client IP Ownership &amp; strict confidentiality
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-black/6 bg-[#faf8f5] p-4 transition-colors hover:border-teal-500/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[var(--teal-600)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                    Global Engineering Mesh
                  </p>
                  <p className="text-xs text-[var(--ink-muted)]">
                    Headquartered in Addis Ababa, Ethiopia (UTC+3)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main 2-Column Content Area */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="yanol-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Direct Channels & Process Timeline */}
            <div className="space-y-6 lg:col-span-5">
              {/* Direct Channels Card */}
              <div className="rounded-3xl border border-black/8 bg-white p-7 sm:p-8 shadow-sm">
                <div className="mb-6 flex items-center justify-between border-b border-black/6 pb-4">
                  <h2 className="text-lg font-black tracking-tight text-[var(--ink)]">
                    Direct Communication
                  </h2>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Channels Open
                  </span>
                </div>

                <div className="space-y-5">
                  {/* Email */}
                  <div className="rounded-2xl border border-black/5 bg-[#faf8f5] p-4 transition-all hover:bg-slate-50">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ink-muted)]">
                        <Mail className="h-3.5 w-3.5 text-[var(--teal-600)]" />
                        Executive Email
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(siteConfig.email)}
                        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold text-[var(--teal-600)] transition-colors hover:bg-teal-50 cursor-pointer"
                        title="Copy email address"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block text-base font-bold text-[var(--ink)] transition-colors hover:text-[var(--teal-600)]"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="rounded-2xl border border-black/5 bg-[#faf8f5] p-4 transition-all hover:bg-slate-50">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ink-muted)]">
                      <Phone className="h-3.5 w-3.5 text-[var(--teal-600)]" />
                      Direct Telephone Line
                    </span>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-base font-bold text-[var(--ink)] transition-colors hover:text-[var(--teal-600)]"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  {/* Instant Messaging Buttons */}
                  <div>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--ink-muted)]">
                      Instant Messaging
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="https://wa.me/251942497990"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-50/50 py-3 px-4 text-xs font-bold text-emerald-800 transition-all hover:bg-emerald-100 hover:border-emerald-500/40"
                      >
                        <MessageCircle className="h-4 w-4 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="https://t.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl border border-sky-500/20 bg-sky-50/50 py-3 px-4 text-xs font-bold text-sky-800 transition-all hover:bg-sky-100 hover:border-sky-500/40"
                      >
                        <Send className="h-3.5 w-3.5 text-sky-600" />
                        <span>Telegram</span>
                      </a>
                    </div>
                  </div>

                  {/* Physical Location */}
                  <div className="rounded-2xl border border-black/5 bg-[#faf8f5] p-4 text-xs text-[var(--ink-muted)]">
                    <span className="flex items-center gap-2 font-bold uppercase tracking-wider text-[var(--ink)]">
                      <MapPin className="h-3.5 w-3.5 text-[var(--teal-600)]" />
                      Engineering Operations
                    </span>
                    <p className="mt-1 font-medium text-[var(--ink)]">
                      {siteConfig.address}
                    </p>
                    <p className="mt-0.5">
                      East Africa Time (EAT) · UTC+3
                    </p>
                  </div>
                </div>
              </div>

              {/* Engagement Timeline Process Card */}
              <div className="rounded-3xl border border-black/8 bg-white p-7 sm:p-8 shadow-sm">
                <div className="mb-6 border-b border-black/6 pb-4">
                  <h3 className="text-base font-black tracking-tight text-[var(--ink)]">
                    What to Expect Next
                  </h3>
                </div>

                <ol className="relative space-y-6 border-l-2 border-teal-500/20 pl-6 text-sm">
                  <li className="relative">
                    <div className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--teal-600)] text-[11px] font-black text-white">
                      1
                    </div>
                    <h4 className="font-bold text-[var(--ink)]">
                      Triage &amp; Requirement Review
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--ink-muted)]">
                      We confirm receipt and assign a dedicated domain specialist to review technical feasibility.
                    </p>
                  </li>

                  <li className="relative">
                    <div className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[11px] font-black text-white">
                      2
                    </div>
                    <h4 className="font-bold text-[var(--ink)]">
                      Technical Discovery Session
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--ink-muted)]">
                      A focused 30-minute discovery call to align on architecture, delivery milestones, and stack.
                    </p>
                  </li>

                  <li className="relative">
                    <div className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[11px] font-black text-white">
                      3
                    </div>
                    <h4 className="font-bold text-[var(--ink)]">
                      Roadmap &amp; Fixed-Scope Proposal
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--ink-muted)]">
                      You receive a detailed technical proposal with milestone deliverables, timelines, and fixed pricing.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

