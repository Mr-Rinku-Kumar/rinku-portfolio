'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiFileText } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { SiLeetcode, SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Skills', href: '#skills', icon: FiCode },
  { name: 'Projects', href: '#projects', icon: FiBriefcase },
  { name: 'Experience', href: '#experience', icon: FiFileText },
  { name: 'Contact', href: '#contact', icon: FiMail },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Mr-Rinku-Kumar', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://in.linkedin.com/in/rinku-kumar-6a611a311', label: 'LinkedIn' },
  // { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  // { icon: SiLeetcode, href: 'https://leetcode.com', label: 'LeetCode' },
];

// MERN Stack Icons for logo
const mernStackIcons = [
  { icon: SiMongodb, color: 'text-green-500', label: 'MongoDB' },
  { icon: SiExpress, color: 'text-gray-400', label: 'Express' },
  { icon: SiReact, color: 'text-cyan-400', label: 'React' },
  { icon: SiNodedotjs, color: 'text-green-600', label: 'Node.js' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1PJRUhOpK95dCXDkSEj0P9zp0IdLfetI-/view?usp=drive_link';
    link.download = 'Rinku_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-800/50 py-3'
          : 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/30 py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredLogo(true)}
              onMouseLeave={() => setHoveredLogo(false)}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                {/* Logo Container */}
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center p-1">
                  {/* Your Logo */}
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
                    <div className="relative w-8 h-8">
                      {/* Replace with your logo image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-lg"><img src="/RinkuMERN.png" alt="Rinku Kumar Logo" className="object-cover h-full w-full" /></span>
                      </div>
                      {/* Alternative: Use Image component if you have a logo file */}
                      {/* <Image
                        src="/your-logo.png"
                        alt="Rinku Kumar Logo"
                        fill
                        className="object-contain"
                      /> */}
                    </div>
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400/50 rounded-xl"
                  initial={false}
                  animate={{
                    scale: hoveredLogo ? [1, 1.2, 1] : [1, 1.1, 1],
                    rotate: hoveredLogo ? 360 : 0
                  }}
                  transition={{
                    duration: hoveredLogo ? 2 : 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Floating Tech Icons on Hover */}
                <AnimatePresence>
                  {hoveredLogo && (
                    <>
                      {mernStackIcons.map((tech, index) => {
                        const angle = (index * 90) * (Math.PI / 180);
                        const radius = 35;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                          <motion.div
                            key={tech.label}
                            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                            animate={{ opacity: 1, scale: 1, x, y }}
                            exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                            transition={{
                              delay: index * 0.1,
                              type: "spring",
                              stiffness: 200
                            }}
                            className="absolute top-1/2 left-1/2 z-10"
                            style={{
                              translateX: "-50%",
                              translateY: "-50%",
                            }}
                          >
                            <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shadow-lg">
                              <tech.icon className={`w-4 h-4 ${tech.color}`} />
                            </div>
                          </motion.div>
                        );
                      })}
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Name with Enhanced Typography */}
              <div className="relative">
                <h1 className="font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Rinku Kumar
                </h1>

                {/* MERN Stack Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center space-x-1 mt-1"
                >
                  {/* MERN Text with Gradient */}
                  <div className="flex items-center">
                    <span className="text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                      MERN
                    </span>
                    <span className="text-xs text-gray-400 ml-1">Stack</span>
                  </div>

                  {/* Tech Icons Dot Indicators */}
                  <div className="flex items-center ml-2">
                    {mernStackIcons.map((tech, index) => (
                      <motion.div
                        key={tech.label}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className={`w-1.5 h-1.5 rounded-full mx-0.5 ${tech.color.replace('text-', 'bg-')} opacity-70`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.replace('#', '');

                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -2 }}
                      className="relative"
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${isActive
                          ? 'text-cyan-400 bg-white/5'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{item.name}</span>
                      </a>

                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3 border-l border-gray-700/50 pl-6 ml-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      color: '#22d3ee'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Resume Button */}
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-lg flex items-center space-x-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer"
              >
                <FaDownload className="w-4 h-4" />
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Active Section Indicator for Mobile */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              className="lg:hidden absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
              style={{
                width: '20%',
                left: `${navItems.findIndex(item =>
                  item.href.replace('#', '') === activeSection
                ) * 20}%`
              }}
            />
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-gray-900/95 backdrop-blur-xl z-50 border-l border-gray-800 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center p-1">
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">RK</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg text-white">Rinku Kumar</h2>
                      {/* MERN Stack Badge in Mobile */}
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center mt-1">
                          <span className="text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                            MERN
                          </span>
                          <span className="text-xs text-gray-400 ml-1">Stack</span>
                        </div>
                        <div className="flex items-center">
                          {mernStackIcons.map((tech) => (
                            <tech.icon
                              key={tech.label}
                              className={`w-3 h-3 mx-0.5 ${tech.color}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex-1 space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.replace('#', '');

                    return (
                      <motion.a
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${isActive
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="mobileActive"
                            className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Mobile Social Links & Resume */}
                <div className="pt-6 border-t border-gray-800 space-y-6">
                  {/* MERN Stack Visualization in Mobile */}
                  <div className="flex flex-col items-center space-y-3">
                    <span className="text-sm text-gray-400">Tech Stack</span>
                    <div className="flex items-center justify-center space-x-3">
                      {mernStackIcons.map((tech) => (
                        <div
                          key={tech.label}
                          className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-gray-700"
                        >
                          <tech.icon className={`w-5 h-5 ${tech.color}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-500/50 transition-all"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>

                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    onClick={handleDownloadResume}
                    className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
                  >
                    <FaDownload className="w-5 h-5" />
                    <span>Download Resume</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}