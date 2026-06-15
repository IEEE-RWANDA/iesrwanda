// Minimal brand glyphs for the chapter's social channels.
export function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { viewBox: "0 0 24 24", className, "aria-hidden": true } as const;

  switch (name) {
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3.2 9h3.6v11.5H3.2zM9.2 9h3.45v1.57h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.3 2.4 4.3 5.5v6.28h-3.6v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.2z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
          <path d="M10 9.2l5.2 2.8L10 14.8z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common} fill="currentColor">
          <path d="M13 3h2.3c.25 1.9 1.45 3.4 3.7 3.6v2.5c-1.3 0-2.5-.4-3.5-1.1v5.7A5.85 5.85 0 1 1 11 8.2v2.65a3.2 3.2 0 1 0 2.3 3.07V3z" />
        </svg>
      );
    default:
      return null;
  }
}
