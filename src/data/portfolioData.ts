import {
  Stat,
  Experience,
  FeaturedProject,
  ProductConcept,
  SkillCategory,
  Education,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Sri Hari Mada',
  role: 'Frontend Engineer',
  location: 'Hyderabad, Telangana, India',
  phone: '+91 9014628432',
  email: 'srihari24software@gmail.com',
  linkedin: 'https://www.linkedin.com/in/Sri_Hari_Mada',
  github: 'https://github.com/SriHari2442',
  linkedinHandle: 'Sri_Hari_Mada',
  githubHandle: 'SriHari2442',
  heroDescription: 'I build scalable, responsive, accessible, and user-focused web applications using React.js and TypeScript.',
  professionalSummary:
    'Frontend Engineer with 3+ years of experience building scalable, responsive, and accessible web applications using React.js and TypeScript across banking and logistics domains. Experienced in reusable component architecture, state management, REST API integration, performance optimization, and WCAG-compliant development. Independently designed and deployed PG Adda, a responsive frontend product prototype demonstrating end-to-end development, product thinking, and user-focused interface design.',
};

export const STATS: Stat[] = [
  {
    id: 'exp',
    value: '3+',
    label: 'Years Experience',
    iconName: 'UserCheck',
    badgeBg: 'bg-blue-500/10 border border-blue-200/60 text-blue-600',
    textColor: 'text-slate-900',
  },
  {
    id: 'domains',
    value: '2',
    label: 'Domains (Banking & Logistics)',
    iconName: 'Briefcase',
    badgeBg: 'bg-purple-500/10 border border-purple-200/60 text-purple-600',
    textColor: 'text-slate-900',
  },
  {
    id: 'a11y',
    value: 'WCAG',
    label: 'ADA Compliance',
    iconName: 'ShieldCheck',
    badgeBg: 'bg-emerald-500/10 border border-emerald-200/60 text-emerald-600',
    textColor: 'text-slate-900',
  },
  {
    id: 'expertise',
    value: 'React & TS',
    label: 'Core Stack',
    iconName: 'Code2',
    badgeBg: 'bg-amber-500/10 border border-amber-200/60 text-amber-600',
    textColor: 'text-slate-900',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'virtusa',
    period: 'August 2024 – Present',
    role: 'Software Engineer – Frontend',
    company: 'Virtusa Consulting Services Pvt. Ltd.',
    location: 'Hyderabad, Telangana, India',
    project: 'Huntington Bank – Enterprise Alerts Management System',
    domain: 'Enterprise Banking',
    tag: 'Enterprise Banking',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
    companyLogoText: 'VIRTUSA',
    companyLogoBg: 'bg-blue-900 text-white font-black tracking-tighter',
    companyLogoColor: 'text-blue-600',
    responsibilities: [
      'Developed reusable React and TypeScript components for enterprise banking modules, improving maintainability and reducing UI duplication.',
      'Managed application state with Context API and optimized rendering behaviour to improve interface responsiveness.',
      'Integrated REST APIs using structured data flows and centralized error handling.',
      'Implemented Adobe Analytics tagging and supported Contentsquare integration.',
      'Resolved keyboard-navigation, focus-management, and screen-reader issues to support WCAG and ADA compliance.',
      'Collaborated with QA, backend, onsite, and product teams during Agile delivery and release validation.',
      'Coordinated Jenkins-based demo deployments and validated OpenShift deployments with DevOps teams.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'Context API',
      'HTML5',
      'CSS3',
      'REST APIs',
      'Adobe Analytics',
      'Contentsquare',
      'WCAG',
      'ADA',
      'Git',
      'Jenkins',
      'OpenShift',
    ],
  },
  {
    id: 'encore',
    period: 'November 2022 – May 2024',
    role: 'Frontend React Developer',
    company: 'Encore IT Services Pvt. Ltd.',
    location: 'Chennai, Tamil Nadu, India',
    project: 'Span Alaska Matson – Logistics Management Platform',
    domain: 'Logistics',
    tag: 'Logistics',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
    companyLogoText: 'ENCORE',
    companyLogoBg: 'bg-indigo-900 text-white font-bold tracking-tight',
    companyLogoColor: 'text-purple-600',
    responsibilities: [
      'Developed reusable React interfaces for employee, support-management, and operational workflow modules.',
      'Built configurable reporting dashboards using responsive, user-focused layouts.',
      'Improved interface responsiveness and resolved UI and API-integration defects.',
      'Implemented asynchronous workflows using Promises and async/await.',
      'Collaborated with backend and UI/UX teams during Agile sprint cycles.',
    ],
    technologies: [
      'React.js',
      'JavaScript ES6+',
      'React Hooks',
      'Context API',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'REST APIs',
    ],
  },
];

export const FEATURED_PROJECT: FeaturedProject = {
  name: 'PG Adda',
  subtitle: 'Frontend Product Prototype for PG and Co-Living Discovery',
  type: 'Personal Project',
  description:
    'PG Adda is a responsive frontend product prototype designed to help users discover PG and co-living accommodation in Hyderabad.',
  features: [
    'Location-based search',
    'Budget filtering',
    'Amenity filtering',
    'Tenant-category filtering',
    'Sorting',
    'Favourites',
    'Detailed property views',
    'Property enquiry',
    'Site-visit date and time selection',
    'Confirmation feedback',
    'Call, WhatsApp, and email actions',
    'Responsive desktop and mobile interfaces',
  ],
  technologies: [
    'React.js',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'JavaScript',
    'HTML5',
    'Git',
    'GitHub',
    'Vercel',
    'Google AI Studio',
  ],
  liveUrl: 'https://pg-adda-ruby.vercel.app/',
  githubUrl: 'https://github.com/SriHari2442/pg-adda',
};

export const PRODUCT_CONCEPT: ProductConcept = {
  name: 'Quiet Mode for WhatsApp',
  type: 'Messaging UX Concept',
  description:
    'A messaging feature concept focused on reducing communication pressure and supporting digital wellbeing.',
  featuresExplored: [
    'Silent notifications',
    'Automatic replies',
    'Sender visibility',
    'Scheduled quiet periods',
    'Scenario-based user experience demonstration',
  ],
  tools: ['ChatGPT', 'NotebookLM'],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    iconName: 'Code2',
    skills: ['JavaScript ES6+', 'TypeScript'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Frontend',
    iconName: 'Layout',
    skills: ['React.js', 'React Hooks', 'HTML5', 'CSS3', 'React Router'],
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'State Management',
    iconName: 'Layers',
    skills: ['Redux', 'Redux Toolkit', 'Context API'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Styling',
    iconName: 'Palette',
    skills: ['Tailwind CSS', 'Bootstrap', 'Responsive Design'],
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Architecture & APIs',
    iconName: 'Cpu',
    skills: ['Component-Based Architecture', 'REST APIs'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Development Tools',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'NPM', 'Vite', 'Jenkins', 'OpenShift', 'Jira', 'Vercel'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Analytics & Accessibility',
    iconName: 'ShieldCheck',
    skills: ['Adobe Analytics', 'Contentsquare', 'WCAG', 'ADA'],
    color: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'AI-Assisted Development',
    iconName: 'Sparkles',
    skills: ['GitHub Copilot', 'Claude', 'ChatGPT', 'Gemini', 'Google AI Studio', 'NotebookLM'],
    color: 'from-violet-500 to-purple-600',
  },
];

export const EDUCATION: Education = {
  degree: 'B.Tech',
  institution: 'JNTU College of Engineering, Anantapur',
  year: '2018',
};
