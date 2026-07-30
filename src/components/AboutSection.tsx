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

  // Lock body scroll and close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 modal-backdrop"
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
              className="relative w-[calc(100vw-24px)] max-w-2xl aurora-glass-modal rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 shadow-2xl border border-white/90 dark:border-slate-700/80 max-h-[calc(100dvh-24px)] sm:max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 sm:top-5 right-4 sm:right-5 modal-close-btn cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none z-20"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Content Container */}
              <div className="overflow-y-auto overscroll-contain flex-1 pr-1 space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3 pr-14 pb-2 border-b border-purple-200/60 dark:border-purple-900/50">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-extrabold flex items-center justify-center text-xl shadow-md shrink-0">
                    SH
                  </div>
                  <div>
                    <h3 id="about-modal-title" className="text-xl sm:text-2xl font-black text-[#0F172A] dark:text-white leading-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#6D28D9] dark:text-purple-400 mt-0.5">
                      {PERSONAL_INFO.role} • {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                {/* Detailed Summary */}
                <div className="space-y-5 text-[#334155] dark:text-slate-200 text-[15px] sm:text-[16px] leading-[1.7] font-medium">
                  <p className="max-w-prose">{PERSONAL_INFO.professionalSummary}</p>

                  <div className="p-5 rounded-2xl aurora-glass-card space-y-2">
                    <h4 className="font-extrabold text-[#1E293B] dark:text-white text-base flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-[#6D28D9] dark:text-purple-400" />
                      <span>Education</span>
                    </h4>
                    <div className="text-xs sm:text-sm text-[#334155] dark:text-slate-200">
                      <span className="font-bold">{EDUCATION.degree}</span> — {EDUCATION.institution} ({EDUCATION.year})
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-4 rounded-2xl aurora-glass-card">
                      <div className="font-bold text-[#1E293B] dark:text-white text-xs mb-1 flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-[#6D28D9] dark:text-purple-400" /> Key Domains
                      </div>
                      <div className="text-xs font-semibold text-[#64748B] dark:text-slate-400">Enterprise Banking & Logistics</div>
                    </div>
                    <div className="p-4 rounded-2xl aurora-glass-card">
                      <div className="font-bold text-[#1E293B] dark:text-white text-xs mb-1 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-[#6D28D9] dark:text-purple-400" /> Core Compliance
                      </div>
                      <div className="text-xs font-semibold text-[#64748B] dark:text-slate-400">WCAG & ADA Standards</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-200/60 dark:border-purple-900/50 flex justify-end">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm modal-purple-btn cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
