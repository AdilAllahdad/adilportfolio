import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import frame from "../assets/Frame.png";
import barbar from "../assets/barbar.jpg";
import ticTacToe from "../assets/figmaTicTacToe.png";
import barberFrame from "../assets/barberFrame.png";
import FrameCar from "../assets/FrameCar.png";
import FrameTic from "../assets/FrameTic1.png";
import FrameRock from "../assets/FrameRock.png";
import FramePortfolio from "../assets/FramePortfolio.png";
import FrameAgency from "../assets/FrameAgency.png";

const projects = [
  {
    name: "E-Commerce Website",
    category: "MERN Stack",
    img: frame,
    description:
      "A full-stack e-commerce platform with authentication and cart functionality.",
    liveDemo: "https://your-ecommerce-demo.com",
  },
  {
    name: "Portfolio Website",
    category: "React & Tailwind",
    img: FramePortfolio,
    description:
      "A sleek and responsive portfolio to showcase your projects and skills.",
    liveDemo: "https://your-portfolio-demo.com",
  },
  {
    name: "Blog CMS",
    category: "WordPress",
    img: barberFrame,
    description:
      "A custom blog CMS powered by WordPress with a dynamic content system.",
    liveDemo: "https://your-blog-demo.com",
  },
  {
    name: "Task Manager",
    category: "JavaScript",
    img: FrameTic,
    description:
      "A JavaScript-powered task manager with local storage support.",
    liveDemo: "https://tic-tac-toe-chi-eight-86.vercel.app/",
  },
  {
    name: "Dashboard UI",
    category: "React & Material UI",
    img: FrameCar,
    description: "A modern admin dashboard with charts and authentication.",
    liveDemo: "https://shimlataxi.com/",
  },
  {
    name: "Weather App",
    category: "JavaScript & API",
    img: FrameRock,
    description: "A real-time weather app fetching data from OpenWeather API.",
    liveDemo: "https://rock-paper-scissors-hazel-theta.vercel.app/",
  },
  {
    name: "Chat App",
    category: "MERN Stack",
    img: FrameAgency,
    description:
      "A real-time chat application with authentication and WebSocket.",
    liveDemo: "https://your-chatapp-demo.com",
  },
  {
    name: "Finance Tracker",
    category: "React & Firebase",
    img: "https://source.unsplash.com/400x250/?finance,app",
    description: "A finance tracker that allows users to track their expenses.",
    liveDemo: "https://your-finance-demo.com",
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const projectsPerPage = 6;

  const categories = [
    "All",
    "MERN Stack",
    "React & Tailwind",
    "WordPress",
    "JavaScript",
  ];

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const selectedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-white to-gray-100 text-white min-h-screen"
    >
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-[#790909] text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setFilter(category);
                setCurrentPage(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-[#790909] text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {selectedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layoutId={`project-${project.name}`}
                variants={projectVariants}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <motion.div
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
                  onClick={() => setSelectedProject(project)}
                >
                  <motion.div
                    className="relative overflow-hidden h-48"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <motion.button
                        className="bg-white text-black px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.1 }}
                      >
                        View Details
                      </motion.button>
                    </motion.div>
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#790909] font-medium mb-3">
                      {project.category}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-[#790909] hover:text-[#6b0707] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                layoutId={`project-${selectedProject.name}`}
                className="bg-white rounded-xl max-w-2xl w-full overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes size={24} />
                </button>
                <img
                  src={selectedProject.img}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedProject.name}
                  </h3>
                  <p className="text-[#790909] font-medium mb-4">
                    {selectedProject.category}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#790909] text-white rounded-lg hover:bg-[#6b0707] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> View Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center mt-12 gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`px-4 py-2 rounded-lg text-white shadow-lg transition-all duration-300 ${
                  currentPage === i
                    ? "bg-[#790909] scale-105"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {i + 1}
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
