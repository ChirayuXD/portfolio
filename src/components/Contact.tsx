"use client";

import { FormEvent, useState } from "react";
import { personal } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "./Section";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage("Message sent. I'll get back to you soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Failed to send message."
      );
    }
  }

  return (
    <Section id="contact" title="Contact" subtitle="05">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,1fr)] xl:gap-20">
        <Reveal>
          <div>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Open to research collaborations, internships, and ML engineering
              roles. Drop a message - I typically respond within a day.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
                { label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
                { label: "LinkedIn", value: "chirayu-agrawal-cs", href: personal.linkedin },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4"
                >
                  <span className="spec-label w-16 shrink-0">{item.label}</span>
                  <span className="text-sm text-muted transition-colors group-hover:text-foreground">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} direction="right">
          <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="spec-label mb-2 block">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  className="op-input w-full px-4 py-3 text-sm text-foreground placeholder:text-muted/50"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="spec-label mb-2 block">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="op-input w-full px-4 py-3 text-sm text-foreground placeholder:text-muted/50"
                  placeholder="you@email.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="spec-label mb-2 block">Subject</span>
              <input
                name="subject"
                type="text"
                required
                className="op-input w-full px-4 py-3 text-sm text-foreground placeholder:text-muted/50"
                placeholder="What's this about?"
              />
            </label>

            <label className="block">
              <span className="spec-label mb-2 block">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="op-input w-full resize-none px-4 py-3 text-sm text-foreground placeholder:text-muted/50"
                placeholder="Your message..."
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="op-btn-primary w-full py-3 text-sm font-medium uppercase tracking-widest disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>

            {message && (
              <p
                className={`font-mono text-xs ${
                  status === "success" ? "text-foreground" : "text-red"
                }`}
                role="status"
              >
                {status === "success" ? "OK: " : "Error: "}
                {message}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

