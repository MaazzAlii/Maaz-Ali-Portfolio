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
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-bg-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading heading={contact.heading} description={contact.body} />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.65fr]">
          <Reveal delay={0.05}>
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
                    className="w-full rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
                    placeholder="Your name"
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
                    className="w-full rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
                    placeholder="you@company.com"
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
                  className="w-full resize-none rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
                  placeholder="Tell me about the role or project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                Send message
              </button>
              {sent ? (
                <p className="text-xs text-accent-bright">
                  Opening your email client — if nothing opened, email me directly at {profile.email}
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 rounded-xl border border-bg-border bg-bg-surface px-5 py-4 transition-colors hover:border-accent-dim"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent-bright" />
                <span className="text-sm text-ink-dim group-hover:text-ink truncate">
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
