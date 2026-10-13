"use client";

import Link from "next/link";
import { ArrowRight, Bot, Cpu, ShieldCheck, Code2, MessageSquareCode, Layers } from "lucide-react";
import { synVaelProducts } from "@/lib/site";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function SynVaelProductsSuite() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-16 sm:py-24 bg-[#f4efe6] border-t border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0f86a1] mb-2 block">
              SYNVAEL &amp; SYNVAEL AI PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] tracking-tight">
              Our Products Suite
            </h2>
            <p className="mt-3 text-base text-[#5c6478] max-w-xl">
              Many products engineered by SynVael and SynVael AI — empowering enterprises with autonomous intelligence, custom software, and holographic avatars.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f86a1] hover:underline"
          >
            <span>View All Products &rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {synVaelProducts.map((p) => (
            <motion.div
              key={p.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
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

                <h3 className="text-xl font-extrabold text-[#1a1f2e] tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#0f86a1]">
                  {p.category}
                </p>

                <p className="mt-3 text-sm text-[#5c6478] leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-6 pt-4 border-t border-black/5">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#1a1f2e] mb-2">
                    Key Features:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#5c6478]">
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
                  href={p.href}
                  className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#1a1f2e] hover:text-[#0f86a1] transition-colors"
                >
                  <span>Explore Product</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
