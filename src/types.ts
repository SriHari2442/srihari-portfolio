export interface Stat {
  id: string;
  value: string;
  label: string;
  iconName: string;
  badgeBg: string;
  textColor: string;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  project: string;
  domain: string;
  tag: string;
  tagColor: string;
  responsibilities: string[];
  technologies: string[];
  companyLogoText: string;
  companyLogoBg: string;
  companyLogoColor: string;
}

export interface FeaturedProject {
  name: string;
  subtitle: string;
  type: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface ProductConcept {
  name: string;
  type: string;
  description: string;
  featuresExplored: string[];
  tools: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}
