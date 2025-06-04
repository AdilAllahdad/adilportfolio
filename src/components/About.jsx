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
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px"
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
                  I'm <span className="font-semibold text-[#790909]">Adil Allahdad</span>, a passionate web developer with expertise in the MERN stack, React, and Tailwind CSS. I specialize in building modern, responsive, and user-friendly web applications. I love transforming ideas into reality through code.
                </motion.p>
                <motion.p 
                  className="mt-4 text-lg leading-relaxed"
                  variants={textVariants}
                >
                  Whether it's frontend development, backend solutions, or full-stack applications, I thrive on creating seamless digital experiences.
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
                  whileHover={{ scale: 1.05, backgroundColor: "#6b0707" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-[#790909] text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
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
                  className="absolute inset-0 bg-[#790909] rounded-lg blur-xl"
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
