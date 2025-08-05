import { useState } from 'react';

const Intro = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section
      id="intro"
      className="flex flex-col lg:flex-row items-center justify-center mt-10 px-4 sm:px-6 md:px-10 text-center lg:text-left w-full max-w-7xl mx-auto"
    >
      {/* Intro Text Content */}
      <div className="max-w-lg sm:max-w-xl lg:max-w-2xl space-y-6">
        {/* ✅ SEO: Main Heading */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug">
          Raxit Zora – Full Stack Developer, AI & Cybersecurity Enthusiast
        </h1>

        {/* ✅ Changed from h2 to p to maintain <h1> hierarchy */}
        <p className="text-gray-400 text-xl sm:text-2xl font-semibold leading-tight">
          I design scalable full-stack applications with a focus on AI integration and cybersecurity best practices.
        </p>

        {/* ✅ SEO keyword-enhanced description */}
        <p className="text-gray-200 text-lg sm:text-xl font-light leading-relaxed">
          Passionate about building intelligent web solutions using React, Node.js, MongoDB, Python, and securing them with ethical hacking knowledge. Based in India.
        </p>

        {/* Hire Me Button */}
        <button
          onClick={() => setShowPdf(true)}
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300 mx-auto lg:mx-0"
        >
          <img
            src="/assets/hire.jpg"
            alt="Hire Raxit Zora button icon"
            className="h-6 w-6 object-contain"
          />
          <span className="text-lg font-medium">Hire Me</span>
        </button>
      </div>

      {/* Profile Image */}
      <div className="mt-10 lg:mt-0 lg:ml-12 flex justify-center">
        <img
          src="/assets/me.jpg"
          alt="Raxit Zora profile picture"
          className="w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 object-cover rounded-full border-4 border-gray-300 shadow-lg hover:border-yellow-600 hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* PDF Modal Viewer */}
      {showPdf && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Resume PDF Viewer"
        >
          <div className="relative w-[90%] h-[90%] bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="/assets/raxitzora.pdf"
              title="Raxit Zora Resume PDF"
              className="w-full h-full"
            ></iframe>
            <button
              onClick={() => setShowPdf(false)}
              className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;
