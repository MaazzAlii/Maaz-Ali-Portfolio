import { Smartphone, Star } from "lucide-react";
import { androidApps } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function AndroidApps() {
  return (
    <section id="apps" className="relative border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow={androidApps.eyebrow}
          heading={androidApps.heading}
          description="Live on the Play Store, monetized, and used by real people — not demos."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {androidApps.apps.map((app, i) => (
            <Reveal key={app.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-bg-border bg-bg-surface p-7 transition-colors hover:border-accent-dim">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-bg-border bg-bg-raised">
                    <Smartphone className="h-5 w-5 text-accent-bright" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-[11px] text-ink-dim">
                    <Star className="h-3 w-3 text-accent-bright" />
                    Play Store
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{app.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                  {app.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-[11px] text-ink-dim"
                    >
                      {tag}
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
