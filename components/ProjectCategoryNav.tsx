"use client";

import { useEffect, useState } from "react";
import { categories } from "@/lib/data";
import { idFor } from "@/lib/categoryId";

export default function ProjectCategoryNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = categories
      .map(({ key }) => document.getElementById(idFor(key)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function jumpTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="sticky top-[72px] z-10 -mx-6 mb-4 overflow-x-auto bg-bg/90 px-6 py-3 backdrop-blur-sm">
      <div className="flex w-max gap-2">
        {categories.map(({ key }) => {
          const id = idFor(key);
          const isActive = active === id;
          return (
            <button
              key={key}
              onClick={() => jumpTo(id)}
              className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? "border-accent-dim bg-accent/10 text-accent-bright"
                  : "border-bg-border bg-bg-surface text-ink-dim hover:text-ink"
              }`}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}
