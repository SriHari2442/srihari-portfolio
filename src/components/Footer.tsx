import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-200/80 bg-white/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
            SH
          </div>
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className="group/top inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 secondary-btn-purple border border-slate-200/80 cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover/top:-translate-y-0.5 transition-transform text-purple-600" />
        </button>
      </div>
    </footer>
  );
};
