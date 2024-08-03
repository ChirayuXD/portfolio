// components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, liveLink, codeLink, moreLink }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <div className="flex space-x-4">
        <a href={liveLink} className="text-yellow-400 hover:underline">Live ⚡</a>
        <a href={codeLink} className="text-blue-400 hover:underline">Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;
