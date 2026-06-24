"use client";

import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { featuredProjects, type Project } from "@/lib/data";
import Reveal from "@/components/Reveal";

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  // Clicking the card navigates to the best available link
  const primaryUrl = project.demo ?? project.huggingface ?? project.github ?? "#";

  return (
    <Reveal delay={index * 0.07}>
      <motion.a
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="group flex flex-col rounded-2xl border border-bg-border bg-bg-surface overflow-hidden transition-colors hover:border-accent-dim"
      >
        {/* Screenshot */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-raised">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              // fallback to temp.png if real screenshot not yet added
              (e.currentTarget as HTMLImageElement).src = "/temp.png";
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold text-ink">{project.title}</h3>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-bright" />
          </div>

          <p className="text-sm leading-relaxed text-ink-dim">{project.description}</p>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.metrics.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-accent-dim/40 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent-bright"
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-[11px] text-ink-faint"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons — stop propagation so they don't double-fire */}
          <div className="mt-auto flex items-center gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-dim transition-colors hover:text-ink"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-accent-bright"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            {project.huggingface && (
              <a
                href={project.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 transition-colors hover:text-amber-300"
              >
                🤗 Hugging Face
              </a>
            )}
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

export default function FeaturedWork() {
  return (
    <section id="featured" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-semibold tracking-tight text-ink">
            Featured Work
          </h2>
          <p className="mt-3 max-w-xl text-base text-ink-dim">
            Selected projects — click any card to open.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
