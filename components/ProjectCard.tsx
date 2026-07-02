"use client";

import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ImageSlider from "@/components/ImageSlider";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const primaryUrl = project.demo ?? project.huggingface ?? project.github ?? "#";
  const sliderImages = project.images && project.images.length > 0 ? project.images : [project.image];

  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="group flex h-full flex-col rounded-2xl border border-bg-border bg-bg-surface overflow-hidden transition-[border-color] duration-300 hover:border-accent-dim"
      >
        <a href={primaryUrl} target="_blank" rel="noopener noreferrer" className="block">
          <ImageSlider images={sliderImages} alt={project.title} />
        </a>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <a href={primaryUrl} target="_blank" rel="noopener noreferrer">
            <h3 className="text-sm font-semibold text-ink hover:text-accent transition-colors">
              {project.title}
            </h3>
          </a>

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

          <div className="mt-auto flex items-center gap-3 pt-1">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-ink-dim transition-colors hover:text-ink">
                <Github className="h-3 w-3" /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-accent transition-colors hover:text-accent-bright">
                <ExternalLink className="h-3 w-3" /> Live Demo
              </a>
            )}
            {project.huggingface && (
              <a href={project.huggingface} target="_blank" rel="noopener noreferrer"
                className="text-[11px] font-medium text-amber-400 transition-colors hover:text-amber-300">
                🤗 Hugging Face
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
