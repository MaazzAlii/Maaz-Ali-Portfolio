import type { ProjectCategory } from "@/lib/data";

export function idFor(category: ProjectCategory) {
  return `cat-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}
