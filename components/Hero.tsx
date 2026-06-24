"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { hero, profile } from "@/lib/data";
import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-16 min-h-[92svh] flex items-center">
      <div className="bg-radial-fade pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-content px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">

          {/* ── LEFT: Content ── */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-sm text-ink-faint"
            >
              {profile.name} · {profile.location}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="mt-1 text-sm font-medium text-accent"
            >
              {profile.title}
            </motion.p>

            {/* Heading — hard-capped width, no one-word-per-line */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-5 text-[clamp(1.65rem,3.5vw,2.6rem)] font-semibold leading-[1.14] tracking-[-0.022em] text-ink"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-ink-dim"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#featured"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
                View My Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={profile.resumeUrl} download="Maaz_Ali_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-bg-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent-dim">
                <Download className="h-4 w-4" />
                Resume
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink-dim transition-colors hover:text-ink">
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 font-mono text-xs text-ink-faint"
            >
              {hero.meta}
            </motion.p>
          </div>

          {/* ── RIGHT: Project Carousel ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
