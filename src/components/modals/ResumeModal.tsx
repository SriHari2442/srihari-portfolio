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
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 max-h-[92vh] overflow-y-auto print:max-h-none print:p-0 print:shadow-none print:border-none">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold text-slate-500">Verified Resume Document</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              title="Print Resume"
              aria-label="Print resume"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-6 text-slate-800 font-sans">
          {/* Header */}
          <div className="border-b border-slate-200 pb-4">
            <h2 id="resume-modal-title" className="text-3xl font-black text-slate-900 tracking-tight">{PERSONAL_INFO.name}</h2>
            <p className="text-base font-bold text-indigo-600 mt-0.5">{PERSONAL_INFO.role}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 mt-2">
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>📞 {PERSONAL_INFO.phone}</span>
              <span>✉️ {PERSONAL_INFO.email}</span>
              <span>💼 {PERSONAL_INFO.linkedinHandle}</span>
              <span>🐙 {PERSONAL_INFO.githubHandle}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.professionalSummary}
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {exp.company} — <span className="text-indigo-600">{exp.role}</span>
                    </h3>
                    <span className="text-xs font-bold text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-600">
                    Location: {exp.location} | Project: {exp.project} ({exp.domain})
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 leading-relaxed pt-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] text-slate-500 font-medium pt-1">
                    <strong>Technologies:</strong> {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Project */}
          <div>
            <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
              Featured Project
            </h2>
            <div className="text-xs space-y-1">
              <div className="font-bold text-slate-900 text-sm">
                {FEATURED_PROJECT.name} — <span className="text-indigo-600">{FEATURED_PROJECT.subtitle}</span> ({FEATURED_PROJECT.type})
              </div>
              <p className="text-slate-700">{FEATURED_PROJECT.description}</p>
              <div className="text-slate-600">
                <strong>Technologies:</strong> {FEATURED_PROJECT.technologies.join(', ')}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <strong className="text-slate-900">{cat.title}: </strong>
                  <span className="text-slate-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-1 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="text-xs text-slate-800">
              <strong className="text-slate-900">{EDUCATION.degree}</strong> — {EDUCATION.institution} ({EDUCATION.year})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
