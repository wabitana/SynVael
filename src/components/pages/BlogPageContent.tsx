"use client";

import Link from "next/link";
import { Newspaper } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ConnectCta, PageIntro, PastelCard } from "@/components/pages/primitives";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Designing healthcare platforms that clinics actually use",
    category: "Engineering",
    date: "Coming soon",
    excerpt: "Lessons from EHR rollouts — workflows first, features second.",
  },
  {
    title: "What a good discovery week looks like",
    category: "Process",
    date: "Coming soon",
    excerpt: "How we turn ambiguous ideas into a buildable roadmap.",
  },
  {
    title: "Owning your cloud after launch",
    category: "Cloud",
    date: "Coming soon",
    excerpt: "Handoffs, runbooks, and cost visibility for client teams.",
  },
];

export function BlogPageContent() {
  return (
    <SiteShell>
      <PageIntro
        icon={Newspaper}
        label="Blog"
        title="Insights on software engineering and digital products"
        description="Practical notes from delivery — architecture, UX, and operations for teams building serious systems."
      />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="yanol-section pt-0"
      >
        <div className="yanol-container grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <PastelCard key={post.title} tone="cream">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--teal-600)]">
                {post.category} · {post.date}
              </p>
              <h3 className="yanol-card-title">{post.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--ink-muted)]">{post.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[var(--ink-muted)]">
                Article in preparation
              </span>
            </PastelCard>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-[var(--ink-muted)]">
          Want updates when we publish?{" "}
          <Link href="/contact" className="font-semibold text-[var(--teal-600)] hover:underline">
            Join the conversation
          </Link>
          .
        </p>
      </motion.section>

      <ConnectCta
        title="Rather talk than read?"
        description="Tell us what you're building — we'll share relevant case studies and approaches."
        buttonLabel="Contact us"
      />
    </SiteShell>
  );
}
