import { CheckCircle2 } from "lucide-react";
import { whyWorkWithMe } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function WhyWorkWithMe() {
  return (
    <section className="relative border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow={whyWorkWithMe.eyebrow}
          heading={whyWorkWithMe.heading}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {whyWorkWithMe.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-bg-border bg-bg-surface p-6">
                <CheckCircle2 className="h-5 w-5 text-accent-bright" />
                <h3 className="mt-4 text-sm font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
