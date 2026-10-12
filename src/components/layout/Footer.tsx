import Link from "next/link";
import Image from "next/image";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { siteConfig } from "@/lib/site";

const serviceLinks = [
  { href: "/services#ai", label: "AI & Machine Learning" },
  { href: "/services#web", label: "Custom Software Development" },
  { href: "/services#mobile", label: "Mobile Applications" },
  { href: "/services#cloud", label: "Cloud Systems" },
  { href: "/services#consulting", label: "Technical & AI Consulting" },
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "AI Products" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#f0ebe3] pt-16 pb-8" aria-label="Site footer">
      <div className="yanol-container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label="SynVael home" className="mb-4 inline-flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--teal-600)] text-white shadow-xs">
              <span className="text-base font-black tracking-tighter">S</span>
            </div>
            <span className="text-xl font-black tracking-tight text-[var(--ink)] font-sans">
              SynVael
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
            We design and engineer scalable AI models and enterprise software for teams that care about quality, performance, and innovation.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href={siteConfig.social.facebook} className="text-sm font-semibold text-[var(--teal-600)]">
              Facebook
            </Link>
            <Link href={siteConfig.social.linkedin} className="text-sm font-semibold text-[var(--teal-600)]">
              LinkedIn
            </Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-[var(--ink-muted)]">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--teal-600)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-[var(--ink-muted)]">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--teal-600)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2 text-sm text-[var(--ink-muted)]">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--teal-600)]">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-[var(--teal-600)]">
                {siteConfig.phone}
              </a>
            </li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <div className="yanol-container mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CopyrightYear /> SynVael. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:text-[var(--teal-600)]">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-[var(--teal-600)]">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
