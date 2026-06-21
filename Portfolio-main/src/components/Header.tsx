"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, personal } from "@/data/portfolio";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed inset-x-0 top-[3px] z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12 md:h-[72px]">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-red"
        >
          {personal.name.split(" ")[0]}
          <span className="text-red">.</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link spec-label text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="op-btn-primary hidden h-9 items-center px-5 text-[11px] font-medium uppercase tracking-widest md:inline-flex"
        >
          Hire me
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative h-3 w-5">
            <span
              className={`absolute left-0 h-px w-full bg-foreground transition-all duration-300 ${
                menuOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-foreground transition-all duration-300 ${
                menuOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-background px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="spec-label text-lg text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </motion.header>
  );
}
