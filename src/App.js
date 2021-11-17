import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <>
     <NavBar/>
     <Hero/>
     <About/>
     <Skills/>
     <Services/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
