// app/page.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const Page = () => {
  return (
    <>
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="qualifications">
        <Qualifications />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Page;
