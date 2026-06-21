import { about, certifications } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About" subtitle="01">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-20">
        <Reveal delay={0.1}>
          <div className="space-y-6">
            <p className="max-w-4xl text-base leading-relaxed text-muted md:text-lg">
              {about.summary}
            </p>
            <ul className="space-y-4">
              {about.highlights.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-4 text-sm leading-relaxed text-foreground/90 md:text-base"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2} direction="right">
          <aside className="glass-card p-6">
            <h3 className="spec-label mb-5">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-3 text-sm leading-snug text-foreground/80"
                >
                  <span className="mt-2 h-px w-3 shrink-0 bg-red" />
                  {cert}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
