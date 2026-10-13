"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  Cpu,
  ShieldCheck,
  Code2,
  MessageSquareCode,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/layout/SiteShell";
import { synVaelProducts } from "@/lib/site";
import { StackedCardsSection } from "@/components/sections/StackedCardsSection";

export function ProductsPageContent() {
  return (
    <SiteShell>
      <div className="bg-[#f7f3ee]">
        {/* Products Page Hero */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden bg-[#102738] text-white pt-28 pb-20 lg:pt-36 lg:pb-28 border-b border-black/10"
        >
          <div className="yanol-container relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
              AI Products Built by SynVael — <br />
              <span className="text-[#f4c4a8]">
                Running The Autonomous Enterprise
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Groundbreaking systems engineered so businesses can be run by AI: <strong>AI Digital Human Interactive Holograms</strong>, <strong>AI Operating System for Business (Autonomous AI CEO &amp; CTO)</strong>, Custom Private Models, and Agentic Swarms.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#holopresence"
                className="inline-flex items-center gap-2 rounded-full bg-[#f4c4a8] hover:bg-[#ebd5c8] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#1a1f2e] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Explore AI Holograms</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#execuos"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white border border-white/20 transition-all hover:-translate-y-0.5"
              >
                <span>AI Business OS</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Stack on Top Animated Section (5 Stacked Sections with 4 Sub-Animated Sections) */}
        <StackedCardsSection />

        {/* Product 1: HoloPresence (AI Digital Human Interactive Hologram) */}
        <motion.section
          id="holopresence"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-20 lg:py-28 border-b border-black/5 bg-[#f8f5ee]"
        >
          <div className="yanol-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] tracking-tight">
                  SynVael HoloPresence™ <br />
                  <span className="text-[#0f86a1]">AI Digital Human Interactive Holograms</span>
                </h2>

                <p className="text-base sm:text-lg text-[#556070] leading-relaxed">
                  Photorealistic, volumetric 3D digital human avatars that see, listen, reason, and converse with humans with sub-180ms latency. Engineered for physical holographic kiosks, executive offices, high-traffic retail, and spatial web platforms.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-2xs">
                    <p className="text-xs font-mono font-bold text-[#0f86a1] uppercase">01 / Visual Realism</p>
                    <p className="mt-1 text-sm font-bold text-[#1a1f2e]">Photorealistic 3D Volumetric Mesh</p>
                    <p className="mt-1 text-xs text-[#556070]">Dynamic facial kinematics, micro-expressions, and neural eye contact.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-2xs">
                    <p className="text-xs font-mono font-bold text-[#0f86a1] uppercase">02 / Latency</p>
                    <p className="mt-1 text-sm font-bold text-[#1a1f2e]">Sub-180ms Conversational Latency</p>
                    <p className="mt-1 text-xs text-[#556070]">Instantaneous, conversational cadence with natural interruptions.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-2xs">
                    <p className="text-xs font-mono font-bold text-[#0f86a1] uppercase">03 / Vision</p>
                    <p className="mt-1 text-sm font-bold text-[#1a1f2e]">Spatial Gaze &amp; Emotion Intelligence</p>
                    <p className="mt-1 text-xs text-[#556070]">Tracks user gestures, facial moods, and physical spatial presence.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-2xs">
                    <p className="text-xs font-mono font-bold text-[#0f86a1] uppercase">04 / Polyglot</p>
                    <p className="mt-1 text-sm font-bold text-[#1a1f2e]">Global Multilingual Fluency</p>
                    <p className="mt-1 text-xs text-[#556070]">Natural voice inflection across 40+ spoken languages.</p>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <Link
                    href="/start-a-project"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1a1f2e] text-white px-7 py-3 text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md"
                  >
                    <span>Deploy Hologram For Your Enterprise</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-black/8 shadow-md aspect-video sm:aspect-[4/3] bg-slate-100">
                  <Image
                    src="/images/ai-digital-human-hologram.jpg"
                    alt="SynVael AI Digital Human Interactive Hologram"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-black/5 text-[#1a1f2e] shadow-lg">
                    <div>
                      <p className="text-xs font-bold text-[#1a1f2e]">HoloPresence™ Spatial Engine</p>
                      <p className="text-xs text-[#556070]">Interactive 3D Holographic Persona</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Product 2: ExecuOS (AI Business Operating System - AI CEO & AI CTO) */}
        <motion.section
          id="execuos"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-20 lg:py-28 border-b border-black/5 bg-[#f0ece5]"
        >
          <div className="yanol-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-black/8 shadow-md aspect-video sm:aspect-[4/3] bg-slate-100">
                  <Image
                    src="/images/ai-autonomous-business-os.jpg"
                    alt="SynVael AI ExecuOS Autonomous Business Operating System"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-black/5 text-[#1a1f2e] shadow-lg">
                    <div>
                      <p className="text-xs font-bold text-[#1a1f2e]">ExecuOS™ Executive Swarm</p>
                      <p className="text-xs text-[#556070]">Autonomous AI CEO &amp; CTO Orchestration</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[10px] font-bold uppercase tracking-wider border border-amber-200">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] tracking-tight">
                  SynVael ExecuOS™ <br />
                  <span className="text-[#0f86a1]">AI Business Operating System</span>
                </h2>

                <p className="text-base sm:text-lg text-[#556070] leading-relaxed">
                  Run your company with intelligent autonomy. ExecuOS orchestrates custom executive agents — including an <strong>Autonomous AI CEO</strong> and an <strong>Autonomous AI CTO</strong> — who coordinate operations, review codebases, and deliver briefings in the form of <strong>Interactive Digital Human Holograms</strong>.
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white border border-black/5 flex items-start gap-3">
                    <div className="h-7 w-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold text-xs">
                      👔
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1a1f2e]">Autonomous AI CEO Agent</p>
                      <p className="text-xs text-[#556070] mt-0.5">
                        Synthesizes market data, tracks enterprise cash-flow, sets resource allocation, and conducts holographic board briefings.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-black/5 flex items-start gap-3">
                    <div className="h-7 w-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 font-bold text-xs">
                      💻
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1a1f2e]">Autonomous AI CTO Agent</p>
                      <p className="text-xs text-[#556070] mt-0.5">
                        Audits code pull requests, enforces security compliance, manages cloud infrastructure, and directs developer agent swarms.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-black/5 flex items-start gap-3">
                    <div className="h-7 w-7 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 font-bold text-xs">
                      👤
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1a1f2e]">Holographic Executive Persona Projection</p>
                      <p className="text-xs text-[#556070] mt-0.5">
                        Each executive agent appears in high-fidelity 3D Holographic presence, answering questions live with realistic voice synthesis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/start-a-project"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1a1f2e] text-white px-7 py-3 text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md"
                  >
                    <span>Request ExecuOS Demonstration</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Product 3: VaultModel (Private AI Model Foundry) */}
        <motion.section
          id="vaultmodel"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-20 lg:py-28 border-b border-black/5 bg-[#f8f5ee]"
        >
          <div className="yanol-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] tracking-tight">
                  SynVael VaultModel™ <br />
                  <span className="text-[#0f86a1]">Private AI Model Building &amp; Training</span>
                </h2>

                <p className="text-base sm:text-lg text-[#556070] leading-relaxed">
                  Enterprise neural foundry for building, fine-tuning, and hosting proprietary AI foundation models. Guaranteed zero data leakage, complete model weights ownership, and air-gapped deployment for high-security enterprises.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-black/5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#1a1f2e]">100% Data Sovereignty &amp; Zero Leakage</p>
                      <p className="text-xs text-[#556070]">Your training data never leaves your infrastructure or touches commercial public LLMs.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-black/5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#1a1f2e]">Domain-Specific Quantization &amp; Distillation</p>
                      <p className="text-xs text-[#556070]">Calibrated for on-premise GPU servers delivering maximum throughput at minimal power.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-black/5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#1a1f2e]">Full Weights Ownership</p>
                      <p className="text-xs text-[#556070]">You own the PyTorch / GGUF model checkpoint files outright with zero ongoing licensing fees.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/start-a-project"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1a1f2e] text-white px-7 py-3 text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md"
                  >
                    <span>Build Your Private AI Model</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-black/8 shadow-md aspect-video sm:aspect-[4/3] bg-slate-100">
                  <Image
                    src="/images/private-ai-model-building.jpg"
                    alt="SynVael VaultModel Private AI Model Training Facility"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-black/5 text-[#1a1f2e] shadow-lg">
                    <div>
                      <p className="text-xs font-bold text-[#1a1f2e]">VaultModel™ Neural Foundry</p>
                      <p className="text-xs text-[#556070]">Air-gapped private cluster with zero telemetry</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                      Secure
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Complete Products Catalog Grid */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-20 lg:py-28 bg-[#f5f0e6] border-b border-black/5"
        >
          <div className="yanol-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0f86a1] mb-2 block">
                COMPLETE PRODUCT CATALOG
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] tracking-tight">
                All Products Engineered By SynVael &amp; SynVael AI
              </h2>
              <p className="mt-4 text-base text-[#556070]">
                Explore our full spectrum of AI products and custom software systems designed for enterprise scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {synVaelProducts.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 border border-black/6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex rounded-full bg-[#0f86a1]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#0f86a1] border border-[#0f86a1]/20">
                        {p.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#1a1f2e]">
                        {p.metric}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#1a1f2e] tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#0f86a1]">
                      {p.category}
                    </p>

                    <p className="mt-3 text-sm text-[#556070] leading-relaxed">
                      {p.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-black/5">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#1a1f2e] mb-2">
                        Core Capabilities:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#556070]">
                        {p.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0f86a1] shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-black/5">
                    <Link
                      href="/start-a-project"
                      className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#1a1f2e] hover:text-[#0f86a1] transition-colors"
                    >
                      <span>Inquire / Request Access</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Bottom CTA Banner */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-20 bg-gradient-to-r from-[#2d8a9a] via-[#3a95a5] to-[#7eb8c9] text-white text-center"
        >
          <div className="yanol-container max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to deploy SynVael AI products into your business?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/90">
              Speak directly with our technical architecture team or request a live Interactive Digital Human Hologram demonstration.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/start-a-project"
                className="rounded-full bg-white text-[#1a1f2e] font-extrabold text-xs uppercase tracking-widest px-8 py-4 shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-0.5"
              >
                REQUEST ENTERPRISE DEMO
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </SiteShell>
  );
}
