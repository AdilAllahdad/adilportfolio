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

  // motion/animation removed — static rendering only

  return (
     <div id="projects" className="sm:py-20 bg-black">
    <section
      
      className="py-16 min-h-screen relative overflow-hidden "
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
        <h2 className="text-4xl font-bold text-white text-center mb-6">My Projects</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === category
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg hover:from-yellow-500 hover:to-orange-600"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {selectedProjects.length === 0 ? (
            <div className="col-span-full text-center text-white py-12">
              <p className="text-xl">No projects found for "{filter}" category.</p>
              <p className="text-sm mt-2 opacity-75">Try selecting a different category.</p>
            </div>
          ) : (
            selectedProjects.map((project, index) => (
              <div key={`${filter}-${project.name}`} className="relative group">
                <div className="bg-black border-2 border-gray-600 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                  <div className="relative overflow-hidden h-48">
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
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-transform inline-flex items-center gap-2"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      ) : (
                        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">No Demo</button>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-sm text-white font-medium mb-3">{project.category}</p>
                    <p className="text-white text-sm mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-semibold hover:opacity-80 transition-opacity text-white"
                      >
                         Live Demo
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
                onClick={() => setCurrentPage(i)}
                className={`px-4 py-2 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
                  currentPage === i
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600"
                    : "bg-white/10 text-white hover:bg-white/20"
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
