import { skills } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow={skills.eyebrow}
          heading={skills.heading}
          description="The stack I reach for when an idea needs to become a working agent."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-bg-border bg-bg-surface p-6 transition-colors hover:border-accent-dim">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent-bright">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-bg-border bg-bg-raised px-3 py-1.5 text-xs text-ink-dim"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
