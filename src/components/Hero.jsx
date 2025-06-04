import React from "react";
import img from "../assets/img.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.3
      }
    }
  };

  const socialLinks = [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" }
  ];

  return (
    <section id="home" className="bg-[#790909] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-33 pb-9 md:pb-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div variants={textVariants} initial="hidden" animate="visible">
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Hello, I'm
              </h3>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mt-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Adil Allahdad
            </motion.h1>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-yellow-300 mt-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <Typewriter
                words={["Web Developer", "MERN Stack Developer", "WordPress Developer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={300}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.h2>

            <motion.p 
              className="mt-4 text-lg md:text-xl opacity-90"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              Crafting modern, responsive, and high-performance websites with React, 
              Tailwind CSS, Node.js, and WordPress. Passionate about clean code, 
              seamless user experiences, and scalable web solutions.
            </motion.p>

            <div className="flex gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#eab308" }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
              >
                <Link to="contact" smooth={true} duration={900}>Hire Me</Link>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
              >
                <Link to="projects" smooth={true} duration={900}>View Work</Link>
              </motion.button>
            </div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-yellow-400 rounded-full blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <img
                src={img}
                alt="Adil Allahdad"
                className="w-60 md:w-80 lg:w-96 rounded-full shadow-xl relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
