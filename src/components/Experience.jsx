import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Senior MERN Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    duration: "2023 - Present",
    description: [
      "Led development of full-stack web applications using MERN technologies",
      "Implemented responsive designs and modern UI/UX practices",
      "Managed team of 4 junior developers and provided technical mentorship",
      "Improved application performance by 40% through optimization",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "Redux", "AWS"],
    color: "#FF6B6B",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Innovators",
    location: "Hybrid",
    duration: "2021 - 2023",
    description: [
      "Developed and maintained multiple client projects using React and Node.js",
      "Created RESTful APIs and implemented authentication systems",
      "Collaborated with design team to implement pixel-perfect UI",
      "Reduced loading time by 50% through code optimization",
    ],
    skills: ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
    color: "#4ECDC4",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "WebCraft Studios",
    location: "On-site",
    duration: "2020 - 2021",
    description: [
      "Built responsive web applications using React and modern CSS",
      "Implemented state management using Redux and Context API",
      "Collaborated with backend team for API integration",
      "Improved website accessibility to WCAG 2.1 standards",
    ],
    skills: ["React", "CSS3", "JavaScript", "Redux", "Sass"],
    color: "#FFE66D",
  },
];

const Experience = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional <span className="text-[#790909]">Experience</span>
        </motion.h2>
        
        <motion.p
          className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My professional journey in web development, featuring roles where I've made significant impacts
          and grown as a developer.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              layoutId={`card-${exp.id}`}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredId(exp.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setSelectedId(exp.id)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300"
            >
              <div className="p-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: exp.color + '20' }}
                >
                  <FaBriefcase className="text-xl" style={{ color: exp.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                <p className="text-[#790909] font-medium mb-4">{exp.company}</p>
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-[#790909]" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[#790909]" />
                    <span>{exp.location}</span>
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`card-${selectedId}`}
                className="bg-white rounded-xl max-w-2xl w-full p-6 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {experiences.find(exp => exp.id === selectedId) && (
                  <>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {experiences.find(exp => exp.id === selectedId).role}
                      </h3>
                      <p className="text-[#790909] font-medium">
                        {experiences.find(exp => exp.id === selectedId).company}
                      </p>
                    </div>
                    <div className="space-y-4">
                      {experiences.find(exp => exp.id === selectedId).description.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#790909] mt-2" />
                          <p className="text-gray-600">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Experience;
