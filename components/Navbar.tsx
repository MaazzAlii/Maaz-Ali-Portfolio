"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((item) => item.href.replace("#", ""));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? "border-b border-bg-border bg-bg/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
    }`}>
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#hero" className="text-sm font-semibold text-ink">{profile.name}</a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === item.href ? "bg-bg-raised text-ink" : "text-ink-dim hover:text-ink"
                }`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          {/* Scrolls to contact — never opens email client */}
          <a href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-[1.03]">
            Hire me
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-bg-border p-2 text-ink">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden border-b border-bg-border bg-bg/95 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm text-ink-dim hover:bg-bg-raised hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                {/* Scrolls to contact section — never mailto */}
                <a href="#contact" onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white">
                  Hire me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
