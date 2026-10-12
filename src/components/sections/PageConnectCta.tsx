import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageConnectCta({
  label = "Let's connect",
  title = "Partner with SynVael",
  description = "Whether you want to build cutting-edge AI solutions, custom enterprise software, or transform your digital architecture, let's connect.",
  href = "/contact",
  buttonLabel = "Get in touch",
}: {
  label?: string;
  title?: string;
  description?: string;
  href?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="yanol-section bg-white pb-20">
      <div className="yanol-container">
        <div className="yanol-connect-cta">
          <p className="yanol-connect-label">{label}</p>
          <h2 className="yanol-connect-title">{title}</h2>
          <p className="yanol-connect-desc">{description}</p>
          <Link href={href} className="yanol-btn-teal">
            {buttonLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
