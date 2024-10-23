import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons for contact methods
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-purple-600 text-2xl hover:text-purple-700 transition duration-300" />,
      text: 'imraxitzora@gmail.com',
      link: 'mailto:your-email@example.com',
    },
    {
      icon: <FaInstagram className="text-purple-600 text-2xl hover:text-purple-700 transition duration-300" />,
      text: 'Instagram Profile',
      link: 'https://www.instagram.com/raxit.zora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    },
    {
      icon: <FaLinkedin className="text-purple-600 text-2xl hover:text-purple-700 transition duration-300" />,
      text: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/raxit-zora-2a684129b/?originalSubdomain=in',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-900 py-12 transition-all duration-500">
      <motion.h2
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col items-center w-full max-w-md bg-gray-950 p-6 rounded-md shadow-md space-y-4">
        {contactInfo.map((info, index) => (
          <motion.a
            key={index}
            href={info.link}
            className="flex items-center w-full p-4 bg-gray-800 rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-purple-600" // Add hover background color
            whileHover={{ scale: 1.05 }} // Scale animation on hover
            target="_blank"
            rel="noopener noreferrer"
          >
            {info.icon}
            <span className="ml-4 text-white text-lg">{info.text}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
