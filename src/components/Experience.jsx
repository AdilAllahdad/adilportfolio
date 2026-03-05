import React, { useState } from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import firnasTechLogo from "../assets/firnas_tech1_logo.jpg";
import systemicLogo from "../assets/systemic_agency_logo.jpg";
import urraanLogo from "../assets/urraan_logo.jpg";

const experiences = [
  {
    id: 1,
    role: "MERN Stack Developer",
    company: "Firnas.tech",
    location: "Abbottabad District, Khyber Pakhtunkhwa, Pakistan · On-site",
    duration: "Feb 2025 - Present",
    description: [
      "Developing full-stack web applications using MERN technologies",
      "Building responsive and user-friendly interfaces with React.js",
      "Creating robust backend services with Node.js and Express",
      "Implementing modern UI/UX practices and optimizing performance",
    ],
    skills: ["Next.js", "React.js", "Node.js", "Express", "MongoDB"],
    color: "#4ECDC4",
  },
  {
    id: 2,
    role: "WordPress Developer",
    company: "Systemic Agency",
    location: "Abbottabad District, Khyber Pakhtunkhwa, Pakistan · On-site",
    duration: "Apr 2023 - May 2024",
    description: [
      "Developed and maintained custom WordPress themes and plugins",
      "Created responsive and visually appealing websites",
      "Optimized website performance and user experience",
      "Implemented SEO best practices and security measures",
    ],
    skills: ["WordPress", "Adobe Photoshop", "PHP", "MySQL", "JavaScript"],
    color: "#7AB800",
  },
  {
    id: 3,
    role: "Web Developer",
    company: "URRAAN - Runway to Digital Flight",
    location: "Abbottabad District, Khyber Pakhtunkhwa, Pakistan · Remote",
    duration: "Aug 2022 - Mar 2023",
    description: [
      "Built and maintained responsive websites",
      "Collaborated with design team for optimal user experience",
      "Implemented modern web development practices",
      "Ensured cross-browser compatibility and mobile responsiveness",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    color: "#FF6B6B",
  },
];

const Experience = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  // framer-motion removed; animations were intentionally stripped to simplify components

  return (
     <div id="experience" className="sm:py-20 bg-black">
    <section  className="relative overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div/>
      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"/>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Professional <span className="text-white">Experience</span>
        </h2>

        <p className="text-white text-center mb-12 max-w-2xl mx-auto">
          My professional journey in web development, featuring roles where I've made significant impacts
          and grown as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedId(exp.id)}
              className="bg-black rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 border-2 border-white/30"
            >              <div className="p-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden mb-4 border-2 border-gray-100">
                  <img 
                    src={
                      exp.company === "Firnas.tech" 
                        ? firnasTechLogo 
                        : exp.company === "Systemic Agency"
                        ? systemicLogo
                        : urraanLogo
                    }
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                <p className="text-white font-medium mb-4">{exp.company}</p>
                <div className="space-y-2 text-white text-sm mb-4">
                  <div className="flex items-center gap-2 group">
                    <div className="p-1.5 rounded-full bg-gradient-to-r from-purple-900/10 via-red-800/10 to-orange-900/10 group-hover:from-purple-900/20 group-hover:via-red-800/20 group-hover:to-orange-900/20 transition-colors">
                      <FaCalendar className="text-white w-3.5 h-3.5" />
                    </div>
                    <span className="group-hover:text-[#790909] transition-colors">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <div className="p-1.5 rounded-full bg-[#790909]/10 group-hover:bg-[#790909]/20 transition-colors">
                      <FaMapMarkerAlt className="text-white w-3.5 h-3.5" />
                    </div>
                    <span className="group-hover:text-[#790909] transition-colors truncate">{exp.location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {hoveredId === exp.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
       
  </div>
    </section>
    </div>
  );
};

export default Experience;
