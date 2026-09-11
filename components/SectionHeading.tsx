import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      {eyebrow ? (
        <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      ) : null}
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
