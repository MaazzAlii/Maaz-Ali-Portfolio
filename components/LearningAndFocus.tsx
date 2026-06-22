import { Loader2 } from "lucide-react";
import { currentlyLearning, focusAreas } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function LearningAndFocus() {
  return (
    <section className="relative border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-surface px-3 py-1 font-mono text-xs text-accent-bright">
                <Loader2 className="h-3 w-3 animate-spin" />
                {currentlyLearning.eyebrow}
              </div>
              <h2 className="text-display-2 font-semibold tracking-tight text-ink">
                {currentlyLearning.heading}
              </h2>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {currentlyLearning.items.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <li className="flex items-start gap-3 rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm text-ink-dim">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-surface px-3 py-1 font-mono text-xs text-accent-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                {focusAreas.eyebrow}
              </div>
              <h2 className="text-display-2 font-semibold tracking-tight text-ink">
                {focusAreas.heading}
              </h2>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {focusAreas.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="h-full rounded-xl border border-bg-border bg-bg-surface p-5">
                    <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-dim">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
