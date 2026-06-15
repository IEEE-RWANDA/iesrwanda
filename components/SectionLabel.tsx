// A technical, blueprint-style section marker: [03] / KICKER
export function SectionLabel({
  index,
  children,
  tone = "signal",
}: {
  index: string;
  children: React.ReactNode;
  tone?: "signal" | "ieee";
}) {
  const color = tone === "signal" ? "text-signal" : "text-ieee";
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em]">
      <span className={color}>[{index}]</span>
      <span className="h-px w-8 bg-current opacity-40" />
      <span className="text-paper/60">{children}</span>
    </div>
  );
}
