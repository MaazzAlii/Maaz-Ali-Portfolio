import { projects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="node: projects"
          heading="Featured Projects"
          description="Agent systems and applications I designed, built, and shipped end to end."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 0.08} featured />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              delay={0.16 + i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
