"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasPrecisePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !hasPrecisePointer) {
      glow.style.display = "none";
      return;
    }

    function moveGlow(event: PointerEvent) {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        const currentGlow = glowRef.current;
        if (!currentGlow) return;

        currentGlow.style.setProperty("--cursor-x", `${event.clientX}px`);
        currentGlow.style.setProperty("--cursor-y", `${event.clientY}px`);
        currentGlow.style.opacity = "1";
      });
    }

    function hideGlow() {
      const currentGlow = glowRef.current;
      if (!currentGlow) return;

      currentGlow.style.opacity = "0";
    }

    window.addEventListener("pointermove", moveGlow, { passive: true });
    window.addEventListener("pointerleave", hideGlow);
    window.addEventListener("blur", hideGlow);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("pointermove", moveGlow);
      window.removeEventListener("pointerleave", hideGlow);
      window.removeEventListener("blur", hideGlow);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-20 opacity-0 mix-blend-screen transition-opacity duration-300"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(170px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(235, 0, 40, 0.16), rgba(235, 0, 40, 0.055) 38%, transparent 72%)",
      }}
    />
  );
}