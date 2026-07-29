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
  linkedin: 'https://www.linkedin.com/in/sri-hari-mada-6091a0411/',
  github: 'https://github.com/SriHari2442',
  linkedinHandle: 'sri-hari-mada-6091a0411',
  githubHandle: 'SriHari2442',
  heroDescription: 'I build scalable, responsive, accessible, and user-focused web applications using React.js and TypeScript.',
  professionalSummary:
    'Frontend Engineer with experience in enterprise web development using React.js and TypeScript. I specialize in building maintainable, high-performance, and accessible user interfaces for complex domain applications. By pairing solid component architecture with product thinking, I transform intricate requirements into clean, scalable frontend solutions and intuitive user experiences. My work spans engineering reusable component systems, optimizing state management, and ensuring seamless API integration. Driven by a passion for creating intuitive user experiences, I focus on WCAG compliance, code quality, and long-term maintainability to deliver software that balances technical excellence with real product impact.',
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
    id: 'encore',
    period: 'November 2022 – April 2024',
    role: 'Frontend Developer',
    company: 'Encore IT Services Pvt. Ltd.',
    location: 'Chennai, India',
    project: 'Span Alaska / Matson Logistics',
    domain: 'Logistics',
    tag: 'Logistics',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
    companyLogoText: 'ENCORE',
    companyLogoBg: 'bg-indigo-900 text-white font-bold tracking-tight',
    companyLogoColor: 'text-purple-600',
    responsibilities: [
      'Developed and maintained logistics web applications using React.js.',
      'Built reusable frontend components.',
      'Integrated REST APIs.',
      'Improved application usability, responsiveness and performance.',
      'Collaborated with developers, QA teams and business stakeholders.',
      'Participated in Agile ceremonies and feature delivery.',
      'Fixed production issues and delivered enhancements.',
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
  {
    id: 'virtusa',
    period: 'August 2024 – Present',
    role: 'Software Engineer – Frontend',
    company: 'Virtusa Consulting Services Pvt. Ltd.',
    location: 'Hyderabad, India',
    project: 'Huntington Bank',
    domain: 'Enterprise Banking',
    tag: 'Enterprise Banking',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
    companyLogoText: 'VIRTUSA',
    companyLogoBg: 'bg-blue-900 text-white font-black tracking-tighter',
    companyLogoColor: 'text-blue-600',
    responsibilities: [
      'Developed enterprise banking applications using React.js and TypeScript.',
      'Worked on Manage Alerts, Alert History, Messages, Positive Pay and Navigation modules.',
      'Built reusable UI components using Honeycomb and Material UI.',
      'Integrated REST APIs and implemented frontend validations.',
      'Implemented ADA/WCAG accessibility improvements.',
      'Worked with Adobe Analytics and Contentsquare.',
      'Coordinated with QA, Business Analysts, Onshore teams and Developers.',
      'Managed release activities including Change Requests, C-Tasks, deployment validation and GCP verification.',
      'Coordinated Dynatrace, performance testing and planned downtime activities during releases.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Honeycomb UI',
      'Material UI',
      'REST APIs',
      'WCAG / ADA',
      'Adobe Analytics',
      'Contentsquare',
      'Dynatrace',
      'GCP',
    ],
  },
];

export const FEATURED_PROJECT: FeaturedProject = {
  name: 'PG Adda',
  subtitle: 'Frontend Product Prototype for PG & Co-Living Discovery',
  type: 'Personal Project',
  description:
    'PG Adda is a responsive frontend product prototype designed to simplify the discovery experience through modern search, filtering, favourites, property exploration, and visit scheduling workflows.',
  challenge:
    'Finding PG accommodation is often frustrating because information is scattered across different platforms, many listings are outdated, and users spend significant time contacting multiple owners before finding a suitable place.',
  solution:
    'PG Adda is a responsive frontend product prototype designed to simplify the discovery experience through modern search, filtering, favourites, property exploration, and visit scheduling workflows.',
  keyContributions: [
    'Designed the complete user journey',
    'Built reusable React and TypeScript components',
    'Created responsive desktop and mobile layouts',
    'Implemented filtering and search experiences',
    'Designed enquiry and visit scheduling flows',
    'Focused on accessibility and intuitive UX',
  ],
  engineeringHighlights: [
    'Component-based architecture',
    'TypeScript-first development',
    'Responsive UI',
    'Accessible interactions',
    'Modern React patterns',
    'Product-first thinking',
  ],
  features: [
    'Location-based search',
    'Budget filters',
    'Amenity filters',
    'Tenant-category filters',
    'Sorting',
    'Favourites',
    'Detailed property views',
    'Call, WhatsApp, and email actions',
    'Site-visit date and time selection',
    'Confirmation feedback',
    'Responsive desktop and mobile layouts',
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
    title: 'Frontend',
    iconName: 'Layout',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    color: 'from-purple-600 to-indigo-600',
  },
  {
    title: 'Architecture',
    iconName: 'Cpu',
    skills: ['REST APIs', 'Component Architecture', 'Responsive Design', 'Accessibility'],
    color: 'from-indigo-600 to-purple-600',
  },
  {
    title: 'Development',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'Vite', 'Jenkins', 'OpenShift'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'AI',
    iconName: 'Sparkles',
    skills: ['Claude', 'ChatGPT', 'Gemini', 'Google AI Studio', 'NotebookLM'],
    color: 'from-pink-600 to-violet-600',
  },
];

export const EDUCATION: Education = {
  degree: 'B.Tech',
  institution: 'JNTU College of Engineering, Anantapur',
  year: '2018',
};
