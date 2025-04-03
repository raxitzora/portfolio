import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
