"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");
  const numeric = parseInt(value, 10);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) {
      if (Number.isNaN(numeric)) setDisplay(value);
      return;
    }
    let frame = 0;
    const totalFrames = 24;
    const step = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      setDisplay(String(Math.round(numeric * progress)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, numeric, value]);

  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  return (
    <section className="relative border-t border-bg-border py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bg-border bg-bg-border sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-bg-surface px-6 py-10 text-center"
            >
              <p className="font-mono text-3xl font-semibold text-ink sm:text-4xl">
                <Counter value={stat.value} />
                <span className="text-accent">+</span>
              </p>
              <p className="mt-2 text-xs text-ink-dim">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
