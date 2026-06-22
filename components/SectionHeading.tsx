import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-surface px-3 py-1 font-mono text-xs text-accent-bright ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
        {eyebrow}
      </div>
      <h2 className="text-display-2 font-semibold tracking-tight text-ink">
        {heading}
      </h2>
      {description ? (
        <p
          className={`mt-3 max-w-2xl text-base text-ink-dim ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
