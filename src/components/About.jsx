import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import myimg from "../assets/myimg.jpeg";

const About = () => {
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
    <div id="about">
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Mesh Gradient Background */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            background: [
              "conic-gradient(from 0deg at 50% 50%, #790909 0deg, #5e0014 90deg, #790909 180deg, #5e0014 270deg)",
              "conic-gradient(from 90deg at 50% 50%, #5e0014 0deg, #790909 90deg, #5e0014 180deg, #790909 270deg)",
              "conic-gradient(from 180deg at 50% 50%, #790909 0deg, #5e0014 90deg, #790909 180deg, #5e0014 270deg)",
            ]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            filter: "blur(100px)",
            opacity: 0.07
          }}
        />

        {/* Moving Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-red-800"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Glass morphism panels */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full"
              style={{
                background: "linear-gradient(225deg, rgba(121,9,9,0.03) 0%, rgba(94,0,20,0.03) 100%)",
                backdropFilter: "blur(10px)",
                width: Math.random() * 400 + 200,
                height: Math.random() * 400 + 200,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                border: "1px solid rgba(255,255,255,0.1)"
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 0],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 15 + index * 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#790909 0.5px, transparent 0.5px), linear-gradient(to right, #790909 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px"
          }}
        />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Left Side - Text and Socials */}
            <motion.div
              className="text-gray-800"
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
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text">
                  About Me
                </h2>
                <motion.p 
                  className="mt-4 text-lg leading-relaxed"
                  variants={textVariants}
                >
                  I'm <span className="font-semibold bg-gradient-to-r from-purple-900 via-red-800 to-orange-900 text-transparent bg-clip-text">Adil Allahdad</span>, a passionate Software Engineer, MERN Stack Developer, and WordPress Developer focused on crafting modern, responsive, and user-centric web applications. I love transforming ideas into seamless digital experiences that are both functional and visually engaging.
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
                  href="/assets/AdilCV.pdf"
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
              <motion.div 
                className="mt-6 flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/adil-allahdad-web-developer/", color: "text-blue-600 hover:text-blue-800" },
                  { Icon: FaGithub, href: "https://github.com/AdilAllahdad", color: "text-gray-900 hover:text-gray-700" },
                  { Icon: FaInstagram, href: "https://www.instagram.com/adil.web.dev/", color: "text-pink-500 hover:text-pink-700" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    variants={socialVariants}
                    whileHover="hover"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-3xl ${social.color} transition-all duration-300`}
                  >
                    <social.Icon />
                  </motion.a>
                ))}
              </motion.div>
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

                {/* Interactive decoration elements */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      <motion.div
                        className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                      />
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-20 h-20 bg-red-400 rounded-full mix-blend-multiply blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                      />
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
