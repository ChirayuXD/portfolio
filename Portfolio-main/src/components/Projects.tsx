import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="03">
      <div className="grid auto-rows-fr items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1} className="h-full">
            <TiltCard className="h-full">
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-base font-medium leading-snug text-foreground md:text-lg">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition-colors hover:text-red"
                      >
                        {project.title}
                        <span aria-hidden className="text-red">
                          -&gt;
                        </span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  {project.featured && (
                    <span className="shrink-0 bg-red px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-white">
                      Featured
                    </span>
                  )}
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <p className="mt-4 font-mono text-xs text-foreground/60">
                  {project.metrics}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-border pt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-[10px] text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}