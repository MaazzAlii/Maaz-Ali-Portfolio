import { Moon, Calculator } from "lucide-react";
import { androidApps } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const iconMap = { Moon, Calculator };

export default function AndroidApps() {
  return (
    <section id="apps" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          heading="Published Apps"
          description="Two Android apps live on the Play Store with real users."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {androidApps.map((app, i) => {
            const Icon = iconMap[app.icon];
            return (
              <Reveal key={app.name} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-bg-border bg-bg-surface transition-colors hover:border-accent-dim">
                  {app.image ? (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-bg-raised">
                      <Image
                        src={app.image}
                        alt={app.name}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/9] w-full items-center justify-center rounded-t-2xl border-b border-bg-border bg-gradient-to-br from-bg-raised to-bg-surface">
                      <Icon className="h-9 w-9 text-accent-bright opacity-70" strokeWidth={1.5} />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-ink">{app.name}</h3>
                      <span className="shrink-0 rounded-full border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-[10px] text-ink-faint">
                        Play Store
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                      {app.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {app.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-[11px] text-ink-faint"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
