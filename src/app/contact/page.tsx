import { Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageIntro, PastelCard } from "@/components/pages/primitives";
import { siteConfig } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <SiteShell>
      <PageIntro
        icon={Mail}
        label="Contact"
        title="Contact Us"
        description="Tell us what you're building. We aim to respond within one business day with next steps."
        location={siteConfig.address}
      />
      <section className="yanol-section pt-0">
        <div className="yanol-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <PastelCard tone="sky" title="Direct lines">
              <p className="text-sm text-[var(--ink-muted)]">
                <span className="font-semibold text-[var(--ink)]">Email:</span>{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-[var(--teal-600)]">
                  {siteConfig.email}
                </a>
              </p>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                <span className="font-semibold text-[var(--ink)]">Phone:</span>{" "}
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-[var(--teal-600)]">
                  {siteConfig.phone}
                </a>
              </p>
            </PastelCard>
            <PastelCard tone="sand" title="What to expect">
              <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                We&apos;ll confirm receipt, ask clarifying questions if needed, and propose a discovery
                call or written next steps.
              </p>
            </PastelCard>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
