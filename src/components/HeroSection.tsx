import React from 'react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { VideoPlayer } from './VideoPlayer';

interface HeroSectionProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onDownloadResume }) => {
  const shouldReduceMotion = useReducedMotion();

  const techBadges = [
    { name: 'React', bg: 'bg-sky-500/10 text-sky-700 border-sky-200/80' },
    { name: 'TypeScript', bg: 'bg-blue-500/10 text-blue-700 border-blue-200/80' },
    { name: 'Accessibility', bg: 'bg-emerald-500/10 text-emerald-700 border-emerald-200/80' },
    { name: 'Enterprise UI', bg: 'bg-purple-500/10 text-purple-700 border-purple-200/80' },
  ];

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const videoVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden min-h-[85vh] lg:min-h-[88vh] flex items-center">
      {/* Background Ambient Glowing Blobs with Soft Motion */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -12, 0],
                x: [0, 8, 0],
              }
        }
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        className="absolute top-12 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 14, 0],
                x: [0, -10, 0],
              }
        }
        transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut' }}
        className="absolute top-32 right-12 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-indigo-300/25 rounded-full blur-3xl pointer-events-none"
      />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Column (Left side on Desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8"
          >
            
            {/* 1. Header & Name Block */}
            <div className="order-1 space-y-3 sm:space-y-4 w-full">
              {/* Location Pill */}
              <motion.div variants={itemVariants} className="inline-block">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full aurora-glass border border-indigo-200/60 shadow-xs">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <div className="space-y-1.5 sm:space-y-2">
                <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                  Hi, I'm
                </motion.p>

                <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                    {PERSONAL_INFO.name}
                  </span>
                </motion.h1>

                <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {PERSONAL_INFO.role}
                </motion.h2>
              </div>
            </div>

            {/* 2. Mobile Video Player Placement */}
            <motion.div variants={videoVariants} className="order-2 w-full lg:hidden my-2">
              <VideoPlayer />
            </motion.div>

            {/* 3. Hero Description */}
            <motion.p variants={itemVariants} className="order-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.heroDescription}
            </motion.p>

            {/* 4. Action CTA Buttons with Motion */}
            <motion.div variants={itemVariants} className="order-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto pt-1">
              <motion.a
                href="#projects"
                whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                className="group/work inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white primary-btn-glow shadow-lg shadow-indigo-500/30 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover/work:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={onDownloadResume}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                className="group/res inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-800 secondary-btn-purple border border-slate-200/90 shadow-sm transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                title="Download Sri Hari Mada Resume PDF"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-indigo-600 group-hover/res:text-purple-700 transition-colors" />
              </motion.button>
            </motion.div>

            {/* 5. Technology Badges */}
            <motion.div variants={itemVariants} className="order-5 pt-2 w-full">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {techBadges.map((badge) => (
                  <motion.div
                    key={badge.name}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -2 }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border backdrop-blur-sm transition-all shadow-2xs cursor-default ${badge.bg}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current opacity-70" />
                    <span>{badge.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Hero Column for Desktop Layout (AI Avatar Video) with Entrance Motion */}
          <motion.div
            variants={videoVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex lg:col-span-5 justify-center items-center"
          >
            <VideoPlayer />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
