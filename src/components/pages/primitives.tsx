"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function PageIntro({
  icon: Icon,
  label,
  title,
  description,
  aside,
  location,
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
  location?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="yanol-page-hero"
    >
      <div className="yanol-container yanol-page-hero-grid">
        <div>
          <p className="yanol-page-label">
            <Icon className="h-4 w-4" aria-hidden />
            {label}
          </p>
          <h1 className="yanol-page-title">{title}</h1>
        </div>
        <div>
          <p className="yanol-page-lead">{description}</p>
          {location && (
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--teal-600)]">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              {location}
            </p>
          )}
          {aside}
        </div>
      </div>
    </motion.section>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}
    >
      {kicker && <p className="yanol-kicker">{kicker}</p>}
      <h2 className="yanol-section-title">{title}</h2>
      {description && <p className="yanol-section-desc">{description}</p>}
    </motion.div>
  );
}

type PastelTone = "sand" | "sky" | "lavender" | "peach" | "mint" | "cream";

export function PastelCard({
  tone = "sand",
  kicker,
  title,
  children,
  className = "",
}: {
  tone?: PastelTone;
  kicker?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`yanol-pastel-card yanol-pastel-${tone} ${className}`}
    >
      {kicker && <p className="yanol-card-kicker">{kicker}</p>}
      {title && <h3 className="yanol-card-title">{title}</h3>}
      <div className="yanol-card-body">{children}</div>
    </motion.article>
  );
}

export function StatHighlight({
  tone,
  kicker,
  value,
  description,
}: {
  tone: PastelTone;
  kicker: string;
  value: string;
  description: string;
}) {
  return (
    <PastelCard tone={tone}>
      <p className="yanol-stat-kicker">{kicker}</p>
      <p className="yanol-stat-value">{value}</p>
      <p className="yanol-stat-desc">{description}</p>
    </PastelCard>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="yanol-feature-card"
    >
      <div className="yanol-feature-icon">
        <Icon className="h-5 w-5 text-[var(--teal-600)]" aria-hidden />
      </div>
      <h3 className="text-lg font-bold text-[var(--ink)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">{description}</p>
    </motion.article>
  );
}

export function ConnectCta({
  kicker = "Let's connect",
  title = "Partner with SynVael",
  description = "Whether you want to build cutting-edge AI solutions, custom enterprise software, or transform your digital architecture, let's connect.",
  href = "/contact",
  buttonLabel = "Get in touch",
}: {
  kicker?: string;
  title?: string;
  description?: string;
  href?: string;
  buttonLabel?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="yanol-section"
    >
      <div className="yanol-container">
        <div className="yanol-connect-cta">
          <p className="yanol-kicker">{kicker}</p>
          <h2 className="yanol-section-title text-center">{title}</h2>
          <p className="yanol-section-desc mx-auto max-w-xl text-center">{description}</p>
          <Link href={href} className="yanol-btn-teal mt-8 inline-flex items-center gap-2">
            {buttonLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export function TealMetricsBand({
  title,
  description,
  stats,
}: {
  title: string;
  description: string;
  stats: { value: string; label: string }[];
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="yanol-section"
    >
      <div className="yanol-container">
        <div className="yanol-teal-band">
          <div className="yanol-teal-band-copy">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90">{description}</p>
          </div>
          <div className="yanol-teal-stats-card">
            <div className="yanol-teal-stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="yanol-teal-stat">
                  <span className="yanol-teal-stat-dot" aria-hidden />
                  <p className="text-3xl font-extrabold text-[var(--ink)]">{s.value}</p>
                  <p className="text-sm text-[var(--ink-muted)]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="yanol-bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
