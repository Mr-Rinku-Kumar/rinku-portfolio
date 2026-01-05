import { IconType } from 'react-icons';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaFigma
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiTypescript, 
  SiRedux, 
  SiGraphql,
  SiFirebase,
  SiPostgresql,
  SiJest,
  SiWebpack,
  SiVite,
  SiPython,
  SiGraphql as SiGraphqlIcon
} from 'react-icons/si';
import { 
  FiDatabase, 
  FiServer, 
  FiCode,
  FiCpu,
  FiCloud
} from 'react-icons/fi';

export interface Skill {
  id: number;
  name: string;
  level: number;
  icon: IconType;
  color: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools' | 'Testing' | 'Design';
  gradient: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  count: number;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    level: 95,
    icon: FaReact,
    color: "text-cyan-400",
    category: "Frontend",
    gradient: "from-cyan-500 to-blue-500",
    description: "Advanced knowledge with hooks, context, and custom components"
  },
  {
    id: 2,
    name: "Next.js",
    level: 90,
    icon: SiNextdotjs,
    color: "text-gray-300",
    category: "Frontend",
    gradient: "from-gray-700 to-gray-900",
    description: "SSR, SSG, API routes, and app router expertise"
  },
  {
    id: 3,
    name: "TypeScript",
    level: 85,
    icon: SiTypescript,
    color: "text-blue-500",
    category: "Frontend",
    gradient: "from-blue-500 to-blue-700",
    description: "Strongly typed JavaScript for better code quality"
  },
  {
    id: 4,
    name: "Tailwind CSS",
    level: 95,
    icon: SiTailwindcss,
    color: "text-sky-400",
    category: "Frontend",
    gradient: "from-sky-500 to-cyan-500",
    description: "Utility-first CSS framework mastery"
  },
  {
    id: 5,
    name: "Node.js",
    level: 90,
    icon: FaNodeJs,
    color: "text-green-500",
    category: "Backend",
    gradient: "from-green-500 to-emerald-500",
    description: "Server-side JavaScript runtime and APIs"
  },
  {
    id: 6,
    name: "Express",
    level: 88,
    icon: SiExpress,
    color: "text-gray-400",
    category: "Backend",
    gradient: "from-gray-600 to-gray-800",
    description: "Minimalist web framework for Node.js"
  },
  {
    id: 7,
    name: "MongoDB",
    level: 85,
    icon: SiMongodb,
    color: "text-green-600",
    category: "Database",
    gradient: "from-green-600 to-lime-500",
    description: "NoSQL database design and optimization"
  },
  {
    id: 8,
    name: "PostgreSQL",
    level: 75,
    icon: SiPostgresql,
    color: "text-blue-400",
    category: "Database",
    gradient: "from-blue-400 to-indigo-500",
    description: "Relational database management"
  },
  {
    id: 9,
    name: "Redux",
    level: 85,
    icon: SiRedux,
    color: "text-purple-500",
    category: "Frontend",
    gradient: "from-purple-500 to-violet-500",
    description: "State management library for React"
  },
  {
    id: 10,
    name: "GraphQL",
    level: 70,
    icon: SiGraphqlIcon,
    color: "text-pink-500",
    category: "Backend",
    gradient: "from-pink-500 to-rose-500",
    description: "API query language implementation"
  },
  {
    id: 11,
    name: "Docker",
    level: 75,
    icon: FaDocker,
    color: "text-blue-500",
    category: "DevOps",
    gradient: "from-blue-500 to-cyan-500",
    description: "Containerization and deployment"
  },
  {
    id: 12,
    name: "AWS",
    level: 70,
    icon: FaAws,
    color: "text-yellow-500",
    category: "DevOps",
    gradient: "from-yellow-500 to-orange-500",
    description: "Cloud services and deployment"
  },
  {
    id: 13,
    name: "Git",
    level: 90,
    icon: FaGitAlt,
    color: "text-orange-500",
    category: "Tools",
    gradient: "from-orange-500 to-red-500",
    description: "Version control and collaboration"
  },
  {
    id: 14,
    name: "Jest",
    level: 80,
    icon: SiJest,
    color: "text-red-500",
    category: "Testing",
    gradient: "from-red-500 to-pink-500",
    description: "Testing framework for JavaScript"
  },
  {
    id: 15,
    name: "Firebase",
    level: 75,
    icon: SiFirebase,
    color: "text-yellow-400",
    category: "Backend",
    gradient: "from-yellow-400 to-orange-500",
    description: "Backend-as-a-Service platform"
  },
  {
    id: 16,
    name: "Figma",
    level: 65,
    icon: FaFigma,
    color: "text-purple-400",
    category: "Design",
    gradient: "from-purple-400 to-pink-500",
    description: "UI/UX design and prototyping"
  }
];

export const skillCategories: SkillCategory[] = [
  { name: "Frontend", count: 5, icon: FiCode, color: "bg-cyan-500/20 text-cyan-400" },
  { name: "Backend", count: 4, icon: FiServer, color: "bg-green-500/20 text-green-400" },
  { name: "Database", count: 2, icon: FiDatabase, color: "bg-blue-500/20 text-blue-400" },
  { name: "DevOps", count: 2, icon: FiCloud, color: "bg-yellow-500/20 text-yellow-400" },
  { name: "Tools", count: 3, icon: FiCpu, color: "bg-purple-500/20 text-purple-400" },
];

// Export type for category filter
export type SkillCategoryType = 'all' | 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools' | 'Testing' | 'Design';

// Helper function to get filtered skills
export const getFilteredSkills = (category: SkillCategoryType): Skill[] => {
  if (category === 'all') return skills;
  return skills.filter(skill => skill.category === category);
};

// Helper function to get category stats
export const getCategoryStats = (category: SkillCategoryType) => {
  const categorySkills = category === 'all' ? skills : skills.filter(s => s.category === category);
  const avgLevel = Math.round(categorySkills.reduce((acc, s) => acc + s.level, 0) / categorySkills.length);
  const topSkill = categorySkills.sort((a, b) => b.level - a.level)[0];
  return { avgLevel, topSkill, count: categorySkills.length };
};