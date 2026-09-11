import Image from "next/image";
import { about, profile, socials } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/SocialIcon";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-bg-border bg-bg-surface lg:mx-0">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-base leading-relaxed text-ink-dim">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 rounded-2xl border border-bg-border bg-bg-surface p-6">
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

            <Reveal delay={0.26}>
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                {socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-bg-border bg-bg-surface px-3.5 py-2 text-xs font-medium text-ink-dim transition-colors hover:border-accent-dim hover:text-ink">
                    <SocialIcon icon={s.icon} className="h-3.5 w-3.5" />
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
