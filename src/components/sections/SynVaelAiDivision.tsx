"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  Cpu,
  ShieldCheck,
  Code2,
  MessageSquareCode,
  ArrowRight,
  Radio,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function SynVaelAiDivision() {
  const [activeTab, setActiveTab] = useState<"hologram" | "business-os" | "private-models">("hologram");

  return (
    <section className="w-full py-20 lg:py-28 bg-[#091522] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sub-Company Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 px-4 py-1.5 text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            SYNVAEL AI · SUB-COMPANY OF SYNVAEL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            A Company Run by AI — <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-[#f4c4a8] bg-clip-text text-transparent">
              Assisting People with Autonomous Products
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            <strong>SynVael AI</strong> is the dedicated AI products division of SynVael. We engineer cutting-edge products designed so companies can be run by AI: <strong>AI Digital Human Interactive Holograms</strong>, an <strong>AI Operating System for Business</strong> (custom agents, custom AI CEO &amp; CTO that appear as holograms), Custom Private Models, Agentic Swarms, and Custom AI Chatbots.
          </p>
        </div>

        {/* Tab Controls for the 3 Key Visual Showcases */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab("hologram")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "hologram"
                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>AI Digital Human Holograms</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("business-os")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "business-os"
                ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
            }`}
          >
            <Cpu className="h-4 w-4" />
            <span>AI Business OS (AI CEO &amp; CTO)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("private-models")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "private-models"
                ? "bg-teal-400 text-black shadow-lg shadow-teal-400/20"
                : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Custom Private AI Models</span>
          </button>
        </div>

        {/* Active Tab Showcase Box */}
        <div className="rounded-[36px] border border-cyan-500/30 bg-[#0d1e2e]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl mb-16">
          {activeTab === "hologram" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/20 text-cyan-300 text-xs px-3.5 py-1 font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  FLAGSHIP PRODUCT · VOLUMETRIC SPATIAL
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  AI Digital Human Interactive Holograms
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Photorealistic 3D digital human avatars that appear before users on physical holographic glass kiosks, reception displays, and spatial web platforms. Capable of real-time speech, eye contact, emotional facial expressions, and natural conversational dialogue with sub-180ms latency.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-cyan-500/20 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>Real-time voice cloning, conversational cadence &amp; multi-lingual fluency (40+ languages)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-cyan-500/20 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>Spatial computer vision for gaze tracking, posture awareness, and emotional response</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-cyan-500/20 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>Deployable in corporate lobbies, executive boardrooms, healthcare clinics, and retail</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/products#holopresence"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>View HoloPresence™ Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-cyan-400/40 shadow-[0_0_40px_rgba(6,182,212,0.25)] aspect-video sm:aspect-[4/3]">
                  <Image
                    src="/images/ai-digital-human-hologram.jpg"
                    alt="AI Digital Human Interactive Hologram"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 border border-cyan-400/30 text-white backdrop-blur-md flex items-center justify-between text-xs">
                    <span className="font-mono text-cyan-300 font-bold">LIVE HOLOGRAM VOLUMETRIC STREAM</span>
                    <span className="text-[10px] text-slate-300">180ms Latency</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "business-os" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 text-amber-300 text-xs px-3.5 py-1 font-mono">
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                  AUTONOMOUS ENTERPRISE · EXECUOS™
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  AI Operating System for Business: Custom AI CEO &amp; CTO
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Run your company with intelligent autonomy. We build custom agents including an <strong>Autonomous AI CEO</strong> and an <strong>Autonomous AI CTO</strong> that make strategic forecasts, audit code, and delegate tasks to department swarms — with each agent appearing as an <strong>Interactive Digital Human Hologram</strong> for executive briefings.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-amber-500/20 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span><strong>Autonomous AI CEO:</strong> Capital allocation, market predictions &amp; holographic briefings</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-amber-500/20 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span><strong>Autonomous AI CTO:</strong> Software architecture reviews, security audits &amp; agent swarms</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-amber-500/20 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span><strong>Hologram Presentation:</strong> Executive agents appear in photorealistic 3D holograms</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/products#execuos"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>View ExecuOS™ Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-amber-400/40 shadow-[0_0_40px_rgba(251,191,36,0.2)] aspect-video sm:aspect-[4/3]">
                  <Image
                    src="/images/ai-autonomous-business-os.jpg"
                    alt="Autonomous AI Business Operating System"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 border border-amber-400/30 text-white backdrop-blur-md flex items-center justify-between text-xs">
                    <span className="font-mono text-amber-300 font-bold">AI CEO (Aurora-7) · AI CTO (Nexus-9)</span>
                    <span className="text-[10px] text-slate-300">96.2% Autonomy</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "private-models" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-400/20 text-teal-300 text-xs px-3.5 py-1 font-mono">
                  <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                  AIR-GAPPED SOVEREIGNTY · VAULTMODEL™
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  Custom Private AI Model Building &amp; Training
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Enterprise foundry for proprietary foundation models and specialized domain LLMs. Built with complete data privacy: zero telemetry to external APIs, full weights ownership, tailored domain accuracy, and fast on-premise GPU inference.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-teal-500/20 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                    <span>Proprietary data fine-tuning &amp; continuous RLHF alignment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-teal-500/20 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                    <span>Air-gapped on-premise GPU cluster hosting with zero data leakage</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-teal-500/20 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                    <span>100% intellectual property &amp; model weights handoff to clients</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/products#vaultmodel"
                    className="inline-flex items-center gap-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-black px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>View VaultModel™ Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-teal-400/40 shadow-[0_0_40px_rgba(45,212,191,0.2)] aspect-video sm:aspect-[4/3]">
                  <Image
                    src="/images/private-ai-model-building.jpg"
                    alt="Private AI Model Training Facility"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 border border-teal-400/30 text-white backdrop-blur-md flex items-center justify-between text-xs">
                    <span className="font-mono text-teal-300 font-bold">100% PRIVATE NEURAL FOUNDRY</span>
                    <span className="text-[10px] text-slate-300">Zero Leakage</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4 Feature Columns: Agentic AI, Chatbots, Holograms, Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#0d1e2e] border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-4">
              <Sparkles className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">AI Digital Human Holograms</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Photorealistic 3D avatars with conversational presence for kiosks, executive offices, and spatial applications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1e2e] border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-4">
              <Bot className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Custom AI Agents (CEO &amp; CTO)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Autonomous executive agents that forecast capital, review codebases, and deliver holographic briefings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1e2e] border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <div className="h-10 w-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4">
              <Code2 className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Agentic AI Building</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Multi-agent swarms that collaborate, call tools, query databases, and execute complex business workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1e2e] border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <div className="h-10 w-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-4">
              <MessageSquareCode className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Custom AI Chatbots &amp; Solutions</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Omnichannel conversational bots with dynamic vector RAG, voice streaming, and enterprise integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
