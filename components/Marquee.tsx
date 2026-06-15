"use client";

/** Seamless infinite marquee. Content is duplicated; track shifts -50%. */
export function Marquee({
  items,
  reverse = false,
  variant = "display",
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  variant?: "display" | "mono";
  className?: string;
}) {
  const itemClass =
    variant === "mono"
      ? "font-mono text-base uppercase tracking-[0.2em] text-paper/55"
      : "font-display text-2xl font-medium text-paper/80 sm:text-3xl";

  const row = (keyPrefix: string) => (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {items.map((item, i) => (
        <span key={`${keyPrefix}-${i}`} className="flex items-center gap-10">
          <span className={itemClass}>{item}</span>
          <span className="text-signal/60">◇</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`group flex overflow-hidden ${className}`}>
      <div
        className={`flex w-max shrink-0 ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
