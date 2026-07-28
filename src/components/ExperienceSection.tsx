import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, ChevronRight, CheckCircle, X, MapPin, ArrowDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';
import { Experience } from '../types';

interface TimelineNode {
  id: string;
  year: string;
  company: string;
  role: string;
  duration: string;
  isCurrent?: boolean;
  impactSummary: string;
  technologies: string[];
  experienceRef?: Experience;
}

export const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedExperience(null);
      }
    };
    if (selectedExperience) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedExperience]);

  const encoreExp = EXPERIENCES.find((e) => e.id === 'encore') || EXPERIENCES[1];
  const virtusaExp = EXPERIENCES.find((e) => e.id === 'virtusa') || EXPERIENCES[0];

  // 2-Stage Career Timeline Nodes
  const timelineNodes: TimelineNode[] = [
    {
      id: '2022-encore',
      year: '2022 – 2024',
      company: 'Encore IT Services Pvt. Ltd.',
      role: 'Frontend React Developer',
      duration: 'November 2022 – May 2024',
      impactSummary:
        'Engineered reusable React components, configurable reporting dashboards, and operational workflow modules for Span Alaska Matson logistics platform.',
      technologies: ['React.js', 'JavaScript ES6+', 'React Hooks', 'Context API', 'HTML5', 'CSS3', 'Bootstrap', 'REST APIs'],
      experienceRef: encoreExp,
    },
    {
      id: '2024-virtusa',
      year: '2024 – Present',
      company: 'Virtusa Consulting Services Pvt. Ltd.',
      role: 'Software Engineer – Frontend',
      duration: 'August 2024 – Present',
      isCurrent: true,
      impactSummary:
        'Building scalable, accessible, and high-performance React and TypeScript applications for enterprise banking. Focused on reusable component architecture, WCAG-compliant accessibility, REST API integration, release coordination, and delivering maintainable frontend solutions in Agile environments.',
      technologies: ['React.js', 'TypeScript', 'Component Architecture', 'WCAG / ADA', 'REST APIs', 'Performance Optimization'],
      experienceRef: virtusaExp,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <motion.section
        id="experience"
        className="h-fit"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="purple-interactive-card rounded-3xl p-6 sm:p-8 h-fit shadow-lg">
          <div>
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-purple-200/60 dark:border-purple-900/50">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200/50 dark:border-purple-800/50 shadow-xs">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Career Timeline
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Enterprise Frontend Engineering Milestones
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedExperience(virtusaExp)}
                className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-purple-700 dark:text-indigo-400 dark:hover:text-purple-300 flex items-center gap-1 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-lg px-2 py-1"
              >
                <span>Full Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Premium Career Timeline Container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="relative pl-6 sm:pl-10 space-y-2 before:absolute before:left-2 sm:before:left-3.5 before:top-4 before:bottom-6 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500 before:to-emerald-500 before:rounded-full before:shadow-[0_0_10px_rgba(168,85,247,0.3)]"
            >
              {timelineNodes.map((node, index) => (
                <React.Fragment key={node.id}>
                  <motion.div variants={itemVariants} className="relative group/card">
                    {/* Glowing Node Circle Indicator */}
                    <div className="absolute -left-[1.85rem] sm:-left-[2.85rem] top-6 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-purple-500 dark:border-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.6)] flex items-center justify-center z-10 group-hover/card:scale-125 transition-transform duration-300">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          node.isCurrent ? 'bg-emerald-500 animate-ping' : 'bg-purple-600'
                        }`}
                      />
                    </div>

                    {/* Premium Glass Timeline Card */}
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-purple-200/70 dark:border-purple-900/60 hover:border-purple-400/80 dark:hover:border-purple-500/80 shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden group/inner"
                    >
                      {/* Glass Overlay Light Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-emerald-500/5 opacity-0 group-hover/inner:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* Timeline Card Header: Year Pill & Duration */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{node.year}</span>
                        </span>

                        <div className="flex flex-wrap items-center gap-2">
                          {node.duration && (
                            <div className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                              <Calendar className="w-3 h-3 text-indigo-500" />
                              <span>{node.duration}</span>
                            </div>
                          )}
                          {node.isCurrent && (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1 shadow-2xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                              <span>Current</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Role & Company */}
                      <div className="mb-3.5 space-y-1">
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight group-hover/inner:text-purple-700 dark:group-hover/inner:text-purple-300 transition-colors">
                          {node.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-400">
                          {node.company}
                        </p>
                      </div>

                      {/* Impact Summary */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-medium">
                        {node.impactSummary}
                      </p>

                      {/* Technologies Badges */}
                      <div className="mt-5 space-y-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          CORE TECHNOLOGIES
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {node.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60 shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button for Full Responsibilities Modal */}
                      {node.experienceRef && (
                        <div className="mt-4 pt-3 border-t border-purple-100/80 dark:border-purple-900/40 flex justify-end">
                          <button
                            type="button"
                            onClick={() => setSelectedExperience(node.experienceRef!)}
                            className="text-xs font-bold text-indigo-600 hover:text-purple-700 dark:text-indigo-400 dark:hover:text-purple-300 flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <span>View Experience Details</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Downward Arrow Indicator Between Timeline Nodes (↓) */}
                  {index < timelineNodes.length - 1 && (
                    <div className="py-2.5 flex items-center justify-start pl-2 sm:pl-4">
                      <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-300 flex items-center justify-center font-black text-xs shadow-xs animate-bounce">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Detail Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exp-modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedExperience(null);
            }}
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl aurora-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-white max-h-[90vh] overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                aria-label="Close details modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-6 space-y-1">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${selectedExperience.tagColor}`}>
                  {selectedExperience.domain}
                </span>
                <h3 id="exp-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {selectedExperience.role}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-700">
                  {selectedExperience.company}
                </p>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{selectedExperience.location}</span> • <span>{selectedExperience.period}</span>
                </p>
                <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-100 mt-2 text-xs font-bold text-indigo-900">
                  Project: {selectedExperience.project}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  <span>Responsibilities</span>
                </h4>

                <div className="space-y-2.5">
                  {selectedExperience.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-slate-200/80">
                  <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="px-5 py-2.5 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
