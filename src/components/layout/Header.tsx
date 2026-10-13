"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  aboutLinks,
  navLinks,
  navSecondary,
  siteConfig,
} from "@/lib/site";
import { LanguageSelector } from "@/components/layout/LanguageSelector";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  function linkClass(href: string) {
    const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
    if (isHome) {
      return active
        ? "text-white font-bold text-xs uppercase tracking-wider transition-opacity"
        : "text-white/90 hover:text-white font-semibold text-xs uppercase tracking-wider transition-opacity";
    }
    return active ? "yanol-nav-link yanol-nav-link-active" : "yanol-nav-link";
  }

  const aboutActive = aboutLinks.some((l) => pathname === l.href);

  return (
    <header
      className={
        isHome
          ? "absolute top-0 left-0 right-0 z-50 bg-transparent transition-all"
          : "yanol-header yanol-header-default"
      }
    >
      <div className="yanol-container flex items-center justify-between gap-4 py-5 lg:py-6">
        {/* Brand Logo - Only SynVael */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5 group">
          {isHome ? (
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xs text-white shadow-xs border border-white/20 transition-transform group-hover:scale-105">
                <span className="text-lg font-black tracking-tighter">S</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-sans">
                SynVael
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--teal-600)] text-white shadow-xs transition-transform group-hover:scale-105">
                <span className="text-lg font-black tracking-tighter">S</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-[var(--ink)] font-sans">
                SynVael
              </span>
            </div>
          )}
        </Link>

        {/* Navigation Links */}
        <nav
          className="hidden items-center gap-3 xl:gap-3.5 2xl:gap-4.5 xl:flex"
          aria-label="Main navigation"
        >
          {!isHome && (
            <Link
              href="/"
              className={linkClass("/")}
              onClick={() => setAboutOpen(false)}
            >
              Home
            </Link>
          )}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
              onClick={() => setAboutOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              className={`inline-flex items-center gap-1 border-0 bg-transparent p-0 ${
                isHome
                  ? aboutActive
                    ? "text-white font-bold text-xs uppercase tracking-wider"
                    : "text-white/90 hover:text-white font-semibold text-xs uppercase tracking-wider"
                  : aboutActive
                  ? "yanol-nav-link yanol-nav-link-active"
                  : "yanol-nav-link"
              }`}
              aria-expanded={aboutOpen}
              aria-haspopup="true"
              onClick={() => setAboutOpen((v) => !v)}
            >
              About Us
              <ChevronDown className={`h-3.5 w-3.5 ${isHome ? "text-white" : ""}`} />
            </button>
            {aboutOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 min-w-[12rem] rounded-xl border border-[var(--border)] bg-white py-2 shadow-lg text-left">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium text-[var(--ink)] hover:bg-[#f7f3ee]"
                    onClick={() => setAboutOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navSecondary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
              onClick={() => setAboutOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSelector isHome={isHome} />
          <Link
            href="/contact"
            className={
              isHome
                ? "inline-flex items-center justify-center bg-white text-[#1a1f2e] font-bold text-xs uppercase tracking-wider rounded-full px-6 py-2.5 shadow-sm hover:bg-white/90 transition-all transform hover:-translate-y-0.5"
                : pathname === "/contact"
                ? "yanol-btn-contact ring-2 ring-[var(--teal-600)]/30"
                : "yanol-btn-contact"
            }
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className={`inline-flex rounded-lg border p-2 xl:hidden ${
            isHome ? "border-white/20 text-white" : "border-[var(--border)] text-[var(--ink)]"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          className={`border-t px-5 py-4 xl:hidden ${
            isHome
              ? "border-white/10 bg-[#288494] text-white"
              : "border-[var(--border)] bg-[#f5f3ed]"
          }`}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-3">
            {!isHome && (
              <li>
                <Link
                  href="/"
                  className="block py-1 text-sm font-semibold uppercase tracking-wider yanol-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
            )}
            {[...navLinks, ...aboutLinks, ...navSecondary].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-1 text-sm font-semibold uppercase tracking-wider ${
                    isHome ? "text-white" : "yanol-nav-link"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-1">
              <LanguageSelector isHome={isHome} isMobile />
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#1a1f2e] font-bold text-xs uppercase tracking-wider rounded-full px-6 py-3 shadow-sm hover:bg-white/90 transition-all mt-2 w-full"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
