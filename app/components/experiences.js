"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    title: "AgBe Technologies-AI and ML Intern",
    description: "worked as a intern in the AI and ML team at AgBe Technologies",
    year: "June 2024-Aug 2024",
    details: `Developed a machine learning model for lead scoring and calculating lead propensity for SalesDocket software, boosting sales and leading to higher lead to customer conversion rates.
    Technologies used: Python, SQL, Machine learning algorithms`
  },
  {
    title: "KPMG India Internship Trainee-Digital Trust(DT-CDSG) ",
    description: "worked as a intern in the digital trust team of KPMG India",
    year: "July 2023-Aug 2023",
    details: `Designed various posters, banners, EDMS, standees etc. to spread awareness about information 
    security among the employees of client experience. Gained hands-on experience on how security audits of major companies are conducted.`
  },
  {
    title: "Association for Computing Machinery -Shiv Nadar University",
    description: "Member of the tech team of the society",
    year: "DEC 2023-Present",
    details: "As a member of the club, I was a part of the organizing team of an inter college nationwide hackathon,HackData which had over 600 participants. I helped in coordination and execution of the Hackathon."
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState(Array(experiences.length).fill(false));

  const toggleDetails = index => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className="p-3 text-white w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Experiences</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <div className="border border-orange-400 rounded-lg hover:bg-gray-900 ">
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleDetails(index)}
            >
              <div>
                <h2 className="text-xl font-semibold inline-block mr-2">{exp.title}</h2>
                <span className="text-gray-400 inline-block mr-2">{exp.description}</span>
                <span className="text-gray-500">—— {exp.year}</span>
              </div>
              <div className="text-gray-400 hover:text-gray-200">
                {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {expanded[index] && (
              <div className="p-4 border-t border-gray-700 bg-gray-800">
                <p className="text-gray-400">{exp.details}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
