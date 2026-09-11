"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { featuredProjects } from "@/lib/data";

const INTERVAL = 4000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + featuredProjects.length) % featuredProjects.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(t);
  }, [paused, go]);

  const project = featuredProjects[index];
  const detailUrl = `/projects/${project.slug}`;

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div
      className="relative w-full max-w-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-bg-border bg-bg-surface shadow-card">
        {/* Image */}
        <Link href={detailUrl} className="group block">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-raised">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={project.slug}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
                className="absolute inset-0"
              >
                <Image
                  src={project.image ?? "/temp.png"}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/temp.png"; }}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Link>

        {/* Info row */}
        <div className="px-5 pt-4 pb-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.slug + "-info"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-sm font-semibold text-ink leading-snug">{project.title}</p>

              <div className="mt-3 flex items-center gap-3">
                <Link href={detailUrl}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-accent transition-colors hover:text-accent-bright">
                  View details <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button onClick={() => go(-1)} aria-label="Previous project"
        className="absolute left-3 top-[42%] -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-bg-border bg-bg/80 text-ink-dim backdrop-blur-sm transition-colors hover:border-accent-dim hover:text-ink">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button onClick={() => go(1)} aria-label="Next project"
        className="absolute right-3 top-[42%] -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-bg-border bg-bg/80 text-ink-dim backdrop-blur-sm transition-colors hover:border-accent-dim hover:text-ink">
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dot indicators */}
      <div className="mt-4 flex justify-center gap-1.5">
        {featuredProjects.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to project ${i + 1}`}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-accent" : "w-1.5 bg-bg-border hover:bg-ink-faint"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
