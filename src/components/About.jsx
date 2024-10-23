import React, { useEffect, useState } from 'react';

const About = () => {
  const [opacity, setOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true); 
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prev) => (prev === 1 ? 0.6 : 1)); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      setScrollingDown(newScrollY > scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]); 

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`p-10 bg-gray-900 text-white border-3 border-opacity-20 border-white rounded-lg transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold transition-opacity duration-500" style={{ opacity }}>
          About Me
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between">
        {/* Information */}
        <div className="pl-5 border-l-4 border-purple-500">
          <h3 className="text-3xl font-semibold mb-3 transition-colors duration-300 hover:text-purple-400">
            Raxit Zora
          </h3>
          <p className="text-xl text-green-400 mb-6">
            Web Developer | Machine Learning Engineer | Cybersecurity Enthusiast
          </p>
          <p className="text-lg mb-4">
            I’m passionate about creating efficient, user-friendly web applications using the latest AI technologies. With expertise in React, Node.js, MongoDB, and Tailwind CSS, I can rapidly develop and deploy modern websites.
          </p>
          <p className="text-lg mb-4">
            In addition to web development, I specialize in machine learning and generative AI, applying cutting-edge techniques to solve complex problems. I also have a growing interest in cybersecurity, focusing on protecting applications from vulnerabilities.
          </p>
          <p className="text-lg">
            I continuously strive to improve and stay ahead of the tech curve, exploring new technologies to bring innovative solutions to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
