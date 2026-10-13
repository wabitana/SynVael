"use client";

import Link from "next/link";
import { Briefcase } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "View all" },
  { id: "engineering", label: "Engineering" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
  { id: "business", label: "Business" },
  { id: "operations", label: "Operations" },
] as const;

export function CareersListing() {
  const [active, setActive] = useState<(typeof categories)[number]["id"]>("all");

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="yanol-section pt-0"
    >
      <div className="yanol-container">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={active === c.id ? "yanol-filter-pill active dark" : "yanol-filter-pill"}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="yanol-empty-state mt-16">
          <Briefcase className="mx-auto h-14 w-14 text-[var(--ink-muted)]/25" aria-hidden />
          <h2 className="mt-6 text-xl font-bold text-[var(--ink)]">No open positions here</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[var(--ink-muted)]">
            Nothing in {active === "all" ? "this view" : `"${categories.find((x) => x.id === active)?.label}"`} right
            now, but we&apos;re growing fast. Send us a general application.
          </p>
          <Link href="/contact" className="yanol-btn-dark mt-8 inline-flex items-center gap-2">
            General application
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
