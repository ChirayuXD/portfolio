import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { GridBackground } from "@/components/effects/GridBackground";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Marquee } from "@/components/ui/Marquee";

const marqueeItems = [
  "PyTorch",
  "Transformers",
  "Hugging Face",
  "OpenAI API",
  "RAG",
  "FAISS",
  "Structured Outputs",
  "Semantic Search",
  "Model Serving",
  "FastAPI",
  "DuckDB",
  "Data Pipelines",
  "OpenCV",
  "Deepfake Detection",
  "Sentiment Analysis",
  "AWS",
  "Docker",
  "IPFS Verification",
];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <GridBackground />
      <CursorGlow />
      <Header />
      <main className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <Hero />
        <Marquee items={marqueeItems} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}