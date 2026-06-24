"use client";

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { contact, profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const payload = { name, email, message };
    console.log("[contact form] Submitting payload:", payload);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("[contact form] Response status:", res.status);
      const data = await res.json();
      console.log("[contact form] Response body:", data);

      if (res.ok && data.success) {
        setStatus("success");
        setName(""); setEmail(""); setMessage("");
        return;
      }

      // API returned an error — show it, do NOT open any email client
      setStatus("error");
      setErrorMsg(data.error ?? "Something went wrong. Please try again.");
    } catch (err) {
      console.error("[contact form] Network error:", err);
      setStatus("error");
      setErrorMsg("Network error. Check your connection and try again.");
    }
    // ↑ No mailto. No window.open. No fallback. Ever.
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
                    Got it — I&apos;ll reply as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-accent underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="mb-2 block text-xs font-medium text-ink-dim">Name</label>
                    <input id="c-name" required value={name} onChange={(e) => setName(e.target.value)}
                      className={inputClass} placeholder="Your name" disabled={status === "sending"} />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-2 block text-xs font-medium text-ink-dim">Email</label>
                    <input id="c-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                      className={inputClass} placeholder="you@company.com" disabled={status === "sending"} />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-msg" className="mb-2 block text-xs font-medium text-ink-dim">Message</label>
                  <textarea id="c-msg" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)}
                    className={inputClass} placeholder="Tell me about the role or project..."
                    disabled={status === "sending"} />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2.5 rounded-xl border border-red-900/40 bg-red-950/20 px-4 py-3">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <div>
                      <p className="text-sm text-red-400">{errorMsg}</p>
                      <p className="mt-1 text-xs text-red-400/70">
                        Or email directly: {profile.email}
                      </p>
                    </div>
                  </div>
                )}

                <button type="submit" disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60">
                  {status === "sending"
                    ? <><Loader2 className="h-4 w-4 animate-spin" />Sending…</>
                    : <><Send className="h-4 w-4" />Send message</>}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              {/* Plain text — not a mailto link */}
              <div className="flex items-center gap-3 rounded-xl border border-bg-border bg-bg-surface px-5 py-4">
                <Mail className="h-4 w-4 shrink-0 text-accent-bright" />
                <span className="truncate select-all text-sm text-ink-dim">{profile.email}</span>
              </div>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-bg-border bg-bg-surface px-5 py-4 transition-colors hover:border-accent-dim">
                <Linkedin className="h-4 w-4 shrink-0 text-accent-bright" />
                <span className="text-sm text-ink-dim group-hover:text-ink">LinkedIn — MaazzAlii</span>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-bg-border bg-bg-surface px-5 py-4 transition-colors hover:border-accent-dim">
                <Github className="h-4 w-4 shrink-0 text-accent-bright" />
                <span className="text-sm text-ink-dim group-hover:text-ink">GitHub — MaazzAlii</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
