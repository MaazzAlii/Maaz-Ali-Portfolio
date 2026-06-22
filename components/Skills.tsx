import { skills } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading heading="Skills" />

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-bg-border bg-bg-surface px-4 py-2 text-sm text-ink-dim transition-colors hover:border-accent-dim hover:text-ink"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
