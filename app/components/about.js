import React from 'react';

function About() {
  return (
    <section className=" text-white p-10">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Hey! I'm Chirayu Agrawal</h1>
        <p className="mb-4">
        I am an aspiring software developer with a B.Tech in Computer Science from Shiv Nadar University, Delhi NCR. My passion lies in the fields of machine learning and artificial intelligence, and I am dedicated to creating software solutions that address real-world challenges.
        </p>
        <p className="mb-4">
        I have developed a strong foundation in programming and algorithm design, and I am proficient in languages such as Python and SQL. My academic projects have involved building predictive models, data analysis, and developing software applications that showcase my problem-solving skills and creativity
        </p>
        <p className="mb-8">
        I am currently seeking internship opportunities in the tech industry to further refine my skills and contribute to innovative projects. I am eager to apply my knowledge and enthusiasm to develop impactful software solutions.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/ChirayuXD"
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/chirayu-agrawal-cs"
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
          >
            LinkedIn
          </a>
          <a
            href="mailto:chirayuagrawal321@gmail.com"
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
          >
            Email
          </a>
          <a
            href="https://drive.google.com/file/d/1hCJMXnmHhAyjG-ha1pVKUnn9rM7VsH2i/view?usp=sharing"
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
