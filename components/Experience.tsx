import { experience } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading heading="Experience" />

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-2xl border border-bg-border bg-bg-surface p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-ink">{experience.role}</h3>
                <p className="mt-0.5 text-sm text-ink-dim">{experience.location}</p>
              </div>
              <span className="rounded-full border border-bg-border bg-bg-raised px-3 py-1.5 font-mono text-xs text-ink-faint">
                {experience.period}
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {experience.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-ink-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
