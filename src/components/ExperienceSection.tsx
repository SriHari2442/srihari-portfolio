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
  const [isFullDetailsOpen, setIsFullDetailsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullDetailsOpen(false);
      }
    };
    if (isFullDetailsOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullDetailsOpen]);

  const encoreExp = EXPERIENCES.find((e) => e.id === 'encore') || EXPERIENCES[0];
  const virtusaExp = EXPERIENCES.find((e) => e.id === 'virtusa') || EXPERIENCES[1];

  // Chronological order: 1. Encore IT Services -> 2. Virtusa Consulting Services
  const chronologicalExperiences = [encoreExp, virtusaExp];

  // 2-Stage Career Timeline Nodes for Card Preview
  const timelineNodes: TimelineNode[] = [
    {
      id: '2022-encore',
      year: '2022 – 2024',
      company: 'Encore IT Services Pvt. Ltd.',
      role: 'Frontend Developer',
      duration: 'November 2022 – April 2024',
      impactSummary:
        'Developed and maintained logistics web applications using React.js for Span Alaska / Matson Logistics.',
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
        'Developed enterprise banking applications for Huntington Bank using React.js and TypeScript across Manage Alerts, Alert History, Messages, Positive Pay, and Navigation modules.',
      technologies: ['React.js', 'TypeScript', 'Honeycomb UI', 'Material UI', 'REST APIs', 'WCAG / ADA', 'Adobe Analytics', 'Contentsquare'],
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
                onClick={() => setIsFullDetailsOpen(true)}
                className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-purple-700 dark:text-indigo-400 dark:hover:text-purple-300 flex items-center gap-1 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-lg px-2 py-1"
                aria-label="View full career details"
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
                      <div className="mt-4 pt-3 border-t border-purple-100/80 dark:border-purple-900/40 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setIsFullDetailsOpen(true)}
                          className="text-xs font-bold text-indigo-600 hover:text-purple-700 dark:text-indigo-400 dark:hover:text-purple-300 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>View Experience Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
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

      {/* Complete Career Timeline & Experience Detail Modal */}
      <AnimatePresence>
        {isFullDetailsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0f172a]/60 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="career-modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsFullDetailsOpen(false);
            }}
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-3xl aurora-glass-modal rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 shadow-2xl border border-white/75 dark:border-slate-700/80 max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-purple-200/60 dark:border-purple-900/50 mb-4 shrink-0 pr-8">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200/50 dark:border-purple-800/50 shadow-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="career-modal-title" className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      Full Professional Experience
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Chronological career history & enterprise engineering responsibilities
                    </p>
                  </div>
                </div>
              </div>

              {/* Top-Right Close Button */}
              <button
                onClick={() => setIsFullDetailsOpen(false)}
                className="absolute top-5 right-5 p-2.5 rounded-full modal-close-btn cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
                aria-label="Close career timeline modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Timeline Body */}
              <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 space-y-8 my-2">
                <div className="relative pl-6 sm:pl-8 before:absolute before:left-2 sm:before:left-3 before:top-4 before:bottom-6 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500 before:to-emerald-500 before:rounded-full">
                  {chronologicalExperiences.map((exp, idx) => {
                    const isCurrent = exp.id === 'virtusa';
                    return (
                      <React.Fragment key={exp.id}>
                        <div className="relative mb-8 group/modalNode">
                          {/* Timeline Node Point */}
                          <div className="absolute -left-[1.85rem] sm:-left-[2.35rem] top-5 -translate-y-1/2 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-purple-500 dark:border-purple-400 shadow-md flex items-center justify-center z-10">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                isCurrent ? 'bg-emerald-500 animate-ping' : 'bg-purple-600'
                              }`}
                            />
                          </div>

                          {/* Company Experience Card */}
                          <div className="p-5 sm:p-6 rounded-2xl aurora-glass-card shadow-sm hover:shadow-md transition-all">
                            {/* Company & Role Banner */}
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-3 border-b border-slate-200/60 dark:border-slate-800 pb-3">
                              <div>
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${exp.tagColor}`}>
                                    {exp.domain}
                                  </span>
                                  {isCurrent && (
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                      Current Role
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                                  {exp.role}
                                </h4>
                                <p className="text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-400 mt-0.5">
                                  {exp.company}
                                </p>
                              </div>

                              <div className="text-right">
                                <span className="inline-flex items-center gap-1 text-xs font-extrabold text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-200/80 dark:border-slate-700">
                                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                                  <span>{exp.period}</span>
                                </span>
                              </div>
                            </div>

                            {/* Location & Project details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-purple-50/70 dark:bg-purple-950/50 p-3.5 rounded-xl border border-purple-100/80 dark:border-purple-900/40">
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                                <span><strong>Location:</strong> {exp.location}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Briefcase className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                                <span><strong>Project:</strong> {exp.project}</span>
                              </div>
                            </div>

                            {/* Responsibilities */}
                            <div className="space-y-2 mb-4">
                              <h5 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                                Key Responsibilities:
                              </h5>
                              <div className="space-y-2">
                                {exp.responsibilities.map((resp, rIdx) => (
                                  <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Core Technologies */}
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
                                Core Technologies
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Chronological Arrow Down between roles */}
                        {idx < chronologicalExperiences.length - 1 && (
                          <div className="my-4 ml-2 sm:ml-4 flex items-center justify-start gap-2">
                            <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-300 flex items-center justify-center font-black text-xs shadow-xs animate-bounce">
                              <ArrowDown className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 tracking-wide uppercase">
                              Career Advancement
                            </span>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Footer Action */}
              <div className="pt-4 border-t border-purple-200/60 dark:border-purple-900/50 flex justify-end shrink-0">
                <button
                  onClick={() => setIsFullDetailsOpen(false)}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm modal-purple-btn cursor-pointer"
                >
                  Close Timeline
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
