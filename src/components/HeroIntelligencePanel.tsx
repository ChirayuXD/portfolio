"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const skillMap = new Map(skills.map((group) => [group.category, group.items]));
const skillNodeCount = skills.reduce(
  (total, group) => total + group.items.length,
  0
);

const groups = [
  {
    category: "ML & Deep Learning",
    label: "ML/DL",
    x: "22%",
    y: "25%",
    chips: ["PyTorch", "Transformers", "Hugging Face"],
    chipSide: "top",
  },
  {
    category: "LLMs, RAG & Agents",
    label: "LLM",
    x: "74%",
    y: "26%",
    chips: ["RAG", "FAISS", "Structured Outputs"],
    chipSide: "top",
  },
  {
    category: "Data Engineering & Analytics",
    label: "Data",
    x: "20%",
    y: "67%",
    chips: ["DuckDB", "Parquet", "Data Pipelines"],
    chipSide: "bottom",
  },
  {
    category: "Backend, MLOps & Cloud",
    label: "MLOps",
    x: "76%",
    y: "67%",
    chips: ["FastAPI", "Model Serving", "AWS"],
    chipSide: "bottom",
  },
  {
    category: "Computer Vision & NLP",
    label: "CV/NLP",
    x: "50%",
    y: "78%",
    chips: ["OpenCV", "Deepfake Detection", "Sentiment Analysis"],
    chipSide: "bottom",
  },
] as const;
const coreEdges = [
  "M320 238 L142 124",
  "M320 238 L474 130",
  "M320 238 L128 334",
  "M320 238 L486 334",
  "M320 238 L320 390",
];

function hasSkill(category: string, skill: string) {
  return skillMap.get(category)?.includes(skill) ?? false;
}

export function HeroIntelligencePanel() {
  return (
    <div
      className="pointer-events-none relative h-[420px] w-full overflow-hidden border-y border-white/10 lg:h-[460px] xl:h-[500px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(235,0,40,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      <motion.div
        className="absolute inset-y-8 left-0 w-px bg-red/70"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="absolute inset-x-0 top-0 h-24 border-t border-red/40 bg-gradient-to-b from-red/10 to-transparent"
        animate={{ y: [0, 360, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 500" fill="none">
        {coreEdges.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            stroke="rgba(235,0,40,0.52)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2 + index * 0.08, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-1/2 top-[48%] z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border border-red/60 bg-background/90 text-center shadow-2xl shadow-black/60"
        initial={{ opacity: 0, scale: 0.78 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.15 }}
      >
        <motion.span
          className="absolute -inset-2 border border-red/20"
          animate={{ opacity: [0.25, 0.75, 0.25], scale: [1, 1.04, 1] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          core
        </span>
        <span className="mt-1 text-sm font-medium leading-tight text-foreground">
          AI Engineer
        </span>
      </motion.div>

      {groups.map((group, index) => (
        <motion.div
          key={group.category}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: group.x, top: group.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.42, delay: 0.38 + index * 0.1 }}
        >
          <div
            className={`absolute left-1/2 flex w-52 -translate-x-1/2 flex-wrap justify-center gap-1.5 ${
              group.chipSide === "top" ? "bottom-full mb-3" : "top-full mt-3"
            }`}
          >
            {group.chips.map((chip, chipIndex) => (
              <motion.span
                key={chip}
                className={`border bg-background/95 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] shadow-sm shadow-black/40 ${
                  hasSkill(group.category, chip)
                    ? "border-white/15 text-foreground/75"
                    : "border-red/25 text-red/80"
                }`}
                initial={{ opacity: 0, y: group.chipSide === "top" ? 6 : -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.78 + index * 0.08 + chipIndex * 0.05 }}
              >
                {chip}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="relative min-w-28 border border-white/15 bg-background/90 px-3 py-3"
            animate={{
              borderColor: [
                "rgba(255,255,255,0.14)",
                "rgba(235,0,40,0.55)",
                "rgba(255,255,255,0.14)",
              ],
            }}
            transition={{ duration: 2.6, delay: index * 0.22, repeat: Infinity }}
          >
            <span className="absolute -inset-1 border border-red/10" />
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-red">
              {group.label}
            </div>
            <div className="mt-1 text-[11px] leading-snug text-muted">
              {group.category}
            </div>
          </motion.div>
        </motion.div>
      ))}

      <div className="absolute bottom-5 right-5 border border-white/10 bg-background/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        <motion.span
          className="mr-2 inline-block h-1.5 w-1.5 bg-red"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
        {skillNodeCount} skill nodes
      </div>
    </div>
  );
}