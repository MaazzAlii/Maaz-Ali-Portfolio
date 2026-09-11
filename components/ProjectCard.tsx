"use client";

import Link from "next/link";
import { Lock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ImageSlider from "@/components/ImageSlider";
import ProjectPlaceholder from "@/components/ProjectPlaceholder";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const sliderImages = project.images && project.images.length > 0 ? project.images : project.image ? [project.image] : [];

  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="group flex h-full flex-col rounded-2xl border border-bg-border bg-bg-surface overflow-hidden transition-[border-color] duration-300 hover:border-accent-dim"
      >
        <Link href={`/projects/${project.slug}`} className="block">
          {sliderImages.length > 0 ? (
            <ImageSlider images={sliderImages} alt={project.title} />
          ) : (
            <ProjectPlaceholder category={project.category} className="aspect-[16/10] w-full" />
          )}
        </Link>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-bg-border bg-bg-raised px-2 py-0.5 text-[10px] font-medium text-ink-faint">
              {project.category}
            </span>
            {project.visibility === "private" && (
              <span className="inline-flex items-center gap-1 rounded-full border border-bg-border bg-bg-raised px-2 py-0.5 text-[10px] font-medium text-ink-faint">
                <Lock className="h-2.5 w-2.5" /> Private
              </span>
            )}
          </div>

          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-sm font-semibold text-ink hover:text-accent transition-colors">
              {project.title}
            </h3>
          </Link>

          <p className="text-xs leading-relaxed text-ink-dim">{project.description}</p>

          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.metrics.map((m) => (
                <span key={m} className="rounded-full border border-accent-dim/40 bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent-bright">
                  {m}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-[10px] text-ink-faint">
                {t}
              </span>
            ))}
          </div>

          <Link href={`/projects/${project.slug}`}
            className="mt-auto inline-flex items-center gap-1 pt-1 text-[11px] font-medium text-ink-dim transition-colors group-hover:text-accent">
            View details
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>
    </Reveal>
  );
}
