"use client";

import Link from "next/link";
import {
  Clock,
  Globe2,
  Info,
  Monitor,
  Quote,
  Shield,
  Lightbulb,
  Star,
  Users,
} from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  BulletList,
  ConnectCta,
  FeatureCard,
  PageIntro,
  PastelCard,
  SectionHeading,
  StatHighlight,
  TealMetricsBand,
} from "@/components/pages/primitives";
import { motion } from "framer-motion";

const values = [
  { icon: Shield, title: "Integrity", desc: "We say what we mean, document decisions, and keep commitments visible to clients and teammates." },
  { icon: Star, title: "Excellence", desc: "Quality is a habit — reviews, testing, and polish are part of delivery, not an afterthought." },
  { icon: Users, title: "Collaboration", desc: "We work as an extension of your team with shared context and open communication." },
  { icon: Lightbulb, title: "Clarity", desc: "Complex systems stay understandable through thoughtful structure and plain language." },
  { icon: Monitor, title: "Craft", desc: "We care about the details users feel every day — performance, accessibility, and maintainability." },
  { icon: Globe2, title: "Partnership", desc: "Long-term relationships matter more than one-off launches. We optimize for support after go-live." },
];

const timeline = [
  { year: "2022", title: "The beginning", desc: "Company founded with a focus on practical software and long-term support." },
  { year: "2023", title: "First delivery cycle", desc: "Delivered the first production systems and established a repeatable process." },
  { year: "2024", title: "Broader scope", desc: "Expanded into multiple industries while keeping the delivery model compact." },
  { year: "2025", title: "Long-term work", desc: "Strengthened ongoing partnerships around maintenance, iteration, and growth." },
];

export function AboutPageContent() {
  return (
    <SiteShell>
      <PageIntro
        icon={Info}
        label="About SynVael"
        title="Stay Ahead Of The Curve With Our Forward-Thinking AI & Software Systems"
        description="SynVael helps organizations move from manual workflows to intelligent digital platforms — with artificial intelligence, robust engineering discipline, clear communication, and software built to scale."
        location="Headquartered in Bole, Addis Ababa"
      />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section pt-0"
      >
        <div className="yanol-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <PastelCard tone="sand" kicker="Engineering DNA" title="We craft systems that outlast industry shifts.">
            <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
              Our teams combine product thinking with strong delivery practices — from discovery and
              architecture through launch and ongoing support.
            </p>
            <BulletList
              items={[
                "Practical architecture over hype",
                "Readable code and documented handoffs",
                "Security and performance as defaults",
              ]}
            />
          </PastelCard>
          <div className="yanol-about-orbit" aria-hidden>
            <div className="yanol-about-orbit-ring" />
            <p className="yanol-about-orbit-label">Designers · Engineers · Operators</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section pt-0"
      >
        <div className="yanol-container yanol-stat-grid">
          <StatHighlight
            tone="sand"
            kicker="Founded in Addis Ababa"
            value="2021"
            description="Started with a focus on custom software and long-term client partnerships."
          />
          <StatHighlight
            tone="sky"
            kicker="Production deployments"
            value="50+"
            description="Systems shipped across healthcare, hospitality, mobility, and enterprise operations."
          />
          <StatHighlight
            tone="lavender"
            kicker="Uptime SLA delivered"
            value="99.9%"
            description="Reliability targets backed by monitoring, runbooks, and responsive support."
          />
          <StatHighlight
            tone="peach"
            kicker="Source code ownership"
            value="100%"
            description="Clients retain full ownership of deliverables, documentation, and deployment assets."
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section yanol-section-soft"
      >
        <div className="yanol-container grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading kicker="About SynVael" title="Engineering AI and software that scale." />
            <div className="yanol-title-accent" />
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
            <p>
              We build custom web and mobile applications, cloud systems, and internal tools that
              teams can operate confidently after launch. Our work spans discovery, design,
              engineering, and long-term support.
            </p>
            <p>
              Based in Ethiopia and working with partners globally, we focus on measurable outcomes:
              faster operations, clearer visibility, and platforms that scale with your organization.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section pt-0"
      >
        <div className="yanol-container yanol-feature-grid">
          <FeatureCard
            icon={Clock}
            title="Built for East Africa"
            description="Products tuned for local connectivity, languages, payments, and regulatory context — without sacrificing global-grade engineering."
          />
          <FeatureCard
            icon={Monitor}
            title="100% Source Ownership"
            description="You own the repositories, infrastructure definitions, and documentation. No lock-in, no hidden dependencies."
          />
          <FeatureCard
            icon={Quote}
            title="Long-Term Partnership"
            description="We stay engaged after launch with maintenance, iteration, and roadmap support as your needs evolve."
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section"
      >
        <div className="yanol-container space-y-8">
          <SectionHeading
            title="Mission & Vision"
            description="Our mission and vision are not separate slogans — they guide how we scope work, communicate trade-offs, and measure success."
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <PastelCard tone="sand" kicker="Mission" title="To build software that solves real problems, stays understandable, and keeps working as teams grow.">
              <BulletList
                items={[
                  "Ship useful increments early",
                  "Document decisions clients can trust",
                  "Design for maintainability from day one",
                ]}
              />
            </PastelCard>
            <PastelCard tone="sky" kicker="Vision" title="To be the partner teams trust when the work needs both strong engineering and steady execution.">
              <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                We aim to be the team you call when reliability, clarity, and follow-through matter as
                much as speed.
              </p>
            </PastelCard>
          </div>
          <PastelCard tone="lavender" kicker="In practice" title="Every engagement balances delivery speed with operational safety.">
            <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
              That means explicit milestones, review checkpoints, and support plans before we write
              production code — so launches are predictable and post-launch work is easier, not harder.
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
            title="What Guides the Work"
            description="We do not try to stand for everything. We focus on the habits that keep projects clear, stable, and easier to trust."
          />
          <div className="yanol-values-grid">
            {values.map((v) => (
              <PastelCard key={v.title} tone="cream">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <v.icon className="h-5 w-5 text-[var(--teal-600)]" aria-hidden />
                </div>
                <h3 className="yanol-card-title">{v.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--ink-muted)]">{v.desc}</p>
              </PastelCard>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section"
      >
        <div className="yanol-container grid gap-12 lg:grid-cols-2">
          <SectionHeading title="How We Got Here" description="Each phase added range, but the way we work stayed grounded: ship something useful, then make it easier to support. The current focus is building durable systems, improving client handoffs, and making sure every release is easier to support than the last." />
          <ol className="yanol-timeline">
            {timeline.map((step, i) => (
              <li key={step.year} className="yanol-timeline-item">
                <span className="yanol-timeline-marker">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--teal-600)]">
                    {step.year}
                  </p>
                  <p className="font-bold text-[var(--ink)]">{step.title}</p>
                  <p className="mt-1 text-sm text-[var(--ink-muted)]">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </motion.section>

      <TealMetricsBand
        title="Numbers That Hold Up"
        description="We measure the work by what gets shipped, what stays maintainable, and how easy it is for teams to keep moving after launch."
        stats={[
          { value: "200+", label: "Projects delivered" },
          { value: "50+", label: "Clients served" },
          { value: "10+", label: "Countries reached" },
          { value: "8+", label: "Years in production" },
        ]}
      />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section"
      >
        <div className="yanol-container space-y-8">
          <SectionHeading
            title="How the Team Works"
            description="Culture is not a slogan here. It shows up in how we review work, share context, and support the people doing the building."
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <PastelCard tone="sand" kicker="How we work" title="Clear context, shared ownership, and a bias toward practical decisions.">
              <p className="text-sm text-[var(--ink-muted)]">
                We keep teams small, documentation current, and stakeholders close to progress —
                so surprises are rare and releases stay predictable.
              </p>
              <BulletList
                items={[
                  "Weekly demos and written status",
                  "Pairing on critical paths",
                  "Runbooks before production cutovers",
                ]}
              />
            </PastelCard>
            <div className="grid gap-4">
              <PastelCard tone="sky" title="Collaboration">
                <p className="text-sm text-[var(--ink-muted)]">
                  Designers, engineers, and operators share the same roadmap and definition of done.
                </p>
              </PastelCard>
              <PastelCard tone="lavender" title="Innovation">
                <p className="text-sm text-[var(--ink-muted)]">
                  We experiment in safe environments, then productionize what measurably helps users.
                </p>
              </PastelCard>
            </div>
          </div>
          <p className="text-center text-sm text-[var(--ink-muted)]">
            Want to meet the people behind the work?{" "}
            <Link href="/team" className="font-semibold text-[var(--teal-600)] hover:underline">
              View the team
            </Link>
          </p>
        </div>
      </motion.section>

      <ConnectCta />
    </SiteShell>
  );
}
