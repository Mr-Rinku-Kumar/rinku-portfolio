'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories, type Project, type ProjectCategoryType } from "../data/projects";
import { 
  FiExternalLink, 
  FiGithub, 
  FiCode,
  FiFilter,
  FiEye,
  FiLayers,
  FiStar,
  FiTrendingUp,
  FiChevronRight,
  FiCalendar,
  FiCheckCircle,
  FiArrowRight
} from 'react-icons/fi';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryType>('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Live': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'Completed': return <FiCheckCircle className="w-4 h-4" />;
      case 'In Progress': return <FiTrendingUp className="w-4 h-4" />;
      case 'Live': return <FiEye className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent" />
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
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="text-sm font-medium text-cyan-400 tracking-wider">MY PORTFOLIO</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            A collection of my recent work showcasing full-stack development, UI/UX design, and problem-solving skills
          </p>
        </motion.div>

        {/* Controls & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-6">
            {/* Category Filters */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <FiFilter className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">Filter by Category</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name as ProjectCategoryType)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-gray-700'}`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/10">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FiEye className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">View Mode</span>
              </div>
              <div className="flex bg-white/5 border border-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md transition-all ${viewMode === 'grid'
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('detailed')}
                  className={`px-4 py-2 rounded-md transition-all ${viewMode === 'detailed'
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'}`}
                >
                  Detailed
                </button>
              </div>
            </div>
          </div>

          {/* Projects Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">{filteredProjects.length}</div>
              <div className="text-sm text-gray-400">Projects Shown</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {filteredProjects.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                {filteredProjects.filter(p => p.status === 'Live').length}
              </div>
              <div className="text-sm text-gray-400">Live Projects</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">
                {filteredProjects.filter(p => p.techStack).flatMap(p => p.techStack).length}
              </div>
              <div className="text-sm text-gray-400">Technologies Used</div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "grid grid-cols-1 gap-6"
        }>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                layout
                onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedProject?.id === project.id && viewMode === 'grid'
                    ? 'md:col-span-2 lg:col-span-3'
                    : ''
                }`}
              >
                <div className={`glass-effect rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all h-full ${
                  selectedProject?.id === project.id ? 'ring-2 ring-cyan-500/50' : ''
                }`}>
                  {/* Project Header */}
                  <div className={`h-32 ${project.gradient} relative`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        <span>{project.status}</span>
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-medium border border-gray-700">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                      <div className="flex -space-x-2">
                        {project.icons.slice(0, 3).map((Icon, iconIndex) => (
                          <div 
                            key={iconIndex}
                            className="w-10 h-10 rounded-full bg-gray-900 border-2 border-gray-800 flex items-center justify-center"
                          >
                            <Icon className="w-5 h-5 text-gray-300" />
                          </div>
                        ))}
                        {project.icons.length > 3 && (
                          <div className="w-10 h-10 rounded-full bg-gray-900 border-2 border-gray-800 flex items-center justify-center">
                            <span className="text-xs text-gray-400">+{project.icons.length - 3}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 transition-colors"
                            aria-label="Live Demo"
                          >
                            <FiExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Detailed View (Expanded or Detailed Mode) */}
                    {(selectedProject?.id === project.id || viewMode === 'detailed') && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 mt-4 pt-4 border-t border-gray-800"
                      >
                        <p className="text-gray-300">{project.detailedDescription}</p>
                        
                        {/* Features */}
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center space-x-2">
                            <FiStar className="w-4 h-4 text-yellow-400" />
                            <span>Key Features</span>
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center space-x-2">
                            <FiCode className="w-4 h-4 text-cyan-400" />
                            <span>Tech Stack</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-white/5 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 rounded-full text-sm transition-all cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Links */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white rounded-lg transition-all flex items-center justify-center space-x-2"
                          >
                            <FiGithub className="w-5 h-5" />
                            <span>View Code</span>
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                            >
                              <FiExternalLink className="w-5 h-5" />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Collapsed View */}
                    {selectedProject?.id !== project.id && viewMode === 'grid' && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-white/5 border border-gray-700 text-gray-400 text-xs rounded"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 3 && (
                              <span className="px-2 py-1 bg-white/5 border border-gray-700 text-gray-500 text-xs rounded">
                                +{project.techStack.length - 3} more
                              </span>
                            )}
                          </div>
                          <button className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center space-x-1">
                            <span>View Details</span>
                            <FiChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
              <FiLayers className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">No Projects Found</h3>
            <p className="text-gray-400 mb-6">
              No projects match the selected category. Try a different filter.
            </p>
            <button
              onClick={() => setSelectedCategory('All Projects')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg transition-all"
            >
              Show All Projects
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Want to See More?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and improving existing ones. 
              Check out my GitHub for more repositories and contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 flex items-center justify-center space-x-2"
              >
                <FiGithub className="w-5 h-5" />
                <span>View All on GitHub</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 font-medium rounded-lg transition-all flex items-center justify-center space-x-2"
              >
                <FiArrowRight className="w-5 h-5" />
                <span>Start a Project</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}