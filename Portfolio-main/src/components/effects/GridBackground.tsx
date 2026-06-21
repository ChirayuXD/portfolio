export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute left-0 top-0 h-full w-1 bg-red" />
      <div className="absolute right-0 top-0 h-px w-full bg-border" />
    </div>
  );
}
