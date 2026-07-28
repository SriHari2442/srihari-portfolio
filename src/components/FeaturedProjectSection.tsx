import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
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
  ChevronLeft,
  SlidersHorizontal,
  Heart,
  Eye,
  Smartphone,
  Layers,
  Building2,
  ShieldCheck,
  Zap,
  Filter,
  MousePointerClick,
  Home,
  Check,
  ZoomIn,
  Maximize2,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FEATURED_PROJECT } from '../data/portfolioData';

export const FeaturedProjectSection: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedFilterLoc, setSelectedFilterLoc] = useState('Gachibowli');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSaved, setIsSaved] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // 6 Product Showcase Views for PG Adda Prototype Gallery
  const showcaseViews = [
    {
      id: 'homepage',
      name: 'Homepage',
      badge: 'Portal Landing',
      title: 'PG & Co-Living Discovery Portal',
      url: 'pg-adda-ruby.vercel.app/',
      icon: Home,
      description: 'Hero location search, top Hyderabad tech hubs, and featured accommodation recommendations.',
    },
    {
      id: 'search',
      name: 'Search',
      badge: 'Location Search',
      title: 'Tech Corridor Locality & Price Filter',
      url: 'pg-adda-ruby.vercel.app/search',
      icon: Search,
      description: 'Search Gachibowli, HITECH City, Kondapur, and Madhapur with interactive budget sliders.',
    },
    {
      id: 'results',
      name: 'Results',
      badge: 'Filtered Grid',
      title: 'Dynamic Property Results & Sorting',
      url: 'pg-adda-ruby.vercel.app/results',
      icon: SlidersHorizontal,
      description: 'Real-time property sorting by Men, Women, Co-Living, verified price tags, and amenity badges.',
    },
    {
      id: 'details',
      name: 'Property Details',
      badge: 'Room Details',
      title: 'Property Overview & Direct Owner Connect',
      url: 'pg-adda-ruby.vercel.app/property/stanza-living',
      icon: Building2,
      description: 'Detailed room sharing rates, photo gallery, verified amenities, and direct Call/WhatsApp actions.',
    },
    {
      id: 'schedule',
      name: 'Schedule Visit',
      badge: 'Site Visit',
      title: 'Site-Visit Scheduling Workflow',
      url: 'pg-adda-ruby.vercel.app/schedule-visit',
      icon: Calendar,
      description: 'Interactive calendar date and time slot selection for booking free on-site property tours.',
    },
    {
      id: 'confirmation',
      name: 'Confirmation',
      badge: 'Enquiry Success',
      title: 'Instant Visit Confirmation & Manager Sync',
      url: 'pg-adda-ruby.vercel.app/confirmation',
      icon: ShieldCheck,
      description: 'Visit confirmation status card with property address, manager WhatsApp link, and calendar sync.',
    },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % showcaseViews.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + showcaseViews.length) % showcaseViews.length);
  };

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

  // Lightbox keyboard navigation (ArrowLeft, ArrowRight, Escape)
  React.useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % showcaseViews.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + showcaseViews.length) % showcaseViews.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isLightboxOpen, showcaseViews.length]);

  // Render individual showcase view content
  const renderShowcaseContent = (index: number) => {
    return (
      <div className="h-full flex flex-col justify-between space-y-3">
        {/* VIEW 0: HOMEPAGE */}
        {index === 0 && (
          <div className="space-y-3">
            {/* Top Hero Banner */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-900/90 via-indigo-900/80 to-slate-900 border border-purple-500/40 space-y-2 shadow-lg">
              <div className="flex justify-between items-center text-[10px] font-bold text-purple-300">
                <span className="flex items-center gap-1.5"><Home className="w-3.5 h-3.5 text-purple-400" /> Hyderabad PG Portal</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-extrabold">100+ Verified PGs</span>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight">Find Your Ideal PG & Co-Living in Hyderabad</h4>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/90 p-2 rounded-xl border border-slate-800 shadow-inner">
                <Search className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="truncate">Gachibowli, HITECH City, Kondapur, Madhapur...</span>
              </div>
            </div>

            {/* Quick Category Badges */}
            <div className="grid grid-cols-4 gap-2 text-[11px] text-center font-bold">
              <div className="p-2 rounded-xl bg-purple-950/80 border border-purple-500/50 text-purple-200 shadow-xs">Co-Living</div>
              <div className="p-2 rounded-xl bg-slate-800/90 border border-slate-700/80 text-slate-300">Men PG</div>
              <div className="p-2 rounded-xl bg-slate-800/90 border border-slate-700/80 text-slate-300">Women PG</div>
              <div className="p-2 rounded-xl bg-slate-800/90 border border-slate-700/80 text-slate-300">Single Sharing</div>
            </div>

            {/* Featured Listing Card Teasers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sampleProperties.map((prop) => (
                <div key={prop.id} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between space-y-1.5 shadow-md">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start text-xs font-extrabold">
                      <span className="text-white truncate">{prop.title}</span>
                      <span className="text-emerald-400 shrink-0 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700">{prop.price}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 flex items-center gap-1 truncate">
                      <MapPin className="w-2.5 h-2.5 text-purple-400 shrink-0" />
                      <span>{prop.location}</span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-[10px] pt-1 border-t border-slate-700/60">
                    <span className="text-amber-300 font-bold flex items-center gap-1"><Star className="w-3 h-3 fill-amber-300" /> {prop.rating}</span>
                    <span className="text-purple-300 font-semibold">{prop.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 1: SEARCH */}
        {index === 1 && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80 space-y-2.5 shadow-md">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span className="flex items-center gap-1.5"><Search className="w-4 h-4 text-purple-400" /> Search Tech Corridor Locality</span>
                <span className="text-[10px] text-purple-300 font-mono bg-purple-950 px-2 py-0.5 rounded border border-purple-500/30">{selectedFilterLoc} Selected</span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
                {['Gachibowli', 'HITECH City', 'Kondapur', 'Madhapur'].map((loc) => (
                  <button
                    key={loc}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFilterLoc(loc);
                    }}
                    className={`py-1.5 px-2 rounded-lg text-center border cursor-pointer transition-all ${
                      selectedFilterLoc === loc
                        ? 'bg-purple-600 border-purple-400 text-white shadow-sm'
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget & Proximity Filter Control */}
            <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-500/40 space-y-2 shadow-md">
              <div className="flex justify-between text-xs font-bold text-purple-200">
                <span>Monthly Budget Range</span>
                <span className="text-emerald-400 font-extrabold">₹5,000 - ₹18,000 / month</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden p-0.5 border border-slate-700">
                <div className="bg-gradient-to-r from-purple-500 to-emerald-400 h-full w-3/4 rounded-full" />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>Min Budget: ₹5,000</span>
                <span>Max Budget: ₹25,000+</span>
              </div>
            </div>

            {/* Amenity Badges */}
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
              <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider">Quick Amenities Filter</span>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-semibold">
                <span className="px-2 py-1 rounded-lg bg-purple-600 text-white border border-purple-400">3 Meals Included</span>
                <span className="px-2 py-1 rounded-lg bg-purple-600 text-white border border-purple-400">High-Speed WiFi</span>
                <span className="px-2 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-700">Air Conditioning</span>
                <span className="px-2 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-700">Gym Access</span>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: RESULTS */}
        {index === 2 && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-200 p-1">
              <span>14 Verified PGs Matched in Gachibowli</span>
              <span className="text-[10px] text-purple-300 bg-purple-950 px-2.5 py-1 rounded-lg border border-purple-500/40">Sort: Lowest Rent First</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sampleProperties.map((prop) => (
                <div key={prop.id} className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 space-y-1.5 shadow-md hover:border-purple-500/60 transition-colors">
                  <div className="flex justify-between items-start text-xs font-extrabold">
                    <span className="text-white truncate">{prop.title}</span>
                    <span className="text-emerald-400 shrink-0 font-black">{prop.price}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-purple-400" />
                    <span>{prop.location}</span>
                  </p>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-700/60 text-[10px]">
                    <span className="text-amber-300 font-bold flex items-center gap-0.5"><Star className="w-3 h-3 fill-current" /> {prop.rating}</span>
                    <span className="text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-500/30 font-semibold">Verified Owner</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center text-xs text-slate-400">
              Showing verified co-living properties near Deloitte, Cyber Towers & Mindspace.
            </div>
          </div>
        )}

        {/* VIEW 3: PROPERTY DETAILS */}
        {index === 3 && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80 space-y-2.5 shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Verified Property Details</span>
                  <h4 className="text-sm sm:text-base font-extrabold text-white">Stanza Living - Hyderabad Hub</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    <span>Gachibowli Financial District, Hyderabad</span>
                  </p>
                </div>
                <span className="text-sm font-black text-emerald-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700">₹9,500/mo</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActionFeedback('Calling PG Owner...');
                    setTimeout(() => setActionFeedback(null), 2500);
                  }}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-emerald-400 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" /> Call
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActionFeedback('Opening Manager WhatsApp...');
                    setTimeout(() => setActionFeedback(null), 2500);
                  }}
                  className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEnquirySent(true);
                  }}
                  className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" /> {enquirySent ? 'Enquiry Sent!' : 'Enquire'}
                </button>
              </div>

              {actionFeedback && (
                <div aria-live="polite" className="p-2 rounded-xl bg-purple-950 border border-purple-500/50 text-xs font-bold text-purple-200 text-center animate-in fade-in duration-200">
                  {actionFeedback}
                </div>
              )}
            </div>

            <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Want an on-site property tour?</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isLightboxOpen) {
                    setLightboxIndex(4);
                  } else {
                    setActiveSlideIndex(4);
                  }
                }}
                className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs cursor-pointer shadow-xs"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        )}

        {/* VIEW 4: SCHEDULE VISIT */}
        {index === 4 && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-purple-500/40 space-y-2.5 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Select Free Site-Visit Date & Time Slot</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Available Dates:</span>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  <div className="p-2 rounded-xl bg-purple-600 text-white font-bold text-center shadow-xs">Sat, 28 Jul</div>
                  <div className="p-2 rounded-xl bg-slate-900 text-slate-300 text-center">Sun, 29 Jul</div>
                  <div className="p-2 rounded-xl bg-slate-900 text-slate-300 text-center">Mon, 30 Jul</div>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Time Slots:</span>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  <div className="p-2 rounded-xl bg-slate-900 text-slate-300 text-center">10:00 AM</div>
                  <div className="p-2 rounded-xl bg-emerald-600 text-white font-bold text-center shadow-xs">02:00 PM</div>
                  <div className="p-2 rounded-xl bg-slate-900 text-slate-300 text-center">05:00 PM</div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isLightboxOpen) {
                    setLightboxIndex(5);
                  } else {
                    setActiveSlideIndex(5);
                  }
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold text-center cursor-pointer shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all mt-1"
              >
                Confirm Free Visit Schedule
              </button>
            </div>
          </div>
        )}

        {/* VIEW 5: CONFIRMATION */}
        {index === 5 && (
          <div className="space-y-3 flex flex-col items-center text-center p-2">
            <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.35)]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-extrabold text-white">Visit Scheduled Successfully!</h4>
              <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
                Stanza Living • Tomorrow at 02:00 PM. Property address & manager details sent to your registered WhatsApp.
              </p>
            </div>
            <div className="flex gap-2.5 pt-1 w-full max-w-xs">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActionFeedback('Opening WhatsApp Chat...');
                  setTimeout(() => setActionFeedback(null), 2500);
                }}
                className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer shadow-sm transition-colors"
              >
                Chat Manager
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isLightboxOpen) {
                    setLightboxIndex(0);
                  } else {
                    setActiveSlideIndex(0);
                  }
                }}
                className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold cursor-pointer transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % showcaseViews.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + showcaseViews.length) % showcaseViews.length);
  };

  // Sample properties for prototype simulation
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
      className="py-12 sm:py-16 relative overflow-hidden"
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Ambient Glowing Blobs */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 16, 0],
              }
        }
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute top-1/3 left-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
      />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-300/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP SECTION HEADER (Label & Badge) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 lg:mb-8">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>Featured Project</span>
            </div>
            <span className="text-xs font-semibold text-slate-400">•</span>
            <span className="text-xs font-bold text-slate-600">Personal Project</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-300/80 text-amber-900 text-xs font-bold self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Frontend Product Prototype</span>
          </div>
        </div>

        {/* MOBILE HEADING BLOCK (Order 1 & 2 on Mobile: Label -> Title) */}
        <div className="block lg:hidden mb-6 space-y-1">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {FEATURED_PROJECT.name}
          </h2>
          <p className="text-xs sm:text-sm font-bold text-purple-700">
            {FEATURED_PROJECT.subtitle}
          </p>
        </div>

        {/* MASTER CASE STUDY CONTAINER: 2-COLUMN ON DESKTOP (58% Visual / 42% Content) */}
        <div className="purple-interactive-card rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 lg:p-10 shadow-2xl overflow-hidden border border-white/80 relative group/card">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* ========================================================= */}
            {/* LEFT SIDE: REDESIGNED PRODUCT SHOWCASE AREA (~58% Area / lg:col-span-7) */}
            {/* ========================================================= */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              
              {/* HERO SCREENSHOT SHOWCASE FRAME (Sleek Compact Browser Frame with Increased Height) */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.015 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-purple-500/70 shadow-2xl group/mockup transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-purple-950/20 to-transparent opacity-0 group-hover/mockup:opacity-100 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none group-hover/mockup:pointer-events-auto focus-within:pointer-events-auto z-30 flex items-center justify-center gap-2.5">
                  <button
                    onClick={() => openLightbox(activeSlideIndex)}
                    className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 border border-purple-400 text-white text-xs font-bold shadow-xl flex items-center gap-1.5 tracking-wide transform translate-y-2 group-hover/mockup:translate-y-0 focus-within:translate-y-0 transition-all duration-300 cursor-pointer"
                    aria-label="Open screenshot in fullscreen lightbox"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-white" />
                    <span>Fullscreen Lightbox</span>
                  </button>

                  <a
                    href="https://pg-adda-ruby.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-purple-900/90 border border-purple-400/50 hover:border-purple-300 backdrop-blur-md text-white text-xs font-bold shadow-xl flex items-center gap-1.5 tracking-wide transform translate-y-2 group-hover/mockup:translate-y-0 focus-within:translate-y-0 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none cursor-pointer"
                    aria-label="Explore PG Adda live application in new tab"
                  >
                    <MousePointerClick className="w-3.5 h-3.5 text-purple-400 animate-bounce" />
                    <span>Explore PG Adda</span>
                    <ExternalLink className="w-3 h-3 text-purple-300" />
                  </a>
                </div>

                {/* Ultra-Sleek Lightweight Browser Header Bar */}
                <div className="px-3 py-1.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-2 z-10 h-7 sm:h-8">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-rose-500/90 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/90 inline-block" />
                  </div>

                  {/* URL Address Bar */}
                  <div className="flex-1 max-w-xs sm:max-w-sm px-2 py-0.5 rounded-md bg-slate-950/90 border border-slate-800/80 flex items-center gap-1.5 text-slate-400 text-[10px] font-mono truncate">
                    <span className="text-emerald-400 font-bold">https://</span>
                    <span className="text-slate-100 font-semibold">{showcaseViews[activeSlideIndex].url}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[8px] font-extrabold uppercase tracking-wider hidden sm:inline-block">
                      {showcaseViews[activeSlideIndex].badge}
                    </span>
                    <button
                      onClick={() => openLightbox(activeSlideIndex)}
                      className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-purple-300 transition-colors cursor-pointer"
                      title="Open Fullscreen Lightbox"
                      aria-label="Open Fullscreen Lightbox"
                    >
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* MAIN SCREENSHOT VIEWPORT CANVAS */}
                <div
                  className="relative bg-slate-900 overflow-hidden text-slate-100 p-4 sm:p-5 min-h-[330px] sm:min-h-[360px] flex flex-col justify-between cursor-pointer group/canvas"
                  onClick={() => openLightbox(activeSlideIndex)}
                  title="Click screenshot to expand fullscreen lightbox"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlideIndex}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, y: 4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, y: -4 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="h-full flex flex-col justify-between"
                      role="region"
                      aria-label={`Showcase view ${activeSlideIndex + 1}: ${showcaseViews[activeSlideIndex].title}`}
                    >
                      {renderShowcaseContent(activeSlideIndex)}
                    </motion.div>
                  </AnimatePresence>

                  {/* Subtle Zoom Hint Indicator */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 text-[9px] font-mono font-bold flex items-center gap-1 opacity-70 group-hover/canvas:opacity-100 transition-opacity">
                    <ZoomIn className="w-2.5 h-2.5 text-purple-400" />
                    <span>Click to Zoom</span>
                  </div>
                </div>
              </motion.div>

              {/* GALLERY OF 6 THUMBNAIL SCREENSHOT PREVIEWS */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 px-0.5">
                  <span className="uppercase tracking-wider">Product Showcase Gallery</span>
                  <span className="text-purple-600 font-semibold">Click thumbnail to expand lightbox</span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {showcaseViews.map((view, idx) => {
                    const IconComp = view.icon;
                    const isActive = activeSlideIndex === idx;

                    return (
                      <button
                        key={view.id}
                        onClick={() => {
                          setActiveSlideIndex(idx);
                          openLightbox(idx);
                        }}
                        onMouseEnter={() => setActiveSlideIndex(idx)}
                        className={`group/thumb p-1.5 rounded-2xl text-left transition-all duration-250 cursor-pointer flex flex-col justify-between gap-1.5 relative overflow-hidden focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none ${
                          isActive
                            ? 'ring-2 ring-purple-400/90 border-purple-400 bg-gradient-to-b from-purple-950/90 via-slate-900 to-slate-950 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-[1.04] z-10'
                            : 'border border-slate-800 bg-slate-900/80 text-slate-400 hover:border-purple-500/50 hover:text-slate-200 hover:bg-slate-800/90 hover:scale-[1.02]'
                        }`}
                        aria-label={`Showcase thumbnail ${idx + 1}: ${view.name}`}
                        aria-pressed={isActive}
                      >
                        {/* Miniature UI Screenshot Representation */}
                        <div className="w-full h-11 sm:h-12 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden relative p-1 flex flex-col justify-between">
                          
                          {/* Mini Header Bar */}
                          <div className="flex items-center justify-between text-[7px] border-b border-slate-800/80 pb-0.5">
                            <div className="flex items-center gap-0.5">
                              <span className="w-1 h-1 rounded-full bg-rose-500/80 inline-block" />
                              <span className="w-1 h-1 rounded-full bg-amber-500/80 inline-block" />
                              <span className="w-1 h-1 rounded-full bg-emerald-500/80 inline-block" />
                            </div>
                            <span className="text-[6px] text-slate-500 font-mono truncate max-w-[40px]">{view.id}</span>
                          </div>

                          {/* Mini Screen Graphic Preview Content */}
                          {idx === 0 && (
                            <div className="space-y-0.5 pt-0.5">
                              <div className="h-2 rounded bg-gradient-to-r from-purple-600 to-indigo-600 w-full" />
                              <div className="flex gap-0.5">
                                <div className="h-1.5 rounded bg-slate-800 flex-1" />
                                <div className="h-1.5 rounded bg-purple-500/40 w-2" />
                              </div>
                            </div>
                          )}
                          {idx === 1 && (
                            <div className="space-y-0.5 pt-0.5">
                              <div className="h-2 rounded bg-slate-800 border border-purple-500/40 flex items-center px-1">
                                <div className="w-1 h-1 rounded-full bg-purple-400" />
                              </div>
                              <div className="h-1 rounded-full bg-gradient-to-r from-purple-500 to-emerald-400 w-3/4" />
                            </div>
                          )}
                          {idx === 2 && (
                            <div className="grid grid-cols-2 gap-0.5 pt-0.5">
                              <div className="h-3 rounded bg-slate-800 p-0.5 flex flex-col justify-between"><div className="w-1.5 h-1 rounded bg-emerald-400" /></div>
                              <div className="h-3 rounded bg-slate-800 p-0.5 flex flex-col justify-between"><div className="w-1.5 h-1 rounded bg-purple-400" /></div>
                            </div>
                          )}
                          {idx === 3 && (
                            <div className="space-y-0.5 pt-0.5">
                              <div className="h-2.5 rounded bg-slate-800 p-0.5 flex items-center justify-between"><div className="w-2 h-1 bg-white rounded" /><div className="w-1.5 h-1 bg-emerald-400 rounded" /></div>
                              <div className="flex gap-0.5"><div className="h-1 rounded bg-emerald-600 flex-1" /><div className="h-1 rounded bg-purple-600 flex-1" /></div>
                            </div>
                          )}
                          {idx === 4 && (
                            <div className="space-y-0.5 pt-0.5">
                              <div className="grid grid-cols-3 gap-0.5"><div className="h-1.5 rounded bg-purple-600" /><div className="h-1.5 rounded bg-slate-800" /><div className="h-1.5 rounded bg-slate-800" /></div>
                              <div className="h-1.5 rounded bg-purple-500/50 w-full" />
                            </div>
                          )}
                          {idx === 5 && (
                            <div className="flex flex-col items-center justify-center pt-0.5 space-y-0.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 flex items-center justify-center"><div className="w-1 h-1 bg-emerald-400 rounded-full" /></div>
                              <div className="w-5 h-1 bg-emerald-500/40 rounded" />
                            </div>
                          )}

                          {/* Active Overlay Highlight */}
                          {isActive && (
                            <div className="absolute inset-0 bg-purple-500/10 pointer-events-none" />
                          )}
                        </div>

                        {/* Thumbnail Title Label */}
                        <div className="flex items-center justify-between w-full px-0.5">
                          <span className="text-[10px] font-extrabold truncate leading-tight">
                            {view.name}
                          </span>
                          <IconComp className={`w-3 h-3 shrink-0 ${isActive ? 'text-purple-300' : 'text-slate-500'}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ACTIVE VIEW CAPTION FOOTER */}
              <div className="px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs text-slate-400 shadow-sm">
                <span className="font-semibold text-slate-300 truncate pr-2">
                  <strong className="text-purple-400 font-bold">{showcaseViews[activeSlideIndex].name}:</strong> {showcaseViews[activeSlideIndex].description}
                </span>
                <span className="text-xs font-mono text-purple-400 font-bold shrink-0">
                  0{activeSlideIndex + 1} / 06
                </span>
              </div>

              {/* PROTOTYPE STATEMENT CALLOUT BANNER (Elevated Frosted Glass Card with Soft Lavender Tint) */}
              <div className="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-r from-purple-50/85 via-indigo-50/70 to-purple-50/85 border border-purple-200/90 backdrop-blur-md shadow-md shadow-purple-900/5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/15 hover:border-purple-300 transition-all duration-300 ease-out flex items-start gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-purple-100 fill-purple-100/30" />
                </div>
                <div className="leading-relaxed text-xs sm:text-[13px]">
                  <strong className="text-slate-900 font-extrabold block sm:inline mr-1">
                    Frontend Product Prototype Statement:
                  </strong>
                  <span className="text-slate-700 font-medium">
                    PG Adda is designed and developed independently by Sri Hari Mada to demonstrate scalable React component architecture, user-centric discovery filters, and responsive UI design.
                  </span>
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* RIGHT SIDE: PRODUCT DETAILS CONTENT AREA (~42% Area / lg:col-span-5) */}
            {/* ========================================================= */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                
                {/* DESKTOP HEADING BLOCK (Hidden on mobile) */}
                <div className="hidden lg:block space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {FEATURED_PROJECT.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-purple-700">
                    {FEATURED_PROJECT.subtitle}
                  </p>
                </div>

                {/* THE CHALLENGE SECTION */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1 shadow-2xs">
                  <h4 className="text-[11px] font-extrabold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span>The Challenge</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {FEATURED_PROJECT.challenge}
                  </p>
                </div>

                {/* MY SOLUTION SECTION */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 space-y-1 shadow-2xs">
                  <h4 className="text-[11px] font-extrabold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span>My Solution</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {FEATURED_PROJECT.solution}
                  </p>
                </div>

                {/* KEY CONTRIBUTIONS */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Key Contributions</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {FEATURED_PROJECT.keyContributions?.map((item) => (
                      <div
                        key={item}
                        className="group/item flex items-center gap-2 p-2 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-purple-200/90 hover:bg-purple-50/60 font-semibold transition-all duration-200 cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ENGINEERING HIGHLIGHTS */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-purple-600" />
                    <span>Engineering Highlights</span>
                  </h4>

                  <div className="flex flex-wrap gap-1.5">
                    {FEATURED_PROJECT.engineeringHighlights?.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-xl bg-purple-100/90 text-purple-900 border border-purple-200 text-xs font-bold cursor-default shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TECHNOLOGY STACK */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-purple-600" />
                    <span>Technology Stack</span>
                  </h4>

                  <div className="flex flex-wrap gap-1.5">
                    {FEATURED_PROJECT.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                        className="px-2.5 py-1 rounded-xl bg-slate-100/90 text-slate-800 text-xs font-bold border border-slate-200/90 hover:bg-purple-100 hover:text-purple-900 hover:border-purple-300 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>

              {/* ACTION BUTTONS ROW */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-start gap-3">
                {/* 1. Primary: Live Demo Button */}
                <motion.a
                  href={FEATURED_PROJECT.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  className="group/demo inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white primary-btn-glow shadow-lg shadow-purple-500/25 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
                  aria-label="Open PG Adda Live Demo in new tab"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform" />
                </motion.a>

                {/* 2. Secondary: GitHub Button */}
                <motion.a
                  href={FEATURED_PROJECT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  className="group/git inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-800 secondary-btn-purple border border-slate-200/90 shadow-xs transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
                  aria-label="View PG Adda source code on GitHub"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-4 h-4 text-purple-600 group-hover/git:text-purple-800 transition-colors" />
                </motion.a>

                {/* 3. Tertiary: Case Study Button */}
                <motion.button
                  onClick={() => setShowCaseStudyModal(true)}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  className="group/cs inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-purple-700 secondary-btn-purple border border-purple-200/80 shadow-xs transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
                  aria-label="View full PG Adda case study breakdown"
                >
                  <span>Case Study</span>
                  <ChevronRight className="w-4 h-4 group-hover/cs:translate-x-1 transition-transform" />
                </motion.button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FULL ACCESSIBLE CASE STUDY MODAL */}
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
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
                aria-label="Close case study modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
                  Product Case Study Breakdown
                </span>
                <h3 id="casestudy-modal-title" className="text-3xl font-black text-slate-900 mt-2">
                  PG Adda — Product Case Study
                </h3>
                <p className="text-sm font-bold text-purple-700">
                  Frontend Product Prototype for PG & Co-Living Discovery
                </p>
              </div>

              {/* The Challenge & My Solution Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-1.5">
                  <h4 className="font-extrabold text-amber-900 text-xs uppercase tracking-wider">The Challenge</h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">{FEATURED_PROJECT.challenge}</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200/90 space-y-1.5">
                  <h4 className="font-extrabold text-purple-900 text-xs uppercase tracking-wider">My Solution</h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">{FEATURED_PROJECT.solution}</p>
                </div>
              </div>

              {/* Key Contributions & Engineering Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Key Contributions</span>
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {FEATURED_PROJECT.keyContributions?.map((item) => (
                      <div key={item} className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 flex items-center gap-2 font-medium shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-purple-600" />
                    <span>Engineering Highlights</span>
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {FEATURED_PROJECT.engineeringHighlights?.map((item) => (
                      <div key={item} className="p-2.5 rounded-xl bg-purple-50/90 border border-purple-200/80 flex items-center gap-2 font-semibold text-purple-900 shadow-2xs">
                        <Zap className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features Implemented */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Features Implemented:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {FEATURED_PROJECT.features.map((feat) => (
                    <div key={feat} className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80 flex items-center gap-2 shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Breakdown */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Tech Stack & Development Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {FEATURED_PROJECT.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-xl bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex gap-2">
                  <a
                    href={FEATURED_PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-purple-600 text-white flex items-center gap-1.5 shadow-md hover:bg-purple-700 transition-colors"
                  >
                    <span>Open Live Demo</span>
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

      {/* FULLSCREEN SCREENSHOT GALLERY LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex flex-col justify-between p-3 sm:p-5 md:p-6 bg-slate-950/95 backdrop-blur-2xl text-white select-none overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen Screenshot Lightbox Gallery"
          >
            {/* Lightbox Top Control Bar */}
            <div className="flex items-center justify-between gap-3 px-3 sm:px-5 py-2.5 bg-slate-900/90 border border-slate-800 rounded-2xl backdrop-blur-md z-30 shadow-xl shrink-0">
              <div className="flex items-center gap-2.5 truncate">
                <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
                  <ZoomIn className="w-4 h-4 text-purple-400" />
                </span>
                <div className="truncate">
                  <h3 className="text-xs sm:text-sm font-extrabold text-white truncate">
                    {showcaseViews[lightboxIndex].title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono truncate hidden sm:block">
                    https://{showcaseViews[lightboxIndex].url}
                  </p>
                </div>
              </div>

              {/* Center: Image Counter */}
              <div className="px-3.5 py-1 rounded-full bg-purple-950/90 border border-purple-500/60 text-purple-200 text-xs sm:text-sm font-mono font-black tracking-widest shadow-inner shrink-0">
                {lightboxIndex + 1} / {showcaseViews.length}
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://pg-adda-ruby.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold hidden md:flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={closeLightbox}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-900/90 border border-slate-700 hover:border-rose-500/80 text-slate-200 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 font-bold text-xs shadow-md"
                  aria-label="Close Lightbox (Escape)"
                >
                  <X className="w-4 h-4 text-slate-200" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </div>
            </div>

            {/* Main Lightbox Canvas Container with Previous & Next Navigation Buttons */}
            <div className="relative flex-1 my-2 sm:my-3 flex items-center justify-center px-2 sm:px-12 md:px-16 overflow-hidden">
              {/* Previous Button */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-2 sm:left-4 z-40 p-3 sm:p-4 rounded-full bg-slate-900/90 hover:bg-purple-900/90 border border-slate-700 hover:border-purple-400 text-purple-300 hover:text-white shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Previous Screenshot"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextLightbox}
                className="absolute right-2 sm:right-4 z-40 p-3 sm:p-4 rounded-full bg-slate-900/90 hover:bg-purple-900/90 border border-slate-700 hover:border-purple-400 text-purple-300 hover:text-white shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Next Screenshot"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Smooth Animated Zoom Image Frame */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="w-full max-w-4xl max-h-[70vh] sm:max-h-[76vh] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_0_60px_rgba(168,85,247,0.3)] flex flex-col justify-between"
                >
                  {/* Browser Window Bar */}
                  <div className="px-3.5 py-2 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
                    </div>

                    <div className="flex-1 max-w-md px-3 py-1 rounded-lg bg-slate-950 border border-slate-800/80 text-slate-300 text-xs font-mono truncate flex items-center gap-1.5">
                      <span className="text-emerald-400 font-bold">https://</span>
                      <span>{showcaseViews[lightboxIndex].url}</span>
                    </div>

                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-extrabold uppercase">
                      {showcaseViews[lightboxIndex].badge}
                    </span>
                  </div>

                  {/* High Quality Interactive Viewport */}
                  <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-900 text-slate-100">
                    {renderShowcaseContent(lightboxIndex)}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Lightbox Footer Thumbnail Selector Strip */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-x-auto py-1.5 px-1 z-30">
              {showcaseViews.map((view, idx) => {
                const isActive = lightboxIndex === idx;
                return (
                  <button
                    key={view.id}
                    onClick={() => setLightboxIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-purple-600 text-white border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] scale-105'
                        : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-purple-500/50'
                    }`}
                  >
                    <span className="text-purple-300 font-mono">{idx + 1}.</span>
                    <span>{view.name}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

