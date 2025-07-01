import React, { useState } from 'react';
import me from '../../assets/me.jpg';
import hire from '../../assets/hire.jpg';
import hirePdf from '../../assets/raxitzora.pdf'; // Path to your PDF file

const Intro = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10 px-4 sm:px-6 md:px-10 text-center lg:text-left w-full max-w-7xl mx-auto" id="intro">
      
      {/* Intro Content */}
      <div className="max-w-lg sm:max-w-xl lg:max-w-2xl">
        <h1 className="text-2xl sm:text-3xl text-white font-light">
          Welcome,
          <span className="text-4xl sm:text-5xl text-white pl-2 sm:pl-3">I'm</span> 
          <span className="text-5xl sm:text-6xl text-yellow-400 pl-2 sm:pl-3 font-bold block sm:inline">
            Raxit Zora
          </span>
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-4 sm:mt-5 leading-tight">
          Full-Stack AI Engineer
        </h2>

        <p className="text-gray-200 font-light text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed">
          I am a Full-Stack AI Engineer passionate about creating AI-powered software.
        </p>

        {/* Hire Me Button */}
        <button 
          onClick={() => setShowPdf(true)} 
          className="flex items-center gap-2 bg-white text-black px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300 mt-6 mx-auto lg:mx-0"
        >
          <img src={hire} alt="Hire Me" className="h-5 sm:h-6 w-5 sm:w-6 object-contain" />
          <span className="text-sm sm:text-lg font-medium">Hire Me</span>
        </button>
      </div>
      
      {/* Profile Image */}
      <div className="mt-10 lg:mt-0 lg:ml-12 flex justify-center">
        <img src={me} alt="profile" className="w-32 sm:w-48 md:w-64 lg:w-80 h-32 sm:h-48 md:h-64 lg:h-84 object-cover shadow-lg" />
      </div>

      {/* PDF Display */}
      {showPdf && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg max-w-full sm:max-w-2xl">
            <iframe 
              src={hirePdf} 
              width="100%" 
              height="450px" 
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
