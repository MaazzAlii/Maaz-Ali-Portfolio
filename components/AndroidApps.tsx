"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { androidApps } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ImageSlider from "@/components/ImageSlider";

export default function AndroidApps() {
  return (
    <section id="apps" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          heading="Published Apps"
          description="Two Android apps live on the Play Store — hover the image to browse screenshots."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {androidApps.map((app, i) => {
            const sliderImages = app.images && app.images.length > 0 ? app.images : [app.image];
            return (
              <Reveal key={app.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="group flex flex-col rounded-2xl border border-bg-border bg-bg-surface overflow-hidden transition-colors hover:border-accent-dim"
                >
                  <a href={app.playStoreUrl ?? "#"} target="_blank" rel="noopener noreferrer" className="block">
                    <ImageSlider
                      images={sliderImages}
                      alt={app.name}
                      aspectClass="aspect-[16/9]"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </a>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-ink">{app.name}</h3>
                      <span className="shrink-0 rounded-full border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-[10px] text-ink-faint">
                        Play Store
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-ink-dim">{app.description}</p>

                    {app.metrics && app.metrics.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {app.metrics.map((m) => (
                          <span key={m} className="rounded-full border border-accent-dim/40 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent-bright">
                            {m}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {app.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-[11px] text-ink-faint">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {app.playStoreUrl && (
                      <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-accent-bright">
                        <ExternalLink className="h-3.5 w-3.5" /> View on Play Store
                      </a>
                    )}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
