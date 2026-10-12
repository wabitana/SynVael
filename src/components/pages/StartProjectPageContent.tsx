import { Rocket } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageIntro, PastelCard } from "@/components/pages/primitives";

export function StartProjectPageContent() {
  return (
    <SiteShell>
      <PageIntro
        icon={Rocket}
        label="Start a Project"
        title="Tell us what you're building"
        description="Share your goals, timeline, and constraints. We typically respond within one business day with next steps and optional discovery slots."
      />

      <section className="yanol-section pt-0">
        <div className="yanol-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <PastelCard tone="sand" kicker="What to include" title="A strong brief helps us move faster">
              <ul className="yanol-bullet-list">
                <li>Problem you&apos;re solving and who it affects</li>
                <li>Existing systems or integrations</li>
                <li>Target launch window and success metrics</li>
                <li>Team members who will collaborate with us</li>
              </ul>
            </PastelCard>
            <PastelCard tone="sky" title="What happens next">
              <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                We review your note, ask clarifying questions if needed, and schedule a discovery
                call to outline scope, approach, and a proposal.
              </p>
            </PastelCard>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
