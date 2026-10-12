"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { ServiceExplorer } from "@/components/sections/ServiceExplorer";
import { ConsultingShowcase } from "@/components/sections/ConsultingShowcase";

const partners = [
  { name: "Ride Ethiopia", tag: "Mobility & Transport", logo: "/images/logos/ride-ethiopia.png" },
  { name: "Kifiya", tag: "Financial Tech", logo: "/images/logos/kifiya.svg" },
  { name: "Abay Bank", tag: "Banking & Finance", logo: "/images/logos/abay-bank.png" },
  { name: "Green Coffee", tag: "Agri Export", logo: "/images/logos/green-coffee.png" },
  { name: "Nova Retail", tag: "Retail & Commerce", logo: "/images/logos/nova-retail.png" },
];

const growthStats = [
  { value: "25+", label: "Production systems and AI-powered solutions delivered." },
  { value: "15+", label: "Organizations and businesses supported through SynVael solutions." },
  { value: "4+", label: "Years of company growth across enterprise AI, software development, cloud, and digital transformation." },
  { value: "6+", label: "Industries served through specialized AI and software platforms." },
];

const headlineStats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "24/7", label: "Active Support" },
  { value: "40x", label: "Avg. ROI" },
];

const ecosystem = [
  {
    title: "Health & Enterprise Sector",
    desc: "Comprehensive AI and software platforms featuring intelligent analytics, automated workflows, and enterprise data management.",
  },
  {
    title: "Scalable Systems",
    desc: "70K+ · Daily active transactions processed seamlessly",
  },
];

const testimonials = [
  {
    quote:
      "SynVael transformed our digital infrastructure and AI capabilities. Their engineering precision and attention to detail are unmatched.",
    name: "Abebe Kasahun",
    role: "Lead Architect · Design Hub",
    avatar: "/circle/ava-01.png",
  },
  {
    quote:
      "The custom AI and software solution built by SynVael is intuitive and robust. It handled our peak load without a single glitch.",
    name: "Sara Tekle",
    role: "Project Manager · EventPro Solutions",
    avatar: "/circle/ava-02.png",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="yanol-hero yanol-hero-home pt-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="yanol-hero-copy pt-4 lg:pt-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="yanol-hero-title"
          >
            SynVael
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="yanol-hero-sub"
          >
            AI &amp; Software Engineering
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="yanol-hero-lead"
          >
            We engineer intelligent AI models and high-performance software for ambitious enterprises
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="yanol-hero-code"
          >
            {"//From custom AI algorithms to scalable cloud software, we build systems that move industries forward"}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="yanol-hero-actions"
          >
            <Link href="/start-a-project" className="yanol-btn-launch">
              Launch Project
            </Link>
            <Link href="/contact" className="yanol-btn-demo">
              Book a Demo
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="yanol-hero-art relative z-10 -mt-6 lg:-mt-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/circle/hero_illustr.svg"
              alt="Illustration of a professional working on a laptop"
              width={760}
              height={760}
              className="yanol-hero-illustr relative z-[1] transform -translate-y-6 lg:-translate-y-12 scale-110 lg:scale-125"
              priority
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/circle/hero_illustr-plane.svg"
              alt=""
              width={110}
              height={110}
              className="yanol-hero-plane"
              aria-hidden
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Gradient Partner & Stats Banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="w-full relative pt-12 pb-20 md:pb-24 rounded-b-[48px] md:rounded-bl-[64px] md:rounded-br-[40px] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #328a99 0%, #5ba7b5 18%, #a8cad4 38%, #e8ddd4 62%, #f1cdb8 82%, #f4c4a8 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#1a1f2e]/90">
            BUILDING SYSTEMS FOR BUSINESSES THAT ARE READY TO GROW
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mb-12 items-center justify-between px-2 sm:px-6"
          >
            {partners.slice(0, 4).map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUpItem}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3.5 bg-white/30 backdrop-blur-xs p-3 rounded-2xl border border-white/40 shadow-2xs group transition-all"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-2xs transition-transform group-hover:scale-105">
                  <Image src={p.logo} alt={p.name} width={40} height={40} className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#1a1f2e] tracking-tight leading-tight">{p.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#3d4656] mt-0.5">{p.tag}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#f8f5ee] rounded-3xl md:rounded-[40px] p-8 sm:p-10 lg:p-14 shadow-lg border border-black/5"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
            >
              {growthStats.map((stat) => (
                <motion.div key={stat.value} variants={fadeUpItem} className="flex flex-col items-center text-center">
                  <div className="relative flex items-center justify-center mb-6 w-full">
                    <span className="h-2 w-2 rounded-full bg-[#1a1f2e] mr-3 shrink-0" />
                    <div className="relative flex h-24 w-28 sm:h-28 sm:w-32 items-center justify-center rounded-[40%_60%_70%_30%/50%_60%_40%_50%] bg-[#f4c4a8]/90 shadow-2xs">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] tracking-tight font-sans">
                        {stat.value}
                      </span>
                      <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full border-2 border-[#1a1f2e] bg-white shadow-2xs" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5c6478] leading-relaxed text-center font-medium max-w-[220px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="yanol-section yanol-section-cream py-16 lg:py-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Enlarged Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative w-full max-w-xl lg:max-w-2xl">
                <Image
                  src="/circle/computer-couch.png"
                  alt="Illustration of engineer working on laptop in armchair"
                  width={760}
                  height={680}
                  className="w-full h-auto object-contain transform scale-105"
                  priority
                />
              </div>
            </motion.div>

            {/* Right Column: What We Do Copy & 3 Step Items */}
            <div className="lg:col-span-6 relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1c2333] tracking-tight"
              >
                What We Do
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed mb-12 max-w-xl"
              >
                Comprehensive digital solutions tailored to your business needs.
              </motion.p>

              <div className="relative space-y-12 sm:space-y-16">
                {/* Arrow 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.9, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="hidden sm:block absolute right-0 lg:-right-4 top-2 pointer-events-none z-10"
                >
                  <svg width="80" height="160" viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-44 opacity-90">
                    <path d="M 10 10 C 70 25 75 105 18 145" stroke="#3C8AAC" strokeWidth="1.6" strokeDasharray="6 6" fill="none" />
                    <path d="M 30 130 L 17 146 L 30 148" stroke="#3C8AAC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </motion.div>

                {/* Arrow 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.9, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="hidden sm:block absolute -left-10 lg:-left-12 top-[135px] lg:top-[145px] pointer-events-none z-10"
                >
                  <svg width="80" height="160" viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-44 opacity-90">
                    <path d="M 70 10 C 10 25 5 105 62 145" stroke="#3C8AAC" strokeWidth="1.6" strokeDasharray="6 6" fill="none" />
                    <path d="M 50 135 L 64 146 L 62 128" stroke="#3C8AAC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </motion.div>

                {/* Arrow 3 + Paper Plane */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.9, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="hidden sm:block absolute -right-6 lg:-right-10 top-[275px] pointer-events-none z-10"
                >
                  <svg width="120" height="160" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-40 opacity-90">
                    <path d="M 10 10 C 100 25 105 90 45 135" stroke="#3C8AAC" strokeWidth="1.6" strokeDasharray="6 6" fill="none" />
                    <g transform="translate(15, 115) scale(0.6)">
                      <path d="M40.4569 155.057L1.57812 201.235L40.7996 196.192L40.4569 155.057Z" fill="#3C8AAC" />
                      <path d="M1.57812 201.235L40.571 168.921L51.2124 183.14L40.6394 176.694L1.57812 201.235Z" fill="#3C8AAC" />
                      <path d="M40.727 187.129L51.2146 183.139L40.6416 176.693L40.727 187.129Z" fill="#3C8AAC" />
                      <path d="M12.9531 194.376L41.0713 177.434L50.2348 182.588" stroke="#1B1B1B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M40.7996 196.192L1.57812 201.235L22.7894 176.043" stroke="#1B1B1B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </motion.div>

                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative flex items-start gap-5 pr-14 sm:pr-20 lg:pr-24"
                >
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <Image
                      src="/circle/step_numb-01.svg"
                      alt=""
                      width={56}
                      height={56}
                      className="absolute inset-0 h-full w-full object-contain"
                      aria-hidden
                    />
                    <span className="relative z-10 text-sm font-extrabold text-white">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1c2333]">
                      Software Development
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#556070] leading-relaxed">
                      Custom web and mobile solutions that map directly to your operational workflows and growth goals.
                    </p>
                    <Link
                      href="/services"
                      className="mt-3 inline-flex items-center text-sm font-bold text-[#3c8aac] hover:underline"
                    >
                      Explore Software Development &rarr;
                    </Link>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="relative flex items-start gap-5 pr-14 sm:pr-20 lg:pr-24"
                >
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <Image
                      src="/circle/step_numb-02.svg"
                      alt=""
                      width={56}
                      height={56}
                      className="absolute inset-0 h-full w-full object-contain"
                      aria-hidden
                    />
                    <span className="relative z-10 text-sm font-extrabold text-white">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1c2333]">
                      Back-Office &amp; IT Support
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#556070] leading-relaxed">
                      Continuous support, maintenance, and optimization that keep systems stable while your team scales.
                    </p>
                    <Link
                      href="/services"
                      className="mt-3 inline-flex items-center text-sm font-bold text-[#3c8aac] hover:underline"
                    >
                      Explore Back-Office &amp; IT Support &rarr;
                    </Link>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative flex items-start gap-5 pr-14 sm:pr-20 lg:pr-24"
                >
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <Image
                      src="/circle/step_numb-03.svg"
                      alt=""
                      width={56}
                      height={56}
                      className="absolute inset-0 h-full w-full object-contain"
                      aria-hidden
                    />
                    <span className="relative z-10 text-sm font-extrabold text-white">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1c2333]">
                      Specialized Consulting
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#556070] leading-relaxed">
                      Technical guidance for architecture, digital transformation, and process modernization with measurable outcomes.
                    </p>
                    <Link
                      href="/services"
                      className="mt-3 inline-flex items-center text-sm font-bold text-[#3c8aac] hover:underline"
                    >
                      Explore Specialized Consulting &rarr;
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Headline Stats Banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="w-full bg-[#f8f5ee] py-14 sm:py-20 border-t border-b border-black/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-between"
          >
            {headlineStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUpItem} className="flex flex-col items-center text-center">
                <div className="relative flex items-center justify-center mb-6 w-full">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#1b1b1b] mr-3 sm:mr-4 shrink-0" />
                  <div className="relative flex h-24 w-28 sm:h-30 sm:w-36 items-center justify-center rounded-[42%_58%_70%_30%/45%_55%_45%_55%] bg-[#f4c4a8]/90 shadow-2xs">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1b1b1b] tracking-tight font-sans">
                      {stat.value}
                    </span>
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full border-2 border-[#1b1b1b] bg-[#f8f5ee] shadow-2xs" />
                  </div>
                </div>
                <p className="text-sm sm:text-base font-semibold text-[#5c6478] tracking-tight text-center">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <ServiceExplorer />

      {/* Ready to Build / Sectors Showcase Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="w-full bg-[#f7f3ee] py-16 sm:py-24 border-t border-black/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] tracking-tight mb-8 font-sans"
          >
            Ready to build something extraordinary?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto max-w-4xl my-6"
          >
            <Image
              src="/images/sectors.png"
              alt="Industry sectors illustration with VR engineer"
              width={1000}
              height={560}
              className="w-full h-auto object-contain mx-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center bg-[#f4c4a8] hover:bg-[#ebd5c8] text-[#1a1f2e] font-bold text-xs uppercase tracking-widest rounded-full px-10 py-4 shadow-2xs transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
            >
              START A PROJECT
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <ConsultingShowcase />

      {/* Portfolio Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="yanol-section yanol-section-cream"
      >
        <div className="yanol-container">
          <h2 className="yanol-heading text-center">Our Portfolio</h2>
          <p className="yanol-subheading mx-auto text-center">
            Real-world systems we build to streamline operations, improve visibility, and scale
            businesses. Each project is crafted with precision and purpose.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {["Smart Garage Management", "Construction Project Management", "Healthcare Platform"].map(
              (title) => (
                <motion.div key={title} variants={fadeUpItem}>
                  <Link
                    href="/projects"
                    className="block rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 aspect-video rounded-xl bg-gradient-to-br from-[#cfe9fa] to-[#f4c4a8]" />
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2 text-sm text-[var(--ink-muted)]">View project details →</p>
                  </Link>
                </motion.div>
              ),
            )}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid gap-6 text-center sm:grid-cols-3"
          >
            <motion.div variants={fadeUpItem}>
              <p className="text-3xl font-extrabold text-[var(--teal-600)]">25+</p>
              <p className="text-sm text-[var(--ink-muted)]">Total Projects</p>
            </motion.div>
            <motion.div variants={fadeUpItem}>
              <p className="text-3xl font-extrabold text-[var(--teal-600)]">8+</p>
              <p className="text-sm text-[var(--ink-muted)]">Categories</p>
            </motion.div>
            <motion.div variants={fadeUpItem}>
              <p className="text-3xl font-extrabold text-[var(--teal-600)]">98%</p>
              <p className="text-sm text-[var(--ink-muted)]">Success Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Ecosystem Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="yanol-section bg-white"
      >
        <div className="yanol-container">
          <h2 className="yanol-heading text-center">SynVael Group Ecosystem</h2>
          <p className="yanol-subheading mx-auto text-center">
            Connecting every part of the digital engineering system across industries and platforms.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {ecosystem.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                variants={fadeUpItem}
                className="rounded-2xl border border-[var(--border)] p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="yanol-section yanol-section-cream pb-24"
      >
        <div className="yanol-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 flex flex-wrap justify-center gap-6 lg:gap-10"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUpItem}
                whileHover={{ scale: 1.02, rotate: i === 0 ? -1 : 1 }}
                className="yanol-testimonial-card"
                style={{ transform: i === 0 ? "rotate(-3deg)" : "rotate(3deg)" }}
              >
                <p className="text-sm leading-relaxed text-[var(--ink-muted)]">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex gap-1 text-[var(--teal-600)]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Image src={t.avatar} alt="" width={44} height={44} className="rounded-full" />
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-[var(--ink-muted)]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <h2 className="yanol-heading text-center">Testimonials</h2>
          <div className="mt-4 flex justify-center gap-1 text-[var(--teal-600)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[var(--ink-muted)]">
            Join 6+ satisfied clients who trust our solutions
          </p>
        </div>
      </motion.section>

      {/* Footer CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="relative overflow-hidden bg-[#0f86a1] py-20 text-white"
      >
        <Image
          src="/circle/questions_illustr-bg.svg"
          alt=""
          width={400}
          height={400}
          className="pointer-events-none absolute -left-10 bottom-0 opacity-40"
          aria-hidden
        />
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/circle/questions_illustr-plane.svg"
            alt=""
            width={80}
            height={80}
            className="pointer-events-none absolute right-[10%] top-[15%] opacity-80"
            aria-hidden
          />
        </motion.div>
        <div className="yanol-container relative text-center">
          <p className="text-lg md:text-xl">
            Let&apos;s talk about your product, your goals, and how we can help you ship faster
            without cutting corners. Your vision, our expertise.
          </p>
          <p className="mt-3 text-sm opacity-90">Get a response within 24 hours</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="yanol-btn-demo">
              Start a conversation
            </Link>
            <Link href="/contact" className="yanol-btn-launch">
              Request a demo
            </Link>
          </div>
          <div className="mt-6 flex justify-center gap-4 text-sm font-semibold">
            <a href="https://wa.me/251942497990" className="underline-offset-2 hover:underline">
              WhatsApp
            </a>
            <a href="https://t.me/" className="underline-offset-2 hover:underline">
              Telegram
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
