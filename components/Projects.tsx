import { projects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading heading="Projects" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
