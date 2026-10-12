"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceScope {
  id: string;
  num: string;
  title: string;
  tags: string[];
  description: string;
  features: string[];
  outcomes: string[];
  bgTint: string;
}

const servicesData: ServiceScope[] = [
  {
    id: "custom-systems",
    num: "01",
    title: "Custom Management Systems",
    tags: ["REACT", "NODE.JS", "PYTHON", "POSTGRESQL", "MONGODB", "LARAVEL"],
    description:
      "We design and build tailored management systems based on how your business actually works — not generic software.",
    features: [
      "Business process analysis",
      "Pain point identification",
      "End-to-end system automation",
      "Inventory, finance, HR, and payroll systems",
    ],
    outcomes: [
      "Web-based",
      "Mobile-friendly",
      "Highly scalable",
      "Reduces manual and repetitive work",
      "Connects disconnected systems",
    ],
    bgTint: "#f7f4ee",
  },
  {
    id: "web-mobile",
    num: "02",
    title: "Web & Mobile Application Development",
    tags: ["REACT NATIVE", "FLUTTER", "VUE.JS", "AWS", "FIREBASE"],
    description:
      "Production-ready applications focused on data, workflows, and measurable business outcomes.",
    features: [
      "Secure data management",
      "Action-based workflows",
      "Tracking, reporting & dashboards",
      "Decision-support systems",
    ],
    outcomes: [
      "Built for real users",
      "Business-driven logic",
    ],
    bgTint: "#eaf4f8",
  },
  {
    id: "digitalization",
    num: "03",
    title: "Business Process Digitalization",
    tags: ["WORKFLOW AUTOMATION", "API INTEGRATION", "CLOUD SERVICES"],
    description:
      "We eliminate inefficient manual workflows and replace them with fast, reliable digital systems.",
    features: [
      "Replace paper files",
      "Replace Excel-based operations",
      "Remove repetitive manual work",
    ],
    outcomes: [
      "Faster operations",
      "Fewer errors",
      "Higher productivity",
    ],
    bgTint: "#f3edf7",
  },
  {
    id: "ui-ux",
    num: "04",
    title: "UI/UX Design for Management Systems",
    tags: ["FIGMA", "USER RESEARCH", "PROTOTYPING", "DESIGN SYSTEMS"],
    description:
      "Human-centered interfaces designed for high operational clarity, fast onboarding, and error-free workflows.",
    features: [
      "User role & task analysis",
      "Interactive high-fidelity prototypes",
      "Enterprise design systems & UI kits",
      "Usability testing & refinement",
    ],
    outcomes: [
      "Reduced training time",
      "Faster task completion",
      "Higher team satisfaction",
    ],
    bgTint: "#fcefe6",
  },
  {
    id: "upgrade-opt",
    num: "05",
    title: "System Upgrade & Optimization",
    tags: ["LEGACY MODERNIZATION", "PERFORMANCE", "DEV OPS", "CLOUD MIGRATION"],
    description:
      "Upgrade legacy codebases, integrate modern capabilities, and optimize cloud infrastructure for speed and stability.",
    features: [
      "Legacy code refactoring & migration",
      "Database query & speed optimization",
      "Automated CI/CD pipelines",
    ],
    outcomes: [
      "Zero data loss migration",
      "Up to 10x speed boost",
      "Lower cloud hosting costs",
    ],
    bgTint: "#eef6f2",
  },
];

export function ServiceExplorer() {
  const [activeIdx, setActiveIdx] = useState(2); // Default to 03 Business Process Digitalization as in image 2
  const activeService = servicesData[activeIdx];

  return (
    <section className="w-full py-16 md:py-24 bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag Pill */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0f86a1] bg-white rounded-full border border-black/10 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#0f86a1]" />
            SERVICE EXPLORER
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1f2e] mb-10 max-w-4xl font-sans">
          Choose a service and inspect the delivery scope
        </h2>

        {/* Side-by-Side Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Sidebar Menu */}
          <div className="w-full lg:w-[45%] flex flex-col gap-2.5 shrink-0">
            {servicesData.map((service, idx) => {
              const isActive = idx === activeIdx;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative cursor-pointer transition-all duration-300 rounded-2xl p-5 md:p-6 flex items-center justify-between ${
                    isActive
                      ? "bg-white shadow-md border border-black/5"
                      : "bg-transparent hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span
                      className={`text-xs font-bold transition-colors ${
                        isActive ? "text-[#717886]" : "text-[#b0b5c0]"
                      }`}
                    >
                      {service.num}
                    </span>
                    <h3
                      className={`text-xl md:text-2xl font-bold leading-tight transition-colors ${
                        isActive ? "text-[#1a1f2e]" : "text-[#a0a5b2] group-hover:text-[#4a505e]"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <ChevronRight
                    className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                      isActive
                        ? "text-[#0f86a1] opacity-100 translate-x-0"
                        : "text-[#b0b5c0] opacity-50 group-hover:opacity-100"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Detail Card */}
          <div className="w-full lg:w-[55%] grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ backgroundColor: activeService.bgTint }}
                className="rounded-3xl p-7 sm:p-9 md:p-10 border border-black/5 shadow-xs transition-colors duration-500 min-h-[440px] flex flex-col justify-between"
              >
                <div>
                  {/* Tech Tag Pills */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {activeService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-[#0f86a1] uppercase shadow-2xs border border-black/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-[#2a313d] font-normal leading-relaxed mb-8">
                    {activeService.description}
                  </p>

                  {/* Features & Outcomes Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    {/* Features Column */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#717886] mb-4">
                        FEATURES
                      </h4>
                      <ul className="space-y-3">
                        {activeService.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm md:text-base font-normal text-[#2a313d]">
                            <span className="text-[#0f86a1] font-bold text-base leading-none">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes Column */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#717886] mb-4">
                        OUTCOMES
                      </h4>
                      <ul className="space-y-3">
                        {activeService.outcomes.map((out, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm md:text-base font-normal text-[#2a313d]">
                            <span className="text-[#0f86a1] font-bold text-base leading-none">•</span>
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/start-a-project"
                    className="inline-flex items-center justify-center bg-[#f4c4a8] hover:bg-[#ebd5c8] text-[#1a1f2e] font-bold text-xs uppercase tracking-widest rounded-full px-9 py-4 shadow-2xs transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    DISCUSS THIS SERVICE
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
