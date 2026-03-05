import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import myimg from "../assets/myimg.jpeg";
import cv from "../assets/Adil_Allahdad-MERN_Stack_Developer_Resume.pdf"; // Update with your actual CV path
import LightRays from './LightRays';
import { div } from "framer-motion/client";


const About = () => {
  
    const socialLinks = [
    { name: "GitHub", url: "https://github.com/AdilAllahdad", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/adil-allahdad-web-developer/", icon: FaLinkedin },
    { name: "Instagram", url: "https://www.instagram.com/adil.web.dev/", icon: FaInstagram }
  ];

  const [isHovered, setIsHovered] = useState(false);



  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    normal: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <div id="about" className="sm:py-20 bg-black">
    <div>
      <section className="relative overflow-hidden bg-black">
        {/* Mesh Gradient Background */}
        {/* Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
        
        />
<div style={{ width: '100%', height: '600px', position: 'absolute' }}>
  <LightRays
    raysOrigin="left"
    raysColor="#ffffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={2.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
            
            {/* Left Side - Text and Socials */}
            <motion.div
              className="text-white"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold ">
                  About Me
                </h2>
                <motion.p 
                  className="mt-4 text-lg leading-relaxed"
                  variants={textVariants}
                >
                  I'm <span className="">Adil Allahdad</span>, a passionate <span className="font-semibold underline">Software Engineer</span>, <span className="font-semibold underline">MERN Stack Developer</span>, and <span className="font-semibold underline">WordPress Developer</span> focused on crafting modern, responsive, and user-centric web applications. I love transforming ideas into seamless digital experiences that are both functional and visually engaging.
                </motion.p>
                <motion.p 
                  className="mt-4 text-lg leading-relaxed"
                  variants={textVariants}
                >
                  Whether it's developing dynamic web platforms or creating scalable full-stack solutions, I’m driven by a deep commitment to clean code, thoughtful design, and continuous improvement. My work is rooted in the belief that great technology should feel effortless to use.
                </motion.p>
              </motion.div>

              {/* Interactive buttons */}
              <motion.div 
                className="mt-6 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href={cv} // Update with your actual CV path
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg shadow-lg 
                    transition-all duration-300 hover:from-yellow-500 hover:to-orange-600"
                >
                  <FaDownload /> Download CV
                </motion.a>
              </motion.div>

              {/* Social Media Icons with enhanced animations */}
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
              </motion.div>

            {/* Right Side - Interactive Image */}
            <motion.div
              className="flex justify-center perspective-1000"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative group"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                variants={imageVariants}
                initial="normal"
                whileHover="hover"
              >
                {/* Glowing effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-900 via-red-800 to-orange-900 rounded-lg blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 0.3 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.img
                  src={myimg}
                  alt="Adil Allahdad"
                  className="w-60 md:w-80 lg:w-96 rounded-lg shadow-lg relative z-10"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    rotateY: isHovered ? 5 : 0,
                    rotateX: isHovered ? -5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />

              
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default About;
