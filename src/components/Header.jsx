import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { LiaAngleDoubleLeftSolid } from "react-icons/lia";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { SiBehance } from "react-icons/si";

import profileImg from "../assets/images/profile.png";
import cvFile from "../assets/cv/siva-cv.pdf";

const Hero = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Full Stack Developer", "UI/UX Designer", "Software Tester"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = cvFile;
    a.download = "Sivaganesh_Sankar_CV.pdf";
    a.click();
  };

  return (
    <section
      id="home"
      className="bg-[#0b0f1a] text-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 py-10 relative overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="space-y-4 text-center md:text-left z-10">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300">
            Hello<span className="text-blue-400">.</span>
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            I’m <span className="text-white">Sivaganesh Sankar</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
            <span ref={typedEl}></span>
          </h2>

          {/* Social + CV */}
          <div className="pt-6 flex flex-col items-center md:items-start gap-4">
            <div className="flex gap-4">
              <a
                href="mailto:sivaganeshshankar@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href="https://www.behance.net/sivag26"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
              >
                <SiBehance size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sivag-s/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>

            <button
              onClick={handleDownload}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-md text-base font-medium transition shadow-lg"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex items-center justify-center">
          {/* Glowing Background */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-[24rem] md:h-[24rem] rounded-full bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-600 opacity-80 blur-[1px] animate-pulse" />

          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Profile"
            className="relative z-10 w-64 sm:w-72 md:w-[26rem] rounded-full shadow-[0_0_50px_rgba(59,130,246,0.8)]"
          />

          {/* Floating Arrows */}
          <LiaAngleDoubleLeftSolid className="absolute -left-16 -top-16 sm:-left-28 sm:-top-28 text-8xl sm:text-[10rem] text-blue-400 opacity-80 animate-float" />
          <HiChevronDoubleRight className="absolute -right-16 -bottom-16 sm:-right-28 sm:-bottom-28 text-8xl sm:text-[10rem] text-blue-400 opacity-80 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
