import Image from "next/image";
import {
  FileSearch,
  GitCompare,
  Workflow,
  Chrome,
  Mic,
  MapPinned,
  Moon,
  Calculator,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  FileSearch,
  GitCompare,
  Workflow,
  Chrome,
  Mic,
  MapPinned,
  Moon,
  Calculator,
};

export default function CoverImage({
  image,
  icon,
  alt,
}: {
  image?: string;
  icon: keyof typeof icons;
  alt: string;
}) {
  if (image) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-bg-raised">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  const Icon = icons[icon];

  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-bg-border bg-gradient-to-br from-bg-raised to-bg-surface">
      <Icon className="h-9 w-9 text-accent-bright opacity-70" strokeWidth={1.5} />
    </div>
  );
}
