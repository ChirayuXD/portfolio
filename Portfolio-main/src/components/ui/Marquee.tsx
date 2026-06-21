type MarqueeProps = {
  items: string[];
  speed?: "slow" | "fast";
};

export function Marquee({ items, speed = "slow" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-mask relative overflow-hidden border-y border-border py-4">
      <div
        className={`flex w-max gap-10 ${speed === "slow" ? "animate-marquee" : "animate-marquee-fast"}`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
          >
            <span className="h-px w-4 bg-red" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}