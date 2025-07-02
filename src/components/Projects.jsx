import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { projects, categories } from "../data/projectsData";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const [playingVideo, setPlayingVideo] = useState(null);
  const projectsPerPage = 6;

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  // Debug logging
  console.log("Current filter:", filter);
  console.log("Total projects:", projects.length);
  console.log("Filtered projects:", filteredProjects.length);
  console.log("Filtered project names:", filteredProjects.map(p => p.name));

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  const selectedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filter]);

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
      className="py-16 min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-red-800 to-orange-900"
    >
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
            "linear-gradient(45deg, rgba(88,28,135,0.8), rgba(185,28,28,0.6), rgba(194,65,12,0.5))",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
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
            "radial-gradient(circle at center, rgba(234,88,12,0.4), transparent 70%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-6"
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
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === category
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg scale-105 hover:from-yellow-500 hover:to-orange-600"
                  : "bg-white/10 text-white hover:bg-white/20"
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
          {selectedProjects.length === 0 ? (
            <motion.div 
              className="col-span-full text-center text-white py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-xl">No projects found for "{filter}" category.</p>
              <p className="text-sm mt-2 opacity-75">Try selecting a different category.</p>
            </motion.div>
          ) : (
            selectedProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${project.name}`}
                variants={projectVariants}
                initial="hidden"
                animate="visible"
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
                    {project.video ? (
                      <div className="relative w-full h-full">
                        <video
                          src={project.video}
                          poster={project.thumbnail}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                          onMouseEnter={(e) => {
                            e.target.play();
                            setPlayingVideo(project.name);
                          }}
                          onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0;
                            setPlayingVideo(null);
                          }}
                        />
                        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                          VIDEO
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    )}
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
                    <p className="text-sm bg-gradient-to-r from-purple-900 via-red-800 to-orange-900 text-transparent bg-clip-text font-medium mb-3">
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
                        className="flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-purple-900 via-red-800 to-orange-900 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))
          )}
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
                {selectedProject.video ? (
                  <div className="relative">
                    <video
                      src={selectedProject.video}
                      controls
                      autoPlay
                      muted
                      loop
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                      Animation Video
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.name}
                    className="w-full h-64 object-cover"
                  />
                )}
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
                className={`px-4 py-2 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
                  currentPage === i
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 scale-105"
                    : "bg-white/10 text-white hover:bg-white/20"
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
