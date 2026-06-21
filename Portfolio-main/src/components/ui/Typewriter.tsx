"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  texts: string[];
  className?: string;
};

export function Typewriter({ texts, className = "" }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1));
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(displayed.slice(0, -1));
          } else {
            setDeleting(false);
            setIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      deleting ? 30 : 60
    );
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <span className={`font-mono text-muted ${className}`}>
      <span className="text-red">{">"}</span> {displayed}
      <span className="animate-blink text-foreground">_</span>
    </span>
  );
}
