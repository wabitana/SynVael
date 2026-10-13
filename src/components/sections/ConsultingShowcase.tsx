"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ConsultingShowcaseProps {
  kicker?: string;
  title?: string;
  description?: string;
  number?: string;
  imageSrc?: string;
}

export function ConsultingShowcase({
  kicker = "ADVISE",
  title = "Specialized Consulting",
  description = "Technical guidance for architecture, digital transformation, and process modernization with measurable outcomes.",
  number = "03",
  imageSrc = "/images/mobile_app_mockups.jpg",
}: ConsultingShowcaseProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-12 md:py-20 bg-[#f7f3ee]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Showcase Container */}
        <div className="relative w-full rounded-[32px] overflow-hidden bg-[#1ad1a5] p-6 sm:p-10 md:p-14 shadow-sm border border-black/5 min-h-[420px] sm:min-h-[500px] flex flex-col justify-between">
          {/* Background Illustration / Mobile UI Mockup Graphic */}
          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] rounded-2xl overflow-hidden flex items-center justify-center">
            <Image
              src={imageSrc}
              alt="Mobile app UI mockups showcase"
              fill
              priority
              className="object-cover object-center rounded-2xl transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Floating Info Card (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="relative md:absolute md:bottom-8 md:left-8 z-20 mt-6 md:mt-0 max-w-md w-full bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-7 shadow-2xl border border-black/5 transform transition-all duration-300 hover:shadow-3xl"
          >
            <span className="text-[11px] font-bold tracking-widest text-[#717886] uppercase mb-2 block">
              {kicker}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1f2e] tracking-tight mb-3 font-sans">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-[#5c6478] leading-relaxed mb-4 font-normal">
              {description}
            </p>
            <span className="text-xs font-bold text-[#0f86a1] tracking-wider block">
              {number}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
