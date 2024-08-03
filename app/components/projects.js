// pages/index.js
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "RAG Application",
    description: "Developed 2 RAG applications on PDF file and CSV file in python in GenAI using LangChain",
    codeLink: "https://github.com/ChirayuXD/RAG_APP_USING-LANGCHAIN",
    liveLink: "https://github.com/ChirayuXD/Q-A-system-over-SQL-data"
  },
  {
    title: "ChatterBox",
    description: " developed a chatroom webapp with real time chat updation using React and Firebase",
    liveLink: "https://bol-bachchan.vercel.app/",
    codeLink: "https://github.com/ChirayuXD/ChatterBox",
  },
  {
    title: "RandomWord Generator",
    description: " developed an app using Flutter to generate random words and favourite them",
    liveLink: "https://github.com/ChirayuXD/RandomWord_Generator",
    codeLink: "https://github.com/ChirayuXD/RandomWord_Generator",
  },
  {
    title: "Netflix Clone Landing Page",
    description: " created a pseudo landing page for Netflix using HTML, CSS and JavaScript",
    liveLink: "https://chirayuxd.github.io/Netflix-Landing-Page/",
    codeLink: "https://github.com/ChirayuXD/Netflix-Landing-Page",
  },
  {
    title: "Handsign Recognition",
    description: "This project implements a real-time hand gesture recognition system using a webcam.",
    liveLink: "https://github.com/ChirayuXD/Handsign-Recognition",
    codeLink: "https://github.com/ChirayuXD/Handsign-Recognition",
  },
  {
    title: "AdBlocker Extension",
    description: "Chrome extension designed to block specific ad URLs, providing a enjoyable browsing experience.",
    liveLink: "https://github.com/ChirayuXD/ADBLOCKER_EXTENSION",
    codeLink: "https://github.com/ChirayuXD/ADBLOCKER_EXTENSION",
  },
  
  // Add more projects here...
];

export default function Project() {
  return (
    <div className=" max-w-4xl text-white">
      <Head>
        <title>Projects</title>
      </Head>
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
              moreLink={project.moreLink}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
