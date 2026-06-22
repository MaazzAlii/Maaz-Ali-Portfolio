"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, FolderGit2 } from "lucide-react";
import { hero, profile } from "@/lib/data";
import AgentTrace from "@/components/AgentTrace";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <div className="bg-radial-fade pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-content grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-surface px-3 py-1 font-mono text-xs text-accent-bright"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
            {hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-display-1 font-semibold text-ink"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-balance text-lg text-ink-dim"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              <FolderGit2 className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-dim hover:text-accent-bright"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 font-mono text-xs text-ink-faint"
          >
            {profile.location} · open to relocation &amp; remote
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <AgentTrace />
        </motion.div>
      </div>
    </section>
  );
}
