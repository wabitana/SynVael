export function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-[var(--border)] bg-gradient-to-br from-[#cfe9fa] via-[#f7f3ee] to-[#f4c4a8] py-16 md:py-24">
      <div className="yanol-container">
        <h1 className="yanol-heading">{title}</h1>
        {description && <p className="yanol-subheading">{description}</p>}
      </div>
    </section>
  );
}
