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
      <div className="aurora-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-lg">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600">
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
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer relative focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                activeCategory === 'All'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                  : 'bg-white/80 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              All
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                aria-pressed={activeCategory === cat.title}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer relative focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                  activeCategory === cat.title
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                    : 'bg-white/80 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
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
                whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                className="aurora-glass-interactive rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-white/90 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className={`p-2 rounded-xl bg-gradient-to-tr ${category.color} text-white shadow-xs`}>
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{category.title}</h3>
                  </div>

                  {/* Skill Pills */}
                  <div className="space-y-1.5">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={
                          shouldReduceMotion
                            ? {}
                            : { y: -2, x: 2, transition: { duration: 0.15 } }
                        }
                        className="p-2 rounded-xl bg-white/90 border border-slate-200/60 text-xs font-semibold text-slate-700 flex items-center justify-between group/skill hover:border-indigo-300 hover:shadow-2xs transition-colors cursor-default"
                      >
                        <span className="truncate">{skill}</span>
                        <Check className="w-3.5 h-3.5 text-indigo-500 opacity-0 group-hover/skill:opacity-100 transition-opacity" />
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
