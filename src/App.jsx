import React from "react";
import About from "./components/About";
import Button from "./components/Button";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
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
    </>
  );
};

export default App;
