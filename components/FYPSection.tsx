"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fyp } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function FYPSection() {
  const [idx, setIdx] = useState(0);
  const images = fyp.images;
  const total = images.length;

  function prev() { setIdx((i) => (i - 1 + total) % total); }
  function next() { setIdx((i) => (i + 1) % total); }

  const current = images[idx];

  return (
    <section id="fyp" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-dim/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-bright mb-4">
            Final Year Project
          </div>
          <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-semibold tracking-tight text-ink">
            {fyp.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-dim">
            {fyp.shortDescription}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.4fr]">
          {/* Gallery */}
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-4">
              {/* Main image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-bg-border bg-bg-raised">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.path}
                      alt={current.caption}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/temp.png"; }}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next */}
                <button onClick={prev} aria-label="Previous"
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-bg-border bg-bg/80 text-ink backdrop-blur-sm transition-colors hover:border-accent-dim">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={next} aria-label="Next"
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-bg-border bg-bg/80 text-ink backdrop-blur-sm transition-colors hover:border-accent-dim">
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Counter */}
                <div className="absolute right-3 top-3 z-10 rounded-full bg-bg/70 px-2.5 py-1 font-mono text-[11px] text-ink-faint backdrop-blur-sm">
                  {idx + 1} / {total}
                </div>
              </div>

              {/* Caption */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={idx + "-cap"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-center font-mono text-xs text-ink-faint"
                >
                  {current.caption}
                </motion.p>
              </AnimatePresence>

              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={img.caption}
                    className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${
                      i === idx
                        ? "border-accent shadow-glow"
                        : "border-bg-border opacity-60 hover:opacity-100 hover:border-accent-dim"
                    }`}
                  >
                    <Image
                      src={img.path}
                      alt={img.caption}
                      fill
                      sizes="80px"
                      className="object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/temp.png"; }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Info panel */}
          <Reveal delay={0.14}>
            <div className="flex flex-col gap-5">
              {/* Metrics */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-bright">
                  Highlights
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {fyp.metrics.map((m) => (
                    <span key={m} className="rounded-full border border-accent-dim/40 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent-bright">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-bright">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {fyp.tech.map((t) => (
                    <span key={t} className="rounded-full border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-[11px] text-ink-faint">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 pt-2">
                {fyp.github && (
                  <a href={fyp.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm font-medium text-ink-dim transition-colors hover:border-accent-dim hover:text-ink">
                    <Github className="h-4 w-4 text-accent-bright" /> GitHub Repository
                  </a>
                )}
                {fyp.demo && (
                  <a href={fyp.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm font-medium text-accent transition-colors hover:border-accent-dim">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
