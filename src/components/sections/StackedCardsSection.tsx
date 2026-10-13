"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  Bot,
  Cpu,
  ShieldCheck,
  Code2,
} from "lucide-react";

interface SubSection {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  activeIntegration: string;
}

interface StackCardData {
  id: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  topRimColor: string;
  rightCardBg: string;
  rightTitle: string;
  rightDesc: string;
  subSections: SubSection[];
}

const stackData: StackCardData[] = [
  // 1. Launch
  {
    id: "launch",
    tag: "Launch",
    tagBg: "#dcd8fc",
    tagColor: "#312e81",
    title: "Publish with Hosting, Domains & Growth Tools",
    description:
      "Launch your website instantly with fast hosting, custom domains, built-in SEO, analytics, and all the integrations you need to grow. SynVael handles the technical setup — hosting, SSL, DNS, indexing, and performance — so you can publish confidently and scale your business without plugins, servers, or complexity.",
    ctaText: "Get Started",
    ctaHref: "/start-a-project",
    topRimColor: "#1e293b",
    rightCardBg: "#d9dcfd",
    rightTitle: "Integrate Your Business Tools Effortlessly",
    rightDesc:
      "SynVael connects seamlessly with tools like Stripe, Shopify, Calendly, Mailchimp, Google Analytics, and Supabase. Add payments, ecommerce, scheduling, email marketing, and dynamic data without writing code.",
    subSections: [
      {
        id: "payments",
        label: "Payments",
        badge: "Instant Global Billing",
        title: "Stripe & Automated Checkout",
        description: "Zero-latency payment gateways, recurring subscriptions, and multi-currency payouts.",
        activeIntegration: "Stripe",
      },
      {
        id: "ecommerce",
        label: "E-Commerce",
        badge: "Real-Time Sync",
        title: "Shopify Storefronts & Catalogs",
        description: "Live product sync, inventory management, and automated fulfillment pipelines.",
        activeIntegration: "Shopify",
      },
      {
        id: "scheduling",
        label: "Scheduling",
        badge: "Automated Bookings",
        title: "Calendly Meeting Coordination",
        description: "Frictionless calendar booking, automated SMS/email reminders, and timezone routing.",
        activeIntegration: "Calendly",
      },
      {
        id: "analytics",
        label: "Analytics",
        badge: "Growth Telemetry",
        title: "Google Analytics & Mailchimp",
        description: "End-to-end conversion funnels, subscriber workflows, and live audience telemetry.",
        activeIntegration: "Google Analytics",
      },
    ],
  },

  // 2. HoloPresence
  {
    id: "hologram",
    tag: "HoloPresence",
    tagBg: "#ccf2f4",
    tagColor: "#0e7490",
    title: "Photorealistic 3D Volumetric Digital Humans",
    description:
      "Deploy photorealistic 3D digital human avatars that appear before users on physical holographic glass kiosks, reception displays, and spatial web platforms. Capable of real-time speech, eye contact, emotional facial expressions, and natural conversational dialogue with sub-180ms latency.",
    ctaText: "Explore Holograms",
    ctaHref: "/products#holopresence",
    topRimColor: "#0f86a1",
    rightCardBg: "#cbeef3",
    rightTitle: "Spatial Computer Vision & Audio Kinematics",
    rightDesc:
      "Engineered with neural gaze tracking, emotion recognition, and sub-180ms conversational cadence. Interactive across 40+ spoken languages with zero perceptible lag.",
    subSections: [
      {
        id: "volumetric",
        label: "3D Volumetric",
        badge: "Neural Mesh",
        title: "Photorealistic 3D Volumetric Mesh",
        description: "Dynamic facial kinematics, micro-expressions, and neural eye contact.",
        activeIntegration: "Spatial Vision",
      },
      {
        id: "voice",
        label: "Voice Cloning",
        badge: "Sub-180ms",
        title: "Real-Time Conversational Cadence",
        description: "Instant speech cloning with natural conversational interruptions.",
        activeIntegration: "Neural Audio",
      },
      {
        id: "kiosks",
        label: "Hardware Kiosks",
        badge: "Volumetric Glass",
        title: "Physical Holographic Glass Displays",
        description: "Turnkey optical holographic glass kiosks for corporate lobbies and retail.",
        activeIntegration: "Glass Display",
      },
      {
        id: "multilingual",
        label: "Polyglot",
        badge: "40+ Languages",
        title: "Global Multilingual Fluency",
        description: "Instant inflection, dialect switching, and live language translation.",
        activeIntegration: "Polyglot Engine",
      },
    ],
  },

  // 3. ExecuOS
  {
    id: "execuos",
    tag: "ExecuOS",
    tagBg: "#fedec2",
    tagColor: "#c25e1a",
    title: "AI Business OS: Custom AI CEO & CTO Swarms",
    description:
      "Run your company with intelligent autonomy. ExecuOS orchestrates custom executive agents — including an Autonomous AI CEO and Autonomous AI CTO — that make strategic forecasts, audit codebases, allocate capital, and delegate operations to departmental multi-agent swarms.",
    ctaText: "View ExecuOS™",
    ctaHref: "/products#execuos",
    topRimColor: "#f59e0b",
    rightCardBg: "#fde3ce",
    rightTitle: "Autonomous Executive Decision Hierarchy",
    rightDesc:
      "Coordinate cross-functional corporate agents with cryptographic verification, strict safety guardrails, audit logging, and daily holographic video briefings.",
    subSections: [
      {
        id: "ceo",
        label: "AI CEO",
        badge: "Aurora-7",
        title: "Autonomous Capital & Strategy",
        description: "Synthesizes market data, models cash-flow, and conducts holographic board syncs.",
        activeIntegration: "Aurora-7 CEO",
      },
      {
        id: "cto",
        label: "AI CTO",
        badge: "Nexus-9",
        title: "Architecture & Security Audits",
        description: "Audits code pull requests, enforces security compliance, and directs dev swarms.",
        activeIntegration: "Nexus-9 CTO",
      },
      {
        id: "swarms",
        label: "Agent Swarms",
        badge: "Multi-Agent",
        title: "Collaborative Swarm Workflows",
        description: "Departmental agent swarms query internal databases, ERPs, and run automated tasks.",
        activeIntegration: "Swarm Core",
      },
      {
        id: "holographic-brief",
        label: "Briefings",
        badge: "3D Hologram",
        title: "Holographic Executive Briefings",
        description: "Executive agents appear as interactive 3D holograms answering live queries.",
        activeIntegration: "HoloPresence OS",
      },
    ],
  },

  // 4. VaultModel
  {
    id: "vaultmodel",
    tag: "VaultModel",
    tagBg: "#d1f2e1",
    tagColor: "#15803d",
    title: "Private AI Model Building & Sovereign Training",
    description:
      "Enterprise foundry for proprietary foundation models and specialized domain LLMs. Built with complete data privacy: zero telemetry to external APIs, full weights ownership, tailored domain accuracy, and fast air-gapped on-premise GPU cluster inference.",
    ctaText: "Build Private Model",
    ctaHref: "/products#vaultmodel",
    topRimColor: "#10b981",
    rightCardBg: "#d6f5e3",
    rightTitle: "Air-Gapped Sovereign Neural Foundry",
    rightDesc:
      "Train, fine-tune, and host proprietary foundation models behind your corporate firewall with zero data leakage and 100% intellectual property ownership.",
    subSections: [
      {
        id: "sovereignty",
        label: "Zero Leakage",
        badge: "100% Private",
        title: "Complete Data Sovereignty",
        description: "Your proprietary training data never leaves your infrastructure or public LLMs.",
        activeIntegration: "Air-Gap Vault",
      },
      {
        id: "fine-tuning",
        label: "Fine-Tuning",
        badge: "RLHF Calibrated",
        title: "Custom Domain Fine-Tuning",
        description: "Tailored to your industry terminology, internal databases, and workflows.",
        activeIntegration: "Neural RLHF",
      },
      {
        id: "weights",
        label: "Weights",
        badge: "Full Ownership",
        title: "Complete Model Weights Ownership",
        description: "You receive raw PyTorch & GGUF model checkpoints outright with zero recurring fees.",
        activeIntegration: "Model Checkpoint",
      },
      {
        id: "gpu-cluster",
        label: "Inference",
        badge: "120+ T/s",
        title: "On-Premise GPU Inference",
        description: "Quantized for maximum throughput on local enterprise GPU servers.",
        activeIntegration: "GPU Foundry",
      },
    ],
  },

  // 5. Engineer
  {
    id: "engineer",
    tag: "Engineer",
    tagBg: "#fde2e4",
    tagColor: "#be123c",
    title: "Custom Software, Apps & Enterprise Systems",
    description:
      "We design and build tailored management systems, mobile applications, and web platforms based on how your business actually works — not generic software. Replacing manual paper and Excel with fast, error-free, automated digital workflows.",
    ctaText: "Scope Your System",
    ctaHref: "/start-a-project",
    topRimColor: "#f43f5e",
    rightCardBg: "#fce5e7",
    rightTitle: "Human-Centered Enterprise Architecture",
    rightDesc:
      "Action-based workflows, high operational clarity, enterprise security, and 99.9% uptime SLA designed for mission-critical operations across healthcare, transport, and finance.",
    subSections: [
      {
        id: "management-systems",
        label: "Custom ERP",
        badge: "Tailored Logic",
        title: "Custom Management Systems",
        description: "Inventory, finance, HR, and billing software crafted for your operations.",
        activeIntegration: "Core System",
      },
      {
        id: "web-mobile",
        label: "Web & Apps",
        badge: "Cross-Platform",
        title: "Web & Mobile Applications",
        description: "High-performance React, React Native, Next.js, and cloud backends.",
        activeIntegration: "Full Stack",
      },
      {
        id: "digitalization",
        label: "Automation",
        badge: "Zero Manual Work",
        title: "Business Process Digitalization",
        description: "Eliminate repetitive manual entry and connect fragmented software systems.",
        activeIntegration: "Workflow Engine",
      },
      {
        id: "ui-ux",
        label: "UI / UX",
        badge: "Design Systems",
        title: "Enterprise Design & Clarity",
        description: "Error-free workflows and fast team onboarding through human-centered design.",
        activeIntegration: "Figma System",
      },
    ],
  },
];

// Integrations metadata displayed in the floating badge
const integrationItems = [
  {
    name: "Stripe",
    category: "Payments",
    connected: true,
    color: "#635BFF",
    icon: (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.38.5 6.452.5 2.502 3.657 2.502 8.795c0 4.416 3.12 6.643 7.82 8.358 2.65.98 3.56 1.704 3.56 2.732 0 .991-.914 1.547-2.316 1.547-2.58 0-5.372-1.196-7.318-2.302l-.938 5.61C4.84 25.49 8.01 26.5 11.66 26.5c6.31 0 10.45-3.08 10.45-8.497 0-4.664-3.033-6.98-8.134-8.853z" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    category: "Storefront",
    connected: true,
    color: "#95BF47",
    icon: (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.98 5.86c-.05-.38-.34-.63-.67-.64-.32 0-3.37-.17-3.37-.17s-2.22-2.22-2.47-2.47c-.25-.25-.74-.17-.93-.07-.02.01-.4.21-.99.52L9.77 1.71c-.24-.24-.62-.21-.86.06L4.35 6.8c-.35.39-.34.98.03 1.35l7.15 7.15c.37.37.97.37 1.34 0l7.14-7.14c.37-.37.38-.97.03-1.35l-.06-.06z" />
      </svg>
    ),
  },
  {
    name: "Calendly",
    category: "Scheduling",
    connected: true,
    color: "#006BFF",
    icon: (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
      </svg>
    ),
  },
  {
    name: "Mailchimp",
    category: "Marketing",
    connected: false,
    color: "#FFE01B",
    icon: <span className="text-black font-black text-[10px]">M</span>,
  },
  {
    name: "Google Analytics®",
    category: "Telemetry",
    connected: false,
    color: "#F9AB00",
    icon: (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
  },
];

// Individual Card Component with its own active sub-section state
function StackCardItem({
  card,
  index,
  total,
}: {
  card: StackCardData;
  index: number;
  total: number;
}) {
  const [activeSubIdx, setActiveSubIdx] = useState(0);
  const activeSub = card.subSections[activeSubIdx] || card.subSections[0];

  // Top offset so previous cards' top rims peek out cleanly!
  const stickyTop = 72 + index * 14;
  const zIndex = (index + 1) * 10;
  const isLast = index === total - 1;

  return (
    <div
      id={`stack-card-${index}`}
      style={{
        top: `${stickyTop}px`,
        zIndex: zIndex,
      }}
      className={`sticky w-full rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[54px] rounded-b-[28px] sm:rounded-b-[36px] bg-[#fbf9f5] border-2 border-black/10 shadow-[0_-16px_50px_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300 ${
        isLast ? "mb-12" : "mb-[35vh] lg:mb-[45vh]"
      }`}
    >
      {/* Top Colored Rim Accent matching screenshot */}
      <div
        className="w-full h-2.5 transition-colors duration-300"
        style={{ backgroundColor: card.topRimColor }}
      />

      <div className="p-6 sm:p-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Highlighted Title with Pill Badge on first word matching screenshot */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-[#1a1f2e] tracking-tight leading-[1.18] font-sans">
              <span
                className="inline-block px-3.5 py-1 rounded-2xl font-black mr-2 align-baseline shadow-2xs transition-colors duration-300"
                style={{ backgroundColor: card.tagBg, color: card.tagColor }}
              >
                {card.tag}
              </span>
              — {card.title}
            </h3>

            {/* Body Paragraph */}
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed font-normal">
              {card.description}
            </p>

            {/* Primary CTA Button (Black Pill Button) */}
            <div className="pt-2">
              <Link
                href={card.ctaHref}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#000000] hover:bg-[#1f2937] text-white px-8 py-4 text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>{card.ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Interactive Column (Pastel Container with 4 Sub Animated Sections) */}
          <div className="lg:col-span-7">
            <div
              className="rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 relative overflow-hidden transition-colors duration-500 shadow-inner"
              style={{ backgroundColor: card.rightCardBg }}
            >
              {/* Header in Right Card matching screenshot */}
              <div className="mb-6">
                <h4 className="text-xl sm:text-2xl font-black text-[#1a1f2e] tracking-tight">
                  {card.rightTitle}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  {card.rightDesc}
                </p>
              </div>

              {/* 4 Sub Animated Sections (Pill Selector) */}
              <div className="mb-6">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#64748b] mb-2.5">
                  INTERACTIVE CAPABILITIES (SELECT TO PREVIEW):
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {card.subSections.map((sub, sIdx) => {
                    const isSubActive = sIdx === activeSubIdx;
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setActiveSubIdx(sIdx)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left flex flex-col cursor-pointer border ${
                          isSubActive
                            ? "bg-white text-[#1a1f2e] shadow-md border-black/10 scale-[1.02]"
                            : "bg-white/50 hover:bg-white/80 text-[#64748b] border-transparent"
                        }`}
                      >
                        <span className="text-[10px] font-mono text-[#0f86a1] uppercase">
                          0{sIdx + 1}
                        </span>
                        <span className="truncate">{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Sub-Section Animated Details Card (Vertical Bottom-to-Top Animation) */}
              <div className="mb-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xs border border-black/5 shadow-xs overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSub.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#0f86a1]/10 text-[#0f86a1]">
                          {activeSub.badge}
                        </span>
                        <p className="text-sm font-extrabold text-[#1a1f2e]">
                          {activeSub.title}
                        </p>
                      </div>
                      <p className="text-xs text-[#5c6478]">
                        {activeSub.description}
                      </p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0 ml-3 animate-pulse" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Interactive Visual Mockup with Popular Products + Floating Integrations Box */}
              <div className="relative rounded-2xl bg-white p-4 sm:p-6 border border-black/8 shadow-md overflow-hidden min-h-[220px]">
                
                {/* Underlying Product Store Grid Showcase (matching screenshot) */}
                <div className="opacity-90">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/5">
                    <div>
                      <p className="text-xs font-extrabold text-[#1a1f2e]">Popular Products &amp; Catalog</p>
                      <p className="text-[10px] text-[#717886]">Search among various products, tech devices, and subscriptions</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#0f86a1] uppercase tracking-wider">
                      Live Sync
                    </span>
                  </div>

                  {/* Store Items Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Item 1: Smart Watch */}
                    <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/5 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center text-xl mb-1.5 shadow-2xs">
                        ⌚
                      </div>
                      <p className="text-[10px] font-bold text-[#1a1f2e] truncate w-full">Smart Watch</p>
                      <p className="text-[9px] text-[#717886]">$299</p>
                    </div>

                    {/* Item 2: Controller */}
                    <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/5 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center text-xl mb-1.5 shadow-2xs">
                        🎮
                      </div>
                      <p className="text-[10px] font-bold text-[#1a1f2e] truncate w-full">Pro Controller</p>
                      <p className="text-[9px] text-[#717886]">$79</p>
                    </div>

                    {/* Item 3: Headphones */}
                    <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/5 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center text-xl mb-1.5 shadow-2xs">
                        🎧
                      </div>
                      <p className="text-[10px] font-bold text-[#1a1f2e] truncate w-full">Spatial Audio</p>
                      <p className="text-[9px] text-[#717886]">$199</p>
                    </div>
                  </div>
                </div>

                {/* Foreground Floating "Integrations Connected" Card (Vertical Bottom-to-Top entrance) */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="absolute right-3 top-3 bottom-3 w-48 sm:w-56 bg-white/98 backdrop-blur-md rounded-2xl p-3.5 border border-black/10 shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5">
                      <span className="text-[11px] font-extrabold text-[#1a1f2e]">
                        Integrations
                      </span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Connected
                      </span>
                    </div>

                    {/* Integrations List */}
                    <div className="space-y-1.5">
                      {integrationItems.map((item) => {
                        const isHighlighted =
                          item.name.toLowerCase().includes(activeSub.label.toLowerCase()) ||
                          (activeSub.activeIntegration &&
                            item.name.toLowerCase().includes(activeSub.activeIntegration.toLowerCase()));

                        return (
                          <div
                            key={item.name}
                            className={`flex items-center justify-between p-1.5 rounded-lg text-xs transition-colors ${
                              isHighlighted
                                ? "bg-[#0f86a1]/10 border border-[#0f86a1]/30"
                                : "hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className="h-5 w-5 rounded-md flex items-center justify-center shrink-0 shadow-2xs"
                                style={{ backgroundColor: item.color }}
                              >
                                {item.icon}
                              </div>
                              <span className="font-semibold text-[#1a1f2e] text-[11px]">
                                {item.name}
                              </span>
                            </div>

                            {item.connected ? (
                              <Check className="h-3.5 w-3.5 text-emerald-600" />
                            ) : (
                              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-black/5 text-[9px] text-[#717886] flex items-center justify-between">
                    <span>Active SynVael Pipeline</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export function StackedCardsSection() {
  const [activeStackIndex, setActiveStackIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Monitor scroll: show the 5-dot indicator ONLY while inside this section, and track active card
  useEffect(() => {
    const handleScroll = () => {
      // 1. Check if section is currently active/visible in viewport
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const inView =
          sectionRect.top <= window.innerHeight * 0.55 &&
          sectionRect.bottom >= window.innerHeight * 0.25;
        setIsSectionVisible(inView);
      }

      // 2. Track which card is active
      stackData.forEach((_, idx) => {
        const el = document.getElementById(`stack-card-${idx}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // When card is near the sticky top position
          if (rect.top <= 140 && rect.bottom > 140) {
            setActiveStackIndex(idx);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const el = document.getElementById(`stack-card-${index}`);
    if (el) {
      const topOffset = 72 + index * 14;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
      setActiveStackIndex(index);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 sm:py-20 bg-[#f7f3ee] text-[#1a1f2e] relative overflow-visible"
    >
      {/* 1. Pre-title Header (Centered) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0f86a1] mb-2.5 inline-block">
          SYNVAEL INTEGRATED ARCHITECTURE
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f2e] tracking-tight font-sans">
          Modular Intelligence Stacked for Scale
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-[#5c6478] max-w-3xl mx-auto leading-relaxed">
          Scroll down to watch each layer stack seamlessly on top of the other, building our modular cloud, AI digital humans, and autonomous executive systems.
        </p>
      </div>

      {/* 2. Floating 5-Dot Vertical Navigation (ONLY shown when inside the Stack on Top animation section) */}
      <AnimatePresence>
        {isSectionVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-60 hidden md:flex flex-col items-center gap-3 bg-white/95 backdrop-blur-md p-2 rounded-full border border-black/10 shadow-xl"
          >
            {stackData.map((s, idx) => {
              const isActive = idx === activeStackIndex;

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Scroll to ${s.tag} section (card ${idx + 1})`}
                  className="group relative p-1 cursor-pointer transition-all focus:outline-hidden"
                >
                  {isActive ? (
                    <motion.div
                      layoutId="activeStackDot"
                      className="h-7 w-2 rounded-full bg-[#1a1f2e] shadow-xs"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  ) : (
                    <div className="h-2 w-2 rounded-full bg-[#cbd5e1] group-hover:bg-[#1a1f2e]/60 transition-colors" />
                  )}

                  {/* Tooltip on hover */}
                  <span className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1a1f2e] text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap pointer-events-none shadow-md">
                    0{idx + 1} · {s.tag}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. FULL-WIDTH Stacking Cards Container */}
      <div className="w-full max-w-[1580px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative">
        {stackData.map((card, index) => (
          <StackCardItem
            key={card.id}
            card={card}
            index={index}
            total={stackData.length}
          />
        ))}
      </div>
    </section>
  );
}
