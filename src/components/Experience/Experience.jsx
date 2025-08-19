// src/components/Experience/Experience.jsx
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "ML Engineer",
    company: "Unified Mentor",
    type: "Remote",
    duration: "JAN 2025 – FEB 2025",
    side: "left",
    skills: [
      "Python",
      "Supervised algos",
      "Unsupervised algos",
      "Data Preprocessing",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "Fullstack Engineer",
    company: "Deckoid Solution",
    type: "Hybrid",
    duration: "July 2025 – PRESENT",
    side: "right",
    skills: ["Next.js", "JavaScript", "TailwindCSS", "MERN Stack", "UI/UX"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-950 to-black text-white py-20 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 sm:mb-20 tracking-wide">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Experience
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Vertical gradient line */}
          <div className="absolute w-1 h-full bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-[1px]" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`w-full flex flex-col md:flex-row ${
                exp.side === "left"
                  ? "md:justify-end md:pr-12 lg:pr-16"
                  : "md:justify-start md:pl-12 lg:pl-16"
              } relative mb-16 sm:mb-20 md:mb-24`}
            >
              {/* Connector dot */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 ${
                  exp.side === "left" ? "md:right-0" : "md:left-0"
                } top-0 md:top-1/2 -translate-y-1/2 flex items-center`}
              >
                <span className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 border-4 border-gray-950 shadow-xl animate-pulse" />
              </div>

              {/* Card */}
              <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700 hover:border-yellow-400 transition-all duration-300 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl w-full md:max-w-xl text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center md:justify-start gap-2 text-yellow-400">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                  {exp.title}
                </h3>
                <p className="text-lg sm:text-xl font-semibold text-gray-200 mt-2">
                  {exp.company}
                </p>
                <p className="text-sm sm:text-base text-gray-400 italic mt-1">
                  {exp.type} | {exp.duration}
                </p>

                {/* Skills */}
                <div className="mt-5 sm:mt-6">
                  <p className="text-sm sm:text-base font-semibold text-gray-300 mb-3">
                    Skills:
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-gray-800 to-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base text-gray-200 hover:from-yellow-400 hover:to-pink-500 hover:text-black transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
