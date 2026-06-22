import { timeline } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Timeline() {
  return (
    <section id="timeline" className="relative border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow={timeline.eyebrow} heading={timeline.heading} />

        <div className="relative mt-14">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-bg-border sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-10">
            {timeline.items.map((item, i) => {
              const onRight = i % 2 === 0;
              return (
                <Reveal key={`${item.year}-${item.label}`} delay={i * 0.07}>
                  <li
                    className={`relative flex items-start gap-6 sm:items-center ${
                      onRight ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    <span className="absolute left-0 top-1.5 z-10 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg shadow-glow sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2" />

                    <div
                      className={`ml-10 flex-1 sm:ml-0 ${
                        onRight ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                      }`}
                    >
                      <span className="font-mono text-sm text-accent-bright">
                        {item.year}
                      </span>
                      <p className="mt-1 text-base text-ink">{item.label}</p>
                    </div>

                    <div className="hidden flex-1 sm:block" aria-hidden="true" />
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
