import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ConnectCta, PastelCard, SectionHeading } from "@/components/pages/primitives";
import { Cloud, Cpu, Palette, Smartphone, Wrench } from "lucide-react";
import { ServiceExplorer } from "@/components/sections/ServiceExplorer";
import { ConsultingShowcase } from "@/components/sections/ConsultingShowcase";

const services = [
  {
    id: "web",
    icon: Cpu,
    title: "Web Development",
    desc: "Custom web applications, admin consoles, and customer-facing platforms engineered for scale and clarity.",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Native and cross-platform apps with offline-aware flows, push notifications, and secure APIs.",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Systems",
    desc: "Cloud-native architecture, CI/CD, observability, and cost-aware infrastructure design.",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI / UX Design",
    desc: "Product design systems, prototypes, and usability testing aligned with your brand and users.",
  },
  {
    id: "consulting",
    icon: Wrench,
    title: "Technical Consulting",
    desc: "Architecture reviews, modernization roadmaps, and delivery coaching for in-house teams.",
  },
];

export function ServicesPageContent() {
  return (
    <SiteShell>
      <div className="yanol-services-page">
        <div className="yanol-services-curve">
          <p className="yanol-services-curve-label">
            <span aria-hidden>•</span> Services
          </p>
        </div>

        <section className="yanol-page-hero yanol-services-hero border-b border-[var(--border)]">
        <div className="yanol-container yanol-page-hero-grid">
          <div>
            <p className="yanol-page-label">
              <Layers className="h-4 w-4" aria-hidden />
              Services
            </p>
            <h1 className="yanol-page-title">We Build Digital Systems.</h1>
          </div>
          <p className="yanol-page-lead">
            From tourism and hospitality platforms to healthcare and enterprise operations, we design
            and ship software that connects teams, data, and customers — with intelligence built in
            where it matters.
          </p>
        </div>
      </section>

      <ServiceExplorer />

      <ConsultingShowcase />

      <section className="yanol-section pt-0">
        <div className="yanol-container">
          <div className="yanol-showcase-frame">
            <div className="yanol-showcase-chrome">
              <span />
              <span />
              <span />
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                Platform preview
              </p>
            </div>
            <div className="yanol-showcase-body">
              <div className="yanol-showcase-nav">
                <span>Stay &amp; Suites</span>
                <span>Experiences</span>
                <span>Catering</span>
                <span>Events</span>
                <span className="ml-auto rounded-full bg-[var(--teal-600)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
                  Virtual tour
                </span>
              </div>
              <div className="yanol-showcase-hero">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Resort &amp; Hospitality</p>
                <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">Immersive guest experiences</h2>
                <p className="mt-3 max-w-md text-sm text-white/85">
                  Representative UI for sector platforms we build — booking, operations, and guest
                  engagement in one system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="yanol-section yanol-section-soft">
        <div className="yanol-container space-y-10">
          <SectionHeading
            kicker="What we do"
            title="Full-stack delivery from discovery to support"
            description="Engagements are tailored to your stage — greenfield products, modernizations, or dedicated product squads."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.id} id={s.id} className="yanol-feature-card scroll-mt-28">
                <div className="yanol-feature-icon">
                  <s.icon className="h-5 w-5 text-[var(--teal-600)]" aria-hidden />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">{s.desc}</p>
                <Link href="/start-a-project" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--teal-600)]">
                  Discuss {s.title.toLowerCase()}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="yanol-section">
        <div className="yanol-container grid gap-6 lg:grid-cols-3">
          <PastelCard tone="sky" kicker="Delivery" title="Structured milestones">
            <p className="text-sm text-[var(--ink-muted)]">
              Discovery, design, build, and launch phases with demos, documentation, and acceptance
              criteria at each step.
            </p>
          </PastelCard>
          <PastelCard tone="sand" kicker="Support" title="After launch">
            <p className="text-sm text-[var(--ink-muted)]">
              Monitoring, incident response, and iterative improvements so your team keeps momentum.
            </p>
          </PastelCard>
          <PastelCard tone="lavender" kicker="Partnership" title="Your team, extended">
            <p className="text-sm text-[var(--ink-muted)]">
              We embed with your stakeholders and transfer knowledge — not just tickets and handoffs.
            </p>
          </PastelCard>
        </div>
      </section>

        <ConnectCta
          title="Ready to scope your next system?"
          description="Share your goals and constraints — we will respond with a practical plan and timeline."
          buttonLabel="Start a project"
          href="/start-a-project"
        />
      </div>
    </SiteShell>
  );
}
