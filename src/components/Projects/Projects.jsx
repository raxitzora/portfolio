
const projects = [
  {
    image: "/assets/cyberproject.jpg",
    title: "CyberSecAI",
    description:
      "CyberSecurity Chatbot that can boost productivity and helpful to redteamers, blueteamers and bug bounty hunters. It is unfiltered Chatbot made with fastapi, Nextjs15, typescript and vercel AI developement kit(ADK)",
    github: "https://github.com/raxitzora/CyberSecFrontend",
    live: "https://cybersecurityai.vercel.app/",
  },

  {
    image: "/assets/deckoidproject.png",
    title: "Deckoid Frontend Website",
    description:
      "A sleek frontend website built with Next.js, Framer Motion, and GSAP for smooth animations and responsive layout.",
    github: "https://github.com/raxitzora/Deckoid",
    live: "https://deckoid.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-20 px-6" aria-label="Projects Section">
      <h2 className="text-5xl sm:text-6xl font-extrabold text-center text-white mb-16">
        My Projects
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {projects.map((project, index) => (
          <article
            key={index}
            className="flex flex-col lg:flex-row items-center lg:items-start bg-gray-800/90 border border-gray-700 rounded-3xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={`Screenshot of ${project.title} project`}
              className="w-full lg:w-1/2 h-64 lg:h-full object-cover"
              loading="lazy"
            />

            {/* Project Content */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 text-white flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl font-bold text-yellow-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Action Links */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View ${project.title} source code on GitHub`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition duration-200"
                >
                  View on GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit live demo of ${project.title}`}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-full transition duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
