import React, { useEffect, useState } from 'react';
import RaxitImage from '../assets/raxit-zora.jpeg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false); // Start with false for fade-in effect

  useEffect(() => {
    // Fade in when the component mounts
    const fadeInTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Slight delay for better effect

    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      const rect = heroSection.getBoundingClientRect();

      // Determine if the section is visible based on its position relative to the viewport
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      // Fade out when scrolling down, fade in when scrolling up
      setIsVisible(isInViewport);
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Initial check to fade in on page load
    handleScroll();

    // Cleanup the event listener when the component unmounts
    return () => {
      clearTimeout(fadeInTimeout); // Cleanup the timeout
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="hero-section"
      className="flex items-center justify-between p-10 bg-gray-900 text-white h-screen relative border-2 border-black"
      style={{
        backgroundSize: 'cover',
      }}
    >
      {/* Left Side */}
      <div
        className={`max-w-md transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}
      >
        <h1 className="text-6xl font-extrabold mb-2 shadow-neon-blue">Raxit Zora</h1>
        <p className="text-lg leading-relaxed mt-5 font-bold">
          Passionate about leveraging data and technology to drive innovation and create intelligent solutions that impact the world.
        </p>
      </div>

      {/* Right Side */}
      <div
        className={`relative transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        <img
          src={RaxitImage}
          alt="Raxit Zora"
          className="w-72 h-96 rounded-lg opacity-60 shadow-neon-green"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Hero;
