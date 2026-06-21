import { education, skills } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills & Education" subtitle="04">
      <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] xl:gap-24">
        <div className="space-y-10">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.08}>
              <div>
                <h3 className="spec-label mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="cursor-default border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-red/50 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="space-y-6">
          <Reveal>
            <h3 className="spec-label">Education</h3>
          </Reveal>
          {education.map((entry, index) => (
            <Reveal key={entry.institution} delay={index * 0.1} direction="right">
              <article className="glass-card border-l-2 border-red/40 p-6">
                <div className="flex flex-col gap-1 md:flex-row md:justify-between">
                  <h4 className="font-medium text-foreground">
                    {entry.institution}
                  </h4>
                  <p className="spec-label">{entry.period}</p>
                </div>
                <p className="mt-2 text-sm text-muted">{entry.degree}</p>
                <p className="mt-1 text-sm text-muted">{entry.location}</p>
                {entry.details && (
                  <p className="mt-3 font-mono text-xs text-red">
                    {entry.details}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
