import Link from "next/link";
import { Check, Tag } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ConnectCta, PageIntro, PastelCard, SectionHeading } from "@/components/pages/primitives";

const tiers = [
  {
    name: "Discovery",
    kicker: "Best for new ideas",
    price: "Fixed scope",
    features: ["Workshops & requirements", "Architecture outline", "Timeline & budget range"],
    tone: "sand" as const,
    cta: "Book discovery",
  },
  {
    name: "Product Build",
    kicker: "Best for MVPs & launches",
    price: "Milestone-based",
    features: ["Design + engineering squad", "Weekly demos", "Staging & production release"],
    tone: "sky" as const,
    cta: "Request proposal",
    featured: true,
  },
  {
    name: "Retainer",
    kicker: "Best for ongoing evolution",
    price: "Monthly",
    features: ["Prioritized backlog", "SLA-backed support", "Performance & security reviews"],
    tone: "lavender" as const,
    cta: "Talk to us",
  },
];

export function PricingPageContent() {
  return (
    <SiteShell>
      <PageIntro
        icon={Tag}
        label="Pricing"
        title="Engagement models that match how you work"
        description="Every organization is different. We offer clear packages for discovery, delivery, and long-term support — with transparent milestones and no surprise scope."
      />

      <section className="yanol-section pt-0">
        <div className="yanol-container grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <PastelCard
              key={t.name}
              tone={t.tone}
              className={t.featured ? "yanol-pricing-featured" : ""}
            >
              <p className="yanol-card-kicker">{t.kicker}</p>
              <h3 className="text-2xl font-extrabold text-[var(--ink)]">{t.name}</h3>
              <p className="mt-2 text-sm font-semibold text-[var(--teal-600)]">{t.price}</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-[var(--ink-muted)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal-600)]" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={t.featured ? "yanol-btn-teal mt-8 inline-flex w-full justify-center" : "yanol-btn-outline mt-8 inline-flex w-full justify-center"}>
                {t.cta}
              </Link>
            </PastelCard>
          ))}
        </div>
      </section>

      <section className="yanol-section yanol-section-soft">
        <div className="yanol-container">
          <SectionHeading
            title="Custom estimates"
            description="Send your requirements, integrations, and timeline. We respond with a written proposal, assumptions, and delivery plan — typically within a few business days."
            align="center"
          />
        </div>
      </section>

      <ConnectCta buttonLabel="Request a quote" />
    </SiteShell>
  );
}
