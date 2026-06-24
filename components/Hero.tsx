"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Mail } from "lucide-react";
import { hero, profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90svh] items-center overflow-hidden pt-24 pb-16"
    >
      <div className="bg-radial-fade pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-content px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="font-mono text-sm text-ink-faint"
        >
          {profile.name} · {profile.location}
        </motion.p>

        {/* Headline — capped width so it never wraps one word per line */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-5 max-w-2xl text-[clamp(1.75rem,3.8vw,3rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink"
        >
          {hero.headline}
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-5 max-w-lg text-base leading-relaxed text-ink-dim"
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#featured"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            View My Work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-bg-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent-dim"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.resumeUrl}
            download="Maaz_Ali_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-bg-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent-dim"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </motion.div>

        {/* Meta */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-10 font-mono text-xs text-ink-faint"
        >
          {hero.meta}
        </motion.p>
      </div>
    </section>
  );
}
