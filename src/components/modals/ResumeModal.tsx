import React from 'react';
import { X, Download, Printer } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, FEATURED_PROJECT, PRODUCT_CONCEPT, SKILL_CATEGORIES, EDUCATION } from '../../data/portfolioData';
import { generateAndDownloadResumePDF } from '../../utils/resumeGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadResume?: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownloadResume }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (onDownloadResume) {
      onDownloadResume();
    } else {
      generateAndDownloadResumePDF();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 modal-backdrop animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-[calc(100vw-24px)] max-w-3xl aurora-glass-modal rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 shadow-2xl border border-white/90 dark:border-slate-700/80 max-h-[calc(100dvh-24px)] sm:max-h-[92vh] flex flex-col overflow-hidden print:max-h-none print:p-0 print:shadow-none print:border-none">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between pb-4 sm:pb-6 border-b border-purple-200/60 dark:border-purple-900/50 mb-4 sm:mb-6 shrink-0 gap-3 pr-2 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] dark:text-white">Verified Resume Document</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl modal-close-btn transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
              title="Print Resume"
              aria-label="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white primary-btn-glow shadow-md transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full modal-close-btn cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto overscroll-contain flex-1 pr-1 space-y-6">
          {/* Resume Content Paper */}
          <div className="p-5 sm:p-8 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-purple-200/80 dark:border-purple-900/40 shadow-xs space-y-6 text-[#334155] dark:text-slate-200 font-sans">
            {/* Header */}
            <div className="border-b border-purple-200/80 dark:border-purple-900/50 pb-4">
              <h2 id="resume-modal-title" className="text-2xl sm:text-3xl font-black text-[#0F172A] dark:text-white tracking-tight leading-tight">{PERSONAL_INFO.name}</h2>
              <p className="text-sm sm:text-base font-extrabold text-[#6D28D9] dark:text-purple-400 mt-0.5">{PERSONAL_INFO.role}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-[#64748B] dark:text-slate-300 mt-2.5">
                <span>📍 {PERSONAL_INFO.location}</span>
                <span>📞 {PERSONAL_INFO.phone}</span>
                <span>✉️ {PERSONAL_INFO.email}</span>
                <span>💼 <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#6D28D9] dark:hover:text-purple-300 transition-colors">{PERSONAL_INFO.linkedinHandle}</a></span>
                <span>🐙 <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#6D28D9] dark:hover:text-purple-300 transition-colors">{PERSONAL_INFO.githubHandle}</a></span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-extrabold text-[#0F172A] dark:text-white uppercase tracking-wider mb-2 border-b border-purple-200/80 dark:border-purple-900/50 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-[#334155] dark:text-slate-200 leading-[1.65] font-medium">
                {PERSONAL_INFO.professionalSummary}
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-extrabold text-[#0F172A] dark:text-white uppercase tracking-wider mb-3 border-b border-purple-200/80 dark:border-purple-900/50 pb-1">
                Professional Experience
              </h2>
              <div className="space-y-5">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex justify-between items-baseline flex-wrap gap-1">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] dark:text-white">
                        {exp.company} — <span className="text-[#6D28D9] dark:text-purple-400">{exp.role}</span>
                      </h3>
                      <span className="text-xs font-bold text-[#64748B] dark:text-slate-400">{exp.period}</span>
                    </div>
                    <div className="text-xs font-bold text-[#64748B] dark:text-slate-300">
                      Location: {exp.location} | Project: {exp.project} ({exp.domain})
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#334155] dark:text-slate-200 leading-relaxed font-medium pt-1">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                    <div className="text-[11px] sm:text-xs text-[#64748B] dark:text-slate-400 font-semibold pt-1">
                      <strong>Technologies:</strong> {exp.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Project */}
            <div>
              <h2 className="text-xs font-extrabold text-[#0F172A] dark:text-white uppercase tracking-wider mb-2 border-b border-purple-200/80 dark:border-purple-900/50 pb-1">
                Featured Project
              </h2>
              <div className="text-xs sm:text-sm space-y-1">
                <div className="font-extrabold text-[#0F172A] dark:text-white text-sm">
                  {FEATURED_PROJECT.name} — <span className="text-[#6D28D9] dark:text-purple-400">{FEATURED_PROJECT.subtitle}</span> ({FEATURED_PROJECT.type})
                </div>
                <p className="text-[#334155] dark:text-slate-200 font-medium leading-relaxed">{FEATURED_PROJECT.description}</p>
                <div className="text-xs text-[#64748B] dark:text-slate-400 font-semibold">
                  <strong>Technologies:</strong> {FEATURED_PROJECT.technologies.join(', ')}
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-extrabold text-[#0F172A] dark:text-white uppercase tracking-wider mb-2 border-b border-purple-200/80 dark:border-purple-900/50 pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title}>
                    <strong className="text-[#0F172A] dark:text-white font-extrabold">{cat.title}: </strong>
                    <span className="text-[#334155] dark:text-slate-200">{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-extrabold text-[#0F172A] dark:text-white uppercase tracking-wider mb-1 border-b border-purple-200/80 dark:border-purple-900/50 pb-1">
                Education
              </h2>
              <div className="text-xs sm:text-sm text-[#334155] dark:text-slate-200 font-medium">
                <strong className="text-[#0F172A] dark:text-white font-extrabold">{EDUCATION.degree}</strong> — {EDUCATION.institution} ({EDUCATION.year})
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
