import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, ChevronRight, CheckCircle, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';
import { Experience } from '../types';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <motion.section
        id="experience"
        className="py-6 h-full"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="aurora-glass rounded-3xl p-6 sm:p-8 h-full border border-white/80 shadow-lg flex flex-col justify-between">
          <div>
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Professional Experience
                </h2>
              </div>
              <button
                onClick={() => setSelectedExperience(EXPERIENCES[0])}
                className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-lg px-2 py-1"
              >
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Timeline Vertical Stack */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-indigo-100"
            >
              {EXPERIENCES.map((exp) => (
                <motion.div key={exp.id} variants={itemVariants} className="relative group">
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[1.85rem] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 group-hover:scale-125 transition-transform" />

                  <motion.button
                    type="button"
                    onClick={() => setSelectedExperience(exp)}
                    whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/80 hover:border-indigo-200 transition-colors cursor-pointer shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                    aria-label={`View experience details for ${exp.role} at ${exp.company}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      {/* Company & Role */}
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-indigo-600 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-xs text-slate-500 font-semibold">{exp.company}</p>
                      </div>

                      {/* Tag & Date */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${exp.tagColor}`}>
                          {exp.tag}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-indigo-700 mb-1">
                      Project: {exp.project}
                    </div>

                    {/* First responsibility summary */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {exp.responsibilities[0]}
                    </p>
                  </motion.button>
                </motion.div>
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
