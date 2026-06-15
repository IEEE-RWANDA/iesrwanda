// Emblem echoing the official IES Rwanda badge: a cog ring (binary/circuit),
// circuit traces, and an orange core spark. Self-colored to stay on-brand.
// Swap for the official raster by dropping /public/emblem.png and using <img>.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* cog ring — thick dashed stroke reads as gear teeth */}
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="#2A6F9E"
        strokeWidth="5"
        strokeDasharray="3.1 3.25"
      />
      {/* inner binary ring */}
      <circle cx="24" cy="24" r="15.5" stroke="#2A9FD6" strokeWidth="1" opacity="0.6" />
      {/* white field */}
      <circle cx="24" cy="24" r="14.5" fill="#FFFFFF" />

      {/* circuit traces with node pads */}
      <g stroke="#2A9FD6" strokeWidth="1.1">
        <path d="M24 24 H35" />
        <path d="M24 24 L33 31" />
        <path d="M24 24 L15 32" />
      </g>
      <g fill="#2A9FD6">
        <circle cx="35.4" cy="24" r="1.5" />
        <circle cx="33.4" cy="31.4" r="1.5" />
        <circle cx="14.6" cy="32.4" r="1.5" />
      </g>

      {/* orange core spark (the "ies" mark) */}
      <circle cx="24" cy="24" r="4.4" fill="#EC8C00" />
      <g stroke="#EC8C00" strokeWidth="1.3" strokeLinecap="round">
        <path d="M24 15.5 V12.5" />
        <path d="M18 17.5 L16 15.5" />
        <path d="M30 17.5 L32 15.5" />
      </g>
    </svg>
  );
}
