import { skillGroups } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading heading="Skills" />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-bg-border bg-bg-surface p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-bright">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-bg-border bg-bg-raised px-3 py-1.5 text-xs text-ink-dim transition-colors hover:border-accent-dim hover:text-ink"
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
