import React, { useState, useEffect } from 'react';
import {
  User,
  MapPin,
  Building2,
  CheckCircle2,
  ArrowRight,
  X,
  GraduationCap,
  Globe,
  Award,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  const highlights = [
    { label: PERSONAL_INFO.location, icon: MapPin },
    { label: 'Enterprise Banking & Logistics Domains', icon: Building2 },
    { label: `${EDUCATION.degree} – ${EDUCATION.institution} (${EDUCATION.year})`, icon: GraduationCap },
    { label: 'WCAG & ADA Compliance Focused', icon: CheckCircle2 },
  ];

  return (
    <>
      <motion.section
        id="about"
        className="h-fit"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="purple-interactive-card rounded-3xl p-6 sm:p-8 h-fit shadow-lg">
          {/* Title Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 group-hover:scale-110 transition-transform duration-300">
              <User className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              About Me
            </h2>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {PERSONAL_INFO.professionalSummary}
          </p>

          {/* Bullet Highlights Grid */}
          <div className="space-y-3">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={shouldReduceMotion ? {} : { x: 4 }}
                  transition={{ delay: idx * 0.08, duration: 0.3 }}
                  className="flex items-center gap-3 text-slate-700 hover:text-indigo-900 text-xs sm:text-sm font-medium transition-colors cursor-default group/item"
                >
                  <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-200 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="mt-7">
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white primary-btn-glow shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <span>View Full Summary</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Extended Summary Modal with AnimatePresence */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowModal(false);
            }}
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl aurora-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-white max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold flex items-center justify-center text-xl shadow-md">
                  SH
                </div>
                <div>
                  <h3 id="about-modal-title" className="text-2xl font-extrabold text-slate-900">{PERSONAL_INFO.name}</h3>
                  <p className="text-sm font-semibold text-indigo-600">{PERSONAL_INFO.role} • {PERSONAL_INFO.location}</p>
                </div>
              </div>

              {/* Detailed Summary */}
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>{PERSONAL_INFO.professionalSummary}</p>

                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-600" />
                    <span>Education</span>
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <span className="font-bold">{EDUCATION.degree}</span> — {EDUCATION.institution} ({EDUCATION.year})
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white/80">
                    <div className="font-semibold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-blue-600" /> Key Domains
                    </div>
                    <div className="text-xs text-slate-600">Enterprise Banking & Logistics</div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white/80">
                    <div className="font-semibold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-purple-600" /> Core Compliance
                    </div>
                    <div className="text-xs text-slate-600">WCAG & ADA Standards</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
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
