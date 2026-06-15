// Officer portrait. Shows a real photo when `photo` is set, otherwise a
// branded placeholder (silhouette + initials). Swap by setting `photo` in
// lib/site.ts to e.g. "/officers/aline.jpg" (drop the file in /public/officers).
export function PersonPhoto({
  photo,
  name,
  initials,
}: {
  photo?: string;
  name: string;
  initials: string;
}) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-ieee/10 via-ink-soft to-signal/10">
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <>
          <div className="blueprint absolute inset-0 opacity-60" />
          {/* head-and-shoulders silhouette */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full text-ieee/20 transition-transform duration-700 group-hover:scale-105"
            aria-hidden="true"
          >
            <circle cx="50" cy="38" r="16" fill="currentColor" />
            <path
              d="M50 58 c-18 0 -30 12 -30 30 v12 h60 v-12 c0 -18 -12 -30 -30 -30 z"
              fill="currentColor"
            />
          </svg>
          {/* initials badge */}
          <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full border border-signal/40 bg-white font-display text-sm font-bold text-ieee shadow-sm">
            {initials}
          </div>
          <span className="absolute right-3 top-3 rounded-full bg-white/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-paper/50 backdrop-blur-sm">
            Photo soon
          </span>
        </>
      )}
    </div>
  );
}
