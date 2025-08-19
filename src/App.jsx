import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
