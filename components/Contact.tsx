"use client";

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { contact, profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "—"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow={contact.eyebrow}
          heading={contact.heading}
          description={contact.body}
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal delay={0.05}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-xs text-ink-dim"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs text-ink-dim"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs text-ink-dim"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                  placeholder="What are you building, and how can I help?"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                Send message
              </button>

              {sent ? (
                <p className="font-mono text-xs text-accent-bright">
                  Opening your email client — if nothing happened, email me
                  directly at {profile.email}
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-bg-border bg-bg-surface p-6">
              <p className="font-mono text-xs text-ink-faint">connect.json</p>

              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between rounded-xl border border-bg-border bg-bg-raised px-4 py-3.5 transition-colors hover:border-accent-dim"
              >
                <span className="flex items-center gap-3 text-sm text-ink">
                  <Mail className="h-4 w-4 text-accent-bright" />
                  {profile.email}
                </span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-bg-border bg-bg-raised px-4 py-3.5 transition-colors hover:border-accent-dim"
              >
                <span className="flex items-center gap-3 text-sm text-ink">
                  <Linkedin className="h-4 w-4 text-accent-bright" />
                  LinkedIn — MaazzAlii
                </span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-bg-border bg-bg-raised px-4 py-3.5 transition-colors hover:border-accent-dim"
              >
                <span className="flex items-center gap-3 text-sm text-ink">
                  <Github className="h-4 w-4 text-accent-bright" />
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
