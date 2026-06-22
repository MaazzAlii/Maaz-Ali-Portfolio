import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-bg-border py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-faint transition-colors hover:text-ink">
            <Mail className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-faint transition-colors hover:text-ink">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-faint transition-colors hover:text-ink">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
