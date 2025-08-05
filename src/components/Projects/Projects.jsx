import React from 'react';

const projects = [
  {
    image: "/assets/cyberproject.jpg",
    title: "CyberAgent",
    description: "A real-time cyber intelligence system that monitors security vulnerabilities and delivers instant updates on active cyber threats.",
    github: "https://github.com/your-username/cyberagent",
    live: "https://cyberagent-demo.vercel.app"
  },
  {
    image: "/assets/carproject.png",
    title: "Car Price Prediction",
    description: "A machine learning project that predicts the price of used cars based on parameters like brand, model year, fuel type, and mileage.",
    github: "https://github.com/your-username/car-price-prediction",
    live: "https://car-price-prediction-demo.vercel.app"
  },
  {
    image: "/assets/deckoidproject.png",
    title: "Deckoid Frontend Website",
    description: "A frontend website using NextJS, framer-motion and gsap.",
    github: "https://github.com/raxitzora/Deckoid",
    live: "https://deckoid.vercel.app/"
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 py-20 px-6">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-white mb-16">
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center lg:items-start bg-gray-800/90 border border-gray-700 rounded-3xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl"
          >
            {/* Left: Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/2 h-64 lg:h-full object-cover"
            />

            {/* Right: Project Details */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 text-white flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-bold text-yellow-300 mb-3">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Links */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition duration-200"
                >
                  View on GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-full transition duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
