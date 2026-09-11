import { profile, socials } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";

export default function Footer() {
  return (
    <footer className="border-t border-bg-border py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-ink-faint">© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-4">
          <span className="select-all font-mono text-xs text-ink-faint">{profile.email}</span>
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
              aria-label={s.label} className="text-ink-faint transition-colors hover:text-ink">
              <SocialIcon icon={s.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
