"use client";

import Link from "next/link";
import { FolderKanban } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ConnectCta, PageIntro, PastelCard, TealMetricsBand } from "@/components/pages/primitives";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Garage Management System",
    sector: "Mobility",
    desc: "Work orders, inventory, billing, and customer notifications for multi-location garages.",
    tone: "sky" as const,
  },
  {
    title: "Construction Project Management",
    sector: "Enterprise",
    desc: "Site progress, materials, approvals, and contractor coordination in one dashboard.",
    tone: "sand" as const,
  },
  {
    title: "Healthcare Platform",
    sector: "Health",
    desc: "Patient records, queues, analytics, and departmental workflows for care teams.",
    tone: "lavender" as const,
  },
  {
    title: "Event Management System",
    sector: "Hospitality",
    desc: "Ticketing, seating, vendor coordination, and real-time attendance insights.",
    tone: "peach" as const,
  },
  {
    title: "Hospitality & Resort Portal",
    sector: "Tourism",
    desc: "Booking, guest services, and operations tooling for high-traffic seasonal demand.",
    tone: "mint" as const,
  },
  {
    title: "Education Administration Suite",
    sector: "Education",
    desc: "Enrollment, grading, communications, and reporting for schools and training centers.",
    tone: "cream" as const,
  },
];

export function ProjectsPageContent() {
  return (
    <SiteShell>
      <PageIntro
        icon={FolderKanban}
        label="Projects"
        title="Our Portfolio"
        description="Real-world systems we build to streamline operations, improve visibility, and scale businesses — from first release through years of iteration."
      />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section pt-0"
      >
        <div className="yanol-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <PastelCard key={p.title} tone={p.tone}>
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--teal-600)]">
                {p.sector}
              </p>
              <h3 className="yanol-card-title">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--ink-muted)]">{p.desc}</p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-semibold text-[var(--teal-600)] hover:underline"
              >
                Request a walkthrough →
              </Link>
            </PastelCard>
          ))}
        </div>
      </motion.section>

      <TealMetricsBand
        title="Delivered across sectors"
        description="Representative systems we build and support — from first release through years of iteration."
        stats={[
          { value: "150+", label: "Projects delivered" },
          { value: "50+", label: "Enterprise clients" },
          { value: "6+", label: "Industries served" },
          { value: "4+", label: "Years of delivery" },
        ]}
      />

      <ConnectCta
        title="Have a project in mind?"
        description="Share your domain and constraints — we'll suggest an approach based on similar deliveries."
        buttonLabel="Start a project"
        href="/start-a-project"
      />
    </SiteShell>
  );
}
