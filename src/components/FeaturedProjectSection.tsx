import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle,
  ExternalLink,
  Search,
  MapPin,
  Star,
  Phone,
  MessageCircle,
  Mail,
  Calendar,
  X,
  ChevronRight,
  SlidersHorizontal,
  Heart,
  Eye,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FEATURED_PROJECT } from '../data/portfolioData';

export const FeaturedProjectSection: React.FC = () => {
  const [activeViewTab, setActiveViewTab] = useState<'listings' | 'filters' | 'details'>('listings');
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  const [selectedFilterLoc, setSelectedFilterLoc] = useState('Gachibowli');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSaved, setIsSaved] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Close case study modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowCaseStudyModal(false);
      }
    };
    if (showCaseStudyModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showCaseStudyModal]);

  // Realistic mock listings for PG Adda prototype
  const sampleProperties = [
    {
      id: 1,
      title: 'Stanza Living - Hyderabad Hub',
      location: 'Gachibowli, Hyderabad (Near Deloitte & Cyber Towers)',
      price: '₹9,500',
      period: '/month',
      type: 'Co-Living / Unisex',
      rating: 4.8,
      reviews: 124,
      tag: 'Verified • Best Seller',
      amenities: ['AC Room', 'High-Speed WiFi', '3 Meals Included', 'Gym & Gaming'],
      gradient: 'from-blue-600 via-indigo-700 to-slate-900',
    },
    {
      id: 2,
      title: 'Zolo Stay Elite Co-Living',
      location: 'HITECH City, Hyderabad (2 mins from Mindspace)',
      price: '₹12,000',
      period: '/month',
      type: 'Private Room / Men',
      rating: 4.9,
      reviews: 98,
      tag: 'Luxury Suite',
      amenities: ['Workstation', 'Power Backup', 'Daily Housekeeping', 'Security'],
      gradient: 'from-indigo-600 via-purple-700 to-slate-900',
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-8 sm:py-12 relative"
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background Ambient Glow with gentle floating motion */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 15, 0],
              }
        }
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
      />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-2 shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>Featured Project</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Primary Case Study: PG Adda
            </h2>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-300/80 text-amber-900 text-xs font-bold self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Frontend Product Prototype</span>
          </span>
        </div>

        {/* Master Case Study Container (Two-column layout on Desktop, Stacked on Mobile) */}
        <div className="purple-interactive-card rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden relative group/card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT / TOP COLUMN: Large Interactive PG Adda Screenshot & Mockup Frame */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Browser Window Mockup Frame with Subtle Hover Zoom & Purple Glow */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-purple-500/60 shadow-2xl group/mockup transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
              >
                {/* Soft Hover Overlay Tint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-indigo-900/0 to-pink-900/10 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
                
                {/* Browser Top Header */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-4">
                  {/* Window Controls */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>

                  {/* URL Bar */}
                  <div className="flex-1 max-w-sm px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center gap-2 text-slate-400 text-xs font-mono truncate">
                    <span className="text-emerald-400">https://</span>
                    <span className="text-slate-200">pg-adda-ruby.vercel.app</span>
                    <span className="text-slate-500">/hyderabad</span>
                  </div>

                  {/* Interactive View Tabs */}
                  <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setActiveViewTab('listings')}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none ${
                        activeViewTab === 'listings'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      aria-pressed={activeViewTab === 'listings'}
                    >
                      Listings
                    </button>
                    <button
                      onClick={() => setActiveViewTab('filters')}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none ${
                        activeViewTab === 'filters'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      aria-pressed={activeViewTab === 'filters'}
                    >
                      Filter View
                    </button>
                    <button
                      onClick={() => setActiveViewTab('details')}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none ${
                        activeViewTab === 'details'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      aria-pressed={activeViewTab === 'details'}
                    >
                      Detail Card
                    </button>
                  </div>
                </div>

                {/* Live Interactive Screenshot Viewport with Smooth Hover Zoom */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-900 overflow-hidden text-slate-100 p-4 sm:p-5">
                  
                  {/* VIEW 1: PROPERTY LISTINGS MOCKUP */}
                  {activeViewTab === 'listings' && (
                    <div className="h-full flex flex-col justify-between space-y-3">
                      {/* Search Bar Header */}
                      <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 flex flex-wrap items-center justify-between gap-2 shadow-lg">
                        <div className="flex items-center gap-2 flex-1 min-w-[180px]">
                          <Search className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span className="text-xs font-semibold text-slate-200 truncate">
                            Gachibowli, Hyderabad
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-medium">
                            ₹5,000 - ₹15,000
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                            AC & WiFi
                          </span>
                        </div>
                      </div>

                      {/* Listing Cards Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 overflow-hidden">
                        {sampleProperties.map((prop) => (
                          <div
                            key={prop.id}
                            className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/80 hover:border-indigo-500/60 transition-all flex flex-col justify-between group/prop shadow-md"
                          >
                            <div className="space-y-1.5">
                              {/* Card Image Banner */}
                              <div
                                className={`h-20 sm:h-24 rounded-lg bg-gradient-to-r ${prop.gradient} p-2.5 flex flex-col justify-between relative overflow-hidden`}
                              >
                                <div className="flex justify-between items-start z-10">
                                  <span className="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                                    {prop.tag}
                                  </span>
                                  <button
                                    onClick={() => setIsSaved(!isSaved)}
                                    className="p-1 rounded-full bg-slate-900/60 hover:bg-slate-900 text-rose-400 cursor-pointer"
                                  >
                                    <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                                  </button>
                                </div>

                                <div className="flex items-center justify-between z-10">
                                  <span className="text-[11px] font-bold text-white tracking-wide">
                                    {prop.type}
                                  </span>
                                  <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300">
                                    <Star className="w-3 h-3 fill-amber-300" />
                                    <span>{prop.rating}</span>
                                  </div>
                                </div>
                              </div>

                              <h4 className="text-xs font-bold text-white truncate group-hover/prop:text-indigo-300 transition-colors">
                                {prop.title}
                              </h4>
                              <p className="text-[10px] text-slate-400 flex items-center gap-1 truncate">
                                <MapPin className="w-3 h-3 text-indigo-400 shrink-0" />
                                <span>{prop.location}</span>
                              </p>

                              <div className="flex flex-wrap gap-1 pt-1">
                                {prop.amenities.slice(0, 3).map((a) => (
                                  <span
                                    key={a}
                                    className="px-1.5 py-0.5 rounded bg-slate-900 text-[9px] font-medium text-slate-300 border border-slate-700/60"
                                  >
                                    {a}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-700/60 mt-2">
                              <div>
                                <span className="text-xs font-black text-emerald-400">
                                  {prop.price}
                                </span>
                                <span className="text-[9px] text-slate-400">{prop.period}</span>
                              </div>
                              <button className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold transition-all cursor-pointer">
                                View Details
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* VIEW 2: FILTER & SEARCH INTERFACE */}
                  {activeViewTab === 'filters' && (
                    <div className="h-full flex flex-col justify-between space-y-3 p-1">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                            <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                            <span>Hyderabad Location & Budget Filters</span>
                          </h4>
                          <span className="text-[10px] text-indigo-400 font-bold">12 PG Options Found</span>
                        </div>

                        {/* Location Selectors */}
                        <div className="grid grid-cols-4 gap-1.5">
                          {['Gachibowli', 'HITECH City', 'Kondapur', 'Madhapur'].map((loc) => (
                            <button
                              key={loc}
                              onClick={() => setSelectedFilterLoc(loc)}
                              className={`py-1.5 px-2 rounded-lg text-[10px] font-bold text-center border transition-all cursor-pointer ${
                                selectedFilterLoc === loc
                                  ? 'bg-indigo-600 border-indigo-400 text-white'
                                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              {loc}
                            </button>
                          ))}
                        </div>

                        {/* Category Selector */}
                        <div className="grid grid-cols-3 gap-1.5 pt-1">
                          {['All Categories', 'Men PG', 'Women PG'].map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setSelectedCategory(cat)}
                              className={`py-1 px-2 rounded bg-slate-800 border border-slate-700 text-[10px] font-semibold text-center cursor-pointer ${
                                selectedCategory === cat ? 'text-indigo-400 border-indigo-500' : 'text-slate-400'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Selected Filters Box */}
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-indigo-500/30 space-y-2">
                        <div className="text-[11px] font-bold text-indigo-300">Active Search Criteria:</div>
                        <div className="flex flex-wrap gap-1.5 text-[10px]">
                          <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-200 border border-indigo-500/40">
                            Location: {selectedFilterLoc}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/40">
                            Category: {selectedCategory}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-200 border border-purple-500/40">
                            Amenities: 3 Meals + WiFi
                          </span>
                        </div>
                      </div>

                      <div className="text-center text-[10px] text-slate-400">
                        Interactive instant state updating without full page reloads.
                      </div>
                    </div>
                  )}

                  {/* VIEW 3: PROPERTY DETAIL & ENQUIRY */}
                  {activeViewTab === 'details' && (
                    <div className="h-full flex flex-col justify-between space-y-3 p-1">
                      <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                              Featured Property Detail
                            </span>
                            <h4 className="text-sm font-extrabold text-white">Stanza Living - Hyderabad Hub</h4>
                            <p className="text-[10px] text-slate-400">Gachibowli Financial District, Hyderabad</p>
                          </div>
                          <span className="text-xs font-black text-emerald-400">₹9,500/mo</span>
                        </div>

                        {/* Direct Communication Buttons */}
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          <button
                            onClick={() => {
                              setActionFeedback('Initiating Direct Call to PG Owner...');
                              setTimeout(() => setActionFeedback(null), 3000);
                            }}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-950 border border-slate-700 text-emerald-400 flex items-center justify-center gap-1 text-[10px] font-bold cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                          >
                            <Phone className="w-3 h-3" />
                            <span>Call Owner</span>
                          </button>
                          <button
                            onClick={() => {
                              setActionFeedback('Opening WhatsApp Chat with Manager...');
                              setTimeout(() => setActionFeedback(null), 3000);
                            }}
                            className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1 text-[10px] font-bold cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>WhatsApp</span>
                          </button>
                          <button
                            onClick={() => setEnquirySent(true)}
                            className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-1 text-[10px] font-bold cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                          >
                            <Mail className="w-3 h-3" />
                            <span>{enquirySent ? 'Enquiry Sent!' : 'Enquire'}</span>
                          </button>
                        </div>

                        {actionFeedback && (
                          <div aria-live="polite" className="p-2 rounded-lg bg-indigo-950 border border-indigo-500/50 text-[10px] font-bold text-indigo-200 text-center animate-in fade-in duration-200">
                            {actionFeedback}
                          </div>
                        )}
                      </div>

                      {/* Site Visit Schedule Bar */}
                      <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-500/40 text-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-indigo-400" />
                          <span className="font-semibold text-slate-200 text-[11px]">
                            Schedule Free Site Visit
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px]">
                          Select Date
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Caption badge overlay */}
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-slate-950/90 border border-slate-700/80 text-[10px] text-slate-300 font-semibold flex items-center gap-1">
                    <Eye className="w-3 h-3 text-indigo-400" />
                    <span>Interactive Prototype Canvas</span>
                  </div>

                </div>
              </motion.div>

              {/* Prototype Badge Note */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-300/60 text-amber-900 text-xs font-medium flex items-start gap-2.5">
                <span className="p-1 rounded-full bg-amber-500/20 text-amber-700 shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="font-bold">Frontend Product Prototype Statement:</strong> PG Adda is designed and developed independently by Sri Hari Mada to demonstrate scalable React component architecture, user-centric discovery filters, and responsive UI design.
                </div>
              </div>

            </div>

            {/* RIGHT / BOTTOM COLUMN: Detailed Case Study Info */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Header Labels */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                    <span>Product Case Study</span>
                    <span>•</span>
                    <span>Personal Project</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {FEATURED_PROJECT.name}
                  </h3>

                  <p className="text-sm font-bold text-indigo-700 mt-1">
                    Frontend Product Prototype
                  </p>
                </div>

                {/* Brief Product Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {FEATURED_PROJECT.description} Designed to eliminate accommodation search friction in major tech hubs like Hyderabad through instant filtering, rich room details, and direct manager communication.
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Key Features Implemented
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {FEATURED_PROJECT.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Chips */}
                <div className="pt-2 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Technologies & Stack
                  </h4>

                  <div className="flex flex-wrap gap-1.5">
                    {FEATURED_PROJECT.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.06, y: -1 }}
                        className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200/90 hover:border-indigo-300 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
                {/* 1. Live Demo Button */}
                <motion.a
                  href={FEATURED_PROJECT.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  className="group/demo inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white primary-btn-glow shadow-lg shadow-indigo-500/25 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform" />
                </motion.a>

                {/* 2. GitHub Button */}
                <motion.a
                  href={FEATURED_PROJECT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  className="group/git inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-800 secondary-btn-purple border border-slate-200/90 shadow-xs transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-4 h-4 text-indigo-600 group-hover/git:text-purple-700 transition-colors" />
                </motion.a>

                {/* 3. View Case Study Button */}
                <motion.button
                  onClick={() => setShowCaseStudyModal(true)}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  className="group/cs inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-indigo-700 secondary-btn-purple border border-indigo-200/80 transition-all cursor-pointer ml-auto focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <span>View Case Study</span>
                  <ChevronRight className="w-4 h-4 group-hover/cs:translate-x-1 transition-transform" />
                </motion.button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Full Detailed Case Study Modal with AnimatePresence */}
      <AnimatePresence>
        {showCaseStudyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="casestudy-modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowCaseStudyModal(false);
            }}
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-3xl aurora-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-white max-h-[90vh] overflow-y-auto space-y-6"
            >
              <button
                onClick={() => setShowCaseStudyModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                aria-label="Close case study modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
                  Comprehensive Case Study Breakdown
                </span>
                <h3 id="casestudy-modal-title" className="text-3xl font-black text-slate-900 mt-2">PG Adda — Product Case Study</h3>
                <p className="text-sm font-bold text-indigo-600">Frontend Product Prototype</p>
              </div>

              {/* Prototype Notice */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed font-medium">
                <strong>Product Prototype Scope:</strong> PG Adda was conceptualized and engineered to address accommodation challenges faced by IT professionals moving to Hyderabad tech corridors like Gachibowli, HITECH City, Kondapur, and Madhapur.
              </div>

              {/* Core Architectural Highlights */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Key Product Features & Capabilities:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  {FEATURED_PROJECT.features.map((feat) => (
                    <div key={feat} className="p-3 rounded-xl bg-white/70 border border-slate-200/80 flex items-center gap-2.5 shadow-2xs">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Breakdown */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Tech Stack & Tools Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {FEATURED_PROJECT.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href={FEATURED_PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white flex items-center gap-1.5 shadow-md hover:bg-indigo-700 transition-colors"
                  >
                    <span>Open Live Prototype</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={FEATURED_PROJECT.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-1.5 hover:bg-slate-200 transition-colors"
                  >
                    <span>View GitHub Code</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <button
                  onClick={() => setShowCaseStudyModal(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white cursor-pointer hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
