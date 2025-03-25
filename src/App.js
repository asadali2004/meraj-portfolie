import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import VideoResume from "./components/VideoResume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MindMap from "./components/Mindmap";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="introduction">
        <About />
      </section>
      <section id="mindmap">
        <MindMap />
      </section>
      <section id="skills">
        <Skills />
      </section>
       <section id="projects">
        <Projects />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="video">
        <VideoResume />
      </section>
      <section id="contacts">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;











