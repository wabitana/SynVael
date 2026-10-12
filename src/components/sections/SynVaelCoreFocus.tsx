"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Code2, ArrowRight, CheckCircle2, Cpu, Globe, Smartphone, Database } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function SynVaelCoreFocus() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#fbf9f5] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0f86a1] mb-2 inline-block">
            SYNVAEL TECHNOLOGIES · COMPANY CORE FOCUS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] tracking-tight">
            Our Two Primary Strategic Pillars
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5c6478] leading-relaxed">
            SynVael focuses on engineering specialized intelligence and mission-critical digital systems for businesses that require precision, scale, and sovereignty.
          </p>
        </div>

        {/* The 2 Focus Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Focus 1: AI Model Building or Private AI Model Building/Training */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-[32px] bg-white p-8 sm:p-12 border border-black/8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f86a1]/10 text-[#0f86a1]">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <span className="text-xs font-mono font-bold text-[#0f86a1] uppercase tracking-wider bg-[#0f86a1]/5 px-3 py-1 rounded-full border border-[#0f86a1]/20">
                  Focus 01 · AI Intelligence
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1f2e] tracking-tight mb-4">
                AI Model Building &amp; Private AI Model Training
              </h3>

              <p className="text-sm sm:text-base text-[#5c6478] leading-relaxed mb-6">
                We design, train, and fine-tune custom AI models and private foundation models trained strictly on your organization&apos;s proprietary data. Guaranteed zero third-party data leakage, full weights sovereignty, and air-gapped on-premise GPU cluster deployment.
              </p>

              <div className="space-y-3 pt-2 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f5ee] border border-black/5">
                  <CheckCircle2 className="h-5 w-5 text-[#0f86a1] shrink-0" />
                  <span className="text-sm font-bold text-[#1a1f2e]">
                    Custom Foundation Models &amp; Domain-Specific LLMs
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f5ee] border border-black/5">
                  <CheckCircle2 className="h-5 w-5 text-[#0f86a1] shrink-0" />
                  <span className="text-sm font-bold text-[#1a1f2e]">
                    Private AI Training with 100% Data Sovereignty
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f5ee] border border-black/5">
                  <CheckCircle2 className="h-5 w-5 text-[#0f86a1] shrink-0" />
                  <span className="text-sm font-bold text-[#1a1f2e]">
                    Air-Gapped On-Premise GPU Hosting &amp; Quantization
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-[#1a1f2e] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md group"
            >
              <span>Build Private AI Model</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Focus 2: Custom Software Building (Websites, Apps, Systems) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-[32px] bg-white p-8 sm:p-12 border border-black/8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1a1f2e]/10 text-[#1a1f2e]">
                  <Code2 className="h-7 w-7" />
                </div>
                <span className="text-xs font-mono font-bold text-[#1a1f2e] uppercase tracking-wider bg-[#1a1f2e]/5 px-3 py-1 rounded-full border border-[#1a1f2e]/20">
                  Focus 02 · Engineering
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1f2e] tracking-tight mb-4">
                Custom Software Building: Websites, Apps &amp; Systems
              </h3>

              <p className="text-sm sm:text-base text-[#5c6478] leading-relaxed mb-6">
                From high-conversion corporate websites and complex SaaS applications to native iOS/Android mobile apps and high-concurrency microservices, we build custom software engineered precisely to your business workflows and growth requirements.
              </p>

              <div className="space-y-3 pt-2 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f5ee] border border-black/5">
                  <CheckCircle2 className="h-5 w-5 text-[#1a1f2e] shrink-0" />
                  <span className="text-sm font-bold text-[#1a1f2e]">
                    Custom Enterprise Websites &amp; Web Applications
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f5ee] border border-black/5">
                  <CheckCircle2 className="h-5 w-5 text-[#1a1f2e] shrink-0" />
                  <span className="text-sm font-bold text-[#1a1f2e]">
                    Native iOS &amp; Android Mobile Apps (React Native / Flutter)
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f5ee] border border-black/5">
                  <CheckCircle2 className="h-5 w-5 text-[#1a1f2e] shrink-0" />
                  <span className="text-sm font-bold text-[#1a1f2e]">
                    Mission-Critical Enterprise Systems &amp; Cloud Backends
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-[#0f86a1] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0c6b81] transition-all shadow-md group"
            >
              <span>Build Custom Software / App</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
