import React, { useState, useEffect } from 'react';
import {
  Download,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  Award,
  Mail,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onDownloadResume, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Scroll handler for translucent header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: FolderGit2 },
    { label: 'Skills', href: '#skills', icon: Cpu },
    { label: 'Achievements', href: '#achievements', icon: Award },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-4 pb-2">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`aurora-glass rounded-2xl px-3.5 py-2 sm:px-6 sm:py-3 flex items-center justify-between transition-all duration-300 border ${
            scrolled ? 'shadow-xl border-white/90 bg-white/90 backdrop-blur-xl' : 'border-white/80'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group text-left focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none rounded-xl p-1"
            aria-label={`${PERSONAL_INFO.name} Portfolio Home`}
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm sm:text-lg shadow-md shadow-indigo-500/20 shrink-0"
            >
              SH
            </motion.div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight leading-none group-hover:text-indigo-600 transition-colors truncate">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide mt-0.5 truncate">
                {PERSONAL_INFO.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label.toLowerCase();
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group/nav px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-all relative focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-1 focus-visible:outline-none ${
                    isActive
                      ? 'text-purple-700 font-bold'
                      : 'text-slate-600 hover:text-purple-700 hover:bg-purple-50/60'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-purple-50/90 rounded-xl -z-10 border border-purple-200/80 shadow-2xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {/* Animated Purple Underline */}
                  <span className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`} />
                </a>
              );
            })}
          </div>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Resume Button */}
            <motion.button
              onClick={onDownloadResume}
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white primary-btn-glow shadow-md shadow-indigo-500/25 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
              title="Download Sri Hari Mada Resume PDF"
            >
              <span>Download Resume</span>
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/80 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Frosted Glass Slide-Down Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-slate-950/40 backdrop-blur-sm pt-16 sm:pt-20 px-3 sm:px-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setMobileMenuOpen(false);
              }
            }}
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="max-w-md mx-auto aurora-glass rounded-3xl p-5 shadow-2xl border border-white/90 bg-white/95 backdrop-blur-2xl flex flex-col gap-3 mt-2"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold flex items-center justify-center text-xs shadow-xs">
                    SH
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm leading-tight">{PERSONAL_INFO.name}</div>
                    <div className="text-[11px] font-semibold text-indigo-600">{PERSONAL_INFO.role}</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links grid/list */}
              <div className="flex flex-col gap-1 py-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.label.toLowerCase();
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                        isActive
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 font-bold'
                          : 'text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-500'}`} />
                        <span>{link.label}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white/80' : 'text-slate-300'}`} />
                    </a>
                  );
                })}
              </div>

              {/* Resume CTA inside mobile dropdown */}
              <div className="pt-2 border-t border-slate-200/80 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onDownloadResume();
                  }}
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-indigo-500/25 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Preview Full Resume Document</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

