"use client";

import { FileText } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageIntro, PastelCard } from "@/components/pages/primitives";

export function TermsPageContent() {
  return (
    <SiteShell>
      <PageIntro
        icon={FileText}
        label="Legal"
        title="Terms of Service"
        description="General terms for using this website. Project work is governed by separate agreements between SynVael and clients."
      />
      <section className="yanol-section pt-0">
        <div className="yanol-container max-w-3xl">
          <PastelCard tone="cream">
            <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
              Use of this website is subject to applicable laws and fair use. Project engagements
              are governed by separate agreements between SynVael and clients. Content on this
              site is provided for general information purposes.
            </p>
          </PastelCard>
        </div>
      </section>
    </SiteShell>
  );
}
