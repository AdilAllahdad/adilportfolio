import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import cv from "../assets/AdilCV.pdf"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center md:px-12 lg:px-20">
        {/* Logo */}
        <div className="text-2xl font-bold text-white cursor-pointer">Adil.</div>

        {/* Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white fixed top-5 right-5">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}>
          <ul className="md:flex space-x-6 text-white text-lg hover:text-white">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Contact",
            ].map((item, index) => (
              <li key={index} className="py-2 md:py-0">
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          {/* Download CV Button */}
          <a
            href={cv}
            download
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg ml-4 hover:bg-yellow-500"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
