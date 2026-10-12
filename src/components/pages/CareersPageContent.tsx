import { Briefcase } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ConnectCta, PageIntro } from "@/components/pages/primitives";
import { CareersListing } from "@/components/pages/CareersListing";

export function CareersPageContent() {
  return (
    <SiteShell>
      <PageIntro
        icon={Briefcase}
        label="Careers"
        title="Be part of our mission"
        description="We're looking for passionate people to join our team. We value flat hierarchies, clear communication, and full ownership."
      />

      <CareersListing />

      <ConnectCta
        kicker="Join us"
        title="Build products that matter"
        description="Tell us what you want to work on — engineering, design, or operations. We read every general application."
        buttonLabel="Get in touch"
      />
    </SiteShell>
  );
}
