import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Download, Copy, Check, Sparkles, ArrowUpRight, Code2, Globe } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onDownloadResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onDownloadResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactCards = [
    {
      id: 'phone',
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      subtext: 'Direct Mobile & WhatsApp',
      icon: Phone,
      color: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      borderColor: 'border-emerald-500/30 dark:border-emerald-500/40',
      iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`,
      isExternal: false,
      action: () => window.open(`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`),
      actionText: 'Call Phone',
    },
    {
      id: 'email',
      label: 'Email',
      value: PERSONAL_INFO.email,
      subtext: 'Primary Business Contact',
      icon: Mail,
      color: 'from-blue-500/10 via-indigo-500/5 to-transparent',
      borderColor: 'border-blue-500/30 dark:border-blue-500/40',
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
      href: `mailto:${PERSONAL_INFO.email}`,
      isExternal: false,
      action: () => window.open(`mailto:${PERSONAL_INFO.email}`),
      actionText: 'Send Email',
      copyable: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: PERSONAL_INFO.linkedinHandle,
      subtext: 'linkedin.com/in/sri-hari-mada-6091a0411/',
      icon: Linkedin,
      color: 'from-indigo-500/10 via-purple-500/5 to-transparent',
      borderColor: 'border-indigo-500/30 dark:border-indigo-500/40',
      iconBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
      href: PERSONAL_INFO.linkedin,
      isExternal: true,
      action: () => window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer'),
      actionText: 'Connect',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: PERSONAL_INFO.githubHandle,
      subtext: 'github.com/SriHari2442',
      icon: Github,
      color: 'from-purple-500/10 via-pink-500/5 to-transparent',
      borderColor: 'border-purple-500/30 dark:border-purple-500/40',
      iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
      href: PERSONAL_INFO.github,
      isExternal: true,
      action: () => window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer'),
      actionText: 'Explore Code',
    },
    {
      id: 'location',
      label: 'Location',
      value: PERSONAL_INFO.location,
      subtext: 'Open to Remote & Hybrid Roles',
      icon: MapPin,
      color: 'from-pink-500/10 via-purple-500/5 to-transparent',
      borderColor: 'border-pink-500/30 dark:border-pink-500/40',
      iconBg: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
      action: () => {},
      actionText: 'Base City',
    },
  ];

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-6 sm:py-10"
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="aurora-glass rounded-3xl p-6 sm:p-10 border border-purple-200/80 dark:border-purple-900/60 shadow-xl relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/15 via-indigo-500/10 to-transparent rounded-bl-full pointer-events-none blur-2xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-transparent rounded-tr-full pointer-events-none blur-2xl" />

        <div className="relative z-10 space-y-8 sm:space-y-10">
          
          {/* Main Title Banner */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-950/60 border border-purple-300/60 dark:border-purple-700/60 text-purple-700 dark:text-purple-300 text-xs font-extrabold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Looking for an experienced Frontend Engineer specialized in React.js, TypeScript, enterprise architecture, and WCAG accessibility? Reach out directly via email, phone, or LinkedIn.
            </p>
          </div>

          {/* Quick Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            {/* Email Me Button */}
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              className="flex-1 min-w-[170px] max-w-[220px] px-5 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer border border-purple-400/40"
            >
              <Mail className="w-4 h-4 text-white shrink-0" />
              <span>Email Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-purple-200 shrink-0" />
            </motion.a>

            {/* Connect on LinkedIn Button */}
            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              className="flex-1 min-w-[170px] max-w-[220px] px-5 py-3.5 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center justify-center gap-2 transition-all cursor-pointer border border-slate-700"
            >
              <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </motion.a>

            {/* Download Resume Button */}
            {onDownloadResume && (
              <motion.button
                type="button"
                onClick={onDownloadResume}
                whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="flex-1 min-w-[170px] max-w-[220px] px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-purple-50 dark:hover:bg-slate-800 text-purple-900 dark:text-purple-300 font-extrabold text-xs sm:text-sm shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2 transition-all cursor-pointer border border-purple-300 dark:border-purple-800"
              >
                <Download className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Download Resume</span>
              </motion.button>
            )}
          </div>

          {/* Grid Layout: Modern Illustration Left + Animated Contact Cards Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Left: Modern Vector Illustration Card */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-5 relative group"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 text-white border border-purple-500/30 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center">
                {/* SVG Modern Illustration */}
                <div className="relative w-full max-w-[280px] h-[220px] sm:h-[240px] flex items-center justify-center my-2">
                  <svg
                    viewBox="0 0 300 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                  >
                    {/* Outer Glow Ring */}
                    <circle cx="150" cy="120" r="95" stroke="url(#purple-grad)" strokeWidth="1.5" strokeDasharray="6 6" className="animate-spin-slow opacity-60" />
                    
                    {/* Developer Screen Window */}
                    <rect x="50" y="45" width="200" height="130" rx="16" fill="#0F172A" stroke="#334155" strokeWidth="2" />
                    <rect x="50" y="45" width="200" height="28" rx="16" fill="#1E293B" />
                    
                    {/* Window Controls */}
                    <circle cx="68" cy="59" r="4" fill="#EF4444" />
                    <circle cx="80" cy="59" r="4" fill="#F59E0B" />
                    <circle cx="92" cy="59" r="4" fill="#10B981" />
                    
                    {/* Browser Address Bar */}
                    <rect x="110" y="53" width="125" height="12" rx="6" fill="#0F172A" />
                    
                    {/* Screen Content Graphics */}
                    {/* Code Lines */}
                    <rect x="70" y="88" width="80" height="6" rx="3" fill="#A855F7" />
                    <rect x="70" y="102" width="120" height="6" rx="3" fill="#3B82F6" />
                    <rect x="70" y="116" width="60" height="6" rx="3" fill="#10B981" />
                    <rect x="70" y="130" width="100" height="6" rx="3" fill="#6366F1" />
                    <rect x="70" y="144" width="70" height="6" rx="3" fill="#EC4899" />

                    {/* Floating Floating React/Tech Badge */}
                    <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                      <circle cx="215" cy="115" r="22" fill="#1E1B4B" stroke="#818CF8" strokeWidth="2" />
                      <text x="215" y="120" textAnchor="middle" fill="#A5B4FC" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                        &lt;/&gt;
                      </text>
                    </g>

                    {/* Floating Connectivity Nodes */}
                    <g className="animate-pulse">
                      <circle cx="45" cy="170" r="14" fill="#312E81" stroke="#A855F7" strokeWidth="2" />
                      <path d="M41 170L49 170M45 166L45 174" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" />
                    </g>

                    <g className="animate-pulse" style={{ animationDelay: '1s' }}>
                      <circle cx="255" cy="65" r="14" fill="#064E3B" stroke="#34D399" strokeWidth="2" />
                      <path d="M251 65L259 65" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
                    </g>

                    {/* Gradient Definitions */}
                    <defs>
                      <linearGradient id="purple-grad" x1="0" y1="0" x2="300" y2="240" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A855F7" />
                        <stop offset="0.5" stopColor="#6366F1" />
                        <stop offset="1" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Subtitle Badge */}
                <div className="space-y-1.5 mt-2">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-purple-300">
                    <Code2 className="w-4 h-4 text-purple-400" />
                    <span>Enterprise Frontend Excellence</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed max-w-xs">
                    React.js • TypeScript • WCAG Accessibility • Component Architecture
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: 5 Animated Contact Cards */}
            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-3"
            >
              {contactCards.map((card) => {
                const IconComponent = card.icon;
                const Component = card.href ? motion.a : motion.div;
                return (
                  <Component
                    key={card.id}
                    variants={cardVariants}
                    href={card.href}
                    target={card.isExternal ? '_blank' : undefined}
                    rel={card.isExternal ? 'noopener noreferrer' : undefined}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { y: -4, scale: 1.02 }
                    }
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    onClick={!card.href ? card.action : undefined}
                    className={`group/card p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-800/80 hover:border-purple-400 dark:hover:border-purple-400 shadow-sm hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-between gap-3 ${
                      card.id !== 'location' ? 'cursor-pointer' : 'cursor-default'
                    } relative overflow-hidden`}
                  >
                    {/* Background Subtle Gradient Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                    <div className="flex items-center gap-3.5 min-w-0 z-10">
                      <div className={`p-3 rounded-2xl ${card.iconBg} group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform duration-300 shrink-0 shadow-2xs`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {card.label}
                        </div>
                        <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white group-hover/card:text-purple-700 dark:group-hover/card:text-purple-300 transition-colors truncate">
                          {card.value}
                        </div>
                        {card.subtext && (
                          <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                            {card.subtext}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Card Action */}
                    <div className="flex items-center gap-2 shrink-0 z-10">
                      {card.copyable && (
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="p-2 rounded-xl text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-950 transition-colors cursor-pointer"
                          title="Copy Email"
                          aria-label="Copy Email Address"
                        >
                          {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      )}

                      {card.id !== 'location' && (
                        <span className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold flex items-center gap-1 group-hover/card:bg-purple-600 group-hover/card:text-white group-hover/card:border-purple-500 transition-all shadow-2xs">
                          <span>{card.actionText}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </Component>
                );
              })}
            </motion.div>

          </div>

        </div>
      </div>
    </motion.section>
  );
};

