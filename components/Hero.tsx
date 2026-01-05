'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FiCode, 
  FiChevronDown, 
  FiArrowRight, 
  FiCoffee, 
  FiGithub, 
  FiLinkedin, 
  FiTwitter,
  FiDownload,
  FiCpu,
  FiDatabase,
  FiGlobe
} from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

const techStack = [
  { icon: FaReact, name: "React", color: "text-cyan-400" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-gray-300" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub", color: "hover:text-gray-300" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
  // { icon: FiTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
];

const stats = [
  { value: "1+", label: "Years Experience", icon: FiCpu },
  { value: "15+", label: "Projects", icon: FiCode },
  { value: "100%", label: "Client Satisfaction", icon: FiGlobe },
  { value: "24/7", label: "Code Mode", icon: FiCoffee },
];

export default function Home() {
  const [typedIndex, setTypedIndex] = useState(0);
  const [showAvatar, setShowAvatar] = useState(false);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1PJRUhOpK95dCXDkSEj0P9zp0IdLfetI-/view?usp=drive_link';
    link.download = 'Rinku_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Trigger avatar animation after a delay
    const timer = setTimeout(() => {
      setShowAvatar(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-8">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-t from-gray-950 via-transparent to-gray-950" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute text-gray-700"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: index * 0.5
            }}
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${30 + (index * 10)}%`,
            }}
          >
            <tech.icon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-4 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
              <span className="text-sm font-medium text-cyan-400 tracking-wider">
                WELCOME TO MY PORTFOLIO
              </span>
              <div className="w-4 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-indigo-400 mb-3 font-medium"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              Rinku <span className="text-gradient">Kumar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <div className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium mb-2">
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'React Specialist',
                    2000,
                    'Node.js Developer',
                    2000,
                    'Next.js Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-cyan-400"
                />
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                Crafting digital experiences with modern technologies
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-xl text-gray-400 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed"
            >
              I build modern, scalable web applications using cutting-edge technologies. 
              Passionate about creating efficient, user-friendly solutions that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                <span>View My Work</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 font-medium rounded-lg flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <FiDownload className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start space-x-4 mb-8"
            >
              <span className="text-gray-500 text-sm">Connect with me:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 ${social.color} transition-all p-2 rounded-lg hover:bg-white/5`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-gray-800 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 flex items-center justify-center space-x-1">
                    <stat.icon className="w-3 h-3" />
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Avatar & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            {/* Avatar Container */}
            <div className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Main Avatar Circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: showAvatar ? 1 : 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.5 
                }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    {/* Avatar Placeholder - Replace with your image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <FiCode className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-cyan-400 mb-4" />
                          <span className="text-gray-400 text-sm"><img src="./RinkuMERN2026.png" alt="rinku" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rotating Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-purple-400"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Ring */}
                <motion.div
                  className="absolute inset-4 rounded-full border border-cyan-500/30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Floating Tech Badges */}
                {techStack.map((tech, index) => {
                  const angle = (index * 360) / techStack.length;
                  const radius = 140;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        scale: 1,
                        x,
                        y,
                        rotate: 360
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        delay: 0.8 + (index * 0.1),
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        translateX: "-50%",
                        translateY: "-50%",
                      }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-900 border-2 border-gray-800 flex items-center justify-center p-2 shadow-lg">
                        <tech.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${tech.color}`} />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Currently Working On */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="glass-effect rounded-xl p-4 sm:p-6 max-w-xs mx-auto lg:mx-0 lg:absolute lg:bottom-10 lg:left-0 mt-8 lg:mt-0"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="text-sm text-gray-400">Currently working on</p>
                  <p className="font-medium text-cyan-400">E-commerce Platform</p>
                </div>
              </div>
            </motion.div>

            {/* Available for Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="glass-effect rounded-xl p-4 sm:p-6 max-w-xs mx-auto lg:mx-0 lg:absolute lg:top-10 lg:right-0 mt-8 lg:mt-0"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <FiCode className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Status</p>
                  <p className="font-medium text-green-400">Available for work</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Explore More</span>
          <FiChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.button>
    </section>
  );
}