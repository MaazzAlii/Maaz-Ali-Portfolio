import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ProjectCard({
  project,
  delay = 0,
  featured = false,
}: {
  project: Project;
  delay?: number;
  featured?: boolean;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex h-full flex-col justify-between rounded-2xl border border-bg-border bg-bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-dim hover:shadow-glow ${
          featured ? "lg:p-8" : ""
        }`}
      >
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3
              className={`font-semibold text-ink ${
                featured ? "text-xl sm:text-2xl" : "text-lg"
              }`}
            >
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-bright" />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-dim">
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-[11px] text-ink-dim"
            >
              {t}
            </span>
          ))}
        </div>
      </a>
    </Reveal>
  );
}
