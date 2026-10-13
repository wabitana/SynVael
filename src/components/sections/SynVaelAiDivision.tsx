"use client";

import { useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

export function SynVaelAiDivision() {
  const [activeTab, setActiveTab] = useState<"hologram" | "business-os" | "private-models">("hologram");

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-20 lg:py-28 bg-[#f7f3ee] text-[#1a1f2e] relative overflow-hidden border-t border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sub-Company Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] tracking-tight font-sans">
            A Company Run by AI — <br />
            <span className="text-[#0f86a1]">
              Assisting People with Autonomous Products
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5c6478] leading-relaxed">
            <strong>SynVael AI</strong> is the dedicated AI products division of SynVael. We engineer cutting-edge products designed so companies can be run by AI: <strong>AI Digital Human Interactive Holograms</strong>, an <strong>AI Operating System for Business</strong> (custom agents, custom AI CEO &amp; CTO that appear as holograms), Custom Private Models, Agentic Swarms, and Custom AI Chatbots.
          </p>
        </motion.div>

        {/* Tab Controls for the 3 Key Showcases */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab("hologram")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === "hologram"
                ? "bg-[#1a1f2e] text-white shadow-sm"
                : "bg-white text-[#5c6478] hover:text-[#1a1f2e] border border-black/8 hover:bg-[#fbf9f5]"
            }`}
          >
            <Bot className="h-4 w-4" />
            <span>AI Digital Human Holograms</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("business-os")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === "business-os"
                ? "bg-[#1a1f2e] text-white shadow-sm"
                : "bg-white text-[#5c6478] hover:text-[#1a1f2e] border border-black/8 hover:bg-[#fbf9f5]"
            }`}
          >
            <Cpu className="h-4 w-4" />
            <span>AI Business OS (AI CEO &amp; CTO)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("private-models")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === "private-models"
                ? "bg-[#1a1f2e] text-white shadow-sm"
                : "bg-white text-[#5c6478] hover:text-[#1a1f2e] border border-black/8 hover:bg-[#fbf9f5]"
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Custom Private AI Models</span>
          </button>
        </div>

        {/* Active Tab Showcase Box with smooth AnimatePresence transition */}
        <div className="rounded-[32px] bg-white border border-black/8 p-8 sm:p-12 lg:p-14 shadow-sm mb-14 overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "hologram" && (
              <motion.div
                key="hologram"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                <div className="lg:col-span-6 space-y-5">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1f2e] tracking-tight">
                    AI Digital Human Interactive Holograms
                  </h3>
                  <p className="text-sm sm:text-base text-[#5c6478] leading-relaxed">
                    Photorealistic 3D digital human avatars that appear before users on physical holographic glass kiosks, reception displays, and spatial web platforms. Capable of real-time speech, eye contact, emotional facial expressions, and natural conversational dialogue with sub-180ms latency.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f7f3ee]/80 border border-black/5 text-xs sm:text-sm text-[#2a313d]">
                      <CheckCircle2 className="h-4 w-4 text-[#0f86a1] shrink-0 mt-0.5" />
                      <span>Real-time voice cloning, conversational cadence &amp; multi-lingual fluency (40+ languages)</span>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f7f3ee]/80 border border-black/5 text-xs sm:text-sm text-[#2a313d]">
                      <CheckCircle2 className="h-4 w-4 text-[#0f86a1] shrink-0 mt-0.5" />
                      <span>Spatial computer vision for gaze tracking, posture awareness, and emotional response</span>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f7f3ee]/80 border border-black/5 text-xs sm:text-sm text-[#2a313d]">
                      <CheckCircle2 className="h-4 w-4 text-[#0f86a1] shrink-0 mt-0.5" />
                      <span>Deployable in corporate lobbies, executive boardrooms, healthcare clinics, and retail</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <Link
                      href="/products#holopresence"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1a1f2e] hover:bg-black text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      <span>View HoloPresence™ Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-black/8 shadow-sm aspect-video sm:aspect-[4/3] bg-slate-100">
                    <Image
                      src="/images/ai-digital-human-hologram.jpg"
                      alt="AI Digital Human Interactive Hologram"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-md flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-[#1a1f2e]">HoloPresence™ Display Engine</p>
                        <p className="text-[11px] text-[#5c6478]">Sub-180ms real-time conversational streaming</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "business-os" && (
              <motion.div
                key="business-os"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                <div className="lg:col-span-6 space-y-5">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1f2e] tracking-tight">
                    AI Operating System for Business: Custom AI CEO &amp; CTO
                  </h3>
                  <p className="text-sm sm:text-base text-[#5c6478] leading-relaxed">
                    Run your company with intelligent autonomy. We build custom agents including an <strong>Autonomous AI CEO</strong> and an <strong>Autonomous AI CTO</strong> that make strategic forecasts, audit code, and delegate tasks to department swarms — with each agent appearing as an <strong>Interactive Digital Human Hologram</strong> for executive briefings.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f7f3ee]/80 border border-black/5 text-xs sm:text-sm text-[#2a313d]">
                      <CheckCircle2 className="h-4 w-4 text-[#0f86a1] shrink-0 mt-0.5" />
                      <span><strong>Autonomous AI CEO:</strong> Capital allocation, market predictions &amp; holographic briefings</span>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f7f3ee]/80 border border-black/5 text-xs sm:text-sm text-[#2a313d]">
                      <CheckCircle2 className="h-4 w-4 text-[#0f86a1] shrink-0 mt-0.5" />
                      <span><strong>Autonomous AI CTO:</strong> Software architecture reviews, security audits &amp; agent swarms</span>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f7f3ee]/80 border border-black/5 text-xs sm:text-sm text-[#2a313d]">
                      <CheckCircle2 className="h-4 w-4 text-[#0f86a1] shrink-0 mt-0.5" />
                      <span><strong>Hologram Presentation:</strong> Executive agents appear in photorealistic 3D holograms</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <Link
                      href="/products#execuos"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1a1f2e] hover:bg-black text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      <span>View ExecuOS™ Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-black/8 shadow-sm aspect-video sm:aspect-[4/3] bg-slate-100">
                    <Image
                      src="/images/ai-autonomous-business-os.jpg"
                      alt="Autonomous AI Business Operating System"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-md flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-[#1a1f2e]">ExecuOS™ Autonomous Swarm</p>
                        <p className="text-[11px] text-[#5c6478]">AI CEO &amp; AI CTO executive hierarchy</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[10px] font-bold uppercase tracking-wider border border-amber-200">
                        Autonomous
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "private-models" && (
              <motion.div
                key="private-models"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                <div className="lg:col-span-6 space-y-5">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1f2e] tracking-tight">
                    Custom Private AI Model Building &amp; Training
                  </h3>
                  <p className="text-sm sm:text-base text-[#5c6478] leading-relaxed">
                    Enterprise foundry for proprietary foundation models and specialized domain LLMs. Built with complete data privacy: zero telemetry to external APIs, full weights ownership, tailored domain accuracy, and fast on-premise GPU inference.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f7f3ee]/80 border border-black/5 text-xs sm:text-sm text-[#2a313d]">
                      <CheckCircle2 className="h-4 w-4 text-[#0f86a1] shrink-0 mt-0.5" />
                      <span>Proprietary data fine-tuning &amp; continuous RLHF alignment</span>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f7f3ee]/80 border border-black/5 text-xs sm:text-sm text-[#2a313d]">
                      <CheckCircle2 className="h-4 w-4 text-[#0f86a1] shrink-0 mt-0.5" />
                      <span>Air-gapped on-premise GPU cluster hosting with zero data leakage</span>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f7f3ee]/80 border border-black/5 text-xs sm:text-sm text-[#2a313d]">
                      <CheckCircle2 className="h-4 w-4 text-[#0f86a1] shrink-0 mt-0.5" />
                      <span>100% intellectual property &amp; model weights handoff to clients</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <Link
                      href="/products#vaultmodel"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1a1f2e] hover:bg-black text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      <span>View VaultModel™ Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-black/8 shadow-sm aspect-video sm:aspect-[4/3] bg-slate-100">
                    <Image
                      src="/images/private-ai-model-building.jpg"
                      alt="Private AI Model Training Facility"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-md flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-[#1a1f2e]">VaultModel™ Neural Foundry</p>
                        <p className="text-[11px] text-[#5c6478]">Air-gapped cluster with zero third-party telemetry</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                        Private
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4 Feature Columns: Agentic AI, Chatbots, Holograms, Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="p-7 rounded-2xl bg-white border border-black/8 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="h-11 w-11 rounded-xl bg-[#0f86a1]/10 text-[#0f86a1] flex items-center justify-center mb-4 group-hover:bg-[#0f86a1] group-hover:text-white transition-colors duration-300">
              <Bot className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-[#1a1f2e] mb-2 font-sans">AI Digital Human Holograms</h4>
            <p className="text-xs sm:text-sm text-[#5c6478] leading-relaxed">
              Photorealistic 3D avatars with conversational presence for kiosks, executive offices, and spatial applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="p-7 rounded-2xl bg-white border border-black/8 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="h-11 w-11 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
              <Cpu className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-[#1a1f2e] mb-2 font-sans">Custom AI Agents (CEO &amp; CTO)</h4>
            <p className="text-xs sm:text-sm text-[#5c6478] leading-relaxed">
              Autonomous executive agents that forecast capital, review codebases, and deliver holographic briefings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="p-7 rounded-2xl bg-white border border-black/8 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="h-11 w-11 rounded-xl bg-teal-500/10 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
              <Code2 className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-[#1a1f2e] mb-2 font-sans">Agentic AI Building</h4>
            <p className="text-xs sm:text-sm text-[#5c6478] leading-relaxed">
              Multi-agent swarms that collaborate, call tools, query databases, and execute complex business workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="p-7 rounded-2xl bg-white border border-black/8 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="h-11 w-11 rounded-xl bg-[#0f86a1]/10 text-[#0f86a1] flex items-center justify-center mb-4 group-hover:bg-[#0f86a1] group-hover:text-white transition-colors duration-300">
              <MessageSquareCode className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-[#1a1f2e] mb-2 font-sans">Custom AI Chatbots &amp; Solutions</h4>
            <p className="text-xs sm:text-sm text-[#5c6478] leading-relaxed">
              Omnichannel conversational bots with dynamic vector RAG, voice streaming, and enterprise integrations.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
