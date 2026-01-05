'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories, type Skill, type SkillCategoryType, getCategoryStats } from "../data/skills";
import { 
  FiFilter,
  FiTrendingUp,
  FiAward,
  FiStar,
  FiCheck
} from 'react-icons/fi';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategoryType>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [sortBy, setSortBy] = useState<'level' | 'name' | 'category'>('level');

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Sort skills
  const sortedSkills = [...filteredSkills].sort((a, b) => {
    if (sortBy === 'level') return b.level - a.level;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  const stats = getCategoryStats(selectedCategory);

  return (
    <section id="skills" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
            <span className="text-sm font-medium text-cyan-400 tracking-wider">TECHNICAL EXPERTISE</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            A comprehensive showcase of my technical skills and proficiencies across various domains
          </p>
        </motion.div>

        {/* Category Filter & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Category Filters */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <FiFilter className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">Filter by Category</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === 'all' 
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/20' 
                    : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-gray-700'}`}
                >
                  All Skills
                </button>
                {skillCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name as SkillCategoryType)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-gray-700'}`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/10">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center space-x-2">
                <FiTrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">Sort by</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'level', label: 'Proficiency' },
                  { value: 'name', label: 'Name' },
                  { value: 'category', label: 'Category' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value as 'level' | 'name' | 'category')}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all ${sortBy === option.value
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-gray-700'}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-2xl p-4 sm:p-6 mt-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">
                  {stats.avgLevel}%
                </div>
                <div className="text-sm text-gray-400">Average Proficiency</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  {stats.count}
                </div>
                <div className="text-sm text-gray-400">Skills in {selectedCategory === 'all' ? 'Total' : selectedCategory}</div>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <FiStar className="w-5 h-5 text-yellow-400" />
                  <div className="text-xl font-bold text-yellow-400">
                    {stats.topSkill?.name}
                  </div>
                </div>
                <div className="text-sm text-gray-400">Top Skill ({stats.topSkill?.level}%)</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {sortedSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
                onClick={() => setSelectedSkill(selectedSkill?.id === skill.id ? null : skill)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedSkill?.id === skill.id
                    ? 'ring-2 ring-cyan-500/50 transform scale-[1.02]'
                    : 'hover:scale-[1.02]'
                }`}
              >
                <div className="glass-effect rounded-2xl p-4 sm:p-6 h-full border border-gray-800 hover:border-cyan-500/30">
                  {/* Skill Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.gradient} p-0.5`}>
                        <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                          <skill.icon className={`w-6 h-6 ${skill.color}`} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{skill.name}</h3>
                        <p className="text-xs text-gray-500">{skill.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{skill.level}%</div>
                      <div className="text-xs text-gray-500">Proficiency</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                      />
                    </div>
                  </div>

                  {/* Skill Description (Visible when selected) */}
                  <AnimatePresence>
                    {selectedSkill?.id === skill.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-800"
                      >
                        <p className="text-sm text-gray-400">{skill.description}</p>
                        <div className="flex items-center space-x-2 mt-3">
                          <FiCheck className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-gray-500">Click to collapse details</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Quick Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{skill.category}</span>
                    <div className="flex items-center space-x-2">
                      {skill.level >= 90 && (
                        <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400">
                          Expert
                        </span>
                      )}
                      {skill.level >= 70 && skill.level < 90 && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400">
                          Advanced
                        </span>
                      )}
                      {skill.level < 70 && (
                        <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400">
                          Intermediate
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-effect rounded-2xl p-6 sm:p-8 mt-8 sm:mt-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
            <FiAward className="w-6 h-6 text-cyan-400" />
            <span>Proficiency Levels</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
                <div>
                  <h4 className="font-semibold">Basic Knowledge</h4>
                  <p className="text-sm text-gray-400">Under 70% proficiency</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span>Fundamental understanding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span>Can implement with guidance</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                <div>
                  <h4 className="font-semibold">Advanced Skills</h4>
                  <p className="text-sm text-gray-400">70-89% proficiency</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>Strong practical experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>Can work independently</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                <div>
                  <h4 className="font-semibold">Expert Level</h4>
                  <p className="text-sm text-gray-400">90%+ proficiency</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Deep mastery and expertise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Can mentor others</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Leverage My Skills?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm passionate about applying these skills to solve real-world problems and create impactful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 font-medium rounded-lg transition-all"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}