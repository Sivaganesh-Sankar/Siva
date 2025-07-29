import React, { useState } from "react";

const works = [
  
  
  {
    img: "/images/todo.png",
    title: "TODO-List Website",
    desc: "A Single Page Website to note & save/delete items made using JavaScript",
    link: "https://sivaganesh2622.github.io/ToDO-Lists/",
    category: "JavaScript",
  },
  
  {
    img: "/images/weather.png",
    title: "Live Weather App",
    desc: "A real-time weather app with search functionality using JavaScript.",
    link: "https://weather-self-chi.vercel.app/",
    category: "JavaScript",
  },
  
  {
    img: "public/images/mernproject.png",
    title: "S-Deals E-commerce Website ",
    desc: "A full-stack MERN e-commerce application with user authentication and CRUD features.",
    link: "https://s-deals.vercel.app/",
    category: "MERN",
  },
  {
    img: "/images/game.png",
    title: "Game Landing Page UI",
    desc: "A cinematic sci-fi landing page UI designed in Figma.",
    link: "https://www.behance.net/gallery/229982171/EchoDust-Cinematic-Sci-Fi-Game-Landing-Page-UI",
    category: "UIUX",
  },
  {
    img: "/images/pethub.png",
    title: "PetHub Mobile App UI",
    desc: "A modern mobile app UI for pet adoption, designed with user-friendly navigation in Figma. ",
    link: "https://www.behance.net/gallery/218736919/iOS-Presentation",
    category: "UIUX",
  },
  {
    img: "/images/burger.png.png",
    title: "Burger Website UI Design  Prototype",
    desc: "An interactive mobile app prototype built in Figma.",
    link: "https://www.figma.com/proto/tjEM08XICGivSYaTzqd6ii/Untitled?page-id=0%3A1&node-id=17-266&viewport=-4941%2C177%2C0.21&scaling=scale-down&content-scaling=fixed&embed-host=share",
    category: "Prototype",
  },
  {
    img: "/images/car.png.png",
    title: "Car Website UI Design  Prototype",
    desc: "An interactive mobile app prototype built in Figma.",
    link: "https://embed.figma.com/proto/2psmDjLOvJQJ6DCa9YBEcg/BMW-CAR?page-id=285%3A1572&node-id=285-1573&p=f&viewport=374%2C40%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=285%3A1573&show-proto-sidebar=1&embed-host=share",
    category: "Prototype",
  },
  {
    img: "/images/chatgpt.png",
    title: " Chatgpt Website UI Design  Prototype",
    desc: "An interactive mobile app prototype built in Figma and animaapp.",
    link: "https://green-art-1346.animaapp.io/",
    category: "Prototype",
  },
  {
    img: "/images/plant.png",
    title: " Plant Mobile App UI Design  Prototype",
    desc: "An interactive mobile app prototype built in Figma.",
    link: "https://www.figma.com/proto/APEpHW3ChVRpP1aLfCmeR5/Plant-App-UI-Design-in-Figma?page-id=0%3A1&node-id=93-166&p=f&viewport=-6833%2C-2949%2C0.78&scaling=contain&content-scaling=fixed&embed-host=share",
    category: "Prototype",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredWorks =
    filter === "All" ? works : works.filter((work) => work.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        {/* Colorful My Work title */}
        <h1 className="sub-title text-center text-4xl font-bold text-white">
          My <span className="text-blue-400">Work</span>
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 mt-6">
          {["All", "MERN", "UIUX", "Prototype", "JavaScript"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 ${
                filter === category
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-slate-700 hover:bg-slate-600 text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredWorks.map((w, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all bg-slate-800/50 p-4"
            >
              <img
                src={w.img}
                alt={w.title}
                className="w-full h-50 object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-semibold text-white">{w.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{w.desc}</p>
                {/* View Project Button */}
                <a
                  href={w.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button Centered */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 text-white px-10 py-4 rounded-lg text-lg font-medium transition"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
