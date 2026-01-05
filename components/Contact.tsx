'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle, FiUser, FiMessageSquare, FiLinkedin, FiGithub, FiTwitter, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp, FaTelegram, FaDiscord } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    value: "730551rinku@gmail.com",
    link: "mailto:730551rinku@gmail.com",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+91 8449872248",
    link: "tel:+918449872248",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Naraina Vihar, Delhi, India",
    link: "https://www.google.com/maps/place/Naraina+Vihar,+Naraina,+New+Delhi,+Delhi/@28.6292934,77.1289912,2685m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d03245972a8ff:0x22f0733cd9d891f3!8m2!3d28.6289883!4d77.1413259!16s%2Fg%2F1tg7qdbw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    color: "from-purple-500 to-pink-500",
  },
];

const socialLinks = [
  { icon: FiLinkedin, href: "https://in.linkedin.com/in/rinku-kumar-6a611a311", label: "LinkedIn", color: "hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50" },
  { icon: FiGithub, href: "https://github.com/Mr-Rinku-Kumar", label: "GitHub", color: "hover:bg-gray-700 hover:text-white hover:border-gray-600" },
  // { icon: SiLeetcode, href: "https://leetcode.com", label: "LeetCode", color: "hover:bg-yellow-500/20 hover:text-yellow-400 hover:border-yellow-500/50" },
  // { icon: FiTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/50" },
  { icon: FaWhatsapp, href: "https://wa.me/918449872248", label: "WhatsApp", color: "hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/50" },
  { icon: FaTelegram, href: "https://t.me/rinkukumar", label: "Telegram", color: "hover:bg-blue-400/20 hover:text-blue-300 hover:border-blue-400/50" },
  // { icon: FaDiscord, href: "https://discord.com", label: "Discord", color: "hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/50" },
  // { icon: FiGlobe, href: "https://yourportfolio.com", label: "Portfolio", color: "hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/50" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-3">
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
            <span className="text-sm font-medium text-cyan-400 tracking-wider">GET IN TOUCH</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind, a job opportunity, or just want to say hello?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-effect rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center space-x-2">
              <FiSend className="w-6 h-6 text-cyan-400" />
              <span>Send a Message</span>
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <div className="flex justify-center">
                  <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
                      <FiUser className="w-4 h-4" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
                      <FiMail className="w-4 h-4" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
                    <FiMessageSquare className="w-4 h-4" />
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
                    <FiMessageSquare className="w-4 h-4" />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-sm text-gray-400">
                    I typically respond within 24 hours
                  </p>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-lg flex items-center space-x-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column - Contact Info & Social */}
          <div className="space-y-8 sm:space-y-10">
            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold flex items-center space-x-2">
                <FiMapPin className="w-6 h-6 text-cyan-400" />
                <span>Contact Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group p-4 rounded-xl bg-white/5 border border-gray-700 hover:border-cyan-500/30 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} p-0.5 mb-3`}>
                      <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                      {info.value}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-effect rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center space-x-2">
                <FiGlobe className="w-6 h-6 text-cyan-400" />
                <span>Connect With Me</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 sm:p-4 rounded-xl bg-white/5 border border-gray-700 flex flex-col items-center justify-center text-gray-400 ${social.color} transition-all`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
                    <span className="text-xs sm:text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Working Hours / Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-effect rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center space-x-2">
                <FiCheckCircle className="w-6 h-6 text-green-400" />
                <span>Availability</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-green-400">Currently Available</h4>
                    <p className="text-sm text-gray-400">
                      Open to new opportunities and collaborations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-sm text-gray-400">
                      Typically within 24 hours for emails and messages
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-sm text-gray-400">
                      Monday - Friday • 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Response CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-500/20"
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">Need a Quick Response?</h4>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                For urgent matters, feel free to message me directly on WhatsApp or Telegram.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918449872248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-500/50 text-green-400 hover:text-green-300 font-medium rounded-lg text-center transition-all flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/Rinku_71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-blue-400/10 hover:bg-blue-400/20 border border-blue-400/30 hover:border-blue-400/50 text-blue-300 hover:text-blue-200 font-medium rounded-lg text-center transition-all flex items-center justify-center space-x-2"
                >
                  <FaTelegram className="w-5 h-5" />
                  <span>Telegram</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Location (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16"
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center space-x-2">
              <FiMapPin className="w-6 h-6 text-cyan-400" />
              <span>Location</span>
            </h3>

            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
              <div className="absolute inset-0">
                {/* Google Map */}
                <iframe
                  title="Naraina Vihar Location"
                  src="https://www.google.com/maps?q=Naraina+Vihar,+New+Delhi,+Delhi&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <FiMapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2">Naraina Vihar, New Delhi</h4>
                    <p className="text-gray-200">📍 Capital Tech & Business Zone</p>
                  </div>
                </div>
              </div>


              {/* Map Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>

            <p className="text-sm text-gray-400 mt-4 text-center">
              Based in Delhi - India's leading technology and innovation hub
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}