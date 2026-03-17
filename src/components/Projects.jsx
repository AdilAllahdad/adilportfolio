import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects, categories } from "../data/projectsData";
import LightRays from "./LightRays";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
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

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFilterChange = (category) => {
    setFilter(category);
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // motion/animation removed — static rendering only

  return (
     <div id="projects" className="sm:py-20 bg-black">
    <section
      
      className=""
    >
     <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
  <LightRays
    raysOrigin="right"
    raysColor="#ffffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={3}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>

      {/* Background layers (static, motion removed) */}
      <div
        className="absolute inset-0"
      
      />

      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at top left, rgba(126,34,206,0.4), transparent 70%)",
          opacity: 0.35,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore a collection of my best work across various technologies and platforms
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === category
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-xl shadow-yellow-400/30 hover:shadow-yellow-400/50"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedProjects.length === 0 ? (
            <div className="col-span-full text-center text-white py-12">
              <p className="text-xl">No projects found for "{filter}" category.</p>
              <p className="text-sm mt-2 opacity-75">Try selecting a different category.</p>
            </div>
          ) : (
            selectedProjects.map((project, index) => (
              <div key={`${filter}-${project.name}`} className="relative group h-full">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:border-gray-500 h-full flex flex-col">
                  {/* Image Container - Larger and more prominent */}
                  <div className="relative overflow-hidden h-72 bg-gray-800 flex-shrink-0">
                    {project.video ? (
                      <div className="relative w-full h-full">
                        <video
                          src={project.video}
                          poster={project.thumbnail}
                          className="w-full h-full object-cover cursor-pointer"
                          muted
                          loop
                          playsInline
                          onClick={(e) => {
                            if (e.target.paused) {
                              e.target.play();
                              setPlayingVideo(project.name);
                            } else {
                              e.target.pause();
                              setPlayingVideo(null);
                            }
                          }}
                        />
                        {playingVideo !== project.name && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-black bg-opacity-60 rounded-full p-4">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                              </svg>
                            </div>
                          </div>
                        )}
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                          VIDEO
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    {!project.video && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={project.liveDemo || "https://www.linkedin.com/in/adil-allahdad-web-developer/"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold transform hover:scale-110 transition-transform inline-flex items-center gap-2 shadow-lg"
                        >
                          <FaExternalLinkAlt className="text-lg" /> View Live
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-400/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                      <a
                        href={project.liveDemo || "https://www.linkedin.com/in/adil-allahdad-web-developer/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-yellow-300 hover:text-yellow-100 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="text-base" />
                        View Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* modal removed: live demo is now the primary action via the overlay button */}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`px-4 py-2 rounded-lg shadow-lg transition-all duration-300 cursor-pointer font-semibold ${
                  currentPage === i
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-xl shadow-yellow-400/30 hover:shadow-yellow-400/50"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
    </div>
  );
};

export default Projects;
