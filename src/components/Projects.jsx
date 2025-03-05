import React from "react";
import frame from "../assets/Frame.png"
import barbar from "../assets/barbar.jpg"


const projects = [
    {
      name: "E-Commerce Website",
      category: "MERN Stack",
      img: frame,
      description: "A full-stack e-commerce platform with authentication and cart functionality.",
      liveDemo: "https://your-ecommerce-demo.com",
    },
    {
      name: "Portfolio Website",
      category: "React & Tailwind",
      img: "https://media.licdn.com/dms/image/v2/C4D22AQFGEBFGBtGjEQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1654194835489?e=1743638400&v=beta&t=PhLRVAuIwFc5k4e2-NzIn4gjIcuzOsIegNbg-LLd-jE",
      description: "A sleek and responsive portfolio to showcase your projects and skills.",
      liveDemo: "https://your-portfolio-demo.com",
    },
    {
      name: "Blog CMS",
      category: "WordPress",
      img: barbar,
      description: "A custom blog CMS powered by WordPress with a dynamic content system.",
      liveDemo: "https://your-blog-demo.com",
    },
    {
      name: "Task Manager",
      category: "JavaScript",
      img: "https://source.unsplash.com/400x250/?tasks,app",
      description: "A JavaScript-powered task manager with local storage support.",
      liveDemo: "https://your-taskmanager-demo.com",
    },
    {
      name: "Dashboard UI",
      category: "React & Material UI",
      img: "https://source.unsplash.com/400x250/?dashboard,ui",
      description: "A modern admin dashboard with charts and authentication.",
      liveDemo: "https://your-dashboard-demo.com",
    },
    {
      name: "Weather App",
      category: "JavaScript & API",
      img: "https://source.unsplash.com/400x250/?weather,app",
      description: "A real-time weather app fetching data from OpenWeather API.",
      liveDemo: "https://your-weatherapp-demo.com",
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 bg-white text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black text-center mb-10">My Projects</h2>
  
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#790909] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src={project.img} alt={project.name} className="w-full h-48 object-cover" />
                
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-sm text-blue-400">{project.category}</p>
                  <p className="text-gray-300 mt-2">{project.description}</p>
  
                  {/* Live Demo Button */}
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-lg transition mt-6 bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-500 "
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  