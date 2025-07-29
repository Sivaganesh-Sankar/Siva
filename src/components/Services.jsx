import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Web Designing",
      desc: "Provides you with a customized website design that's perfect for your business or personal site."
    },
    {
      icon: "fa-solid fa-crop",
      title: "UI/UX Design",
      desc: "Branding, responsive web design, mobile app design, UX consulting, and promotional designs using the latest tools and technologies."
    },
    {
      icon: "fa-brands fa-app-store",
      title: "Software Testing",
      desc: "Comprehensive testing services including functional, performance, and security testing to ensure your software is bug-free, reliable, and user-friendly"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <h1 className="sub-title text-center text-4xl font-bold text-white">
          My <span className="text-blue-400">Services</span>
        </h1>
        <div className="services-list mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-slate-800/50 p-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition transform duration-300 text-center"
            >
              <i className={`${s.icon} text-5xl text-blue-400`}></i>
              <h2 className="text-2xl font-semibold mt-4 text-white">{s.title}</h2>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{s.desc}</p>
              <a
                href="#"
                className="inline-block mt-5 px-5 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
