import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCanva, SiFramer, SiFigma } from "react-icons/si";


const SkillsTicker = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "UI/UX", icon: <SiCanva className="text-blue-400" /> },
    { name: "Software Testing", icon: <FaGithub className="text-white" /> },
    { name: "Canva", icon: <SiCanva className="text-sky-400" /> },
    { name: "Framer", icon: <SiFramer className="text-pink-400" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-400" /> },
  ];

  return (
    <div className="relative bg-[#0b0f1a] overflow-hidden py-6">
      {/* Left Gradient */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0b0f1a] via-[#0b0f1a]/80 to-transparent z-20"></div>

      {/* Right Gradient */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0b0f1a] via-[#0b0f1a]/80 to-transparent z-20"></div>

      {/* Single Row */}
      <div className="whitespace-nowrap flex animate-marquee gap-12 text-xl md:text-2xl font-semibold">
        {skills.concat(skills).map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 hover:scale-110 transition-transform duration-300"
          >
            {skill.icon}
            <span className="text-white">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Glowing Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-sm opacity-80"></div>
    </div>
  );
};

export default SkillsTicker;
