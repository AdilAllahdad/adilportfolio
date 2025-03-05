import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import myimg from "../assets/myimg.jpeg"

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - Heading, Description, Socials */}
          <div className="text-gray-800">
            <h2 className="text-4xl font-bold text-black">About Me</h2>
            <p className="mt-4 text-lg">
              I'm <span className="font-semibold">Adil Allahdad</span>, a passionate web developer with expertise in the MERN stack, React, and Tailwind CSS. I specialize in building modern, responsive, and user-friendly web applications. I love transforming ideas into reality through code.
            </p>
            <p className="mt-2 text-lg">
              Whether it’s frontend development, backend solutions, or full-stack applications, I thrive on creating seamless digital experiences.
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com/in/adil-allahdad-web-developer/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-800 transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com/AdilAllahdad" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-2xl hover:text-gray-700 transition">
                <FaGithub />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-600 transition">
                <FaTwitter />
              </a> */}
              <a href="https://www.instagram.com/adil.web.dev/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:text-pink-700 transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src={myimg}// Replace with your actual image path
              alt="Adil Allahdad"
              className="w-60 md:w-80 lg:w-96 rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
