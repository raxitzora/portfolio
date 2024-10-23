import React from 'react';

const Experience = () => {
  return (
    <div className="flex flex-col items-center w-full bg-gray-900"> {/* Full width */}
      {/* Experience Title */}
      <h2 className="text-4xl font-bold text-white mb-4 mt-4">Experience</h2>

      <div className="flex flex-col justify-between w-full max-w-6xl bg-gray-950 p-4 rounded-md shadow-md">
        {/* Experience Entry */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full mb-8">
          {/* Left Side - Year */}
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0 md:w-1/3">
            <p className="text-white opacity-50 text-lg">2023 - 2024</p>
          </div>

          {/* Right Side - Job Role and Description */}
          <div className="flex-1 text-center md:text-left md:w-2/3">
            <p className="text-purple-700 text-lg font-bold">Machine Learning Engineer</p>
            <p className="text-white opacity-50 text-sm mt-2">
              Developed and deployed machine learning models for various business applications. Worked with a team of data scientists to improve model accuracy and performance.
            </p>

            <div className="bg-gray-900 p-4 mt-4 rounded-md">
              <h3 className="text-purple-500 font-bold">Skills</h3>
              <div className="flex flex-wrap justify-start gap-2 mt-2">
                <span className="text-white opacity-75 px-2 py-1 border border-gray-700 rounded-md hover:bg-gray-700 hover:border-purple-700 transition-colors">TensorFlow</span>
                <span className="text-white opacity-75 px-2 py-1 border border-gray-700 rounded-md hover:bg-gray-700 hover:border-purple-700 transition-colors">Python</span>
                <span className="text-white opacity-75 px-2 py-1 border border-gray-700 rounded-md hover:bg-gray-700 hover:border-purple-700 transition-colors">Scikit-Learn</span>
                <span className="text-white opacity-75 px-2 py-1 border border-gray-700 rounded-md hover:bg-gray-700 hover:border-purple-700 transition-colors">Data Analysis</span>
                <span className="text-white opacity-75 px-2 py-1 border border-gray-700 rounded-md hover:bg-gray-700 hover:border-purple-700 transition-colors">Model Deployment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Entry 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full">
          {/* Left Side - Year */}
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0 md:w-1/3">
            <p className="text-white opacity-50 text-lg">2024 - Current</p>
          </div>

          {/* Right Side - Job Role and Description */}
          <div className="flex-1 text-center md:text-left md:w-2/3">
            <p className="text-purple-700 text-lg font-bold">Business Analyst</p>
            <p className="text-white opacity-50 text-sm mt-2">
              Performing Business analyst via machine learning and deep learning models on business.
            </p>

            <div className="bg-gray-900 p-4 mt-4 rounded-md">
              <h3 className="text-purple-500 font-bold">Skills</h3>
              <div className="flex flex-wrap justify-start gap-2 mt-2">
                <span className="text-white opacity-75 px-2 py-1 border border-gray-700 rounded-md hover:bg-gray-700 hover:border-purple-700 transition-colors">Python progamming</span>
                <span className="text-white opacity-75 px-2 py-1 border border-gray-700 rounded-md hover:bg-gray-700 hover:border-purple-700 transition-colors">Explorantory data analysis</span>
                <span className="text-white opacity-75 px-2 py-1 border border-gray-700 rounded-md hover:bg-gray-700 hover:border-purple-700 transition-colors">Visulization</span>
                <span className="text-white opacity-75 px-2 py-1 border border-gray-700 rounded-md hover:bg-gray-700 hover:border-purple-700 transition-colors">Charts and Patterns</span>
                <span className="text-white opacity-75 px-2 py-1 border border-gray-700 rounded-md hover:bg-gray-700 hover:border-purple-700 transition-colors">AI Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
