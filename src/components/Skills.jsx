import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaBug,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiAdobexd, SiFramer, SiSelenium, SiCanva,
} from 'react-icons/si';

const roles = [
  {
    name: 'Front-End Developer',
    icon: <FaReact size={42} className="text-cyan-400" />,
    glow: 'shadow-cyan-500',
  },
  {
    name: 'Back-End Developer',
    icon: <FaNodeJs size={42} className="text-green-500" />,
    glow: 'shadow-green-500',
  },
  {
    name: 'UI/UX Designing',
    icon: <FaFigma size={42} className="text-orange-400" />,
    glow: 'shadow-orange-500',
  },
  {
    name: 'Software Testing',
    icon: <FaBug size={42} className="text-red-400" />,
    glow: 'shadow-red-500',
  },
];

const tools = [
  { name: 'HTML', icon: <FaHtml5 size={52} />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt size={52} />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs size={52} />, color: 'text-yellow-400' },
  { name: 'React', icon: <FaReact size={52} />, color: 'text-cyan-400' },
  { name: 'MongoDB', icon: <SiMongodb size={52} />, color: 'text-green-600' },
  { name: 'Express', icon: <SiExpress size={52} />, color: 'text-gray-400' },
  { name: 'Node.js', icon: <FaNodeJs size={52} />, color: 'text-green-400' },
  { name: 'Figma', icon: <FaFigma size={52} />, color: 'text-orange-400' },
  { name: 'Adobe XD', icon: <SiAdobexd size={52} />, color: 'text-purple-500' },
  { name: 'Framer', icon: <SiFramer size={52} />, color: 'text-indigo-400' },
  { name: 'Canva', icon: <SiCanva size={52} />, color: 'text-blue-400' },
  { name: 'Selenium', icon: <SiSelenium size={52} />, color: 'text-green-400' },
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-slate-750/30 text-white-400">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-blue-400">  Stack of Magic</span>
        </h2>

        {/* Roles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`bg-slate-800/50 p-8 rounded-2xl text-center border border-white/10 hover:shadow-[0_0_20px] ${role.glow} transition duration-300`}
            >
              <div
                className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center bg-white/10 border border-white/10 backdrop-blur-md mb-4 ${role.glow} hover:shadow-lg transition`}
              >
                {role.icon}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{role.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, rotate: 2 }}
              className={`w-40 h-40 rounded-full flex flex-col items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-[0_0_15px] hover:shadow-current transition duration-300 ${tool.color}`}
            >
              {tool.icon}
              <span className="text-base font-semibold mt-2 text-white">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
