import Link from "next/link";
import { Users } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ConnectCta, PageIntro, PastelCard } from "@/components/pages/primitives";
import { TeamDirectory, TeamHeroAside } from "@/components/pages/TeamDirectory";

export function TeamPageContent() {
  return (
    <SiteShell>
      <PageIntro
        icon={Users}
        label="SynVael Team"
        title="The team behind the work"
        description="A compact group of engineers, designers, and operators who stay close to every project from kickoff to long-term support."
        aside={<TeamHeroAside />}
      />

      <TeamDirectory />

      <section className="yanol-section">
        <div className="yanol-container">
          <PastelCard tone="peach" className="yanol-team-cta relative text-center">
            <span className="yanol-team-cta-arrow" aria-hidden />
            <h2 className="yanol-section-title">Want to build with this team?</h2>
            <p className="yanol-section-desc mx-auto max-w-lg">
              We are always looking for people who care about product quality, communication, and
              follow-through.
            </p>
            <Link href="/careers" className="yanol-btn-outline mt-6 inline-flex">
              View open positions
            </Link>
          </PastelCard>
        </div>
      </section>

      <ConnectCta buttonLabel="Start a conversation" href="/contact" />
    </SiteShell>
  );
}
