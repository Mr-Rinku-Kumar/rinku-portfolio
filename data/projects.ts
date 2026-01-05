import { IconType } from 'react-icons';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaServer,
  FaLock,
  FaNewspaper,
  FaTools,
  FaBoxes,
  FaUsers,
  FaChartLine
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
//   SiJwt
} from 'react-icons/si';
import { 
  FiExternalLink, 
  FiGithub, 
  FiCode,
  FiUsers as FiUsersIcon,
  FiShield,
  FiTrendingUp
} from 'react-icons/fi';

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  icons: IconType[];
  features: string[];
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Management System';
  status: 'Completed' | 'In Progress' | 'Live';
  githubUrl: string;
  liveUrl?: string;
  imageColor: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Inventory Management Software",
    description: "Web-based inventory management system using MERN stack",
    detailedDescription: "A comprehensive inventory management solution with real-time tracking, automated stock alerts, and analytics dashboard. Built for small to medium businesses to streamline their inventory operations.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Chart.js", "Socket.io"],
    icons: [FaReact, FaNodeJs, SiMongodb, SiExpress],
    features: [
      "Real-time inventory tracking",
      "Automated stock alerts",
      "Sales analytics dashboard",
      "Multi-user role management",
      "Barcode scanning integration",
      "Purchase order management"
    ],
    category: "Management System",
    status: "Completed",
    githubUrl: "https://github.com",
    liveUrl: "https://inventory-demo.com",
    imageColor: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "iNotebook",
    description: "Secure note-taking app with CRUD operations and JWT authentication",
    detailedDescription: "A personal note-taking application with cloud synchronization, rich text editing, and secure user authentication. Features real-time updates and category-based organization.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap", "Axios"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaLock],
    features: [
      "CRUD operations for notes",
      "JWT-based authentication",
      "Rich text editor",
      "Category organization",
      "Cloud synchronization",
      "Search functionality"
    ],
    category: "Full Stack",
    status: "Completed",
    githubUrl: "https://github.com",
    liveUrl: "https://inotebook-demo.com",
    imageColor: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
  },
  {
    id: 3,
    title: "QuikNews",
    description: "Responsive news aggregation web app using React and News API",
    detailedDescription: "A modern news aggregator that fetches top headlines from various categories and sources. Features infinite scrolling, category filtering, and bookmark functionality.",
    techStack: ["React", "News API", "Tailwind CSS", "Axios", "React Router", "Context API"],
    icons: [FaReact, FaNewspaper, SiTailwindcss, FiTrendingUp],
    features: [
      "Real-time news aggregation",
      "Category-based filtering",
      "Infinite scroll",
      "Bookmark articles",
      "Dark/Light theme",
      "Responsive design"
    ],
    category: "Frontend",
    status: "Live",
    githubUrl: "https://github.com",
    liveUrl: "https://quiknews-demo.com",
    imageColor: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "TextUtils",
    description: "Text manipulation tool with various operations and utilities",
    detailedDescription: "A comprehensive text processing application that provides multiple text transformation tools including case conversion, word counting, character analysis, and text formatting.",
    techStack: ["React", "JavaScript", "CSS3", "React Hooks", "Clipboard API"],
    icons: [FaReact, SiJavascript, FaTools, FiCode],
    features: [
      "Case conversion (upper/lower)",
      "Word & character counting",
      "Remove extra spaces",
      "Copy to clipboard",
      "Text formatting",
      "Dark mode support"
    ],
    category: "Frontend",
    status: "Completed",
    githubUrl: "https://github.com",
    liveUrl: "https://textutils-demo.com",
    imageColor: "from-orange-500 to-yellow-500",
    gradient: "bg-gradient-to-br from-orange-500/20 to-yellow-500/20"
  },
  {
    id: 5,
    title: "Asset Management System",
    description: "Comprehensive asset tracking and management solution",
    detailedDescription: "Enterprise-grade asset management system for tracking company resources, maintenance schedules, and depreciation. Features barcode/RFID support and detailed reporting.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Express", "JWT", "Chart.js"],
    icons: [SiNextdotjs, SiTypescript, FaBoxes, FaChartLine],
    features: [
      "Asset lifecycle tracking",
      "Maintenance scheduling",
      "Depreciation calculation",
      "Barcode/RFID support",
      "Detailed analytics",
      "Multi-location support"
    ],
    category: "Management System",
    status: "In Progress",
    githubUrl: "https://github.com",
    imageColor: "from-indigo-500 to-blue-500",
    gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20"
  },
  {
    id: 6,
    title: "Club Management Software",
    description: "Platform for managing club activities, members, and events",
    detailedDescription: "A complete solution for clubs and organizations to manage memberships, events, communications, and finances. Includes member portals and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe", "Nodemailer"],
    icons: [FaReact, FaNodeJs, FaUsers, FiUsersIcon],
    features: [
      "Member management",
      "Event scheduling",
      "Payment integration",
      "Notification system",
      "Document sharing",
      "Analytics dashboard"
    ],
    category: "Full Stack",
    status: "Completed",
    githubUrl: "https://github.com",
    liveUrl: "https://clubmgmt-demo.com",
    imageColor: "from-red-500 to-pink-500",
    gradient: "bg-gradient-to-br from-red-500/20 to-pink-500/20"
  }
];

export const projectCategories = [
  { name: "All Projects", count: 6, color: "bg-cyan-500/20 text-cyan-400" },
  { name: "Full Stack", count: 2, color: "bg-green-500/20 text-green-400" },
  { name: "Frontend", count: 2, color: "bg-blue-500/20 text-blue-400" },
  { name: "Management System", count: 2, color: "bg-purple-500/20 text-purple-400" },
];

export type ProjectCategoryType = 'All Projects' | 'Full Stack' | 'Frontend' | 'Management System';