import React from 'react';
import projectImage1 from '../assets/projects/project-1.jpg';
import projectImage2 from '../assets/projects/project-2.jpg';
import projectImage3 from '../assets/projects/project-3.jpg';
import projectImage4 from '../assets/projects/project-4.jpg';

const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full bg-gray-900 py-12">
      <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>

      {/* Project 1 Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl bg-gray-950 p-8 rounded-md shadow-md mb-8 transition-transform transform hover:scale-105 hover:shadow-lg border border-transparent hover:border-purple-500 hover:shadow-purple-500/50">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 overflow-hidden rounded-md">
          <img 
            src={projectImage1} 
            alt="Car Price Prediction" 
            className="w-72 h-48 object-cover rounded-md shadow-lg transition-transform duration-300 transform hover:scale-110 hover:rotate-1 hover:shadow-2xl" 
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-4">Car Price Prediction</h3>
          <p className="text-white opacity-75 text-sm mb-6">
            In this project I made a model that predicts the price of cars via machine learning algorithms. I used a quick car dataset for this.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Python Programming</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Machine Learning Algorithms</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Streamlit</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Artificial Intelligence</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Low-Code Tech</span>
          </div>
        </div>
      </div>

      {/* Project 2 Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl bg-gray-950 p-8 rounded-md shadow-md mb-8 transition-transform transform hover:scale-105 hover:shadow-lg border border-transparent hover:border-purple-500 hover:shadow-purple-500/50">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 overflow-hidden rounded-md">
          <img 
            src={projectImage2} 
            alt="Project 2" 
            className="w-72 h-48 object-cover rounded-md shadow-lg transition-transform duration-300 transform hover:scale-110 hover:rotate-1 hover:shadow-2xl" 
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-4">Retails Price Prediction</h3>
          <p className="text-white opacity-75 text-sm mb-6">
            In this project I used Unsupervised learning algorithms like K-means Clustering, DBScan, Hierarchical Clustering, and Spectral Clustering. It generates clusters and charts integrated with a ChatBot that learns from the charts and gives answers based on them.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Python Programming</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Streamlit</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Unsupervised Algorithms</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Visualization</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">EDA</span>
          </div>
        </div>
      </div>

      {/* Project 3 Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl bg-gray-950 p-8 rounded-md shadow-md mb-8 transition-transform transform hover:scale-105 hover:shadow-lg border border-transparent hover:border-purple-500 hover:shadow-purple-500/50">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 overflow-hidden rounded-md">
          <img 
            src={projectImage3} 
            alt="Project 3" 
            className="w-72 h-48 object-cover rounded-md shadow-lg transition-transform duration-300 transform hover:scale-110 hover:rotate-1 hover:shadow-2xl" 
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-4">NMAP Automation</h3>
          <p className="text-white opacity-75 text-sm mb-6">
            In this project I made Automated nmap scripts tools using Python. It is specially designed for website pentesting and network security testing in less time.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Python Programming</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">NMAP scripts</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Networking concepts</span>
          </div>
        </div>
      </div>

      {/* Project 4 Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl bg-gray-950 p-8 rounded-md shadow-md mb-8 transition-transform transform hover:scale-105 hover:shadow-lg border border-transparent hover:border-purple-500 hover:shadow-purple-500/50">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 overflow-hidden rounded-md">
          <img 
            src={projectImage4} 
            alt="Project 4" 
            className="w-72 h-48 object-cover rounded-md shadow-lg transition-transform duration-300 transform hover:scale-110 hover:rotate-1 hover:shadow-2xl" 
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-4">Email Automation</h3>
          <p className="text-white opacity-75 text-sm mb-6">
            In this project I made tools that can send emails to thousands of people in one click. Users can attach files into it.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Python Programming</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Data manipulation</span>
            <span className="text-purple-700 border border-purple-900 px-3 py-1 rounded-md hover:bg-purple-900 hover:text-white transition-colors">Automation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
