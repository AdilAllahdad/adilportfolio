import React from "react";
import img from "../assets/img.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import LightRays from './LightRays';


const Hero = () => {
  

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/AdilAllahdad", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/adil-allahdad-web-developer/", icon: FaLinkedinIn },
    { name: "Instagram", url: "https://www.instagram.com/adil.web.dev/", icon: FaInstagram }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        {/* Background Light Rays */}
      <div className="absolute inset-0 z-0">
        <LightRays />
      </div>
      {/* Background gradient */}
      <div className="absolute" />
      {/* Additional gradient layer for depth */}
      <div className="absolute" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-33 pb-9 md:pb-14 relative z-10">
        <div className="gap-8">
          
          {/* Left Side - Text Content */}
          <div className="text-white justify-items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Hello, I'm
              </h3>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mt-2">
              Adil Allahdad
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mt-2">
              <Typewriter
                words={["Web Developer", "MERN Stack Developer", "WordPress Developer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-center">
              I craft modern, responsive, and high-performance web solutions focused on clean architecture, scalability, and delivering seamless, user-friendly experiences across both front-end and back-end.
            </p>

            <div className="flex gap-4 mt-6">
              <Link to="contact" smooth={true} duration={900}>
                <button
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg 
                    transition-all duration-300 hover:scale-105 hover:from-yellow-500 hover:to-orange-600 cursor-pointer active:scale-95"
                >
                  Hire Me
                </button>
              </Link>

              <Link to="projects" smooth={true} duration={900}>
                <button
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg 
                    transition-all duration-300 hover:scale-105 hover:from-yellow-500 hover:to-orange-600 cursor-pointer active:scale-95"
                >
                  View Work
                </button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-all duration-300 hover:scale-110 active:scale-90"
                >
                  <link.icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
