// Upcoming events can pair a flyer/poster with an agenda. Past events use the
// same full-bleed frame for a highlight photo.
export function EventMedia({
  image,
  agenda,
  variant,
  kind,
  compact = false,
}: {
  image?: string;
  agenda?: string;
  variant: "poster" | "photo";
  kind: string;
  compact?: boolean;
}) {
  const hasAgenda = variant === "poster" && Boolean(image && agenda);

  if (hasAgenda) {
    return (
      <div className="grid aspect-[4/3] w-full grid-cols-2 overflow-hidden bg-ink md:aspect-auto md:h-full md:min-h-[300px]">
        <MediaPanel image={image!} label="Poster" alt={`${kind} poster`} />
        <MediaPanel image={agenda!} label="Agenda" alt={`${kind} agenda`} divided />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-ieee/10 via-ink-soft to-signal/10 ${
        compact ? "" : "md:aspect-auto md:h-full md:min-h-[300px]"
      }`}
    >
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={`${kind} ${variant}`}
          className={`absolute inset-0 h-full w-full ${
            variant === "poster" ? "object-contain p-2" : "object-cover"
          } transition-transform duration-700 hover:scale-105`}
        />
      ) : (
        <>
          <div className="blueprint absolute inset-0 opacity-60" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/emblem.png"
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 opacity-25"
          />
        </>
      )}
      <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper/70 backdrop-blur-sm">
        {image ? (variant === "poster" ? "Poster" : "Photo") : `${variant === "poster" ? "Poster" : "Photo"} — coming soon`}
      </span>
    </div>
  );
}

function MediaPanel({
  image,
  label,
  alt,
  divided = false,
}: {
  image: string;
  label: string;
  alt: string;
  divided?: boolean;
}) {
  return (
    <div className={`relative min-w-0 overflow-hidden ${divided ? "border-l border-paper/15" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 hover:scale-[1.03]"
      />
      <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-paper/70 shadow-sm backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
