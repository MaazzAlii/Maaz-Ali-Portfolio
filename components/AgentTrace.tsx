"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { agentTrace } from "@/lib/data";

export default function AgentTrace() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % agentTrace.length);
    }, 1700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md rounded-2xl border border-bg-border bg-bg-surface/80 p-5 shadow-card backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="font-mono text-[11px] text-ink-faint">
          vision_rag.graph
        </span>
      </div>

      <div className="space-y-0">
        {agentTrace.map((step, i) => {
          const isActive = i === activeIndex;
          const isDone = i < activeIndex;
          const isLast = i === agentTrace.length - 1;
          return (
            <div key={step.node} className="relative flex gap-3 pb-4 last:pb-0">
              {!isLast ? (
                <span className="absolute left-[5px] top-3 h-full w-px bg-bg-border" />
              ) : null}
              <span
                className={`relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border transition-colors duration-300 ${
                  isActive
                    ? "border-accent bg-accent shadow-glow"
                    : isDone
                      ? "border-accent-dim bg-accent-dim"
                      : "border-bg-border bg-bg-raised"
                }`}
              />
              <div className="min-w-0">
                <p
                  className={`truncate font-mono text-[13px] transition-colors duration-300 ${
                    isActive ? "text-ink" : isDone ? "text-ink-dim" : "text-ink-faint"
                  }`}
                >
                  {step.node}
                  {isActive ? (
                    <span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-[2px] animate-blink bg-accent-bright align-middle" />
                  ) : null}
                </p>
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="font-mono text-[11px] text-ink-faint"
                    >
                      {step.detail}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
