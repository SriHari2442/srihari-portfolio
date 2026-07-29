import React, { useState, useRef } from 'react';
import { Play, RotateCcw, Loader2, AlertCircle, Sparkles, Briefcase, Building2, Code2, Layers, Eye } from 'lucide-react';

interface VideoPlayerProps {
  shouldReduceMotion?: boolean;
}

const CLOUDINARY_VIDEO_URL =
  'https://res.cloudinary.com/xgjyuzlg/video/upload/f_auto,q_auto/v1785323080/Intro_actk38.mp4';

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ shouldReduceMotion = false }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Subtle 3D tilt interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleStartPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isEnded) {
      video.currentTime = 0;
      setIsEnded(false);
    }

    if (hasError) {
      setHasError(false);
    }

    if (!hasStarted) {
      setHasStarted(true);
      setIsLoading(true);
      video.play().then(() => {
        setIsPlaying(true);
        setIsLoading(false);
      }).catch((err) => {
        console.error('Video playback error:', err);
        setHasError(true);
        setIsLoading(false);
      });
    } else {
      if (isPlaying) {
        video.pause();
      } else {
        setIsLoading(true);
        video.play().then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        }).catch((err) => {
          console.error('Video play error:', err);
          setHasError(true);
          setIsLoading(false);
        });
      }
    }
  };

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    setIsEnded(false);
    setHasError(false);
    setIsLoading(true);
    video.play().then(() => {
      setIsPlaying(true);
      setIsLoading(false);
    }).catch((err) => {
      console.error('Video replay error:', err);
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
      console.error('Video retry error:', err);
      setHasError(true);
      setIsLoading(false);
    });
  };

  const trustHighlights = [
    { label: '3+ Years Experience', icon: Briefcase, color: 'text-indigo-600 bg-indigo-50/80 border-indigo-200/60' },
    { label: 'Enterprise Banking', icon: Building2, color: 'text-blue-600 bg-blue-50/80 border-blue-200/60' },
    { label: 'React & TS Specialist', icon: Code2, color: 'text-purple-600 bg-purple-50/80 border-purple-200/60' },
    { label: 'Product Builder', icon: Layers, color: 'text-pink-600 bg-pink-50/80 border-pink-200/60' },
    { label: 'Accessibility Focused', icon: Eye, color: 'text-emerald-600 bg-emerald-50/80 border-emerald-200/60' },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Badge: "Meet Sri Hari — Introduction" */}
      <div className="w-full flex items-center justify-center mb-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/95 text-white text-xs sm:text-sm font-bold border border-white/30 shadow-lg backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Meet Sri Hari — Introduction</span>
        </div>
      </div>

      {/* Main Video Frame Outer Wrapper with Floating & Subtle 3D Tilt */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 200ms ease-out',
        }}
        className="relative group w-full max-w-none lg:scale-[1.04] transition-transform duration-300"
      >
        {/* Cinematic Glowing Ambient Halo */}
        <div className="absolute -inset-3.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-600 rounded-[32px] blur-3xl opacity-50 group-hover:opacity-75 transition duration-500 pointer-events-none" />

        {/* Floating 24px Radius Glass Card Container */}
        <div
          ref={containerRef}
          className="relative w-full rounded-[24px] overflow-hidden bg-slate-900/95 border border-white/90 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(79,70,229,0.35)] hover:shadow-[0_35px_75px_-15px_rgba(79,70,229,0.45)] transition-all duration-300"
        >
          {/* 16:9 Aspect Ratio Video Frame */}
          <div
            className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={!hasStarted ? handleStartPlayback : undefined}
          >
            <video
              ref={videoRef}
              src={CLOUDINARY_VIDEO_URL}
              preload="metadata"
              playsInline
              controls={hasStarted && !isEnded && !hasError}
              onPlay={() => {
                setIsPlaying(true);
                setHasStarted(true);
                setHasError(false);
              }}
              onPause={() => setIsPlaying(false)}
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
              className="w-full h-full object-cover"
              aria-label="Video introduction by Sri Hari Mada"
              title="Video introduction by Sri Hari Mada"
            />

            {/* Centered Loading Overlay */}
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
                className="absolute inset-0 z-30 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-5 text-center transition-all duration-300 animate-in fade-in"
              >
                <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mb-2 shadow-lg">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide mb-1">
                  Unable to load the video.
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  Please try again.
                </p>
                <button
                  onClick={handleRetry}
                  className="py-2 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 border border-white/20 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry</span>
                </button>
              </div>
            )}

            {/* Center Overlay Play Button before playback starts */}
            {!hasStarted && !hasError && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleStartPlayback();
                }}
                className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white/50 group/btn focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                aria-label="Play Introduction Video"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
              </button>
            )}

            {/* Completion Overlay */}
            {isEnded && !hasError && (
              <div
                aria-live="polite"
                className="absolute inset-0 z-30 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-5 text-center transition-all duration-300 animate-in fade-in"
              >
                <h4 className="text-base sm:text-lg font-bold text-white tracking-wide mb-4">
                  Thanks for watching.
                </h4>
                <button
                  onClick={handleReplay}
                  className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 border border-white/20 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Replay Introduction</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Caption Label below video */}
      <div className="mt-3 flex items-center justify-center gap-2 text-indigo-950 font-extrabold text-xs sm:text-sm tracking-wide">
        <Play className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
        <span>Play to know more about me</span>
      </div>

      {/* TRUST PANEL: "Why watch this introduction?" */}
      <div className="mt-4 w-full p-4 sm:p-5 rounded-2xl aurora-glass border border-white/80 shadow-md">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
            Why watch this introduction?
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {trustHighlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-2 p-2 rounded-xl border text-[11px] sm:text-xs font-semibold text-slate-800 transition-all cursor-default ${item.color}`}
              >
                <IconComp className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
