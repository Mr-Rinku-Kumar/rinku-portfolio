'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiCode, FiMail, FiMessageSquare, FiArrowUp } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaRegCopyright } from 'react-icons/fa';
import { SiLeetcode, SiHashnode } from 'react-icons/si';
import { useState, useEffect } from 'react';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Mr-Rinku-Kumar', label: 'GitHub', color: 'hover:text-gray-300' },
  { icon: FaLinkedin, href: 'https://in.linkedin.com/in/rinku-kumar-6a611a311', label: 'LinkedIn', color: 'hover:text-blue-400' },
  // { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
  // { icon: SiLeetcode, href: 'https://leetcode.com', label: 'LeetCode', color: 'hover:text-yellow-500' },
  // { icon: SiHashnode, href: 'https://hashnode.com', label: 'Hashnode', color: 'hover:text-blue-500' },
  { icon: FaInstagram, href: 'https://www.instagram.com/mr_rinku_roy7510/', label: 'Instagram', color: 'hover:text-pink-500' },
  // { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-500' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const technologies = [
  'React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:730551rinku@gmail.com'; // Update with your email
  };

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <FiCode className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400/50 rounded-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Rinku Kumar
                </h3>
                <p className="text-sm text-gray-400">MERN Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Building exceptional digital experiences with modern web technologies.
              Passionate about creating clean, efficient, and scalable solutions.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailClick}
              className="flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-cyan-500/50 rounded-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
            >
              <FiMail className="w-4 h-4" />
              <span className="text-sm">Let's Connect</span>
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <FiArrowUp className="w-4 h-4 rotate-45" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleQuickLinkClick(e, link.href)}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 bg-white/5 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 rounded-full text-sm transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Connect With Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <FiMail className="w-5 h-5" />
                <a href="mailto:730551rinku@gmail.com" className="text-sm">
                  730551rinku@gmail.com.com
                </a>
              </div>

              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <FiMessageSquare className="w-5 h-5" />
                <a href="https://in.linkedin.com/in/rinku-kumar-6a611a311" target="_blank" rel="noopener noreferrer" className="text-sm">
                  Message on LinkedIn
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-3">Follow me on:</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-lg bg-white/5 border border-gray-700 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-current/50`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"
        />

        {/* Copyright & Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 text-sm"
          >
            <FaRegCopyright className="w-4 h-4" />
            <span>{currentYear} Rinku Kumar. All rights reserved.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 text-sm"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiHeart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <FiCode className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span>by Rinku Kumar</span>
          </motion.div>

          <div className="text-xs text-gray-500 space-x-4">
            <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span className="text-gray-600">•</span>
            <a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 z-40 transition-all duration-300 group cursor-pointer"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            <motion.div
              className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}