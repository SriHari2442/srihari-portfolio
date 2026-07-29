import React, { useState, useRef } from 'react';
import {
  Sparkles,
  CheckCircle,
  Play,
  Pause,
  Maximize,
  Volume2,
  VolumeX,
  RotateCcw,
  Eye,
  X,
  Image as ImageIcon,
  Video,
  BellOff,
  MessageSquare,
  Clock,
  Wrench,
  AlertCircle,
  ShieldCheck,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { PRODUCT_CONCEPT } from '../data/portfolioData';

interface AssetScreenshot {
  id: string;
  title: string;
  subtitle: string;
  fullUrl: string;
  thumbUrl: string;
}

const QUIET_MODE_SCREENSHOTS: AssetScreenshot[] = [
  {
    id: 'ux-01',
    title: 'Figma UX Workflow & System Architecture',
    subtitle: 'Notification logic, quiet state triggers, and user boundary controls',
    fullUrl: '/assets/quiet-mode/ux-screenshot-01.png',
    thumbUrl: '/assets/quiet-mode/ux-screenshot-01-thumb.webp',
  },
  {
    id: 'ux-02',
    title: 'WhatsApp Quiet Mode Interface & Status Badge',
    subtitle: 'Sender visibility, auto-replies, and silent notification banner',
    fullUrl: '/assets/quiet-mode/ux-screenshot-02.png',
    thumbUrl: '/assets/quiet-mode/ux-screenshot-02-thumb.webp',
  },
];

const QUIET_MODE_VIDEO_URL =
  'https://res.cloudinary.com/xgjyuzlg/video/upload/f_auto,q_auto/v1785323472/quiet_w32q0b.mp4';

export const QuietModeSection: React.FC = () => {
  // Inline Video Player States
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Gallery Modal Lightbox
  const [selectedImage, setSelectedImage] = useState<AssetScreenshot | null>(null);

  // Watch Product Demo Video Modal
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalIsPlaying, setModalIsPlaying] = useState(false);
  const [modalHasStarted, setModalHasStarted] = useState(false);
  const [modalIsMuted, setModalIsMuted] = useState(false);
  const [modalCurrentTime, setModalCurrentTime] = useState(0);
  const [modalDuration, setModalDuration] = useState(0);
  const [modalIsLoading, setModalIsLoading] = useState(false);
  const [modalIsEnded, setModalIsEnded] = useState(false);
  const [modalHasError, setModalHasError] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isEnded) {
      video.currentTime = 0;
      setCurrentTime(0);
      setIsEnded(false);
    }

    if (hasError) {
      setHasError(false);
    }

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      setHasStarted(true);
      setIsLoading(true);
      video.play().then(() => {
        setIsPlaying(true);
        setIsLoading(false);
      }).catch((err) => {
        console.error('Quiet mode video play error:', err);
        setHasError(true);
        setIsLoading(false);
      });
    }
  };

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    setCurrentTime(0);
    setIsEnded(false);
    setHasError(false);
    setIsLoading(true);
    video.play().then(() => {
      setIsPlaying(true);
      setIsLoading(false);
    }).catch((err) => {
      console.error('Quiet mode replay error:', err);
      setHasError(true);
      setIsLoading(false);
    });
  };

  const handleRetry = () => {
    const video = videoRef.current;
    if (!video) return;

    setHasError(false);
    setIsLoading(true);
    video.load();
    video.play().then(() => {
      setIsPlaying(true);
      setHasStarted(true);
      setIsLoading(false);
    }).catch((err) => {
      console.error('Quiet mode retry error:', err);
      setHasError(true);
      setIsLoading(false);
    });
  };

  const handleExploreProject = () => {
    setIsEnded(false);
    const target = document.getElementById('quiet-mode-details') || document.getElementById('quiet-mode-features');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleFullscreen = () => {
    if (videoContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoContainerRef.current.requestFullscreen();
      }
    }
  };

  const toggleModalPlay = () => {
    const video = modalVideoRef.current;
    if (!video) return;

    if (modalIsEnded) {
      video.currentTime = 0;
      setModalCurrentTime(0);
      setModalIsEnded(false);
    }

    if (modalHasError) {
      setModalHasError(false);
    }

    if (modalIsPlaying) {
      video.pause();
      setModalIsPlaying(false);
    } else {
      setModalHasStarted(true);
      setModalIsLoading(true);
      video.play().then(() => {
        setModalIsPlaying(true);
        setModalIsLoading(false);
      }).catch((err) => {
        console.error('Modal video play error:', err);
        setModalHasError(true);
        setModalIsLoading(false);
      });
    }
  };

  const handleModalReplay = () => {
    const video = modalVideoRef.current;
    if (!video) return;

    video.currentTime = 0;
    setModalCurrentTime(0);
    setModalIsEnded(false);
    setModalHasError(false);
    setModalIsLoading(true);
    video.play().then(() => {
      setModalIsPlaying(true);
      setModalIsLoading(false);
    }).catch((err) => {
      console.error('Modal video replay error:', err);
      setModalHasError(true);
      setModalIsLoading(false);
    });
  };

  const handleModalRetry = () => {
    const video = modalVideoRef.current;
    if (!video) return;

    setModalHasError(false);
    setModalIsLoading(true);
    video.load();
    video.play().then(() => {
      setModalIsPlaying(true);
      setModalHasStarted(true);
      setModalIsLoading(false);
    }).catch((err) => {
      console.error('Modal video retry error:', err);
      setModalHasError(true);
      setModalIsLoading(false);
    });
  };

  const handleModalExploreProject = () => {
    setModalIsEnded(false);
    setIsDemoModalOpen(false);
    const target = document.getElementById('quiet-mode-details') || document.getElementById('quiet-mode-features');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleModalMute = () => {
    const video = modalVideoRef.current;
    if (!video) return;
    const nextMuted = !modalIsMuted;
    video.muted = nextMuted;
    setModalIsMuted(nextMuted);
  };

  const formatTime = (timeInSecs: number) => {
    if (isNaN(timeInSecs)) return '0:00';
    const mins = Math.floor(timeInSecs / 60);
    const secs = Math.floor(timeInSecs % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="achievements" className="py-6">
      <div className="purple-interactive-card rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        
        {/* Header Section: Title, Concept Subtitle & View Demo Action */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold border border-emerald-200/80 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Messaging UX Concept</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Quiet Mode for WhatsApp
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              A messaging feature concept focused on reducing communication pressure and supporting digital wellbeing.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <Wrench className="w-3.5 h-3.5 text-indigo-600" />
              <span>Tools: {PRODUCT_CONCEPT.tools.join(' & ')}</span>
            </div>

            {/* Watch Product Demo Button - Opens Premium Video Modal */}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/20 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
              aria-label="Watch Product Demo"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Watch Product Demo</span>
            </button>
          </div>
        </div>

        {/* Problem & Proposed Experience Cards */}
        <div id="quiet-mode-details" className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Problem Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3.5 shadow-xs">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                Problem
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Constant messaging notifications, read-receipt anxiety, and a lack of explicit focus boundaries cause digital fatigue and continuous communication pressure.
              </p>
            </div>
          </div>

          {/* Proposed Experience Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 flex items-start gap-3.5 shadow-xs">
            <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700 shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-1">
                Proposed Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Quiet Mode empowers users with automated focus schedules, quiet status indicators for senders, and silent notifications to maintain digital wellbeing without breaking conversation context.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div id="quiet-mode-features" className="mb-8">
          <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600" />
            <span>Key Features</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                <BellOff className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Silent Notifications</h4>
                <p className="text-[11px] text-slate-500 font-normal">Mutes non-urgent message alerts</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Automatic Replies</h4>
                <p className="text-[11px] text-slate-500 font-normal">Sends predefined quiet status notices</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Sender Visibility</h4>
                <p className="text-[11px] text-slate-500 font-normal">Displays quiet badge before typing</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Scheduled Quiet Periods</h4>
                <p className="text-[11px] text-slate-500 font-normal">Automates focus hours & calendars</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout: Demo Video (Left/Main) + Project Gallery (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Demo Video Container */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full max-w-[340px] flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-purple-600" />
                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                  Demo Video
                </h3>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">9:16 Concept Demo</span>
            </div>

            <div
              ref={videoContainerRef}
              className="relative w-full max-w-[340px] rounded-[24px] overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group p-1.5"
            >
              <div className="relative aspect-[9/16] w-full bg-slate-950 rounded-[18px] overflow-hidden flex items-center justify-center">
                <video
                  ref={videoRef}
                  preload="metadata"
                  playsInline
                  muted={isMuted}
                  onClick={togglePlay}
                  onLoadStart={() => {
                    if (hasStarted) setIsLoading(true);
                  }}
                  onWaiting={() => {
                    if (hasStarted) setIsLoading(true);
                  }}
                  onStalled={() => {
                    if (hasStarted) setIsLoading(true);
                  }}
                  onCanPlay={() => {
                    setIsLoading(false);
                    setHasError(false);
                  }}
                  onPlaying={() => {
                    setIsLoading(false);
                    setIsEnded(false);
                    setHasError(false);
                  }}
                  onTimeUpdate={() => {
                    if (videoRef.current) {
                      setCurrentTime(videoRef.current.currentTime);
                    }
                  }}
                  onLoadedMetadata={() => {
                    if (videoRef.current) {
                      setDuration(videoRef.current.duration);
                    }
                  }}
                  onEnded={() => {
                    setIsPlaying(false);
                    setIsEnded(true);
                    setIsLoading(false);
                  }}
                  onError={() => {
                    setIsPlaying(false);
                    setIsLoading(false);
                    setHasError(true);
                  }}
                  className="w-full h-full object-contain cursor-pointer"
                  aria-label="Play Quiet Mode WhatsApp concept demonstration"
                >
                  <source src={QUIET_MODE_VIDEO_URL} type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>

                {/* Centered Premium Loading Overlay */}
                {isLoading && hasStarted && !hasError && !isEnded && (
                  <div
                    aria-live="polite"
                    className="absolute inset-0 z-25 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center transition-all duration-300 animate-in fade-in"
                  >
                    <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mb-3 shadow-lg">
                      <Loader2 className="w-7 h-7 animate-spin" />
                    </div>
                    <p className="text-sm font-semibold text-white tracking-wide">
                      Loading video...
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Please wait.
                    </p>
                  </div>
                )}

                {/* Error Overlay */}
                {hasError && (
                  <div
                    aria-live="polite"
                    className="absolute inset-0 z-30 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center transition-all duration-300 animate-in fade-in"
                  >
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mb-2 shadow-lg">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide mb-1">
                      Unable to load the video.
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-3">
                      Please try again.
                    </p>
                    <button
                      onClick={handleRetry}
                      className="py-1.5 px-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold text-xs shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 border border-white/20 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retry</span>
                    </button>
                  </div>
                )}

                {/* Big Center Play Overlay Button */}
                {!isPlaying && !isLoading && !isEnded && !hasError && (
                  <button
                    onClick={togglePlay}
                    aria-label="Play Quiet Mode WhatsApp concept demonstration"
                    className="absolute z-20 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white/50 group/btn focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  >
                    <Play className="w-8 h-8 fill-current translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
                  </button>
                )}

                {/* Glass Completed Overlay */}
                {isEnded && !hasError && (
                  <div
                    aria-live="polite"
                    className="absolute inset-0 z-30 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-5 text-center transition-all duration-300 animate-in fade-in"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-2 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-wide mb-4">
                      ✓ Demo completed
                    </h4>

                    <div className="flex flex-col gap-2 w-full max-w-[220px]">
                      <button
                        onClick={handleReplay}
                        className="w-full py-2 px-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold text-xs shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-white/20 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Replay Demo</span>
                      </button>

                      <button
                        onClick={handleExploreProject}
                        className="w-full py-2 px-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700/80 shadow-sm hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        <span>Explore Project</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Inline Video Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-30 flex flex-col gap-2">
                  <div
                    role="slider"
                    tabIndex={0}
                    aria-label="Video timeline slider"
                    aria-valuemin={0}
                    aria-valuemax={duration || 100}
                    aria-valuenow={Math.round(currentTime)}
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const newTime = (clickX / rect.width) * duration;
                      if (videoRef.current && !isNaN(newTime)) {
                        videoRef.current.currentTime = newTime;
                        setCurrentTime(newTime);
                      }
                    }}
                    className="w-full h-1.5 bg-slate-700/80 hover:h-2.5 rounded-full cursor-pointer relative overflow-hidden transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                      style={{
                        width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-white text-xs pt-0.5">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={togglePlay}
                        className="p-1 rounded-md hover:bg-white/10 text-white transition-colors cursor-pointer"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>

                      <button
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.currentTime = 0;
                            setCurrentTime(0);
                          }
                        }}
                        className="p-1 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Replay video"
                        aria-label="Replay video"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>

                      <span className="font-mono text-[10px] text-slate-300">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={toggleMute}
                        className="p-1 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                      </button>

                      <button
                        onClick={handleFullscreen}
                        className="p-1 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        aria-label="Fullscreen video"
                      >
                        <Maximize className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Gallery Container */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon className="w-4 h-4 text-purple-600" />
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                Project Gallery
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {QUIET_MODE_SCREENSHOTS.map((screen) => (
                <div
                  key={screen.id}
                  onClick={() => setSelectedImage(screen)}
                  className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <picture>
                    <source srcSet={screen.thumbUrl} type="image/webp" />
                    <img
                      src={screen.fullUrl}
                      alt={screen.title}
                      loading="lazy"
                      className="w-full h-40 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </picture>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-3 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold truncate pr-2">{screen.title}</span>
                      <span className="p-1.5 rounded-lg bg-white/20 backdrop-blur-md group-hover:bg-purple-600 transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-300 font-medium truncate mt-0.5">
                      {screen.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Screenshot Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800">
              <div>
                <h4 className="text-sm font-bold text-white">{selectedImage.title}</h4>
                <p className="text-xs text-slate-400">{selectedImage.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close screenshot modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 flex justify-center max-h-[80vh] overflow-auto">
              <img
                src={selectedImage.fullUrl}
                alt={selectedImage.title}
                className="max-w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Premium Video Demo Modal (Triggered by 'Watch Product Demo' Button) */}
      {isDemoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsDemoModalOpen(false)}
        >
          <div
            className="relative max-w-[360px] w-full bg-slate-950 rounded-[28px] border border-slate-800 shadow-2xl p-4 sm:p-5 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between w-full pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Quiet Mode Product Demo</h3>
                  <p className="text-[11px] text-slate-400">WhatsApp Digital Wellbeing UX Concept</p>
                </div>
              </div>

              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="p-1.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                aria-label="Close video demo modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Video Player Element */}
            <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black border border-slate-800 flex items-center justify-center">
              <video
                ref={modalVideoRef}
                preload="metadata"
                playsInline
                muted={modalIsMuted}
                onLoadStart={() => {
                  if (modalHasStarted) setModalIsLoading(true);
                }}
                onWaiting={() => {
                  if (modalHasStarted) setModalIsLoading(true);
                }}
                onStalled={() => {
                  if (modalHasStarted) setModalIsLoading(true);
                }}
                onCanPlay={() => {
                  setModalIsLoading(false);
                  setModalHasError(false);
                }}
                onPlaying={() => {
                  setModalIsLoading(false);
                  setModalIsEnded(false);
                  setModalHasError(false);
                }}
                onTimeUpdate={() => {
                  if (modalVideoRef.current) {
                    setModalCurrentTime(modalVideoRef.current.currentTime);
                  }
                }}
                onLoadedMetadata={() => {
                  if (modalVideoRef.current) {
                    setModalDuration(modalVideoRef.current.duration);
                  }
                }}
                onEnded={() => {
                  setModalIsPlaying(false);
                  setModalIsEnded(true);
                  setModalIsLoading(false);
                }}
                onError={() => {
                  setModalIsPlaying(false);
                  setModalIsLoading(false);
                  setModalHasError(true);
                }}
                className="w-full h-full object-contain cursor-pointer"
                onClick={toggleModalPlay}
                aria-label="Play Quiet Mode WhatsApp concept demonstration"
              >
                <source src={QUIET_MODE_VIDEO_URL} type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>

              {/* Centered Premium Loading Overlay */}
              {modalIsLoading && modalHasStarted && !modalHasError && !modalIsEnded && (
                <div
                  aria-live="polite"
                  className="absolute inset-0 z-25 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center transition-all duration-300 animate-in fade-in"
                >
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mb-3 shadow-lg">
                    <Loader2 className="w-7 h-7 animate-spin" />
                  </div>
                  <p className="text-sm font-semibold text-white tracking-wide">
                    Loading video...
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Please wait.
                  </p>
                </div>
              )}

              {/* Error Overlay */}
              {modalHasError && (
                <div
                  aria-live="polite"
                  className="absolute inset-0 z-30 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center transition-all duration-300 animate-in fade-in"
                >
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mb-2 shadow-lg">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide mb-1">
                    Unable to load the video.
                  </h4>
                  <p className="text-[11px] text-slate-400 mb-3">
                    Please try again.
                  </p>
                  <button
                    onClick={handleModalRetry}
                    className="py-1.5 px-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold text-xs shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 border border-white/20 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry</span>
                  </button>
                </div>
              )}

              {/* Big Center Play Overlay Button */}
              {!modalIsPlaying && !modalIsLoading && !modalIsEnded && !modalHasError && (
                <button
                  onClick={toggleModalPlay}
                  aria-label="Play Quiet Mode WhatsApp concept demonstration"
                  className="absolute z-20 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white/50 group/btn focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                >
                  <Play className="w-8 h-8 fill-current translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
                </button>
              )}

              {/* Glass Completed Overlay */}
              {modalIsEnded && !modalHasError && (
                <div
                  aria-live="polite"
                  className="absolute inset-0 z-30 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-5 text-center transition-all duration-300 animate-in fade-in"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-2 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide mb-4">
                    ✓ Demo completed
                  </h4>

                  <div className="flex flex-col gap-2 w-full max-w-[220px]">
                    <button
                      onClick={handleModalReplay}
                      className="w-full py-2 px-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold text-xs shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-white/20 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Replay Demo</span>
                    </button>

                    <button
                      onClick={handleModalExploreProject}
                      className="w-full py-2 px-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700/80 shadow-sm hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      <span>Explore Project</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Modal Overlay Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-30 flex flex-col gap-2">
                <div
                  role="slider"
                  tabIndex={0}
                  aria-label="Modal video timeline slider"
                  aria-valuemin={0}
                  aria-valuemax={modalDuration || 100}
                  aria-valuenow={Math.round(modalCurrentTime)}
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newTime = (clickX / rect.width) * modalDuration;
                    if (modalVideoRef.current && !isNaN(newTime)) {
                      modalVideoRef.current.currentTime = newTime;
                      setModalCurrentTime(newTime);
                    }
                  }}
                  className="w-full h-1.5 bg-slate-700/80 hover:h-2.5 rounded-full cursor-pointer relative overflow-hidden transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                >
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"
                    style={{
                      width: `${modalDuration ? (modalCurrentTime / modalDuration) * 100 : 0}%`,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-white text-xs pt-0.5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleModalPlay}
                      className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      aria-label={modalIsPlaying ? 'Pause video' : 'Play video'}
                    >
                      {modalIsPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <button
                      onClick={() => {
                        if (modalVideoRef.current) {
                          modalVideoRef.current.currentTime = 0;
                          setModalCurrentTime(0);
                        }
                      }}
                      className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="Replay video"
                      aria-label="Replay video"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    <span className="font-mono text-[10px] text-slate-300">
                      {formatTime(modalCurrentTime)} / {formatTime(modalDuration)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={toggleModalMute}
                      className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      aria-label={modalIsMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {modalIsMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


