import { Shield } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageIntro, PastelCard } from "@/components/pages/primitives";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageIntro
        icon={Shield}
        label="Legal"
        title="Privacy Policy"
        description="How SynVael handles information you share with us through forms, email, and project engagements."
      />
      <section className="yanol-section pt-0">
        <div className="yanol-container max-w-3xl">
          <PastelCard tone="cream">
            <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
              SynVael respects your privacy. Information submitted through our contact forms is
              used only to respond to your inquiry and provide related services. We do not sell
              personal data. Contact us if you have questions about how your data is handled.
            </p>
          </PastelCard>
        </div>
      </section>
    </SiteShell>
  );
}
