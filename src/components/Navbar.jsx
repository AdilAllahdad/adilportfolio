import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cv from "../assets/AdilResume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#790909] shadow-lg backdrop-blur-lg bg-opacity-90"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center md:px-12 lg:px-20">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          <span className="text-white">Adil</span>
          <span className="text-yellow-400">.</span>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex md:items-center space-x-8"
          variants={containerVariants}
        >
          {/* Navigation Links */}
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={() => setActiveSection(item.toLowerCase())}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Download CV Button */}
          <motion.a
            href={cv}
            download
            whileHover={{ scale: 1.05, backgroundColor: "#eab308" }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium shadow-lg 
              transition-all duration-300 flex items-center gap-2 hover:shadow-yellow-400/50"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="absolute top-0 left-0 right-0 min-h-screen bg-[#790909] bg-opacity-95 backdrop-blur-lg md:hidden"
            >
              <div className="container mx-auto px-6 pt-24 pb-6">
                <motion.ul
                  className="flex flex-col space-y-4"
                  variants={containerVariants}
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-b border-white/10"
                    >
                      <Link
                        to={item.toLowerCase()}
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-lg font-medium text-white hover:text-yellow-400 transition-colors"
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li variants={itemVariants}>
                    <motion.a
                      href={cv}
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full font-medium 
                        shadow-lg transition-all duration-300 hover:bg-yellow-500"
                    >
                      Download CV
                    </motion.a>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
