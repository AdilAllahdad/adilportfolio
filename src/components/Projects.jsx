import React, { useState } from "react";
import frame from "../assets/Frame.png";
import barbar from "../assets/barbar.jpg";
import ticTacToe from "../assets/figmaTicTacToe.png";
import barberFrame from "../assets/barberFrame.png";
import FrameCar from "../assets/FrameCar.png";
import FrameTic from "../assets/FrameTic1.png";
import FrameRock from "../assets/FrameRock.png";
import FramePortfolio from "../assets/FramePortfolio.png"
import FrameAgency from "../assets/FrameAgency.png"


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
    img:FrameCar ,
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
  const projectsPerPage = 6;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const selectedProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section id="projects" className="py-16 bg-white text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-black text-center mb-10">
          My Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {selectedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#790909] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-blue-400">{project.category}</p>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg transition mt-6 bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`px-4 py-2 rounded-lg text-white shadow-lg transition ${
                currentPage === i
                  ? "bg-[#790909]"
                  : "bg-gray-700 hover:bg-gray-800"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
