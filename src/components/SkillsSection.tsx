import React, { useState } from 'react';
import { Cpu, Layout, Palette, Layers, Wrench, ShieldCheck, Sparkles, Code2, Check } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const shouldReduceMotion = useReducedMotion();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'Palette':
        return <Palette className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
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
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
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
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Technical Skills
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setActiveCategory('All')}
              aria-pressed={activeCategory === 'All'}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer relative focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                activeCategory === 'All'
                  ? 'primary-btn-glow text-white shadow-md shadow-indigo-500/20'
                  : 'secondary-btn-purple bg-white/80 text-slate-700 border border-slate-200'
              }`}
            >
              All
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                aria-pressed={activeCategory === cat.title}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer relative focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                  activeCategory === cat.title
                    ? 'primary-btn-glow text-white shadow-md shadow-indigo-500/20'
                    : 'secondary-btn-purple bg-white/80 text-slate-700 border border-slate-200'
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filteredCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group/cat purple-interactive-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-xl"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className={`p-2 rounded-xl bg-gradient-to-tr ${category.color} text-white shadow-xs group-hover/cat:scale-110 group-hover/cat:rotate-3 transition-transform duration-300`}>
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover/cat:text-purple-900 transition-colors duration-300 text-sm">{category.title}</h3>
                  </div>

                  {/* Skill Pills */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={
                          shouldReduceMotion
                            ? {}
                            : { y: -3, scale: 1.03 }
                        }
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="px-3.5 py-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-800/80 hover:border-purple-400 dark:hover:border-purple-400 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center justify-between gap-2 shadow-xs hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-purple-500/20 hover:bg-gradient-to-r hover:from-purple-50/80 hover:to-indigo-50/80 dark:hover:from-purple-950/60 dark:hover:to-slate-900/90 transition-all duration-200 cursor-default select-none group/pill"
                      >
                        <span className="flex items-center gap-2 truncate">
                          <span className="w-2 h-2 rounded-full bg-purple-500 group-hover/pill:bg-purple-400 group-hover/pill:shadow-[0_0_8px_rgba(168,85,247,0.9)] transition-all shrink-0" />
                          <span className="truncate group-hover/pill:text-purple-950 dark:group-hover/pill:text-purple-200 transition-colors">{skill}</span>
                        </span>
                        <Check className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 opacity-60 group-hover/pill:opacity-100 group-hover/pill:scale-110 transition-all shrink-0" />
                      </motion.div>
                    ))}
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
