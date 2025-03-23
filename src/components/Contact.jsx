import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Try again later.");
    }
  };

  return (
    <section id="Contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Me</h2>

       

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Let's Connect!</h3>
          <p className="text-gray-300 mb-4">Feel free to reach out for collaborations or just to say hi!</p>

          <div className="flex justify-center space-x-4">
            <a href="mailto:adil.allahdad619@gmail.com" className="text-2xl hover:text-gray-500">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/adil-allahdad-web-developer/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-800 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/AdilAllahdad" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400 transition">
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
