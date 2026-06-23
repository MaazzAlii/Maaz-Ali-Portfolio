import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading heading="Certifications & Learning" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-bg-border bg-bg-surface p-5 transition-colors hover:border-accent-dim">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-bg-border bg-bg-raised">
                  <Award className="h-4 w-4 text-accent-bright" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{cert.name}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">{cert.issuer}</p>
                  {cert.status ? (
                    <span className={`mt-2 inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] ${
                      cert.status === "In Progress"
                        ? "border-amber-800/40 bg-amber-950/20 text-amber-400"
                        : "border-accent-dim bg-accent/10 text-accent-bright"
                    }`}>
                      {cert.status}
                    </span>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
