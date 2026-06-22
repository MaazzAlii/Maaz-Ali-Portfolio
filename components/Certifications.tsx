import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Certifications() {
  return (
    <section className="relative border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow={certifications.eyebrow}
          heading={certifications.heading}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {certifications.items.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-bg-border bg-bg-surface p-6 transition-colors hover:border-accent-dim">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-bg-border bg-bg-raised">
                    <Award className="h-5 w-5 text-accent-bright" />
                  </div>
                  {cert.status ? (
                    <span className="rounded-full border border-accent-dim bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent-bright">
                      {cert.status}
                    </span>
                  ) : null}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{cert.name}</h3>
                  <p className="mt-1 text-xs text-ink-faint">{cert.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
