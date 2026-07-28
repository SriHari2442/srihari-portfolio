import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
  onDownloadResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onDownloadResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full mt-10 border-t border-purple-200/80 dark:border-purple-900/60 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 text-white backdrop-blur-xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-purple-500/10 via-indigo-500/15 to-pink-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10 space-y-6">
        {/* Top / Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-800 text-white font-black flex items-center justify-center text-sm shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/30 shrink-0">
              SH
            </div>
            <div>
              <h3 className="text-lg font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <span>{PERSONAL_INFO.name}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              </h3>
              <p className="text-xs font-bold text-purple-300">
                {PERSONAL_INFO.role}
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-bold text-slate-300">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-3 py-1.5 rounded-xl hover:bg-purple-900/50 hover:text-white border border-transparent hover:border-purple-500/40 transition-all cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={onOpenResume || onDownloadResume}
              className="px-3 py-1.5 rounded-xl hover:bg-purple-900/50 hover:text-white border border-transparent hover:border-purple-500/40 transition-all cursor-pointer flex items-center gap-1 text-purple-300"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl hover:bg-purple-900/50 hover:text-white border border-transparent hover:border-purple-500/40 transition-all cursor-pointer flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl hover:bg-purple-900/50 hover:text-white border border-transparent hover:border-purple-500/40 transition-all cursor-pointer flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-3 py-1.5 rounded-xl hover:bg-purple-900/50 hover:text-white border border-transparent hover:border-purple-500/40 transition-all cursor-pointer flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group/top inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-slate-900 hover:bg-purple-900/80 text-purple-300 hover:text-white border border-slate-800 hover:border-purple-500/60 shadow-md transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover/top:-translate-y-1 transition-transform text-purple-400" />
          </button>
        </div>

        {/* Small Message & Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-400 font-medium">
          <p className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>Designed and developed by Sri Hari Mada using React, TypeScript and AI-assisted development.</span>
          </p>

          <p className="text-slate-400 font-mono text-[11px] shrink-0">
            © 2026 Sri Hari Mada. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

