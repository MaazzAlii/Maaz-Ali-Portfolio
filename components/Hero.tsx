"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Mail } from "lucide-react";
import { hero, profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="bg-radial-fade pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-content px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-ink-dim"
        >
          {profile.name}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 text-sm font-medium text-accent-bright"
        >
          {profile.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-balance mt-6 max-w-3xl text-display-1 font-semibold text-ink"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-balance mt-6 max-w-xl text-lg text-ink-dim"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-bg-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-dim"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-bg-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-dim"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 font-mono text-xs text-ink-faint"
        >
          {hero.meta}
        </motion.p>
      </div>
    </section>
  );
}
