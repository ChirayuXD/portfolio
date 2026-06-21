"use client";

import { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost";
};

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
}: MagneticButtonProps) {
  const base = variant === "primary" ? "op-btn-primary" : "op-btn-ghost";
  const shared = `inline-flex h-12 items-center justify-center px-7 text-sm font-medium tracking-wide transition-colors duration-200 ${base} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={shared}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={shared}>
      {children}
    </button>
  );
}
