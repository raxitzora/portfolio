import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    const audio = new Audio('/audio/welcome.wav');

    // Function to play audio
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error("Audio autoplay failed: ", error);
      }
    };

    // Call the playAudio function
    playAudio();

    return () => {
      audio.pause(); // Pause audio when component unmounts
      audio.currentTime = 0; // Reset audio to the beginning
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      {/* Other components go here */}
    </div>
  );
};

export default App;
