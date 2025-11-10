import React from "react";
import LogoLoop from "./LogoLoop";

const skills = [
    { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Next.js", img: "https://avatars.githubusercontent.com/u/126103961?s=200&v=4", style: { filter: "invert(1)" } },
    { name: "Firebase", img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },    { name: "Tailwind", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },    { name: "DaisyUI", img: "https://cdn.jsdelivr.net/gh/saadeghi/files@main/daisyui/logo-4.svg", style: { filter: "invert(1)" } },
    { name: "Bootstrap", img: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" },
    { name: "Node.js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Express.js", img: "https://e7.pngegg.com/pngimages/545/451/png-clipart-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-thumbnail.png", style: { filter: "invert(1)" } },
    { name: "MongoDB", img: "https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" },
    { name: "MySQL", img: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "WordPress", img: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
  ];
  

// Use `skills` image entries as logos for LogoLoop
const logoImages = skills.map(s => ({
  src: s.img,
  alt: s.name,
  title: s.name
}));


const Skills = () => {
  // Framer Motion removed — keep static layout and simple Tailwind hover effects

  return (
     <div id="skills" className="sm:pt-20 bg-black">
    <section  className="bg-black text-white">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">My Skills</h2>
       <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={logoImages}
        speed={120}
        direction="left"
        logoHeight={88}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
        
      </div>
    </section>
    </div>
  );
};

export default Skills;
