import React from "react";
import img from "../assets/img.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
      scale: 1.02,
      rotateY: 10,
      rotateX: 5,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const particleVariants = {
    animate: (i) => ({
      y: [0, -15, 0],
      x: [0, Math.sin(i * Math.PI) * 10, 0],
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  const glowVariants = {
    initial: {
      opacity: 0.5,
      scale: 1
    },
    hover: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/AdilAllahdad", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/adil-allahdad-web-developer/", icon: FaLinkedinIn },
    { name: "Instagram", url: "https://www.instagram.com/adil.web.dev/", icon: FaInstagram }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-red-800 to-orange-900">
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          background: [
            "linear-gradient(to bottom right, rgba(88,28,135,0.8), rgba(185,28,28,0.6), rgba(194,65,12,0.5))",
            "linear-gradient(to bottom right, rgba(194,65,12,0.8), rgba(88,28,135,0.6), rgba(185,28,28,0.5))",
            "linear-gradient(to bottom right, rgba(185,28,28,0.8), rgba(194,65,12,0.6), rgba(88,28,135,0.5))",
            "linear-gradient(45deg, rgba(88,28,135,0.8), rgba(185,28,28,0.6), rgba(194,65,12,0.5))"
          ]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Additional gradient layer for depth */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          background: [
            "radial-gradient(circle at top left, rgba(126,34,206,0.4), transparent 70%)",
            "radial-gradient(circle at bottom right, rgba(220,38,38,0.4), transparent 70%)",
            "radial-gradient(circle at center, rgba(234,88,12,0.4), transparent 70%)"
          ]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

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
                typeSpeed={100}
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
              I craft modern, responsive, and high-performance web solutions focused on clean architecture, scalability, and delivering seamless, user-friendly experiences across both front-end and back-end.
            </motion.p>

            <div className="flex gap-4 mt-6">
              <Link to="contact" smooth={true} duration={900}>
                <motion.button
                  whileHover={{ 
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg 
                    transition-all duration-300 hover:from-yellow-500 hover:to-orange-600 cursor-pointer"
                >
                  Hire Me
                </motion.button>
              </Link>

              <Link to="projects" smooth={true} duration={900}>
                <motion.button
                  whileHover={{ 
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg 
                    transition-all duration-300 hover:from-yellow-500 hover:to-orange-600 cursor-pointer"
                >
                  View Work
                </motion.button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="flex justify-center perspective-1000"
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="relative group">
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-yellow-400"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    filter: 'blur(1px)'
                  }}
                  custom={i}
                  variants={particleVariants}
                  animate="animate"
                />
              ))}
              
              {/* Main image container */}
              <motion.div
                variants={imageVariants}
                className="relative transform-gpu"
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-purple-500/30 to-red-500/30 rounded-full filter blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={img}
                  alt="Profile"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover relative z-10 border-4 border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-shadow duration-300 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    transform: "translateZ(20px)"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
