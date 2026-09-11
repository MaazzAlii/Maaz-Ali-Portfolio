import { categories, getProjectsByCategory } from "@/lib/data";
import { idFor } from "@/lib/categoryId";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectCategoryNav from "@/components/ProjectCategoryNav";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          heading="Projects"
          description="Every project I've shipped — client work, AI systems, automations, and full-stack apps — grouped by category. Click any card for the full case study."
        />

        <div className="mt-10">
          <ProjectCategoryNav />

          <div className="space-y-16">
            {categories.map(({ key, blurb }) => {
              const items = getProjectsByCategory(key);
              if (items.length === 0) return null;

              return (
                <div key={key} id={idFor(key)} className="scroll-mt-32">
                  <Reveal>
                    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-ink">{key}</h3>
                      <p className="text-xs text-ink-faint">{blurb}</p>
                    </div>
                  </Reveal>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((project, i) => (
                      <ProjectCard key={project.slug} project={project} delay={i * 0.04} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
