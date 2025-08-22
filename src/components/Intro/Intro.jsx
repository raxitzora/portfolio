import { useState } from "react";

const Intro = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-center mt-10 px-4 sm:px-6 md:px-10 text-center lg:text-left w-full max-w-7xl mx-auto"
    >
      {/* Intro Text Content */}
      <div className="max-w-lg sm:max-w-xl lg:max-w-2xl space-y-6">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug">
          Raxit Zora – Full Stack Developer, AI & Cybersecurity Enthusiast
        </h1>

        <p className="text-gray-400 text-xl sm:text-2xl font-semibold leading-tight">
          I design scalable full-stack applications with a focus on AI integration and cybersecurity best practices.
        </p>

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

      {/* Profile Image with moving red light effect */}
      <div className="mt-10 lg:mt-0 lg:ml-12 flex justify-center">
        <div className="gradient-border">
              <span className="red-snake-ring"></span>

          <img
            src="/assets/op-image.jpg"
            alt="Raxit Zora profile picture"
            className="w-40 sm:w-56 md:w-64 lg:w-80 max-w-full object-cover shadow-lg"
          />
        </div>
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

      {/* 🔥 Custom Animation Styles */}
      <style jsx>{`
        @keyframes glowing {
          0% {
            box-shadow: 0 0 5px red, 0 0 10px red, 0 0 20px red,
              0 0 40px rgba(255, 0, 0, 0.8);
          }
          50% {
            box-shadow: 0 0 20px red, 0 0 40px red, 0 0 60px rgba(255, 0, 0, 0.9),
              0 0 80px rgba(255, 0, 0, 1);
          }
          100% {
            box-shadow: 0 0 5px red, 0 0 10px red, 0 0 20px red,
              0 0 40px rgba(255, 0, 0, 0.8);
          }
        }

        .animate-glow {
          border-radius: 9999px;
          animation: glowing 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Intro;
