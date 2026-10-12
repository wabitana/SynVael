import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";

export function ContentPage({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <SiteShell>
      <PageHero title={title} description={description} />
      <section className="yanol-section yanol-section-cream">
        <div className="yanol-container prose-yanol max-w-3xl">{children}</div>
      </section>
    </SiteShell>
  );
}
