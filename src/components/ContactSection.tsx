import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Check, MapPin, Phone, Download, FileText } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onDownloadResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onDownloadResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
      <div className="aurora-glass rounded-3xl p-6 sm:p-10 border border-white/80 shadow-xl relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-300/20 via-purple-200/10 to-transparent rounded-bl-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Contact Information
                </h2>
              </div>
              <p className="text-sm text-slate-600 font-normal">
                Feel free to reach out for opportunities or collaboration.
              </p>
            </div>

            {/* Direct Links List */}
            <div className="space-y-3">
              {/* Phone Card */}
              <motion.div
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-center gap-3 text-slate-800 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Phone</div>
                  <div className="text-xs sm:text-sm font-bold">{PERSONAL_INFO.phone}</div>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-indigo-300 transition-all flex items-center justify-between group shadow-2xs hover:shadow-xs"
              >
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 text-slate-800 hover:text-indigo-600 transition-colors min-w-0"
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email</div>
                    <div className="text-xs sm:text-sm font-bold truncate">{PERSONAL_INFO.email}</div>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </motion.div>

              {/* LinkedIn Card */}
              <motion.a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-indigo-300 transition-all flex items-center justify-between group shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center gap-3 text-slate-800 group-hover:text-indigo-600 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">LinkedIn</div>
                    <div className="text-xs sm:text-sm font-bold">{PERSONAL_INFO.linkedinHandle}</div>
                  </div>
                </div>
              </motion.a>

              {/* GitHub Card */}
              <motion.a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-indigo-300 transition-all flex items-center justify-between group shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center gap-3 text-slate-800 group-hover:text-indigo-600 transition-colors">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-900 shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">GitHub</div>
                    <div className="text-xs sm:text-sm font-bold">{PERSONAL_INFO.githubHandle}</div>
                  </div>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-center gap-3 text-slate-700 shadow-2xs"
              >
                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-xs sm:text-sm font-bold">{PERSONAL_INFO.location}</div>
                </div>
              </motion.div>

              {/* Resume Download Card */}
              {onDownloadResume && (
                <motion.button
                  type="button"
                  onClick={onDownloadResume}
                  variants={cardVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border border-indigo-500/30 flex items-center justify-between group shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/20 text-white shrink-0 backdrop-blur-sm">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-indigo-100 uppercase tracking-wider">Verified Resume</div>
                      <div className="text-xs sm:text-sm font-extrabold text-white">Download Resume PDF</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 text-white transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                </motion.button>
              )}
            </div>
          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/90 border border-slate-200/90 shadow-md">
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                Send Sri Hari Mada a Direct Message
              </h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h4 className="font-extrabold text-emerald-900 text-base">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-700">
                      Thank you for reaching out. Sri Hari Mada will respond to your inquiry shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Smith"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1">Your Email</label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Frontend Engineer Opportunity"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Sri Hari, I saw your portfolio and would like to discuss..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};
