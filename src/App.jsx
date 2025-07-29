import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import SkillsTicker from './components/SkillsTicker';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      
      <Header />
       <SkillsTicker /> 
      <About data-aos="fade-up" />
      <Skills data-aos="fade-up" />
      <Services data-aos="fade-up" />
      <Portfolio data-aos="fade-up" />
      <Contact data-aos="fade-up" />
      <Footer />
    </>
  );
}

export default App;
