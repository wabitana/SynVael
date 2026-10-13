"use client";

import Link from "next/link";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { siteConfig } from "@/lib/site";

const productLinks = [
  { href: "/products#holopresence", label: "HoloPresence™ Hologram" },
  { href: "/products#execuos", label: "ExecuOS™ Business OS" },
  { href: "/products#vaultmodel", label: "VaultModel™ Private AI" },
  { href: "/products#agentforge", label: "AgentForge™ Swarms" },
  { href: "/products#synchat", label: "SynChat Enterprise™" },
];

const serviceLinks = [
  { href: "/services#ai", label: "AI & Machine Learning" },
  { href: "/services#web", label: "Custom Software Development" },
  { href: "/services#mobile", label: "Mobile Applications" },
  { href: "/services#cloud", label: "Cloud Systems" },
  { href: "/services#consulting", label: "Technical & AI Consulting" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Team" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] bg-[#f0ebe3] pt-16 pb-12 text-[var(--ink)]"
      aria-label="Site footer"
    >
      <div className="yanol-container">
        {/* Main Columns Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="space-y-4 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link
              href="/"
              aria-label="SynVael home"
              className="inline-flex items-center gap-2.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--teal-600)] text-white shadow-xs">
                <span className="text-base font-black tracking-tighter">S</span>
              </div>
              <span className="text-xl font-black tracking-tight text-[var(--ink)] font-sans">
                SynVael
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-[var(--ink-muted)]">
              We design and engineer scalable AI models and enterprise software for teams that care about quality, performance, and innovation.
            </p>

            <div className="flex items-center gap-4 pt-1 text-sm font-semibold text-[var(--teal-600)]">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:underline"
              >
                LinkedIn
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:underline"
              >
                Facebook
              </a>
              <span className="text-slate-300">·</span>
              <a
                href="https://wa.me/251942497990"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* AI Products Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              AI Products
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--ink-muted)]">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[var(--teal-600)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--ink-muted)]">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[var(--teal-600)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--ink-muted)]">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[var(--teal-600)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border)] pt-8 text-sm text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> SynVael. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/terms"
              className="transition-colors hover:text-[var(--teal-600)]"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-[var(--teal-600)]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-[var(--teal-600)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

