import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="experience" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          background: [
            "radial-gradient(circle at 20% 20%, #790909 0%, transparent 40%)",
            "radial-gradient(circle at 80% 80%, #5e0014 0%, transparent 40%)",
            "radial-gradient(circle at 50% 50%, #790909 0%, transparent 40%)"
          ]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          filter: "blur(120px)",
          opacity: 0.05
        }}
      />

      {/* Animated Line Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-800/20 to-transparent"
            style={{
              top: `${(index + 1) * 12}%`,
              left: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "linear",
              delay: index * 1.5
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-lg"
            style={{
              background: `linear-gradient(225deg, rgba(121,9,9,${0.02 + index * 0.01}) 0%, rgba(94,0,20,${0.02 + index * 0.01}) 100%)`,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              border: "1px solid rgba(121,9,9,0.05)"
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(121,9,9,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(121,9,9,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
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
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional <span className="bg-gradient-to-r from-purple-900 via-red-800 to-orange-900 text-transparent bg-clip-text">Experience</span>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                <p className="bg-gradient-to-r from-purple-900 via-red-800 to-orange-900 text-transparent bg-clip-text font-medium mb-4">{exp.company}</p>
                <div className="space-y-2 text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-2 group">
                    <div className="p-1.5 rounded-full bg-gradient-to-r from-purple-900/10 via-red-800/10 to-orange-900/10 group-hover:from-purple-900/20 group-hover:via-red-800/20 group-hover:to-orange-900/20 transition-colors">
                      <FaCalendar className="text-gradient-to-r from-purple-900 via-red-800 to-orange-900 w-3.5 h-3.5" />
                    </div>
                    <span className="group-hover:text-[#790909] transition-colors">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <div className="p-1.5 rounded-full bg-[#790909]/10 group-hover:bg-[#790909]/20 transition-colors">
                      <FaMapMarkerAlt className="text-[#790909] w-3.5 h-3.5" />
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
                    </button>                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-100">
                          <img 
                            src={
                              experiences.find(exp => exp.id === selectedId).company === "Firnas.tech"
                                ? firnasTechLogo
                                : experiences.find(exp => exp.id === selectedId).company === "Systemic Agency"
                                ? systemicLogo
                                : urraanLogo
                            }
                            alt={experiences.find(exp => exp.id === selectedId).company}
                            className="w-full h-full object-cover"
                          />
                        </div>                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {experiences.find(exp => exp.id === selectedId).role}
                          </h3>
                          <p className="bg-gradient-to-r from-purple-900 via-red-800 to-orange-900 text-transparent bg-clip-text font-medium mb-4">
                            {experiences.find(exp => exp.id === selectedId).company}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 text-gray-600 text-sm">
                            <div className="flex items-center gap-2 group">
                              <div className="p-1.5 rounded-full bg-[#790909]/10 group-hover:bg-[#790909]/20 transition-colors">
                                <FaCalendar className="text-[#790909] w-4 h-4" />
                              </div>
                              <span className="group-hover:text-[#790909] transition-colors">
                                {experiences.find(exp => exp.id === selectedId).duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 group">
                              <div className="p-1.5 rounded-full bg-[#790909]/10 group-hover:bg-[#790909]/20 transition-colors">
                                <FaMapMarkerAlt className="text-[#790909] w-4 h-4" />
                              </div>
                              <span className="group-hover:text-[#790909] transition-colors">
                                {experiences.find(exp => exp.id === selectedId).location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
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
