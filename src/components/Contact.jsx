import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import LightRays from './LightRays';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
    if (!formData.user_email.trim()) newErrors.user_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.user_email)) newErrors.user_email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fill all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_lkvqoyz', // Add your EmailJS service ID here
        'template_w0dysyj', // Add your EmailJS template ID here
        form.current,
        '2AV3yy8-IWBbpm2lR' // Add your EmailJS public key here
      );

      if (result.text === 'OK') {
        toast.success("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-gray-900 rounded-lg p-3 text-white border focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-300 outline-none";
  const labelClasses = "text-gray-300 text-sm font-medium mb-1 block";
  
  const socialLinks = [
    { icon: FaEnvelope, href: "mailto:adil.allahdad619@gmail.com", color: "hover:text-yellow-400" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/adil-allahdad-web-developer/", color: "hover:text-yellow-400" },
    { icon: FaGithub, href: "https://github.com/AdilAllahdad", color: "hover:text-yellow-400" },
    { icon: FaInstagram, href: "https://www.instagram.com/adil.web.dev/", color: "hover:text-yellow-400" },
  ];

  return (
    <section id="contact" className="relative py-16 bg-black text-white min-h-screen flex items-center">
      {/* LightRays background - pointer-events disabled so underlying form stays clickable */}
      <div className="absolute inset-0 pointer-events-none">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays pointer-events-none"
        />
      </div>
      <Toaster position="top-right" />
  <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">Let's create something amazing together!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            ref={form}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className={labelClasses}>Your Name</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                name="user_name" // Changed to match EmailJS template
                value={formData.user_name}
                onChange={handleChange}
                className={`${inputClasses} ${errors.user_name ? 'border-red-500' : 'border-gray-700'}`}
                placeholder="___"
              />
              {errors.user_name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.user_name}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>Your Email</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                name="user_email" // Changed to match EmailJS template
                value={formData.user_email}
                onChange={handleChange}
                className={`${inputClasses} ${errors.user_email ? 'border-red-500' : 'border-gray-700'}`}
                placeholder="___"
              />
              {errors.user_email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.user_email}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>Your Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                name="message" // Changed to match EmailJS template
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`${inputClasses} resize-none ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold 
                flex items-center justify-center space-x-2 hover:from-yellow-500 hover:to-orange-600 cursor-pointer
                transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <FaPaperPlane className={`${isSubmitting ? 'animate-bounce' : ''}`} />
            </motion.button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Let's Connect!</h3>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Whether you have a question, project idea, or just want to say hello,
                I'd love to hear from you. Feel free to reach out through any platform below.
              </p>

              <div className="space-y-4">
                <p className="text-gray-400">
                  <strong className="text-yellow-400">Email:</strong> adil.allahdad619@gmail.com
                </p>
                <p className="text-gray-400">
                  <strong className="text-yellow-400">Based in:</strong> Pakistan
                </p>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <h4 className="text-lg font-semibold mb-4 text-yellow-400">Follow Me</h4>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
