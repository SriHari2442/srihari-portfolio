import React, { useEffect, useState, useRef } from 'react';
import { UserCheck, Briefcase, ShieldCheck, Code2 } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { STATS } from '../data/portfolioData';

// Animated Count Up component
const CountUpValue: React.FC<{ valueStr: string }> = ({ valueStr }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();

  // Extract number and suffix (e.g., "3+" -> num 3, suffix "+"; "100%" -> num 100, suffix "%")
  const match = valueStr.match(/^(\d+)(.*)$/);
  const targetNum = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : valueStr;

  const [currentNum, setCurrentNum] = useState(targetNum === null || shouldReduceMotion ? (targetNum ?? 0) : 0);

  useEffect(() => {
    if (!isInView || targetNum === null || shouldReduceMotion) return;

    let start = 0;
    const duration = 1200; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = targetNum / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setCurrentNum(targetNum);
        clearInterval(timer);
      } else {
        setCurrentNum(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNum, shouldReduceMotion]);

  if (targetNum === null) {
    return <span ref={ref}>{valueStr}</span>;
  }

  return (
    <span ref={ref}>
      {currentNum}
      {suffix}
    </span>
  );
};

export const StatsRow: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
              className="aurora-glass-interactive rounded-2xl p-4 sm:p-6 flex items-center gap-3.5 sm:gap-5 cursor-default shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Icon Badge */}
              <div
                className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${stat.badgeBg}`}
              >
                {getIcon(stat.iconName)}
              </div>

              {/* Metric Text */}
              <div className="min-w-0">
                <div className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tight ${stat.textColor}`}>
                  <CountUpValue valueStr={stat.value} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 truncate">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
