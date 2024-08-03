// pages/index.js
"use client"
import Head from 'next/head';
import { useState } from 'react';
import TechCard from '../components/TechCard';

const items = [
  { name: 'Java', imageSrc: '/icons/icons8-java-50.png', link: 'https://www.java.com', category: 'Tools' },
  { name: 'Python', imageSrc: '/icons/icons8-python-50.png', link: 'https://www.python.org', category: 'Tools' },
  { name: 'JavaScript', imageSrc: '/icons/icons8-javascript-50.png', link: 'https://www.javascript.com', category: 'Tools' },
  { name: 'C-lang', imageSrc: '/icons/icons8-c-programming-50.png', link: 'https://en.wikipedia.org/wiki/C_(programming_language)', category: 'Tools' },
  { name: 'HTML', imageSrc: '/icons/icons8-html-5-50.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', category: 'Tools' },
  { name: 'CSS', imageSrc: '/icons/icons8-css3-50.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', category: 'Tools' },
  { name: 'Dart', imageSrc: '/icons/icons8-dart-50.png', link: 'https://dart.dev' },
  { name: 'Lua', imageSrc: '/icons/icons8-lua-language-50.png', link: 'https://www.lua.org' },
  { name: 'React', imageSrc: '/icons/icons8-react-native-50.png', link: 'https://reactjs.org', category: 'Frameworks' },
  { name: 'Next.js', imageSrc: '/icons/icons8-next.js-50.png', link: 'https://nextjs.org', category: 'Frameworks' },
  { name: 'TensorFlow', imageSrc: '/icons/icons8-tensorflow-50.png', link: 'https://www.tensorflow.org', category: 'Frameworks' },
  { name: 'Numpy', imageSrc: '/icons/icons8-numpy-50.png', link: 'https://numpy.org', category: 'Frameworks' },
  { name: 'Pandas', imageSrc: '/icons/icons8-pandas-50.png', link: 'https://pandas.pydata.org', category: 'Frameworks' },
  { name: 'Scikit-learn', imageSrc: '/icons/scikit-learn.png', link: 'https://scikit-learn.org', category: 'Frameworks' },
  { name: 'OpenCV', imageSrc: '/icons/icons8-opencv-50.png', link: 'https://opencv.org', category: 'Frameworks' },
  { name: 'Plotly', imageSrc: '/icons/Ploty.png', link: 'https://plotly.com', category: 'Frameworks' },
  { name: 'Matplotlib', imageSrc: '/icons/Matplotlib.png', link: 'https://matplotlib.org', category: 'Frameworks' },
  { name: 'Keras', imageSrc: '/icons/icons8-keras-50.png', link: 'https://keras.io', category: 'Frameworks' },
  { name: 'Seaborn', imageSrc: '/icons/seaborn.png', link: 'https://seaborn.pydata.org', category: 'Frameworks' },
  { name: 'VScode', imageSrc: '/icons/icons8-visual-studio-50.png', link: 'https://code.visualstudio.com', category: 'Technologies' },
  { name: 'Git', imageSrc: '/icons/icons8-git-50.png', link: 'https://git-scm.com', category: 'Technologies' },
  { name: 'GitHub', imageSrc: '/icons/icons8-github-50.png', link: 'https://github.com', category: 'Technologies' },
  { name: 'NPM', imageSrc: '/icons/icons8-npm-50.png', link: 'https://www.npmjs.com', category: 'Technologies' },
  { name: 'Figma', imageSrc: '/icons/icons8-figma-50.png', link: 'https://www.figma.com', category: 'Technologies' },
  { name: 'Postman', imageSrc: '/icons/icons8-postman-api-50.png', link: 'https://www.postman.com', category: 'Technologies' },
  { name: 'Vercel', imageSrc: '/icons/vercel.png', link: 'https://vercel.com', category: 'Technologies' },
];

const categories = ['Tools', 'Technologies', 'Frameworks'];

export default function ToolsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('Tools');

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Technologies</h2>
        <select 
          className="border border-orange-500 rounded p-2 bg-black text-white !important"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map(item => (
          <div key={item.name} className="flex flex-col items-center">
            <img src={item.imageSrc} alt={item.name} className="h-16 w-16 mb-2" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
