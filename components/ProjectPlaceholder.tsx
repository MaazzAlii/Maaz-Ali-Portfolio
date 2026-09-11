import { Bot, Workflow, Layers, Smartphone, Terminal, Briefcase, Rocket, type LucideIcon } from "lucide-react";
import type { ProjectCategory } from "@/lib/data";

const ICONS: Record<ProjectCategory, LucideIcon> = {
  "AI & Agentic Systems": Bot,
  "Automation & Workflows": Workflow,
  "Enterprise Full-Stack & SaaS": Layers,
  "Mobile Apps": Smartphone,
  "Python Core & Utilities": Terminal,
  "Client & Freelance Work": Briefcase,
  "Personal Ventures": Rocket,
};

const GRADIENTS: Record<ProjectCategory, string> = {
  "AI & Agentic Systems": "from-accent/25 via-bg-raised to-bg-surface",
  "Automation & Workflows": "from-emerald-500/20 via-bg-raised to-bg-surface",
  "Enterprise Full-Stack & SaaS": "from-violet-500/20 via-bg-raised to-bg-surface",
  "Mobile Apps": "from-sky-500/20 via-bg-raised to-bg-surface",
  "Python Core & Utilities": "from-amber-500/20 via-bg-raised to-bg-surface",
  "Client & Freelance Work": "from-rose-500/20 via-bg-raised to-bg-surface",
  "Personal Ventures": "from-fuchsia-500/20 via-bg-raised to-bg-surface",
};

export default function ProjectPlaceholder({ category, className = "" }: { category: ProjectCategory; className?: string }) {
  const Icon = ICONS[category];
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br ${GRADIENTS[category]} ${className}`}>
      <Icon className="h-10 w-10 text-ink-faint" strokeWidth={1.4} />
    </div>
  );
}
