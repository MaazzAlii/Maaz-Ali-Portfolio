"use client";

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import { contact, profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "success";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      // If Resend isn't configured yet, open mailto as reliable fallback
      if (data.fallback) {
        const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
        const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
        window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
        setStatus("success");
        setName(""); setEmail(""); setMessage("");
        return;
      }

      if (data.success) {
        setStatus("success");
        setName(""); setEmail(""); setMessage("");
      }
    } catch {
      // Network error — fall back to mailto silently
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
      setStatus("success");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent";

  return (
    <section id="contact" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading heading={contact.heading} description={contact.body} />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.65fr]">
          <Reveal delay={0.05}>
            {status === "success" ? (
              <div className="flex h-full flex-col items-start justify-center gap-4 rounded-2xl border border-bg-border bg-bg-surface p-8">
                <CheckCircle className="h-8 w-8 text-accent-bright" />
                <div>
                  <h3 className="text-lg font-semibold text-ink">Message sent!</h3>
                  <p className="mt-1 text-sm text-ink-dim">
                    Got it — I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-accent underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium text-ink-dim">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      placeholder="Your name"
                      disabled={status === "sending"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium text-ink-dim">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                      placeholder="you@company.com"
                      disabled={status === "sending"}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-medium text-ink-dim">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={inputClass}
                    placeholder="Tell me about the role or project..."
                    disabled={status === "sending"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === "sending" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" />Sending…</>
                  ) : (
                    <><Send className="h-4 w-4" />Send message</>
                  )}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 rounded-xl border border-bg-border bg-bg-surface px-5 py-4 transition-colors hover:border-accent-dim"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent-bright" />
                <span className="truncate text-sm text-ink-dim group-hover:text-ink">
                  {profile.email}
                </span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-bg-border bg-bg-surface px-5 py-4 transition-colors hover:border-accent-dim"
              >
                <Linkedin className="h-4 w-4 shrink-0 text-accent-bright" />
                <span className="text-sm text-ink-dim group-hover:text-ink">
                  LinkedIn — MaazzAlii
                </span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-bg-border bg-bg-surface px-5 py-4 transition-colors hover:border-accent-dim"
              >
                <Github className="h-4 w-4 shrink-0 text-accent-bright" />
                <span className="text-sm text-ink-dim group-hover:text-ink">
                  GitHub — MaazzAlii
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
