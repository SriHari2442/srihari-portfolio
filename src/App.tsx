import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsRow } from './components/StatsRow';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FeaturedProjectSection } from './components/FeaturedProjectSection';
import { QuietModeSection } from './components/QuietModeSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/modals/ResumeModal';
import { Toast } from './components/Toast';
import { useResumeDownload } from './hooks/useResumeDownload';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { handleDownloadResume, toastMessage, clearToast } = useResumeDownload();

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={clearToast} />

      {/* Floating Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onDownloadResume={handleDownloadResume}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1 space-y-6 sm:space-y-10 pb-16 md:pb-8">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenResume={() => setResumeOpen(true)}
          onDownloadResume={handleDownloadResume}
        />

        {/* 2. Key Highlights Row */}
        <StatsRow />

        {/* 3. Professional Summary & Experience Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Professional Summary (6 Cols) */}
            <div className="lg:col-span-6">
              <AboutSection />
            </div>

            {/* Experience Timeline (6 Cols) */}
            <div className="lg:col-span-6">
              <ExperienceSection />
            </div>
          </div>

          {/* 4. Primary Featured Project Case Study (PG Adda Full-Width) */}
          <FeaturedProjectSection />

          {/* 5. Product Concept – Quiet Mode for WhatsApp */}
          <QuietModeSection />

          {/* 6. Technical Skills */}
          <SkillsSection />

          {/* 7. Contact Section */}
          <ContactSection onDownloadResume={handleDownloadResume} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal Drawer */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onDownloadResume={handleDownloadResume}
      />
    </div>
  );
}
