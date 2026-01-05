'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiCode, 
  FiUsers, 
  FiTrendingUp, 
  FiAward, 
  FiStar,
  FiChevronRight,
  FiExternalLink,
  FiBookOpen
} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaGraduationCap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiRedux, SiGithub } from 'react-icons/si';

const experiences = [
  {
    id: 1,
    title: "MERN Stack Developer",
    company: "BSD Infotech Pvt Ltd",
    location: "New Delhi, India",
    type: "Full-time",
    duration: "Jan 2024 – Present",
    description: "Developing enterprise-level web applications using modern MERN stack technologies. Collaborating with cross-functional teams to deliver scalable solutions.",
    responsibilities: [
      "Designed and developed scalable MERN stack applications for diverse clients",
      "Built responsive and accessible user interfaces using React, Next.js, and Tailwind CSS",
      "Integrated RESTful APIs and optimized backend performance by 40%",
      "Implemented state management solutions using Redux and Context API",
      "Collaborated with UI/UX designers and QA teams in agile environment",
      "Conducted code reviews and mentored junior developers",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    icon: FaReact,
    color: "from-cyan-500 to-blue-500",
    achievements: [
      "Reduced application load time by 60% through performance optimization",
      "Successfully delivered 15+ projects within deadlines",
      "Implemented automated testing reducing bugs by 45%"
    ]
  },
  {
    id: 2,
    title: "MERN Stack Developer Apprentice",
    company: "Ducat",
    location: "Noida, India",
    type: "Apprenticeship",
    duration: "June 2024 – May 2025",
    description: "Intensive apprenticeship program focusing on full-stack development with the MERN stack. Gained hands-on experience building real-world applications under expert guidance.",
    responsibilities: [
      "Developed scalable web applications using React.js, Node.js, Express, and MongoDB",
      "Collaborated with senior developers to learn and apply industry-standard practices",
      "Managed GitHub repositories and contributed to open-source projects",
      "Tested and debugged applications using tools like Thunderclient and Postman",
      "Designed and implemented REST APIs to support dynamic frontend applications",
      "Participated in code reviews and pair programming sessions",
      "Learned and applied Agile development methodologies"
    ],
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Git/GitHub", "REST APIs", "JavaScript", "HTML/CSS"],
    icon: FaGraduationCap,
    color: "from-purple-500 to-pink-500",
    achievements: [
      "Completed intensive 11-month apprenticeship program",
      "Built 10+ full-stack projects from scratch",
      "Achieved certification in MERN Stack Development",
      "Contributed to 5+ open-source repositories"
    ]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    type: "Contract",
    duration: "Jun 2023 – Dec 2023",
    description: "Worked with various startups and businesses to build custom web applications and digital solutions.",
    responsibilities: [
      "Developed full-stack applications for clients across different industries",
      "Created responsive designs with mobile-first approach",
      "Integrated third-party APIs including payment gateways and social media",
      "Optimized database queries improving application performance",
      "Provided technical consultation and project architecture planning"
    ],
    technologies: ["React", "Node.js", "Firebase", "MongoDB", "Express", "Material-UI", "Socket.io"],
    icon: FiCode,
    color: "from-green-500 to-emerald-500",
    achievements: [
      "Built 20+ successful projects with 95% client satisfaction",
      "Increased client revenue by implementing efficient e-commerce solutions"
    ]
  },
  {
    id: 4,
    title: "Frontend Developer Intern",
    company: "Tech Solutions Inc",
    location: "Bangalore, India",
    type: "Internship",
    duration: "Mar 2023 – May 2023",
    description: "Assisted in developing frontend components and learning industry best practices in web development.",
    responsibilities: [
      "Developed reusable React components and custom hooks",
      "Implemented responsive layouts using CSS Grid and Flexbox",
      "Participated in daily stand-ups and sprint planning meetings",
      "Learned and applied software development best practices",
      "Contributed to codebase documentation"
    ],
    technologies: ["React", "JavaScript", "CSS3", "Git", "Jest", "Webpack"],
    icon: FiTrendingUp,
    color: "from-orange-500 to-yellow-500",
    achievements: [
      "Successfully completed 3 major project modules",
      "Received 'Top Performer' award among interns"
    ]
  },
  {
    id: 5,
    title: "Open Source Contributor",
    company: "GitHub Community",
    location: "Global",
    type: "Volunteer",
    duration: "2022 – Ongoing",
    description: "Contributed to various open-source projects to enhance skills and give back to the developer community.",
    responsibilities: [
      "Contributed to React and Node.js based open-source projects",
      "Fixed bugs and implemented new features",
      "Improved documentation and added examples",
      "Participated in code reviews and discussions",
      "Managed GitHub repositories and version control"
    ],
    technologies: ["Git", "GitHub", "React", "Node.js", "Documentation", "Testing"],
    icon: FiUsers,
    color: "from-red-500 to-pink-500",
    achievements: [
      "Merged 50+ pull requests across various repositories",
      "Recognized as a top contributor for 2 projects",
      "Maintained 3 personal open-source projects"
    ]
  }
];

const skillsCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92, icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", level: 88, icon: FiCode, color: "text-gray-300" },
      { name: "TypeScript", level: 85, icon: SiTypescript, color: "text-blue-500" },
      { name: "Tailwind CSS", level: 95, icon: SiTailwindcss, color: "text-sky-400" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90, icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", level: 90, icon: SiExpress, color: "text-gray-300" },
      { name: "REST APIs", level: 92, icon: FaServer, color: "text-purple-400" },
      { name: "MongoDB", level: 88, icon: SiMongodb, color: "text-green-600" },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 92, icon: SiGithub, color: "text-orange-400" },
      { name: "Redux", level: 88, icon: SiRedux, color: "text-purple-500" },
      { name: "Testing", level: 85, icon: FiCode, color: "text-red-400" },
      { name: "Agile/Scrum", level: 82, icon: FiTrendingUp, color: "text-yellow-500" },
    ]
  }
];

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);
  const [showAllResponsibilities, setShowAllResponsibilities] = useState(false);

  return (
    <section id="experience" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent" />
        
        {/* Learning Path Visualization */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-green-500/5 to-yellow-500/5 rounded-full blur-2xl" />
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
            <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500" />
            <span className="text-sm font-medium text-cyan-400 tracking-wider">PROFESSIONAL JOURNEY</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            My journey from apprenticeship to professional development, continuously learning and growing in the tech industry
          </p>
          
          {/* Experience Journey Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-2 mt-6"
          >
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-xs text-purple-400">Apprenticeship</span>
            </div>
            <div className="w-4 h-0.5 bg-gray-700" />
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-cyan-500 rounded-full" />
              <span className="text-xs text-cyan-400">Professional</span>
            </div>
            <div className="w-4 h-0.5 bg-gray-700" />
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-xs text-green-400">Continuous Learning</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Left Column - Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-cyan-500/50 to-green-500/20 hidden lg:block" />
              
              {/* Experience Items */}
              <div className="space-y-6 sm:space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveExperience(exp)}
                    className={`relative cursor-pointer group transition-all duration-300 ${
                      activeExperience.id === exp.id 
                        ? 'lg:translate-x-4' 
                        : 'hover:translate-x-2 lg:hover:translate-x-4'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-6 top-6 hidden lg:block">
                      <div className={`relative w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} ${
                        activeExperience.id === exp.id ? 'scale-125' : ''
                      } transition-transform duration-300`}>
                        {exp.type === 'Apprenticeship' && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-gray-900" />
                        )}
                        {activeExperience.id === exp.id && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </div>
                    </div>

                    <div className={`glass-effect rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 ${
                      activeExperience.id === exp.id
                        ? 'border-cyan-500/50 bg-cyan-500/5'
                        : exp.type === 'Apprenticeship'
                        ? 'border-purple-500/30 bg-purple-500/5 hover:border-purple-500/50'
                        : 'border-gray-800 hover:border-cyan-500/30'
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} p-0.5 ${
                              activeExperience.id === exp.id ? 'scale-110' : ''
                            } transition-transform duration-300`}>
                              <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                                <exp.icon className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="text-xl sm:text-2xl font-bold">{exp.title}</h3>
                                {exp.type === 'Apprenticeship' && (
                                  <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium border border-purple-500/30">
                                    Apprenticeship
                                  </span>
                                )}
                              </div>
                              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                                <span className="flex items-center space-x-1">
                                  <FiBriefcase className="w-4 h-4" />
                                  <span>{exp.company}</span>
                                </span>
                                <span className="hidden sm:inline">•</span>
                                <span className="flex items-center space-x-1">
                                  <FiMapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                              exp.type === 'Apprenticeship'
                                ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400'
                                : exp.type === 'Full-time'
                                ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                                : 'bg-gray-800 text-gray-300 border border-gray-700'
                            }`}>
                              {exp.type}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">
                              <FiCalendar className="w-3 h-3 mr-1" />
                              {exp.duration}
                            </span>
                            {exp.type === 'Apprenticeship' && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm">
                                <FiBookOpen className="w-3 h-3 mr-1" />
                                Learning Phase
                              </span>
                            )}
                          </div>

                          <p className="text-gray-300 mb-4">{exp.description}</p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.technologies.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className={`px-3 py-1.5 rounded-full text-sm border ${
                                  exp.type === 'Apprenticeship'
                                    ? 'bg-purple-500/5 border-purple-500/20 text-purple-300'
                                    : 'bg-white/5 border-gray-700 text-gray-300'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                            {exp.technologies.length > 4 && (
                              <span className={`px-3 py-1.5 rounded-full text-sm border ${
                                exp.type === 'Apprenticeship'
                                  ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                                  : 'bg-white/5 border-gray-700 text-gray-400'
                              }`}>
                                +{exp.technologies.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Select Indicator */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start space-x-4 sm:space-x-0 sm:space-y-2">
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                            activeExperience.id === exp.id 
                              ? exp.type === 'Apprenticeship'
                                ? 'bg-purple-400'
                                : 'bg-cyan-400'
                              : 'bg-gray-600 group-hover:bg-cyan-400/50'
                          } transition-colors`} />
                          <span className="text-xs text-gray-500">
                            {index === 0 ? 'Current' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Detailed View */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Selected Experience Details */}
            <div className={`glass-effect rounded-2xl p-6 sm:p-8 sticky top-24 ${
              activeExperience.type === 'Apprenticeship' 
                ? 'border-l-4 border-purple-500' 
                : 'border-l-4 border-cyan-500'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl sm:text-2xl font-bold flex items-center space-x-2">
                    <FiBriefcase className={`w-6 h-6 ${
                      activeExperience.type === 'Apprenticeship' ? 'text-purple-400' : 'text-cyan-400'
                    }`} />
                    <span>Role Details</span>
                  </h3>
                  {activeExperience.type === 'Apprenticeship' && (
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                      <span className="text-sm font-medium text-purple-400">Learning Experience</span>
                    </div>
                  )}
                </div>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  activeExperience.type === 'Apprenticeship'
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'bg-cyan-500/10 text-cyan-400'
                }`}>
                  {activeExperience.type}
                </span>
              </div>

              <div className="space-y-6">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                    <FiChevronRight className={`w-5 h-5 ${
                      activeExperience.type === 'Apprenticeship' ? 'text-purple-400' : 'text-cyan-400'
                    }`} />
                    <span>Key Responsibilities</span>
                  </h4>
                  <ul className="space-y-2">
                    {(showAllResponsibilities 
                      ? activeExperience.responsibilities 
                      : activeExperience.responsibilities.slice(0, 4)
                    ).map((resp, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          activeExperience.type === 'Apprenticeship' ? 'bg-purple-400' : 'bg-cyan-400'
                        }`} />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {activeExperience.responsibilities.length > 4 && (
                    <button
                      onClick={() => setShowAllResponsibilities(!showAllResponsibilities)}
                      className={`mt-3 text-sm flex items-center space-x-1 transition-colors ${
                        activeExperience.type === 'Apprenticeship'
                          ? 'text-purple-400 hover:text-purple-300'
                          : 'text-cyan-400 hover:text-cyan-300'
                      }`}
                    >
                      <span>{showAllResponsibilities ? 'Show Less' : `Show ${activeExperience.responsibilities.length - 4} More`}</span>
                      <FiChevronRight className={`w-4 h-4 transition-transform ${showAllResponsibilities ? 'rotate-90' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                    <FiAward className="w-5 h-5 text-yellow-400" />
                    <span>Achievements</span>
                  </h4>
                  <div className="space-y-3">
                    {activeExperience.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-3 rounded-lg border ${
                          activeExperience.type === 'Apprenticeship'
                            ? 'bg-purple-500/5 border-purple-500/20'
                            : 'bg-yellow-500/5 border-yellow-500/20'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          <FiStar className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            activeExperience.type === 'Apprenticeship' ? 'text-purple-400' : 'text-yellow-400'
                          }`} />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                    <FiCode className={`w-5 h-5 ${
                      activeExperience.type === 'Apprenticeship' ? 'text-purple-400' : 'text-cyan-400'
                    }`} />
                    <span>Technologies Used</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all cursor-default ${
                          activeExperience.type === 'Apprenticeship'
                            ? 'bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-500/50 text-purple-300 hover:text-purple-200'
                            : 'bg-white/5 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learning Focus for Apprenticeship */}
                {activeExperience.type === 'Apprenticeship' && (
                  <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <h4 className="font-semibold text-purple-400 mb-2 flex items-center space-x-2">
                      <FiBookOpen className="w-5 h-5" />
                      <span>Learning Focus</span>
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span>Industry-standard development practices</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span>Full-stack application architecture</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span>Professional collaboration and teamwork</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Skills Overview */}
            <div className="glass-effect rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center space-x-2">
                <FiTrendingUp className="w-6 h-6 text-green-400" />
                <span>Skills Overview</span>
              </h3>
              
              <div className="space-y-6">
                {skillsCategories.map((category, catIndex) => (
                  <div key={category.title}>
                    <h4 className="font-semibold mb-3 text-gray-300">{category.title}</h4>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <div className="p-1 rounded bg-white/5">
                                <skill.icon className={`w-4 h-4 ${skill.color}`} />
                              </div>
                              <span className="text-sm">{skill.name}</span>
                            </div>
                            <span className="text-xs text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: (catIndex * 0.3) + (skillIndex * 0.1) }}
                              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">2+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">10+</div>
                <div className="text-xs text-gray-400">Projects Completed</div>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                <div className="text-xs text-gray-400">Client Satisfaction</div>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">50+</div>
                <div className="text-xs text-gray-400">Technologies Used</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Continuous Learner & Problem Solver</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              From structured apprenticeships to professional development, I believe in continuous learning 
              and applying knowledge to solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                Let's Connect
              </a>
              <a
                href="https://drive.google.com/file/d/1PJRUhOpK95dCXDkSEj0P9zp0IdLfetI-/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 font-medium rounded-lg transition-all flex items-center justify-center space-x-2"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}