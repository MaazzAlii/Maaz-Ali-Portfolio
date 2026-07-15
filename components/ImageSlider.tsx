"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  alt: string;
  aspectClass?: string;
  sizes?: string;
}

export default function ImageSlider({
  images,
  alt,
  aspectClass = "aspect-[16/10]",
}: Props) {
  const [idx, setIdx] = useState(0);
  const [currentSrc, setCurrentSrc] = useState(images[0] ?? "/temp.png");
  const total = images.length;
  const hasMultiple = total > 1;

  useEffect(() => {
    setCurrentSrc(images[idx] ?? "/temp.png");
  }, [images, idx]);

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i - 1 + total) % total);
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i + 1) % total);
  }

  function dot(e: React.MouseEvent, i: number) {
    e.preventDefault();
    e.stopPropagation();
    setIdx(i);
  }

  function handleImageError() {
    if (currentSrc !== "/temp.png") {
      setCurrentSrc("/temp.png");
    }
  }

  return (
    <div className={`group/slider relative w-full overflow-hidden bg-bg-raised ${aspectClass}`}>
      <img
        src={currentSrc}
        alt={`${alt} — ${idx + 1}`}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        loading={idx === 0 ? "eager" : "lazy"}
        onError={handleImageError}
      />

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-bg-border bg-bg/80 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/slider:opacity-100 hover:border-accent-dim"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-bg-border bg-bg/80 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/slider:opacity-100 hover:border-accent-dim"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>

          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1 opacity-0 transition-opacity duration-200 group-hover/slider:opacity-100">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => dot(e, i)}
                aria-label={`Image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === idx ? "w-4 bg-accent" : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <div className="absolute right-2 top-2 z-10 rounded-full bg-bg/70 px-2 py-0.5 font-mono text-[10px] text-ink-faint backdrop-blur-sm">
            {idx + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}
