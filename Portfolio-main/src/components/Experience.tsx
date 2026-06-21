import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="02">
      <div className="relative">
        <div className="absolute bottom-0 left-[5px] top-0 w-px timeline-line md:left-[7px]" />

        <div className="space-y-0">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.period}`} delay={index * 0.1}>
              <article className="relative py-10 pl-8 md:pl-12">
                <div className="absolute left-0 top-12 h-2.5 w-2.5 border border-red bg-background md:h-3 md:w-3" />

                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm text-red">{job.company}</p>
                    </div>
                    <div className="spec-label md:text-right">
                      <p>{job.period}</p>
                      <p className="mt-1">{job.location}</p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex max-w-5xl items-start gap-3 text-sm leading-relaxed text-muted md:text-base"
                      >
                        <span className="mt-3 h-px w-4 shrink-0 bg-foreground/40" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors hover:border-red/40 hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

