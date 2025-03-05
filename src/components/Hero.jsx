import React from "react";
import img from "../assets/img.jpg"
import { Typewriter } from "react-simple-typewriter";
import Contact from "./Contact";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="bg-[#790909] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-33 pb-9 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-white">
            <h3 className="text-xl md:text-2xl font-semibold">Hello, I'm</h3>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">Adil Allahdad</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mt-2">
            <Typewriter
            words={["Web Developer", "MERN Stack Developer", "WordPress Developer"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={300}
            deleteSpeed={50}
            delaySpeed={1500}
          />
                </h2>
            <p className="mt-4 text-lg md:text-xl opacity-90">
            Crafting modern, responsive, and high-performance websites with React, Tailwind CSS, Node.js, and WordPress. Passionate about clean code, seamless user experiences, and scalable web solutions.
            </p>
            <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition">
             <Link to={<Contact/>}>Hire Me</Link> 
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src={img} // Replace with your image path
              alt="Adil Allahdad"
              className="w-60 md:w-80 lg:w-96 rounded-full shadow-xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
