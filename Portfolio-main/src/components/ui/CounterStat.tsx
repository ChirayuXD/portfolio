"use client";

import { useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterStatProps = {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export function CounterStat({
  value,
  suffix = "",
  label,
  decimals = 0,
}: CounterStatProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
  );
  const [text, setText] = useState("0");

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  useEffect(() => {
    return display.on("change", (v) => setText(v));
  }, [display]);

  return (
    <div ref={ref} className="border-l border-border pl-5">
      <p className="font-mono text-2xl font-semibold text-foreground md:text-3xl">
        {text}
        <span className="text-red">{suffix}</span>
      </p>
      <p className="spec-label mt-2">{label}</p>
    </div>
  );
}
