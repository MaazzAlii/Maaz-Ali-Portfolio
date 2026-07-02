import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading heading="Certifications" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {certifications.map((cert, i) => {
            const isInProgress = cert.status === "In Progress";
            const Wrapper = cert.credentialUrl ? "a" : "div";
            const wrapperProps = cert.credentialUrl
              ? { href: cert.credentialUrl, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Reveal key={cert.title} delay={i * 0.06}>
                {/* @ts-expect-error dynamic wrapper */}
                <Wrapper
                  {...wrapperProps}
                  className={`group flex h-full flex-col gap-4 rounded-2xl border border-bg-border bg-bg-surface p-5 transition-colors hover:border-accent-dim ${cert.credentialUrl ? "cursor-pointer" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-bg-border bg-bg-raised">
                      <Award className="h-4 w-4 text-accent-bright" />
                    </div>
                    {cert.status && (
                      <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] ${
                        isInProgress
                          ? "border-amber-800/40 bg-amber-950/20 text-amber-400"
                          : "border-accent-dim/50 bg-accent/10 text-accent-bright"
                      }`}>
                        {cert.status}
                      </span>
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink">{cert.title}</p>
                    <p className="mt-0.5 text-xs text-ink-faint">{cert.provider}</p>
                    {cert.date && (
                      <p className="mt-0.5 font-mono text-[11px] text-ink-faint">{cert.date}</p>
                    )}
                    {cert.marks && (
                      <p className="mt-1.5 font-mono text-[11px] font-semibold text-accent-bright">
                        Score: {cert.marks}
                      </p>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-accent group-hover:text-accent-bright">
                      <ExternalLink className="h-3 w-3" /> View Credential
                    </span>
                  )}
                {/* @ts-expect-error dynamic wrapper */}
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
