import React from "react";
import About from "./components/About";
import Button from "./components/Button";
import Contact from "./components/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Roadmap from "./components/roadmap/Roadmap";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Roadmap/>
      <Contact/>
    </>
  );
};

export default App;
