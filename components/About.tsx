import { about, profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-base leading-relaxed text-ink-dim">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-bg-border bg-bg-surface p-6">
              <p className="mb-5 font-mono text-xs text-ink-faint">quick_facts.json</p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent-bright" />
                  <span className="text-ink-dim">
                    Final-year BS Computer Science, NUML Islamabad — graduating
                    January 2027
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-bright" />
                  <span className="text-ink-dim">{profile.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent-bright" />
                  <span className="text-ink-dim">{profile.tagline}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
