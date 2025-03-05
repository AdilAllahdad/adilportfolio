import React from "react";
import html from "../assets/html.png"

const skills = [
    { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Tailwind", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "Node.js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Express.js", img: "https://e7.pngegg.com/pngimages/545/451/png-clipart-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-thumbnail.png", style: { filter: "invert(1)" } },
    { name: "MongoDB", img: "https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" }, // Fixed
    { name: "MySQL", img: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "WordPress", img: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
  ];
  

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-[#790909] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">My Skills</h2>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform transform hover:scale-110"
              />
              <p className="mt-2 text-sm md:text-base">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
