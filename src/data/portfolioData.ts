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
  role: 'Senior Software Engineer | Frontend Developer',
  designation: 'Senior Software Engineer',
  location: 'Hyderabad, India',
  phone: '+91 9014628432',
  email: 'srihari24software@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sri-hari-mada-6091a0411/',
  github: 'https://github.com/SriHari2442',
  linkedinHandle: 'sri-hari-mada-6091a0411',
  githubHandle: 'SriHari2442',
  heroDescription:
    'Senior Software Engineer with 4 years of experience in frontend application development, specializing in React.js, TypeScript, JavaScript, Angular, and building enterprise-grade, accessible, and high-performance web applications.',
  professionalSummary:
    'Senior Software Engineer with 4 years of experience in frontend application development, specializing in React.js, TypeScript, JavaScript, and Angular. Proven expertise in building scalable enterprise applications, reusable UI component systems, responsive designs, and WCAG/ADA accessibility standards. Skilled across state management with Redux Toolkit and Context API, REST API integrations, Figma to React implementation, and frontend performance optimization to deliver seamless, production-grade user experiences.',
};

export const STATS: Stat[] = [
  {
    id: 'exp',
    value: '4',
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
      'Developed and maintained logistics web applications using React.js and modern JavaScript.',
      'Built reusable frontend UI components ensuring cross-browser responsiveness.',
      'Integrated REST APIs and handled asynchronous state with Context API.',
      'Improved application usability, mobile responsiveness, and overall runtime performance.',
      'Collaborated actively with developers, QA engineers, and business stakeholders in Agile sprints.',
      'Participated in regular code reviews, fixed production defects, and rolled out enhancements.',
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
    role: 'Senior Software Engineer',
    company: 'Virtusa Consulting Services Pvt Ltd',
    location: 'Hyderabad, India',
    project: 'Huntington Bank',
    domain: 'Enterprise Banking',
    tag: 'Enterprise Banking',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
    companyLogoText: 'VIRTUSA',
    companyLogoBg: 'bg-blue-900 text-white font-black tracking-tighter',
    companyLogoColor: 'text-blue-600',
    responsibilities: [
      'Architected and engineered enterprise banking frontend applications using React.js, TypeScript, and modern frontend technologies.',
      'Led frontend development across critical modules including Manage Alerts, Alert History, Messages, Positive Pay, and Navigation.',
      'Built and maintained highly scalable, reusable UI components using Material UI, Honeycomb design system, and Tailwind CSS.',
      'Integrated robust REST APIs with client-side state management using Redux Toolkit and Context API.',
      'Implemented rigorous WCAG 2.1 AA and ADA accessibility compliance standards across responsive user interfaces.',
      'Conducted frontend performance optimization, eliminating unnecessary re-renders and reducing initial bundle footprint.',
      'Integrated enterprise monitoring and analytics via Adobe Analytics, Contentsquare, and Dynatrace.',
      'Collaborated seamlessly with QA, Business Analysts, onshore teams, and architects for Agile release cycles.',
      'Executed production release processes including Change Requests (CRs), C-Tasks, deployment validation, and GCP verification.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'Angular',
      'Material UI',
      'Tailwind CSS',
      'Redux Toolkit',
      'Context API',
      'REST APIs',
      'WCAG / ADA',
      'Figma to React',
      'Performance Optimization',
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
    title: 'Frontend Core',
    iconName: 'Layout',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'Angular', 'HTML5', 'CSS3'],
    color: 'from-purple-600 to-indigo-600',
  },
  {
    title: 'UI & Styling',
    iconName: 'Palette',
    skills: ['Material UI', 'Tailwind CSS', 'Responsive UI development', 'Figma to React implementation'],
    color: 'from-indigo-600 to-purple-600',
  },
  {
    title: 'State & APIs',
    iconName: 'Cpu',
    skills: ['Redux Toolkit', 'Context API', 'REST APIs', 'Performance optimization'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Quality & Delivery',
    iconName: 'ShieldCheck',
    skills: ['Accessibility and WCAG/ADA', 'Reusable UI Components', 'Git & GitHub', 'Vite & Build Tools'],
    color: 'from-pink-600 to-violet-600',
  },
];

export const EDUCATION: Education = {
  degree: 'B.Tech',
  institution: 'JNTU College of Engineering, Anantapur',
  year: '2018',
};
