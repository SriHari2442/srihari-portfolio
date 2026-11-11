import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Layers,
  FileCode,
  Network,
  Palette,
  Cloud,
  Wrench,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Check,
  Star,
  Cpu,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CORE_PRIORITY_SKILLS = new Set([
  'React.js',
  'TypeScript',
  'JavaScript',
  'JavaScript (ES6+)',
  'Python',
  'FastAPI',
  'SQL',
]);

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const shouldReduceMotion = useReducedMotion();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'FileCode':
        return <FileCode className="w-4 h-4" />;
      case 'Network':
        return <Network className="w-4 h-4" />;
      case 'Palette':
        return <Palette className="w-4 h-4" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const filteredCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="skills"
      className="py-6"
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="purple-interactive-card rounded-3xl p-6 sm:p-8 shadow-lg">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 group-hover:scale-110 transition-transform duration-300">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Technical Skills & Architecture
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Comprehensive full-stack capabilities across frontend, backend, databases, and enterprise tooling
              </p>
            </div>
          </div>
        </div>

        {/* Featured Core Identity Banner */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-950 text-white border border-purple-500/30 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3.5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-black tracking-widest uppercase text-purple-300">
                  Core Technical Identity
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
                React.js • TypeScript • JavaScript • Python • FastAPI • SQL
              </h3>
              <p className="text-xs text-purple-200/80 font-medium mt-0.5">
                Frontend Architecture Excellence complemented by Hands-on Backend Workflows
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {['React.js', 'TypeScript', 'JavaScript', 'Python', 'FastAPI', 'SQL'].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-black tracking-wide bg-gradient-to-r from-purple-600/30 to-indigo-600/30 hover:from-purple-600/50 hover:to-indigo-600/50 border border-purple-400/40 text-purple-100 backdrop-blur-md shadow-xs transition-all cursor-default"
                >
                  <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setActiveCategory('All')}
              aria-pressed={activeCategory === 'All'}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer relative focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                activeCategory === 'All'
                  ? 'primary-btn-glow text-white shadow-md shadow-indigo-500/20'
                  : 'secondary-btn-purple bg-white/80 text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All Categories ({SKILL_CATEGORIES.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                aria-pressed={activeCategory === cat.title}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer relative focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                  activeCategory === cat.title
                    ? 'primary-btn-glow text-white shadow-md shadow-indigo-500/20'
                    : 'secondary-btn-purple bg-white/80 text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.01 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group/cat purple-interactive-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-xl border border-purple-200/70"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-purple-200/50">
                    <div
                      className={`p-2 rounded-xl bg-gradient-to-tr ${category.color} text-white shadow-xs group-hover/cat:scale-110 group-hover/cat:rotate-3 transition-transform duration-300`}
                    >
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 group-hover/cat:text-purple-900 transition-colors duration-300 text-sm leading-tight">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400">
                        {category.skills.length} skills
                      </span>
                    </div>
                  </div>

                  {/* Skill Pills */}
                  <div className="space-y-1.5">
                    {category.skills.map((skill) => {
                      const isPriority = CORE_PRIORITY_SKILLS.has(skill);
                      return (
                        <motion.div
                          key={skill}
                          whileHover={shouldReduceMotion ? {} : { x: 3, scale: 1.01 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className={`px-3 py-2 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-between gap-2 shadow-2xs transition-all duration-200 cursor-default select-none group/pill ${
                            isPriority
                              ? 'bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 text-indigo-950 border-purple-300/90 shadow-[0_0_12px_rgba(168,85,247,0.2)]'
                              : 'bg-white/90 text-slate-800 border-purple-100 hover:border-purple-300 hover:bg-slate-50'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 transition-all ${
                                isPriority
                                  ? 'bg-purple-600 shadow-[0_0_6px_rgba(168,85,247,0.9)]'
                                  : 'bg-indigo-400 group-hover/pill:bg-purple-500'
                              }`}
                            />
                            <span className="truncate group-hover/pill:text-purple-950 transition-colors">
                              {skill}
                            </span>
                          </span>

                          <div className="flex items-center gap-1 shrink-0">
                            {isPriority && (
                              <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-purple-600 text-white shadow-2xs">
                                Core
                              </span>
                            )}
                            <Check
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isPriority
                                  ? 'text-purple-700'
                                  : 'text-purple-500 opacity-60 group-hover/pill:opacity-100'
                              }`}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
