import { ArrowUpRight } from "lucide-react";
import { socials } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/SocialIcon";

const PLATFORM_STYLE: Record<string, string> = {
  linkedin: "from-sky-500/20 to-transparent text-sky-400",
  github: "from-slate-400/20 to-transparent text-ink",
  instagram: "from-fuchsia-500/20 to-transparent text-fuchsia-400",
  youtube: "from-red-500/20 to-transparent text-red-400",
  tiktok: "from-teal-400/20 to-transparent text-teal-300",
  telegram: "from-blue-400/20 to-transparent text-blue-400",
  facebook: "from-blue-600/20 to-transparent text-blue-400",
  mail: "from-accent/20 to-transparent text-accent",
};

export default function Channels() {
  const channels = socials.filter((s) => s.blurb);

  return (
    <section id="channels" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          heading="Channels"
          description="I document AI engineering and automation builds publicly — follow along or reach out if you're evaluating a sponsorship or collab."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col gap-4 rounded-2xl border border-bg-border bg-gradient-to-br p-6 transition-colors hover:border-accent-dim ${PLATFORM_STYLE[s.icon] ?? ""}`}
              >
                <div className="flex items-center justify-between">
                  <SocialIcon icon={s.icon} className="h-6 w-6" />
                  <ArrowUpRight className="h-4 w-4 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{s.label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-dim">{s.blurb}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
