import type { LucideIcon } from "lucide-react";

export function InnerPageHero({
  icon: Icon,
  eyebrow,
  title,
  description,
  aside,
  children,
  className = "",
}: {
  icon?: LucideIcon;
  eyebrow: string;
  title: string;
  description?: string;
  aside?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`yanol-inner-hero ${className}`.trim()}>
      <div className="yanol-container py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="yanol-page-eyebrow">
              {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden /> : null}
              <span>{eyebrow}</span>
            </p>
            <h1 className="yanol-inner-title">{title}</h1>
          </div>
          <div className="space-y-5">
            {description ? <p className="yanol-inner-lead">{description}</p> : null}
            {aside}
          </div>
        </div>
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}
