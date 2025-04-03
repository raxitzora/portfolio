import React, { useState } from 'react';
import me from '../../assets/me.jpg';
import { Link } from 'react-scroll';
import hire from '../../assets/hire.jpg';
import hirePdf from '../../assets/hire-aiengineer.pdf'; // path to your PDF file


const Intro = () => {
  // State to handle PDF visibility
  const [showPdf, setShowPdf] = useState(false);

  // Function to toggle PDF visibility
  const handleHireClick = () => {
    setShowPdf(!showPdf);
  };

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center mt-20 px-6 sm:px-10 text-center lg:text-left w-full max-w-7xl mx-auto' id='intro'>
      {/* Intro Content */}
      <div className='max-w-xl lg:max-w-2xl'>
        <span className='text-3xl sm:text-4xl text-white font-light'>Welcome,</span>
        <span className='text-5xl sm:text-6xl text-white pl-2 sm:pl-4'>I'm</span> 
        <span className='text-6xl sm:text-7xl text-yellow-400 pl-2 sm:pl-4 font-bold'>Raxit Zora</span>
        <br /> 
        <span className='text-5xl sm:text-7xl font-extrabold text-white mt-4 sm:mt-6 block'>Full-Stack AI Engineer</span>
        <p className='text-gray-200 font-extralight text-xl sm:text-2xl mt-4'>
          I am a Full-Stack AI Engineer passionate about creating AI-powered software.
        </p>
        
        <Link to="contact" smooth={true} duration={500}>
          <button 
            onClick={handleHireClick} // Toggle the PDF on click
            className='flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300 mt-6'>
            <img src={hire} alt="Hire Me" className='h-5 sm:h-6 w-5 sm:w-6 object-contain' />
            Hire Me
          </button>
        </Link>
      </div>
      
      {/* Profile Image */}
      <div className='mt-10 lg:mt-0 lg:ml-20 flex justify-center'>
        <img src={me} alt="profile" className='h-60 sm:h-80 w-60 sm:w-80 object-cover rounded-full shadow-lg' />
      </div>

      {/* PDF Display */}
      {showPdf && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded-lg'>
            <iframe 
              src={hirePdf} 
              width="800" 
              height="600" 
              title="Hire AI Engineer"
              className="shadow-lg rounded-lg">
            </iframe>
            <button 
              onClick={() => setShowPdf(false)} 
              className='mt-4 bg-red-500 text-white py-2 px-4 rounded-full'>
              Close
            </button>
          </div>
          
        </div>
      
      )}
    </div>

  );
};

export default Intro;
