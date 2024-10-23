import React, { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaRobot, FaDatabase, FaTerminal } from 'react-icons/fa'; // Importing necessary icons
import { SiPython } from 'react-icons/si';

const Technologies = () => {
  const [position, setPosition] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollDirection = event.deltaY > 0 ? 1 : -1;
      setPosition((prevPosition) => {
        const newPosition = prevPosition + scrollDirection * 1; // Increment/Decrement position based on scroll
        return Math.max(Math.min(newPosition, 100), 0); // Ensure position stays between 0 and 100
      });
      setRotation((prevRotation) => prevRotation + scrollDirection * 10); // Spin faster based on scroll speed
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const leftTranslate = `translateX(${-position}%)`; // Left movement
  const rightTranslate = `translateX(${position}%)`; // Right movement

  return (
    <div className="flex flex-col bg-gray-900 p-10 text-white items-center h-screen justify-center">
      <h1 className="text-5xl font-bold mb-8">Technologies</h1>

      <div
        className="flex justify-center items-center relative"
        style={{
          height: '400px', // Adjusted height to accommodate more logos
          width: '400px',
        }}
      >
        {/* React Logo */}
        <div
          className="absolute"
          style={{
            transform: `${leftTranslate} translateY(-100px) rotate(${rotation}deg)`, // Adjusted translateY for spacing
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="bg-blue-500 p-4 rounded-full shadow-neon-blue transition duration-300 hover:shadow-neon-blue hover:scale-110 flex items-center justify-center">
            <FaReact className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Node.js Logo */}
        <div
          className="absolute"
          style={{
            transform: `${rightTranslate} translateY(-100px) rotate(${rotation}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="bg-green-500 p-4 rounded-full shadow-neon-green transition duration-300 hover:shadow-neon-green hover:scale-110 flex items-center justify-center">
            <FaNodeJs className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Robotics Logo */}
        <div
          className="absolute"
          style={{
            transform: `${leftTranslate} translateY(0) rotate(${rotation}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="bg-gray-500 p-4 rounded-full shadow-neon-gray transition duration-300 hover:shadow-neon-gray hover:scale-110 flex items-center justify-center">
            <FaRobot className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Python Logo */}
        <div
          className="absolute"
          style={{
            transform: `${rightTranslate} translateY(0) rotate(${rotation}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="bg-yellow-500 p-4 rounded-full shadow-neon-yellow transition duration-300 hover:shadow-neon-yellow hover:scale-110 flex items-center justify-center">
            <SiPython className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* SQL Database Logo */}
        <div
          className="absolute"
          style={{
            transform: `${leftTranslate} translateY(100px) rotate(${rotation}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="bg-purple-600 p-4 rounded-full shadow-neon-purple transition duration-300 hover:shadow-neon-purple hover:scale-110 flex items-center justify-center">
            <FaDatabase className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Terminal Logo */}
        <div
          className="absolute"
          style={{
            transform: `${rightTranslate} translateY(100px) rotate(${rotation}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="bg-black p-4 rounded-full shadow-neon-black transition duration-300 hover:shadow-neon-black hover:scale-110 flex items-center justify-center">
            <FaTerminal className="h-16 w-16 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
