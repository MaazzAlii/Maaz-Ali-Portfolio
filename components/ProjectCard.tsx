import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";
import CoverImage from "@/components/CoverImage";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group flex h-full flex-col rounded-2xl border border-bg-border bg-bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent-dim hover:shadow-card">
        <CoverImage image={project.image} icon={project.icon} alt={project.title} />

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="font-semibold text-ink">{project.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">
              {project.description}
            </p>
          </div>

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

          <div className="mt-auto flex items-center gap-3 pt-1">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-dim transition-colors hover:text-ink"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-accent-bright"
              >
                Live Demo
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
