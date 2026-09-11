"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";

export default function ProjectTabs({ project }: { project: Project }) {
  const tabs: { key: string; label: string; content?: string }[] = [
    { key: "overview", label: "Overview", content: project.overview ?? project.description },
    { key: "architecture", label: "Architecture", content: project.architecture },
    { key: "results", label: "Results", content: project.results },
  ].filter((t) => t.content);

  const [active, setActive] = useState(tabs[0]?.key ?? "overview");
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  if (tabs.length === 0) return null;

  return (
    <div>
      <div className="flex gap-1 border-b border-bg-border">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
              active === t.key ? "text-ink" : "text-ink-faint hover:text-ink-dim"
            }`}
          >
            {t.label}
            {active === t.key && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-accent" />
            )}
          </button>
        ))}
      </div>

      <div className="pt-5">
        <p className="text-base leading-relaxed text-ink-dim">{activeTab?.content}</p>
      </div>
    </div>
  );
}
