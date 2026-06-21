"use client";

import { motion } from "framer-motion";
import { heroStats, personal } from "@/data/portfolio";
import { HeroIntelligencePanel } from "@/components/HeroIntelligencePanel";
import { CounterStat } from "@/components/ui/CounterStat";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Typewriter } from "@/components/ui/Typewriter";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const [firstName, ...rest] = personal.name.split(" ");

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full"
      >
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(500px,0.85fr)] 2xl:grid-cols-[minmax(0,0.95fr)_minmax(560px,0.8fr)]">
          <div className="min-w-0">
            <motion.div variants={item} className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-red" />
              <p className="spec-label">{personal.location}</p>
            </motion.div>

            <motion.div variants={item}>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem] 2xl:text-[6rem]">
                {firstName}
                <br />
                <span className="text-red">{rest.join(" ")}</span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
            >
              {personal.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-6 h-7">
              <Typewriter
                texts={[
                  "building ML systems that ship",
                  "research @ ICVGIP 2025",
                  "GenAI | computer vision | full-stack",
                  "never stop learning",
                ]}
                className="text-sm md:text-base"
              />
            </motion.div>

            <motion.p variants={item} className="spec-label mt-5">
              {personal.title}
            </motion.p>

            <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-3">
              <MagneticButton href="#contact" variant="primary">
                Get in touch
              </MagneticButton>
              <MagneticButton href={personal.resumeUrl} variant="ghost">
                Resume
              </MagneticButton>
              <MagneticButton href={personal.github} variant="ghost">
                GitHub -&gt;
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div variants={item} className="hidden min-w-0 xl:block xl:pl-4">
            <HeroIntelligencePanel />
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <CounterStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted"
        >
          <a
            href={`mailto:${personal.email}`}
            className="transition-colors hover:text-foreground"
          >
            {personal.email}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn -&gt;
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub -&gt;
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}