import React, { useState } from 'react';
import sivaImage from '../assets/images/siva.png';

const About = () => {
  const [active, setActive] = useState('education'); // Default to 'course'

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        
        {/* Profile Image */}
        <div className="md:sticky top-20 w-full md:w-[330px] h-auto md:h-[560px] rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.7)] overflow-hidden flex-shrink-0 mx-auto md:mx-0">
          <img
            src={sivaImage}
            alt="Siva Ganesh"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-gray-800 dark:text-gray-300">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left">
            About Me
          </h1>
          <p className="leading-relaxed text-base sm:text-lg mb-8 text-justify">
            Hello! I’m Sivaganesh, a certified MERN stack developer, UI/UX designer, and software tester.
            I specialize in building full-stack web applications using MongoDB, Express, React, and Node.js,
            delivering scalable and efficient solutions. Alongside development, I design user-friendly and
            visually appealing interfaces to ensure an excellent user experience. With my software testing
            skills, I focus on identifying and fixing bugs to maintain high-quality and reliable products.
            I’m passionate about combining technology and creativity to build impactful digital experiences.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 border-b border-gray-300 dark:border-gray-700 pb-4 mb-6">
            {['course', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`capitalize px-4 py-2 font-semibold text-base sm:text-lg rounded-t ${
                  active === tab
                    ? 'text-primary border-b-4 border-primary dark:text-primary'
                    : 'text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary'
                } transition-colors duration-300`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-sm sm:text-base leading-relaxed">
            {active === 'course' && (
              <ul className="list-disc ml-5 space-y-3">
                <li>
                  <span className="text-primary font-semibold">2024–2025</span><br />
                  KGiSL Micro College - Full-Stack Development / UIUX Designing / Software Testing
                </li>
                <li>
                  <span className="text-primary font-semibold">2025</span><br />
                  TCS iON Career Edge - Young Professional
                </li>
                 <li>
                  <span className="text-primary font-semibold">2025</span><br />
                  Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation
                </li>
                 <li>
                  <span className="text-primary font-semibold">2025</span><br />
                  Tata Group - GenAI Powered Data Analytics Job Simulation
                </li>
                 <li>
                  <span className="text-primary font-semibold">2019</span><br />
                  NPTEL Programming in JAVA
                </li>
                <li>
                  <span className="text-primary font-semibold">2019</span><br />
                  Internship on Python
                </li>
                <li>
                  <span className="text-primary font-semibold">2018</span><br />
                  Internship on JAVA
                </li>
              </ul>
            )}

            {active === 'education' && (
              <ul className="list-disc ml-5 space-y-3">
                <li>
                  <span className="text-primary font-semibold">2021</span><br />
                  B.Tech Information Technology
                </li>
                
                
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
