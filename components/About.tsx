'use client';

import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiGlobe, FiTarget, FiUser, FiAward, FiBriefcase, FiClock } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase, FaServer } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { useState } from 'react';

const skills = [
  { icon: FaReact, name: 'React', level: 90, color: 'text-cyan-400' },
  { icon: FaNodeJs, name: 'Node.js', level: 85, color: 'text-green-500' },
  { icon: SiMongodb, name: 'MongoDB', level: 80, color: 'text-green-600' },
  { icon: SiExpress, name: 'Express', level: 85, color: 'text-gray-300' },
  { icon: SiTypescript, name: 'TypeScript', level: 75, color: 'text-blue-500' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', level: 95, color: 'text-sky-400' },
  { icon: FaServer, name: 'REST APIs', level: 88, color: 'text-purple-400' },
  { icon: FaDatabase, name: 'Database Design', level: 82, color: 'text-orange-400' },
];

const experience = [
  { company: "BSD Infotech Pvt Ltd", role: "MERN Stack Developer", duration: "1+ years", icon: FiBriefcase },
  { company: "Freelance", role: "Full Stack Developer", duration: "2 years", icon: FiGlobe },
  { company: "Open Source", role: "Contributor", duration: "Ongoing", icon: FiCode },
];

const interests = [
  { icon: FiTarget, title: "Clean Architecture", desc: "Building scalable and maintainable systems" },
  { icon: FiCoffee, title: "Performance", desc: "Optimizing for speed and efficiency" },
  { icon: FiGlobe, title: "UX Focus", desc: "Creating intuitive user experiences" },
  { icon: FiAward, title: "Best Practices", desc: "Following industry standards and patterns" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
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
            <span className="text-sm font-medium text-cyan-400 tracking-wider">INTRODUCTION</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="glass-effect rounded-2xl p-6 sm:p-8 h-full">
              {/* Profile Card */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 p-1 mx-auto">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      {/* <FiUser className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400" /> */}
                      <img className='object-contain rounded-full h-full w-full' src="./RinkuMERN.png" alt="Rinku Singh" />
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Rinku Kumar</h3>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
                  <span className="text-cyan-400 font-medium text-sm">MERN Stack Developer</span>
                </div>
                
                <p className="text-gray-400 text-sm sm:text-base mb-4">
                  Passionate about building scalable web applications with clean code and modern practices.
                </p>
                
                <div className="flex justify-center space-x-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">1+</div>
                    <div className="text-xs text-gray-400">Years Experience</div>
                  </div>
                  <div className="w-px bg-gray-700" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">20+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                  <div className="w-px bg-gray-700" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-xs text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg flex items-center space-x-2">
                  <FiBriefcase className="w-5 h-5 text-cyan-400" />
                  <span>Experience</span>
                </h4>
                <div className="space-y-3">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-cyan-500/10">
                        <exp.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium">{exp.company}</h5>
                        <p className="text-sm text-gray-400">{exp.role}</p>
                      </div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <FiClock className="w-3 h-3 mr-1" />
                        {exp.duration}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {['overview', 'skills', 'approach'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">My Journey</h3>
                    <div className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        I'm a passionate <span className="text-cyan-400 font-medium">MERN Stack Developer</span> with 
                        over a year of professional experience at <span className="text-purple-400">BSD Infotech Pvt Ltd</span>, 
                        where I've been building robust, scalable web applications that solve real-world problems.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        My expertise spans the entire development lifecycle - from conceptualizing user interfaces 
                        to implementing server-side logic and database architecture. I thrive on turning complex 
                        requirements into elegant, efficient solutions.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        What drives me is the intersection of <span className="text-green-400">clean design</span>, 
                        <span className="text-blue-400"> optimal performance</span>, and 
                        <span className="text-orange-400"> maintainable code</span>. I believe great software 
                        should not only work well but also be a joy to build upon.
                      </p>
                    </div>

                    {/* Interests Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                      {interests.map((interest, index) => (
                        <motion.div
                          key={interest.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                          className="p-4 rounded-xl bg-white/5 border border-gray-700 hover:border-cyan-500/30 transition-all group"
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                              <interest.icon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <h4 className="font-semibold">{interest.title}</h4>
                          </div>
                          <p className="text-sm text-gray-400">{interest.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'skills' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Technical Expertise</h3>
                    <p className="text-gray-400 mb-6">
                      My skill set spans across modern web development technologies with a focus on the MERN stack
                    </p>
                    
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 rounded-lg bg-white/5">
                                <skill.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${skill.color}`} />
                              </div>
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                          
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className={`h-full rounded-full bg-gradient-to-r ${skill.color.replace('text-', 'from-')} to-purple-500`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Additional Skills */}
                    <div className="pt-4">
                      <h4 className="font-semibold mb-3">Also Proficient In:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Git', 'Docker', 'AWS', 'Jest', 'Redux', 'GraphQL', 'Next.js', 'Firebase'].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-white/5 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-500/30 text-gray-300 hover:text-cyan-400 rounded-full text-sm transition-all cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'approach' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">Development Philosophy</h3>
                    
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-cyan-400 flex items-center space-x-2">
                          <FiTarget className="w-5 h-5" />
                          <span>Clean & Maintainable Code</span>
                        </h4>
                        <p className="text-gray-300">
                          I believe that code is read more often than it's written. My focus is on writing 
                          clean, self-documenting code that's easy to understand, modify, and scale. 
                          Following SOLID principles and design patterns to create robust architectures.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-purple-400 flex items-center space-x-2">
                          <FiCoffee className="w-5 h-5" />
                          <span>Performance First</span>
                        </h4>
                        <p className="text-gray-300">
                          Every millisecond counts. I optimize applications for speed through code splitting, 
                          lazy loading, efficient algorithms, and proper caching strategies. Performance 
                          monitoring and optimization are integral parts of my development process.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-green-400 flex items-center space-x-2">
                          <FiGlobe className="w-5 h-5" />
                          <span>User-Centric Design</span>
                        </h4>
                        <p className="text-gray-300">
                          Great software solves user problems elegantly. I focus on creating intuitive 
                          interfaces and seamless experiences, ensuring accessibility and responsiveness 
                          across all devices and platforms.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-orange-400 flex items-center space-x-2">
                          <FiAward className="w-5 h-5" />
                          <span>Continuous Learning</span>
                        </h4>
                        <p className="text-gray-300">
                          Technology evolves rapidly. I stay updated with the latest trends, tools, and 
                          best practices through continuous learning, experimentation, and contributing 
                          to open-source projects.
                        </p>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="glass-effect rounded-xl p-6 mt-6 border border-cyan-500/20">
                      <h4 className="font-semibold text-lg mb-2">Let's Build Something Amazing</h4>
                      <p className="text-gray-400 mb-4">
                        Interested in collaborating on a project or have an opportunity you'd like to discuss?
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="#contact"
                          className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-lg text-center transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                        >
                          Get In Touch
                        </a>
                        <a
                          href="/resume.pdf"
                          download
                          className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 font-medium rounded-lg text-center transition-all"
                        >
                          Download Resume
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-effect rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <FiCode className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <blockquote className="text-lg sm:text-xl italic text-gray-300 mb-2">
                    "Good software, like good wine, takes time. But when done right, it only gets better with age."
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-purple-500" />
                    <span className="text-sm text-gray-400">My Development Mantra</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}