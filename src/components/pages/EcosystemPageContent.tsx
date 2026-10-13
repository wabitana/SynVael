"use client";

import Link from "next/link";
import { Network, HeartPulse, GraduationCap, ShoppingBag, Plane, Building2 } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ConnectCta, PageIntro, PastelCard, SectionHeading } from "@/components/pages/primitives";
import { motion } from "framer-motion";

const sectors = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "EHR workflows, appointment queues, departmental analytics, and bed management for hospitals and clinics.",
    metric: "70K+ patients managed daily",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Student information systems, learning portals, and administrative tooling for institutions.",
    metric: "Multi-campus ready",
  },
  {
    icon: ShoppingBag,
    title: "Commerce & Retail",
    desc: "Inventory, POS integrations, and customer channels for growing retail brands.",
    metric: "Omnichannel ops",
  },
  {
    icon: Plane,
    title: "Tourism & Hospitality",
    desc: "Booking engines, guest experiences, and operations dashboards for resorts and venues.",
    metric: "End-to-end guest journey",
  },
  {
    icon: Building2,
    title: "Enterprise & Gov",
    desc: "Workflow automation, reporting, and secure integrations for large organizations.",
    metric: "Role-based access",
  },
];

export function EcosystemPageContent() {
  return (
    <SiteShell>
      <PageIntro
        icon={Network}
        label="Ecosystem"
        title="Platforms that connect every part of your operation"
        description="SynVael builds sector-specific AI platforms and custom software that share a common engineering foundation — so you can launch faster without reinventing infrastructure each time."
      />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section pt-0"
      >
        <div className="yanol-container yanol-stat-grid">
          <PastelCard tone="sky" kicker="Connected stack" title="One delivery standard across industries">
            <p className="text-sm text-[var(--ink-muted)]">
              Shared authentication patterns, observability, and deployment practices reduce risk as
              you expand into new product lines.
            </p>
          </PastelCard>
          <PastelCard tone="sand" kicker="Integrations" title="APIs and data pipelines">
            <p className="text-sm text-[var(--ink-muted)]">
              Payment gateways, SMS, email, analytics, and legacy system bridges are part of the
              ecosystem — not bolt-ons.
            </p>
          </PastelCard>
          <PastelCard tone="lavender" kicker="Support" title="Long-term operations">
            <p className="text-sm text-[var(--ink-muted)]">
              Runbooks, monitoring, and iteration cycles keep platforms healthy after launch.
            </p>
          </PastelCard>
          <PastelCard tone="peach" kicker="Ownership" title="Your infrastructure">
            <p className="text-sm text-[var(--ink-muted)]">
              You retain repositories, cloud accounts, and documentation for every component we
              deliver.
            </p>
          </PastelCard>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section yanol-section-soft"
      >
        <div className="yanol-container space-y-10">
          <SectionHeading
            kicker="Sectors"
            title="Industry platforms we build and extend"
            description="Representative domains where SynVael teams ship production AI and software systems today."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <PastelCard key={s.title} tone="cream" title={s.title}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <s.icon className="h-5 w-5 text-[var(--teal-600)]" aria-hidden />
                </div>
                <p className="text-sm leading-relaxed text-[var(--ink-muted)]">{s.desc}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[var(--teal-600)]">
                  {s.metric}
                </p>
              </PastelCard>
            ))}
          </div>
          <p className="text-center text-sm text-[var(--ink-muted)]">
            Explore delivered work in{" "}
            <Link href="/projects" className="font-semibold text-[var(--teal-600)] hover:underline">
              Projects
            </Link>
            .
          </p>
        </div>
      </motion.section>

      <ConnectCta
        title="Map your ecosystem"
        description="Tell us about your industry, integrations, and timeline — we'll outline a practical architecture."
        buttonLabel="Book a discovery call"
      />
    </SiteShell>
  );
}
