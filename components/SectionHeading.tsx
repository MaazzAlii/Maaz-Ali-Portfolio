import Reveal from "@/components/Reveal";

export default function SectionHeading({
  heading,
  description,
  align = "left",
}: {
  heading: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
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
