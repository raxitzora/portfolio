import React, { useState } from 'react';
import me from '../../assets/me.jpg';
import hire from '../../assets/hire.jpg';
import hirePdf from '../../assets/hire-aiengineer.pdf'; // Path to your PDF file

const Intro = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10 px-6 sm:px-10 text-center lg:text-left w-full max-w-7xl mx-auto" id="intro">
      
      {/* Intro Content */}
      <div className="max-w-xl lg:max-w-2xl">
        <span className="text-3xl sm:text-4xl text-white font-light">Welcome,</span>
        <span className="text-5xl sm:text-6xl text-white pl-2 sm:pl-4">I'm</span> 
        <span className="text-6xl sm:text-7xl text-yellow-400 pl-2 sm:pl-4 font-bold">Raxit Zora</span>
        <br /> 
        <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mt-4 sm:mt-6 block">
          Full-Stack AI Engineer
        </span>
        <p className="text-gray-200 font-extralight text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed">
          I am a Full-Stack AI Engineer passionate about creating AI-powered software.
        </p>

        {/* Hire Me Button */}
        <button 
          onClick={() => setShowPdf(true)} 
          className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300 mt-6 mx-auto lg:mx-0"
        >
          <img src={hire} alt="Hire Me" className="h-5 sm:h-6 w-5 sm:w-6 object-contain" />
          Hire Me
        </button>
      </div>
      
      {/* Profile Image */}
      <div className="mt-10 lg:mt-0 lg:ml-20 flex justify-center">
        <img src={me} alt="profile" className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg" />
      </div>

      {/* PDF Display */}
      {showPdf && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-full sm:max-w-2xl">
            <iframe 
              src={hirePdf} 
              width="100%" 
              height="500px" 
              title="Hire AI Engineer"
              className="rounded-lg">
            </iframe>
            <button 
              onClick={() => setShowPdf(false)} 
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full w-full sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
