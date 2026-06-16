// Event media: an event POSTER for upcoming events, a PHOTO for past ones.
// Shows the image when set, otherwise a branded placeholder. Drop files in
// /public/events/ and set `image` on the event in lib/site.ts.
export function EventMedia({
  image,
  variant,
  kind,
}: {
  image?: string;
  variant: "poster" | "photo";
  kind: string;
}) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-ieee/10 via-ink-soft to-signal/10">
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
          {/* faint emblem watermark */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/emblem.png"
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 opacity-25"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper/60 backdrop-blur-sm">
            {variant === "poster" ? "Poster" : "Photo"} — coming soon
          </span>
        </>
      )}
      {image && (
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper/70 backdrop-blur-sm">
          {variant === "poster" ? "Poster" : "Photo"}
        </span>
      )}
    </div>
  );
}
