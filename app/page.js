  import Image from "next/image";
  import About from "./components/about";
  import KeyProjects from "./components/keyProjects";
  import Herosection from "./components/herosection";
  import Experience from "./components/experiences";
  import Project from "./components/projects";
  import Technology from "./components/TechCard";
  export default function Home() {
    return (
      <main className="flex flex-col items-center p-4">
        <Herosection />
        <About />
        <Experience />
        <Project />
        <Technology/>
    
      </main>
    );
  }
