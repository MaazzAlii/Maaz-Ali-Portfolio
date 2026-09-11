import { Linkedin, Github, Mail, Instagram, Youtube, Facebook } from "lucide-react";
import type { SocialLink } from "@/lib/data";

function TelegramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.05 3.64 2.98 10.7c-1.23.5-1.22 1.19-.22 1.5l4.63 1.45 1.79 5.5c.22.6.11.84.75.84.5 0 .72-.23 1-.5l2.4-2.33 4.7 3.47c.87.48 1.5.23 1.72-.8l3.1-14.6c.32-1.28-.48-1.85-1.8-1.6Zm-11.2 10.6-1.6-.5 9.9-6.2c.16-.1.32.04.18.15l-8 7.2-.2 2.3-.28-3Z" />
    </svg>
  );
}

function TikTokGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82a4.8 4.8 0 0 1-1-2.82h-3.4v13.6a2.8 2.8 0 1 1-2-2.68v-3.5a6.3 6.3 0 1 0 5.4 6.24V9.4a8.2 8.2 0 0 0 4.8 1.54v-3.4a4.8 4.8 0 0 1-3.8-1.72Z" />
    </svg>
  );
}

const ICONS = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  telegram: TelegramGlyph,
  tiktok: TikTokGlyph,
} as const;

export default function SocialIcon({ icon, className = "h-4 w-4" }: { icon: SocialLink["icon"]; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon className={className} />;
}
