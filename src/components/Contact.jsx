import React from "react";
// import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram,FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#790909]  text-white">
      <div className="container mx-auto px-6 max-w-lg">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Me</h2>

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Send me a message</h3>
          <form className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              rows="4" 
              placeholder="Your Message" 
              className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Let's Connect!</h3>
          <p className="text-gray-300 mb-4">
            Feel free to reach out for collaborations or just to say hi!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <a href="mailto:adil.allahdad619@gmail.com" className="  text-2xl hover:text-gray-500">
              <FaEnvelope />
            </a>
           
                          <a href="https://www.linkedin.com/in/adil-allahdad-web-developer/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-800 transition">
                            <FaLinkedin />
                          </a>
                          <a href="https://github.com/AdilAllahdad" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-2xl hover:text-gray-700 transition">
                            <FaGithub />
                          </a>
                          <a href="https://www.instagram.com/adil.web.dev/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition">
                            <FaInstagram />
                          </a>
                       
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
